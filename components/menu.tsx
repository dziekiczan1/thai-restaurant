"use client";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHomeLg } from "@fortawesome/free-solid-svg-icons";

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
    { name: "Workshop", href: "/workshop" },
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
            className={`p-4 text-base ${
              pathname === item.href ? "bg-gray-100 rounded-full" : "text-black"
            } ${index === menuItems.length - 1 ? "text-white uppercase bg-black rounded-full text-sm px-6" : ""}`}
          >
            <a href={item.href}>{item.icon || item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
