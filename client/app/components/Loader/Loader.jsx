import React from "react";
import { GiSparkles } from "react-icons/gi";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animated blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative border border-white/20 p-6 rounded-full">
            <GiSparkles
              className="text-white text-6xl animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-black text-3xl font-bold font-space mb-2">
            AL AMEER
          </h2>
          <p className="text-white/60 text-sm">Loading your experience...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
