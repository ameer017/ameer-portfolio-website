import React from 'react'
import './Projects.scss'
import picture from '../assets/picture.jpg'
import {AiFillGithub} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'

const projects = [
  {name: 'Currency Converter App', githubLink: 'https://github.com/ameer017/currencyConverter', liveLink: 'https://currencyexchangeconverter.netlify.app/', image: 'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=400'},

  {name: 'Country Data App', githubLink: 'https://github.com/ameer017/countryinfo', liveLink: 'https://whole-country-info.netlify.app/', image: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=400'},

  {name: 'Weather Forecast App', githubLink: 'https://github.com/ameer017/newweather', liveLink: 'https://weathernewapp.netlify.app/', image: 'https://images.pexels.com/photos/4951280/pexels-photo-4951280.jpeg?auto=compress&cs=tinysrgb&w=400'},

  {name: 'Quran Recitation App', githubLink: 'https://github.com/ameer017/myquranaudioapp', liveLink: 'https://app.netlify.com/sites/appquranaudio/', image: 'https://images.pexels.com/photos/7249294/pexels-photo-7249294.jpeg?auto=compress&cs=tinysrgb&w=400'},

  {name: 'Food Recipe App', githubLink: 'https://github.com/ameer017/foodrecipee', liveLink: 'https://app.netlify.com/sites/foodrecipeee/', image: 'https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=400'},

  {name: 'Rock-Paper-Scissors App', githubLink: 'https://github.com/ameer017/rock-paper-scissors', liveLink: 'https://app.netlify.com/sites/symphonious-smakager-c6b71b/', image: 'https://images.pexels.com/photos/4464438/pexels-photo-4464438.jpeg?auto=compress&cs=tinysrgb&w=400'},

]
const Projects = () => {
  return (
    <section className='container' id='projects'>
    
      <h3 className='--ta'>Projects</h3>

      <div className='flex-sb --padding'>
        <p>Recent work</p>
        <a href='https://github.com/ameer017'>View archive <BsFillArrowRightCircleFill/></a>
      </div>
    
      <div className='card'>
        {projects.map(({name, liveLink, githubLink, image}) => (
          
          <div className="imageContainer">
                <img src={image} alt="equilibrium" className="first" />

                <div className="middle">
                  <p>{name}</p>

                  <div className='logo'>
                    <a href={githubLink}><AiFillGithub/></a>
                    <a href={liveLink}><SiNetlify/></a>
                  </div>
                </div>
          </div>  
        ))}
      </div>

    </section>
  )
}

export default Projects