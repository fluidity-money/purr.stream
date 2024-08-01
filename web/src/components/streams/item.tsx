"use client";
import { useStreamStore } from "@/stores/streamStore";
import { streams } from "@/streams";
import clsx from "clsx";
import { country2Flag } from "../../utils/country2";
export default function StreamItem({
  data,
  favorite = false,
}: {
  data: (typeof streams)[number];
  favorite?: boolean;
}) {
  const selectStream = useStreamStore((state) => state.selectStream);
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const handleSelect = () => selectStream(data.hash);
  const isSelected = selectedStream.hash === data.hash;

  return (
    <li
      onClick={handleSelect}
      className={clsx(
        "group relative flex cursor-pointer items-center justify-between gap-2 rounded-lg pb-[15px] pl-[15px] pr-2 pt-2.5 hover:bg-[#1D1D1D]",
        isSelected && "bg-[#2e2e2e]",
      )}
    >
      <div
        className={clsx(
          isSelected ? "text-tintLight" : "text-neutral-100",
          "text-sm font-bold",
        )}
      >
        {favorite ? <span className="mr-[10px]">❤️</span> : null}
        {data.name} - {data.altName}
      </div>
      {data.countryCode ? (
        <span
          className={clsx(
            isSelected
              ? "border-tintLight text-tintLight"
              : "border-neutral-700 text-neutral-400",
            "text-nowrap rounded-[23px] border-[1.5px] px-[9px] py-[5px] text-xs font-bold uppercase",
          )}
        >
          {country2Flag(data.countryCode)} {data.countryCode}
        </span>
      ) : null}
      {!isSelected && (
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-[#404040] group-hover:hidden" />
      )}
    </li>
  );
}
