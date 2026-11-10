"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#toolbox", id: "toolbox", label: "Stack" },
  { href: "#pro", id: "pro", label: "Projects" },
  { href: "#con", id: "con", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);

      // Pin-aware: use viewport intersection, not offsetTop (pin-spacers skew layout)
      const marker = window.innerHeight * 0.42;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom > marker * 0.35) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <div
        className="absolute left-0 top-0 h-[2px] bg-white origin-left transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
        <Link
          href="#home"
          className="font-space font-bold text-white text-lg tracking-wide shrink-0"
        >
          AL AMEER
          <span className="inline-block w-1.5 h-1.5 ml-0.5 mb-0.5 rounded-full bg-neutral-400 align-middle" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, id, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm transition-colors ${
                active === id
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-200"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                  active === id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#con"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors active:scale-[0.97]"
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
          {navLinks.map(({ href, id, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-lg transition-colors ${
                active === id ? "text-white" : "text-neutral-400"
              }`}
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
