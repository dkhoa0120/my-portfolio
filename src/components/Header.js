import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="p-3 w-[1200px] max-xl:w-full max-sm:w-full flex items-center justify-between h-20">
      <p className="font-bold text-4xl font-mono">
        <span className="text-[#ec4d37]">K</span>
        <span className="dark:text-white">
          hoa<span className="font-light">Le</span>
        </span>{" "}
        <span className="text-[#ec4d37]">.</span>
      </p>
      <ThemeToggle />
    </div>
  );
};

export default Header;
