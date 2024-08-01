import { abi } from "#/abis/donation";
import { thirdwebClient } from "./providers/thirdwebClient";

const net = (process.env.NEXT_PUBLIC_NET ?? "testnet") as "mainnet" | "testnet";
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_ID;
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

if (!clientId) throw new Error("No client ID provided");
if (!contractAddress) throw new Error("No contract address provided");
const chains = {
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
};
const metadata = {
  title: "Purr.Stream",
  description: "Donate onchain and support animal welfare",
  metadataBase: new URL("https://purr.stream"),
  keywords: [
    "cat",
    "donate",
    "stream",
    "purr",
    "purr.stream",
    "onchain",
    "animal",
    "welfare",
    "superposition",
    "blockchain",
  ],
};
export const config = {
  metadata,
  discord: {
    server: "1148874308446326866",
    channel: "1264916118079016980",
    location: ["bottom", "left"],
  },
  contracts: {
    donation: {
      address: contractAddress,
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
  thirdweb: {
    clientId,
    client: thirdwebClient,
    chain: chains.superposition[net],
    accountAbstraction: {
      chain: chains.superposition[net],
      sponsorGas: true,
    },
    appMetadata: {
      name: metadata.title as string,
      url: metadata.metadataBase?.href,
      description: metadata.description!,
      logoUrl: metadata.metadataBase + "/images/logo.svg",
    },
  },
};
