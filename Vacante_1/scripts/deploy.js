// Importing necessary Hardhat functionality
const { ethers } = require("hardhat");

async function main() {
    // Getting the contract factory for the TransactionRecorder contract
    const TransactionRecorder = await ethers.getContractFactory("TransactionRecorder");

    // Deploying the contract
    const transactionRecorder = await TransactionRecorder.deploy();
    await transactionRecorder.deployed();

    console.log("TransactionRecorder contract deployed to:", transactionRecorder.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
