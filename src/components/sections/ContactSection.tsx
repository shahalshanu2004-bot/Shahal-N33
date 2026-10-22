"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { socialLinks } from "@/lib/data/socials";
import AuditContactForm from "@/components/forms/AuditContactForm";
import { PhoneCall, FileSearch, Sparkles, Rocket, Calendar } from "lucide-react";
import { trackWhatsAppClick, trackEmailClick, trackPhoneClick } from "@/lib/analytics";

const auditSteps = [
  {
    step: "01",
    title: "Free Call",
    desc: "15-minute alignment call to understand your target CPA, current spend, and growth goals.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Account Audit",
    desc: "Deep review of your pixel events, ad structure, budget waste, and creative fatigue.",
    icon: FileSearch,
  },
  {
    step: "03",
    title: "Growth Proposal",
    desc: "A concise blueprint outlining recommended hooks, audiences, and campaign architectures.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Launch & Optimize",
    desc: "Campaign rollout, scientific creative testing, and rapid scaling of proven winning angles.",
    icon: Rocket,
  },
];

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

const socials = [
  { icon: LinkedinIcon, label: socialLinks.linkedin.ariaLabel, href: socialLinks.linkedin.url },
  { icon: InstagramIcon, label: socialLinks.instagram.ariaLabel, href: socialLinks.instagram.url },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <section id="contact" className="scroll-mt-24 py-28 md:py-36 bg-[#050508] relative border-t border-white/5 overflow-hidden" ref={sectionRef}>
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3b82f6]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> FREE AD ACCOUNT AUDIT
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight text-white mb-6">
            FIND OUT WHAT&apos;S HOLDING BACK YOUR <span className="text-[#3b82f6]">AD PERFORMANCE.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed">
            Get a practical review of your campaign structure, conversion tracking, creative strategy, and opportunities to improve cost per result.
          </p>
        </motion.div>

        {/* 4-Step "How It Works" Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">
              AUDIT & ENGAGEMENT PROCESS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-2xl bg-[#09090c] border border-white/5 hover:border-[#3b82f6]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg shadow-black/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] flex items-center justify-center group-hover:bg-[#3b82f6] group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-white/20 group-hover:text-[#3b82f6] transition-colors">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2 group-hover:text-[#3b82f6] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Form Grid & Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Direct Audit Request Form */}
          <div className="lg:col-span-7 bg-[#0c0c0e] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <div className="mb-6 pb-6 border-b border-white/5">
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-2">
                Request Your Audit
              </h3>
              <p className="text-white/50 text-xs sm:text-sm font-light">
                Fill out the details below. I review your ad setups personally and share recommendations within 24 hours.
              </p>
            </div>

            <AuditContactForm />
          </div>

          {/* Right Column: Direct Contact & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Instant WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c0c0e] to-[#121218] border border-white/10 shadow-xl">
              <span className="text-[#25D366] text-xs font-bold uppercase tracking-widest block mb-2">
                FASTEST RESPONSE
              </span>
              <h3 className="font-heading text-2xl font-bold text-white uppercase mb-3">
                Prefer WhatsApp Directly?
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                Skip forms and talk through your ad account or user acquisition objectives directly on WhatsApp.
              </p>
              <a
                suppressHydrationWarning
                href={siteConfig.whatsappAuditUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("contact_section")}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-[#25D366] text-black font-bold tracking-widest uppercase text-xs hover:bg-white transition-all shadow-[0_0_25px_rgba(37,211,102,0.3)]"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            {/* Direct Contact Info */}
            <div className="p-8 rounded-3xl bg-[#09090c] border border-white/5 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Direct Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  onClick={() => trackEmailClick("contact_section")}
                  className="text-white/80 hover:text-[#3b82f6] text-sm font-medium transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="pt-3 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Direct Phone</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  onClick={() => trackPhoneClick("contact_section")}
                  className="text-white/80 hover:text-[#3b82f6] text-sm font-medium transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="pt-3 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Location</p>
                <p className="text-white/80 text-sm font-medium">
                  {siteConfig.location.locality}, {siteConfig.location.region}, {siteConfig.location.country}
                </p>
              </div>
            </div>

            {/* Optional Cal.com Embed Slot */}
            {calLink && (
              <div className="p-8 rounded-3xl bg-[#09090c] border border-[#3b82f6]/30 shadow-xl">
                <div className="flex items-center gap-2 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>SCHEDULE DIRECTLY</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white uppercase mb-2">
                  Book a 15-Minute Strategy Slot
                </h4>
                <p className="text-white/50 text-xs font-light mb-5">
                  Pick an available time on my live calendar for a 1-on-1 performance review.
                </p>
                <a
                  href={calLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Open Booking Calendar &rarr;
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer Branding & Socials */}
        <div className="pt-16 border-t border-white/10 flex flex-col items-center text-center">
          <h3 className="text-white/90 font-heading text-2xl font-black tracking-widest uppercase mb-2">
            SHAHAL N
          </h3>
          <p className="text-white/40 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-8">
            PERFORMANCE MARKETER &middot; META ADS &middot; GOOGLE ADS &middot; APP MARKETING
          </p>

          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                suppressHydrationWarning
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/50 transition-all duration-300 hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 hover:-translate-y-0.5"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

