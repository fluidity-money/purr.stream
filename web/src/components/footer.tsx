import Image from "next/image";
import DiscordIcon from "#/images/icons/discord.svg";
export default function Footer() {
  return (
    <div className="inline-flex h-[59px] w-[1260px] items-center justify-between">
      <div className="flex h-[31px] items-center justify-between gap-4">
        <div className="flex items-center justify-start gap-1 rounded-[23px] py-1.5">
          <div className="text-xs font-bold text-neutral-100">︎ℹ️</div>
          <div className="text-sm font-bold text-neutral-100 underline">
            Disclaimer
          </div>
        </div>
        <div className="flex items-center justify-start gap-1 rounded-[23px] py-1.5">
          <div className="text-xs font-bold text-neutral-100">❓</div>
          <div className="text-sm font-bold text-neutral-100 underline">
            Tutorial
          </div>
        </div>
      </div>
      <div className="inline-flex size-[59px] flex-col items-center justify-center gap-2.5 rounded-[57px] bg-indigo-500 px-[13px] py-[17px] shadow">
        <Image src={DiscordIcon} width={29} alt="Discord" />
      </div>
    </div>
  );
}
