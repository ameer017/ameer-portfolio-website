"use client";
import Loader from "@/app/components/Loader/Loader"
import HeroSection from "@/app/components/HeroSection/HeroSection"
import About from "@/app/components/About/About"
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return(
    
    <div>
      {/* <Loader/> */}
      <HeroSection/>
      <About/>
    </div>
  )
}
