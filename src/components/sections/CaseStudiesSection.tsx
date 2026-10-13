"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, BarChart2, TrendingDown } from "lucide-react";
import Link from "next/link";
import { experienceProjects } from "@/lib/data/experience";

export default function CaseStudiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const realEstate = experienceProjects.find(p => p.slug === "premium-real-estate");
  const rsWater = experienceProjects.find(p => p.slug === "rs-water-solutions");
  const cuteKaari = experienceProjects.find(p => p.slug === "cutekaari");
  const relaxCall = experienceProjects.find(p => p.slug === "relax-call");

  return (
    <section id="case-studies" className="py-32 bg-[#050508] relative border-b border-white/5" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col items-start"
        >
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-black text-white uppercase tracking-tighter leading-none mb-6">
            FEATURED <br/> <span className="text-[#3b82f6]">CASE STUDIES</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-xl">
            Verified performance data and campaign optimization breakdowns.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* CASE 01: REAL ESTATE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/case-studies/premium-real-estate"
              className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col xl:flex-row hover:border-[#3b82f6]/40 transition-colors duration-500 block"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Left: Number & Main Info */}
              <div className="p-10 xl:p-14 flex flex-col justify-between w-full xl:w-5/12 border-b xl:border-b-0 xl:border-r border-white/5 relative z-10">
                <div>
                  <span className="text-white/20 font-heading text-6xl md:text-8xl font-black group-hover:text-[#3b82f6]/30 transition-colors duration-500">01</span>
                  <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mt-6 mb-4">META ADS / LEAD GENERATION / REAL ESTATE</p>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">
                    SCALING META ADS FOR A ₹55 CR PREMIUM REAL ESTATE PROJECT
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Generate sustainable enquiries from prospective buyers and investors across multiple regional markets using iterative v1 → v2 rebuilds.
                  </p>

                  {/* Optional fields: Role, Duration, Conversion definition */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50 mb-6 border-t border-white/5 pt-4">
                    {realEstate?.myRole && (
                      <div>
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Role</span>
                        <span className="text-white/80 font-medium">{realEstate.myRole}</span>
                      </div>
                    )}
                    {realEstate?.campaignDuration && (
                      <div>
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Duration</span>
                        <span className="text-white/80 font-medium">{realEstate.campaignDuration}</span>
                      </div>
                    )}
                    {realEstate?.conversionDefinition && (
                      <div className="w-full">
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Conversion</span>
                        <span className="text-white/70 text-[11px] leading-relaxed">{realEstate.conversionDefinition}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-bold tracking-widest uppercase">View Full Breakdown</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Right: Data Visualization */}
              <div className="p-10 xl:p-14 w-full xl:w-7/12 flex flex-col relative z-10 bg-[#08080b]">
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/5 group-hover:border-[#3b82f6]/20 transition-colors">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Leads Generated</p>
                    <p className="text-white font-heading text-3xl font-black group-hover:text-[#3b82f6] transition-colors">239</p>
                  </div>
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/5 group-hover:border-[#3b82f6]/20 transition-colors">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Blended CPL</p>
                    <p className="text-white font-heading text-3xl font-black group-hover:text-[#3b82f6] transition-colors">₹142</p>
                  </div>
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/5 group-hover:border-[#3b82f6]/20 transition-colors">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Ad Spend</p>
                    <p className="text-white font-heading text-3xl font-black group-hover:text-[#3b82f6] transition-colors">₹33.9K</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="flex-grow flex flex-col justify-end relative">
                   <p className="text-white/80 text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                     <TrendingDown className="w-4 h-4 text-[#3b82f6]" />
                     Cost Per Lead Optimization (₹)
                   </p>
                   <div className="space-y-4">
                     {[
                       { label: "Premium Hotel", value: 432, width: "100%", color: "bg-white/10" },
                       { label: "South India v1", value: 231, width: "65%", color: "bg-white/20" },
                       { label: "Mumbai / AP / TG v1", value: 212, width: "60%", color: "bg-white/20" },
                       { label: "Mumbai / AP / TG v2", value: 182, width: "50%", color: "bg-[#3b82f6]/50" },
                       { label: "South India v2", value: 115, width: "35%", color: "bg-[#3b82f6]" }
                     ].map((bar, i) => (
                       <div key={i} className="relative h-8 rounded-md bg-[#111116] overflow-hidden flex items-center group/bar">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: bar.width }}
                           transition={{ duration: 1, delay: i * 0.1 }}
                           className={`absolute left-0 top-0 bottom-0 ${bar.color} transition-all duration-300 group-hover/bar:opacity-80`}
                         />
                         <span className="relative z-10 text-[10px] md:text-xs font-medium uppercase tracking-wider text-white px-4">{bar.label}</span>
                         <span className="relative z-10 ml-auto pr-4 text-xs font-bold text-white group-hover/bar:scale-110 transition-transform">₹{bar.value}</span>
                       </div>
                     ))}
                   </div>
                   
                   <div className="mt-8 p-4 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20">
                      <p className="text-[#3b82f6] text-xs font-medium leading-relaxed">
                        <strong>Insight:</strong> South India v2 received 38% of total spend and generated 46% of all leads. Best-performing setup delivered leads at 73% lower cost than the first campaign.
                      </p>
                      <p className="text-white/40 text-[10px] mt-2">Note: India-wide ₹27 CPL broad test excluded from like-for-like optimization comparison due to different result type.</p>
                   </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CASE 02: RS WATER SOLUTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/case-studies/rs-water-solutions"
              className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col xl:flex-row hover:border-purple-500/40 transition-colors duration-500 block"
            >
              <div className="p-10 xl:p-14 flex flex-col justify-between w-full xl:w-5/12 border-b xl:border-b-0 xl:border-r border-white/5 relative z-10">
                <div>
                  <span className="text-white/20 font-heading text-6xl md:text-8xl font-black group-hover:text-purple-500/30 transition-colors duration-500">02</span>
                  <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mt-6 mb-4">META ADS / LEAD GENERATION / WHATSAPP</p>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">
                    FINDING THE CHEAPEST ENQUIRY ROUTE WITH META ADS
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Testing Instant Lead Form vs Click-to-WhatsApp to identify the most cost-efficient acquisition channel for RS Water Solutions.
                  </p>

                  {/* Optional fields: Role, Duration, Conversion definition, Spend */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50 mb-6 border-t border-white/5 pt-4">
                    {rsWater?.myRole && (
                      <div>
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Role</span>
                        <span className="text-white/80 font-medium">{rsWater.myRole}</span>
                      </div>
                    )}
                    {rsWater?.campaignDuration && (
                      <div>
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Duration</span>
                        <span className="text-white/80 font-medium">{rsWater.campaignDuration}</span>
                      </div>
                    )}
                    {rsWater?.adSpend && (
                      <div>
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Ad Spend</span>
                        <span className="text-purple-400 font-semibold">{rsWater.adSpend}</span>
                      </div>
                    )}
                    {rsWater?.conversionDefinition && (
                      <div className="w-full">
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Conversion</span>
                        <span className="text-white/70 text-[11px] leading-relaxed">{rsWater.conversionDefinition}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-bold tracking-widest uppercase">View Full Breakdown</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              <div className="p-10 xl:p-14 w-full xl:w-7/12 flex flex-col justify-center relative z-10 bg-[#08080b]">
                
                <div className="flex justify-between items-end mb-12">
                   <div className="flex flex-col">
                     <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Total Conversions</p>
                     <p className="text-white font-heading text-5xl font-black">368</p>
                   </div>
                   <div className="flex flex-col text-right">
                     <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Avg. Cost / Conversion</p>
                     <p className="text-white font-heading text-5xl font-black">₹14.65</p>
                   </div>
                </div>

                {/* Bar Comparison */}
                <p className="text-white/80 text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-purple-400" /> Cost Route Comparison
                </p>
                <div className="flex gap-4 h-40 items-end mb-8 border-b border-white/10 pb-4">
                   <div className="w-1/2 flex flex-col items-center group/col">
                     <span className="text-white font-bold text-xl mb-2 group-hover/col:-translate-y-2 transition-transform">₹14.95</span>
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: "90%" }}
                       transition={{ duration: 1 }}
                       className="w-full bg-white/10 rounded-t-xl group-hover/col:bg-white/20 transition-colors"
                     />
                     <span className="text-white/50 text-[10px] tracking-wider uppercase mt-4 text-center">Instant Lead Form</span>
                   </div>
                   <div className="w-1/2 flex flex-col items-center group/col">
                     <span className="text-purple-400 font-bold text-2xl mb-2 group-hover/col:-translate-y-2 transition-transform">₹12.01</span>
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: "70%" }}
                       transition={{ duration: 1, delay: 0.2 }}
                       className="w-full bg-purple-500 rounded-t-xl group-hover/col:bg-purple-400 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                     />
                     <span className="text-white text-[10px] font-bold tracking-wider uppercase mt-4 text-center">Click-to-WhatsApp</span>
                   </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <p className="text-purple-300 text-xs font-medium leading-relaxed">
                    <strong>Insight:</strong> Click-to-WhatsApp used 28% of spend but generated 35% of conversions. A low frequency of 1.24 indicated significant room to scale without audience saturation.
                  </p>
                </div>

              </div>
            </Link>
          </motion.div>

          {/* APP MARKETING ROW */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* CASE 03: CUTEKAARI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/case-studies/cutekaari"
                className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col hover:border-pink-500/40 transition-colors duration-500 p-10 xl:p-12 h-full block"
              >
                <div className="flex justify-between items-start mb-8">
                  <p className="text-pink-400 text-xs font-bold uppercase tracking-widest">APP MARKETING / CONVERSION</p>
                  <span className="text-white/20 font-heading text-5xl font-black group-hover:text-pink-500/30 transition-colors">03</span>
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">
                  APP MARKETING — CUTEKAARI
                </h3>
                
                {/* Google Play Download Figure */}
                <div className="bg-[#111116] p-6 rounded-2xl border border-white/5 mb-4 text-center group-hover:border-pink-500/20 transition-colors">
                  <p className="text-white font-heading text-4xl font-black text-pink-500 mb-2">50K+</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Publicly Displayed Google Play Downloads</p>
                  <p className="text-white/30 text-[9px] mt-2 italic">*Public store figure distinguished from ad-attributed installs</p>
                </div>

                {/* My Campaign Results Block */}
                {/* // TODO: Add real campaign results for CuteKaari (e.g. Paid Installs, In-App Purchases, CPI) */}
                <div className="my-campaign-results-block">
                  {cuteKaari?.myCampaignResults ? (
                    <div className="bg-pink-500/10 border border-pink-500/20 p-4 rounded-2xl mb-6 text-center">
                      <p className="text-pink-400 text-[10px] uppercase tracking-wider font-bold mb-1">My Campaign Results</p>
                      <p className="text-white font-heading text-2xl font-black">{cuteKaari.myCampaignResults}</p>
                    </div>
                  ) : null}
                </div>

                {/* Optional fields: Role, Duration, Conversion definition, Spend */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50 mb-6 border-t border-white/5 pt-4">
                  {cuteKaari?.myRole && (
                    <div>
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Role</span>
                      <span className="text-white/80 font-medium">{cuteKaari.myRole}</span>
                    </div>
                  )}
                  {cuteKaari?.campaignDuration && (
                    <div>
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Duration</span>
                      <span className="text-white/80 font-medium">{cuteKaari.campaignDuration}</span>
                    </div>
                  )}
                  {cuteKaari?.adSpend && (
                    <div>
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Ad Spend</span>
                      <span className="text-pink-400 font-semibold">{cuteKaari.adSpend}</span>
                    </div>
                  )}
                  {cuteKaari?.conversionDefinition && (
                    <div className="w-full">
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Conversion</span>
                      <span className="text-white/70 text-[11px] leading-relaxed">{cuteKaari.conversionDefinition}</span>
                    </div>
                  )}
                </div>

                <div className="flex-grow flex flex-col justify-end">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Focused on Malayalam-first messaging, creative testing, and conversion-event analysis to reduce dependence on a single creative format.
                  </p>
                  
                  {/* Optimization Loop */}
                  <div className="flex items-center justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest mt-auto border border-white/10 p-4 rounded-xl bg-black">
                    <span className="group-hover:text-white transition-colors delay-75">Audience</span>
                    <ArrowRight className="w-3 h-3 text-pink-500" />
                    <span className="group-hover:text-white transition-colors delay-100">Creative</span>
                    <ArrowRight className="w-3 h-3 text-pink-500" />
                    <span className="group-hover:text-white transition-colors delay-150">Data</span>
                    <ArrowRight className="w-3 h-3 text-pink-500" />
                    <span className="text-pink-500">Scale</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* CASE 04: RELAX CALL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/case-studies/relax-call"
                className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col hover:border-emerald-500/40 transition-colors duration-500 p-10 xl:p-12 h-full block"
              >
                <div className="flex justify-between items-start mb-8">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">APP MARKETING / PURCHASE OPT.</p>
                  <span className="text-white/20 font-heading text-5xl font-black group-hover:text-emerald-500/30 transition-colors">04</span>
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">
                  APP MARKETING — RELAX CALL
                </h3>
                
                {/* Google Play Download Figure */}
                <div className="bg-[#111116] p-6 rounded-2xl border border-white/5 mb-4 text-center group-hover:border-emerald-500/20 transition-colors">
                  <p className="text-white font-heading text-4xl font-black text-emerald-500 mb-2">10K+</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Publicly Displayed Google Play Downloads</p>
                  <div className="flex justify-center gap-4 mt-3">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/60">ANDROID</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/60">iOS</span>
                  </div>
                </div>

                {/* My Campaign Results Block */}
                {/* // TODO: Add real campaign results for Relax Call (e.g. Paid Installs, Purchase CPA) */}
                <div className="my-campaign-results-block">
                  {relaxCall?.myCampaignResults ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mb-6 text-center">
                      <p className="text-emerald-400 text-[10px] uppercase tracking-wider font-bold mb-1">My Campaign Results</p>
                      <p className="text-white font-heading text-2xl font-black">{relaxCall.myCampaignResults}</p>
                    </div>
                  ) : null}
                </div>

                {/* Optional fields: Role, Duration, Conversion definition, Spend */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50 mb-6 border-t border-white/5 pt-4">
                  {relaxCall?.myRole && (
                    <div>
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Role</span>
                      <span className="text-white/80 font-medium">{relaxCall.myRole}</span>
                    </div>
                  )}
                  {relaxCall?.campaignDuration && (
                    <div>
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Duration</span>
                      <span className="text-white/80 font-medium">{relaxCall.campaignDuration}</span>
                    </div>
                  )}
                  {relaxCall?.adSpend && (
                    <div>
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Ad Spend</span>
                      <span className="text-emerald-400 font-semibold">{relaxCall.adSpend}</span>
                    </div>
                  )}
                  {relaxCall?.conversionDefinition && (
                    <div className="w-full">
                      <span className="text-white/30 text-[10px] uppercase tracking-wider block">Conversion</span>
                      <span className="text-white/70 text-[11px] leading-relaxed">{relaxCall.conversionDefinition}</span>
                    </div>
                  )}
                </div>

                <div className="flex-grow flex flex-col justify-end">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    App promotion focused on purchase-oriented conversion goals, downstream action quality, and platform comparison between iOS and Android.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mt-auto">
                    <p className="text-emerald-400 text-xs font-medium leading-relaxed">
                      <strong>Focus:</strong> Budget optimization through rigorous conversion event tracking rather than top-of-funnel install volume alone.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
