import { useState, useEffect } from 'react'
import {Navbar, Empty, HeroSection, About, Footer, Projects, Services, Contact } from '../index'
import './App.css'
import Featured from './Featured/Featured'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
  }, [])


  return (
    <div className="App">
      {/* {isLoading ? ( */}
      {/* <Empty /> */}
    {/* ) : ( */}
      <>
        <Navbar />  
        <HeroSection/>
        <Featured/>
        <About/>
        <Projects/>
        {/* <Services/> */}
        {/* <Contact/> */}
        {/* <Footer/> */}
      </>      
    {/* )} */}
    </div>
  )
}

export default App
