import Image from "next/image";
import UrlIcon from "#/images/icons/url.svg";
import { useEffect, useState } from "react";
import { useStreamStore } from "@/stores/streamStore";
import useClickAnimation from "@/hooks/useClickAnimation";
import clsx from "clsx";

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
    <div
      onClick={handleCopyUrl}
      className="group relative flex h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[10px] border-2 border-stone-950 bg-neutral-100 px-3 py-2.5 shadow"
    >
      <div
        className={clsx(
          animationStyles,
          "relative flex items-center justify-center",
        )}
      >
        <Image src={UrlIcon} alt="Copy url" width={16} height={17} />
      </div>
      <span
        className={clsx(
          isCopied ? "opacity-100" : "opacity-0",
          "absolute -top-11 flex justify-center rounded-md bg-stone-900/90 px-4 py-2 text-center text-sm font-medium transition-opacity duration-300",
        )}
      >
        Copied
        <div className="absolute -bottom-1 size-0 rounded-md border-x-4 border-t-4 border-transparent border-t-stone-900/90" />
      </span>
    </div>
  );
}
