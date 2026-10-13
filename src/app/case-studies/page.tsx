import { SITE_URL, siteConfig } from "../../lib/site";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { portfolioProjects } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Performance Marketing Case Studies | Meta & Google Ads | Shahal N",
  description: "Explore performance marketing case studies by Shahal N. In-depth campaign breakdowns covering Meta Ads, App Acquisition, Lead Generation, and Conversion Tracking.",
  alternates: { canonical: `${SITE_URL}/case-studies` },
  openGraph: {
    title: "Performance Marketing Case Studies | Meta & Google Ads | Shahal N",
    description: "Explore performance marketing case studies by Shahal N. Real campaign breakdowns covering Meta Ads, App Acquisition, and Lead Generation.",
    url: `${SITE_URL}/case-studies`,
    siteName: "Shahal N — Performance Marketer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Case Studies | Meta & Google Ads | Shahal N",
    description: "Explore performance marketing case studies by Shahal N. Real campaign breakdowns covering Meta Ads, App Acquisition, and Lead Generation.",
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Case Studies",
        "item": `${SITE_URL}/case-studies`
      }
    ]
  };

  const cases = [
    {
      ...portfolioProjects[0],
      challenge: "A newly launched placement consultancy needed rapid brand awareness and a pipeline of serious overseas job applicants within a very constrained budget.",
      strategy: "Deployed hyper-targeted Meta Ads using interest-based and lookalike audience segmentation with multilingual creatives designed for aspirational job seekers.",
      execution: "Built a 3-layer audience architecture: Core interest audiences → Lookalike audiences → Retargeting sequences. A/B tested 6 creative variants to find the highest-converting hook.",
      results: ["119 high-intent inquiries generated", "₹1.28 cost per result achieved", "8x below the ₹15–₹20 category benchmark", "Qualified pipeline built within 72 hours of launch"],
      roi: "₹152 total ad spend → 119 qualified leads"
    },
    {
      ...portfolioProjects[1],
      challenge: "A political party needed maximum voter awareness within a single constituency under strict time pressure and zero budget for outside-constituency exposure.",
      strategy: "Precision geo-fenced Meta Ads targeting voter-age demographics exclusively within the Wandoor constituency boundary, with creative rotation to combat ad fatigue.",
      execution: "Mapped exact constituency boundaries for geo-fencing. Built 4 creative variants for rotation. Set frequency caps to maintain 2–3x average frequency without fatigue.",
      results: ["5.16 lakh voters reached in the constituency", "2x average frequency maintained throughout campaign", "99% budget utilization within target area", "Zero wasted impressions outside constituency"],
      roi: "Maximum voter saturation within defined geographic boundary"
    },
    {
      ...portfolioProjects[2],
      challenge: "A business services company needed to move prospects from awareness to conversation without losing them to long contact form processes and slow follow-up cycles.",
      strategy: "Meta Ads campaign using Click-to-WhatsApp objective, driving direct conversations and bypassing traditional form-fill friction entirely.",
      execution: "Created direct-response creatives with clear WhatsApp CTA. Pre-filled conversation starters to qualify leads automatically. Set up Manychat automated welcome and qualification sequences.",
      results: ["258 WhatsApp conversations initiated", "Dramatically shorter sales cycle vs. form fills", "Higher lead quality through self-selection", "100% positive client feedback"],
      roi: "258 warm pipeline opportunities created"
    }
  ];

  return (
    <>
      <JsonLd data={jsonLd} />



      <PageHero
        badge="Campaign Intelligence"
        title="Real Campaigns."
        highlight="Proven Results."
        description="Detailed breakdowns of the strategy, execution, and outcomes behind campaigns that delivered extraordinary results for clients."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]}
      />

      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col gap-20">
          {cases.map((study, index) => (
            <div key={index} className="rounded-[24px] border border-white/8 bg-white/[0.015] overflow-hidden">
              {/* Header image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${study.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-black/20" />
                <div className="absolute bottom-6 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/30 text-[#3b82f6] text-xs uppercase tracking-widest mb-3">{study.category}</span>
                    <h2 className="font-heading text-3xl font-bold text-white">{study.title}</h2>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-3xl font-bold text-[#3b82f6]">{study.metric}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{study.metricLabel}</p>
                  </div>
                </div>
              </div>

              {/* ROI bar */}
              <div className="px-8 py-4 bg-[#3b82f6]/5 border-b border-white/8 flex items-center gap-3">
                <span className="text-[#3b82f6] text-xs uppercase tracking-widest font-bold">ROI Snapshot:</span>
                <span className="text-white/60 text-sm">{study.roi}</span>
              </div>

              {/* Challenge + Strategy + Execution */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/8">
                {[
                  { label: "Challenge", color: "bg-red-500", content: study.challenge },
                  { label: "Strategy", color: "bg-blue-500", content: study.strategy },
                  { label: "Execution", color: "bg-purple-500", content: study.execution }
                ].map((col, ci) => (
                  <div key={ci} className={`p-8 ${ci < 2 ? "md:border-r border-white/8" : ""}`}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-white/60">
                      <span className={`w-1.5 h-1.5 rounded-full ${col.color} inline-block`} />
                      {col.label}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">{col.content}</p>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="p-8 bg-[#3b82f6]/[0.03]">
                <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] inline-block" />
                  Results Delivered
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.results.map((result, ri) => (
                    <div key={ri} className="flex items-center gap-2">
                      <span className="text-[#3b82f6] text-sm">✓</span>
                      <p className="text-white/70 text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Your business could be <span className="text-[#3b82f6] italic font-serif">the next case study.</span>
          </h2>
          <p className="text-white/50 mb-10">Let&apos;s build a strategy that generates measurable results you will want to share.</p>
          <a
            suppressHydrationWarning
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3b82f6] text-black font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
