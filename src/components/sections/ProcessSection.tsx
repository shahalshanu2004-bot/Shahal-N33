"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  { num: "01", title: "RESEARCH", desc: "Analyze unit economics, competitor angles, audience intent, and target business goals." },
  { num: "02", title: "TEST", desc: "Deploy structured creative hooks, messaging angles, and audience segments." },
  { num: "03", title: "TRACK", desc: "Verify server-side CAPI events, qualified conversions, and meaningful downstream signals." },
  { num: "04", title: "OPTIMIZE", desc: "Cut unprofitable ad spend, fix drop-offs, and double down on winning creative variations." },
  { num: "05", title: "SCALE", desc: "Increase budget only when acquisition cost and conversion efficiency are consistently repeatable." },
];

const whyWorkWithMePoints = [
  {
    num: "01",
    title: "Direct Strategic Execution",
    desc: "You work directly with the performance marketer building, monitoring, and optimizing your campaigns — not an account manager or junior intern."
  },
  {
    num: "02",
    title: "Verified Conversion Signals",
    desc: "Clean server-side tracking (Meta CAPI, GA4, offline events) ensures ad platforms optimize on real revenue events, never low-intent vanity clicks."
  },
  {
    num: "03",
    title: "Structured Angle & Hook Testing",
    desc: "Continuous creative iteration systematically identifies high-converting angles that drive down cost per acquisition before scaling budget."
  },
  {
    num: "04",
    title: "Economics & Revenue Focus",
    desc: "Every campaign decision is anchored to sustainable unit economics, target CPL, and verifiable business return rather than impression counts."
  }
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
    <section id="how-i-work" className="py-28 md:py-36 bg-[#050508] relative border-b border-white/5" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-20 md:mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6"
        >
          <div>
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              EXECUTION FRAMEWORK
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              HOW I <span className="text-[#3b82f6]">WORK</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-white font-bold tracking-wider uppercase text-sm leading-relaxed mb-2">
              Research &rarr; Test &rarr; Track &rarr; Optimize &rarr; Scale
            </p>
            <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
              Every campaign follows a structured optimization methodology to turn ad spend into predictable acquisition.
            </p>
          </div>
        </motion.div>

        {/* 5-Step Methodology */}
        <div className="w-full relative mb-28">
          <div className="w-full overflow-x-auto hide-scrollbar">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex md:grid md:grid-cols-5 gap-6 min-w-max md:min-w-0 pb-4"
            >
              {steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="w-[220px] md:w-auto relative group flex flex-col shrink-0">
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
                    <h3 className="font-heading text-lg lg:text-xl font-black text-white tracking-wider group-hover:text-[#3b82f6] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed max-w-[200px] group-hover:text-white/70 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Compact "Why Work With Me" Block */}
        <div className="pt-16 border-t border-white/5">
          <div className="mb-12">
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              DIFFERENTIATORS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
              WHY WORK WITH SHAHAL N?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithMePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-[#09090c] border border-white/5 hover:border-[#3b82f6]/40 transition-all duration-300 flex flex-col justify-start group hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[#3b82f6] text-xs font-bold">{item.num}</span>
                  <div className="h-px flex-1 bg-white/5 group-hover:bg-[#3b82f6]/30 transition-colors" />
                </div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#3b82f6] transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
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
