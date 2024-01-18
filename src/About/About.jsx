import React from "react";
import "./About.scss";

import { FaEye } from "react-icons/fa";
import { TbFileDatabase } from "react-icons/tb";
import { GiWebSpit } from "react-icons/gi";

const elements = [
  { id: 1, details: "UI & Product Design", heading: <FaEye /> },
  { id: 2, details: "Web App Development", heading: <GiWebSpit /> },
  { id: 3, details: "Database Management", heading: <TbFileDatabase /> },
];

const About = () => {
  return (
    <section className="container" id="about">
      <small>
        <mark>What I do?</mark>
      </small>
      <div className="about">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a passionate software
          developer with a strong foundation in creating innovative and
          efficient solutions. With 1 year of experience in the field, I have
          honed my skills in javascript programming language, frameworks, and
          development methodologies.
        </p>

        <div className="element">
          <div className="el_one">
            {elements.map(({ id, heading, details }) => (
              <div key={id}>
                <span>{heading}</span>
                <h2>{details}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
