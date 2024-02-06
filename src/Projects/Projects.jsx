import React from "react";
import "./Projects.scss";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const projects = [
  {
    name: "AVOCET - ReFi Solution",
    githubLink: "https://github.com/ameer017/avocet-frontend",
    liveLink: "https://avocet-frontend.vercel.app/",
    image:
      "https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    name: "Currency Converter App",
    githubLink: "https://github.com/ameer017/currencyConverter",
    liveLink: "https://currencyexchangeconverter.netlify.app/",
    image:
      "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=400",
  },

  
  {
    name: "Quran Recitation App",
    githubLink: "https://github.com/ameer017/myquranaudioapp",
    liveLink: "https://myquranaudioapp.vercel.app/",
    image:
      "https://images.pexels.com/photos/7249294/pexels-photo-7249294.jpeg?auto=compress&cs=tinysrgb&w=400",
  },

  {
    name: "Food Recipe App",
    githubLink: "https://github.com/ameer017/foodrecipee",
    liveLink: "https://foodrecipeee.netlify.app/",
    image:
      "https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=400",
  },

  
];
const Projects = () => {
  return (
    <section className="container" id="projects">
      <div>
        <small>
          <mark>Featured Projects.</mark>
        </small>

        <p>I Have worked on more than <b>3</b> projects.</p>

        
      </div>

    

      <div className="card">
        {projects.map(({ name, liveLink, githubLink, image }) => (
          <div className="imageContainer">
            <img src={image} alt="project" className="first" />

            <div className="middle">
              <p>{name}</p>

              <div className="logo">
                <a href={githubLink}>
                  <AiFillGithub />
                </a>
                <a href={liveLink}>
                  <SiNetlify />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
