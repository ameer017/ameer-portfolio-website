import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const data = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    description:
      "I can develop and maintain websites and web applications, creating robust structure, layout, and interactivity. I work with modern frameworks like React, Next.js, and server-side technologies, databases, and APIs to ensure seamless functionality and optimal user experience.",
  },
  {
    id: 2,
    title: "MOBILE DEVELOPMENT",
    icon: <FaMobileAlt />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    description:
      "Experienced in building cross-platform mobile applications using React Native. I create native-feeling apps for both iOS and Android with smooth animations, intuitive navigation, and seamless integration with device features and backend services.",
  },

  {
    id: 3,
    title: "WEB3 & BLOCKCHAIN",
    icon: <MdOutlineDiamond />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    description:
      "Specialized in building decentralized applications (DApps) and integrating blockchain technology. I work with smart contracts, Web3 protocols, and various blockchain platforms to create secure, transparent, and innovative solutions for the decentralized web.",
  },
];

const Service = () => {
  return (
    <main
      className="relative px-6 md:px-24 pt-[7.75rem] pb-[5.75rem] bg-white overflow-hidden"
      id="ser"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Services</span> I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(
            ({ id, title, icon, description, color, bgColor }, index) => (
              <div
                key={id}
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="card-hover glass p-8 rounded-2xl border border-white/20 shadow-xl h-full flex flex-col relative overflow-hidden">
                  {/* Background Pattern */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${bgColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      {icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {description}
                  </p>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </main>
  );
};

export default Service;
