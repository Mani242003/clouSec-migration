import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ? localStorage.getItem("theme")! : "light"
  );

  const element = document.documentElement; // access to html element

  // set theme to localStorage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  }, [theme, element.classList]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun 
          onClick={() => setTheme("light")} 
          className="text-2xl cursor-pointer" 
          aria-label="Switch to light mode"
        />
      ) : (
        <BiSolidMoon 
          onClick={() => setTheme("dark")} 
          className="text-2xl cursor-pointer" 
          aria-label="Switch to dark mode"
        />
      )}
    </>
  );
};

export default DarkMode;
