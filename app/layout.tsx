import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import MainLayout from "@/app/(main)/layout";

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
      <body>{children}</body>
    </html>
  );
}
