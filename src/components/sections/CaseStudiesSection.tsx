import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, BarChart2, TrendingDown, Target } from "lucide-react";
import Link from "next/link";
import { experienceProjects } from "@/lib/data/experience";
import { clientResults, formatIndianNumber, formatINR } from "@/data/results";

export default function CaseStudiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const realEstate = experienceProjects.find(p => p.slug === "premium-real-estate");
  const rsWater = experienceProjects.find(p => p.slug === "rs-water-solutions");

  const cuteKaariResults = clientResults.cutekaari;
  const relaxCallResults = clientResults["relax-call"];
  const realEstateResults = clientResults["premium-real-estate"];
  const rsWaterResults = clientResults["rs-water-solutions"];

  return (
    <section id="case-studies" className="py-32 bg-[#050508] relative border-b border-white/5" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Proven Performance</span>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-black text-white uppercase tracking-tighter leading-none mb-6">
            FEATURED <br/> <span className="text-[#3b82f6]">CASE STUDIES</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-xl">
            Verified performance data and campaign optimization breakdowns across lead generation and app growth.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* CASE 01: REAL ESTATE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col xl:flex-row hover:border-[#3b82f6]/40 transition-colors duration-500 block">
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Left: Number & Main Info */}
              <div className="p-10 xl:p-14 flex flex-col justify-between w-full xl:w-5/12 border-b xl:border-b-0 xl:border-r border-white/5 relative z-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/20 font-heading text-6xl md:text-8xl font-black group-hover:text-[#3b82f6]/30 transition-colors duration-500">01</span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Lead Generation
                    </span>
                  </div>
                  <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mt-6 mb-4">META ADS / LEAD GENERATION / REAL ESTATE</p>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">
                    SCALING META ADS FOR A ₹55 CR PREMIUM REAL ESTATE PROJECT
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Generate sustainable enquiries from prospective buyers and investors across multiple regional markets using iterative v1 &rarr; v2 rebuilds.
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
                    {realEstateResults?.leadDefinition && (
                      <div className="w-full">
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Quality Definition</span>
                        <span className="text-white/70 text-[11px] leading-relaxed">{realEstateResults.leadDefinition}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/case-studies/premium-real-estate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3b82f6] text-white hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-white/40 text-xs font-mono">₹142 CPL</span>
                </div>
              </div>

              {/* Right: Data Visualization */}
              <div className="p-10 xl:p-14 w-full xl:w-7/12 flex flex-col relative z-10 bg-[#08080b]">
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/5 group-hover:border-[#3b82f6]/20 transition-colors">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Leads Generated</p>
                    <p className="text-white font-heading text-3xl font-black group-hover:text-[#3b82f6] transition-colors tabular-nums">239</p>
                  </div>
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/5 group-hover:border-[#3b82f6]/20 transition-colors">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Blended CPL</p>
                    <p className="text-white font-heading text-3xl font-black group-hover:text-[#3b82f6] transition-colors tabular-nums">₹142</p>
                  </div>
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/5 group-hover:border-[#3b82f6]/20 transition-colors">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Ad Spend</p>
                    <p className="text-white font-heading text-3xl font-black group-hover:text-[#3b82f6] transition-colors tabular-nums">₹33.9K</p>
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
                         <span className="relative z-10 ml-auto pr-4 text-xs font-bold text-white group-hover/bar:scale-110 transition-transform tabular-nums">₹{bar.value}</span>
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
            </div>
          </motion.div>

          {/* CASE 02: RS WATER SOLUTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col xl:flex-row hover:border-purple-500/40 transition-colors duration-500 block">
              <div className="p-10 xl:p-14 flex flex-col justify-between w-full xl:w-5/12 border-b xl:border-b-0 xl:border-r border-white/5 relative z-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/20 font-heading text-6xl md:text-8xl font-black group-hover:text-purple-500/30 transition-colors duration-500">02</span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Local Direct Response
                    </span>
                  </div>
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
                    {rsWaterResults?.leadDefinition && (
                      <div className="w-full">
                        <span className="text-white/30 text-[10px] uppercase tracking-wider block">Conversion Definition</span>
                        <span className="text-white/70 text-[11px] leading-relaxed">{rsWaterResults.leadDefinition}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/case-studies/rs-water-solutions"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-white/40 text-xs font-mono">₹14.65 Avg Cost</span>
                </div>
              </div>

              <div className="p-10 xl:p-14 w-full xl:w-7/12 flex flex-col justify-center relative z-10 bg-[#08080b]">
                
                <div className="flex justify-between items-end mb-12">
                   <div className="flex flex-col">
                     <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Total Conversions</p>
                     <p className="text-white font-heading text-5xl font-black tabular-nums">368</p>
                   </div>
                   <div className="flex flex-col text-right">
                     <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Avg. Cost / Conversion</p>
                     <p className="text-white font-heading text-5xl font-black tabular-nums text-purple-400">₹14.65</p>
                   </div>
                </div>

                {/* Bar Comparison */}
                <p className="text-white/80 text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-purple-400" /> Cost Route Comparison
                </p>
                <div className="flex gap-4 h-40 items-end mb-8 border-b border-white/10 pb-4">
                   <div className="w-1/2 flex flex-col items-center group/col">
                     <span className="text-white font-bold text-xl mb-2 group-hover/col:-translate-y-2 transition-transform tabular-nums">₹14.95</span>
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: "90%" }}
                       transition={{ duration: 1 }}
                       className="w-full bg-white/10 rounded-t-xl group-hover/col:bg-white/20 transition-colors"
                     />
                     <span className="text-white/50 text-[10px] tracking-wider uppercase mt-4 text-center">Instant Lead Form</span>
                   </div>
                   <div className="w-1/2 flex flex-col items-center group/col">
                     <span className="text-purple-400 font-bold text-2xl mb-2 group-hover/col:-translate-y-2 transition-transform tabular-nums">₹12.01</span>
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: "70%" }}
                       transition={{ duration: 1, delay: 0.2 }}
                       className="w-full bg-purple-500 rounded-t-xl group-hover/col:bg-purple-400 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                     />
                     <span className="text-white text-[10px] font-bold tracking-wider uppercase mt-4 text-center">Click-to-WhatsApp (Lower-cost)</span>
                   </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <p className="text-purple-300 text-xs font-medium leading-relaxed">
                    <strong>Insight:</strong> Click-to-WhatsApp used 28% of spend but generated 35% of conversions. A low frequency of 1.24 indicated significant room to scale without audience saturation.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* APP MARKETING ROW */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* CASE 03: CUTEKAARI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col justify-between hover:border-pink-500/40 transition-colors duration-500 p-8 xl:p-10 h-full shadow-xl">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold uppercase tracking-wider block w-fit mb-2">
                        App Growth &bull; Android
                      </span>
                      <p className="text-pink-400 text-xs font-bold uppercase tracking-widest">APP MARKETING / PURCHASE CONVERSION</p>
                    </div>
                    <span className="text-white/20 font-heading text-5xl font-black group-hover:text-pink-500/30 transition-colors">03</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight leading-[1.15] mb-4">
                    CUTEKAARI — APP PERFORMANCE MARKETING
                  </h3>
                  
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                    Full-funnel Meta Ads strategy driving verified downstream in-app purchases and installs across India and GCC cohorts.
                  </p>

                  {/* Headline Verified Metrics Grid (Only where data exists) */}
                  {cuteKaariResults?.accountTotals && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">App Installs</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatIndianNumber(cuteKaariResults.accountTotals.installs)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">Cost / Install</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatINR(cuteKaariResults.accountTotals.costPerInstall, 2)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">Purchases</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatIndianNumber(cuteKaariResults.accountTotals.purchases)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">Cost / Purchase</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatINR(cuteKaariResults.accountTotals.costPerPurchase, 2)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5 col-span-2 sm:col-span-2 bg-gradient-to-r from-pink-500/[0.08] to-transparent border-pink-500/20">
                        <span className="text-pink-400 text-[10px] uppercase tracking-wider block mb-1 font-bold">Account ROAS</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-pink-400 font-heading text-2xl font-black tabular-nums">
                            {cuteKaariResults.accountTotals.roas.toFixed(2)}x
                          </span>
                          <span className="text-white/40 text-xs">
                            ({cuteKaariResults.accountTotals.purchaseValueDisplay} purchase value)
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Public Google Play Reference */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-white/50 mb-6 flex items-center justify-between">
                    <span>Public Store Benchmark: 50K+ Google Play downloads</span>
                    <span className="text-[#3b82f6] font-mono text-[10px]">Meta Verified</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/case-studies/cutekaari"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-600 text-white hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-pink-400 font-mono text-xs font-bold">6.88x ROAS</span>
                </div>
              </div>
            </motion.div>

            {/* CASE 04: RELAX CALL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="group relative bg-[#0c0c0e] rounded-[32px] border border-white/5 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-colors duration-500 p-8 xl:p-10 h-full shadow-xl">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider block w-fit mb-2">
                        Cross-Platform &bull; Android + iOS
                      </span>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">APP MARKETING / PURCHASE OPT.</p>
                    </div>
                    <span className="text-white/20 font-heading text-5xl font-black group-hover:text-emerald-500/30 transition-colors">04</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight leading-[1.15] mb-4">
                    RELAX CALL — APP PERFORMANCE MARKETING
                  </h3>
                  
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                    Multi-platform acquisition focusing on downstream purchase optimization across high-LTV cohorts and Gulf iOS users.
                  </p>

                  {/* Headline Verified Metrics Grid (Only where data exists) */}
                  {relaxCallResults?.accountTotals && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">App Installs</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatIndianNumber(relaxCallResults.accountTotals.installs)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">Cost / Install</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatINR(relaxCallResults.accountTotals.costPerInstall, 2)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">Purchases</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatIndianNumber(relaxCallResults.accountTotals.purchases)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-1">Cost / Purchase</span>
                        <span className="text-white font-heading text-xl font-black tabular-nums">
                          {formatINR(relaxCallResults.accountTotals.costPerPurchase, 2)}
                        </span>
                      </div>
                      <div className="bg-[#111116] p-3.5 rounded-xl border border-white/5 col-span-2 sm:col-span-2 bg-gradient-to-r from-emerald-500/[0.08] to-transparent border-emerald-500/20">
                        <span className="text-emerald-400 text-[10px] uppercase tracking-wider block mb-1 font-bold">Account ROAS</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-emerald-400 font-heading text-2xl font-black tabular-nums">
                            {relaxCallResults.accountTotals.roas.toFixed(2)}x
                          </span>
                          <span className="text-white/40 text-xs">
                            (Top iOS campaigns reached up to 5.33x)
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Store Platform Reference */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-white/50 mb-6 flex items-center justify-between">
                    <span>Public Store: 10K+ Google Play &bull; Active on iOS</span>
                    <span className="text-emerald-400 font-mono text-[10px]">Meta Verified</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/case-studies/relax-call"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-emerald-400 font-mono text-xs font-bold">1.87x ROAS</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
