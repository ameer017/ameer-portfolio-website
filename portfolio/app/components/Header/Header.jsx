import Link from "next/link";
import React from "react";
import { GiSparkles } from "react-icons/gi";
const navItems = [
  { id: 1, title: "About", url: "#about" },
  { id: 2, title: "Services", url: "#service" },
  { id: 3, title: "Contact", url: "#contact" },
];

const Header = () => {
  return (
    <header className="px-12 py-8 text-[#fff] text-[20px] flex justify-between bg-none fixed w-screen ">
      <Link href="/" className="flex gap-[10px] items-center justify-center">
        <GiSparkles />
        AL AMEER
      </Link>
      <div className="flex gap-[80px] px-2 items-center justify-center">
        {navItems.map(({ id, title, url }) => (
          <Link href={url} key={id}>
            {title}{" "}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
