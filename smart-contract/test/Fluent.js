const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FLUENTOKEN", function () {
  let token;

  //Deploy contract before running the test
  beforeEach(async () => {
    const FLUENTOKEN = await ethers.getContractFactory("FLUENTOKEN");
    token = await FLUENTOKEN.deploy();
    await token.deployed();
  });

  it("Should have name, symbol and decimal", async function () {
    // Check that the token name is "FLUENTOKEN"
    expect(await token.name()).to.equal("FLUENTOKEN");
    // Check that the token symbol is "FTK"
    expect(await token.symbol()).to.equal("FTK");
    // Check that the token has 18 decimal places
    expect(await token.decimals()).to.equal(18);
  });

  it("Should distribute tokens to recipients", async function () {
    // Generate two random Ethereum addresses to use as recipients
    const recipient1 = ethers.Wallet.createRandom().address;
    const recipient2 = ethers.Wallet.createRandom().address;
    // Add the recipients to an array
    const recipients = [recipient1, recipient2];

    // Call the distributeToken function to distribute tokens to the recipients
    await token.distributeToken(recipients);

    // Check that recipient1 received 0.1 tokens
    expect(await token.balanceOf(recipient1)).to.equal("100000000000000000");
    // Check that recipient2 received 0.1 tokens
    expect(await token.balanceOf(recipient2)).to.equal("100000000000000000");
  });
});
