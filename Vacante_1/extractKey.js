const Web3 = require('web3');
const fs = require('fs');

const web3 = new Web3();

const keystorePath = '/home/martin/tokio-school/vacante-1/nodes/validator-node/keys/tokio-school/UTC--2023-11-20T16-59-06Z--26800054-0ecc-df91-ac1e-d90302fadf88';

const password = '123';

const keystore = fs.readFileSync(keystorePath, 'utf8');

let account = web3.eth.accounts.decrypt(JSON.parse(keystore), password);

console.log('Private Key:', account.privateKey);
