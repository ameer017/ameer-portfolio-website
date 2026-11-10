"use client";

import React, { useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiGo,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiDocker,
  SiAmazon,
  SiRust,
  SiPython,
  SiDotnet,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

const toolbox = [
  {
    id: "frontend",
    title: "Front-End",
    copy: "Interfaces that feel fast, clear, and intentional.",
    icons: [
      { Icon: SiReact, name: "React" },
      { Icon: RiNextjsFill, name: "Next.js" },
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: SiJavascript, name: "JavaScript" },
    ],
    span: "lg:col-span-3",
  },
  {
    id: "backend",
    title: "Back-End",
    copy: "APIs, services, and data layers built to scale.",
    icons: [
      { Icon: SiNodedotjs, name: "Node.js" },
      { Icon: SiNestjs, name: "NestJS" },
      { Icon: SiGo, name: "Go" },
      { Icon: SiDotnet, name: ".NET" },
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiMongodb, name: "MongoDB" },
    ],
    span: "lg:col-span-3",
  },
  {
    id: "design",
    title: "Design",
    copy: "From wireframe to polished UI.",
    icons: [{ Icon: SiFigma, name: "Figma" }],
    span: "lg:col-span-2",
  },
  {
    id: "architecture",
    title: "Architecture",
    copy: "Systems thinking across the stack.",
    icons: [
      { Icon: SiRust, name: "Rust" },
      { Icon: SiPython, name: "Python" },
    ],
    span: "lg:col-span-2",
  },
  {
    id: "platform",
    title: "Platform",
    copy: "Cloud, containers, and delivery.",
    icons: [
      { Icon: SiDocker, name: "Docker" },
      { Icon: SiAmazon, name: "AWS" },
    ],
    span: "lg:col-span-2",
  },
];

const TechToolbox = () => {
  const sectionRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl, gsapInstance) => {
      gsapInstance.set(".toolbox-header, .toolbox-card-item", {
        autoAlpha: 0,
      });

      tl.addLabel("intro")
        .fromTo(
          ".toolbox-header",
          { y: 60, autoAlpha: 0, scale: 0.96 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.65, ease: "expo.out" }
        );

      toolbox.forEach((_, i) => {
        tl.addLabel(`card${i}`).fromTo(
          `.toolbox-card-item-${i}`,
          {
            y: 70,
            autoAlpha: 0,
            scale: 0.92,
            filter: "blur(8px)",
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "expo.out",
          },
          i === 0 ? "-=0.25" : "-=0.35"
        );
      });

      tl.to(".toolbox-stage", {
        autoAlpha: 0.15,
        scale: 0.92,
        filter: "blur(6px)",
        duration: 0.55,
        ease: "power3.in",
      });
    },
    {
      endDesktop: "+=220%",
      endMobile: "+=160%",
      scrub: 0.35,
      snap: {
        snapTo: "labels",
        duration: { min: 0.1, max: 0.3 },
        delay: 0,
        ease: "power2.inOut",
      },
    }
  );

  return (
    <Chapter
      id="toolbox"
      innerRef={sectionRef}
      className="border-b border-white/10"
    >
      <div className="toolbox-stage h-full overflow-y-auto px-6 md:px-10 py-20 md:py-24 will-change-transform">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
          <div className="toolbox-header mb-8 md:mb-10">
            <span className="section-pill">What Do I Use</span>
            <h2 className="mt-4 font-space text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
              My tech toolbox
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
            {toolbox.map(({ id, title, copy, icons, span }, i) => (
              <div
                key={id}
                className={`toolbox-card-item toolbox-card-item-${i} toolbox-card glass-dark rounded-2xl p-5 md:p-6 ${span}`}
              >
                <p className="text-xs tracking-[0.18em] uppercase text-neutral-300 font-medium mb-2">
                  {title}
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {copy}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {icons.map(({ Icon, name }) => (
                    <div
                      key={name}
                      title={name}
                      className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white text-lg"
                    >
                      <Icon aria-label={name} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  );
};

export default TechToolbox;
