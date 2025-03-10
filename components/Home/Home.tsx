'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Spotlight from './Spotlight/Spotlight'
import Contact from './Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    const initAOSasync = async () => {
      await import("aos");
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom',
      });
    };
    initAOSasync();
  },[]);
  return (
    <div>
      <Hero/> 
      <About/>
      <Services/>
      <Project/>
      <Skills/>
      <Spotlight/>
      <Contact/>
    </div>
  )
}

export default Home