"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";
import {
  gsap,
  registerMotion,
  ScrollTrigger,
  prefersReducedMotion,
} from "@/app/lib/motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Shipped Projects" },
];

const HeroSection = ({ showScrollCue = false }) => {
  const sectionRef = useRef(null);
  const cueRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl) => {
      tl.to(
        ".hero-left",
        {
          y: -70,
          x: -20,
          autoAlpha: 0.12,
          scale: 0.92,
          filter: "blur(5px)",
          duration: 1,
          ease: "none",
        },
        0.4
      )
        .to(
          ".hero-portrait",
          {
            y: -30,
            x: 48,
            autoAlpha: 0.15,
            scale: 0.9,
            filter: "blur(6px)",
            duration: 1,
            ease: "none",
          },
          0.4
        )
        .to(
          ".hero-cue",
          { autoAlpha: 0, y: 24, duration: 0.35, ease: "none" },
          0.25
        )
        .to(
          ".hero-stage",
          {
            scale: 0.88,
            filter: "blur(8px)",
            duration: 0.55,
            ease: "none",
          },
          0.78
        );
    },
    { endDesktop: "+=160%", endMobile: "+=110%", scrub: 0.35 }
  );

  useEffect(() => {
    registerMotion();
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    registerMotion();
    if (prefersReducedMotion() || !sectionRef.current) return;

    const enter = gsap.timeline({ defaults: { ease: "expo.out" } });
    enter
      .fromTo(
        ".hero-brand",
        { y: 24, autoAlpha: 0, filter: "blur(8px)" },
        { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.85 }
      )
      .fromTo(
        ".hero-title",
        { y: 48, autoAlpha: 0, clipPath: "inset(100% 0 0 0)" },
        { y: 0, autoAlpha: 1, clipPath: "inset(0% 0 0 0)", duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".hero-copy",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.65 },
        "-=0.5"
      )
      .fromTo(
        ".hero-stat",
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.5 },
        "-=0.35"
      )
      .fromTo(
        ".hero-cta",
        { y: 14, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".hero-portrait",
        { autoAlpha: 0, scale: 1.06, x: 36 },
        { autoAlpha: 1, scale: 1, x: 0, duration: 1.1 },
        0.12
      );

    return () => enter.kill();
  }, []);

  useEffect(() => {
    if (!showScrollCue || !cueRef.current) return;
    registerMotion();
    const tween = gsap.fromTo(
      cueRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.65, delay: 0.35, ease: "expo.out" }
    );
    return () => tween.kill();
  }, [showScrollCue]);

  return (
    <Chapter
      id="home"
      innerRef={sectionRef}
      className="border-b border-white/10"
    >
      <div className="hero-stage relative h-full flex items-center overflow-hidden will-change-transform">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,0.07),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_55%,rgba(255,255,255,0.05),transparent_45%)]" />

        <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center pt-24 pb-16">
          <div className="hero-left relative z-10 will-change-transform">
            <p className="hero-brand font-space text-sm sm:text-base tracking-[0.28em] uppercase text-white/90 font-semibold mb-5">
              Abdullah Raji
              <span className="inline-block w-1.5 h-1.5 ml-2 mb-0.5 rounded-full bg-white align-middle" />
            </p>

            <h1 className="hero-title font-space text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.06]">
              From <span className="font-emphasis text-[1.08em]">Sketch</span> to
              Scale. I Build the Web You{" "}
              <span className="font-emphasis text-[1.08em]">Imagine</span>.
            </h1>

            <p className="hero-copy mt-5 text-neutral-400 text-base md:text-lg leading-relaxed max-w-md">
              Fullstack software engineer crafting reliable products, from
              polished interfaces to the systems behind them.
            </p>

            <div className="mt-8 flex flex-wrap gap-8 md:gap-12">
              {stats.map(({ value, label }) => (
                <div key={label} className="hero-stat">
                  <p className="font-space text-3xl md:text-4xl font-bold text-white tabular-nums">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#con"
                className="inline-flex items-center px-7 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all active:scale-[0.97]"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="#pro"
                className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-white"
              >
                View Work
                <span className="relative overflow-hidden w-8 h-px bg-white/30">
                  <span className="absolute inset-y-0 left-0 w-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </span>
              </Link>
            </div>
          </div>

          <div className="hero-portrait relative w-full max-w-sm mx-auto lg:max-w-none h-[42vh] sm:h-[48vh] lg:h-[min(68vh,560px)] will-change-transform">
            <div className="absolute inset-0 overflow-hidden">
              <div className="hero-portrait-img absolute inset-[-6%]">
                <Image
                  src="/abdullah.jpeg"
                  alt="Abdullah Raji"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/25 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
            </div>
          </div>
        </div>

        <div
          ref={cueRef}
          className="hero-cue absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-neutral-500 opacity-0"
          aria-hidden={!showScrollCue}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <HiChevronDown className="text-lg animate-bounce" />
        </div>
      </div>
    </Chapter>
  );
};

export default HeroSection;
