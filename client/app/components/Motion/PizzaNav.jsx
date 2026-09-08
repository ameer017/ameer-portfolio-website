"use client";

import React, { useRef, useState } from "react";
import { gsap, registerMotion, prefersReducedMotion } from "@/app/lib/motion";
import { useMotion } from "@/app/components/Motion/SmoothScroll";

const SLICES = [
  {
    id: "about",
    label: "About",
    href: "#about",
    cheese: "#f5c542",
    cheeseHot: "#ffd56a",
    pepperoni: [
      { r: 0.62, a: 0.28, s: 7 },
      { r: 0.78, a: 0.62, s: 5.5 },
    ],
  },
  {
    id: "ser",
    label: "Services",
    href: "#ser",
    cheese: "#efb52e",
    cheeseHot: "#f7c94a",
    pepperoni: [
      { r: 0.58, a: 0.35, s: 6.5 },
      { r: 0.74, a: 0.7, s: 5 },
    ],
  },
  {
    id: "pro",
    label: "Projects",
    href: "#pro",
    cheese: "#f2c03a",
    cheeseHot: "#ffd45c",
    pepperoni: [
      { r: 0.6, a: 0.3, s: 7 },
      { r: 0.8, a: 0.65, s: 5 },
    ],
  },
  {
    id: "con",
    label: "Contact",
    href: "#con",
    cheese: "#e8a820",
    cheeseHot: "#f5c448",
    pepperoni: [
      { r: 0.56, a: 0.4, s: 6 },
      { r: 0.76, a: 0.68, s: 5.5 },
    ],
  },
];

const CX = 100;
const CY = 100;
const R = 86;
const CRUST = 10;

function polar(deg, radius = R) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function wedgePath(index, total, radius = R) {
  const start = (index / total) * 360;
  const end = ((index + 1) / total) * 360;
  const a = polar(start, radius);
  const b = polar(end, radius);
  const large = end - start > 180 ? 1 : 0;
  return `M ${CX} ${CY} L ${a.x} ${a.y} A ${radius} ${radius} 0 ${large} 1 ${b.x} ${b.y} Z`;
}

function labelPos(index, total) {
  const mid = ((index + 0.5) / total) * 360;
  return polar(mid, R * 0.48);
}

function toppingPos(index, total, rFactor, aFactor) {
  const start = (index / total) * 360;
  const end = ((index + 1) / total) * 360;
  const deg = start + (end - start) * aFactor;
  return polar(deg, R * rFactor);
}

function basilPath(x, y, rot = 0) {
  // Simple leaf shape
  const rad = (rot * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const pt = (dx, dy) => {
    const rx = x + dx * cos - dy * sin;
    const ry = y + dx * sin + dy * cos;
    return `${rx},${ry}`;
  };
  return `M ${pt(0, -5)} Q ${pt(4, 0)} ${pt(0, 5)} Q ${pt(-4, 0)} ${pt(0, -5)} Z`;
}

const PizzaNav = () => {
  const { scrollTo } = useMotion();
  const rootRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [active, setActive] = useState(null);

  const handlePick = (slice, index) => {
    if (busy) return;

    if (prefersReducedMotion()) {
      scrollTo(slice.href);
      return;
    }

    registerMotion();
    setBusy(true);
    setActive(slice.id);

    const picked = rootRef.current?.querySelector(
      `[data-slice="${slice.id}"]`
    );
    const others = rootRef.current?.querySelectorAll(
      `.pizza-nav-slice:not([data-slice="${slice.id}"])`
    );

    const mid = ((index + 0.5) / SLICES.length) * 360;
    const outward = polar(mid, 42);
    const dx = outward.x - CX;
    const dy = outward.y - CY;

    const tl = gsap.timeline({
      onComplete: () => {
        scrollTo(slice.href);
        gsap.delayedCall(1, () => {
          gsap.set([picked, others], { clearProps: "all" });
          setBusy(false);
          setActive(null);
        });
      },
    });

    tl.to(
      others,
      {
        autoAlpha: 0.35,
        scale: 0.94,
        duration: 0.35,
        svgOrigin: "100 100",
        ease: "power2.out",
      },
      0
    )
      .to(
        picked,
        {
          x: dx,
          y: dy - 20,
          rotation: index % 2 === 0 ? 16 : -16,
          scale: 1.08,
          duration: 0.6,
          svgOrigin: "100 100",
          ease: "back.out(1.4)",
        },
        0
      )
      .to(
        picked,
        {
          y: "-=36",
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.in",
        },
        "+=0.05"
      );
  };

  return (
    <div className="w-full max-w-[380px] mx-auto lg:mx-0 lg:ml-auto select-none">
      <p className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4 font-medium justify-center lg:justify-end">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Pick a slice
      </p>

      <div
        ref={rootRef}
        className="relative aspect-square w-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
        role="navigation"
        aria-label="Section menu"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
          <defs>
            <radialGradient id="sauce" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c43c22" />
              <stop offset="100%" stopColor="#9a2b18" />
            </radialGradient>
            <radialGradient id="crustGrad" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#d4a05a" />
              <stop offset="55%" stopColor="#c4893f" />
              <stop offset="100%" stopColor="#a66b2b" />
            </radialGradient>
          </defs>

          {/* Outer crust plate */}
          <circle cx={CX} cy={CY} r={R + CRUST + 2} fill="url(#crustGrad)" />
          <circle
            cx={CX}
            cy={CY}
            r={R + 1}
            fill="url(#sauce)"
            opacity="0.95"
          />

          {SLICES.map((slice, i) => {
            const pos = labelPos(i, SLICES.length);
            const isActive = active === slice.id;
            const mid = ((i + 0.5) / SLICES.length) * 360;

            return (
              <g
                key={slice.id}
                className="pizza-nav-slice"
                data-slice={slice.id}
              >
                {/* Cheese slice */}
                <path
                  d={wedgePath(i, SLICES.length)}
                  fill={slice.cheese}
                  stroke="#c4893f"
                  strokeWidth="1"
                  className={`cursor-pointer ${
                    busy && !isActive ? "pointer-events-none" : ""
                  }`}
                  onMouseEnter={(e) => {
                    if (!busy) e.currentTarget.setAttribute("fill", slice.cheeseHot);
                  }}
                  onMouseLeave={(e) => {
                    if (!busy) e.currentTarget.setAttribute("fill", slice.cheese);
                  }}
                  onClick={() => handlePick(slice, i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to ${slice.label}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handlePick(slice, i);
                    }
                  }}
                />

                {/* Cheese melt highlight */}
                <path
                  d={wedgePath(i, SLICES.length, R * 0.72)}
                  fill="#ffe08a"
                  opacity="0.28"
                  className="pointer-events-none"
                />

                {/* Pepperoni */}
                {slice.pepperoni.map((p, pi) => {
                  const t = toppingPos(i, SLICES.length, p.r, p.a);
                  return (
                    <g key={pi} className="pointer-events-none">
                      <circle cx={t.x} cy={t.y} r={p.s} fill="#b83228" />
                      <circle
                        cx={t.x - p.s * 0.2}
                        cy={t.y - p.s * 0.25}
                        r={p.s * 0.35}
                        fill="#d4523f"
                        opacity="0.7"
                      />
                      <circle cx={t.x + 1} cy={t.y + 1.5} r={1.1} fill="#8f221c" />
                      <circle cx={t.x - 2} cy={t.y + 1} r={0.8} fill="#8f221c" />
                    </g>
                  );
                })}

                {/* Basil leaf */}
                <path
                  d={basilPath(
                    polar(mid, R * 0.7).x,
                    polar(mid, R * 0.7).y,
                    mid + 20
                  )}
                  fill="#3d8c4a"
                  stroke="#2f6b39"
                  strokeWidth="0.4"
                  className="pointer-events-none"
                  opacity="0.9"
                />

                {/* Slice cut line */}
                <line
                  x1={CX}
                  y1={CY}
                  x2={polar((i / SLICES.length) * 360).x}
                  y2={polar((i / SLICES.length) * 360).y}
                  stroke="#c4893f"
                  strokeWidth="1.5"
                  className="pointer-events-none"
                  opacity="0.85"
                />

                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#4a2f14"
                  style={{
                    fontSize: "8.5px",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    pointerEvents: "none",
                  }}
                >
                  {slice.label}
                </text>
              </g>
            );
          })}

          {/* Crust bumps (sesame-ish) */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const p = polar(deg, R + CRUST * 0.45);
            return (
              <circle
                key={deg}
                cx={p.x}
                cy={p.y}
                r="1.4"
                fill="#f0d9a8"
                opacity="0.7"
                className="pointer-events-none"
              />
            );
          })}

          {/* Center hub — bubbly cheese */}
          <circle cx={CX} cy={CY} r={26} fill="#f5c542" stroke="#c4893f" strokeWidth="2" />
          <circle cx={CX - 6} cy={CY - 5} r={4} fill="#ffe08a" opacity="0.8" />
          <circle cx={CX + 5} cy={CY + 4} r={3} fill="#e8a820" opacity="0.55" />
          <text
            x={CX}
            y={CY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#5c3a14"
            style={{
              fontSize: "9px",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              letterSpacing: "0.14em",
              pointerEvents: "none",
            }}
          >
            AA
          </text>
        </svg>
      </div>
    </div>
  );
};

export default PizzaNav;
