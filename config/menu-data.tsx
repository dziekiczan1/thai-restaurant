interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  isSpecial: boolean;
  image: string;
}

interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        id: 1,
        name: "Tod Mun Pla",
        description:
          "Thai fish cakes with curry paste, kaffir lime leaves, and sweet chili sauce.",
        price: 8.5,
        isVegetarian: false,
        isSpecial: true,
        image: "/menu/tod-mun.webp",
      },
      {
        id: 2,
        name: "Por Pia Tod",
        description:
          "Spring rolls filled with noodles, vegetables, and served with plum sauce.",
        price: 7.0,
        isVegetarian: true,
        isSpecial: false,
        image: "/menu/por-pia.webp",
      },
      {
        id: 3,
        name: "Satay Gai",
        description:
          "Chicken skewers marinated in coconut milk and spices with peanut sauce.",
        price: 8.5,
        isVegetarian: false,
        isSpecial: false,
        image: "/menu/satay-gai.webp",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        id: 4,
        name: "Som Tum",
        description:
          "Spicy green papaya salad with tomatoes, peanuts, and lime dressing.",
        price: 9.0,
        isVegetarian: true,
        isSpecial: true,
        image: "/menu/som-tum.webp",
      },
      {
        id: 5,
        name: "Yum Woon Sen",
        description:
          "Glass noodle salad with minced pork, shrimp, and spicy lime dressing.",
        price: 10.5,
        isVegetarian: false,
        isSpecial: false,
        image: "/menu/yum-woon.webp",
      },
      {
        id: 6,
        name: "Larb Gai",
        description:
          "Minced chicken salad with roasted rice powder, herbs, and lime dressing.",
        price: 10.0,
        isVegetarian: false,
        isSpecial: false,
        image: "/menu/larb-gai.webp",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      {
        id: 7,
        name: "Tom Yum Goong",
        description:
          "Hot and sour soup with prawns, lemongrass, and kaffir lime leaves.",
        price: 11.0,
        isVegetarian: false,
        isSpecial: true,
        image: "/menu/tom-yum.webp",
      },
      {
        id: 8,
        name: "Tom Kha Gai",
        description: "Coconut soup with chicken, galangal, and mushrooms.",
        price: 10.0,
        isVegetarian: false,
        isSpecial: false,
        image: "/menu/tom-kha.webp",
      },
      {
        id: 9,
        name: "Gaeng Jued",
        description: "Clear soup with tofu, vegetables, and glass noodles.",
        price: 8.0,
        isVegetarian: true,
        isSpecial: false,
        image: "/menu/gaeng-jued.webp",
      },
    ],
  },
  {
    id: "main-dishes",
    title: "Main Dishes",
    items: [
      {
        id: 10,
        name: "Pad Thai",
        description:
          "Stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts.",
        price: 13.5,
        isVegetarian: false,
        isSpecial: true,
        image: "/menu.webp",
      },
      {
        id: 11,
        name: "Gaeng Keow Wan",
        description:
          "Green curry with chicken, bamboo shoots, Thai eggplant, and Thai basil.",
        price: 14.5,
        isVegetarian: false,
        isSpecial: false,
        image: "/menu.webp",
      },
      {
        id: 12,
        name: "Pad Krapow Gai",
        description:
          "Stir-fried chicken with holy basil, chili, garlic, and served with rice.",
        price: 12.5,
        isVegetarian: false,
        isSpecial: false,
        image: "/menu.webp",
      },
      {
        id: 13,
        name: "Pad See Ew",
        description:
          "Stir-fried wide rice noodles with chicken, egg, and Chinese broccoli.",
        price: 12.0,
        isVegetarian: false,
        isSpecial: false,
        image: "/menu.webp",
      },
      {
        id: 14,
        name: "Pad Pak Ruam",
        description:
          "Stir-fried mixed vegetables with tofu, garlic and house sauce.",
        price: 11.5,
        isVegetarian: true,
        isSpecial: false,
        image: "/menu.webp",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: 15,
        name: "Khao Niao Mamuang",
        description: "Sweet sticky rice with fresh mango and coconut cream.",
        price: 7.5,
        isVegetarian: true,
        isSpecial: true,
        image: "/menu.webp",
      },
      {
        id: 16,
        name: "Kluay Buad Chee",
        description: "Bananas in warm coconut milk with a hint of pandan.",
        price: 6.5,
        isVegetarian: true,
        isSpecial: false,
        image: "/menu.webp",
      },
      {
        id: 17,
        name: "Tab Tim Krob",
        description:
          "Water chestnuts in syrup with coconut milk and crushed ice.",
        price: 6.0,
        isVegetarian: true,
        isSpecial: false,
        image: "/menu.webp",
      },
    ],
  },
];
