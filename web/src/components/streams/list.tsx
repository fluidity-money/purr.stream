import { streams } from "@/streams";
import StreamItem from "./item";
export default function StreamList() {
  return (
    <ul className="flex flex-col gap-[15px]">
      {streams.map((stream, index) => (
        <StreamItem data={stream} index={index} key={stream.hash} />
      ))}
    </ul>
  );
}
