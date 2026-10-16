"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { confirmedTrackingSkills } from "@/lib/data/tracking-skills";
import { Activity, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function TrackingCapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section
      id="tracking-capabilities"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#050508] border-b border-white/5 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#3b82f6]/[0.035] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
            <Activity className="w-3.5 h-3.5" /> MEASUREMENT & DATA ACCURACY
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-5 leading-none">
            CONVERSION TRACKING & <br className="hidden sm:block" />
            <span className="text-[#3b82f6]">TECHNICAL CAPABILITIES</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Profitable media buying depends on clean conversion signals. Every campaign is backed by verified tag placement, accurate attribution, and disciplined event mapping.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {confirmedTrackingSkills.map((skill, index) => {
            const cardContent = (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
                className="group p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#3b82f6]/40 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(59,130,246,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-[#3b82f6] transition-colors">
                      {skill.category}
                    </span>
                    {skill.href && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-white/5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3b82f6]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Verified On-Site</span>
                </div>
              </motion.div>
            );

            return skill.href ? (
              <Link key={skill.name} href={skill.href} className="block h-full">
                {cardContent}
              </Link>
            ) : (
              <div key={skill.name} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
