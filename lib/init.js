// Importing the Web3 library from the 'web3' package
const { Web3 } = require("web3");

// Object containing network endpoints for different EVM-compatible blockchains
const networks = {
    eth: "https://mainnet.infura.io/v3/", // Ethereum Mainnet
    polygon: "https://polygon-mainnet.infura.io/v3/", // Polygon Mainnet
    linea: "https://linea-mainnet.infura.io/v3/", // Linea Mainnet
    arb: "https://arbitrum-mainnet.infura.io/v3/", // Arbitrum Mainnet
    op: "https://optimism-mainnet.infura.io/v3/", // Optimism Mainnet
    avax: "https://avalanche-mainnet.infura.io/v3/", // Avalanche Mainnet
    stk: "https://starknet-mainnet.infura.io/v3/", // StarkNet Mainnet
    celo: "https://celo-mainnet.infura.io/v3/", // Celo Mainnet
    palm: "https://palm-mainnet.infura.io/v3/", // Palm Mainnet
};

/**
 * Function to initialize a Web3 instance for the specified blockchain network.
 * @param {string} apiKey - Infura API key for accessing the blockchain network.
 * @param {string} network - Name of the blockchain network (e.g., "eth", "polygon").
 * @returns {Web3} Initialized Web3 instance for the specified network.
 * @throws {Error} If the specified network is not supported.
 */
function start(apiKey, network) {
    // Checking if the specified network is supported
    if (!networks[network]) {
        throw new Error("Chain not supported");
    }

    // Creating a new Web3 instance with the endpoint URL and API key
    const web3 = new Web3(`${networks[network]}${apiKey}`);

    // Returning the initialized Web3 instance
    return web3;
}

// Exporting the 'start' function to be used in other modules
module.exports = { start };
