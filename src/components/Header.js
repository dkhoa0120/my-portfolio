import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="p-3 w-[1400px] max-xl:w-full max-sm:w-full flex items-center justify-between h-24">
      <p className="font-bold text-4xl">
        <span className="text-[#ec4d37]">K</span>
        <span className="dark:text-white">HOA.LE</span>
      </p>
      <ThemeToggle />
    </div>
  );
};

export default Header;
