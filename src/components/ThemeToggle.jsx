"use client";
import React, { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if localStorage is available before using it
  const theme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  useEffect(() => {
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, [theme]);

  const toggleDarkMode = () => {
    document.querySelector("body").setAttribute("theme", "dark");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const toggleLightMode = () => {
    document.querySelector("body").setAttribute("theme", "light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      toggleDarkMode();
    } else {
      toggleLightMode();
    }
  }, [theme]);

  return (
    <div>
      {darkMode ? (
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            toggleLightMode();
          }}
          className="w-[55px] h-[50px] flex items-center justify-center rounded-full hover:bg-[#13191b]"
        >
          <IoMoonOutline className="w-[30px] h-[30px] text-white" />
        </button>
      ) : (
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            toggleDarkMode();
          }}
          className="w-[55px] h-[50px] flex items-center justify-center rounded-full hover:bg-[#ECECEC]  "
        >
          <GoSun className="w-[30px] h-[30px]" />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
