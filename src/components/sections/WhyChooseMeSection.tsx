"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Authentic Engagement",
    desc: "Every business has a unique story. I focus on strategies that amplify your voice and build genuine connections with your audience."
  },
  {
    title: "Sustainable Leads",
    desc: "Moving beyond vanity metrics, I engineer digital pathways focused entirely on what truly matters: scalable and tangible revenue."
  },
  {
    title: "Relentless Innovation",
    desc: "From AI automation to emerging platform algorithms, I constantly explore new marketing experiments to keep you one step ahead."
  }
];

export default function WhyChooseMeSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-[#050505] relative" ref={sectionRef}>
      <div className="absolute left-0 top-0 w-1/3 h-full bg-[#3b82f6]/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[20px] overflow-hidden h-[500px] w-full"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 border border-white/10 rounded-[20px]"></div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Why partner <br />
                <span className="text-[#3b82f6] italic font-serif">with me?</span>
              </h2>
            </motion.div>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 text-[#3b82f6]">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2 text-white">{reason.title}</h3>
                    <p className="text-white/60 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
