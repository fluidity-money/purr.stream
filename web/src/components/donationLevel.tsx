"use client";

import { handleDonation, useUserStore } from "@/stores/userStore";
import clsx from "clsx";
import { useEffect } from "react";
import { useActiveAccount } from "thirdweb/react";
import Loader from "./loader";
import Image from "next/image";
import CatLoading from "#/images/icons/cat-loading.svg";
import CatSuccess from "#/images/icons/cat-succes.svg";
import CatError from "#/images/icons/cat-error.svg";
import { config } from "@/config";
export default function DonationLevel() {
  const account = useActiveAccount();
  const donationClicks = useUserStore((s) => s.donationClicks);
  const donationQueue = useUserStore((s) => s.donationQueue);
  const curr = donationQueue[0];
  const totalDonation =
    donationClicks * config.features.web3.donation.displayUnit;
  const totalDonationInETH =
    donationClicks * config.features.web3.donation.clickUnit;

  useEffect(() => {
    if (curr?.id && account) {
      handleDonation(curr.id, account);
    }
  }, [curr?.id, account]);

  return (
    <div className="fixed bottom-[2px] right-[2px] z-20 md:bottom-4 md:right-4">
      {donationQueue.length > 0 ? (
        <ul className="flex flex-col items-center justify-center gap-2">
          {donationQueue.map((item) => (
            <li
              key={item.id}
              className={clsx(
                "relative flex size-16 flex-col items-center justify-center gap-1 rounded-full text-base md:size-20 md:text-xl",
              )}
            >
              {item.status === "loading" ? <Loader /> : null}
              {item.status === "success" ? (
                <div className="size-5">✔️</div>
              ) : null}
              {item.status === "error" ? (
                <div className="size-5">✖️</div>
              ) : null}
              ${item.donation * config.features.web3.donation.displayUnit}
              <Image
                src={
                  item.status === "loading"
                    ? CatLoading
                    : item.status === "success"
                      ? CatSuccess
                      : item.status === "error"
                        ? CatError
                        : undefined
                }
                alt="avatar"
                className="absolute -inset-4 z-[-1]"
                fill
              />
            </li>
          ))}
        </ul>
      ) : null}
      <div className="flex flex-col gap-1 rounded-lg bg-[#1E1E1E] px-4 py-2 text-center text-lg font-extralight md:text-2xl">
        <span className="text-xs font-bold text-neutral-500 md:text-sm">
          Donation
        </span>
        <span>${totalDonation.toFixed(2)}</span>
        <span className="text-center text-xs text-neutral-500">
          ETH{totalDonationInETH.toFixed(6)}
        </span>
      </div>
    </div>
  );
}
