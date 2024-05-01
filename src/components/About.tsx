import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <div id="about"> 
    <div className="  h-full py-16 md:py-40 mt-20 md:mt-36 w-full bg-gray-100">
      <div className=" w-full p-3 md:w-[80%] md:flex gap-32   mx-auto ">
        <div className=" mb-10 md:mb-0 ">
          <img src="/about1.jpg" alt="image" className="shadow-md" />
        </div>
        <div className=" max-w-[560px] px-3 ">
          <h1 className=" uppercase text-blue-800 tracking-wide font-light">
            About BenabCleaning
          </h1>
          <h4 className="text-blue-600 leading-[1.5] tracking-wider   font-medium text-2xl capitalize mt-8">
            Over 30+ Years of experience in <br /> cleaning service
          </h4>
          <p className=" text-gray-400 text-left mt-3  text-lg leading-8">
            Harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus.
          </p>
          <div className=" w-full mt-8 flex justify-start gap-8 md:gap-32">
            <div className=" flex  justify-start flex-col">
              <img
                src="/about2.jpg"
                alt="img"
                className=" w-20 h-20 rounded-full"
              />
              <p className=" text-gray-400 tracking-wider text-xl md:text-6xl font-medium mt-16">
                2080 +
              </p>
              <p className=" text-gray-400 uppercase text-lg tracking-wider font-normal mt-6 ">
                Project Complete
              </p>
            </div>
            <div>
              <img
                src="/about3.jpg"
                alt="img"
                className=" w-20 h-20 rounded-full"
              />
              <p className=" text-gray-400 tracking-wider text-xl md:text-6xl font-medium mt-16">
                4500 +
              </p>
              <p className=" text-gray-400 uppercase text-lg tracking-wider font-normal mt-6 ">
                Team Member
              </p>
            </div>
          </div>
          <button className=" mt-5 bg-blue-800 text-white border-[4px] border-yellow-300 px-5 py-3 cursor-pointer text-base mb-6 flex items-center gap-1 hover:bg-yellow-300 hover:text-blue-800 hover:border-transparent duration-200 ">
            Learn More <span className=" text-xl font-extrabold"><MdArrowRightAlt /></span> {" "}
          </button>
        </div>
      </div>
    </div>
    <AboutInfo/>
    </div>
  );
};

export default About;
