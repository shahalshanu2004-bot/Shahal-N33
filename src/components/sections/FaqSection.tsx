"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    num: "01",
    q: "WHAT SERVICES DO YOU OFFER?",
    a: "I work across Meta Ads, Google Ads, app marketing, lead generation, conversion tracking, campaign optimization, performance strategy, SEO, website development, content creation and AI-powered marketing services."
  },
  {
    num: "02",
    q: "DO YOU WORK WITH STARTUPS AND SMALL BUSINESSES?",
    a: "Yes. I can work with businesses at different stages, depending on their goals, budget and marketing requirements."
  },
  {
    num: "03",
    q: "DO YOU MANAGE META AND GOOGLE ADS CAMPAIGNS?",
    a: "Yes. Campaign setup, audience strategy, creative testing, conversion tracking, optimization and performance analysis are part of my paid advertising services."
  },
  {
    num: "04",
    q: "CAN YOU HELP PROMOTE MOBILE APPS?",
    a: "Yes. App marketing can include user acquisition, campaign setup, audience and creative testing, event tracking and conversion optimization."
  },
  {
    num: "05",
    q: "DO YOU PROVIDE LEAD GENERATION CAMPAIGNS?",
    a: "Yes. I can build campaigns focused on generating qualified enquiries through lead forms, landing pages and WhatsApp-based conversion paths."
  },
  {
    num: "06",
    q: "HOW DO YOU MEASURE CAMPAIGN PERFORMANCE?",
    a: "I focus on meaningful business signals such as conversions, cost per result, lead quality, purchases and funnel performance rather than optimizing only for clicks or impressions."
  },
  {
    num: "07",
    q: "DO YOU PROVIDE CONVERSION TRACKING SETUP?",
    a: "Yes. Depending on the platform and setup, this can include Meta tracking, Google Ads conversion tracking, Google Tag Manager, website events and app events."
  },
  {
    num: "08",
    q: "DO YOU CREATE AD CREATIVES AND CONTENT?",
    a: "Yes. I can support campaign creatives, short-form content, marketing copy and AI-assisted creative production depending on the campaign requirements."
  },
  {
    num: "09",
    q: "CAN YOU BUILD A WEBSITE OR LANDING PAGE FOR MY BUSINESS?",
    a: "Yes. I offer website development and conversion-focused landing pages designed around usability, SEO structure and business goals."
  },
  {
    num: "10",
    q: "HOW DO WE GET STARTED?",
    a: "Start by sharing your business, your current marketing situation and what you want to achieve. From there, we can identify the right service and next steps."
  }
];

export default function FaqSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#050508] border-y border-white/5 relative" ref={sectionRef}>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <div className="container mx-auto px-6 md:px-12 max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            SHAHAL N — PERFORMANCE MARKETER
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            FREQUENTLY<br className="hidden md:block" />
            ASKED <span className="text-[#3b82f6]">QUESTIONS.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Straight answers to common questions about my services and approach.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
              className={`border rounded-2xl bg-[#0c0c0e] overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-[#3b82f6]/40 shadow-[0_0_25px_rgba(59,130,246,0.08)]'
                  : 'border-white/10 hover:border-[#3b82f6]/30'
              }`}
            >
              <button 
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full px-8 md:px-10 py-7 md:py-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] group cursor-pointer"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-8 flex-grow pr-4">
                  <span className={`font-heading font-bold text-base md:text-lg transition-colors duration-300 mt-0.5 md:mt-0 ${
                    openIndex === index ? 'text-[#3b82f6]' : 'text-[#3b82f6]/70'
                  }`}>
                    {faq.num}
                  </span>
                  <h3 className={`font-heading text-base md:text-lg lg:text-xl font-bold tracking-wider uppercase transition-colors duration-300 leading-tight ${openIndex === index ? 'text-[#3b82f6]' : 'text-white group-hover:text-white/90'}`}>
                    {faq.q}
                  </h3>
                </div>
                <div className={`flex-shrink-0 transition-transform duration-300 ease-out ${openIndex === index ? 'text-[#3b82f6] rotate-180' : 'text-white/40 group-hover:text-white'}`}>
                  <ChevronDown size={20} strokeWidth={1.5} />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-8 md:pb-10 text-white/60 leading-[1.8] font-light text-base md:text-lg">
                      <div className="border-t border-white/5 pt-6 md:pt-8">
                        {faq.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
