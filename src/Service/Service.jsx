import React from 'react'
import './Service.scss'
import {HiColorSwatch} from 'react-icons/hi'
import {FaConnectdevelop} from 'react-icons/fa'
import {RiPencilRuler2Fill} from 'react-icons/ri'
import {VscSymbolInterface} from 'react-icons/vsc'

const list = [
  {id: 'Web Design', info: 'Web design is the process of creating and designing websites, focusing on the aesthetic appeal, functionality, and user experience. It involves combining various elements such as layout, color schemes, typography, images, and interactive features to create visually appealing and user-friendly websites. Good web design aims to capture the attention of visitors, convey a clear message, and guide them through the website seamlessly.', logo: <HiColorSwatch/>}, 
  {id: 'Development', info: 'Web development refers to the process of building and maintaining websites and web applications. It involves a combination of programming languages, such as HTML, CSS, and JavaScript, to create the structure, layout, and interactivity of a website. Web developers also work with server-side technologies, databases, and APIs to ensure the website functions properly and interacts with users and other systems.', logo: <FaConnectdevelop/>}, 
  {id: 'UI/UX', info: 'UI/UX design combines the art of visual appeal with the science of user-centered thinking. It marries aesthetics with functionality, creating delightful and meaningful experiences for users. By putting users at the center of the design process, UI/UX designers have the power to shape the way we interact with technology and enhance the overall digital landscape.', logo: <VscSymbolInterface/>}, 
  {id: 'Branding', info: 'Branding is crucial for businesses as it helps establish credibility, differentiate from the competition, and create a strong connection with customers. It enables companies to communicate their values, personality, and purpose, effectively conveying what they stand for and why they matter.', logo: <RiPencilRuler2Fill/>}, 
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