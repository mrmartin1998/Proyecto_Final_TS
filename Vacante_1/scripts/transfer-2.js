// non-validator-node-2 a non-validator-node-1
const { ethers } = require("hardhat");

async function main() {
    const privateKey = '0x2bafa85417273ecf365cb6a02092182d9162d1b2bb222f9c65482c75d67646ca'; // Clave privada de non-validator-node-2
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8542");
    const wallet = new ethers.Wallet(privateKey, provider);

    const contractAddress = '0x0547D19DDf470c2E3F3E47f3e2A8fEe134ee45DB'; // Dirección del contrato TransactionRecorder
    const TransactionRecorder = await ethers.getContractFactory("TransactionRecorder");
    const contract = TransactionRecorder.attach(contractAddress).connect(wallet);

    const receiverAddress = '0x88c86f37bf70f79a770bc59a5b486dac66c28940'; // non-validator-node-1

    const transactionResponse = await contract.sendEther(
        receiverAddress,
        'Transfer 2: non-validator-node-2 to non-validator-node-1',
        { value: ethers.utils.parseEther("0.1"), gasLimit: 100000 }
    );

    console.log('Transaction hash:', transactionResponse.hash);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
