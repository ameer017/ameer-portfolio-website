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

export { gsap, ScrollTrigger };
