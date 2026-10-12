"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const steps = [
  { num: "01", title: "RESEARCH", desc: "Understand the audience, offer and campaign objective." },
  { num: "02", title: "TEST", desc: "Test audiences, creatives, hooks and messaging." },
  { num: "03", title: "TRACK", desc: "Measure events, conversions and meaningful signals." },
  { num: "04", title: "OPTIMIZE", desc: "Cut waste, improve efficiency and double down on what works." },
  { num: "05", title: "SCALE", desc: "Increase spend only when performance is repeatable." },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
  };

  return (
    <section id="process" className="py-28 md:py-36 bg-[#050508] relative border-b border-white/5" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-20 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter max-w-2xl mb-8 md:mb-0">
            HOW I THINK ABOUT <br className="hidden md:block" /><span className="text-[#3b82f6]">PERFORMANCE</span>
          </h2>
          <div className="flex flex-col gap-3 md:items-end md:text-right max-w-md">
            <p className="text-white font-bold tracking-widest uppercase text-sm md:text-base leading-relaxed">
              I DON&apos;T SCALE ASSUMPTIONS.<br/>
              <span className="text-[#3b82f6]">I SCALE WHAT THE DATA PROVES.</span>
            </p>
            <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed">
              Every campaign starts with research, moves through structured testing and tracking, and scales only when performance is repeatable.
            </p>
          </div>
        </motion.div>

        <div className="w-full relative">
          <div className="w-full overflow-x-auto hide-scrollbar">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex md:grid md:grid-cols-5 gap-6 min-w-max md:min-w-0 pb-4"
            >
              {steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="w-[200px] md:w-auto relative group flex flex-col shrink-0">
                  {/* Connector line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-8 left-16 right-[-1.5rem] h-[1px] bg-white/10 overflow-hidden z-0 hidden md:block">
                      <div className="h-full w-full bg-gradient-to-r from-[#3b82f6] to-[#3b82f6]/40 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </div>
                  )}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute top-8 left-16 right-[-1.5rem] h-[1px] bg-white/10 z-0">
                    </div>
                  )}
                  
                  <div className="mb-6 w-16 h-16 rounded-full bg-[#0c0c0e] border border-white/10 flex items-center justify-center text-[#3b82f6] font-heading font-black text-xl relative z-10 group-hover:bg-[#3b82f6] group-hover:text-white group-hover:border-[#3b82f6] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 shadow-lg shadow-black/50">
                    {step.num}
                  </div>
                  
                  <div className="group-hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-2">
                    <h3 className="font-heading text-lg lg:text-xl font-black text-white tracking-wider group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed max-w-[180px] group-hover:text-white/60 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
