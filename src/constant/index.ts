import FlentAccountAbi from "./FluentAccount.json";
import FluentTokenAbi from "./FLUENTOKEN.json";
import { ethers } from "ethers";

export const tokenAddress = "0x7cc168Ed905f1160C6AfcFf64FA691f5462a13CA";
export const tokenAccount = "0x86Ae062a625e1950009D6f3863199282C196F528";

export const accountAbi = FlentAccountAbi.abi;
export const tokenAbi = FluentTokenAbi.abi;

export default function connectWithContract() {
    // Check if the web3provider is available in the window object
    if (!window.ethereum) {
      throw new Error("Web3 provider not found");
    }
    
    // Creating a new web3 provider with window.ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    // Getting the signer
    const signer = provider.getSigner();
  
    // Creating a new contract factory with the signer, address and ABI
    const contract = new ethers.Contract(tokenAccount, accountAbi, signer);
  
    return contract;
  }
