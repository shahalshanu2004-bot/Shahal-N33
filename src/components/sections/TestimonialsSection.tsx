"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Render ONLY when data exists in data/testimonials.ts
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative overflow-hidden" ref={sectionRef}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#3b82f6]">
              <Quote size={24} />
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Client <span className="text-[#3b82f6] italic font-serif">Perspectives.</span>
          </h2>
          <p className="text-white/50 uppercase tracking-widest text-sm">100% Positive Feedback across all engagements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-12 md:px-24"
            >
              <p className="text-2xl md:text-4xl font-heading font-medium leading-relaxed text-white mb-8">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <div>
                <p className="font-bold text-[#3b82f6] text-lg uppercase tracking-wider">{testimonials[currentIndex].name}</p>
                <p className="text-white/50">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all duration-300 z-20"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all duration-300 z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#3b82f6] w-8' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
