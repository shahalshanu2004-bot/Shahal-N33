"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "239", label: "LEADS GENERATED", context: "Premium Real Estate Campaign" },
  { value: "₹33.9K", label: "TOTAL AD SPEND", context: "Premium Real Estate Campaign" },
  { value: "₹142", label: "BLENDED CPL", context: "Premium Real Estate Campaign" },
  { value: "368", label: "CONVERSIONS", context: "RS Water Solutions" },
  { value: "₹14.65", label: "AVG. COST / CONVERSION", context: "RS Water Solutions" },
  { value: "₹12.01", label: "BEST COST / CONVERSION", context: "Click-to-WhatsApp" },
  { value: "50K+", label: "PUBLICLY DISPLAYED GOOGLE PLAY DOWNLOADS", context: "CuteKaari" },
  { value: "10K+", label: "PUBLICLY DISPLAYED GOOGLE PLAY DOWNLOADS", context: "Relax Call" }
];

export default function StatisticsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#050508] relative z-10 border-b border-white/5" id="statistics">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col text-left group"
            >
              <div className="h-[2px] w-12 bg-[#3b82f6] mb-6 group-hover:w-24 transition-all duration-500 ease-out"></div>
              <h3 className="font-heading text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-2 leading-relaxed">
                {stat.label}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-[#3b82f6]/70">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
