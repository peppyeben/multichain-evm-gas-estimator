const { start } = require("./init");
const { encodeTransactionData } = require("./encodeContractFunction");

/**
 * Estimate gas cost for a transaction on EVM Networks.
 * @param {string} chain - The Ethereum network chain (e.g., "mainnet", "polygon").
 * @param {string} InfuraAPIKey - The Infura API key for accessing EVM networks.
 * @param {object} [txDetails=null] - Transaction details object.
 * @param {string} [unit='wei'] - Gas unit to return ('wei', 'gwei', 'ether').
 * @returns {number} The estimated gas cost in the specified unit.
 * @throws {Error} If chain, InfuraAPIKey, or required transaction details are not provided.
 */
async function estimateGas(
    chain,
    InfuraAPIKey,
    txDetails = null,
    unit = "wei"
) {
    try {
        // Initialize Web3 instance
        const web3 = start(InfuraAPIKey, chain);

        // Validate inputs
        if (!chain) {
            throw new Error("Chain not specified");
        }
        if (!InfuraAPIKey) {
            throw new Error("Infura API Key not provided");
        }
        if (!txDetails) {
            throw new Error("Transaction details not provided");
        }
        if (!txDetails.from) {
            throw new Error("Sender address ('from') not provided");
        }
        if (!txDetails.to) {
            throw new Error("Receiver address ('to') not provided");
        }

        // Build transaction object
        const txObject = {
            from: txDetails.from,
            to: txDetails.to,
            value:
                txDetails.value != null
                    ? web3.utils.toWei(String(txDetails.value), "ether")
                    : "0",
            data: "0x", // Empty data for simple value transfers
        };

        // If transaction involves a smart contract function call, encode function data
        if (txDetails.data && txDetails.data.functionName) {
            txObject.data = await encodeTransactionData(
                txDetails.data.functionName,
                txDetails.data.functionParams || null,
                txDetails.data.inputs || null,
                InfuraAPIKey,
                chain
            );
        }

        // Estimate gas cost
        const gasEstimation = await web3.eth.estimateGas(txObject);

        // Convert gas estimation to specified unit
        return unit === "wei"
            ? Number(gasEstimation)
            : Number(web3.utils.fromWei(String(gasEstimation), unit));
    } catch (error) {
        throw error;
    }
}

module.exports = { estimateGas };
