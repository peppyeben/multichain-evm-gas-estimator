### Gas Estimation NPM Package

This npm package provides functionality to estimate gas costs for transactions on Ethereum Virtual Machine (EVM) networks such as the Ethereum mainnet and Polygon. The package offers a versatile `estimateGas` function that allows users to estimate the gas cost of various transactions.

#### `estimateGas` Function:

The `estimateGas` function is the core functionality of this npm package. It accepts the following parameters:

- `chain` (string): The Ethereum network chain (e.g., "mainnet", "polygon").
- `InfuraAPIKey` (string): The Infura API key for accessing EVM networks.
- `txDetails` (object, optional): Transaction details object containing information about the transaction to be estimated.
- `unit` (string, optional): Gas unit to return ('wei', 'gwei', 'ether').

It returns the estimated gas cost of the transaction in the specified unit.

#### Sample Usage:

The package includes sample usage of the `estimateGas` function for various transaction scenarios:

1. **Token Balance Inquiry:**
   
   Estimating gas for querying token balances from a smart contract. Users provide the sender address, token contract address, and other necessary parameters.

2. **Token Decimals Inquiry:**
   
   Estimating gas for querying the number of decimals in a token smart contract. Users provide the sender address, token contract address, and other necessary parameters.

3. **ETH Transfer:**
   
   Estimating gas for sending a certain amount of ETH from one address to another. Users provide the sender address, recipient address, and the amount of ETH to be sent.

#### Readme.md:

Here's how you can generate a Readme.md file for this npm package:

```markdown
# Gas Estimation NPM Package

## Introduction

This npm package provides functionality to estimate gas costs for transactions on Ethereum Virtual Machine (EVM) networks such as the Ethereum mainnet and Polygon.

## Installation

To install the package, use npm:

```bash
npm install multichain-evm-gas-estimator
```

## Usage

```javascript
const { estimateGas } = require("multichain-evm-gas-estimator");

// Sample transaction data for a token balance inquiry
const txData = {
    from: "0xSenderAddress",
    to: "0xTokenContractAddress",
    value: null,
    data: {
        functionName: "balanceOf",
        inputs: [{ type: "address" }],
        functionParams: ["0xRecipientAddress"],
        encoded: null,
    },
};

// Estimate gas for the token balance inquiry transaction on the Polygon network
estimateGas("polygon", "InfuraAPIKey", txData)
    .then((result) => {
        console.log("Gas Estimation:", result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
```

## Functionality

The package allows users to estimate gas costs for various transaction scenarios, including:

- Token balance inquiries
- Token decimals inquiries
- ETH transfers
- Other advanced read & write transactions

Users provide transaction details such as sender address, recipient address, token contract address, and other necessary parameters to estimate gas costs accurately.

Check usage in lib/samples.js

```
