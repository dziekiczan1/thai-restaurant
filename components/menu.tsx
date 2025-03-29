"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PageConfig } from "@/config/site-config";

interface MenuProps {
  menuItems: PageConfig[];
  currentPath: string;
}

export const Menu = ({ menuItems, currentPath }: MenuProps) => {
  return (
    <nav
      className="flex justify-center items-center pb-16 relative w-full"
      role="navigation"
      aria-label="Main Navigation"
    >
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delayChildren: 0.2,
          staggerChildren: 0.1,
        }}
        className="flex items-center p-2.5 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 shadow-lg"
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative 
              p-4 
              text-base 
              transition-all 
              duration-300 
              ease-in-out
            ${currentPath === item.href ? "bg-white/30 text-white rounded-full" : "text-white/80 hover:text-white"}
              ${item.isSpecialButton ? "flex items-center uppercase bg-primary !text-amber-900 h-12 rounded-full text-sm px-6 font-bold" : ""}
            `}
          >
            {currentPath === item.href && (
              <motion.span
                layoutId="menu-active-background"
                className="absolute inset-0 bg-white/30 rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
            <Link href={item.href} className="flex items-center justify-center">
              {item.icon ? (
                <FontAwesomeIcon icon={item.icon} size="lg" />
              ) : (
                item.name
              )}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};
