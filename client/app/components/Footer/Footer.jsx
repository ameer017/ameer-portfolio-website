"use client";

import React from "react";
import Link from "next/link";
import { BsTwitterX, BsMedium, BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

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

const footerLinks = [
  { href: "#pro", label: "Projects" },
  { href: "#about", label: "About Me" },
  { href: "#con", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="px-6 md:px-10 py-14 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight">
                AL AMEER
                <span className="inline-block w-2 h-2 ml-1 mb-1 rounded-full bg-neutral-400 align-middle" />
              </p>
            </div>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-md md:text-right leading-snug">
              Is there a fascinating{" "}
              <span className="font-emphasis text-white">project</span> brewing
              in your mind?
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <nav className="flex flex-wrap gap-6">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-neutral-500 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <a
              href="mailto:rajiabdullahi907@gmail.com"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              rajiabdullahi907@gmail.com
            </a>

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

          <p className="mt-10 text-neutral-600 text-xs">
            &copy; {currentYear} Abdullah Raji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
