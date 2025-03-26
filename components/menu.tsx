export const Menu = () => {
  return (
    <nav
      className={`flex justify-center items-center pb-16 relative w-full`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <ul className="flex space-x-4 items-center">
        <li>
          <a href="/" className="text-lg hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-lg hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="text-lg hover:text-blue-600">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-lg hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
