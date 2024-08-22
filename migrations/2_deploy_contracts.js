// SPDX-License-Identifier: MIT
const SmartExchangeRouter = artifacts.require('./SmartExchangeRouter.sol');

// Define the addresses for the various tokens and routers
const old3pool = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const oldusdcpool = '0x4100000000000000000000000000000000000000';
const routerV2 = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const routerV1 = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const routerV3 = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const usdtToken = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const usdjToken = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const tusdToken = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const wtrxToken = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';
const psmUsddToken = '0x332124D9aCCbCd2FFD3Be081Cfb36E959f5969c6';

module.exports = function (deployer, network) {
  // Deploy the SmartExchangeRouter contract with the specified parameters
  deployer.deploy(
    SmartExchangeRouter,
    routerV2,
    routerV1,
    psmUsddToken,
    routerV3,
    wtrxToken
  ).then(() => {
    // Optional: Add any post-deployment logic here, such as logging the deployed address
    console.log(`SmartExchangeRouter deployed at address: ${SmartExchangeRouter.address}`);
  });
};