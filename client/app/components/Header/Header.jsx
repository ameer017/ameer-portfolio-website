"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-6 md:px-12 py-5 flex justify-center items-center fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-space font-bold text-white text-lg tracking-wide hover:text-neutral-300 transition-colors"
      >
        AL AMEER
        <span className="inline-block w-1.5 h-1.5 ml-0.5 mb-0.5 rounded-full bg-neutral-500 align-middle" />
      </Link>
    </header>
  );
};

export default Header;
