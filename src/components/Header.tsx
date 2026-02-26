"use client";
import React, { useEffect, useState } from "react";
import { MdClose, MdMenu, MdOutlineCleaningServices } from "react-icons/md";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";

export const navData = [
  { title: "Home", id: "/" },
  { title: "Service", id: "service" },
  { title: "About", id: "about" },
  { title: "Gallery", id: "gallery" },
  { title: "Team", id: "team" },
  { title: "Contact", id: "contact" },
  { title: "Pricing", id: "pricing" },
  { title: "Client", id: "client" },
  { title: "Blog", id: "blog" },
];

const Header = () => {
  const [scrollColor, setScrollColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const scrolly = () => {
    if (window.scrollY >= 50) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolly);
    return () => window.removeEventListener("scroll", scrolly);
  }, []);

  return (
    <header
      className={`fixed top-0  left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-20 lg:px-30 flex items-center justify-between ${
        scrollColor
          ? "py-4 bg-blue-950/90 backdrop-blur-lg  shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="group cursor-pointer flex items-center gap-2"
        >
          <div className="p-2 bg-[#FFAA00] rounded-lg text-blue-950 group-hover:rotate-12 transition-transform duration-300">
            <MdOutlineCleaningServices size={28} />
          </div>
          <h1 className="font-black text-2xl tracking-tighter text-white">
            Benab<span className="text-[#FFAA00]">Cleaning</span>
          </h1>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1">
        {navData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              to={item.id}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative px-4 py-2 cursor-pointer text-sm font-semibold text-white/80 hover:text-white transition-colors group [&.active]:text-[#FFAA00]"
            >
              {item.title}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFAA00] transition-all duration-300  group-[.active]:w-2/3" />
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Action Button (Desktop Only) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:block  bg-[#FFAA00] text-blue-950 px-3 py-2 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(255,170,0,0.4)] transition-all"
      >
        Book Now
      </motion.button>

      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          {showMenu ? <MdClose size={32} /> : <MdMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full h-screen bg-blue-950/95 backdrop-blur-xl border-t border-white/5 lg:hidden overflow-y-auto pb-40"
          >
            <ul className="flex flex-col items-center justify-start pt-12 gap-8 px-6">
              {navData.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    to={item.id}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                    className="block text-2xl font-bold py-2 text-white/90 hover:text-[#FFAA00] transition-colors"
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 w-full bg-[#FFAA00] text-blue-950 py-4 rounded-2xl font-black text-xl"
              >
                Book Now
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
