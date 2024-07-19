import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import clsx from "clsx";
import Footer from "@/components/footer";

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
  description: "Donate to your faviroute cat",
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
          "bg-stone-900 px-[90px] pb-[50px] pt-[80px] text-white",
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
