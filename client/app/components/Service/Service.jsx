"use client";

import React, { useRef } from "react";
import Chapter from "@/app/components/Motion/Chapter";
import useChapterTimeline from "@/app/components/Motion/useChapterTimeline";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "End-to-end web apps with solid structure, clean interfaces, and reliable APIs. From MVP to production — React, Next.js, and modern backends.",
  },
  {
    id: "02",
    title: "Mobile Development",
    description:
      "Cross-platform apps that feel native. Smooth navigation, device integrations, and backends that keep everything in sync.",
  },
  {
    id: "03",
    title: "Infrastructure & Systems",
    description:
      "Scalable backends, cloud setup, and deployment pipelines so your product stays fast, secure, and ready to grow.",
  },
];

const Service = () => {
  const sectionRef = useRef(null);

  useChapterTimeline(
    sectionRef,
    (tl, gsapInstance) => {
      gsapInstance.set(
        services.map((_, i) => `.svc-panel-${i}`).join(", "),
        { autoAlpha: 0 }
      );

      tl.addLabel("intro")
        .fromTo(
          ".svc-header",
          { y: 70, autoAlpha: 0, scale: 0.94 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.7, ease: "expo.out" }
        );

      services.forEach((_, i) => {
        const sel = `.svc-panel-${i}`;
        const num = `${sel} .svc-num`;
        const title = `${sel} .svc-title`;
        const copy = `${sel} .svc-copy`;

        tl.addLabel(`svc${i}`);

        if (i > 0) {
          tl.to(`.svc-panel-${i - 1}`, {
            autoAlpha: 0,
            y: -70,
            scale: 0.92,
            filter: "blur(8px)",
            duration: 0.4,
            ease: "power3.in",
          });
        }

        tl.fromTo(
          sel,
          {
            autoAlpha: 0,
            y: 100,
            scale: 1.08,
            clipPath: "inset(100% 0 0 0)",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.75,
            ease: "expo.out",
          }
        )
          .fromTo(
            num,
            { scale: 1.45, autoAlpha: 0.2, x: -40 },
            { scale: 1, autoAlpha: 1, x: 0, duration: 0.55, ease: "expo.out" },
            "-=0.55"
          )
          .fromTo(
            title,
            { y: 36, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" },
            "-=0.35"
          )
          .fromTo(
            copy,
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out" },
            "-=0.2"
          );
      });

      tl.to(".svc-stage", {
        autoAlpha: 0.15,
        scale: 0.9,
        filter: "blur(5px)",
        duration: 0.55,
        ease: "power3.in",
      });
    },
    {
      endDesktop: "+=300%",
      endMobile: "+=230%",
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
      id="ser"
      innerRef={sectionRef}
      className="border-b border-dashed border-neutral-800"
    >
      <div className="svc-stage relative h-full px-6 md:px-12 lg:px-24 py-20 md:py-24 will-change-transform">
        <div className="max-w-6xl mx-auto h-full flex flex-col">
          <div className="svc-header max-w-2xl mb-10 md:mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4 font-medium">
              Services
            </p>
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              What I can help you build.
            </h2>
            <p className="text-neutral-500 text-base md:text-[17px] leading-relaxed">
              From product idea to shipped software — focused on clarity,
              performance, and long-term maintainability.
            </p>
          </div>

          <div className="relative flex-1 min-h-[240px]">
            {services.map(({ id, title, description }, i) => (
              <div
                key={id}
                className={`svc-panel-${i} absolute inset-0 flex flex-col justify-center`}
              >
                <span className="svc-num font-space text-6xl md:text-8xl font-bold text-neutral-900 tabular-nums select-none will-change-transform">
                  {id}
                </span>
                <h3 className="svc-title mt-2 text-white text-3xl md:text-4xl font-semibold font-space">
                  {title}
                </h3>
                <p className="svc-copy mt-4 text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl">
                  {description}
                </p>
                <div className="mt-8 flex gap-2">
                  {services.map((s, idx) => (
                    <span
                      key={s.id}
                      className={`h-1 w-8 rounded-full ${
                        idx === i ? "bg-white" : "bg-neutral-800"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  );
};

export default Service;
