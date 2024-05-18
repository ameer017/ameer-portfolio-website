"use client";
import Header from "@/app/components/Header/Header";

import Loader from "@/app/components/Loader/Loader";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import About from "@/app/components/About/About";
import Service from "@/app/components/Service/Service";
import Project from "@/app/components/Project/Project";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />

          <HeroSection />
          <About />
          <Service />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
