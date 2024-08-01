"use client";
import { useStreamStore } from "@/stores/streamStore";
import { useUserStore } from "@/stores/userStore";
import clsx from "clsx";
import { useState } from "react";
import {
  useActiveAccount,
  useConnectModal,
  useIsAutoConnecting,
} from "thirdweb/react";
import { useCoolMode } from "@/hooks/useCoolMode";
import FavedIcon from "#/images/icons/faved.svg";
import Loader from "../loader";
import { config } from "@/config";

export default function DonateButton() {
  const account = useActiveAccount();
  const { connect, isConnecting: isConnectingModal } = useConnectModal();
  const isAutoConnecting = useIsAutoConnecting();
  const selectedStream = useStreamStore((s) => s.selectedStream);
  const incrementDonationClicks = useUserStore(
    (s) => s.incrementDonationClicks,
  );
  const [isClicked, setIsClicked] = useState(false);
  const isConnecting = isConnectingModal || isAutoConnecting;
  const handleClick = () => {
    if (account) {
      setIsClicked(true);
      incrementDonationClicks(selectedStream.hash);
      setTimeout(() => {
        setIsClicked(false);
      }, 100);
    } else {
      connect({
        client: config.thirdweb.client,
        chain: config.thirdweb.chain,
        appMetadata: config.thirdweb.appMetadata,
        accountAbstraction: config.thirdweb.accountAbstraction,
      });
    }
  };
  const coolRef = useCoolMode(FavedIcon.src, isConnecting || !account);

  return (
    <button
      ref={coolRef}
      onClick={handleClick}
      disabled={isConnecting}
      className={clsx(
        isConnecting && "pointer-events-none",
        isClicked && "hover:scale-90",
        "relative inline-flex h-[69px] shrink grow basis-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-neutral-100 px-5 py-[25px] transition-transform duration-300 hover:scale-110",
      )}
    >
      {isConnecting ? (
        <Loader />
      ) : (
        <div className="text-xl font-bold text-stone-950">❤️ Donate!</div>
      )}
    </button>
  );
}
