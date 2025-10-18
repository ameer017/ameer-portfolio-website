import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdOutlineDiamond } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Food Ordering App",
    icon: <MdFastfood />,
    color: "from-orange-500 to-red-500",
    tags: ["React Native", "Mobile", "E-Commerce"],
    description:
      "A mobile application built with React Native that enables users to easily browse and order edible products. Features include intuitive product catalog, seamless checkout process, real-time order tracking, and user-friendly interface for a smooth food ordering experience.",
    urlOne: "#",
    urlTwo: "#",
  },

  {
    id: 2,
    title: "Safelock Dapp",
    icon: <MdOutlineDiamond />,
    color: "from-pink-500 to-rose-500",
    tags: ["Blockchain", "DeFi", "Smart Contracts"],
    description:
      "SafeLock is a Web3-native savings and contingency platform that empowers users to build financial discipline",
    urlOne: "https://safelock-web.vercel.app/",
    urlTwo: "https://github.com/ameer017/Safelock",
  },

  {
    id: 3,
    title: "PayLite",
    icon: <FaMoneyBillWave />,
    color: "from-yellow-500 to-orange-500",
    tags: ["Finance", "Payment", "P2P"],
    description:
      "A modern, full-stack payment solution built with .NET 9, React, MongoDB, and Flutterwave. Features wallet management, P2P transfers, deposits.",
    urlOne: "https://paylite-web-teal.vercel.app/",
    urlTwo: "https://github.com/ameer017/paylite",
  },
];
const Project = () => {
  return (
    <main
      className="relative px-6 md:px-24 pt-[7.75rem] pb-[5.75rem] bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden"
      id="pro"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Listed below are some of the most representative projects I've
            worked on, showcasing my skills in full-stack development and Web3
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(
            (
              { id, title, icon, description, urlOne, urlTwo, color, tags },
              index
            ) => (
              <div
                key={id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Card */}
                <div className="card-hover glass rounded-2xl border border-white/20 shadow-xl h-full flex flex-col overflow-hidden relative bg-white/50">
                  {/* Card Header with Icon */}
                  <div className="p-6 pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white text-3xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      {icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                      {title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="px-6 pb-6 flex-grow">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex gap-3">
                      {urlOne !== "#" && (
                        <a
                          href={urlOne}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 group/btn"
                        >
                          <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a
                        href={urlTwo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          urlOne === "#" ? "flex-1" : ""
                        } flex items-center justify-center gap-2 glass-dark text-gray-700 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 hover:text-white transition-all duration-300 group/btn border border-gray-300`}
                      >
                        <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Hover Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                  ></div>
                </div>
              </div>
            )
          )}
        </div>

        {/* View More Section */}
        <div className="text-center mt-16 fade-in">
          <p className="text-gray-700 text-lg mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/ameer017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-gradient px-8 py-4 text-white rounded-xl font-semibold text-lg shadow-lg group"
          >
            <FaGithub className="text-2xl group-hover:rotate-12 transition-transform" />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Project;
