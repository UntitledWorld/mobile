require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/JbuF4QM6bZPjNVhPxhSkdbsJg5slJBtj",
      accounts : ["c247c9f624e1f133497fc9e173903dad7a9cfc12fbfcf8048e65c56e53fea02b"],
    },
  },
  etherscan: {
    apiKey: "8Q3SKYDK17P2G1XICZR68EUKWFN3MTB87E",
  },
};
