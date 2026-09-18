"use client";

import React, { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import { gsap, registerMotion, prefersReducedMotion } from "@/app/lib/motion";

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
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-neutral-950 border border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url(${bg}), url(${DEFAULT_IMAGE})`,
          }}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="text-white text-base md:text-lg font-medium leading-snug">
          {title} <span className="text-neutral-500">[{subtitle}]</span>
        </h3>
        <FiArrowRight className="shrink-0 mt-1 text-white text-lg transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
};

const Project = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      registerMotion();
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".proj-reveal",
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef, revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      id="pro"
      className="relative bg-black px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="proj-reveal text-center mb-12 md:mb-16">
          <span className="section-pill">Selected Works</span>
          <h2 className="mt-5 font-space text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase max-w-3xl mx-auto leading-tight">
            Products that solve real{" "}
            <span className="font-emphasis normal-case">problems</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {data.map((project) => (
            <div key={project.id} className="proj-reveal">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="proj-reveal mt-14 md:mt-16 flex justify-center">
          <a
            href="https://github.com/ameer017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-white hover:text-neutral-300 transition-colors font-medium"
          >
            View More
            <FiArrowUpRight className="text-base" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
