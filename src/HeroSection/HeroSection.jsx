import React from "react";
import "./HeroSection.scss";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillGithub,
  AiFillMediumCircle,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

const HeroSection = () => {
  return (
    <>
      <section className="heroContainer container">
        <div className="hero-text container">
          <h1>Abdullah Raji Al Ameer.</h1>
          <p>
            I specialize in the artful conception and meticulous construction of
            outstanding products. By leveraging my skills in design and
            development, I craft solutions that not only meet but exceed
            expectations.
          </p>

          <div className='socials'>

            <a href="https://github.com/ameer017">
                <AiFillGithub size={25}/>
            </a>
            
            <a href="https://www.instagram.com/a.rajiabdullahi/">
                <AiOutlineInstagram size={25}/>
            </a>
            <a href="https://twitter.com/alAmeer170">
                <AiOutlineTwitter size={25}/>
            </a>
            <a href="https://medium.com/@rajiabdullahi907">
                <AiFillMediumCircle size={25}/>
            </a>
            <a href="https://ameer98.hashnode.dev/">
                <SiHashnode  size={25}/>
            </a>

          </div>
        </div>

        <img src="/IMG_20220319_102711_109~2.jpg" width={250} />
      </section>
    </>
  );
};

export default HeroSection;
