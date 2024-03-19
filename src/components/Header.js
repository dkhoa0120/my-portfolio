import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="p-3 w-[1200px] max-xl:w-full max-sm:w-full flex items-center justify-between h-20">
      <p className="text-[36px] leading-3 font-line font-mono font-[1000] flex items-center justify-center">
        <img
          src="/img/other/logo.png"
          alt="logo"
          className="w-[55px] h-[55px]"
        />
        <span className="dark:text-white">
          Khoa<span className="font-light">Le</span>
        </span>{" "}
        <span className="text-[#ec4d37] mb-3 ml-1">__</span>
      </p>
      <ThemeToggle />
    </div>
  );
};

export default Header;
