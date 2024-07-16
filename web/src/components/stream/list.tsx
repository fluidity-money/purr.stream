import { streams } from "@/streams";
import StreamItem from "./item";
export default function StreamList() {
  return (
    <ul>
      {streams.map((stream) => (
        <StreamItem data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
