require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan reflect mad assume good opera flat general'; 
let testAccounts = [
"0xc4e629a057e370490d140c7ce38957b554e9c346a42d5e6a374bded3829f6ef7",
"0xc3165032c3a47009210dac95ad639a502e0de1f56bd3b4c764bdc85667a9b619",
"0xf8ab8bb7fc1237ed8da50576ae8d52b4638e437fa7d53ae6cd06153211a48327",
"0xb60b00d2f5b48047093823d0272872a293dfe82a3bf63a33e53752e3c4077ea8",
"0xc75279bbcf37bd8c22a68209606335102fa63b977bc424590834adde1f41e372",
"0xc1f698a2277323bd0fdf0e50b415d46789246cd361b6f53691fce0ee4ffc03de",
"0xa4fc92c5084731e38b7c938b0b101abed418538a29713add6cb2e5c9628637fc",
"0xe1fd8e4d390727901b237c9d5cb9ba4027ed08713ad048e35f9b944f6a2eb066",
"0xae6e952d67e063efb9060e390f64b7c31ce4306b1b3c1e77452952e7d8f2c4c9",
"0x8bc05a2f61e24757c9f5bb14767dc234a6b4e4be3c4dc0bebfdfeda1483bad3f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
