"use client";
import Image from "next/image";
import React, { useState } from "react";

import Header from "./Header";
import Service from "./Service";
import About from "./About";
import Gallery from "./Gallery";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";

const Hero = () => {
 
 
 
  return (
    <main id="/" className="relative w-full h-screen">
      <div  className= { ` fixed text-white top-0 z-50 w-full`}>
        <Header />
      </div>
      
      
      <section>
        <Home/>
      </section>
      
      <section id="service">
        <Service/>
      </section>
      <section id="about">
        <About/>

      </section>
      <section id="gallery">
        <Gallery/>
      </section>
      <section id="team">
        <Team/>
      </section>
     <section id="contact">
      <Contact/>
     </section>

     <Footer/>
    </main>
  );
};

export default Hero;
