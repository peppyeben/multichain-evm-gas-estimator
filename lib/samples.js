const txData2 = {
    from: "0x9876543210987654321098765432109876543210",
    to: "0xfedcba9876543210fedcba9876543210fedcba98",
    value: null,
    data: {
        functionName: "balanceOf",
        inputs: [
            {
                type: "address",
            },
        ],
        functionParams: ["0x4cbe44F6Ef8a970418f3da3c9E73D8A48eE5Ea3F"],
        encoded: null,
    },
};

estimateGas("polygon", process.env.INFURA_API_KEY, txData2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

const txData = {
    from: "0x9876543210987654321098765432109876543210",
    to: "0xfedcba9876543210fedcba9876543210fedcba98",
    value: null,
    data: {
        functionName: "decimals",
        inputs: null,
        functionParams: null,
        encoded: null,
    },
};

estimateGas("polygon", process.env.INFURA_API_KEY, txData)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

const txData3 = {
    from: "0x9876543210987654321098765432109876543210",
    to: "0xfedcba9876543210fedcba9876543210fedcba98",
    value: "1",
};

estimateGas("polygon", process.env.INFURA_API_KEY, txData3, "gwei")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
