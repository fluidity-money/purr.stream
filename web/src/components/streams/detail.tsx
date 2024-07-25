"use client";

import { useStreamStore } from "@/stores/streamStore";
import { country2Name, CountryCode } from "../../utils/country2";
import Link from "next/link";
import Image from "next/image";
import SPNIcon from "#/images/icons/spn.svg";

export default function StreamDetail() {
  const selectedStream = useStreamStore((state) => state.selectedStream);
  // return <div data-test="stream-info">{selectedStream.name}</div>;

  return (
    <div className="mt-[30px] flex flex-col gap-[30px]">
      <div className="flex items-start justify-between pl-5">
        <div className="shrink grow basis-0 flex-col items-start justify-center gap-[5px]">
          <div className="flex flex-col gap-2.5">
            <div className="text-nowrap text-left text-[25px] font-bold text-white">
              {selectedStream.name} - ({selectedStream.altName})
            </div>
            <div className="flex items-center justify-start gap-6">
              <Link href={selectedStream.charityUrl} target="_blank">
                <p className="flex items-center justify-start gap-2 text-nowrap rounded-[23px] border border-neutral-400 px-3 py-[5px]">
                  <span className="text-base font-medium text-neutral-400">
                    🇯🇵
                  </span>
                  <span className="text-xs font-bold text-neutral-100">
                    {country2Name(selectedStream.countryCode as CountryCode)}
                  </span>{" "}
                  <span className="text-xs font-bold text-neutral-400">
                    - {selectedStream.charity}
                  </span>
                </p>
              </Link>
              <div className="flex h-[19px] items-center justify-start gap-2 rounded-[23px]">
                <div className="text-sm font-medium text-neutral-400">
                  Local Time:
                </div>
                <div className="text-sm font-medium text-neutral-400">
                  16:02:00 ETC
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[69px] items-center justify-center gap-[19px]">
          <div className="inline-flex h-[69px] shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-lg bg-neutral-100 px-5 py-[25px]">
            <div className="text-xl font-bold text-stone-950">❤️ Donate!</div>
          </div>
          <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-1 self-stretch rounded-lg border border-neutral-100 px-5 py-[25px]">
            <div className="text-nowrap text-base font-bold text-neutral-100">
              See Leaderboard
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex h-[102px] w-[810px] items-center justify-between pl-5">
        <div className="flex h-[75px] shrink grow basis-0 items-center justify-between pr-2.5">
          <div className="h-[75px] shrink grow basis-0 text-sm font-medium text-neutral-400">
            The RSPCA in Japan works to prevent cruelty and promote kindness to
            animals. They rescue, rehabilitate, and educate to foster a kind and
            sustainable society. Join us to create a better world for animals.
          </div>
        </div>
        <div className="flex h-[102px] w-[360px] items-center justify-between rounded-lg bg-[#1E1E1E] px-[25px] py-2.5">
          <div className="inline-flex flex-col items-start justify-center gap-[5px] rounded-[9px] py-3">
            <div className="text-xs font-medium text-neutral-500">
              Total Donated
            </div>
            <div className="inline-flex items-center justify-start gap-2.5">
              <div className="relative h-5 w-[21px] rounded-[41px]">
                <Image src={SPNIcon} width={21} height={21} alt="SPN" />
              </div>
              <div className="text-xl font-medium text-neutral-100">500</div>
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
                192,401+
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
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
