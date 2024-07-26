"use client";
import { useEffect, useState } from "react";
import { useSendTransaction, useActiveAccount } from "thirdweb/react";
import { getContract } from "thirdweb";
import { addAdmin } from "thirdweb/extensions/erc4337";
import { config } from "@/config";
import { thirdwebClient } from "@/providers/thirdwebClient";

export default function DonateButton() {
  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    if (isPressed) {
      const timer = setTimeout(() => {
        setIsPressed(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPressed]);

  const handleDonation = () => {
    setIsPressed(true);
  };

  return (
    <div
      onClick={handleDonation}
      className="inline-flex h-[69px] shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-lg bg-neutral-100 px-5 py-[25px]"
    >
      <div className="text-xl font-bold text-stone-950">❤️ Donate!</div>
      {isPressed && (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className="bg-tint absolute -top-10 rounded-md px-4 py-2 text-sm font-medium text-white">
          gmeow!
        </div>
      )}
    </div>
  );
}
