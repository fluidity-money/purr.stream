import Image from "next/image";
import UrlIcon from "#/images/icons/url.svg";
import UrlIconWhite from "#/images/icons/url-white.svg";
import { useEffect, useState } from "react";
import { useStreamStore } from "@/stores/streamStore";
import useClickAnimation from "@/hooks/useClickAnimation";
import clsx from "clsx";
import ThemedButton from "./themedButton";

export default function CopyUrlButton() {
  const [isCopied, setIsCopied] = useState(false);
  const selectedStream = useStreamStore((s) => s.selectedStream);
  const { startAnimation, animationStyles } = useClickAnimation();
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);
  const handleCopyUrl = () => {
    startAnimation();
    const params = `?cat=${selectedStream.hash}&camera=${selectedStream.cameraType}`;
    window.navigator.clipboard.writeText(`${window.location.origin}/${params}`);
    setIsCopied(true);
  };
  return (
    <ThemedButton handler={handleCopyUrl}>
      <div
        className={clsx(
          animationStyles,
          "relative flex items-center justify-center",
        )}
      >
        <Image
          className="hidden md:block"
          src={UrlIcon}
          alt="Copy url"
          width={16}
          height={17}
        />
        <Image
          className="md:hidden"
          src={UrlIconWhite}
          alt="Copy url"
          width={16}
          height={17}
        />
      </div>
      <span
        className={clsx(
          isCopied ? "opacity-100" : "opacity-0",
          "absolute -top-11 z-20 flex justify-center rounded-md bg-white/90 px-4 py-2 text-center text-sm font-medium text-black transition-opacity duration-300 md:bg-stone-900/90 md:text-white",
        )}
      >
        Copied
        <div className="absolute -bottom-1 z-20 size-0 rounded-md border-x-4 border-t-4 border-transparent border-t-white/90 md:border-t-stone-900/90" />
      </span>
    </ThemedButton>
  );
}
