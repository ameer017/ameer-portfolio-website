import { useState, useEffect } from 'react'
import {Navbar, Empty, HeroSection, About, Footer, Projects, Services, Contact } from '../index'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
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
