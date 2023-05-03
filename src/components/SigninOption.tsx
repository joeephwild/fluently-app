import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { ConnectWallet, MetaMask } from "./ButtonIcon";
import { BsExclamation } from "react-icons/bs";
import Link from "next/link";
import { useMetamask, useWalletConnect } from "@thirdweb-dev/react";

<<<<<<< HEAD
const SigninOption = () => {
  const connect = useMetamask();
  const walletConnect = useWalletConnect()
  return (
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab>Wallet</Tab>
        <Tab>Email</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        width="30px"
        bg="#000"
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel textAlign="left">
          <Text fontWeight={400} fontSize={14} ml={0}>
            Sign i by connecting with any of your wallets
          </Text>
          <Flex align="center" gap="10" my="1em">
            <Button
              onClick={() => connect()}
              border="1px solid #FDD835"
              bg="#FBFAF7"
              w="full"
              fontSize={14}
              rightIcon={<MetaMask />}
              _hover={{ bg: "transparent" }}
            >
              MetaMask
            </Button>

            <Button
             onClick={() => walletConnect()}
=======
import {
  useMetamask,
  useAddress,
  ConnectWallet as ConnectWeb3Wallet,
} from "@thirdweb-dev/react";

const SigninOption = () => {
  const address = useAddress();
  const connect = useMetamask();
  return (
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab>Wallet</Tab>
        <Tab>Email</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        width="30px"
        bg="#000"
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel textAlign="center">
          <Text fontWeight={400} fontSize={14} ml={0}>
            Sign in by connecting with any of your wallets
          </Text>
          <Flex align="center" gap="10" my="4em" justifyContent="center">
            {/* <Button
              border="1px solid #FDD835"
              bg="#FBFAF7"
              w="full"
              fontSize={14}
              rightIcon={<MetaMask />}
              _hover={{ bg: "transparent" }}
            >
              MetaMask
            </Button>

            <Button
>>>>>>> 6303730b44d210b62ba505ebd608f48996cbc63f
              border="1px solid #FDD835"
              bg="#FBFAF7"
              w="full"
              fontSize={14}
              rightIcon={<ConnectWallet />}
              _hover={{ bg: "transparent" }}
            >
<<<<<<< HEAD
              ConnectWallet
            </Button>
=======
              <ConnectWeb3Wallet
                btnTitle="Get Started"
                theme="light"
                className="my-custom-class"
              />
            </Button> */}
            <ConnectWeb3Wallet />
>>>>>>> 6303730b44d210b62ba505ebd608f48996cbc63f
          </Flex>
        </TabPanel>
        <TabPanel>
          <Text fontWeight={400} fontSize={14} ml={0}>
            Sign in with Email address
          </Text>
          <Input
            border="1px solid #FFF7D1"
            // w='full'
            my=".8em"
            placeholder="Enter email address"
            fontSize={14}
          />
          <InputGroup>
            <Input
              border="1px solid #FFF7D1"
              // w='full'
              my=".8em"
              placeholder="Enter verification code"
              fontSize={14}
            />
            <InputRightElement w="70px" mt="10px">
              <Link href="">
                <Text as="b" color="#FDD835" fontSize={".8em"}>
                  Get code
                </Text>
              </Link>
            </InputRightElement>
          </InputGroup>
          <Flex align="center">
            <BsExclamation color="#FDD835" />
            <Text fontSize=".7em" color="#000">
              Press ‘get code’ button to receive verification code sent to your
              email address
            </Text>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SigninOption;
