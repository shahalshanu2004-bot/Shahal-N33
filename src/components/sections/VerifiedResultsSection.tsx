import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { clientResults } from "@/data/results";
import ResultsLedger from "@/components/proof/ResultsLedger";

export default function VerifiedResultsSection() {
  const cutekaari = clientResults.cutekaari;
  const relaxCall = clientResults["relax-call"];

  return (
    <section
      id="verified-results"
      className="py-24 md:py-32 bg-[#050508] relative border-b border-white/5"
      aria-labelledby="verified-results-heading"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-start max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Attribution</span>
          </div>
          <h2
            id="verified-results-heading"
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-5"
          >
            VERIFIED RESULTS <br />
            <span className="text-[#3b82f6]">SCREENSHOT-BACKED PROOF</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Figures taken directly from Meta Ads Manager for client app-marketing accounts.
            Covering paid user acquisition, cost per install, and downstream in-app purchase return.
          </p>
        </div>

        {/* Two Client Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* CuteKaari Card */}
          <div className="rounded-3xl bg-[#0c0c0e] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#3b82f6]/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3b82f6]/10 transition-colors" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] block mb-1">
                    {cutekaari.category}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {cutekaari.clientName}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400/80 block">
                    Account ROAS
                  </span>
                  <span className="font-heading text-2xl font-black text-emerald-400">
                    6.88x
                  </span>
                </div>
              </div>

              <p className="text-white/60 text-xs sm:text-sm mb-6 leading-relaxed">
                {cutekaari.platformSummary} Lifetime account data spanning April 2026 to October 2026.
              </p>

              <div className="mb-6">
                <ResultsLedger data={cutekaari} />
              </div>

              <p className="text-[11px] text-white/40 leading-relaxed font-mono mb-6">
                {cutekaari.sourceNote}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/case-studies/cutekaari"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#3b82f6] hover:text-white transition-colors group/link"
              >
                <span>Read Full CuteKaari Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
              <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">
                90K+ Installs Tracked
              </span>
            </div>
          </div>

          {/* Relax Call Card */}
          <div className="rounded-3xl bg-[#0c0c0e] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#3b82f6]/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3b82f6]/10 transition-colors" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] block mb-1">
                    {relaxCall.category}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {relaxCall.clientName}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#3b82f6] block">
                    Account ROAS
                  </span>
                  <span className="font-heading text-2xl font-black text-[#3b82f6]">
                    1.87x
                  </span>
                </div>
              </div>

              <p className="text-white/60 text-xs sm:text-sm mb-6 leading-relaxed">
                {relaxCall.platformSummary} Lifetime account data spanning April 2026 to October 2026.
              </p>

              <div className="mb-6">
                <ResultsLedger data={relaxCall} />
              </div>

              <p className="text-[11px] text-white/40 leading-relaxed font-mono mb-6">
                {relaxCall.sourceNote}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/case-studies/relax-call"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#3b82f6] hover:text-white transition-colors group/link"
              >
                <span>Read Full Relax Call Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
              <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">
                34K+ Installs Tracked
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Context Banner & Direct Service Links */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#3b82f6] shrink-0" />
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Looking to scale app user acquisition or reduce downstream cost-per-purchase? Explore specialized frameworks:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/services/app-marketing"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              App Marketing Service &rarr;
            </Link>
            <Link
              href="/services/meta-ads"
              className="px-4 py-2 rounded-xl bg-[#3b82f6]/20 hover:bg-[#3b82f6]/30 border border-[#3b82f6]/40 text-xs font-bold uppercase tracking-wider text-[#3b82f6] transition-colors"
            >
              Meta Ads Framework &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
