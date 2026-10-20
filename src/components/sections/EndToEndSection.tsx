"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const funnelSteps = [
  { id: "01", title: "STRATEGY", desc: "Define the objective, audience and growth direction." },
  { id: "02", title: "TRAFFIC", desc: "Reach the right users through paid acquisition channels." },
  { id: "03", title: "CAMPAIGN", desc: "Build and launch campaigns around clear conversion goals." },
  { id: "04", title: "AUDIENCE", desc: "Research, segment and test audiences." },
  { id: "05", title: "CREATIVE", desc: "Test hooks, formats and messaging." },
  { id: "06", title: "CONVERSION", desc: "Track meaningful actions and downstream events." },
  { id: "07", title: "OPTIMIZATION", desc: "Analyze performance and identify what needs to change." },
  { id: "08", title: "REPORTING", desc: "Turn campaign data into clear business insights." },
];

export default function EndToEndSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section className="bg-[#050508] py-28 md:py-36 border-b border-white/5 overflow-hidden w-full max-w-full" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            FROM CLICK TO <span className="text-[#3b82f6]">CONVERSION</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            I work across the full performance marketing funnel &mdash; not just the ad account.
          </p>
        </motion.div>
      </div>

      {/* Internal Horizontal Scroll Container (No page-level overflow) */}
      <div className="w-full relative py-4 max-w-[1920px] mx-auto box-border">
        
        {/* Scrollable track */}
        <div className="w-full overflow-x-auto hide-scrollbar px-6 md:px-12 box-border">
          
          <div className="flex items-stretch gap-4 md:gap-6 w-max xl:w-full min-w-full pb-6">
            {funnelSteps.map((step, idx) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE }}
                className="w-[240px] md:w-[280px] xl:w-0 xl:flex-1 shrink-0 flex flex-col group relative"
              >
                {/* Number & Line */}
                <div className="flex items-center mb-6 relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0c0c0e] border border-white/10 group-hover:border-[#3b82f6] flex items-center justify-center text-white/50 group-hover:text-[#3b82f6] font-heading font-black text-sm md:text-lg transition-all duration-300 relative z-10 shrink-0 shadow-lg shadow-black/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {step.id}
                  </div>
                  {idx !== funnelSteps.length - 1 && (
                    <div className="h-[2px] flex-grow bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6]/50 group-hover:to-[#3b82f6]/10 transition-colors duration-500 absolute left-10 md:left-12 right-[-16px] md:right-[-24px] z-0" />
                  )}
                </div>
                
                {/* Card */}
                <div className="bg-[#0c0c0e] border border-white/5 p-5 md:p-6 rounded-2xl group-hover:border-[#3b82f6]/30 transition-all duration-300 h-full flex flex-col group-hover:-translate-y-1 group-hover:shadow-[0_8px_25px_rgba(59,130,246,0.06)]">
                  <h3 className="font-heading text-base md:text-lg lg:text-xl font-bold text-white uppercase mb-3 tracking-wide break-words group-hover:text-white transition-colors">{step.title}</h3>
                  <p className="text-white/50 text-[11px] md:text-sm leading-relaxed group-hover:text-white/60 transition-colors">{step.desc}</p>
                </div>
              </motion.div>
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
