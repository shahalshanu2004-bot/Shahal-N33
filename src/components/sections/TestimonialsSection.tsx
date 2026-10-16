"use client";

import { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import { Quote, CheckCircle2, Star } from "lucide-react";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // GLOBAL RULE: If the array is empty, the component renders nothing (not even the heading).
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-28 md:py-36 bg-[#050508] relative border-b border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/[0.035] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
            CLIENT PERSPECTIVES
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            TESTIMONIALS & <span className="text-[#3b82f6]">ENDORSEMENTS</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto font-light">
            Verified feedback from founders and marketing executives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 hover:border-[#3b82f6]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#3b82f6]">
                    <Quote className="w-4 h-4" />
                  </div>

                  {/* Optional Verified Flag */}
                  {t.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-[10px] font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3" /> Verified Client
                    </span>
                  )}
                </div>

                {/* Optional Star Rating (display-only, not clickable) */}
                {typeof t.rating === "number" && t.rating > 0 && (
                  <div
                    className="flex items-center gap-1 mb-4 select-none"
                    aria-label={`Rating: ${t.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < (t.rating || 0)
                            ? "fill-amber-400 text-amber-400"
                            : "text-white/20"
                        }`}
                      />
                    ))}
                  </div>
                )}

                <p className="text-white/80 text-sm md:text-base leading-relaxed font-light mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading text-base font-bold text-white uppercase tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-white/50 text-xs">
                    {t.designation}{t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>

                {/* Optional Client Logo */}
                {t.logo && (
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
                    <Image
                      src={t.logo}
                      alt={`${t.company} logo`}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
