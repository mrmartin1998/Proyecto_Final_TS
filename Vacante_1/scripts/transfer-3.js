// validator-node a non-validator-node-1
const { ethers } = require("hardhat");

async function main() {
    const privateKey = '0xd34ac3adfc1925ef0995a002e7d9e086e6a4953258ccd2814ed2e62d398073b5'; // Clave privada de validator-node
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8542");
    const wallet = new ethers.Wallet(privateKey, provider);

    const contractAddress = '0x0547D19DDf470c2E3F3E47f3e2A8fEe134ee45DB';
    const TransactionRecorder = await ethers.getContractFactory("TransactionRecorder");
    const contract = TransactionRecorder.attach(contractAddress).connect(wallet);

    const receiverAddress = '0x88c86f37bf70f79a770bc59a5b486dac66c28940'; // non-validator-node-1

    const transactionResponse = await contract.sendEther(
        receiverAddress,
        'Transfer 3: validator-node to non-validator-node-1',
        { value: ethers.utils.parseEther("0.1"), gasLimit: 100000 }
    );

    console.log('Transaction hash:', transactionResponse.hash);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
