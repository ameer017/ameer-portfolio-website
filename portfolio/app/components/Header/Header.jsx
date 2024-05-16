"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiSparkles } from "react-icons/gi";
import { TfiMenu } from "react-icons/tfi";

const navItems = [
  { id: 1, title: "About", url: "#about" },
  { id: 2, title: "Services", url: "#service" },
  { id: 3, title: "Contact", url: "#contact" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="px-12 py-8 text-[#fff] text-[20px] flex justify-between bg-none fixed w-screen ">
      <Link href="/" className="flex gap-[10px] items-center justify-center">
        <GiSparkles />
        AL AMEER
      </Link>

      <div>
        <div
          className="flex flex-col items-end justify-center gap-2 cursor-pointer"
          onClick={toggleNav}
        >
          <TfiMenu />
        </div>

        {isNavOpen && (
          <div
            className={`nav-items flex flex-col absolute bg-none w-[100%] text-[#fff] right-0 left-0 mt-4 px-12 py-8 text-right ${
              isNavOpen ? "open" : ""
            }`}
          >
            {navItems.map(({ id, title, url }) => (
              <Link
                href={url}
                key={id}
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer"
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
