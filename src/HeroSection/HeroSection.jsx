import React from 'react'
import './HeroSection.scss'
const HeroSection = () => {

  return (
    <>
      <section className='heroContainer container'>
            <div className='hero-text'>
              <h1>Hi, my name is Raji Abdullah Al Ameer.</h1>
              <h2>I build things that lives on the web..</h2>
              <p>I'm a software developer, specializing in building (and occasionally designing) exceptional digital experiences. I'm an alumni of <a href="https://twitter.com/dlt-africa">DLTAfrica.</a></p>
            </div>

            <div className='hero-info flex-start'>
              <span>⚐ Javascript</span>
              <span>⚐ React.js</span>
              <span>⚐ Node.js</span>
              <span>⚐ MongoDb</span>
              <span>⚐ UI/UX</span>
            </div>        
      </section>

    </>
  )
}

export default HeroSection