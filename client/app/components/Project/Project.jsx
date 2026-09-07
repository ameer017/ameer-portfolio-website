"use client";

import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

const data = [
  {
    id: 1,
    title: "Ledger Core",
    tags: ["TypeScript", "PostgreSQL", "Nomba", "Finance"],
    description:
      "Universal reconciliation engine on Nomba Virtual Accounts — captures inbound transfers, matches them to obligations, and maintains an immutable customer ledger in real time.",
    urlOne: "https://velo-credit-ledger-core.vercel.app/",
    urlTwo: "https://github.com/Ledger-OS-Infra/ledger-core",
  },
  {
    id: 2,
    title: "Auth Pulse",
    tags: ["CLI", "SDK", "NestJS", "Node.js"],
    description:
      "A developer-first CLI that scaffolds production-ready auth and user CRUD for Node.js, NestJS, or FastAPI — JWT, hashing, and protected routes included.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/auth-pulse",
  },
  {
    id: 3,
    title: "PayLite",
    tags: [".NET", "React", "MongoDB", "Payments"],
    description:
      "Full-stack payment platform with wallet management, P2P transfers, and deposits — built with .NET 9, React, MongoDB, and Flutterwave.",
    urlOne: "https://paylite-web-teal.vercel.app/",
    urlTwo: "https://github.com/ameer017/paylite",
  },
  {
    id: 4,
    title: "Notify Hub",
    tags: ["Go", "PostgreSQL", "Docker", "Kafka"],
    description:
      "Fullstack notification platform for businesses, with email, SMS, and push notifications — built with Go, PostgreSQL, Docker, and Kafka.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/scaling-guide/tree/main/notifyHub",
  },
];

const Project = () => {
  const sectionRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl, gsapInstance) => {
      gsapInstance.set(
        data.map((_, i) => `.proj-slide-${i}`).join(", "),
        { autoAlpha: 0 }
      );

      tl.fromTo(
        ".proj-header",
        { y: 36, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.55 }
      );

      data.forEach((_, i) => {
        const sel = `.proj-slide-${i}`;
        if (i === 0) {
          tl.fromTo(
            sel,
            { autoAlpha: 0, x: 80, clipPath: "inset(0 0 0 100%)" },
            {
              autoAlpha: 1,
              x: 0,
              clipPath: "inset(0 0 0 0%)",
              duration: 0.75,
            },
            "-=0.15"
          );
        } else {
          tl.to(`.proj-slide-${i - 1}`, {
            autoAlpha: 0,
            x: -60,
            duration: 0.45,
            ease: "power2.in",
          }).fromTo(
            sel,
            { autoAlpha: 0, x: 80, clipPath: "inset(0 0 0 100%)" },
            {
              autoAlpha: 1,
              x: 0,
              clipPath: "inset(0 0 0 0%)",
              duration: 0.75,
            }
          );
        }
      });

      tl.to(".proj-stage", {
        autoAlpha: 0.4,
        y: -24,
        duration: 0.5,
      });
    },
    { endDesktop: "+=320%", endMobile: "+=260%" }
  );

  return (
    <Chapter
      id="pro"
      innerRef={sectionRef}
      className="border-b border-dashed border-neutral-800"
    >
      <div className="proj-stage h-full px-6 md:px-12 lg:px-24 py-20 md:py-24 flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
          <div className="proj-header text-center mb-10 md:mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3 font-medium">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-space mb-3">
              Featured Projects
            </h2>
            <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
              Scroll through selected work — financial systems, auth tooling,
              and product apps.
            </p>
          </div>

          <div className="relative flex-1 min-h-[320px]">
            {data.map(
              ({ id, title, description, urlOne, urlTwo, tags }, i) => (
                <article
                  key={id}
                className={`proj-slide-${i} absolute inset-0 flex flex-col justify-center max-w-3xl mx-auto`}
                >
                  <div className="border border-dashed border-neutral-800 bg-neutral-950/80 p-6 md:p-10 rounded-2xl">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-space text-sm text-neutral-600 tabular-nums">
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {String(data.length).padStart(2, "0")}
                      </span>
                      <div className="flex gap-1.5">
                        {data.map((_, idx) => (
                          <span
                            key={idx}
                            className={`h-1 w-6 rounded-full ${
                              idx === i ? "bg-white" : "bg-neutral-800"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-white font-space mb-4">
                      {title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base mb-8">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {urlOne !== "#" && (
                        <a
                          href={urlOne}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={urlTwo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 px-5 py-2.5 rounded-full font-medium text-sm hover:border-neutral-500 hover:text-white transition-colors"
                      >
                        <FaGithub />
                        Code
                      </a>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://github.com/ameer017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
            >
              <FaGithub />
              More on GitHub
            </a>
          </div>
        </div>
      </div>
    </Chapter>
  );
};

export default Project;
