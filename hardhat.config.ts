import 'hardhat-watcher'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = ''

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBY_PRIVATE_KEY = ''
const MAINNET_PRIVATE_KEY = ''

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  contractSizer: {
    runOnCompile: true
  },
  networks: {
    localhost: {
      gasPrice: 1000000000
    }
    /*
    NOTE: hardhat only builds if these are supplied with valid private keys
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
      gas: 21000000,
      gasPrice: 20 * 1000000000,
      gasMultiplier: 2
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
      gas: 21000000,
      gasPrice: 8000000000,
      gasMultiplier: 2
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
      gas: 100000000,
      gasPrice: 8000000000,
      gasMultiplier: 2
    }
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`],
      gasPrice: 90 * 1000000000,
      gasMultiplier: 2
    }*/
  },
  paths: {
    sources: './contracts/',
    tests: './tests/',
    cache: './cache',
    artifacts: './artifacts'
  },
  watcher: {
    compilation: {
      tasks: ['compile'],
      files: ['./contracts/**/*'],
      verbose: true
    },
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./**/*.test.ts'],
      verbose: true
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 70
    //coinmarketcap: ''
  },
  mocha: {
    timeout: 500000
  }
}
