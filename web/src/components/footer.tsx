"use client";

import Modal from "@/components/modal";
import Disclaimer from "@/components/disclaimer";
import { useState } from "react";
import Script from "next/script";
import { config } from "@/config";
interface CrateConfig {
  server: string;
  channel: string;
  location?: string[];
}

declare class Crate {
  constructor(config: CrateConfig);
}
export default function Footer() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <div className="relative mt-[15px] flex h-[59px] w-full max-w-screen-xl items-center justify-between">
      <div className="flex h-[31px] items-center justify-between gap-4">
        <div
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[23px] py-1.5"
          onClick={() => setIsDisclaimerOpen(true)}
        >
          <div className="text-xs font-bold text-neutral-100">︎ℹ️</div>
          <div className="text-sm font-bold text-neutral-100 underline">
            Disclaimer
          </div>
        </div>
        <div className="flex items-center justify-start gap-1 rounded-[23px] py-1.5">
          <div className="text-xs font-bold text-neutral-100">❓</div>
          <div className="text-sm font-bold text-neutral-100 underline">
            Tutorial
          </div>
        </div>
      </div>

      <Modal isOpen={isDisclaimerOpen} setIsOpen={setIsDisclaimerOpen}>
        <Disclaimer />
      </Modal>
      <Script
        src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3"
        async
        defer
        onReady={() => {
          new Crate(config.discord);
        }}
      />
    </div>
  );
}
