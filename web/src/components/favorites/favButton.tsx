import Image from "next/image";
import FavIcon from "#/images/icons/fav.svg";
import FavedIcon from "#/images/icons/faved.svg";
import { useUserStore } from "@/stores/userStore";

export default function FavButton({ hash }: { hash: string }) {
  const isStreamFaved = useUserStore((s) => s.favs).includes(hash);
  const favStream = useUserStore((s) => s.favStream);
  const unfavStream = useUserStore((s) => s.unfavStream);
  const handleFav = () => (isStreamFaved ? unfavStream(hash) : favStream(hash));

  return (
    <div
      onClick={handleFav}
      className="inline-flex h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[10px] border-2 border-stone-950 bg-neutral-100 px-3 py-2.5 shadow"
    >
      <div className="relative flex items-center justify-center">
        <Image
          src={isStreamFaved ? FavedIcon : FavIcon}
          alt="Favorite"
          width={19}
          height={17}
        />
      </div>
    </div>
  );
}
