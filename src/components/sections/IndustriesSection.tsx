"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const industries = [
  "E-Commerce & Retail",
  "Political Campaigns & PR",
  "Education & EdTech",
  "Travel & Tourism",
  "Food & Beverage",
  "Local Services"
];

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                Industries <br />
                <span className="text-[#3b82f6] italic font-serif">Served.</span>
              </h2>
              <p className="text-white/60">
                Deep vertical expertise allowing for highly tailored, high-converting strategies that speak directly to your target demographic.
              </p>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/3">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
            >
              {industries.map((industry, index) => (
                <motion.div key={index} variants={itemVariants} className="group relative py-4 border-b border-white/10 interactive cursor-pointer">
                  <div className="absolute inset-0 bg-[#3b82f6]/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 pointer-events-none"></div>
                  <h3 className="font-heading text-xl font-medium text-white/80 group-hover:text-[#3b82f6] transition-colors duration-300 relative z-10 flex items-center">
                    <span className="text-xs text-[#3b82f6] mr-4 font-sans tracking-widest">0{index + 1}</span>
                    {industry}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
