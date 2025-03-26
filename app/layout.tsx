import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/header";
import "./globals.css";
import { Menu } from "@/components/menu";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "./fonts/CabinetGrotesk-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-grotesk",
});

const chillax = localFont({
  src: [
    {
      path: "./fonts/Chillax-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Chillax-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Chillax-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Chillax-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-chillax",
});

const bitterRose = localFont({
  src: "./fonts/BitterRose.woff2",
  display: "swap",
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  title: "Chantara",
  description:
    "Experience the refined flavors of Thailand at Chantara, where aromatic spices, rich curries, and exquisite Thai cuisine come together in an atmosphere of elegance and indulgence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cabinetGrotesk.variable} ${chillax.variable} ${bitterRose.variable}`}
    >
      <body
        className={`relative flex flex-col min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-[url(/main.webp)]`}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <Header />
        <main className="flex relative z-10 flex-1">{children}</main>
        <Menu />
      </body>
    </html>
  );
}
