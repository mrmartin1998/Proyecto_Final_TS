require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    development: {
      url: "http://127.0.0.1:8542", // Your RPC URL
      accounts: ["0xe68333422fee9221cda7ff7622fe8ddcf381eb43086ee8f4f1bf46c83e9222fb"], // Private key of the account for deployment
      chainId: 8995, // Your network ID
    },
  },
  solidity: "0.8.0",
};