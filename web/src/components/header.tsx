import Logo from "#/images/logo.svg";
import LogoIcon from "#/images/logo-icon.svg";
import Image from "next/image";
import Link from "next/link";
import ConnectButton from "@/components/buttons/connectButton";
import FaucetButton from "./buttons/faucetButton";
export default function Header() {
  return (
    <div className="mb-[15px] flex h-8 items-center justify-between px-4 md:h-[50px] md:px-0">
      <Image
        src={Logo}
        alt="purr.stream"
        width={167}
        priority={true}
        height={29}
        data-test="purr-stream-logo"
        className="hidden md:block"
      />
      <Image
        src={LogoIcon}
        alt="purr.stream"
        priority={true}
        height={32}
        data-test="purr-stream-logo-mobile"
        className="md:hidden"
      />
      <div className="hidden h-[19px] shrink grow basis-0 items-center justify-center gap-1.5 md:flex">
        <div className="text-sm font-medium text-neutral-500">
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
      <div className="flex h-[50px] items-center justify-between gap-1 md:gap-2">
        <FaucetButton />
        <ConnectButton />
      </div>
    </div>
  );
}
