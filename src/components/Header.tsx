"use client";
// import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineCleaningServices } from "react-icons/md";
import { Link } from "react-scroll";
export const navData = [
  {
    title: "Home",
    id: "/",
   
  
  },
  {
    title: "Service",
    id: "service",
    
   
  },
  {
    title: "About",
    id: "about",
   
 
  },
  {
    title: "Gallery",
    id: "gallery",
  
   
  },
  {
    title: "Team",
    id: "team",
   
  },
  {
    title: "Contact",
    id: "contact",
   
  },
  {
    title: "Pricing",
    id: "pricing",
  
  },
  {
    title: "Client",
    id: "client",
   
  },
  {
    title: "Blog",
    id: "blog",
   
  },
];
const Header = () => {
  const [scrollColor, setScrollColor] = useState(false);

  const scrolly = () => {
    if (window.scrollY >= 84) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };
  window.addEventListener("scroll", scrolly);
  return (
    <header
      className={
        scrollColor
          ? ` bg-blue-900 duration-500 py-6 flex shadow-md  shadow-blue-700   items-center justify-between  px-40 `
          : `py-6 flex duration-500   items-center justify-between  px-40`
      }
    >
      <div>
        <h1 className=" cursor-pointer font-bold flex items-center text-3xl text-yellow-400">
          BenabCleaning <MdOutlineCleaningServices />
        </h1>
      </div>
      <div>
        <ul className=" flex items-center gap-8">
          {navData.map((navItems) => (
            <Link
              to={navItems.id}    
             activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={navItems.id}
            >
              <li className=" text-lg cursor-pointer ">{navItems.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
