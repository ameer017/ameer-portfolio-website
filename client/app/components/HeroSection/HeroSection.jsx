"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import { gsap, registerMotion, prefersReducedMotion } from "@/app/lib/motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Shipped Projects" },
];

const HeroSection = ({ showScrollCue = false }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      registerMotion();
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".hero-anim",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          delay: 0.05,
        },
      );
    },
    { scope: sectionRef, revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black hero-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="hero-anim font-space text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold text-white tracking-tight leading-[1.08]">
              From <span className="font-emphasis text-[1.08em]">Sketch</span>{" "}
              to Scale. I Build the Web You{" "}
              <span className="font-emphasis text-[1.08em]">Imagine</span>.
            </h1>

            <p className="hero-anim mt-6 text-neutral-400 text-base md:text-lg leading-relaxed max-w-lg">
              Fullstack software engineer crafting reliable products, from
              polished interfaces to the systems behind them.
            </p>

            <div className="hero-anim mt-10 flex flex-wrap gap-8 md:gap-12">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-space text-3xl md:text-4xl font-bold text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="hero-anim mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#con"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="#pro"
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="hero-anim relative mx-auto lg:mx-0 w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
              <Image
                src="/abdullah.jpeg"
                alt="Abdullah Raji"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover object-center grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {showScrollCue && (
          <div className="hero-anim absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-neutral-500">
            <span className="text-[10px] tracking-[0.25em] uppercase">
              Scroll
            </span>
            <HiChevronDown className="text-lg animate-bounce" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
