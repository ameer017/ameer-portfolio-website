import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Ledger Core",
    tags: ["TypeScript", "PostgreSQL", "Nomba", "Finance"],
    description:
      "Universal reconciliation engine on Nomba Virtual Accounts — captures inbound transfers, matches them to obligations, and maintains an immutable customer ledger in real time.",
    urlOne: "https://velo-credit-ledger-core.vercel.app/",
    urlTwo: "https://github.com/Ledger-OS-Infra/ledger-core",
  },
  {
    id: 2,
    title: "Auth Pulse",
    tags: ["CLI", "SDK", "NestJS", "Node.js"],
    description:
      "A developer-first CLI that scaffolds production-ready auth and user CRUD for Node.js, NestJS, or FastAPI — JWT, hashing, and protected routes included.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/auth-pulse",
  },
  {
    id: 3,
    title: "PayLite",
    tags: [".NET", "React", "MongoDB", "Payments"],
    description:
      "Full-stack payment platform with wallet management, P2P transfers, and deposits — built with .NET 9, React, MongoDB, and Flutterwave.",
    urlOne: "https://paylite-web-teal.vercel.app/",
    urlTwo: "https://github.com/ameer017/paylite",
  },
  {
    id: 4,
    title: "Streakzz",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    description:
      "Fullstack streak tracker for daily project submissions, with dashboards, admin tools, and a GitHub-style contribution graph.",
    urlOne: "https://streakzz-sigma.vercel.app",
    urlTwo: "https://github.com/ameer017/streakzz",
  },
];

const Project = () => {
  return (
    <main
      className="relative px-6 md:px-12 lg:px-24 pt-24 pb-24 bg-black border-t border-white/5"
      id="pro"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-space">
            Featured Projects
          </h2>
          <div className="w-12 h-px bg-neutral-600 mx-auto mb-4"></div>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            A few public projects that reflect how I build — from financial
            systems and auth tooling to full product apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.map(({ id, title, description, urlOne, urlTwo, tags }) => (
            <div
              key={id}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 h-full flex flex-col overflow-hidden"
            >
              <div className="p-6 pb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 flex-grow">
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {description}
                </p>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-3">
                  {urlOne !== "#" && (
                    <a
                      href={urlOne}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={urlTwo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      urlOne === "#" ? "flex-1" : ""
                    } flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 px-4 py-2.5 rounded-full font-medium text-sm hover:border-neutral-500 hover:text-white transition-all duration-300`}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-neutral-400 text-lg mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/ameer017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-semibold text-base hover:bg-neutral-200 transition-colors group"
          >
            <FaGithub className="text-xl group-hover:rotate-12 transition-transform" />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Project;
