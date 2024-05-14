"use client";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdClose, MdMenu, MdOutlineCleaningServices } from "react-icons/md";
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
  const [showMenu, setShowMenu] = useState(false);

  const scrolly = () => {
    if (window.scrollY >= 84) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolly);
    return () => {
      window.addEventListener("scroll", scrolly);
    };
  }, []);
  return (
    <header
      className={
        scrollColor
          ? `  bg-blue-900   duration-500 py-6 flex shadow-md  shadow-blue-700   items-center justify-between px-4  md:px-40 `
          : `  py-6 flex  duration-500 relative   items-center justify-between px-4  md:px-40`
      }
    >
      <div>
        <h1 className=" cursor-pointer font-bold flex items-center text-3xl text-yellow-400">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=" flex items-center"
          >
            BenabCleaning <MdOutlineCleaningServices />
          </Link>
        </h1>
      </div>
      <div>
        {showMenu ? (
          <div className=" absolute  top-20 left-0 rounded-md h-[100vh] bg-blue-900 w-[80%]">
            <ul className="flex duration-500 flex-col items-center h-full justify-center gap-8">
              {navData.map((navItems) => (
                <Link
                  to={navItems.id}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={navItems.id}
                  className="flex"
                >
                  <li
                    onClick={() => setShowMenu(false)}
                    className=" text-2xl cursor-pointer "
                  >
                    {navItems.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="flex  items-center gap-8">
            {navData.map((navItems) => (
              <Link
                to={navItems.id}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={navItems.id}
                className="hidden md:inline-flex"
              >
                <li className=" text-lg cursor-pointer ">{navItems.title}</li>
              </Link>
            ))}
          </ul>
        )}
        {showMenu ? (
          <MdClose
            onClick={() => setShowMenu(false)}
            className="md:hidden    text-4xl"
          />
        ) : (
          <MdMenu
            onClick={() => setShowMenu(true)}
            className="md:hidden  text-4xl"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
