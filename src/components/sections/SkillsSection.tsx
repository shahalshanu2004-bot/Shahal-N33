"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";

const skillCategories = [
  {
    title: "PAID ACQUISITION",
    skills: [
      { name: "META ADS", href: "/experience/meta-ads" },
      { name: "GOOGLE ADS", href: "/experience/google-ads" },
      { name: "META BUSINESS MANAGER" },
      { name: "APP MARKETING", href: "/experience/app-marketing" }
    ]
  },
  {
    title: "TRACKING & ANALYTICS",
    skills: [
      { name: "GOOGLE TAG MANAGER" },
      { name: "CONVERSION TRACKING" },
      { name: "CAMPAIGN ANALYTICS" },
      { name: "APP EVENT TRACKING" }
    ]
  },
  {
    title: "SUPPORTING SKILLS",
    skills: [
      { name: "SEO", href: "/services/seo" },
      { name: "SOCIAL MEDIA MANAGEMENT" },
      { name: "WORDPRESS" },
      { name: "CANVA" },
      { name: "PHOTOSHOP" }
    ]
  }
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } }
  };

  return (
    <section className="py-28 md:py-36 bg-[#050508] border-b border-white/5 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-20 md:flex md:justify-between md:items-end"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white uppercase tracking-tighter max-w-xl leading-none">
            SKILLS & <br /> <span className="text-[#3b82f6]">TOOLS</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-sm mt-6 md:mt-0 leading-relaxed">
            The tools and capabilities behind my performance marketing workflow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div key={catIndex} variants={itemVariants} className="flex flex-col">
              <h3 className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#3b82f6]/50"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => {
                  const isLink = !!skill.href;
                  const content = (
                    <div
                      key={index}
                      className={`group px-5 py-3 rounded-xl bg-[#0c0c0e] border border-white/10 text-white/70 text-xs font-bold tracking-widest uppercase hover:border-[#3b82f6]/40 hover:text-white transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-[#3b82f6]/10 hover:-translate-y-[2px] ${isLink ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      {skill.name}
                    </div>
                  );

                  return isLink ? (
                    <Link href={skill.href!} key={index} className="block">
                      {content}
                    </Link>
                  ) : content;
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
