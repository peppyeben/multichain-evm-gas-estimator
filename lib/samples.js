// Import the 'estimateGas' function from the gas estimation module
const { estimateGas } = require("./gasEstimation");

// Sample transaction data for a token balance inquiry
// Read function with parameters/works with write too.
const txData2 = {
    from: "0x9876543210987654321098765432109876543210", // Sender address
    to: "0xfedcba9876543210fedcba9876543210fedcba98", // Token contract address
    value: null, // Amount of ETH to send (not applicable)
    data: {
        functionName: "balanceOf", // Smart contract function name
        inputs: [
            {
                type: "address", // Input parameter type
            },
        ],
        functionParams: ["0x4cbe44F6Ef8a970418f3da3c9E73D8A48eE5Ea3F"], // Input parameter value
        encoded: null, // Encoded transaction data (to be filled later)
    },
};

// Estimate gas for the token balance inquiry transaction on the Polygon network
estimateGas("polygon", process.env.INFURA_API_KEY, txData2)
    .then((result) => {
        console.log(result); // Log the gas estimation result
    })
    .catch((error) => {
        console.error("Error:", error.message); // Log any errors that occur during gas estimation
    });

// Sample transaction data for querying token decimals
const txData = {
    from: "0x9876543210987654321098765432109876543210", // Sender address
    to: "0xfedcba9876543210fedcba9876543210fedcba98", // Token contract address
    value: null, // Amount of ETH to send (not applicable)
    data: {
        functionName: "decimals", // Smart contract function name
        inputs: null, // No input parameters for this function call
        functionParams: null, // No input parameter values for this function call
        encoded: null, // Encoded transaction data (to be filled later)
    },
};

// Estimate gas for the token decimals inquiry transaction on the Polygon network
// Read function without parameters/works with write too.
estimateGas("polygon", process.env.INFURA_API_KEY, txData)
    .then((result) => {
        console.log(result); // Log the gas estimation result
    })
    .catch((error) => {
        console.error("Error:", error.message); // Log any errors that occur during gas estimation
    });

// Sample transaction data for sending 1 ETH to a recipient

const txData3 = {
    from: "0x9876543210987654321098765432109876543210", // Sender address
    to: "0xfedcba9876543210fedcba9876543210fedcba98", // Recipient address
    value: "1", // Amount of ETH to send (in ETH)
};

// Estimate gas for the ETH transfer transaction on the Polygon network, specifying gas unit as Gwei
estimateGas("polygon", process.env.INFURA_API_KEY, txData3, "gwei")
    .then((result) => {
        console.log(result); // Log the gas estimation result
    })
    .catch((error) => {
        console.error("Error:", error.message); // Log any errors that occur during gas estimation
    });
