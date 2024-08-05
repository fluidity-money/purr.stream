"use client";

import Modal from "@/components/modal";
import Disclaimer from "@/components/disclaimer";
import { useState } from "react";
import Script from "next/script";
import { config } from "@/config";
import { DisclaimerIndexes } from "@/components/disclaimer";
import clsx from "clsx";
interface CrateConfig {
  server: string;
  channel: string;
  location?: string[];
}

declare class Crate {
  constructor(config: CrateConfig);
}
export default function Footer({ extraStyles }: { extraStyles?: string }) {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [disclaimerIndex, setDisclaimerIndex] = useState<DisclaimerIndexes>(0);

  return (
    <div
      className={clsx(
        extraStyles,
        "relative flex w-full max-w-screen-2xl px-4 md:mt-[15px] md:h-[59px]",
      )}
    >
      <div className="flex h-[31px] flex-1 items-center justify-between gap-4 md:justify-start">
        <div
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[23px] py-1.5"
          onClick={() => {
            setDisclaimerIndex(0);
            setIsDisclaimerOpen(true);
          }}
        >
          <div className="text-xs font-bold text-neutral-100">︎ℹ️</div>
          <div className="text-sm font-bold text-neutral-100 underline">
            Disclaimer
          </div>
        </div>
        <div
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[23px] py-1.5"
          onClick={() => {
            setDisclaimerIndex(1);
            setIsDisclaimerOpen(true);
          }}
        >
          <div className="text-xs font-bold text-neutral-100">❓</div>
          <div className="text-sm font-bold text-neutral-100 underline">
            Tutorial
          </div>
        </div>
      </div>

      <Modal isOpen={isDisclaimerOpen} setIsOpen={setIsDisclaimerOpen}>
        <Disclaimer setIndex={setDisclaimerIndex} index={disclaimerIndex} />
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
