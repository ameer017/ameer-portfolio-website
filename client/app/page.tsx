"use client";

import Header from "@/app/components/Header/Header";
import Loader from "@/app/components/Loader/Loader";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import About from "@/app/components/About/About";
import TechToolbox from "@/app/components/Service/Service";
import Partners from "@/app/components/Partners/Partners";
import Project from "@/app/components/Project/Project";
import Testimonial from "@/app/components/Testimonial/Testimonial";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import SmoothScroll from "@/app/components/Motion/SmoothScroll";
import { ScrollTrigger } from "@/app/lib/motion";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [showSite, setShowSite] = useState(false);

  const handleReveal = useCallback(() => {
    setShowSite(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  useEffect(() => {
    if (showLoader || !showSite) return;
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [showLoader, showSite]);

  return (
    <>
      {showLoader && (
        <Loader onReveal={handleReveal} onComplete={handleLoaderComplete} />
      )}

      {showSite && (
        <div className="bg-black min-h-screen">
          <SmoothScroll>
            <Header />
            <HeroSection showScrollCue={!showLoader} />
            <About />
            <TechToolbox />
            <Partners />
            <Project />
            <Testimonial />
            <Contact />
            <Footer />
          </SmoothScroll>
        </div>
      )}
    </>
  );
}
