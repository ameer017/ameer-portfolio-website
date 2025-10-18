import React from "react";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const experiences = [
  {
    id: 1,
    title: "Tech Lead",
    company: "DLT Africa Tech Hub",
    icon: <FaGraduationCap />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Freelance Developer",
    company: "Building innovative web and mobile solutions",
    icon: <FaBriefcase />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Backend & Mobile Developer",
    company: "Tianlu Digital Service",
    icon: <FaCode />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Tech Lead",
    company: "CrossFi Africa Ecosystem",
    icon: <HiSparkles />,
    color: "from-orange-500 to-red-500",
  },
];

const About = () => {
  return (
    <main className="relative px-6 md:px-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 text-left pt-[7.75rem] pb-[5.75rem] overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Introduction Card */}
        <div className="mb-16 slide-in-left">
          <div className="glass p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <HiSparkles className="text-white text-xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Hi there! I&apos;m <span className="gradient-text">Abdullahi Raji</span>
              </h3>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I&apos;m a passionate software developer with a strong foundation in
              creating innovative and efficient solutions. With 4+ years of
              experience in the field, I have honed my skills in JavaScript
              programming language, modern frameworks including React Native for mobile development, 
              and agile development methodologies. I thrive on turning complex problems into 
              elegant, user-friendly solutions across web and mobile platforms.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="slide-in-right">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Professional Journey
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map(({ id, title, company, icon, color }, index) => (
              <div
                key={id}
                className="card-hover glass p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-2xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{company}</p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-gradient-to-r ${color} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills/Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 fade-in">
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "20+" },
            { label: "Technologies", value: "15+" },
            { label: "Happy Clients", value: "10+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl text-center card-hover border border-white/20"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
