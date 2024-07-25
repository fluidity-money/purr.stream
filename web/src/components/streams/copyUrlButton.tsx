import Image from "next/image";
import UrlIcon from "#/images/icons/url.svg";

export default function CopyUrlButton() {
  const handleCopy = () => {
    //do something
  };
  return (
    <div
      onClick={handleCopy}
      className="inline-flex h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[10px] border-2 border-stone-950 bg-neutral-100 px-3 py-2.5 shadow"
    >
      <div className="relative flex items-center justify-center">
        <Image src={UrlIcon} alt="Copy url" width={16} height={17} />
      </div>
    </div>
  );
}
