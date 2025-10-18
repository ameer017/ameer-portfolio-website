import React from "react";
import { HiSparkles } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main
      className="relative h-[70vh] md:h-[90vh] flex items-center justify-center md:justify-start px-6 md:px-24 overflow-hidden"
      style={{
        backgroundImage: `url(${"https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1a1a2e",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-transparent"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col slide-in-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white text-sm mb-6 w-fit">
          <HiSparkles className="text-yellow-400" />
          <span>Available for new projects</span>
        </div>

        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-space">
          Hi, I'm <span className="gradient-text-blue">Al Ameer</span>
        </h1>

        <h2 className="text-white/90 text-2xl md:text-4xl font-semibold mb-6">
          Full Stack Developer <span className="text-purple-400">&</span>{" "}
          Designer
        </h2>

        {/* Description */}
        <p className="text-white/80 text-[15px] md:text-[18px] leading-relaxed w-[300px] text-center md:w-[650px] md:text-left mb-8 fade-in">
          I specialize in the artful conception and meticulous construction of
          outstanding products. By leveraging my skills in design and
          development, I craft solutions that not only meet but exceed
          expectations.
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
