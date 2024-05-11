import React from "react";
import { FaGoogle, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook, MdKeyboardArrowRight, MdOutlineCleaningServices } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-gray-50 w-full  h-[80vh]">
      <div className=" flex flex-col  md:flex-row  justify-start  md:justify-center pt-20 w-full px-2 md:px-0  md:w-[85%] gap-10 mx-auto h-fit pb-10">
        <div className=" w-[330px] ">
          <h2 className=" text-xl text-blue-900 mb-5 font-semibold">
            About BenabCleaning
          </h2>
          <p className="text-blue-900 text-sm md:text-base md:leading-8 ">
            Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed
            eiusmod tempor sit.
          </p>
        </div>
        <div className="  flex md:items-center flex-col   w-[330px] ">
          <h2 className="text-xl text-blue-900 mb-5 font-semibold">
            Quick Links
          </h2>
          <div className=" flex text-blue-900 flex-col   gap-2">
            <li className=" flex items-center cursor-pointer ">
              <span className=" text-xl font-bold">
                <MdKeyboardArrowRight />
              </span>
              Get Started
            </li>
            <li className=" flex items-center cursor-pointer">
              <span className=" text-xl font-bold">
                <MdKeyboardArrowRight />
              </span>
              Our Client
            </li>
            <li className=" flex items-center">
              {" "}
              <span className=" text-xl font-bold cursor-pointer">
                <MdKeyboardArrowRight />
              </span>{" "}
              About Us
            </li>
            <li className=" flex items-center cursor-pointer">
              <span className=" text-xl font-bold">
                <MdKeyboardArrowRight />
              </span>
              Need Help
            </li>
            <li className=" flex items-center">
              <span className=" text-xl font-bold">
                <MdKeyboardArrowRight />
              </span>
              Contact Us
            </li>
          </div>
        </div>
        <div className=" w-[330px] text-blue-900 ">
          <h2 className="text-xl text-blue-900 mb-5 font-semibold">
            Contact Us
          </h2>
          <div className=" flex flex-col gap-2">
            <li className=" flex items-center  cursor-pointer">
              <span className=" text-xl font-bold">
                <MdKeyboardArrowRight />
              </span>
              (098) 407-854-0933
            </li>
            <li className=" flex items-center cursor-pointer">
              <span className=" text-xl font-bold">
                <MdKeyboardArrowRight />
              </span>
              example@gmail.com
            </li>
            <li className=" flex items-center">
              <span className=" text-xl font-bold">
                <MdKeyboardArrowRight />
              </span>
              United state, california
            </li>
            <li className=" flex items-center cursor-pointer gap-2 w-full mt-4">
              <span className=" px-2 py-2 rounded-md bg-blue-900 text-white">
                <MdFacebook />
              </span>
              <span className=" px-2 py-2 rounded-md bg-blue-900 text-white">
                <FaXTwitter />
              </span>
              <span className=" px-2 py-2 rounded-md bg-blue-900 text-white">
                <FaGoogle />
              </span>
              <span className=" px-2 py-2 rounded-md bg-blue-900 text-white">
                <FaPinterestP />
              </span>
            </li>
          </div>
        </div>
        <div className="w-[330px]">
          <h2 className=" text-xl text-blue-900 mb-5 font-semibold">Our Map</h2>
        </div>
        
      </div>
     <div className=" w-full px-2 md:px-0 md:w-[85%] h-[16%]  mx-auto mt-20">
     <hr  className=""/>
     <div className=" flex h-full  w-full items-center justify-between">
     <div>
        <h1 className=" cursor-pointer font-bold flex items-center text-2xl md:text-3xl text-yellow-400">
          BenabCleaning <MdOutlineCleaningServices />
        </h1>
      </div>
      <p className=" text-center text-gray-400">2024 &copy; BCleaning. Designed by  Tahiru</p>
     </div>
     </div>
        
      
      
    </div>
  );
};

export default Footer;
