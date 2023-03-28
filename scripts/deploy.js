const hre = require("hardhat");

async function main() {
  const UntitledTokens = await hre.ethers.getContractFactory("UntitledTokens");
  const untitled_tokens = await UntitledTokens.deploy();

  await untitled_tokens.deployed();

  console.log("UntitledTokens deployed to:", untitled_tokens.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Deployment Address: 0x30424a385997C6d61C40294944e6Ea3b245edab7