"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#toolbox", label: "Stack" },
  { href: "#pro", label: "Projects" },
  { href: "#con", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
        <Link
          href="#home"
          className="font-space font-bold text-white text-lg tracking-wide shrink-0"
        >
          AL AMEER
          <span className="inline-block w-1.5 h-1.5 ml-0.5 mb-0.5 rounded-full bg-neutral-400 align-middle" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#con"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            className="md:hidden text-white text-2xl p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-lg px-6 py-8 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg text-neutral-300 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#con"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
