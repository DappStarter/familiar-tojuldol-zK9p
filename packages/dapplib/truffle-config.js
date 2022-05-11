require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid arena fog sugar noodle ribbon remind mistake heavy problem boil test'; 
let testAccounts = [
"0x0025ed73e37fd7cecb92d6fab009f7960ae1450ec4f6d995ee8f77a7e68cbc54",
"0xcfc23e84975393268bfb25a75704ffeb89b675adced065fe2f7dcd41be451c31",
"0xef21dacffa69b5cc88d18ed52fd8ca3dd36ded282992421862ee21a2f26c480f",
"0xb7b19c9534de1c7ad13b762eed3edd36d940e61b70bdf3c6e9f19c334ad5fa3e",
"0x9a4bdcdbce4422713793c169754d660b99cbae138817c12a19a206755b616a32",
"0x75122079ac7d82642e717bb472f25d53f4aecb7275939b187d7e8bc86060ff85",
"0x456659284f3f0c590f6db2c9a7e80d9944824a2ec833b21aa406460f052c49af",
"0xa495defa08f11dfee4ac63a7af58c306f7b39b1d88c8f8e1bc0b98657bcea775",
"0x50c20c380cfdfaa1be3e730b51ede59099e5b7f6d9b1e403c8e8bde0194bbc6c",
"0xbe678074f35f8bc8e5e36ddf5f586886746488fc9492ef96378c30799c738822"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


