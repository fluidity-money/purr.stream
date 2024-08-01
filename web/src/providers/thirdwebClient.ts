import { config } from "@/config";
import { createThirdwebClient } from "thirdweb";
import { getContract } from "thirdweb";

export const thirdwebClient = createThirdwebClient({
  clientId: config.thirdweb.clientId,
});

export const contract = getContract({
  client: thirdwebClient,
  chain: config.thirdweb.chain,
  address: config.contracts.donation.address,
  abi: config.contracts.donation.abi,
});
