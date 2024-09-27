"use client";
import { ThirdwebProvider } from "thirdweb/react";
import ReactQueryProvider from "./reactQuery";
import PermalinkController from "./permalink";
import { Suspense } from "react";
import ContextInjector from "./contextInjector";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <ReactQueryProvider>
        <Suspense>
          <PermalinkController />
        </Suspense>
        <ContextInjector />
        {children}
      </ReactQueryProvider>
    </ThirdwebProvider>
  );
}
