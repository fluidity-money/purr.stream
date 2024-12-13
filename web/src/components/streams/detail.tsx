"use client";

import { useStreamStore } from "@/stores/streamStore";
import Image from "next/image";
import ETHIcon from "#/images/icons/eth.svg";
import DonateButton from "@/components/buttons/donateButton";
import LeaderboardButton from "@/components/buttons/leaderboardButton";
import { useQuery } from "@tanstack/react-query";
import { LeaderItemType } from "../leaderbord/item";
import { config } from "@/config";
import Title from "./title";
import StreamControls from "./controls";
import Footer from "../footer";
export default function StreamDetail() {
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const { data: leaders } = useQuery<LeaderItemType[]>({
    queryKey: ["leaderboard"],
  });
  const donation =
    leaders?.filter((cat) => cat.hash === selectedStream.hash)?.[0]?.score ?? 0;
  const totalTx = (donation / config.features.web3.donation.clickUnit).toFixed(
    0,
  );
  const catIndex =
    leaders?.findIndex((cat) => selectedStream.hash === cat.hash) ?? -1;
  const rank = catIndex === -1 ? "N/A" : catIndex + 1;
  return (
    <div
      className="mt-4 flex flex-col gap-4 md:mt-[30px] md:gap-[30px]"
      data-test="stream-info"
    >
      <div className="flex flex-col justify-between md:flex-row md:items-start md:pl-5">
        <Title extraStyles="hidden md:flex" />
        <div className="relative mb-[7px] md:mb-0 md:hidden">
          <StreamControls />
        </div>
        <div className="flex h-[69px] items-center justify-center gap-2 md:gap-[19px]">
          <DonateButton />
          <LeaderboardButton />
        </div>
      </div>
      <div className="inline-flex items-center justify-between md:pl-5">
        {selectedStream.charityDescription ? (
          <div className="hidden shrink grow basis-0 items-center justify-between pr-2.5 text-sm font-medium text-neutral-400 md:flex">
            {selectedStream.charityDescription}
          </div>
        ) : null}

        <div className="flex flex-1 items-center justify-between gap-4 rounded-lg bg-[#1E1E1E] px-[25px] py-2.5 md:flex-initial">
          <div className="inline-flex flex-col items-start justify-center gap-[5px] rounded-[9px] py-3">
            <div className="text-xs font-medium text-neutral-500">
              Total Donated
            </div>
            <div className="inline-flex items-center justify-start gap-2.5">
              <div className="relative h-5 w-[21px] rounded-[41px]">
                <Image src={ETHIcon} width={21} height={21} alt="ETH" />
              </div>
              <div className="text-xl font-medium text-neutral-100">
                {donation}
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-[5px] rounded-[9px] py-3">
            <div className="text-xs font-medium text-neutral-500">
              Total Transactions
            </div>
            <div className="inline-flex items-center justify-start gap-[5px]">
              <div className="text-right text-xl font-medium text-neutral-100">
                💹
              </div>
              <div className="text-right text-xl font-medium text-neutral-100">
                {totalTx}
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-[5px] rounded-[9px] py-3">
            <div className="text-xs font-medium text-neutral-500">Rank</div>
            <div className="inline-flex items-center justify-start gap-[5px]">
              <div className="text-right text-xl font-medium text-neutral-100">
                🏆
              </div>
              <div className="text-right text-xl font-medium text-neutral-100">
                {rank}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer extraStyles="md:hidden" />
    </div>
  );
}
