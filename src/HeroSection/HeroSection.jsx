import React from 'react'
import './HeroSection.scss'
const HeroSection = () => {

  return (
    <>
      <section className='heroContainer container'>
            <div className='hero-text'>
              <h1>Hi, my name is Abdullah Raji Al Ameer.</h1>

              <p>I'm a software developer, specializing in building (and occasionally designing) exceptional digital experiences. I'm an alumni of <a href="https://twitter.com/dlt-africa">DLTAfrica.</a></p>
            </div>

            <div className='hero-info flex-start'>
              <span>⚐ UI/UX</span>
              <span>⚐ Javascript</span>
              <span>⚐ React.js</span>
              <span>⚐ Node.js</span>
              <span>⚐ Express.js</span>
              <span>⚐ MongoDb</span>
              <span>⚐ Solidity</span>
            </div>        
      </section>

    </>
  )
}

export default HeroSection