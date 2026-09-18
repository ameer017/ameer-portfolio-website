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
import { useGSAP } from "@gsap/react";
import {
  gsap,
  registerMotion,
  prefersReducedMotion,
} from "@/app/lib/motion";

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

  useGSAP(
    () => {
      registerMotion();
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".toolbox-reveal",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="toolbox"
      className="relative bg-black px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="toolbox-reveal mb-10 md:mb-14">
          <span className="section-pill">What Do I Use</span>
          <h2 className="mt-5 font-space text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
            My tech toolbox
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {toolbox.map(({ id, title, copy, icons, span }) => (
            <div
              key={id}
              className={`toolbox-reveal glass-dark rounded-2xl p-6 md:p-7 ${span}`}
            >
              <p className="text-xs tracking-[0.18em] uppercase text-neutral-400 font-medium mb-3">
                {title}
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                {copy}
              </p>
              <div className="flex flex-wrap gap-3">
                {icons.map(({ Icon, name }) => (
                  <div
                    key={name}
                    title={name}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white text-xl"
                  >
                    <Icon aria-label={name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolbox;
