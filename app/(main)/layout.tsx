"use client";

import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { SectionInfo } from "@/components/section-info";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { siteConfig, getMenuItems } from "@/config/site-config";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isHomepage = pathname === "/";
  const currentConfig = siteConfig[pathname] || siteConfig["/"];
  const bgImage = currentConfig.background;
  const menuItems = getMenuItems();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 700);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`background-${pathname}`}
          className="absolute inset-0 flex flex-col min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${bgImage})` }}
          initial={{
            width: "100vw",
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            width: isHomepage ? "100vw" : "50vw",
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
          />
          <Menu menuItems={menuItems} currentPath={pathname} />
        </motion.div>
      </AnimatePresence>

      {!isHomepage && !isTransitioning && (
        <motion.main
          key={`${pathname}-main`}
          className="absolute right-0 top-0 flex w-1/2 h-full z-10 bg-black text-white"
          initial={{
            x: "100%",
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            x: "0%",
            opacity: 1,
            scale: 1,
            transition: {
              x: { duration: 0.5, ease: "easeInOut" },
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
            x: "100%",
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
            className="flex flex-1 overflow-auto"
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
            {children}
          </motion.div>
        </motion.main>
      )}
    </div>
  );
}
