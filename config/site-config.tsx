import { faHomeLg } from "@fortawesome/free-solid-svg-icons";

export interface PageConfig {
  href: string;
  name: string;
  icon?: any;
  background: string;
  subtitle: string;
  title: string;
  description: string;
  isSpecialButton?: boolean;
}

export const siteConfig: Record<string, PageConfig> = {
  "/": {
    href: "/",
    name: "Home",
    icon: faHomeLg,
    background: "/main2.webp",
    subtitle: "Authentic Thai Flavors",
    title: "Essence",
    description:
      "Savor authentic Thai flavors at Chantara, where rich curries and aromatic spices meet elegance.",
  },
  "/menu": {
    href: "/menu",
    name: "Menu",
    background: "/menu.webp",
    subtitle: "A Symphony of Tastes",
    title: "Flavors",
    description:
      "Explore a symphony of traditional Thai dishes, carefully crafted to delight your senses.",
  },
  "/about": {
    href: "/about",
    name: "Restaurant",
    background: "/about.webp",
    subtitle: "Our Culinary Heritage",
    title: "Story",
    description:
      "Discover the story behind Chantara, where passion meets tradition in every dish we create.",
  },
  "/workshop": {
    href: "/workshop",
    name: "Workshop",
    background: "/workshop.webp",
    subtitle: "Master Thai Cooking",
    title: "Craft",
    description:
      "Learn the art of Thai cuisine with our immersive and interactive cooking classes.",
  },
  "/book": {
    href: "/book",
    name: "Book a table",
    background: "/booking.webp",
    subtitle: "Reserve Your Experience",
    title: "Table",
    description:
      "Book a table and embark on a memorable culinary adventure at Chantara.",
    isSpecialButton: true,
  },
};

export const getMenuItems = () => {
  const paths = ["/", "/menu", "/about", "/workshop", "/book"];
  return paths.map((path) => siteConfig[path]);
};
