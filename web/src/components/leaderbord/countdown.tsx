"use client";
import { getTimeUntilNextFriday } from "@/utils/countdown";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextFriday());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNextFriday());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex items-center justify-center rounded-[5px] bg-[#1E1E1E]">
      <p className="block px-2 py-5 text-center">
        <span className="text-nowrap text-xl font-medium text-neutral-100">
          Weekly Leaderboard Countdown:
        </span>
        <span className="text-nowrap text-xl font-bold text-neutral-100">
          ⏳ {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:
          {timeLeft.seconds}
        </span>
      </p>
    </div>
  );
}
