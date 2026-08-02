import React from "react";

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
  return (
    <main
      className="relative px-6 md:px-12 lg:px-24 pt-24 pb-24 bg-black border-t border-white/5"
      id="ser"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
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

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {services.map(({ id, title, description }) => (
            <div key={id} className="group">
              <span className="font-space text-sm text-neutral-600 tabular-nums">
                {id}
              </span>
              <h3 className="mt-3 text-white text-xl font-semibold mb-3 group-hover:text-neutral-300 transition-colors">
                {title}
              </h3>
              <p className="text-neutral-500 text-sm md:text-[15px] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Service;
