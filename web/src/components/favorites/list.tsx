import { streams } from "@/streams";
import FavItem from "./item";

export default function FavList() {
  return (
    <ul className="flex flex-col gap-[15px]">
      {streams.map((stream) => (
        <FavItem data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
