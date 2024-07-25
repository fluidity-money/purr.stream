export const config = {
  chains: {
    superposition: {
      testnet: {
        name: "Superposition Testnet",
        id: 98985,
        nativeCurrency: { name: "Superposition", symbol: "SPN", decimals: 18 },
        rpc: "https://testnet-rpc.superposition.so",
      },
    },
  },
  features: {
    web3: {
      all: true,
    },
  },
};
