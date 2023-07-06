import { useState, useEffect } from 'react'
import {Navbar, Empty, HeroSection, About, Footer, Projects, Services, Contact,  } from '../index'
import './App.css'
import Service from './Service/Service'

function App() {
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setisLoading(false)
      }, 2000)
  }, [])


  return (
    <div className="App">
      {isLoading ? (
      <Empty />
    ) : (
      <>
        <Navbar />  
        <HeroSection/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </>      
    )}
    </div>
  )
}

export default App
