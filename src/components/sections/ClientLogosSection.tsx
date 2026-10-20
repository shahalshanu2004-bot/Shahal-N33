"use client";

import { motion } from "framer-motion";

const logos = [
  "FABLINE VENTURES", "ISLAND FOODS", "BSERVE", "SKILZ HUB", "AL SAUD", "LDF KERALA"
];

export default function ClientLogosSection() {
  return (
    <section className="py-20 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10">
        <p className="text-center text-white/40 text-sm tracking-widest uppercase font-medium">Trusted by industry leaders</p>
      </div>
      
      <div className="relative flex w-full">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <span 
              key={index} 
              className="mx-12 font-heading text-2xl md:text-3xl font-bold text-white/20 tracking-wider hover:text-[#3b82f6] transition-colors duration-500 cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
