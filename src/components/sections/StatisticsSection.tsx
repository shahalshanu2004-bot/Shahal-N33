"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "+", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000
  });
  const displayVal = useTransform(springVal, (current) => Math.floor(current));

  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      motionVal.set(value);
    }
  }, [inView, hasStarted, motionVal, value]);

  useEffect(() => {
    if (!hasStarted) return;
    return displayVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
  }, [displayVal, suffix, hasStarted]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}{suffix}
    </span>
  );
}

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { stats } = siteConfig;
  const hasClients = typeof stats.clientsWorkedWith === "number" && stats.clientsWorkedWith > 0;
  const hasProjects = typeof stats.projectsCompleted === "number" && stats.projectsCompleted > 0;
  const hasAdSpend = typeof stats.totalAdSpendManaged === "string" && stats.totalAdSpendManaged.length > 0;

  // If no stats are configured, hide the section entirely
  if (!hasClients && !hasProjects && !hasAdSpend) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#050508] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Subtle Dark Blue Gradient Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/[0.03] via-transparent to-[#3b82f6]/[0.02] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 text-center"
        >
          {/* Stat 01: Clients Worked With (conditional) */}
          {/* TODO: confirm the final numbers are accurate and match my case studies (currently 15+ clients, 20+ projects) */}
          {hasClients && (
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="font-heading text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-3">
                <Counter value={stats.clientsWorkedWith as number} suffix="+" />
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-sm uppercase tracking-widest font-medium">
                Clients Worked With
              </p>
            </motion.div>
          )}

          {/* Stat 02: Projects Completed (conditional) */}
          {hasProjects && (
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="font-heading text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-3">
                <Counter value={stats.projectsCompleted as number} suffix="+" />
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-sm uppercase tracking-widest font-medium">
                Projects Completed
              </p>
            </motion.div>
          )}

          {/* Stat 03: Total Ad Spend Managed (conditional) or DATA-DRIVEN banner */}
          {hasAdSpend ? (
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="font-heading text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black text-[#3b82f6] tracking-tight leading-none mb-3">
                {stats.totalAdSpendManaged}
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-sm uppercase tracking-widest font-medium">
                Ad Spend Managed
              </p>
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-white tracking-wider leading-none mb-3 pt-2 md:pt-3">
                <span className="text-[#3b82f6]">DATA-</span>DRIVEN
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-sm uppercase tracking-widest font-medium">
                Performance Focused
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
