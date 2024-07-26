/* eslint-disable tailwindcss/no-custom-classname */
import Logo from "#/images/logo.svg";
import FaucetIcon from "#/images/icons/faucet.svg";
import Image from "next/image";
import Link from "next/link";
import ConnectButton from "@/components/buttons/connectButton";
export default function Header() {
  return (
    <div className="mb-[15px] inline-flex h-[35px] w-full max-w-screen-xl items-center justify-between">
      <Image
        src={Logo}
        alt="purr.stream"
        width={167}
        priority={true}
        height={29}
        data-test="purr-stream-logo"
      />
      <div className="flex h-[19px] shrink grow basis-0 items-center justify-center gap-1.5">
        <div className="w-[459px] text-sm font-medium text-neutral-500">
          Donate your Testnet SPN and support different shelters across the
          world.
        </div>
        <Link href={"#"} className="flex items-center justify-start gap-0.5">
          <div className="text-sm font-bold text-neutral-100 underline">
            Learn How
          </div>
          <div className="h-[9px] w-3.5 origin-top-left -rotate-45 text-nowrap font-inter text-sm font-medium text-neutral-100">
            {"->"}
          </div>
        </Link>
      </div>
      <div className="flex h-[35px] items-center justify-between gap-2">
        <Link
          href={"#"}
          className="flex items-center justify-start gap-[5px] rounded-lg bg-neutral-100 px-[15px] py-2"
        >
          <Image src={FaucetIcon} className="size-[3.5]" alt="Go to faucet" />
          <div className="text-sm font-bold text-stone-950">Faucet</div>
        </Link>
        <ConnectButton />
      </div>
    </div>
  );
}
