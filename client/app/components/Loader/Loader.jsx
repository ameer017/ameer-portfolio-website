import React from "react";

const Loader = () => {
  return (
    <div className="loader-screen h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 loader-grain" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        <svg
          className="w-[220px] sm:w-[280px] h-auto"
          viewBox="0 0 220 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Al Ameer monogram loading"
        >
          <g className="loader-ghost" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2.5">
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
            <path className="loader-path loader-path-1" d="M20 110 C34 68 42 40 52 16" />
            <path className="loader-path loader-path-2" d="M52 16 C64 42 72 72 84 110" />
            <path className="loader-path loader-path-3" d="M36 70 H68" />
            <path className="loader-path loader-path-4" d="M136 110 C150 68 158 40 168 16" />
            <path className="loader-path loader-path-5" d="M168 16 C180 42 188 72 200 110" />
            <path className="loader-path loader-path-6" d="M152 70 H184" />
          </g>

          <g className="loader-fill" fill="rgba(255, 255, 255, 0.08)">
            <path d="M52 22 L78 100 H66.5 L60 80 H44 L37.5 100 H26 Z M46 68 H58 L52 48 Z" />
            <path d="M168 22 L194 100 H182.5 L176 80 H160 L153.5 100 H142 Z M162 68 H174 L168 48 Z" />
          </g>
        </svg>

        <div className="loader-caption text-center">
          <p className="font-space text-white text-xl sm:text-2xl font-semibold tracking-[0.35em]">
            AA
          </p>
          <p className="mt-2 text-white/40 text-xs sm:text-sm tracking-[0.28em] uppercase">
            Al Ameer
          </p>
        </div>

        <div className="mt-2 h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
          <span className="loader-bar-fill block h-full w-full origin-left bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
