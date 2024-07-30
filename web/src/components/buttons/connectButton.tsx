import { thirdwebClient } from "@/providers/thirdwebClient";
import { ConnectButton as ThirdWebButton } from "thirdweb/react";
import { metadata } from "@/app/layout";
import { config } from "@/config";

export default function ConnectButton() {
  //   return (
  //     <div className="flex items-center justify-start gap-2 rounded-lg bg-neutral-100 px-[15px] py-2">
  //       <div className="text-sm font-bold text-stone-950">Connect Wallet</div>
  //     </div>
  //   );

  return (
    <ThirdWebButton
      client={thirdwebClient}
      chain={config.chains.superposition.testnet}
      appMetadata={{
        name: metadata.title as string,
        url: metadata.metadataBase?.href,
        description: metadata.description!,
        logoUrl: metadata.metadataBase + "/images/logo.svg",
      }}
      accountAbstraction={{
        chain: config.chains.superposition.testnet,
        sponsorGas: true,
      }}
    />
  );
}
