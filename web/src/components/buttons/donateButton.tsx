"use client";
import { thirdwebClient } from "@/providers/thirdwebClient";
import { useStreamStore } from "@/stores/streamStore";
import { useUserStore } from "@/stores/userStore";
import { useActiveAccount, useConnectModal } from "thirdweb/react";

export default function DonateButton() {
  const account = useActiveAccount();
  const { connect, isConnecting } = useConnectModal();
  const selectedStream = useStreamStore((s) => s.selectedStream);
  const incrementDonationClicks = useUserStore(
    (s) => s.incrementDonationClicks,
  );
  const handleClick = () => {
    if (account) {
      incrementDonationClicks(selectedStream.hash);
    } else {
      connect({ client: thirdwebClient });
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={isConnecting}
      className="inline-flex h-[69px] shrink grow basis-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-neutral-100 px-5 py-[25px]"
    >
      <div className="text-xl font-bold text-stone-950">❤️ Donate!</div>
    </button>
  );
}
