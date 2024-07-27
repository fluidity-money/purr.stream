"use client";
import { useStreamStore } from "@/stores/streamStore";
import { streams } from "@/streams";
import { country2Flag } from "@/utils/country2";
import Image from "next/image";
export type LeaderItemType = (typeof streams)[number] & { score: number };
export default function LeaderItem({ data }: { data: LeaderItemType }) {
  const selectStream = useStreamStore((state) => state.selectStream);
  const handleSelect = () => selectStream(data.hash);

  return (
    <li
      onClick={handleSelect}
      className="inline-flex h-[91px] items-center justify-between border-b border-neutral-700 pb-5 pl-[15px] pr-2 pt-[15px]"
    >
      <div className="text-sm font-bold text-neutral-100">1.</div>
      <div className="flex h-14 shrink grow basis-0 items-center justify-start gap-3 px-[15px]">
        <Image
          className="size-14 rounded-lg"
          src="https://via.placeholder.com/56x56"
          width={56}
          height={56}
          alt="Cat avatar"
        />
        <div className="inline-flex flex-col items-start justify-center gap-2">
          <div className="text-base font-bold text-neutral-100">
            {data.name} {data.altName}
          </div>
          <span className="rounded-[23px] border border-neutral-700 px-[9px] py-[5px] text-xs font-bold uppercase text-neutral-400">
            {country2Flag(data.countryCode)} {data.countryCode}
          </span>
        </div>
      </div>
      <div className="flex h-10 items-center justify-between gap-6">
        <div className="inline-flex flex-col items-start justify-center gap-0.5">
          <div className="text-xs font-medium text-neutral-400">$SPN</div>
          <div className="text-base font-bold text-neutral-100">
            {data.score}
          </div>
        </div>
        <div className="inline-flex flex-col items-start justify-center gap-0.5">
          <div className="text-xs font-medium text-neutral-400">Total Tx</div>
          <div className="text-base font-bold text-neutral-100">989,743+</div>
        </div>
      </div>
    </li>
  );
}
