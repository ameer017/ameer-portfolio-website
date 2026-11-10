import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function registerMotion() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function pinDistance(desktopVh = 200, mobileVh = 140) {
  if (typeof window === "undefined") return `${desktopVh}vh`;
  return window.innerWidth < 768 ? `${mobileVh}vh` : `${desktopVh}vh`;
}

/** Punchier scroll-in: clip + lift, falls back to simple fade when reduced. */
export function revealOnScroll(scopeEl, selector, opts = {}) {
  registerMotion();
  if (!scopeEl) return null;

  const {
    start = "top 75%",
    stagger = 0.1,
    duration = 0.85,
    y = 56,
  } = opts;

  if (prefersReducedMotion()) {
    return gsap.set(selector, { autoAlpha: 1, clearProps: "all" });
  }

  return gsap.fromTo(
    selector,
    {
      y,
      autoAlpha: 0,
      filter: "blur(6px)",
      clipPath: "inset(12% 0 0 0)",
    },
    {
      y: 0,
      autoAlpha: 1,
      filter: "blur(0px)",
      clipPath: "inset(0% 0 0 0)",
      duration,
      stagger,
      ease: "expo.out",
      scrollTrigger: {
        trigger: scopeEl,
        start,
        toggleActions: "play none none reverse",
      },
    }
  );
}

export { gsap, ScrollTrigger };
