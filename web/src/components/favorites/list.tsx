import { streams } from "@/streams";
import FavItem from "./item";

export default function FavList() {
  return (
    <ul>
      {streams.map((stream) => (
        <FavItem data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
