import React from "react";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX, BsMedium, BsGithub } from "react-icons/bs";

const socials = [
  { id: 1, icon: <BsTwitterX color="white" size="20px" />, path: "https://x.com/alAmeer170" },
  { id: 2, icon: <BsMedium color="white" size="20px" />, path: "https://medium.com/@rajiabdullahi907" },
  { id: 3, icon: <BsGithub color="white" size="20px" />, path: "https://github.com/ameer017" },
  { id: 4, icon: <GrInstagram color="white" size="20px" />, path: "https://www.instagram.com/a.rajiabdullahi/" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#333] h-[200px] flex flex-col gap-4 items-center justify-center">
      <p className="text-[#fff] text-sm md:text-[15px] ">
        &copy; Copyright || {currentYear} || Raji Abdullah Al Ameer.
      </p>

      <div className="flex gap-2">
        {socials.map(({ id, icon, path }) => (
          <div
            key={id}
            className="transition duration-500 ease-in-out transform hover:-translate-y-1"
          >
            <a href={path}>{icon}</a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
