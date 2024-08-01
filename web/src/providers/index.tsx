"use client";
import { ThirdwebProvider } from "thirdweb/react";
import ReactQueryProvider from "./reactQuery";
import PermalinkController from "./permalink";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <ReactQueryProvider>
        <PermalinkController />
        {children}
      </ReactQueryProvider>
    </ThirdwebProvider>
  );
}
