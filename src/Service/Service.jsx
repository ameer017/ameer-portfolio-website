import React from 'react'
import './Service.scss'
import {HiColorSwatch} from 'react-icons/hi'
import {FaConnectdevelop} from 'react-icons/fa'
import {RiPencilRuler2Fill} from 'react-icons/ri'
import {VscSymbolInterface} from 'react-icons/vsc'

const list = [
  {id: 'Web Design', info: 'I am skilled in designing and developing websites using various programming languages and design tools. I am constantly staying updated with the latest trends and technologies in web design to ensure that my clients receive the most innovative and effective solutions.', logo: <HiColorSwatch/>}, 

  {id: 'Development', info: 'With my strong foundation in markup and programming language, such as HTML, CSS, and JavaScript, I can -develop, build and maintain- websites and web applications and as well create the structure, layout, and interactivity of a website. I also work with server-side technologies, databases, and APIs to ensure the website functions properly and interacts with users and other systems.', logo: <FaConnectdevelop/>}, 

  {id: 'UI/UX', info: 'My design process involves extensive research, wire framing, prototyping, and iterative testing to ensure that the final product meets user needs and business goals. By combining my creative skills with user insights, I strive to craft meaningful and delightful experiences that resonate with users..', logo: <VscSymbolInterface/>}, 

  {id: 'Branding', info: 'I specialize in helping businesses and individuals create and establish a strong brand identity that resonates with their target audience. With a keen understanding of market trends and consumer behavior, I work closely with my clients to develop comprehensive branding strategies that elevate their presence in the market. My goal is to effectively communicate their unique value proposition, enhance their brand image, and ultimately drive their business growth.', logo: <RiPencilRuler2Fill/>}, 
]

const Service = () => {
  return (
    <section className='container' id='services'>
      <h3 className='--ta'>Services</h3>

      <div className='services'>
        {list.map(({id, info, logo}) => (
          <div className='details'>
            <div className='logoContainer'>
              <div className='logo'>{logo}</div>
            </div>

            <p>{id}</p>

            <h4>{info}</h4>
          </div>

        ))}
      </div>
    </section>
  )
}

export default Service