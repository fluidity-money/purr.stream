"use client";

import { handleDonation, useUserStore } from "@/stores/userStore";
import clsx from "clsx";
import { useEffect } from "react";
import { useActiveAccount } from "thirdweb/react";
import Loader from "./loader";
export default function DonationLevel() {
  const account = useActiveAccount();
  const donationClicks = useUserStore((s) => s.donationClicks);
  const donationQueue = useUserStore((s) => s.donationQueue);
  const curr = donationQueue[0];
  const totalDonation = donationClicks * 0.005;

  useEffect(() => {
    if (curr?.id && account) {
      handleDonation(curr.id, account);
    }
  }, [curr?.id, account]);

  return (
    <div>
      {donationQueue.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {donationQueue.map((item) => (
            <li
              key={item.id}
              className={clsx(
                item.status === "loading" && "bg-purple-400",
                item.status === "success" && "bg-green-400",
                item.status === "error" && "bg-red-400",
                "flex size-20 flex-col items-center justify-center gap-1 rounded-full text-xl",
              )}
            >
              {item.status === "loading" ? <Loader /> : null}
              {item.status === "success" ? (
                <div className="size-5">✔️</div>
              ) : null}
              {item.status === "error" ? (
                <div className="size-5">✖️</div>
              ) : null}
              {item.donation * 0.005}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="text-2xl font-extralight">{totalDonation.toFixed(3)}</div>
    </div>
  );
}
