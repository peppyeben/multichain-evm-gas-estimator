// Import the start function from the init module
const { start } = require("./init");

/**
 * Encode transaction data for a smart contract function call.
 * @param {string} functionName - The name of the smart contract function.
 * @param {Array} functionParams - The parameters for the smart contract function call.
 * @param {Array} inputs - The input types for the smart contract function.
 * @param {string} InfuraAPIKey - The Infura API key for accessing the blockchain network.
 * @param {string} chain - The EVM-compatible blockchain network (e.g., "ethereum", "polygon", "bsc").
 * @returns {string} The encoded transaction data.
 */
async function encodeTransactionData(
    functionName,
    functionParams,
    inputs,
    InfuraAPIKey,
    chain
) {
    // Initialize a Web3 instance using the provided Infura API key and blockchain network
    const web3 = start(InfuraAPIKey, chain);

    let encodedData;

    // Check if both functionParams and inputs are provided
    if (functionParams && inputs) {
        // Encode function call data using ABI encoding
        encodedData = web3.eth.abi.encodeFunctionCall(
            {
                name: functionName,
                type: "function",
                inputs,
            },
            functionParams
        );
    } else {
        // If functionParams or inputs is not provided, encode function signature only
        encodedData = web3.eth.abi.encodeFunctionSignature({
            name: functionName,
            type: "function",
        });
    }

    // Return the encoded transaction data
    return encodedData;
}

// Export the encodeTransactionData function to make it accessible to other modules
module.exports = { encodeTransactionData };
