import Image from "next/image";
import UrlIcon from "#/images/icons/url.svg";
import { useEffect, useState } from "react";

export default function CopyUrlButton() {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);
  const handleCopyUrl = () => {
    window.navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };
  return (
    <div
      onClick={handleCopyUrl}
      className="relative flex h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[10px] border-2 border-stone-950 bg-neutral-100 px-3 py-2.5 shadow"
    >
      <div className="relative flex items-center justify-center">
        <Image src={UrlIcon} alt="Copy url" width={16} height={17} />
      </div>
      {isCopied ? (
        <span className="absolute -top-10 rounded-md bg-black px-4 py-2 text-sm font-medium">
          Copied
        </span>
      ) : null}
    </div>
  );
}