import { streams } from "@/streams";
import FavItem from "./item";
import { useUserStore } from "@/stores/userStore";

export default function FavList() {
  const favs = useUserStore((s) => s.favs);
  const favList = streams.filter((stream) => favs.includes(stream.hash));

  if (favList.length === 0)
    return (
      <div className="inline-flex w-[425px] flex-col items-center justify-start gap-[15px] py-[27px]">
        <div className="text-base font-bold text-neutral-100">
          No cats yet :(
        </div>
        <div className="text-sm font-bold text-neutral-700">
          Your favorite cats will be bookmarked here!{" "}
        </div>
      </div>
    );
  return (
    <ul className="flex flex-col gap-[15px]">
      {favList.map((stream) => (
        <FavItem data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
