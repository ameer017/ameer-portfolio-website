import React from 'react'
import './Footer.scss'

const Footer = () => {
  const updatedYear = new Date().getFullYear();
  
  return (
    <footer className="footer --ta">
      <p>&copy; {updatedYear} <a href="mailto: rajiabdullahi907@gmail.com">Raji Abdullah Al Ameer</a> | All rights reserved.</p>
    </footer>
  )
}

export default Footer