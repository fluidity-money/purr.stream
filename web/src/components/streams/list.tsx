"use client";
import { streams } from "@/streams";
import StreamItem from "./item";
import { useEffect, useState } from "react";
import { shuffleList } from "@/utils/shuffle";
export default function StreamList() {
  const [shuffledStreams, setShuffledStreams] = useState<typeof streams>([]);

  useEffect(() => {
    setShuffledStreams(shuffleList(streams));
  }, []);

  return (
    <ul className="flex flex-col gap-[15px]">
      {shuffledStreams.map((stream) => (
        <StreamItem data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
