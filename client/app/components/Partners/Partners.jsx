"use client";

import React from "react";
import {
  SiVercel,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";

const logos = [
  { name: "Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: SiGithub },
  { name: "Figma", Icon: SiFigma },
  { name: "Netlify", Icon: SiNetlify },
  { name: "Docker", Icon: SiDocker },
  { name: "Next.js", Icon: SiNextdotjs },
];

const Partners = () => {
  const strip = [...logos, ...logos];

  return (
    <section
      aria-label="Tools and platforms"
      className="relative bg-neutral-950 border-y border-white/10 py-8 overflow-hidden"
    >
      <div className="flex w-max animate-marquee gap-16 md:gap-24 px-8">
        {strip.map(({ name, Icon }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-3 text-neutral-400 shrink-0"
          >
            <Icon className="text-2xl md:text-3xl" />
            <span className="text-sm md:text-base font-medium tracking-wide">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
