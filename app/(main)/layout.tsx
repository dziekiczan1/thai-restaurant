import type { PropsWithChildren } from "react";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div
        className={`relative flex flex-col min-h-screen w-1/2 bg-cover bg-center bg-no-repeat bg-[url(/main.webp)]`}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <Header />
        <Menu />
      </div>
      <div>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
