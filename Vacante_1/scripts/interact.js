// Script transfer-1.js: non-validator-node-1 a non-validator-node-2
const { ethers } = require("hardhat");

async function main() {
    // Reemplaza con la clave privada de non-validator-node-1
    const privateKey = 'PRIVATE_KEY_OF_NON_VALIDATOR_NODE_1';
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8542");
    const wallet = new ethers.Wallet(privateKey, provider);

    const contractAddress = '0xCA7671AcAE5548354d2759d939ae5583E8944542'; // Dirección del contrato

    const TransactionRecorder = await ethers.getContractFactory("TransactionRecorder");
    const contract = TransactionRecorder.attach(contractAddress).connect(wallet);

    const receiverAddress = '0x492732b283dfc34a2daa06f32e3aa4fb00562ec3'; // non-validator-node-2

    const transactionResponse = await contract.sendEther(
        receiverAddress,
        'Transfer 1: non-validator-node-1 to non-validator-node-2',
        { value: ethers.utils.parseEther("0.1") }
    );

    console.log('Transaction hash:', transactionResponse.hash);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
