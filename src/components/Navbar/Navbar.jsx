import  { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";

import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

export const MenuLinks = [

  // Features
  {
    id: 1,
    name: "Features",
    link: "/#features",
  },
  {
    id: 2,
    name: "Problem",
    link: "/#problem",
  },
  {
    id: 3,
    name: "How It Works",
    link: "/#projects",
  },
  {
    id: 4,
    name: "Pricing",
    link: "/#price",
  },
 
  {
    id: 6,
    name: "Contact Us",
    link: "/#contact-us",
  },
  
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [nav, setNav] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //   const changeBackground = () => {
  //   if (window.scrollY >= 50) {
  //     seNav(true);
  //   } else {
  //     seNav(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);
  return (
    <div
      className="relative z-10  w-full dark:bg-black dark:text-white duration-300 
      
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
           
          >
            <img src={Logo} alt="" className=" cursor-pointer w-40" />
            {/* <span className="text-2xl sm:text-3xl font-semibold">
              Digital agency
            </span> */}
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                 >
                    {name}
                  </a>
                </li>
              ))}
              <Link to="/book-demo" className="primary-btn" >Request Demo</Link>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
