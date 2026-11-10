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
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

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

  useChapterTimeline(
    sectionRef,
    (tl, gsapInstance) => {
      gsapInstance.set(".about-pill, .about-copy, .about-orbit", {
        autoAlpha: 0,
      });
      gsapInstance.set(".about-node", { autoAlpha: 0, scale: 0.6 });

      tl.fromTo(
        ".about-pill",
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.45, ease: "expo.out" }
      )
        .fromTo(
          ".about-copy",
          { y: 70, autoAlpha: 0, rotateX: 10, transformOrigin: "top left" },
          { y: 0, autoAlpha: 1, rotateX: 0, duration: 0.75, ease: "expo.out" },
          "-=0.2"
        )
        .fromTo(
          ".about-orbit",
          { autoAlpha: 0, scale: 0.85 },
          { autoAlpha: 1, scale: 1, duration: 0.55, ease: "expo.out" },
          "-=0.45"
        )
        .fromTo(
          ".about-node",
          { autoAlpha: 0, scale: 0.5 },
          {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.4,
            ease: "back.out(1.6)",
          },
          "-=0.25"
        )
        .to(
          ".about-orbit-spin",
          { rotation: 50, duration: 1, ease: "none" },
          "-=0.15"
        )
        .to(
          ".about-stage",
          {
            autoAlpha: 0.2,
            scale: 0.92,
            y: -28,
            filter: "blur(5px)",
            duration: 0.65,
            ease: "power3.in",
          },
          "-=0.1"
        );
    },
    { endDesktop: "+=200%", endMobile: "+=140%", scrub: 0.4 }
  );

  return (
    <Chapter
      id="about"
      innerRef={sectionRef}
      className="border-b border-white/10"
    >
      <div
        className="about-stage h-full overflow-y-auto px-6 md:px-10 py-20 md:py-24 will-change-transform"
        style={{ perspective: "1000px" }}
      >
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
          <div className="about-pill mb-8">
            <span className="section-pill">Who Am I</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="about-copy">
              <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.1]">
                Everything about{" "}
                <span className="font-emphasis normal-case text-[1.08em]">
                  Abdullah
                </span>
              </h2>
              <p className="mt-6 text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
                From JavaScript and React Native to backend services and
                infrastructure, I turn complex problems into software teams can
                trust and users actually enjoy. Currently leading engineering
                mentorship at DLT Africa and shipping products across web,
                mobile, and systems.
              </p>
              <Link
                href="#toolbox"
                className="mt-8 group inline-flex items-center gap-2 text-sm tracking-[0.16em] uppercase text-white font-medium"
              >
                Learn More
                <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>

            <div className="about-orbit relative mx-auto w-full max-w-md aspect-square">
              <div className="absolute inset-[12%] rounded-full border border-dashed border-white/15" />
              <div className="absolute inset-[28%] rounded-full border border-white/10 bg-white/[0.02]" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-24 h-24 rounded-full border border-white/25 bg-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                  <span className="font-space text-2xl font-bold text-white">
                    AA
                  </span>
                </div>
              </div>

              <div className="about-orbit-spin absolute inset-0 will-change-transform">
                {roles.map(({ label, Icon }, i) => {
                  const angle = (i / roles.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 42;
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;
                  return (
                    <div
                      key={label}
                      className="about-node absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className="w-11 h-11 rounded-full border border-white/20 bg-black/95 backdrop-blur flex items-center justify-center text-white text-lg">
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
        </div>
      </div>
    </Chapter>
  );
};

export default About;
