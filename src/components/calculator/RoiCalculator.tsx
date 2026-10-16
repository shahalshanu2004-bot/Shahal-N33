"use client";

import { useState, useId } from "react";
import { benchmarkRanges, GoalBenchmark } from "@/lib/data/benchmarks";
import { siteConfig } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";
import { Calculator, ArrowRight, Info } from "lucide-react";

// Format currency in Indian Numbering System (e.g., ₹50,000 / ₹5,00,000)
function formatIndianCurrency(num: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(num);
}

function formatIndianNumber(num: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(num);
}

export default function RoiCalculator() {
  const [budget, setBudget] = useState<number>(50000);
  const [selectedGoal, setSelectedGoal] = useState<string>("lead_generation");

  const budgetInputId = useId();
  const goalSelectId = useId();

  const currentBenchmark: GoalBenchmark =
    benchmarkRanges[selectedGoal] || benchmarkRanges.lead_generation;

  // Calculate estimated range
  let estimateLow = "";
  let estimateHigh = "";
  let estimateNote = "";

  if (selectedGoal === "lead_generation") {
    // low cost/unit gives high lead count, high cost/unit gives low lead count
    const minUnits = Math.round(budget / currentBenchmark.costPerUnitMax);
    const maxUnits = Math.round(budget / currentBenchmark.costPerUnitMin);
    estimateLow = formatIndianNumber(minUnits);
    estimateHigh = formatIndianNumber(maxUnits);
    estimateNote = `${estimateLow} – ${estimateHigh} Qualified Leads`;
  } else if (selectedGoal === "app_installs") {
    const minUnits = Math.round(budget / currentBenchmark.costPerUnitMax);
    const maxUnits = Math.round(budget / currentBenchmark.costPerUnitMin);
    estimateLow = formatIndianNumber(minUnits);
    estimateHigh = formatIndianNumber(maxUnits);
    estimateNote = `${estimateLow} – ${estimateHigh} App Installs`;
  } else if (selectedGoal === "ecommerce_sales") {
    const minRev = Math.round(budget * (currentBenchmark.roasMin || 2.8));
    const maxRev = Math.round(budget * (currentBenchmark.roasMax || 5.2));
    estimateLow = formatIndianCurrency(minRev);
    estimateHigh = formatIndianCurrency(maxRev);
    estimateNote = `${estimateLow} – ${estimateHigh} Gross Revenue (${currentBenchmark.roasMin}x – ${currentBenchmark.roasMax}x ROAS)`;
  }

  // Pre-fill WhatsApp message with budget and goal
  const prefilledMessage = encodeURIComponent(
    `Hi Shahal, I used the ROI & Budget Estimator on your portfolio. My monthly ad budget is ${formatIndianCurrency(
      budget
    )} and my objective is ${currentBenchmark.label}. I'd like to get a Free Account Audit.`
  );
  const ctaWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${prefilledMessage}`;

  return (
    <div className="w-full max-w-4xl mx-auto my-16 p-8 md:p-12 rounded-3xl bg-[#0c0c0e] border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-[11px] font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" /> ROI & BUDGET ESTIMATOR
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
            Estimate Campaign Scale & Returns
          </h3>
          <p className="text-white/50 text-xs md:text-sm font-light mt-1">
            Simulate realistic output ranges based on verified acquisition benchmarks.
          </p>
        </div>
        <div className="text-left sm:text-right">
          <span className="text-[10px] uppercase tracking-widest text-white/40 block">Monthly Budget</span>
          <span className="font-heading text-2xl md:text-3xl font-black text-[#3b82f6] tabular-nums">
            {formatIndianCurrency(budget)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <div className="md:col-span-7 space-y-6">
          {/* Budget Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor={budgetInputId}
                className="text-xs font-bold uppercase tracking-widest text-white/70"
              >
                Monthly Ad Spend: <span className="text-[#3b82f6]">{formatIndianCurrency(budget)}</span>
              </label>
              <span className="text-[11px] text-white/40 tabular-nums">₹10K – ₹5L</span>
            </div>
            <input
              id={budgetInputId}
              type="range"
              min={10000}
              max={500000}
              step={5000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              aria-label="Monthly ad budget slider"
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50"
            />
            <div className="flex justify-between text-[10px] text-white/30 mt-1 font-mono">
              <span>₹10,000</span>
              <span>₹2,50,000</span>
              <span>₹5,00,000</span>
            </div>
          </div>

          {/* Goal Select */}
          <div>
            <label
              htmlFor={goalSelectId}
              className="text-xs font-bold uppercase tracking-widest text-white/70 block mb-2"
            >
              Primary Campaign Goal
            </label>
            <select
              id={goalSelectId}
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#09090c] border border-white/10 text-white text-sm font-medium focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all cursor-pointer"
            >
              <option value="lead_generation">Lead Generation (B2B, High-Ticket, Real Estate, Local Services)</option>
              <option value="app_installs">App Installs (Android / iOS Mobile Acquisition)</option>
              <option value="ecommerce_sales">E-commerce Sales (Direct-to-Consumer / Purchase ROAS)</option>
            </select>
          </div>

          <p className="text-[11px] text-white/40 flex items-start gap-1.5 leading-relaxed">
            <Info className="w-3.5 h-3.5 shrink-0 text-[#3b82f6] mt-0.5" />
            <span>{currentBenchmark.sourceNote}</span>
          </p>
        </div>

        {/* Output Card */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-[#09090c] to-[#111116] border border-[#3b82f6]/30 shadow-xl flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#3b82f6]">
                ESTIMATED RANGE
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-white/50">
                Estimate
              </span>
            </div>

            <div className="my-4">
              <p className="font-heading text-2xl sm:text-3xl font-black text-white leading-tight">
                {estimateNote}
              </p>
              <p className="text-white/40 text-[11px] uppercase tracking-wider mt-1">
                {currentBenchmark.metricLabel}
              </p>
            </div>

            <p className="text-[11px] text-white/50 leading-relaxed font-light border-t border-white/5 pt-3">
              Estimates based on past campaign ranges. Actual results vary by industry, offer, creative, and market.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("roi_calculator")}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#3b82f6] hover:bg-white text-white hover:text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            >
              <span>Get a Free Account Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
