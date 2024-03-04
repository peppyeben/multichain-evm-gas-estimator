const { start } = require("./init");

async function encodeTransactionData(
    functionName,
    functionParams,
    inputs,
    InfuraAPIKey,
    chain
) {
    const web3 = start(InfuraAPIKey, chain);

    let encodedData;

    if (functionParams && inputs) {
        encodedData = web3.eth.abi.encodeFunctionCall(
            {
                name: functionName,
                type: "function",
                inputs,
            },
            functionParams
        );
    } else {
        encodedData = web3.eth.abi.encodeFunctionSignature({
            name: functionName,
            type: "function",
        });
    }
    return encodedData;
}

module.exports = { encodeTransactionData };
