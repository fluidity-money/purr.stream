import { streams } from "@/streams";
import LeaderItem from "./item";

export default function LeaderList() {
  return (
    <ul>
      {streams.map((stream) => (
        <LeaderItem data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
