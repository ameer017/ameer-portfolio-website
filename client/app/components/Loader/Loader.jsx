"use client";

import React, { useEffect, useRef } from "react";
import { gsap, registerMotion, prefersReducedMotion } from "@/app/lib/motion";

const Loader = ({ onReveal, onComplete }) => {
  const rootRef = useRef(null);
  const markRef = useRef(null);
  const captionRef = useRef(null);
  const nameRef = useRef(null);
  const barRef = useRef(null);
  const revealedRef = useRef(false);

  useEffect(() => {
    registerMotion();

    if (prefersReducedMotion()) {
      onReveal?.();
      const t = setTimeout(() => onComplete?.(), 300);
      return () => clearTimeout(t);
    }

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray(".loader-path");
      paths.forEach((path) => {
        const length = path.getTotalLength?.() || 160;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set(nameRef.current, { autoAlpha: 0, scale: 0.88, y: 24 });
      gsap.set(rootRef.current, { clipPath: "inset(0% 0 0% 0)" });

      const revealSite = () => {
        if (revealedRef.current) return;
        revealedRef.current = true;
        onReveal?.();
      };

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => onComplete?.(),
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 0.55,
        stagger: 0.18,
        ease: "power2.inOut",
      })
        .to(".loader-fill", { autoAlpha: 1, duration: 0.35 }, "-=0.35")
        .to(
          barRef.current,
          { scaleX: 1, duration: 1.4, ease: "power1.inOut" },
          0.1
        )
        .to(
          [markRef.current, captionRef.current, barRef.current],
          {
            autoAlpha: 0,
            y: -28,
            scale: 0.92,
            duration: 0.45,
            ease: "power2.in",
          },
          "+=0.15"
        )
        .to(
          nameRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.15"
        )
        .to({}, { duration: 0.35 })
        // Mount the site only as the wipe starts, so the hero never peeks under AA
        .add(revealSite)
        .to(rootRef.current, {
          clipPath: "inset(0% 0 100% 0)",
          duration: 0.85,
          ease: "power3.inOut",
        })
        .set(rootRef.current, { autoAlpha: 0 });
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete, onReveal]);

  return (
    <div
      ref={rootRef}
      className="loader-screen fixed inset-0 z-[100] h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ clipPath: "inset(0% 0 0% 0)" }}
    >
      <div className="absolute inset-0 loader-grain" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 w-full min-h-[280px]">
        <div
          ref={markRef}
          className="flex flex-col items-center gap-6"
        >
          <svg
            className="w-[200px] sm:w-[260px] h-auto"
            viewBox="0 0 220 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Al Ameer monogram loading"
          >
            <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2.5">
              <path d="M18 112 L52 18 L86 112" />
              <path d="M34 72 H70" />
              <path d="M134 112 L168 18 L202 112" />
              <path d="M150 72 H186" />
            </g>

            <g
              stroke="#f5f5f5"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path className="loader-path" d="M20 110 C34 68 42 40 52 16" />
              <path className="loader-path" d="M52 16 C64 42 72 72 84 110" />
              <path className="loader-path" d="M36 70 H68" />
              <path className="loader-path" d="M136 110 C150 68 158 40 168 16" />
              <path className="loader-path" d="M168 16 C180 42 188 72 200 110" />
              <path className="loader-path" d="M152 70 H184" />
            </g>

            <g
              className="loader-fill"
              style={{ opacity: 0 }}
              fill="rgba(255, 255, 255, 0.08)"
            >
              <path d="M52 22 L78 100 H66.5 L60 80 H44 L37.5 100 H26 Z M46 68 H58 L52 48 Z" />
              <path d="M168 22 L194 100 H182.5 L176 80 H160 L153.5 100 H142 Z M162 68 H174 L168 48 Z" />
            </g>
          </svg>

          <div ref={captionRef} className="text-center">
            <p className="font-space text-white text-xl sm:text-2xl font-semibold tracking-[0.35em]">
              AA
            </p>
            <p className="mt-2 text-white/40 text-xs sm:text-sm tracking-[0.28em] uppercase">
              Al Ameer
            </p>
          </div>

          <div className="h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
            <span
              ref={barRef}
              className="block h-full w-full origin-left bg-white scale-x-0"
            />
          </div>
        </div>

        <h1
          ref={nameRef}
          className="pointer-events-none absolute font-space text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight text-center px-4 opacity-0"
          aria-hidden="true"
        >
          Abdullah Raji
          <span className="inline-block w-2.5 h-2.5 ml-1 mb-1 rounded-full bg-neutral-500 align-bottom" />
        </h1>
      </div>
    </div>
  );
};

export default Loader;
