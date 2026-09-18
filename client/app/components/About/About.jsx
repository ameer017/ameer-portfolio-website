"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiGo,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  registerMotion,
  prefersReducedMotion,
} from "@/app/lib/motion";

const roles = [
  { label: "Web", Icon: SiReact },
  { label: "Backend", Icon: SiNodedotjs },
  { label: "Mobile", Icon: RiNextjsFill },
  { label: "Systems", Icon: SiGo },
  { label: "Data", Icon: SiPostgresql },
  { label: "TypeScript", Icon: SiTypescript },
];

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      registerMotion();
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".about-reveal",
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.12,
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
      id="about"
      className="relative bg-black px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="about-reveal mb-8">
          <span className="section-pill">Who Am I</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="about-reveal">
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">
              Everything about{" "}
              <span className="font-emphasis normal-case text-[1.05em]">
                Abdullah
              </span>
            </h2>
            <p className="mt-6 text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
              From JavaScript and React Native to backend services and
              infrastructure, I turn complex problems into software teams can
              trust and users actually enjoy. Currently leading engineering
              mentorship at DLT Africa and shipping products across web, mobile,
              and systems.
            </p>
            <Link
              href="#toolbox"
              className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.16em] uppercase text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Learn More
              <FiArrowRight className="text-base" />
            </Link>
          </div>

          <div className="about-reveal relative mx-auto w-full max-w-md aspect-square">
            <div className="absolute inset-[12%] rounded-full border border-dashed border-white/15" />
            <div className="absolute inset-[28%] rounded-full border border-white/10 bg-white/[0.02]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/20 bg-neutral-950 flex items-center justify-center">
                <span className="font-space text-2xl font-bold text-white">
                  AA
                </span>
              </div>
            </div>
            {roles.map(({ label, Icon }, i) => {
              const angle = (i / roles.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 42;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return (
                <div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="w-11 h-11 rounded-full border border-white/15 bg-black/90 backdrop-blur flex items-center justify-center text-white text-lg">
                    <Icon />
                  </div>
                  <span className="text-[10px] tracking-wide uppercase text-neutral-500">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
