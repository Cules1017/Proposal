require("dotenv").config()
require("@nomiclabs/hardhat-ethers")
require("hardhat-deploy")

const key = '';
// module.exports = {
//   solidity: {
//     version: '0.8.9',
//     //defaultNetwork: 'sepolia',
//     // networks: {
//     //   hardhat: {},
//     //   goerli: {
//     //     url: 'https://rpc.ankr.com/eth_sepolia',
//     //     accounts: [`0x${process.env.PRIVATE_KEY}`]
//     //   }
//     // },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 1000000,
//       },
//     },
//     mocha: {
//       timeout: 90000,
//     },
//     networks: {
//       hardhat: {
//         initialBaseFeePerGas: 0,
//         blockGasLimit: 18800000,
//       },
//       palm_testnet: {
//         url: `https://palm-testnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//         accounts: [`0x` + process.env.PRIVATE_KEY],
//         gasPrice: 1000,
//         saveDeployments: true,
//         deploy: ["scripts/"],
//       },
//       palm_mainnet: {
//         url: `https://palm-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//         accounts: [`0x` + process.env.PRIVATE_KEY],
//         gasPrice: 1000,
//         saveDeployments: true,
//         deploy: ["scripts/"],
//       },
//     },
//     // settings: {
//     //   optimizer: {
//     //     enabled: true,
//     //     runs: 200,
//     //   },
//     // },
//     namedAccounts: {
//       deployer: 0
//     },
//   },
// };
module.exports = {
  solidity: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000000,
    },
  },
  mocha: {
    timeout: 90000,
  },
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      blockGasLimit: 18800000,
    },
    sepolia: {
      url: 'https://rpc.ankr.com/eth_sepolia',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    palm_testnet: {
      url: `https://sepolia.infura.io/v3/b16f4fbc19d349f38fb50eabf865094c`,//${process.env.INFURA_API_KEY}
      accounts: [`0x11e09c1a268c7a40dcd8dc833ded476b2ec0ceeff86496488908212bcb42db1c` ],//+ process.env.PRIVATE_KEY
      gasPrice: 1000,
      saveDeployments: true,
      deploy: ["scripts/"],
    },
    palm_mainnet: {
      url: `https://palm-mainnet.infura.io/v3/b16f4fbc19d349f38fb50eabf865094c`,//${process.env.INFURA_API_KEY}
      accounts: [`0x11e09c1a268c7a40dcd8dc833ded476b2ec0ceeff86496488908212bcb42db1c` ],//+ process.env.PRIVATE_KEY
      gasPrice: 1000,
      saveDeployments: true,
      deploy: ["scripts/"],
    },
  },
  namedAccounts: {
    deployer: 0
  },
}
