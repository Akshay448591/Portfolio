import { useState, useEffect } from "react";
import { Home, User, Code, Star, FileText, Mail } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "home", icon: <Home className="w-5 h-5 mr-1" /> },
    { name: "education", icon: <User className="w-5 h-5 mr-1" /> },
    { name: "projects", icon: <Code className="w-5 h-5 mr-1" /> },
    { name: "skills", icon: <Star className="w-5 h-5 mr-1" /> },
    { name: "resume", icon: <FileText className="w-5 h-5 mr-1" /> },
    { name: "contact", icon: <Mail className="w-5 h-5 mr-1" /> },
  ];

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      links.forEach((link) => {
        const el = document.getElementById(link.name);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(link.name);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/95 text-white backdrop-blur-md px-4 sm:px-6 md:px-8 py-4 z-50 shadow-md flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-extrabold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg hover:scale-105 transition-transform duration-300">
          <a href="#home">Akshay Yadav</a>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.name}`}
                className={`flex items-center px-2 sm:px-3 py-1 sm:py-2 rounded font-medium text-sm sm:text-base transition-all duration-300
                  ${
                    active === link.name
                      ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg text-white"
                      : "hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-500 hover:shadow-md"
                  }`}
              >
                {link.icon} {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-700 transition text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 sm:w-72 h-full bg-gray-900 text-white p-6 transform transition-transform duration-300 z-40 flex flex-col space-y-4 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={`#${link.name}`}
            className={`flex items-center px-3 py-2 rounded text-sm sm:text-base transition-all duration-300
              ${
                active === link.name
                  ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg text-white"
                  : "hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-500 hover:shadow-md"
              }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.icon} {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}
