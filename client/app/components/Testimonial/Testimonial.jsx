"use client";

import React, { useRef } from "react";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

const Testimonial = () => {
  const sectionRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl, gsapInstance) => {
      gsapInstance.set(
        ".testimonial-pill, .testimonial-avatar, .testimonial-quote",
        { autoAlpha: 0 }
      );

      tl.fromTo(
        ".testimonial-pill",
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4, ease: "expo.out" }
      )
        .fromTo(
          ".testimonial-avatar",
          { x: -40, autoAlpha: 0, scale: 0.9 },
          { x: 0, autoAlpha: 1, scale: 1, duration: 0.55, ease: "expo.out" },
          "-=0.15"
        )
        .fromTo(
          ".testimonial-quote",
          { y: 40, autoAlpha: 0, clipPath: "inset(0 0 100% 0)" },
          {
            y: 0,
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.7,
            ease: "expo.out",
          },
          "-=0.3"
        )
        .to(".testimonial-stage", {
          autoAlpha: 0.2,
          scale: 0.94,
          filter: "blur(4px)",
          duration: 0.5,
          ease: "power3.in",
        });
    },
    { endDesktop: "+=120%", endMobile: "+=90%", scrub: 0.4 }
  );

  return (
    <Chapter
      id="testimonial"
      innerRef={sectionRef}
      className="border-b border-white/10"
    >
      <div className="testimonial-stage h-full flex items-center px-6 md:px-10 py-16 will-change-transform">
        <div className="max-w-6xl mx-auto w-full">
          <div className="testimonial-pill mb-10 md:mb-12">
            <span className="section-pill">What Clients Say</span>
          </div>

          <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-14 items-center">
            <div className="testimonial-avatar w-36 h-36 md:w-44 md:h-44 mx-auto md:mx-0 rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center">
              <span className="font-space text-4xl font-bold text-white/80">
                DL
              </span>
            </div>

            <blockquote className="testimonial-quote relative">
              <span
                aria-hidden
                className="font-emphasis text-7xl md:text-8xl text-white/15 leading-none absolute -top-6 -left-2 select-none"
              >
                “
              </span>
              <p className="relative text-xl md:text-2xl lg:text-[1.65rem] text-white leading-relaxed font-light max-w-2xl">
                Abdullah takes ownership end to end. Sharp on architecture,
                thoughtful in the UI, and reliable when the product needs to
                ship. Working with him feels like having a true engineering
                partner.
              </p>
              <footer className="mt-8">
                <p className="text-white font-medium">
                  DLT Africa collaborators
                </p>
                <p className="text-sm text-neutral-500 mt-1">
                  Engineering mentorship &amp; product builds
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Chapter>
  );
};

export default Testimonial;
