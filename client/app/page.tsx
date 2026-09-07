"use client";

import Header from "@/app/components/Header/Header";
import Loader from "@/app/components/Loader/Loader";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import About from "@/app/components/About/About";
import Service from "@/app/components/Service/Service";
import Project from "@/app/components/Project/Project";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import SmoothScroll from "@/app/components/Motion/SmoothScroll";
import { useCallback, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [showSite, setShowSite] = useState(false);

  const handleReveal = useCallback(() => {
    setShowSite(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

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
            <Service />
            <Project />
            <Contact />
            <Footer />
          </SmoothScroll>
        </div>
      )}
    </>
  );
}
