"use client";
import { ThirdwebProvider } from "thirdweb/react";
import ReactQueryProvider from "./reactQuery";
import PermalinkController from "./permalink";
import { Suspense } from "react";
import WalletAddressInserter from "./insertWalletAddress";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <ReactQueryProvider>
        <Suspense>
          <PermalinkController />
        </Suspense>
        <WalletAddressInserter />
        {children}
      </ReactQueryProvider>
    </ThirdwebProvider>
  );
}
