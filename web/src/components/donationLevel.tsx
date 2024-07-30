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
                "relative flex size-20 flex-col items-center justify-center gap-1 rounded-full text-xl",
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
      <div className="text-2xl font-extralight">{totalDonation.toFixed(3)}</div>
    </div>
  );
}
