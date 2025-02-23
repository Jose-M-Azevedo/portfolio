"use client";
import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <nav className="py-4 border-b border-customBorder">
        <div className="container mx-auto flex justify-between items-center max-w-[50%]">
          <div className="space-x text-base flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          <div className="space-x-2 flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`${
                darkMode ? "hover:text-black" : "hover:text-white"
              } py-3 px-5`}
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="text-2xl"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
