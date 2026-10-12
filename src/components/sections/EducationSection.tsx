"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

interface JourneyItem {
  title: string;
  institution: string;
  period: string;
  isCurrent?: boolean;
}

const journeyData: JourneyItem[] = [
  {
    title: "HIGHER SECONDARY — COMMERCE",
    institution: "GHSS KARUVARAKUNDU",
    period: "2020 – 2022"
  },
  {
    title: "B.COM — FINANCE",
    institution: "UNIVERSITY OF CALICUT",
    period: "2022 – 2025"
  },
  {
    title: "ADVANCED DIPLOMA IN DIGITAL MARKETING",
    institution: "SKILZ HUB",
    period: "JUNE 2025 – DECEMBER 2025"
  },
  {
    title: "FREELANCE PERFORMANCE MARKETER",
    institution: "INDEPENDENT",
    period: "2025 – PRESENT",
    isCurrent: true
  },
  {
    title: "DIGITAL MARKETING INTERN",
    institution: "FIRST LOGIC META LAB",
    period: "JANUARY 2026 – APRIL 2026"
  },
  {
    title: "DIGITAL MARKETING EXECUTIVE",
    institution: "FIRST LOGIC META LAB",
    period: "APRIL 2026 – PRESENT",
    isCurrent: true
  }
];

const TimelineCard = ({ item, index }: { item: JourneyItem; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: false, margin: "-10% 0px -10% 0px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative w-full py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Central Timeline Node (Both mobile & desktop) */}
      <div
        className={`absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#04060d] border-2 z-20 flex items-center justify-center transition-all duration-500 ${
          isInView
            ? "border-[#3b82f6] bg-[#3b82f6]/20 shadow-[0_0_16px_rgba(59,130,246,0.65)] scale-110"
            : "border-white/20"
        }`}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
            isInView ? "bg-[#3b82f6]" : "bg-white/30"
          }`}
        />
      </div>

      {/* Desktop Connector Line */}
      {isEven ? (
        <div
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 right-1/2 w-[40px] h-[1px] transition-colors duration-500 ${
            isInView ? "bg-gradient-to-l from-[#3b82f6] to-[#3b82f6]/30" : "bg-white/10"
          }`}
        />
      ) : (
        <div
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 w-[40px] h-[1px] transition-colors duration-500 ${
            isInView ? "bg-gradient-to-r from-[#3b82f6] to-[#3b82f6]/30" : "bg-white/10"
          }`}
        />
      )}

      {/* Mobile Connector Line */}
      <div
        className={`block md:hidden absolute left-4 sm:left-5 top-8 w-6 sm:w-9 h-[1px] transition-colors duration-500 ${
          isInView ? "bg-gradient-to-r from-[#3b82f6] to-[#3b82f6]/30" : "bg-white/10"
        }`}
      />

      {/* Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full ml-10 sm:ml-14 md:ml-0 md:w-[calc(50%-40px)]"
      >
        <div
          className={`relative p-6 sm:p-7 rounded-2xl bg-[#080d1a]/75 hover:bg-[#0c1326]/90 backdrop-blur-md border transition-all duration-300 group shadow-[0_4px_24px_rgba(0,0,0,0.45)] hover:-translate-y-1 ${
            isInView
              ? "border-[#3b82f6]/40 shadow-[0_0_24px_rgba(59,130,246,0.12)]"
              : "border-white/[0.08] hover:border-[#3b82f6]/30"
          }`}
        >
          {/* Top Bar with Date Badge */}
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                isInView || item.isCurrent
                  ? "bg-[#3b82f6]/10 border-[#3b82f6]/35 text-[#60a5fa]"
                  : "bg-white/[0.03] border-white/10 text-white/50"
              }`}
            >
              {item.isCurrent && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]" />
                </span>
              )}
              <span>{item.period}</span>
            </div>

            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/20 uppercase">
              0{index + 1}
            </span>
          </div>

          {/* Job Title / Qualification */}
          <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-2 leading-snug">
            {item.title}
          </h3>

          {/* Institution / Company / Organization */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#3b82f6]">
            {item.institution}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section
      id="journey"
      className="py-28 md:py-36 bg-[#04060d] relative border-b border-white/5 overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle Deep Navy Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/[0.08] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/[0.05] blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Centered Modern Heading with Accent Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 text-center"
        >
          {/* Subtle Top Kicker */}
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#3b82f6]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#3b82f6]">
              CAREER & EDUCATION ROADMAP
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#3b82f6]" />
          </div>

          {/* Heading with Minimal Blue Accent Lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2">
            <div className="h-[1px] flex-1 max-w-[50px] sm:max-w-[100px] md:max-w-[140px] bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-[#3b82f6]" />

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-center">
              <span className="text-white">PROFESSIONAL </span>
              <span className="text-[#3b82f6] drop-shadow-[0_0_24px_rgba(59,130,246,0.45)]">JOURNEY</span>
            </h2>

            <div className="h-[1px] flex-1 max-w-[50px] sm:max-w-[100px] md:max-w-[140px] bg-gradient-to-l from-transparent via-[#3b82f6]/40 to-[#3b82f6]" />
          </div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto relative">
          {/* Base Timeline Line */}
          <div className="absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Glowing Blue Central Progress Line */}
          <motion.div
            className="absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] origin-top z-10 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            style={{ scaleY }}
          />

          {/* Timeline Entries */}
          <div className="relative z-20 flex flex-col">
            {journeyData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

