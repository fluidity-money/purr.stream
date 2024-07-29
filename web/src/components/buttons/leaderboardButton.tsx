import { useTabStore } from "@/stores/tabStore";

export default function LeaderboardButton() {
  const changeTab = useTabStore((s) => s.changeTab);
  const openLeaderboard = () => {
    changeTab(2);
  };
  return (
    <div
      onClick={openLeaderboard}
      className="inline-flex shrink grow basis-0 cursor-pointer flex-col items-center justify-center gap-1 self-stretch rounded-lg border border-neutral-100 px-5 py-[25px]"
    >
      <div className="text-nowrap text-base font-bold text-neutral-100">
        See Leaderboard
      </div>
    </div>
  );
}
