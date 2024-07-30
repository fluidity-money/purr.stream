import Image from "next/image";
import LoaderIcon from "#/images/icons/loader.svg";
export default function Loader() {
  return (
    <div className="relative">
      <Image
        src={LoaderIcon}
        width={20}
        height={20}
        alt="loader"
        className="animate-spin"
      />
      <div className="absolute inset-0 rounded-full border-2 border-b-gray-200 opacity-30" />
    </div>
  );
}
