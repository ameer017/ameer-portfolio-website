"use client";

import React, { useRef } from "react";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

const primaryExperience = [
  {
    id: 1,
    title: "Engineering Lead",
    company: "DLT Africa Tech Hub",
    detail: "Leading engineering mentorship and product builds across the hub.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Infrastructure Engineer",
    company: "Brokex CFD",
    detail:
      "Building and maintaining the infrastructure for the Brokex CFD platform.",
    stack: ["Rust", "Next.js"],
  },
];

const secondaryExperience = [
  {
    id: 3,
    title: "Mobile & Fullstack Engineer",
    company: "Tianlu Digital Service",
    detail:
      "Shipped production mobile and fullstack systems for client products.",
    stack: [
      "React Native",
      "NestJS",
      "Kubernetes",
      "AWS",
      "DigitalOcean",
      "MySQL",
    ],
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "Ledger Core",
    detail: "Building the backend for the Ledger Core platform.",
    stack: ["Node.js", "React", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Freelance Fullstack Developer",
    company: "Independent",
    detail: "Building fullstack solutions for startups and businesses.",
  },
];

const stats = [
  { value: "4+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "15+", label: "Technologies" },
];

const About = () => {
  const sectionRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl) => {
      tl.fromTo(
        ".about-intro",
        { y: 48, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7 }
      )
        .fromTo(
          ".about-stat",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.4 },
          "-=0.3"
        )
        .fromTo(
          ".about-exp-item",
          { x: 40, autoAlpha: 0, clipPath: "inset(0 0 100% 0)" },
          {
            x: 0,
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            stagger: 0.2,
            duration: 0.55,
          },
          "-=0.2"
        )
        .fromTo(
          ".about-secondary",
          { y: 60, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.1"
        )
        .fromTo(
          ".about-sec-card",
          { x: 48, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, stagger: 0.12, duration: 0.45 },
          "-=0.35"
        )
        .to(".about-stage", {
          autoAlpha: 0.4,
          scale: 0.97,
          duration: 0.6,
          ease: "power2.in",
        });
    },
    { endDesktop: "+=220%", endMobile: "+=160%" }
  );

  return (
    <Chapter
      id="about"
      innerRef={sectionRef}
      className="border-b border-dashed border-neutral-800"
    >
      <div className="about-stage h-full overflow-y-auto px-6 md:px-12 lg:px-24 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
            <div className="about-intro">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4 font-medium">
                About
              </p>
              <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Building products that work in the real world.
              </h2>
              <p className="text-neutral-500 text-base md:text-[17px] leading-relaxed max-w-xl">
                From JavaScript and React Native to backend services and Web3, I
                turn complex problems into software teams can trust and users
                actually enjoy.
              </p>

              <div className="mt-8 flex flex-row flex-wrap items-baseline gap-x-8 gap-y-2">
                {stats.map(({ value, label }) => (
                  <p key={label} className="about-stat text-neutral-400 text-sm">
                    <span className="font-space text-2xl font-bold text-white mr-1.5">
                      {value}
                    </span>
                    {label}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 font-medium">
                Experience
              </p>
              <ul>
                {primaryExperience.map((item, index) => (
                  <li
                    key={item.id}
                    className={`about-exp-item py-5 ${
                      index !== primaryExperience.length - 1
                        ? "border-b border-dashed border-neutral-800"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                      <span className="text-neutral-500 text-sm">
                        {item.company}
                      </span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                    {item.stack?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-neutral-400 border border-neutral-800 bg-neutral-950 px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-secondary mt-12 pt-8 border-t border-dashed border-neutral-800 flex flex-col md:flex-row gap-8 md:gap-6">
            {secondaryExperience.map((item) => (
              <div key={item.id} className="about-sec-card flex-1 min-w-0">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-2">{item.company}</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-3">
                  {item.detail}
                </p>
                {item.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-neutral-400 border border-neutral-800 bg-neutral-950 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  );
};

export default About;
