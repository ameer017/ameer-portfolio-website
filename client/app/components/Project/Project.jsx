"use client";

import React, { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

const DEFAULT_IMAGE = "/projects/default.jpg";

const data = [
  {
    id: 1,
    title: "Rail NG",
    subtitle: "Ticketing & Ops",
    urlOne: "https://rail-ng.netlify.app/",
    urlTwo: "https://github.com/ameer017/railNG",
    image: "/projects/rail-ng.png",
  },
  {
    id: 2,
    title: "Medi Vault",
    subtitle: "Healthcare Records",
    urlOne: "https://medic-vault.netlify.app/",
    urlTwo: "https://github.com/ameer017/medi-vault",
    image: "/projects/medic-vault.png",
  },
  {
    id: 3,
    title: "PayLite",
    subtitle: "Payments & Wallets",
    urlOne: "https://paylite-web-teal.vercel.app/",
    urlTwo: "https://github.com/ameer017/paylite",
    image: "/projects/paylite.jpg",
  },
  {
    id: 4,
    title: "Estate NG",
    subtitle: "Estate and Property Management",
    urlOne: "https://estate-ng.netlify.app/",
    urlTwo: "https://github.com/ameer017/estate-ng",
    image: "/projects/estate-ng.png",
  },
];

const ProjectCard = ({ title, subtitle, urlOne, urlTwo, image }) => {
  const href = urlOne !== "#" ? urlOne : urlTwo;
  const bg = image || DEFAULT_IMAGE;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card group block"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-neutral-950 border border-white/10">
        <div
          className="proj-media absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg}), url(${DEFAULT_IMAGE})`,
          }}
        />
        <div className="proj-shade absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white text-base md:text-lg font-medium leading-snug transition-transform duration-300 group-hover:translate-x-1">
            {title}
          </h3>
          <p className="mt-0.5 text-sm text-neutral-500">{subtitle}</p>
        </div>
        <span className="shrink-0 mt-0.5 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
          <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
};

const Project = () => {
  const sectionRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl, gsapInstance) => {
      gsapInstance.set(".proj-header, .proj-item, .proj-more", {
        autoAlpha: 0,
      });

      tl.addLabel("header")
        .fromTo(
          ".proj-header",
          { y: 50, autoAlpha: 0, scale: 0.96 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.6, ease: "expo.out" }
        );

      data.forEach((_, i) => {
        tl.addLabel(`proj${i}`).fromTo(
          `.proj-item-${i}`,
          {
            y: 80,
            autoAlpha: 0,
            scale: 1.06,
            clipPath: "inset(100% 0 0 0)",
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.65,
            ease: "expo.out",
          },
          i === 0 ? "-=0.2" : "-=0.4"
        );
      });

      tl.fromTo(
        ".proj-more",
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      ).to(".proj-stage", {
        autoAlpha: 0.18,
        scale: 0.93,
        filter: "blur(5px)",
        duration: 0.55,
        ease: "power3.in",
      });
    },
    {
      endDesktop: "+=200%",
      endMobile: "+=150%",
      scrub: 0.35,
      snap: {
        snapTo: "labels",
        duration: { min: 0.1, max: 0.28 },
        delay: 0,
        ease: "power2.inOut",
      },
    }
  );

  return (
    <Chapter
      id="pro"
      innerRef={sectionRef}
      className="border-b border-white/10"
    >
      <div className="proj-stage h-full overflow-y-auto px-6 md:px-10 py-16 md:py-20 will-change-transform">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
          <div className="proj-header text-center mb-8 md:mb-10">
            <span className="section-pill">Selected Works</span>
            <h2 className="mt-4 font-space text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase max-w-3xl mx-auto leading-tight">
              Products that solve real{" "}
              <span className="font-emphasis normal-case">problems</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {data.map((project, i) => (
              <div key={project.id} className={`proj-item proj-item-${i}`}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="proj-more mt-8 md:mt-10 flex justify-center">
            <a
              href="https://github.com/ameer017"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-white font-medium"
            >
              View More
              <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Chapter>
  );
};

export default Project;
