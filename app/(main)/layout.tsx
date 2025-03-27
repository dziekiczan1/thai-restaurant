"use client";

import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { SectionInfo } from "@/components/section-info";

const MainLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const sectionData: Record<
    string,
    { title: string; description: string; bgImage: string }
  > = {
    "/about": {
      title: "About Us",
      description: "Learn more about us",
      bgImage: "/main.webp",
    },
    "/menu": {
      title: "Our Menu",
      description: "Discover our delicious dishes",
      bgImage: "/main.webp",
    },
  };

  const { title, description, bgImage } = sectionData[pathname] || {
    title: "Welcome",
    description: "Explore our website",
    bgImage: "/main.webp",
  };

  return (
    <div className="flex">
      <div
        className="relative flex flex-col min-h-screen w-1/2 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/80 after:content-[''] after:right-0 after:top-0 after:bottom-0 after:w-16 after:absolute after:bg-gradient-to-l after:from-black after:to-transparent"></div>
        <Header />
        <SectionInfo title={title} description={description} />
        <Menu />
      </div>
      <main className="bg-black text-white w-1/2">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
