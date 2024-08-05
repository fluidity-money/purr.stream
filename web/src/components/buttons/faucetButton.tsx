import Image from "next/image";
import Link from "next/link";
import FaucetIcon from "#/images/icons/faucet.svg";

export default function FaucetButton() {
  return (
    <Link
      target="_blank"
      href="https://faucet.superposition.so"
      className="flex h-8 items-center justify-start gap-[5px] rounded-lg bg-neutral-100 px-[14px] py-2 md:h-[50px]"
    >
      <Image src={FaucetIcon} className="size-[3.5]" alt="Go to faucet" />
      <div className="hidden text-sm font-bold text-stone-950 md:block">
        Faucet
      </div>
    </Link>
  );
}
