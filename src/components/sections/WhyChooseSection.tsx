"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ValueProposition {
  num: string;
  title: string;
  description: string;
}

const valueProps: ValueProposition[] = [
  {
    num: "01",
    title: "DATA-DRIVEN DECISIONS",
    description: "I use campaign performance data, audience insights, and structured testing to understand what works, identify opportunities, and make informed optimization decisions."
  },
  {
    num: "02",
    title: "PAID ADVERTISING",
    description: "I focus on Meta Ads and Google Ads, developing campaign strategies that connect the right audiences with relevant offers and clear business objectives."
  },
  {
    num: "03",
    title: "APP MARKETING",
    description: "I approach app marketing with a focus on user acquisition, conversion events, purchase optimization, and campaign performance to help businesses understand the customer journey beyond installs."
  },
  {
    num: "04",
    title: "CONVERSION TRACKING",
    description: "Accurate tracking helps reveal how users interact with campaigns. I focus on measuring meaningful actions and identifying the signals needed to evaluate advertising performance more effectively."
  },
  {
    num: "05",
    title: "CONTINUOUS OPTIMIZATION",
    description: "Campaign performance requires ongoing evaluation. I analyze audiences, creatives, budgets, and conversion data to identify inefficiencies, test improvements, and refine campaign strategy."
  },
  {
    num: "06",
    title: "STRATEGIC THINKING",
    description: "Effective performance marketing starts with a clear objective. I connect audience research, creative testing, campaign structure, and conversion measurement through a structured optimization process."
  }
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="py-28 md:py-36 bg-[#050508] relative border-t border-white/5 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Section Header with Reference-inspired layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-16 md:mb-20 text-center"
        >
          {/* Subtle Accent Tag */}
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-6 bg-[#3b82f6]" />
            <span className="text-[#3b82f6] text-[11px] uppercase tracking-[0.28em] font-semibold">
              VALUE PROPOSITION
            </span>
            <span className="h-px w-6 bg-[#3b82f6]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-[2.75rem] font-black uppercase tracking-wider text-white leading-tight mb-5">
            WHY CHOOSE SHAHAL N FOR{" "}
            <span className="text-[#3b82f6] inline-block">PERFORMANCE MARKETING?</span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            From strategic planning to campaign optimization, every decision is guided by data, meaningful testing, and a focus on measurable business objectives.
          </p>
        </motion.div>

        {/* Reference-inspired 2-Column Content Layout (without image) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-12 max-w-5xl mx-auto"
        >
          {valueProps.map((item) => (
            <motion.article
              key={item.num}
              variants={itemVariants}
              className="group relative flex flex-col justify-start border-l-2 border-white/10 hover:border-[#3b82f6] pl-6 md:pl-7 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-[#3b82f6] font-mono text-xs font-bold tracking-widest">
                  {item.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/60 group-hover:bg-[#3b82f6] transition-colors" />
                <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#3b82f6] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              <p className="text-white/65 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
