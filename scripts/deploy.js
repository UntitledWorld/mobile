import hre from "hardhat";

const UntitledTokens = await hre.ethers.getContractFactory("UntitledTokens");
const untitled_tokens = await UntitledTokens.deploy();

await untitled_tokens.deployed();

console.log("UntitledTokens deployed to:", untitled_tokens.address);
