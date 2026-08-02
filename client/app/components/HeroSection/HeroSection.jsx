import React from "react";
import Link from "next/link";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGo,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiRust,
  SiPython,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BsGithub, BsTwitterX, BsMedium } from "react-icons/bs";

const stack = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Go", icon: SiGo },
  { name: "NestJS", icon: SiNestjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Rust", icon: SiRust },
  { name: "Python", icon: SiPython },
];

const socials = [
  { name: "GitHub", href: "https://github.com/ameer017", icon: BsGithub },
  { name: "Twitter", href: "https://x.com/17_alAmeer", icon: BsTwitterX },
  {
    name: "Medium",
    href: "https://medium.com/@rajiabdullahi907",
    icon: BsMedium,
  },
];

const HeroSection = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black px-6 md:px-12 lg:px-24 pt-24 pb-16">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-space text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
            Abdullah Raji
            <span className="inline-block w-2.5 h-2.5 ml-1 mb-1 rounded-full bg-neutral-500 align-bottom" />
          </h1>

          <p className="mt-4 text-neutral-400 text-lg md:text-xl font-medium">
            Fullstack Software Engineer
          </p>

          <p className="mt-5 text-neutral-500 text-[15px] md:text-base leading-relaxed max-w-md">
            I build software that solves real business problems. As a full-stack
            software engineer, I design and develop scalable web and mobile
            applications, architect reliable backend systems, and create
            intuitive user experiences. I enjoy turning complex ideas into
            products that are fast, maintainable, and built to scale.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-5">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-neutral-500 hover:text-white transition-colors text-xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <Link
              href="#con"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-neutral-600 text-white text-sm font-medium hover:border-neutral-400 hover:bg-white/5 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="lg:justify-self-end w-full max-w-md">
          <p className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-neutral-500 mb-5 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Current Stack
          </p>

          <div className="flex flex-wrap gap-2.5">
            {stack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3.5 py-2 text-sm text-neutral-300"
              >
                <Icon className="text-base text-neutral-400" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
