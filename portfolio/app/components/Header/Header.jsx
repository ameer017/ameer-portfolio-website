"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GiSparkles } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { id: 1, title: "About", url: "#about" },
  { id: 2, title: "Services", url: "#ser" },
  { id: 4, title: "Projects", url: "#pro" },
  { id: 3, title: "Contact", url: "#con" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header
      className={`px-6 md:px-12 py-4 md:py-6 text-white text-[18px] md:text-[20px] flex justify-between items-center fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-xl" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex gap-2 items-center justify-center group">
        <GiSparkles className="text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
        <span className="font-bold font-space gradient-text-blue">
          AL AMEER
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 items-center">
        {navItems.map(({ id, title, url }) => (
          <Link
            href={url}
            key={id}
            className="relative text-white/80 hover:text-white transition-colors duration-300 group"
          >
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg glass-dark hover:bg-white/20 transition-all duration-300"
        onClick={toggleNav}
        aria-label="Toggle menu"
      >
        {isNavOpen ? (
          <IoClose className="text-2xl" />
        ) : (
          <HiMenuAlt3 className="text-2xl" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={toggleNav}
          ></div>
          <div
            className={`nav-items fixed top-0 right-0 h-screen w-[280px] glass-dark lg:hidden flex flex-col gap-6 px-8 py-20 shadow-2xl ${
              isNavOpen ? "open slide-in-right" : ""
            }`}
          >
            {navItems.map(({ id, title, url }, index) => (
              <Link
                href={url}
                key={id}
                className="text-white hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 text-lg font-medium"
                onClick={toggleNav}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {title}
              </Link>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
