const { Web3 } = require("web3");

const networks = {
    eth: "https://mainnet.infura.io/v3/",
    polygon: "https://polygon-mainnet.infura.io/v3/",
    linea: "https://linea-mainnet.infura.io/v3/",
    arb: "https://arbitrum-mainnet.infura.io/v3/",
    op: "https://optimism-mainnet.infura.io/v3/",
    avax: "https://avalanche-mainnet.infura.io/v3/",
    stk: "https://starknet-mainnet.infura.io/v3/",
    celo: "https://celo-mainnet.infura.io/v3/",
    palm: "https://palm-mainnet.infura.io/v3/",
};

function start(apiKey, network) {
    if (!networks[network]) {
        throw new Error("Chain not supported");
    }
    const web3 = new Web3(`${networks[network]}${apiKey}`);

    return web3;
}

module.exports = { start };
