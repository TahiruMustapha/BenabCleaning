"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import Header from "./Header";
import PlayBtn from "./PlayBtn";
import GetStarted from "./GetStarted";
import Service from "./Service";
import About from "./About";
import Gallery from "./Gallery";
import Team from "./Team";

const Hero = () => {
  const settings = {
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: false,
    autoplaySpeed: 2000,
  };
 
 
  return (
    <main id="/" className={ `relative w-full `}>
      <div  className= { ` fixed text-white top-0 z-50 w-full`}>
        <Header />
      </div>

      <Slider {...settings} className=" ">
        <div className=" relative">
          <img
            src={"/cln1.jpg"}
            alt="image"
            className=" w-full  max-h-[650px]  object-cover"
          />
          <div className="  max-w-[600px] top-40 left-10 absolute ">
            <h3 className=" text-xl font-bold text-white">
              WE ARE CLEANING EXPERT
            </h3>
            <h2 className=" mt-8 text-5xl leading-tight text-white capitalize font-bold">
              We have the best cleaning services offering in Ghana
            </h2>
            <p className=" mt-8 leading-tight text-white font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              sapiente animi amet veritatis non corrupti itaque molestiae,
              magni, minus, doloribus eius.
            </p>
            <div className=" mt-8 flex gap-4 w-ful items-center ">
              <GetStarted />
              <PlayBtn />
            </div>
          </div>
        </div>
        <div className=" relative">
          <img
            src={"/cln4.jpg"}
            alt="image"
            className=" w-full max-h-[650px] object-cover"
          />

          <div className="  max-w-[600px] top-40 left-[30%] absolute ">
            <h3 className=" text-xl font-bold text-white text-center">
              {" "}
              CLEANING SERVICE
            </h3>
            <h2 className=" mt-8 text-5xl text-center leading-tight text-white capitalize font-extrabold">
              Your house will be cleaning service offering
            </h2>
            <p className=" mt-8 leading-tight text-white font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              sapiente animi amet veritatis non corrupti itaque molestiae,
              magni, minus, doloribus eius.
            </p>
            <div className=" mt-8 flex gap-4 w-ful items-center justify-center ">
              <GetStarted />
              <PlayBtn />
            </div>
          </div>
        </div>

        <div className=" relative">
          <img
            src={"/cln3.jpg"}
            alt="image"
            className=" w-full max-h-[650px] object-cover"
          />

          <div className="  max-w-[600px] top-40 right-10 absolute ">
            <h3 className=" text-xl font-bold text-white"> CLEANING SERVICE</h3>
            <h2 className=" mt-8 text-5xl leading-tight text-white capitalize font-bold">
              Do you want a personal cleaning service?
            </h2>
            <p className=" mt-8 leading-tight text-white font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              sapiente animi amet veritatis non corrupti itaque molestiae,
              magni, minus, doloribus eius.
            </p>
            <div className=" mt-8 flex gap-4 w-ful items-center justify-end ">
              <GetStarted />
              <PlayBtn />
            </div>
          </div>
        </div>
      </Slider>
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
    </main>
  );
};

export default Hero;
