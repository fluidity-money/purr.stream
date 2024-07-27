"use client";
import { useEffect, useState } from "react";
import { useSendTransaction } from "thirdweb/react";
import { prepareContractCall, toUnits } from "thirdweb";
import { config } from "@/config";
import { contract } from "@/providers/thirdwebClient";
import { useStreamStore } from "@/stores/streamStore";

export default function DonateButton() {
  const [isPressed, setIsPressed] = useState(false);
  const selectedStream = useStreamStore((s) => s.selectedStream);
  const { mutateAsync: sendTransaction } = useSendTransaction();

  useEffect(() => {
    if (isPressed) {
      const timer = setTimeout(() => {
        setIsPressed(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPressed]);

  const handleDonation = async () => {
    setIsPressed(true);
    try {
      const tx = prepareContractCall({
        contract,
        method: config.contracts.donation.abi[2].name,
        params: [`0x${selectedStream.hash}`],
        value: toUnits("0.005", 18),
      });

      const transactionResult = await sendTransaction(tx as any);
      console.log(transactionResult);
    } catch (e) {
      console.error(e instanceof Error ? e.message : "Unknown error");
    }
  };

  return (
    <div
      onClick={handleDonation}
      className="inline-flex h-[69px] shrink grow basis-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-neutral-100 px-5 py-[25px]"
    >
      <div className="text-xl font-bold text-stone-950">❤️ Donate!</div>
      {isPressed && (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className="absolute -top-10 rounded-md bg-tint px-4 py-2 text-sm font-medium text-white">
          gmeow!
        </div>
      )}
    </div>
  );
}
