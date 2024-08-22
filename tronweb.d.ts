// smart-router/tronweb.d.ts

declare module 'tronweb' {
    const TronWeb: any; // Declare TronWeb as any
    export default TronWeb;

    // Class definition for TronWeb
    export class TronWeb {
        constructor(options: { fullHost: string; privateKey: string });

        trx: {
            getTransaction(txId: string): Promise<any>;
            // Add more methods as needed
        };

        address: {
            toHex(address: string): string;
        };

        toSun(amount: number): number; // Convert to Sun
        fromSun(amount: number): number; // Convert from Sun

        contract(abi: any, address: string): any; // Contract method

        static createAccount(): Promise<{ address: string; privateKey: string }>;
        // Add more methods and properties as needed
    }
}