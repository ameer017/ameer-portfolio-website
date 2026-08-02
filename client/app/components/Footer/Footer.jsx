"use client";

import React from "react";
import Link from "next/link";
import { BsTwitterX, BsMedium, BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaArrowUp } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/ameer017", icon: BsGithub },
  { name: "Twitter", href: "https://x.com/17_alAmeer", icon: BsTwitterX },
  {
    name: "Medium",
    href: "https://medium.com/@rajiabdullahi907",
    icon: BsMedium,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/a.rajiabdullahi/",
    icon: GrInstagram,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5 px-6 md:px-12 lg:px-24 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-md">
            <p className="font-space text-3xl md:text-4xl font-bold text-white tracking-tight">
              Abdullah Raji
              <span className="inline-block w-2 h-2 ml-1 mb-1 rounded-full bg-neutral-500 align-middle" />
            </p>
            <p className="mt-3 text-neutral-500 text-sm md:text-base leading-relaxed">
              Fullstack engineer building reliable products — open to new
              opportunities and interesting problems.
            </p>
            <a
              href="mailto:rajiabdullahi907@gmail.com"
              className="inline-block mt-5 text-white text-sm hover:text-neutral-300 transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400"
            >
              rajiabdullahi907@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex items-center gap-5">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-neutral-500 hover:text-white transition-colors text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs sm:text-sm">
            &copy; {currentYear} Abdullah Raji. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
            aria-label="Scroll to top"
          >
            Back to top
            <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
