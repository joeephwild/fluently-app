const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FluentAccount", function () {
  let account;

  //Deploy contract before running the test
  beforeEach(async () => {
    const FluentAccount = await ethers.getContractFactory("FluentAccount");
    account = await FluentAccount.deploy("https://ipfs.thirdwebcdn.com/ipfs/bafybeid5d376tqr6q7zgpxcw3v5hzvadgebcix6xqct6rrhnpr2anayyji");
    await account.deployed();
  });

  it("should create an account and retrieve all users", async function () {
    const tokenUri =
      "https://ipfs.thirdwebcdn.com/ipfs/bafybeid5d376tqr6q7zgpxcw3v5hzvadgebcix6xqct6rrhnpr2anayyji";
    const language = "English";
    account.createAccount(tokenUri, language);

    // Retrieve all users and ensure the created account is present
    const allUsers = await account.getAllUsers();
    expect(allUsers.length).to.equal(1);
    expect(allUsers[0].tokenUri).to.equal(tokenUri);
    expect(allUsers[0].language).to.equal(language);
  });
});
