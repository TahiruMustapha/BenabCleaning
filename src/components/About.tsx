"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import AboutInfo from "./AboutInfo";

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
  />
);

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const shapeRotation = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
        {word}
      </motion.span>
    ));
  };

  return (
    <div ref={containerRef} id="about" className="relative bg-white overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
          <Image
            src="/cln4.jpg"
            alt="Professional Cleaning Service"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-white" />
        </motion.div>

        {/* Floating Interactive Shapes */}
        <FloatingShape className="bg-[#FFAA00] w-96 h-96 -top-40 -left-40" />
        <FloatingShape className="bg-blue-500 w-80 h-80 bottom-20 -right-20" delay={2} />
        
        {/* Dynamic Brand Accent Shape */}
        <motion.div
          style={{ rotate: shapeRotation }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: -50, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-1/4 w-[350px] h-[450px] md:w-[600px] md:h-[700px] bg-gradient-to-br from-[#FFAA00] to-orange-400 rounded-r-[250px] z-10 opacity-80 backdrop-blur-3xl hidden lg:block"
        />

        {/* Content Layer (Glassmorphism Effect) */}
        <motion.div 
          className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center"
          style={{ y: textY }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            <motion.h1 className="text-6xl md:text-8xl font-black leading-[1.1] mb-8 text-white">
              {splitText("Elevating Your Environment.")}
            </motion.h1>
            
            <motion.p className="text-xl md:text-3xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              {splitText("Cleaning isn't just a task; it's our meticulous craft. Discover the Benab standard of excellence.")}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator Micro-animation */}
        <motion.div 
          className="absolute bottom-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-black to-transparent" />
          <span className="text-black/40 text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
        </motion.div>
      </section>

      {/* Interactive Story Section */}
      <section className="relative py-32 px-6 bg-white z-30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-black mb-10 tracking-tighter">
                Our <span className="text-[#FFAA00]">story</span>.
              </h2>
              <div className="space-y-8 text-gray-500 text-xl md:text-2xl leading-relaxed font-light">
                <p>
                  Founded on the principle that a clean space is the foundation of a meaningful life, we've spent decades redefining professional cleaning in Ghana.
                </p>  
                <p>
                  We don't just clear dust; we clear the way for your productivity, your health, and your peace of mind. Every sweep is executed with intentionality and passion.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/about1.jpg" 
                alt="Our Journey" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Metrics Layer */}
      <section className="bg-slate-900  py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: "Spaces Transformed", value: "2k+", color: "text-[#FFAA00]" },
            { label: "Expert Cleaners", value: "4.5k", color: "text-blue-400" },
            { label: "Years of Craft", value: "30+", color: "text-emerald-400" },
            { label: "Community Trust", value: "99%", color: "text-purple-400" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="group cursor-default"
            >
              <p className={`text-5xl md:text-7xl font-black mb-4 transition-all duration-300 ${stat.color} group-hover:scale-110`}>
                {stat.value}
              </p>
              <div className="h-0.5 w-12 bg-white/20 mx-auto mb-4 group-hover:w-24 transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <AboutInfo />
    </div>
  );
};

export default About;
