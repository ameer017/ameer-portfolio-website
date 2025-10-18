import React from "react";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX, BsMedium, BsGithub, BsHeart } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa";

const socials = [
  {
    id: 1,
    icon: <BsTwitterX />,
    path: "https://x.com/17_alAmeer",
    name: "Twitter",
  },
  {
    id: 2,
    icon: <BsMedium />,
    path: "https://medium.com/@rajiabdullahi907",
    name: "Medium",
  },
  {
    id: 3,
    icon: <BsGithub />,
    path: "https://github.com/ameer017",
    name: "GitHub",
  },
  {
    id: 4,
    icon: <GrInstagram />,
    path: "https://www.instagram.com/a.rajiabdullahi/",
    name: "Instagram",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6 md:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="fade-in">
              <div className="flex items-center gap-2 mb-4">
                <GiSparkles className="text-yellow-400 text-2xl" />
                <h3 className="text-white text-2xl font-bold font-space gradient-text-blue">
                  AL AMEER
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building exceptional digital experiences with passion and
                precision. Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="fade-in">
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#ser" },
                  { name: "Projects", href: "#pro" },
                  { name: "Contact", href: "#con" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="fade-in">
              <h4 className="text-white text-lg font-bold mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socials.map(({ id, icon, path, name }) => (
                  <a
                    key={id}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 hover:rotate-6 group border border-white/20"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Raji Abdullah Al Ameer. Made with{" "}
              <BsHeart className="inline text-red-500 animate-pulse" /> and lots
              of coffee.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 glass-dark px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
