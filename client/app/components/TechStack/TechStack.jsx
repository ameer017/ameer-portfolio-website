import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiSolidity,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiGo,
  SiAmazonaws,
  SiDocker,
  SiDigitalocean,
  SiKubernetes,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const technologies = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Solidity", icon: SiSolidity, color: "text-gray-400" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Next.js", icon: RiNextjsFill, color: "text-black" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: ".NET", icon: SiDotnet, color: "text-purple-500" },
  { name: "GoLang", icon: SiGo, color: "text-cyan-400" },
  { name: "AWS", icon: SiAmazonaws, color: "text-orange-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Digital Ocean", icon: SiDigitalocean, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
];

const TechStack = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="relative py-16  overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-bold  mb-3">
            Technologies I <span className="gradient-text-blue">Master</span>
          </h2>
          <p className="text-white/60 text-lg">
            Building powerful solutions with cutting-edge technologies
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-900 to-transparent z-10"></div>

          {/* Scrolling badges */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedTechs.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 mx-4 glass-dark px-6 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 group"
                  >
                    <div className="flex items-center gap-3">
                      {IconComponent && (
                        <IconComponent
                          className={`text-3xl ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                        />
                      )}
                      <span className="text-white font-semibold text-lg whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
