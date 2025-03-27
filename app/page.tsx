import { Header } from "@/components/header";
import { Menu } from "@/components/menu";

export default function Page() {
  return (
    <>
      <div
        className={`relative flex flex-col min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-[url(/main.webp)]`}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <Header />
        <main className="flex relative z-10 flex-1">
          <div className={`flex flex-col justify-center items-center w-full`}>
            <p className="font-bitter text-primary text-7xl">
              The pure test of
            </p>
            <h2 className="font-chillax text-white text-9xl font-medium tracking-wide">
              Thailand
            </h2>
            <p
              className={`font-chillax text-center text-white text-2xl/10 font-light mt-8 max-w-xl`}
            >
              Savor authentic Thai flavors at Chantara, where rich curries and
              aromatic spices meet elegance.
            </p>
          </div>
        </main>
        <Menu />
      </div>
    </>
  );
}
