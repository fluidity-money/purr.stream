export default function Countdown() {
  return (
    <div className="flex items-center justify-center rounded-[5px] bg-[#1E1E1E]">
      <p className="block px-2 py-5 text-center">
        <span className="text-nowrap text-xl font-medium text-neutral-100">
          Weekly Leaderboard Countdown:
        </span>
        <span className="text-nowrap text-xl font-bold text-neutral-100">
          ⏳ 24:10:33
        </span>
      </p>
    </div>
  );
}
