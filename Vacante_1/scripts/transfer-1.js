// Script transfer-1.js: non-validator-node-1 a non-validator-node-2
const { ethers } = require("hardhat");

async function main() {
    // Clave privada de non-validator-node-1
    const privateKey = '0xe2c0aca545434ae69acb0e54c01b50d95bcf0ac0ab5e78301c886cfd5d2111b3';
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8542");
    const wallet = new ethers.Wallet(privateKey, provider);

    // Dirección del contrato TransactionRecorder desplegado
    const contractAddress = '0x0547D19DDf470c2E3F3E47f3e2A8fEe134ee45DB';

    const TransactionRecorder = await ethers.getContractFactory("TransactionRecorder");
    const contract = TransactionRecorder.attach(contractAddress).connect(wallet);

    // Dirección del receptor (non-validator-node-2)
    const receiverAddress = '0x492732b283dfc34a2daa06f32e3aa4fb00562ec3';

    // Enviar Ether
    try {
        const transactionResponse = await contract.sendEther(
            receiverAddress,
            'Transfer 1: non-validator-node-1 to non-validator-node-2',
            {
                value: ethers.utils.parseEther("0.1"),
                gasLimit: 100000 // Un límite de gas estimado
            }
        );

        console.log('Transaction hash:', transactionResponse.hash);
    } catch (error) {
        console.error('Error al enviar la transacción:', error);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
