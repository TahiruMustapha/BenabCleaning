"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
const Gallery = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots:true,
    arrows: false,
    autoplaySpeed: 2000,
  };
 const[openBlue,setOpenBlue] = useState(false)
  return (
    <div id="gallery" className=" bg-blue-50 mt-28 pb-32">
      <div className=" flex flex-col  max-w-[480px] mx-auto  mt-5 items-center justify-between">
        <img src="/service.png" alt="img" className=" mt-10 mb-10" />
        <h3 className=" text-blue-600 font-light tracking-wider">GALLERY</h3>
        <div>
          <h4 className="text-blue-600 leading-[1.5]  tracking-wide text-center font-normal text-3xl capitalize mt-10">
            Our Recent Cleaning Service Here You can check now
          </h4> 
        </div>
      </div>
      <div className="  mt-24 max-w-[78%]  pb-10   mx-auto  ">
        <Slider {...settings} className="">
            <div className={ `relative  group  overflow-x-hidden `}>
                <img src="/gallery1.jpg" alt="image" className="max-w-[562px]  object-cover" />
               <div className=" w-[96%]  absolute hidden group-hover:inline-block top-0 bg-blue-900 bg-opacity-90  h-full   ">
                <div className="w-full h-full  flex gap-5 flex-col items-center justify-center     ">
                <p className=" w-12 h-12 text-gray-500 rounded-full cursor-pointer flex items-center justify-center  bg-yellow-400 shadow-md"><FaSearch/> </p> 
                <h3 className=" text-white text-lg font-semibold">Monthly Cleaning Service</h3>
                  <p className=" text-white text-lg">Office Cleaning</p>
                </div>
               
               </div>
            </div>
            <div className="relative  group overflow-x-hidden ">
            <img src="/gallery2.jpg" alt="image"  className=" max-w-[562px] object-cover"/>
            <div className=" w-[96%]  absolute hidden group-hover:inline-block transition-opacity duration-500  top-0 h-full   ">
                <div className="w-full h-full  flex gap-5 flex-col items-center justify-center bg-blue-900 bg-opacity-90 ">
                <p className=" w-12 h-12 text-gray-500 rounded-full cursor-pointer flex items-center justify-center bg-yellow-400 shadow-md"><FaSearch/> </p> 
                <h3 className=" text-white text-lg font-semibold">Monthly Cleaning Service</h3>
                  <p className=" text-white text-lg">Office Cleaning</p>
                </div>
               
               </div>
            </div>
            <div className="relative  group overflow-x-hidden ">
            <img src="/gallery3.jpg" alt="image"  className=" max-w-[562px] object-cover"/>
            <div className=" w-[96%]  absolute hidden group-hover:inline-block transition-opacity duration-500  top-0 h-full   ">
                <div className="w-full h-full  flex gap-5 flex-col items-center justify-center bg-blue-900 bg-opacity-90  ">
                <p className=" w-12 h-12 text-gray-500 rounded-full cursor-pointer flex items-center justify-center bg-yellow-400 shadow-md"><FaSearch/> </p> 
                <h3 className=" text-white text-lg font-semibold">Monthly Cleaning Service</h3>
                  <p className=" text-white text-lg">Office Cleaning</p>
                </div>
               
               </div>
            </div>
            <div className="relative  group overflow-x-hidden">
            <img src="/about33.jpg" alt="image"  className=" max-w-[562px] object-cover"/>
            <div className=" w-[96%]  absolute hidden group-hover:inline-block transition-opacity duration-500  top-0 h-full   ">
                <div className="w-full h-full  flex gap-5 flex-col items-center justify-center bg-blue-800 bg-opacity-80   ">
                <p className=" w-12 h-12 text-gray-500 rounded-full cursor-pointer flex items-center justify-center bg-yellow-400 shadow-md"><FaSearch/> </p> 
                <h3 className=" text-white text-lg font-semibold">Monthly Cleaning Service</h3>
                  <p className=" text-white text-lg">Office Cleaning</p>
                </div>
               
               </div>
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
