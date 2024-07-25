import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import clsx from "clsx";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Purr.Stream",
  description: "Donate onchain and support animal welfare",
  metadataBase: new URL("https://purr.stream"),
  keywords: [
    "cat",
    "donate",
    "stream",
    "purr",
    "purr.stream",
    "onchain",
    "animal",
    "welfare",
    "superposition",
    "blockchain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          satoshi.className,
          satoshi.variable,
          inter.variable,
          "bg-stone-900 px-[90px] pb-[50px] pt-[80px] text-white",
        )}
      >
        <Header />
        <main className="my-[30px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
