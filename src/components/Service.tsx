"use client";
import React from "react";
import { MdArrowRightAlt, MdOutlineCleaningServices } from "react-icons/md";
import { motion, Variants } from "motion/react";

const serviceData = [
  {
    img: "/serv1.png",
    title: "Office Cleaning",
    desc: "Comprehensive cleaning solutions for professional workspaces, ensuring a healthy environment.",
    btnText: "Learn More",
  },
  {
    img: "/serv2.png",
    title: "Kitchen Cleaning",
    desc: "Deep sanitation and grease removal for commercial and residential kitchens.",
    btnText: "Learn More",
  },
  {
    img: "/serv3.png",
    title: "Window Cleaning",
    desc: "Crystal-clear views with our professional streak-free window cleaning services.",
    btnText: "Learn More",
  },
  {
    img: "/serv4.png",
    title: "Home Cleaning",
    desc: "Personalized home cleaning that fits your schedule and lifestyle perfectly.",
    btnText: "Learn More",
  },
];

const Service = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="service" className="relative py-24 md:py-32 bg-slate-200 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-200 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="relative overflow-hidden rounded-[1rem] mb-20 max-w-5xl mx-auto group shadow-2xl shadow-blue-900/5">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <motion.div 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-[url('/cln4.jpg')] bg-cover bg-center bg-no-repeat opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          </div>

          <div className="relative z-10 py-20 px-8 flex flex-col items-center text-center">
           
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#FFAA00] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 bg-[#FFAA00]/10 px-4 py-1.5 rounded-full"
            >
              What We Offer
            </motion.span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              className="h-2 bg-gradient-to-r from-[#FFAA00] to-orange-500 rounded-full"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group relative bg-white p-8 rounded-lg border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.1)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-950/90 rounded-bl-[100px] -mr-12 -mt-12 group-hover:scale-[3] transition-transform duration-700 opacity-50" />
              
              <div className="relative z-10">
                <div className="mb-10 w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-[#FFAA00] transition-colors duration-300">
                  <img src={service.img} alt={service.title} className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8 text-sm line-clamp-3">
                  {service.desc}
                </p>

                <button className="flex items-center gap-2 text-blue-950 font-bold text-sm tracking-wide group/btn hover:text-[#FFAA00] transition-colors">
                  {service.btnText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <MdArrowRightAlt size={20} className="text-[#FFAA00]" />
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
