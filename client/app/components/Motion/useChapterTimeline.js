"use client";

import { useGSAP } from "@gsap/react";
import {
  gsap,
  registerMotion,
  prefersReducedMotion,
} from "@/app/lib/motion";

/**
 * Pins a full-viewport section and returns a scrubbed timeline for storytelling.
 * @param {React.RefObject} sectionRef - section root (h-screen)
 * @param {(tl: gsap.core.Timeline) => void} build - add tweens to the timeline
 * @param {{ endDesktop?: string, endMobile?: string, dependencies?: unknown[] }} options
 */
export function useChapterTimeline(sectionRef, build, options = {}) {
  const {
    endDesktop = "+=220%",
    endMobile = "+=140%",
    dependencies = [],
  } = options;

  useGSAP(
    () => {
      registerMotion();
      if (prefersReducedMotion() || !sectionRef.current) return;

      const end = () =>
        window.innerWidth < 768 ? endMobile : endDesktop;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      build(tl, gsap);
    },
    { scope: sectionRef, dependencies, revertOnUpdate: true }
  );
}

export default useChapterTimeline;
