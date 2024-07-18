"use client";
import { useStreamStore } from "@/stores/streamStore";
import { streams } from "@/streams";
export default function StreamItem({
  data,
}: {
  data: (typeof streams)[number];
}) {
  const selectStream = useStreamStore((state) => state.selectStream);
  const handleSelect = () => selectStream(data.hash);

  return (
    <li className="cursor-pointer" onClick={handleSelect}>
      {data.name}
    </li>
  );
}
