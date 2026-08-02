import React from "react";

const primaryExperience = [
  {
    id: 1,
    title: "Engineering Lead",
    company: "DLT Africa Tech Hub",
    detail: "Leading engineering mentorship and product builds across the hub.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Infrastructure Engineer",
    company: "Brokex CFD",
    detail:
      "Building and maintaining the infrastructure for the Brokex CFD platform.",
    stack: ["Rust", "Next.js"],
  },
];

const secondaryExperience = [
  {
    id: 3,
    title: "Mobile & Fullstack Engineer",
    company: "Tianlu Digital Service",
    detail:
      "Shipped production mobile and fullstack systems for client products.",
    stack: [
      "React Native",
      "NestJS",
      "Kubernetes",
      "AWS",
      "DigitalOcean",
      "MySQL",
    ],
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "Ledger Core",
    detail: "Building the backend for the Ledger Core platform.",
    stack: ["Node.js", "React", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Freelance Fullstack Developer",
    company: "Independent",
    detail: "Building fullstack solutions for startups and businesses.",
  },
];

const stats = [
  { value: "4+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "15+", label: "Technologies" },
];

const About = () => {
  return (
    <main
      className="relative px-6 md:px-12 lg:px-24 bg-black pt-24 pb-24 border-t border-white/5"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4 font-medium">
              About
            </p>
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Building products that work in the real world.
            </h2>

            <p className="text-neutral-500 text-base md:text-[17px] leading-relaxed max-w-xl">
              From JavaScript and React Native to backend services and Web3, I
              turn complex problems into software teams can trust and users
              actually enjoy.
            </p>

            <div className="mt-8 flex flex-row flex-wrap items-baseline gap-x-8 gap-y-2">
              {stats.map(({ value, label }) => (
                <p key={label} className="text-neutral-400 text-sm">
                  <span className="font-space text-2xl font-bold text-white mr-1.5">
                    {value}
                  </span>
                  {label}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 font-medium">
              Experience
            </p>
            <ul>
              {primaryExperience.map((item, index) => (
                <li
                  key={item.id}
                  className={`py-5 ${
                    index !== primaryExperience.length - 1
                      ? "border-b border-neutral-800"
                      : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>
                    <span className="text-neutral-500 text-sm">
                      {item.company}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                  {item.stack?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-neutral-400 border border-neutral-800 bg-neutral-950 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-neutral-800 flex flex-col md:flex-row gap-8 md:gap-6">
          {secondaryExperience.map((item) => (
            <div key={item.id} className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm mb-2">{item.company}</p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-3">
                {item.detail}
              </p>
              {item.stack?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-neutral-400 border border-neutral-800 bg-neutral-950 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
