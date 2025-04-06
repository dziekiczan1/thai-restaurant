"use client";
import React, { useRef } from "react";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { menuData } from "@/config/menu-data";
import { PageTitle, SectionTitle } from "@/components/page-title";

export default function MainMenu() {
  const sectionRefs = useRef<
    Record<string, React.RefObject<HTMLDivElement | null>>
  >(
    menuData.reduce(
      (acc, section) => {
        acc[section.id] = React.createRef<HTMLDivElement>();
        return acc;
      },
      {} as Record<string, React.RefObject<HTMLDivElement | null>>,
    ),
  );

  const scrollToSection = (id: string) => {
    const sectionRef = sectionRefs.current[id];

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full text-white min-h-screen lg:overflow-y-auto">
      <PageTitle text="Main Menu" centered className={`pt-12`} />
      <nav className="sticky top-0 bg-black z-10 shadow-md">
        <ul className="flex justify-center flex-wrap lg:flex-nowrap items-center gap-x-6 gap-y-2 lg:gap-8 py-2 lg:py-6 px-4 overflow-x-auto">
          {menuData.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-lg hover:text-primary transition-colors whitespace-nowrap hover:cursor-pointer"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-3xl mx-auto">
        {menuData.map((section) => (
          <div
            key={section.id}
            ref={sectionRefs.current[section.id]}
            className="my-12 scroll-mt-5 lg:scroll-mt-20"
          >
            <SectionTitle text={section.title} />
            <ul className="flex flex-col gap-1 lg:gap-4 w-full">
              {section.items.map((item) => (
                <li
                  key={item.id}
                  className={`relative flex items-center gap-4 px-4 py-6 lg:px-6 rounded-lg ${item.isSpecial ? "border-2 border-primary" : ""} hover:bg-white/10 transition-colors`}
                >
                  {item.isSpecial && (
                    <span className="absolute right-4 lg:right-20 -top-4 text-xs bg-primary text-black px-3 py-1 lg:py-2 rounded-lg">
                      Our Bestseller
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[90px] h-[70px] rounded-xl object-cover"
                  />
                  <div className="flex flex-col gap-1 flex-grow">
                    <div className="flex justify-between w-full text-lg lg:text-xl items-center">
                      <div className="flex items-center gap-2">
                        <h3>{item.name}</h3>
                        {item.isVegetarian && (
                          <FontAwesomeIcon
                            icon={faLeaf}
                            size="1x"
                            className={`text-green-700`}
                          />
                        )}
                      </div>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
