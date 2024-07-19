"use client";
import { useStreamStore } from "@/stores/streamStore";
import { streams } from "@/streams";
import clsx from "clsx";
import { country2Flag } from "../../utils/country2";
export default function StreamItem({
  data,
}: {
  data: (typeof streams)[number];
}) {
  const selectStream = useStreamStore((state) => state.selectStream);
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const handleSelect = () => selectStream(data.hash);
  const isSelected = selectedStream.hash === data.hash;
  return (
    <li
      onClick={handleSelect}
      className={clsx(
        "group relative inline-flex h-[51px] w-[425px] cursor-pointer items-center justify-between rounded-lg pb-[15px] pl-[15px] pr-2 pt-2.5 hover:bg-[#1D1D1D]",
        isSelected && "bg-[#1D1D1D]",
      )}
    >
      <div className="flex gap-[10px]">
        <div className="text-sm font-bold text-neutral-100">❤️</div>
        <div className="text-sm font-bold text-neutral-100">
          {data.name} - {data.altName}
        </div>
      </div>
      <div className="inline-flex items-end justify-start gap-[5px] rounded-[23px] border border-neutral-700 px-[9px] py-[5px]">
        <div className="text-base font-medium text-neutral-400">
          {country2Flag(data.countryCode)}
        </div>
        <div className="text-xs font-bold uppercase text-neutral-400">
          {data.countryCode}
        </div>
      </div>
      {!isSelected && (
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-[#404040] group-hover:hidden" />
      )}
    </li>
  );
}
