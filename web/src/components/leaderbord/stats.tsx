import { useQuery } from "@tanstack/react-query";
import { LeaderItemType } from "./item";
import { streams } from "@/streams";
import { config } from "@/config";
export default function Stats() {
  const { data: leaders } = useQuery<LeaderItemType[]>({
    queryKey: ["leaderboard"],
  });
  const { data: wallets } = useQuery<
    (typeof streams)[number] & { wallets: number }[]
  >({
    queryKey: ["walletsCount"],
  });
  const totalDonation =
    leaders?.reduce((acc, curr) => acc + curr.score, 0).toFixed(3) ?? "0";
  const totalWallets =
    wallets?.reduce((acc, curr) => acc + curr.wallets, 0) ?? 0;
  const totalTx = (
    Number(totalDonation) / config.features.web3.donation.clickUnit
  ).toFixed(0);

  return (
    <div className="inline-flex h-[92px] items-center justify-center gap-[70px] rounded-t-lg border-b border-neutral-400 pb-[25px] pl-[30px] pr-[25px] pt-[19px]">
      <div className="flex items-center justify-start gap-2.5">
        <div className="inline-flex flex-col items-start justify-center gap-0.5">
          <div className="whitespace-nowrap text-sm font-medium text-neutral-400">
            Total $SPN
          </div>
          <div className="text-xl font-bold text-neutral-100">
            {totalDonation}
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start justify-center gap-0.5">
        <div className="whitespace-nowrap text-sm font-medium text-neutral-400">
          Total Transactions
        </div>
        <div className="text-xl font-bold text-neutral-100">{totalTx}</div>
      </div>
      <div className="inline-flex flex-col items-start justify-center gap-0.5">
        <div className="whitespace-nowrap text-sm font-medium text-neutral-400">
          Total Wallets
        </div>
        <div className="text-xl font-bold text-neutral-100">{totalWallets}</div>
      </div>
    </div>
  );
}
