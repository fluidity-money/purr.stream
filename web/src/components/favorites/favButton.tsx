import { useStreamStore } from "@/stores/streamStore";
import Image from "next/image";
import FavIcon from "#/images/icons/fav.svg";

export default function FavButton() {
  const handleFav = () => {
    // do some
  };

  return (
    <div
      onClick={handleFav}
      className="inline-flex h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[10px] border-2 border-stone-950 bg-neutral-100 px-3 py-2.5 shadow"
    >
      <div className="relative size-5 origin-top-left">
        <div className="size-5">
          <Image src={FavIcon} alt="Favorite" width={19} height={17} />
        </div>
      </div>
    </div>
  );
}
