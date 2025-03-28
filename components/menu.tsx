"use client";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeLg } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Menu = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "",
      href: "/",
      icon: <FontAwesomeIcon icon={faHomeLg} size={`lg`} />,
    },
    { name: "Menu", href: "/menu" },
    { name: "Restaurant", href: "/about" },
    {
      name: "Workshop",
      href: "/workshop",
    },
    { name: "Book a table", href: "/book" },
  ];

  return (
    <nav
      className="flex justify-center items-center pb-16 relative w-full"
      role="navigation"
      aria-label="Main Navigation"
    >
      <ul className="flex items-center p-2.5 bg-white text-black rounded-full">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`p-4 text-base ${pathname === item.href ? "bg-gray-100 rounded-full" : "text-black"} ${index === menuItems.length - 1 ? "flex items-center text-white uppercase bg-black h-12 rounded-full text-sm px-6" : ""}`}
          >
            <Link href={item.href}>{item.icon || item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
