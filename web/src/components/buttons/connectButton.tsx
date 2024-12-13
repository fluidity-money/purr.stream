'use client'
import { ConnectButton as ThirdWebButton } from "thirdweb/react";
import { config } from "@/config";

export default function ConnectButton() {
  return (
    <ThirdWebButton
      client={config.thirdweb.client}
      chain={config.thirdweb.chain}
      wallets={config.thirdweb.wallets}
      appMetadata={config.thirdweb.appMetadata}
      accountAbstraction={config.thirdweb.accountAbstraction}
    />
  );
}
