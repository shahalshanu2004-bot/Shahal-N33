import { SITE_URL } from "../../lib/site";
﻿import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "About Shahal N | Performance Marketer & Paid Ads Specialist",
  description: "Learn more about Shahal N — Performance Marketer focused on Meta Ads, Google Ads, app user acquisition, lead generation, and conversion tracking.",
  keywords: [
    "About Shahal N",
    "Performance Marketer",
    "Performance Marketer in Kerala",
    "Meta Ads Specialist",
    "Google Ads Specialist",
    "Digital Marketing Consultant"
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Shahal N | Performance Marketer & Paid Ads Specialist",
    description: "Learn more about Shahal N — Performance Marketer focused on Meta Ads, Google Ads, app user acquisition, lead generation, and conversion tracking.",
    url: `${SITE_URL}/about`,
    siteName: "Shahal N — Performance Marketer",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shahal N | Performance Marketer & Paid Ads Specialist",
    description: "Learn more about Shahal N — Performance Marketer focused on Meta Ads, Google Ads, app user acquisition, lead generation, and conversion tracking.",
  },
};

const timeline = [
  {
    num: "01",
    title: "THE FOUNDATION",
    subtitle: "Finance → Business Thinking",
    meta: "",
    desc: "Built a strong foundation in numbers, cost, efficiency and return through my Finance background."
  },
  {
    num: "02",
    title: "ENTERING DIGITAL",
    subtitle: "Digital Marketing → Paid Acquisition",
    meta: "",
    desc: "Moved into digital marketing with a focus on paid advertising, campaign strategy and measurable acquisition."
  },
  {
    num: "03",
    title: "FIRST CAMPAIGNS",
    subtitle: "Lead Generation → Audience & Creative Testing",
    meta: "",
    desc: "Gained hands-on experience building campaigns, testing audiences and creatives, and optimizing for qualified leads."
  },
  {
    num: "04",
    title: "APP PERFORMANCE",
    subtitle: "User Acquisition → Conversion Tracking",
    meta: "",
    desc: "Expanded into app marketing, working with acquisition campaigns, event tracking, purchase optimization and audience testing."
  },
  {
    num: "05",
    title: "PERFORMANCE FOCUS",
    subtitle: "Data → Optimization → Scale",
    meta: "",
    desc: "Developed a performance-focused approach built around campaign data, conversion signals and continuous optimization."
  },
  {
    num: "06",
    title: "TODAY",
    subtitle: "Performance Marketing → Measurable Growth",
    meta: "",
    desc: "Focused on turning paid traffic into measurable business outcomes through strategy, testing and optimization."
  }
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/about#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": `${SITE_URL}/about`
          }
        ]
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": "Shahal N",
        "jobTitle": "Performance Marketer",
        "url": `${SITE_URL}/about`,
        "sameAs": [
          "https://www.linkedin.com/in/shahal-n/",
          "https://www.instagram.com/shahal_n/"
        ]
      }
    ]
  };

  return (
    <main className="bg-[#050508] min-h-screen">
      <JsonLd data={jsonLd} />



      <PageHero
        badge="MY STORY"
        title="BUILT TO DRIVE"
        highlight="REAL RESULTS."
        description="I'm Shahal N — a Performance Marketer focused on paid acquisition, app growth and measurable business outcomes. I combine creative testing, campaign data and conversion tracking to turn ad spend into measurable growth."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
      />

      {/* From Finance to Performance */}
      <section className="py-24 md:py-32 bg-[#050508]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight text-white">
                FROM FINANCE TO<br />
                <span className="text-[#3b82f6]">PERFORMANCE.</span>
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                <p>
                  My background in Finance taught me to think in numbers, efficiency and return. Digital marketing gave me the tools to apply that thinking to customer acquisition.
                </p>
                <p>
                  Today, I focus on performance marketing &mdash; where creative decisions meet data, tracking and measurable business outcomes.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#3b82f6]/5 blur-md" />
              <div
                className="w-full h-full bg-cover bg-center rounded-3xl border border-white/10 group-hover:border-[#3b82f6]/30 transition-colors duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0c0c0e] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 md:p-12 rounded-3xl bg-[#050508] border border-white/5 hover:border-[#3b82f6]/30 transition-colors duration-500 group">
              <h2 className="font-heading text-2xl font-black mb-6 uppercase tracking-widest text-white group-hover:text-[#3b82f6] transition-colors">Mission</h2>
              <p className="text-white/60 leading-relaxed text-lg font-light">
                Build campaigns around real business objectives &mdash; not vanity metrics.
              </p>
            </div>
            <div className="p-10 md:p-12 rounded-3xl bg-[#050508] border border-white/5 hover:border-[#3b82f6]/30 transition-colors duration-500 group">
              <h2 className="font-heading text-2xl font-black mb-6 uppercase tracking-widest text-white group-hover:text-[#3b82f6] transition-colors">Vision</h2>
              <p className="text-white/60 leading-relaxed text-lg font-light">
                Become a trusted performance marketing partner for brands that want sustainable, measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Timeline */}
      <section className="py-24 md:py-32 bg-[#050508]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-20 text-center uppercase tracking-tighter text-white">
            MY <span className="text-[#3b82f6]">JOURNEY.</span>
          </h2>
          
          <div className="relative">
            {/* Base Line */}
            <div className="absolute left-[15px] md:left-8 top-0 bottom-0 w-[2px] bg-white/5" />
            
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-12 md:pl-24 group">
                  {/* Node */}
                  <div className="absolute left-0 md:left-[17px] top-1 w-8 h-8 rounded-full bg-[#050508] border-2 border-white/10 flex items-center justify-center group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6]/10 transition-colors duration-300">
                    <span className="text-[10px] font-bold text-white/50 group-hover:text-[#3b82f6]">{item.num}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-heading text-2xl md:text-3xl font-black mb-3 text-white uppercase tracking-tight group-hover:text-[#3b82f6] transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.subtitle && (
                      <p className="text-white/80 font-bold text-lg mb-2">
                        {item.subtitle}
                      </p>
                    )}
                    
                    {item.meta && (
                      <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
                        {item.meta}
                      </p>
                    )}
                    
                    {item.desc && (
                      <p className="text-white/50 text-base leading-relaxed font-light">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 md:py-32 bg-[#0c0c0e] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              WHY WORK <span className="text-[#3b82f6]">WITH ME?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { num: "01", title: "RESULTS FIRST", desc: "Campaign decisions are tied to business outcomes, not vanity metrics." },
              { num: "02", title: "TEST & LEARN", desc: "I test audiences, creatives and messaging, then use the data to decide what happens next." },
              { num: "03", title: "TRANSPARENT APPROACH", desc: "Clear communication, honest reporting and decisions based on what the numbers actually show." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-[#050508] border border-white/5 text-left hover:-translate-y-2 hover:border-[#3b82f6]/30 transition-all duration-500 shadow-xl shadow-black/50 group">
                <p className="text-[#3b82f6] font-heading text-xl font-black mb-6">{item.num}</p>
                <h3 className="font-heading text-xl font-bold mb-4 uppercase tracking-wider text-white group-hover:text-[#3b82f6] transition-colors">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#050508] text-center border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none text-white">
            READY TO <span className="text-[#3b82f6]">GROW?</span>
          </h2>
          <p className="text-white/50 mb-12 text-lg md:text-xl font-light leading-relaxed">
            Let&apos;s build campaigns that turn attention into measurable business outcomes.
          </p>
          <a suppressHydrationWarning href="https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" 
             className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#3b82f6] text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-white/20">
            MESSAGE ON WHATSAPP &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
