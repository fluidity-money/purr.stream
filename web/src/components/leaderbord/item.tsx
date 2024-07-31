"use client";
import { useStreamStore } from "@/stores/streamStore";
import { streams } from "@/streams";
import { country2Flag } from "@/utils/country2";
import clsx from "clsx";
import Image from "next/image";
export type LeaderItemType = (typeof streams)[number] & { score: number };
export default function LeaderItem({
  data,
  rank,
}: {
  data: LeaderItemType;
  rank: number;
}) {
  const selectStream = useStreamStore((state) => state.selectStream);
  const selectedStream = useStreamStore((s) => s.selectedStream);
  const handleSelect = () => selectStream(data.hash);
  const isSelected = selectedStream.hash === data.hash;
  return (
    <li
      onClick={handleSelect}
      className={clsx(
        isSelected && "bg-[#1E1E1E]",
        "flex cursor-pointer items-center justify-between gap-2 border-b border-neutral-700 pb-5 pl-[15px] pr-2 pt-[15px]",
      )}
    >
      <div className="flex items-center overflow-hidden">
        <span className="text-sm font-bold text-neutral-100">{rank}.</span>
        <div className="flex flex-row gap-3 px-[15px]">
          <Image
            className="size-14 rounded-lg object-cover"
            src={data.image}
            width={56}
            height={56}
            alt="Cat avatar"
          />
          <div className="flex flex-col items-start gap-2">
            <span className="grow truncate text-base font-bold text-neutral-100">
              {data.name} {data.altName}
            </span>
            {data.countryCode ? (
              <span className="rounded-[23px] border border-neutral-700 px-[9px] py-[5px] text-xs font-bold uppercase text-neutral-400">
                {country2Flag(data.countryCode)} {data.countryCode}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex h-10 items-center gap-6">
        <p className="inline-flex flex-col items-start justify-center gap-0.5">
          <span className="text-xs font-medium text-neutral-400">$SPN</span>
          <span className="text-base font-bold text-neutral-100">
            {data.score}
          </span>
        </p>
        <p className="flex flex-col items-start justify-center gap-0.5">
          <span className="whitespace-nowrap text-xs font-medium text-neutral-400">
            Total Tx
          </span>
          <span className="text-base font-bold text-neutral-100">N/A</span>
        </p>
      </div>
    </li>
  );
}
