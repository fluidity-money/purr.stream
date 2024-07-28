import { config } from "@/config";
import { createThirdwebClient } from "thirdweb";
import { getContract } from "thirdweb";

//

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_ID;
const net = process.env.NEXT_PUBLIC_NET as "mainnet" | "testnet" | undefined;

if (!clientId) throw new Error("No client ID provided");
if (!net) throw new Error("No net provided");
if (!config.contracts.donation.address)
  throw new Error("No contract address provided");

export const thirdwebClient = createThirdwebClient({
  clientId: clientId,
});

export const contract = getContract({
  client: thirdwebClient,
  chain: config.chains.superposition[net],
  address: config.contracts.donation.address,
  abi: config.contracts.donation.abi,
});
