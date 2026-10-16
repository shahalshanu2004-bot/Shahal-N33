"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";

const RoiCalculator = dynamic(
  () => import("@/components/calculator/RoiCalculator"),
  {
    loading: () => (
      <div className="w-full max-w-4xl mx-auto my-16 p-12 rounded-3xl bg-[#0c0c0e]/50 border border-white/5 animate-pulse text-center">
        <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
          Loading ROI & Budget Estimator...
        </span>
      </div>
    ),
    ssr: false,
  }
);

// Core 7 Performance Marketing Services
const coreServices = [
  {
    num: "01",
    slug: "meta-ads",
    title: "META ADS",
    highlight: "AUDIENCE & CREATIVE TESTING",
    description: "Performance-driven Meta (Facebook & Instagram) campaigns built on multi-hook creative testing, lookalike architectures, and conversion-optimized funnels.",
    badge: "CORE ACQUISITION"
  },
  {
    num: "02",
    slug: "google-ads",
    title: "GOOGLE ADS",
    highlight: "HIGH-INTENT CONVERSIONS",
    description: "Search and Performance Max campaigns targeting high-intent buyers, eliminating negative keyword waste, and driving qualified revenue.",
    badge: "HIGH INTENT"
  },
  {
    num: "03",
    slug: "app-marketing",
    title: "APP MARKETING",
    highlight: "USER ACQUISITION & CPI/CPA",
    description: "Scalable app acquisition with custom in-app event tracking, purchase optimization, and post-install retention signals on Google Play and Meta.",
    badge: "SCALE & RETENTION"
  },
  {
    num: "04",
    slug: "lead-generation",
    title: "LEAD GENERATION",
    highlight: "QUALIFIED PIPELINE ENGINE",
    description: "High-intent lead generation funnels using instant forms, customized landing pages, and direct Click-to-WhatsApp automation to slash sales friction.",
    badge: "DIRECT PIPELINE"
  },
  {
    num: "05",
    slug: "conversion-tracking",
    title: "CONVERSION TRACKING",
    highlight: "SERVER-SIDE CAPI & GA4",
    description: "Server-side Meta Conversions API (CAPI), Google Tag Manager, GA4 event architectures, and verified attribution signals to feed ad algorithms clean conversion data.",
    badge: "CLEAN ATTRIBUTION"
  },
  {
    num: "06",
    slug: "campaign-optimization",
    title: "CAMPAIGN OPTIMIZATION",
    highlight: "BID & AUDIENCE REFINEMENT",
    description: "Systematic audience pruning, creative refresh cadences, bid strategy tuning, and continuous CPA/CPL reduction across active campaigns.",
    badge: "EFFICIENCY & SCALE"
  },
  {
    num: "07",
    slug: "performance-strategy",
    title: "PERFORMANCE STRATEGY",
    highlight: "UNIT ECONOMICS & ARCHITECTURE",
    description: "Cross-channel paid media architecture aligned with unit economics, target CAC, and full-funnel customer lifetime value.",
    badge: "GROWTH ROADMAP"
  },
];

// Secondary Services (Also offered)
const alsoOfferedServices = [
  {
    num: "08",
    slug: "seo",
    title: "Technical SEO",
    description: "Search optimization to build durable organic authority and intent capture.",
  },
  {
    num: "09",
    slug: "website-development",
    title: "Website Development",
    description: "High-converting, performance-optimized landers built for speed and ROI.",
  },
  {
    num: "10",
    slug: "content-creation",
    title: "Content Creation",
    description: "Strategic creative angles, hooks, and direct-response social assets.",
  },
  {
    num: "11",
    slug: "ai-automation",
    title: "AI Automation",
    description: "AI lead qualification and automated marketing response workflows.",
  },
  {
    num: "12",
    slug: "ai-video-marketing",
    title: "AI Video Marketing",
    description: "AI-assisted short-form video creatives engineered for high hook retention.",
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
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" /> CORE CAPABILITIES
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              PERFORMANCE <span className="text-[#3b82f6]">SERVICES</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg font-light max-w-xl mt-3">
              Direct-response advertising engineered for measurable revenue and scalable acquisition.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs uppercase tracking-widest text-[#3b82f6] hover:text-white font-bold flex items-center gap-2 group transition-colors"
          >
            <span>View All Services Guide</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 01 - MAIN PERFORMANCE SERVICES GRID */}
        <div className="mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {coreServices.map((service, index) => {
              const isLast = index === 6;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`h-full ${isLast ? "md:col-span-2 lg:col-span-3" : ""}`}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative p-8 md:p-10 rounded-[28px] bg-[#0c0c0e] border border-white/10 hover:border-[#3b82f6]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-xl shadow-black/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)] flex flex-col h-full block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[28px]" />
                    
                    {isLast ? (
                      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 h-full">
                        <div className="max-w-2xl">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-[#3b82f6] font-heading font-black text-xl">{service.num}</span>
                            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                              {service.badge}
                            </span>
                          </div>
                          <h3 className="font-heading text-2xl md:text-3xl font-black mb-2 text-white uppercase tracking-tight group-hover:text-[#3b82f6] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-[#3b82f6]/80 text-xs font-bold uppercase tracking-wider mb-3">
                            {service.highlight}
                          </p>
                          <p className="text-white/60 text-sm md:text-base leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-white/5 flex-shrink-0">
                          <span className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#3b82f6] text-white/50 group-hover:text-white flex items-center justify-center transition-all duration-300">
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                          </span>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] group-hover:text-white transition-colors">
                            Explore Strategy & Process &rarr;
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <span className="text-[#3b82f6] font-heading font-black text-xl">{service.num}</span>
                            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                              {service.badge}
                            </span>
                          </div>
                          <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#3b82f6] text-white/50 group-hover:text-white flex items-center justify-center transition-all duration-300">
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>

                        <h3 className="font-heading text-2xl md:text-3xl font-black mb-2 text-white uppercase tracking-tight group-hover:text-[#3b82f6] transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-[#3b82f6]/80 text-xs font-bold uppercase tracking-wider mb-4">
                          {service.highlight}
                        </p>

                        <p className="text-white/60 text-sm md:text-base leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300 mb-6">
                          {service.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-xs font-bold uppercase tracking-widest text-[#3b82f6] group-hover:text-white transition-colors">
                          <span>Explore Strategy & Process &rarr;</span>
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ROI and Budget Estimator (Lazy Loaded) */}
        <RoiCalculator />

        {/* 02 - ALSO OFFERED (SECONDARY GROUP) */}
        <div>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-bold uppercase tracking-widest mb-3">
                Complementary Services
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-white/90">
                Also offered
              </h3>
              <p className="text-white/40 text-xs md:text-sm font-light mt-1">
                Supporting technical, creative, and organic capabilities that strengthen paid campaigns.
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {alsoOfferedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative p-6 rounded-2xl bg-[#09090c] border border-white/5 hover:border-[#3b82f6]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-md flex flex-col h-full block"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/30 text-xs font-mono font-bold">{service.num}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-heading text-base font-bold mb-2 text-white uppercase tracking-wide group-hover:text-[#3b82f6] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
