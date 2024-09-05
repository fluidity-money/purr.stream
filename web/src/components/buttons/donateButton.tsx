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
import useClickAnimation from "@/hooks/useClickAnimation";

export default function DonateButton() {
  const account = useActiveAccount();
  const { connect, isConnecting: isConnectingModal } = useConnectModal();
  const isAutoConnecting = useIsAutoConnecting();
  const selectedStream = useStreamStore((s) => s.selectedStream);
  const incrementDonationClicks = useUserStore(
    (s) => s.incrementDonationClicks,
  );
  const isConnecting = isConnectingModal || isAutoConnecting;
  const { animationStyles, startAnimation } = useClickAnimation(100);
  const handleClick = () => {
    if (account) {
      startAnimation();
      incrementDonationClicks(selectedStream.hash);
      window.gtag("event", "button_click", {
        event_category: "donation",
        event_label: "cat_donation",
        value: config.features.web3.donation.clickUnit,
        wallet_address: account.address,
        cat_hash: selectedStream.hash,
        cat_name: selectedStream.name,
        cat_country: selectedStream.countryCode,
      });
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
        animationStyles,
        isConnecting && "pointer-events-none",
        "relative inline-flex h-[69px] shrink grow basis-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-neutral-100 px-5 py-[25px]",
      )}
    >
      {isConnecting ? (
        <Loader />
      ) : (
        <div className="text-xl font-bold text-tint">❤️ Donate!</div>
      )}
    </button>
  );
}
