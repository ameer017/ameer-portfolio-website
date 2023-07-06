import React from 'react'
import './Service.scss'
import {HiColorSwatch} from 'react-icons/hi'
import {FaConnectdevelop} from 'react-icons/fa'
import {RiPencilRuler2Fill} from 'react-icons/ri'
import {VscSymbolInterface} from 'react-icons/vsc'

const list = [
  {id: 'Web Design', info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio laudantium fugit repellat eveniet. Enim magnam quos dignissimos eum aperiam, impedit cupiditate, molestias perspiciatis ab vitae adipisci cumque, facilis velit?', logo: <HiColorSwatch/>}, 
  {id: 'Development', info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio laudantium fugit repellat eveniet. Enim magnam quos dignissimos eum aperiam, impedit cupiditate, molestias perspiciatis ab vitae adipisci cumque, facilis velit?', logo: <FaConnectdevelop/>}, 
  {id: 'UI/UX', info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio laudantium fugit repellat eveniet. Enim magnam quos dignissimos eum aperiam, impedit cupiditate, molestias perspiciatis ab vitae adipisci cumque, facilis velit?', logo: <VscSymbolInterface/>}, 
  {id: 'Branding', info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio laudantium fugit repellat eveniet. Enim magnam quos dignissimos eum aperiam, impedit cupiditate, molestias perspiciatis ab vitae adipisci cumque, facilis velit?', logo: <RiPencilRuler2Fill/>}, 
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