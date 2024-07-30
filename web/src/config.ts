import { abi } from "#/abis/donation";

export const config = {
  chains: {
    superposition: {
      testnet: {
        name: "Superposition Testnet",
        id: 98985,
        nativeCurrency: { name: "Superposition", symbol: "SPN", decimals: 18 },
        rpc: "https://testnet-rpc.superposition.so",
      },
      mainnet: {
        name: "Superposition Mainnet",
        id: 98985,
        nativeCurrency: { name: "Superposition", symbol: "SPN", decimals: 18 },
        rpc: "https://rpc.superposition.so",
      },
    },
  },
  contracts: {
    donation: {
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      abi,
    },
  },
  features: {
    web3: {
      all: true,
      donation: {
        clickUnit: 0.005,
        debounceTime: 800,
      },
    },
    search: false,
  },
};
