export const Menu = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`flex justify-center items-center pb-16 relative w-full`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <ul
        className={`flex items-center p-2.5 bg-white text-black rounded-full`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`p-4 ${index === menuItems.length - 1 ? "text-white bg-black rounded-full" : ""}`}
          >
            <a href={item.href} className={`text-base`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
