"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { SectionInfo } from "@/components/section-info";
import { siteConfig, getMenuItems } from "@/config/site-config";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isHomepage = pathname === "/";
  const currentConfig = siteConfig[pathname] || siteConfig["/"];
  const bgImage = currentConfig.background;
  const menuItems = getMenuItems();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 700);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, [pathname]);

  return (
    <div
      className={`flex flex-col md:flex-row w-screen h-screen lg:overflow-hidden ${isHomepage ? "overflow-hidden" : ""}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`background-${pathname}`}
          className={`relative lg:absolute inset-0 flex flex-col lg:min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden px-4 lg:px-0
          ${!isHomepage ? "after:content-[''] after:right-0 lg:after:top-0 after:bottom-0 after:h-8 lg:after:h-auto after:w-full lg:after:w-16 after:absolute after:bg-gradient-to-t lg:after:bg-gradient-to-l after:from-black after:to-transparent" : ""}`}
          style={{ backgroundImage: `url(${bgImage})` }}
          initial={{
            width: "100vw",
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            width: isHomepage || isMobile ? "100vw" : "50vw",
            height: isMobile && !isHomepage ? "50vh" : "100vh",
            opacity: 1,
            scale: 1,
          }}
          exit={{
            width: "100vw",
            opacity: 0,
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            opacity: { duration: 0.7 },
            scale: { duration: 0.7 },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <Header />
          <SectionInfo
            subtitle={currentConfig.subtitle}
            title={currentConfig.title}
            description={currentConfig.description}
            isHomepage={isHomepage}
          />
          <Menu menuItems={menuItems} currentPath={pathname} />
        </motion.div>
      </AnimatePresence>

      {!isHomepage && !isTransitioning && (
        <motion.main
          key={`${pathname}-main`}
          className={`
            absolute z-10 bg-black text-white flex
            ${isMobile ? "bottom-0 left-0 w-full h-1/2" : "right-0 top-0 w-1/2 h-full"}
          `}
          initial={{
            y: isMobile ? "100%" : 0,
            x: isMobile ? 0 : "100%",
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
              y: isMobile
                ? { duration: 0.5, ease: "easeInOut" }
                : { duration: 0 },
              x: !isMobile
                ? { duration: 0.5, ease: "easeInOut" }
                : { duration: 0 },
              opacity: { duration: 0.6 },
              scale: {
                duration: 0.6,
                type: "spring",
                damping: 10,
                stiffness: 100,
              },
            },
          }}
          exit={{
            y: isMobile ? "100%" : 0,
            x: isMobile ? 0 : "100%",
            opacity: 0,
            scale: 0.95,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            key={`content-${pathname}`}
            className="flex flex-1 font-chillax px-4 lg:px-0"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }}
          >
            <div className="w-full text-white min-h-screen lg:overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </motion.main>
      )}
    </div>
  );
}
