"use client";
import Link from "next/link";
import { country2Flag, country2Name, CountryCode } from "@/utils/country2";
import clsx from "clsx";
import { useStreamStore } from "@/stores/streamStore";

export default function StreamTitle({ extraStyles }: { extraStyles?: string }) {
  const selectedStream = useStreamStore((s) => s.selectedStream);
  return (
    <div
      className={clsx(
        extraStyles,
        "shrink grow basis-0 flex-col items-start justify-center gap-[5px]",
      )}
    >
      <div className="flex flex-col gap-2.5">
        <div className="truncate text-left text-[25px] font-bold text-white md:overflow-auto md:whitespace-normal">
          {selectedStream.name} - ({selectedStream.altName})
        </div>
        <div className="flex items-center justify-between gap-6 md:justify-start">
          {selectedStream.countryCode ? (
            <Link href={selectedStream.charityUrl} target="_blank">
              <p className="flex items-center justify-start gap-2 text-nowrap rounded-[23px] border border-neutral-400 px-3 py-[5px]">
                <span className="text-base font-medium text-neutral-400">
                  {country2Flag(selectedStream.countryCode)}
                </span>
                <span className="text-xs font-bold text-neutral-100">
                  {country2Name(selectedStream.countryCode as CountryCode)}
                </span>{" "}
                <span className="text-xs font-bold text-neutral-400">
                  - {selectedStream.charity}
                </span>
              </p>
            </Link>
          ) : null}
          <div className="flex h-[19px] items-center justify-end gap-2 rounded-[23px] md:justify-start">
            <div className="text-xs font-medium text-neutral-400 md:text-sm">
              Local Time:
            </div>
            <div className="text-xs font-medium text-neutral-400 md:text-sm">
              16:02:00 ETC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
