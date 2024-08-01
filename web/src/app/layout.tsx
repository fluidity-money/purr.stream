import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import clsx from "clsx";
import Footer from "@/components/footer";
import Providers from "@/providers";
import { Toaster } from "react-hot-toast";
import { config } from "@/config";

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

export const metadata: Metadata = config.metadata;

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
          "flex min-h-screen flex-col items-center justify-between bg-stone-900 py-4 text-white",
        )}
      >
        <Toaster
          toastOptions={{
            style: {
              background: "#1E1E1E",
              color: "#fff",
              borderWidth: 1,
              borderColor: "#333",
            },
            position: "top-right",
          }}
        />
        <div className="flex w-full max-w-screen-2xl grow flex-col">
          <Providers>
            <Header />
            <main className="my-[15px] flex grow flex-col">{children}</main>
          </Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
