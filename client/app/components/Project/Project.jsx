"use client";

import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

const DEFAULT_IMAGE = "/projects/default.jpg";

const data = [
  {
    id: 1,
    title: "Rail NG",
    tags: ["TypeScript", "PostgreSQL", "Prisma ORM", "Transportation"],
    description:
      "Nigeria-focused train ticketing: passenger booking plus an operator console || Lagos–Ibadan and Abuja–Kaduna are seeded with NGN fares and WAT times.",
    urlOne: "https://rail-ng.netlify.app/",
    urlTwo: "https://github.com/ameer017/railNG",
    image: "/projects/rail-ng.png",
  },
  {
    id: 2,
    title: "Auth Pulse",
    tags: ["CLI", "SDK", "NestJS", "Node.js"],
    description:
      "A developer-first CLI that scaffolds production-ready auth and user CRUD for Node.js, NestJS, or FastAPI — JWT, hashing, and protected routes included.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/auth-pulse",
    image: "/projects/auth-pulse.jpg",
  },
  {
    id: 3,
    title: "PayLite",
    tags: [".NET", "React", "MongoDB", "Payments"],
    description:
      "Full-stack payment platform with wallet management, P2P transfers, and deposits — built with .NET 9, React, MongoDB, and Flutterwave.",
    urlOne: "https://paylite-web-teal.vercel.app/",
    urlTwo: "https://github.com/ameer017/paylite",
    image: "/projects/paylite.jpg",
  },
  {
    id: 4,
    title: "Notify Hub",
    tags: ["Go", "PostgreSQL", "Docker", "Kafka"],
    description:
      "Fullstack notification platform for businesses, with email, SMS, and push notifications — built with Go, PostgreSQL, Docker, and Kafka.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/scaling-guide/tree/main/notifyHub",
    // no image — falls back to default
  },
];

const ProjectCard = ({
  id,
  title,
  description,
  urlOne,
  urlTwo,
  tags,
  image,
  index,
  total,
}) => {
  const bg = image || DEFAULT_IMAGE;

  return (
    <article
      className={`proj-slide-${index} absolute inset-0 flex flex-col justify-center max-w-3xl mx-auto`}
    >
      <div
        className="relative overflow-hidden border border-dashed border-neutral-800 rounded-2xl min-h-[340px] md:min-h-[380px] flex flex-col justify-end"
        style={{
          backgroundImage: `url(${bg}), url(${DEFAULT_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/40"
          aria-hidden="true"
        />

        <div className="relative z-10 p-6 md:p-10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-space text-sm text-neutral-400 tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-1.5">
              {Array.from({ length: total }).map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 w-6 rounded-full ${
                    idx === index ? "bg-white" : "bg-white/20"
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
                className="text-xs font-medium text-neutral-200 bg-black/50 border border-white/15 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-8 max-w-2xl">
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
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-neutral-200 bg-black/40 px-5 py-2.5 rounded-full font-medium text-sm hover:border-white/50 hover:text-white transition-colors backdrop-blur-sm"
            >
              <FaGithub />
              Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  const sectionRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl, gsapInstance) => {
      gsapInstance.set(
        data.map((_, i) => `.proj-slide-${i}`).join(", "),
        { autoAlpha: 0 }
      );

      tl.addLabel("intro").fromTo(
        ".proj-header",
        { y: 60, autoAlpha: 0, scale: 0.94 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.65, ease: "expo.out" }
      );

      data.forEach((_, i) => {
        const sel = `.proj-slide-${i}`;
        tl.addLabel(`proj${i}`);

        if (i > 0) {
          tl.to(`.proj-slide-${i - 1}`, {
            autoAlpha: 0,
            x: -120,
            rotate: -3,
            scale: 0.9,
            filter: "blur(6px)",
            duration: 0.4,
            ease: "power3.in",
          });
        }

        tl.fromTo(
          sel,
          {
            autoAlpha: 0,
            x: 140,
            rotate: 4,
            scale: 1.06,
            clipPath: "inset(0 0 0 100%)",
          },
          {
            autoAlpha: 1,
            x: 0,
            rotate: 0,
            scale: 1,
            clipPath: "inset(0 0 0 0%)",
            duration: 0.75,
            ease: "expo.out",
          }
        );
      });

      tl.to(".proj-stage", {
        autoAlpha: 0.15,
        y: -40,
        scale: 0.92,
        filter: "blur(5px)",
        duration: 0.55,
        ease: "power3.in",
      });
    },
    {
      endDesktop: "+=360%",
      endMobile: "+=280%",
      scrub: 0.35,
      snap: {
        snapTo: "labels",
        duration: { min: 0.12, max: 0.35 },
        delay: 0,
        ease: "power2.inOut",
      },
    }
  );

  return (
    <Chapter
      id="pro"
      innerRef={sectionRef}
      className="border-b border-dashed border-neutral-800"
    >
      <div className="proj-stage h-full px-6 md:px-12 lg:px-24 py-20 md:py-24 flex flex-col will-change-transform">
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

          <div className="relative flex-1 min-h-[340px] md:min-h-[400px]">
            {data.map((project, i) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={i}
                total={data.length}
              />
            ))}
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
