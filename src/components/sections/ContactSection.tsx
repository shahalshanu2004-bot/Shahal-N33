"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/shahal-n/" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/shahal_n/" },
  { icon: FacebookIcon, label: "Facebook", href: "#" } // Add href if applicable
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#050508] relative border-t border-white/5" ref={sectionRef}>
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="w-full max-w-5xl"
        >
          {/* Headline */}
          <h2 className="font-heading text-6xl md:text-7xl lg:text-[6.5rem] font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
            LET&apos;S BUILD<br className="hidden md:block" /> SOMETHING<br />
            <span className="text-[#3b82f6]">THAT PERFORMS.</span>
          </h2>
          
          {/* Description */}
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Have a campaign to grow, an app to acquire users for, or a funnel that needs better performance? Let&apos;s talk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
            <Link href="/case-studies"
               className="w-full sm:w-auto interactive group flex items-center justify-center gap-3 py-4 px-10 rounded-full bg-[#3b82f6] text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]">
              VIEW MY WORK 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
            <a suppressHydrationWarning href="https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
               target="_blank" rel="noreferrer"
               className="w-full sm:w-auto interactive group flex items-center justify-center gap-3 py-4 px-10 rounded-full border border-white/20 text-white/80 font-bold tracking-widest uppercase text-sm hover:border-[#3b82f6]/60 hover:text-[#3b82f6] hover:bg-[#3b82f6]/[0.06] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]">
              GET IN TOUCH 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
          
          {/* Footer Branding */}
          <div className="pt-16 border-t border-white/10 flex flex-col items-center">
            <h3 className="text-white/90 font-heading text-2xl font-black tracking-widest uppercase mb-3">SHAHAL N</h3>
            <p className="text-white/40 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-10">
              PERFORMANCE MARKETER &middot; META ADS &middot; GOOGLE ADS &middot; APP MARKETING
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <a key={s.label} suppressHydrationWarning href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/50 transition-all duration-300 hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]">
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
