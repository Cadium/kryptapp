//https://eth-goerli.alchemyapi.io/v2/ts1gJY3Z-ngaI2Eg9Cq--t0jswVr_tY4

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        goerli: {
            url: "https://eth-goerli.alchemyapi.io/v2/ts1gJY3Z-ngaI2Eg9Cq--t0jswVr_tY4",
            accounts: [
                "510a27d9f26a0314743daf93ad800a87ef9b59b385e873454439d0fca547ea09",
            ],
        },
    },
};