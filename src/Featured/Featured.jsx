import React from 'react'
import './Featured.scss'

const features = [
  {id: 1, title: "Reactjs"},
  {id: 2, title: "Nextjs"},
  {id: 3, title: "Nodejs/Express"},
  {id: 4, title: "MongoDB"},
  {id: 5, title: "Solidity"},
]

const Featured = () => {
  return (
    <div className='featured flex-sb'>
        {features.map(({id, title}) => (
          <p key={id}>
            {title}
          </p>
        ))}
    </div>
  )
}

export default Featured