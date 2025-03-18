import { useState, useRef, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const MenuLinks = [
  { id: 1, name: "Price", link: "/#price" },
  { id: 2, name: "Problem", link: "/#problem" },
  { id: 3, name: "How It Works", link: "/#tech-stack" },
  { id: 4, name: "Pricing", link: "/#price" },
  { id: 5, name: "Our Solution", link: "/#our-solution" },
  { id: 6, name: "Contact Us", link: "/#contact-us" },
];

export const suggestions = [
  { name: "Pricing Page", link: "/#price" },
  { name: "How It Works", link: "/#tech-stack" },
  { name: "Contact Us", link: "/#contact-us" },
  { name: "Our Solution", link: "/#our-solution" },
  { name: "About Platform", link: "/platform-overview" },
  { name: "How It Works", link: "/#tech-stack" },
  { name: "Contact Us", link: "/#contact-us" },
  { name: "Our Solution", link: "/#our-solution" },
  { name: "Pricing Page", link: "/#price" },
  { name: "How It Works", link: "/#tech-stack" },
  { name: "Contact Us", link: "/#contact-us" },
  { name: "Our Solution", link: "/#our-solution" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery("");
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <span id="home"></span>
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white/50 backdrop-blur-md shadow-md" : "bg-transparent"}`}
        style={{ zIndex: 1000 }}
      >
        <div className="container mx-auto py-3 md:py-2 md:pt-4 px-4 md:px-6">
          <div className="flex justify-between items-center w-full">
            <a href="/#home" className="cursor-pointer">
              <img src={Logo} alt="Logo" className="w-40 sm:w-[230px]" />
            </a>
            <nav className="hidden md:flex items-center gap-x-8">
              <ul className="flex items-center gap-x-8">
                {MenuLinks.map(({ id, name, link }) => (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-x-4">
              <FaSearch size={22} className="cursor-pointer" onClick={toggleSearch} />
              <Link
                to="/book-demo"
                className="hidden md:block px-4 py-2 bg-primary2 text-white rounded-lg hover:bg-primary-dark transition-all"
              >
                Request Demo
              </Link>
              <div className="md:hidden">
                {showMenu ? (
                  <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
        {searchOpen && (
          <div ref={searchRef} className="absolute top-full left-0 w-full bg-white shadow-md p-4">
            <input
              type="text"
              className="w-full p-2 border rounded-md text-black"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
           <ul className="mt-2 max-h-[180px] overflow-y-auto ">
  {suggestions
    .filter(({ name }) => name.toLowerCase().includes(searchQuery.toLowerCase()))
    .map(({ name, link }, index) => (
      <li key={index} className="cursor-pointer hover:bg-gray-200">
        <a
          href={link}
          onClick={() => setSearchOpen(false)} // Close search on click
          className="block p-2"
        >
          {name}
        </a>
      </li>
    ))}
</ul>

          </div>
        )}
        <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};

export default Navbar;
