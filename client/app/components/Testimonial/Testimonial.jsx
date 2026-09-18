"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  registerMotion,
  prefersReducedMotion,
} from "@/app/lib/motion";

const Testimonial = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      registerMotion();
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".testimonial-reveal",
        { y: 40, autoAlpha: 0 },
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
      className="relative bg-black px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="testimonial-reveal mb-10 md:mb-14">
          <span className="section-pill">What Clients Say</span>
        </div>

        <div className="testimonial-reveal grid md:grid-cols-[200px_1fr] gap-10 md:gap-14 items-center">
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center">
            <span className="font-space text-4xl font-bold text-white/80">
              DL
            </span>
          </div>

          <blockquote className="relative">
            <span
              aria-hidden
              className="font-emphasis text-7xl md:text-8xl text-white/15 leading-none absolute -top-6 -left-2 select-none"
            >
              “
            </span>
            <p className="relative text-xl md:text-2xl text-white leading-relaxed font-light max-w-2xl">
              Abdullah takes ownership end to end — sharp on architecture,
              thoughtful in the UI, and reliable when the product needs to ship.
              Working with him feels like having a true engineering partner.
            </p>
            <footer className="mt-8">
              <p className="text-white font-medium">DLT Africa collaborators</p>
              <p className="text-sm text-neutral-500 mt-1">
                Engineering mentorship &amp; product builds
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
