"use client";
import Image from "next/image";
import React, { useState } from "react";

import Header from "./Header";
import Service from "./Service";
import About from "./About";
import Gallery from "./Gallery";
import Team from "./Team";
import Contact from "./Contact";
import Home from "./Home";
import Pricing from "./Pricing";
import Call from "./Call";
import Client from "./Client";
import NewsLetter from "./NewsLetter";
import Blog from "./Blog";
import Footer from "./Footer";

const Hero = () => {
  return (
    <main id="/" className=" relative w-full h-screen ">
      <div className={`  fixed text-white top-0 z-50 w-full`}>
        <Header />
      </div>

      <section>
        <Home />
      </section>

      <section id="service">
        <Service />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section>
        <Call />
      </section>
      <section id="client">
        <Client />
      </section>
      <section>
        <NewsLetter />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Hero;
