"use client";

import React from "react";

/** Visual chapter frame — pin/scrub lives in useChapterTimeline on the same ref. */
const Chapter = ({ id, children, className = "", innerRef }) => {
  return (
    <section
      ref={innerRef}
      id={id}
      className={`relative h-screen w-full overflow-hidden bg-black ${className}`}
    >
      {children}
    </section>
  );
};

export default Chapter;
