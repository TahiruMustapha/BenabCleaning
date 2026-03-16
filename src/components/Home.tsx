"use client"
import React from "react";
import GetStarted from "./GetStarted";
import PlayBtn from "./PlayBtn";
import { motion, Variants } from "motion/react";
import { FaLeaf, FaShieldAlt, FaStar } from "react-icons/fa";

const Home = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <div className="h-[100vh] overflow-hidden bg-slate-900">
      <div className="relative h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/cln4.jpg"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/manCleaning.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <motion.div 
          className="top-1/2 -translate-y-1/2 left-6 md:left-20 absolute z-10 p-6 md:p-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex items-center gap-2 text-blue-400 mb-6 bg-blue-400/10 w-fit px-4 py-1.5 rounded-full border border-blue-400/20"
            variants={itemVariants}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            <p className="text-xs uppercase tracking-[0.2em]">
              Premium Cleaning Experts
            </p>
          </motion.div>
          
          <motion.p 
            className="text-2xl md:text-4xl leading-[1.1] text-white capitalize font-black mb-6"
            variants={itemVariants}
          >
            Pristine spaces, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              effortless living.
            </span>
          </motion.p>
          
          <motion.p 
            className="leading-relaxed text-white/80 font-medium text-sm md:text-lg mb-10 max-w-[600px] border-l-2 border-blue-400/30 pl-6"
            variants={itemVariants}
          >
            We don't just clean; we transform your environment into a sanctuary of hygiene and peace. Experience the excellence of Ghana's finest cleaning team.
          </motion.p>
          
          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap gap-8 items-center pt-8 border-t border-white/10"
            variants={containerVariants}
          >
            {[
              { icon: FaShieldAlt, text: "Fully Insured", color: "text-emerald-400" },
              { icon: FaLeaf, text: "Eco-Friendly", color: "text-green-400" },
              { icon: FaStar, text: "Top Rated", color: "text-yellow-400" },
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-3"
                variants={badgeVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`p-2 rounded-lg bg-white/5 ${badge.color}`}>
                  <badge.icon size={20} />
                </div>
                <span className="text-sm font-semibold text-white/70">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Scroll Hint */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400/60 to-transparent relative">
            <motion.div 
              className="absolute top-0 left-[-1.5px] w-[4px] h-[4px] bg-blue-400 rounded-full"
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Dynamic Background Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
