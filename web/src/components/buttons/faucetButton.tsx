import Image from "next/image";
import Link from "next/link";
import FaucetIcon from "#/images/icons/faucet.svg";

export default function FaucetButton() {
  return (
    <Link
      target="_blank"
      href="https://faucet.superposition.so"
      className="flex h-[50px] items-center justify-start gap-[5px] rounded-lg bg-neutral-100 px-[14px] py-2"
    >
      <Image src={FaucetIcon} className="size-[3.5]" alt="Go to faucet" />
      <div className="text-sm font-bold text-stone-950">Faucet</div>
    </Link>
  );
}
