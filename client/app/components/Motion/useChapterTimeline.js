"use client";

import { useGSAP } from "@gsap/react";
import {
  gsap,
  registerMotion,
  prefersReducedMotion,
} from "@/app/lib/motion";

/**
 * Pins a full-viewport section and returns a scrubbed timeline for storytelling.
 */
export function useChapterTimeline(sectionRef, build, options = {}) {
  const {
    endDesktop = "+=220%",
    endMobile = "+=140%",
    scrub = 0.45,
    snap = null,
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
          scrub,
          snap: snap || undefined,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      build(tl, gsap);
    },
    { scope: sectionRef, dependencies, revertOnUpdate: true }
  );
}

export default useChapterTimeline;
