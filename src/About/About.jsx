import React from 'react';
import './About.scss';
import picture from '../../src/assets/picture.jpg'
import {AiOutlineTwitter, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai'

const About = () => {
  return (
    <section className='container' id='about'>
      <div className='about'>
        <div className='left'>
          <h3>About Me</h3>
        </div>

        <div className='middle'>
          <img src={picture} alt='about-image'/>
        </div>

        <div className='right'>
          <p>Hello! My name is Raji Abdullahi Al Ameer and i enjoy creating things that lives on the web.
          I'm a passionate software developer with a strong foundation in creating innovative and efficient solutions. With 1 year of experience in the field, I have honed my skills in javascript programming languages, frameworks, and development methodologies.</p>

          <div className='socials'>
            <h4>Follow me</h4>

            <a href="https://github.com/ameer017">
                <AiFillGithub size={18}/>
            </a>
            
            <a href="https://www.instagram.com/a.rajiabdullahi/">
                <AiOutlineInstagram size={18}/>
            </a>
            <a href="https://twitter.com/alAmeer170">
                <AiOutlineTwitter size={18}/>
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About