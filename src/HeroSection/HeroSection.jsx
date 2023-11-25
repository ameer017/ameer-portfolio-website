import React from 'react'
import './HeroSection.scss'
const HeroSection = () => {

  return (
    <>
      <section className='heroContainer container'>
            <div className='hero-text'>
              <h1>Abdullah Raji Al Ameer.</h1>
              <small>Alumni <a href="https://twitter.com/dlt-africa">DLTAfrica.</a></small>

              <p>I'm a software developer, specializing in building (and occasionally designing) exceptional digital experiences.</p>
            </div>

            <div className='hero-info flex-start'>
              <span>⚐ Javascript</span>
              <span>⚐ React.js</span>
              <span>⚐ Node.js/Express.js</span>
              <span>⚐ MongoDb</span>
              <span>⚐ Solidity</span>
            </div>        
      </section>

    </>
  )
}

export default HeroSection