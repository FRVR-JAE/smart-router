// smart-router/testRouters.ts



import TronWeb from 'tronweb';
import routerV1Abi from '../smart-router/build/contracts/RouterV1Mock.json';
import routerV2Abi from '../smart-router/build/contracts/RouterV2Mock.json';
import routerV3Abi from '../smart-router/build/contracts/RouterV3Mock.json';

// Initialize TronWeb instance
const tronWeb = new TronWeb({
    fullHost: 'https://api.tronstack.io', // Replace with your Tron node
    privateKey: 'YOUR_PRIVATE_KEY', // Replace with your private key
});

// Function to test a router
async function testRouter(routerAbi: any, routerAddress: string) {
    const router = await tronWeb.contract(routerAbi.abi, routerAddress);
    
    try {
        const result = await router.methods.swapExactTokensForTokens(
            tronWeb.toSun(1), // Amount in Sun
            tronWeb.toSun(0), // Amount out minimum
            ['TOKEN_ADDRESS_1', 'TOKEN_ADDRESS_2'], // Path
            'YOUR_ADDRESS', // Recipient address
            Math.floor(Date.now() / 1000) + 60 * 10 // Deadline
        ).send({
            feeLimit: 1000000000, // Set a fee limit for the transaction
            callValue: 0, // No TRX sent with the transaction
            shouldPollResponse: true // Wait for the transaction to be confirmed
        });

        console.log(`Transaction successful on ${routerAddress}:`, result);
    } catch (error) {
        console.error(`Error on ${routerAddress}:`, error);
    }
}

// Main function to test routers
async function main() {
    const routerV1Address = 'ROUTER_V1_ADDRESS'; // Replace with actual address
    const routerV2Address = 'ROUTER_V2_ADDRESS'; // Replace with actual address
    const routerV3Address = 'ROUTER_V3_ADDRESS'; // Replace with actual address

    await testRouter(routerV1Abi, routerV1Address);
    await testRouter(routerV2Abi, routerV2Address);
    await testRouter(routerV3Abi, routerV3Address);
}

// Execute the main function
main().catch(error => {
    console.error('Error in main execution:', error);
});