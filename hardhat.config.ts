import { HardhatUserConfig, task } from "hardhat/config";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const API_KEY = process.env.API_KEY || '';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    kovan: {
      url: "https://kovan.infura.io/v3/" + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    gorli: {
      url: "https://goerli.infura.io/v3/" + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};

export default config;
