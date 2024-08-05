import Image from "next/image";
import FavIcon from "#/images/icons/fav.svg";
import FavIconWhite from "#/images/icons/fav-white.svg";
import FavedIcon from "#/images/icons/faved.svg";
import FavedIconWhite from "#/images/icons/faved-white.svg";
import { useUserStore } from "@/stores/userStore";
import useClickAnimation from "@/hooks/useClickAnimation";
import clsx from "clsx";
import ThemedButton from "./themedButton";
import { useStreamStore } from "@/stores/streamStore";

export default function FavButton() {
  const { hash } = useStreamStore((s) => s.selectedStream);
  const isStreamFaved = useUserStore((s) => s.favs).includes(hash);
  const favStream = useUserStore((s) => s.favStream);
  const unfavStream = useUserStore((s) => s.unfavStream);
  const { startAnimation, animationStyles } = useClickAnimation();
  const handleFav = () => {
    startAnimation();
    isStreamFaved ? unfavStream(hash) : favStream(hash);
  };

  return (
    <ThemedButton handler={handleFav}>
      <div
        className={clsx(
          animationStyles,
          "relative flex items-center justify-center",
        )}
      >
        <Image
          src={isStreamFaved ? FavedIcon : FavIcon}
          alt="Favorite"
          width={19}
          height={17}
          className="hidden md:block"
        />
        <Image
          src={isStreamFaved ? FavedIconWhite : FavIconWhite}
          alt="Favorite"
          width={19}
          height={17}
          className="md:hidden"
        />
      </div>
    </ThemedButton>
  );
}
