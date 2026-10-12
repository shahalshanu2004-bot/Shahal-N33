"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const performanceServices = [
  {
    num: "01",
    slug: "meta-ads",
    title: "META ADS",
    description: "Performance-focused Meta campaigns built around audience testing, creative testing and conversion.",
  },
  {
    num: "02",
    slug: "google-ads",
    title: "GOOGLE ADS",
    description: "High-intent search campaigns focused on efficient acquisition and measurable conversions.",
  },
  {
    num: "03",
    slug: "app-marketing",
    title: "APP MARKETING",
    description: "User acquisition campaigns for apps with event tracking, audience testing and purchase optimization.",
  },
  {
    num: "04",
    slug: "lead-generation",
    title: "LEAD GENERATION",
    description: "Campaigns designed to generate qualified leads through forms, landing pages and WhatsApp.",
  },
  {
    num: "05",
    slug: "conversion-tracking",
    title: "CONVERSION TRACKING",
    description: "Track meaningful actions and conversion events to understand what actually drives results.",
  },
  {
    num: "06",
    slug: "campaign-optimization",
    title: "CAMPAIGN OPTIMIZATION",
    description: "Continuous testing and optimization to reduce wasted spend and improve campaign efficiency.",
  },
  {
    num: "07",
    slug: "performance-strategy",
    title: "PERFORMANCE STRATEGY",
    description: "Build a measurable acquisition strategy across channels, audiences, creatives and conversion paths.",
  },
];

const digitalServices = [
  {
    num: "08",
    slug: "seo",
    title: "SEO",
    description: "Search-focused optimization designed to improve visibility, organic traffic and long-term discoverability.",
  },
  {
    num: "09",
    slug: "website-development",
    title: "WEBSITE DEVELOPMENT",
    description: "Conversion-focused websites and landing pages built around performance, usability and business goals.",
  },
  {
    num: "10",
    slug: "content-creation",
    title: "CONTENT CREATION",
    description: "Strategic content designed for social media, campaigns, brands and digital platforms.",
  },
  {
    num: "11",
    slug: "ai-automation",
    title: "AI AUTOMATION",
    description: "AI-powered workflows that reduce repetitive work, improve efficiency and connect marketing processes.",
  },
  {
    num: "12",
    slug: "ai-video-marketing",
    title: "AI VIDEO MARKETING",
    description: "AI-assisted video concepts, creatives and short-form content designed for modern digital campaigns.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-[#050508] relative border-b border-white/5 overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#3b82f6]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#3b82f6]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              WHAT <span className="text-[#3b82f6]">I DO</span>
            </h2>
            <p className="text-white/50 text-lg font-light max-w-lg">
              Acquisition, Content, SEO, Websites, AI, and Optimization.
            </p>
          </div>
        </motion.div>

        {/* 01 - PERFORMANCE MARKETING */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
              01 &mdash; PERFORMANCE MARKETING
            </h3>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {performanceServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative p-8 md:p-10 rounded-[24px] bg-[#0c0c0e] border border-white/5 hover:border-[#3b82f6]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg shadow-black/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] flex flex-col h-full block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[#3b82f6]/50 font-heading font-black text-lg group-hover:text-[#3b82f6] transition-colors duration-300">{service.num}</span>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="font-heading text-xl font-bold mb-3 text-white uppercase tracking-wider group-hover:text-[#3b82f6] transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300 mt-auto">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 02 - DIGITAL & AI */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
              02 &mdash; DIGITAL & AI
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative p-8 md:p-10 rounded-[24px] bg-[#0c0c0e] border border-white/5 hover:border-[#3b82f6]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg shadow-black/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] flex flex-col h-full block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-white/20 font-heading font-black text-lg group-hover:text-[#3b82f6] transition-colors duration-300">{service.num}</span>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="font-heading text-xl font-bold mb-3 text-white uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/65 transition-colors duration-300 mt-auto">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
