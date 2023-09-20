require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "SEPOLIA_ALCHEMY_URL",
      accounts: ["SEPOLIA_ACCOUNT"],
    },
  },
  etherscan: {
    apiKey: "ETHERSCAN_API_KEY",
  },
};
