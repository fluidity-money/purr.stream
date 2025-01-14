import { abi } from "#/abis/donation";
import { createThirdwebClient } from "thirdweb";
import { getContract } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";

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
      name: "Superposition",
      id: 55244,
      nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
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
const wallets = [
  inAppWallet({
    smartAccount: {
      chain: chains.superposition[net],
      sponsorGas: true,
    },
  }),
  createWallet("io.metamask"),
  createWallet("io.rabby"),
];
const thirdwebClient = createThirdwebClient({
  clientId,
});
const contract = getContract({
  client: thirdwebClient,
  chain: chains.superposition[net],
  address: contractAddress,
  abi,
});

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
      contract,
    },
  },
  features: {
    web3: {
      all: true,
      donation: {
        clickUnit: 0.0001,
        debounceTime: 800,
      },
    },
    search: false,
  },
  thirdweb: {
    clientId,
    client: thirdwebClient,
    chain: chains.superposition[net],
    wallets,
    appMetadata: {
      name: metadata.title as string,
      url: metadata.metadataBase?.href,
      description: metadata.description!,
      logoUrl: metadata.metadataBase + "/images/logo.svg",
    },
  },
};
