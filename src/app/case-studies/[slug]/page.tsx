import { SITE_URL } from "../../../lib/site";
import type { Metadata } from "next";
import { experienceProjects } from "@/lib/data/experience";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import CaseStudyTracker from "@/components/analytics/CaseStudyTracker";
import { clientResults, getSourceNote } from "@/data/results";
import { getProofScreenshots } from "@/lib/proof-screenshots";
import ResultsLedger from "@/components/proof/ResultsLedger";
import CampaignTable from "@/components/proof/CampaignTable";
import ProofScreenshots from "@/components/proof/ProofScreenshots";
import ChannelSplitTable from "@/components/proof/ChannelSplitTable";

export async function generateStaticParams() {
  return experienceProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = experienceProjects.find((p) => p.slug === slug);
  if (!project) return {};

  const clientData = (clientResults as Record<string, typeof clientResults["cutekaari"] | undefined>)[slug];

  let pageTitle = `${project.title} | Case Study | Shahal N`;
  let description = `${project.title}: ${project.objective} Results: ${project.result} (${project.resultLabel}). Performance marketing breakdown by Shahal N.`;

  if (slug === "cutekaari") {
    pageTitle = "CuteKaari app marketing case study: 6.88x purchase ROAS | Shahal N";
    description = "CuteKaari app marketing results: 90,465 installs at ₹30.76 CPI, 33,961 purchases at ₹81.95 CPA, and ₹1.92 Cr revenue at 6.88x ROAS. Meta Ads breakdown.";
  } else if (slug === "relax-call") {
    pageTitle = "Relax Call iOS and Android app install campaigns | Shahal N";
    description = "Relax Call app marketing case study: 34,618 installs at ₹53.91 CPI, 10,309 purchases, and up to 5.33x ROAS on top iOS campaigns. Meta Ads breakdown.";
  } else if (slug === "premium-real-estate") {
    if (clientData?.verified) {
      pageTitle = "Real estate lead generation case study: ₹142 cost per lead | Shahal N";
      description = "Real estate lead generation case study: 239 verified buyer inquiries at ₹142 blended CPL via Meta Ads. Performance marketing breakdown by Shahal N.";
    } else {
      pageTitle = "Real estate lead generation case study | Shahal N";
      description = "Meta Ads lead generation case study for a premium residential real estate development. Lead qualification architecture breakdown by Shahal N.";
    }
  } else if (slug === "rs-water-solutions") {
    if (clientData?.verified) {
      pageTitle = "Local lead generation on WhatsApp and Meta: ₹14.65 per inquiry | Shahal N";
      description = "Local direct-response case study: 368 verified customer inquiries via WhatsApp (₹12.01) and Instant Forms (₹14.95). Breakdown by Shahal N.";
    } else {
      pageTitle = "Local direct-response case study: RS Water Solutions | Shahal N";
      description = "Direct-response performance marketing case study: Driving customer inquiries on Meta and WhatsApp for RS Water Solutions by Shahal N.";
    }
  }

  // Ensure description is under 158 characters
  if (description.length > 158) {
    description = description.slice(0, 155).trim() + "...";
  }

  const canonicalUrl = `${SITE_URL}/case-studies/${slug}`;

  return {
    title: pageTitle,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      url: canonicalUrl,
      type: "article",
      siteName: "Shahal N — Performance Marketer",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = experienceProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const resultsData =
    slug === "cutekaari" ||
    slug === "relax-call" ||
    slug === "premium-real-estate" ||
    slug === "rs-water-solutions"
      ? clientResults[slug]
      : null;

  const proofScreenshots = getProofScreenshots(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/case-studies/${project.slug}#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `${SITE_URL}/case-studies/${project.slug}`
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/case-studies/${project.slug}#work`,
        "name": project.title,
        "headline": project.title,
        "description": `${project.objective} Result: ${project.result} (${project.resultLabel})`,
        "author": {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          "name": "Shahal N",
          "jobTitle": "Performance Marketer"
        },
        "publisher": {
          "@id": `${SITE_URL}/#person`
        },
        "url": `${SITE_URL}/case-studies/${project.slug}`
      }
    ]
  };

  // Build modular structured sections - rendered strictly when data exists
  interface SectionItem {
    num: string;
    title: string;
    content: React.ReactNode;
  }

  const dynamicSections: SectionItem[] = [];
  let sectionIndex = 1;

  const getNextNum = () => {
    const s = sectionIndex < 10 ? `0${sectionIndex}` : `${sectionIndex}`;
    sectionIndex++;
    return s;
  };

  // 1. Client & Industry
  if (project.clientIndustry) {
    dynamicSections.push({
      num: getNextNum(),
      title: "CLIENT & INDUSTRY",
      content: (
        <div>
          <p className="text-white text-lg md:text-xl font-bold mb-2">{project.clientIndustry}</p>
          <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest">{project.category}</p>
        </div>
      )
    });
  }

  // 2. Objective / The Brief
  if (project.objective) {
    dynamicSections.push({
      num: getNextNum(),
      title: "THE BRIEF & OBJECTIVE",
      content: (
        <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
          {project.objective}
        </p>
      )
    });
  }

  // 3. My Role & Scope (with Contribution highlight)
  if (project.myRole || project.role || project.myContribution) {
    dynamicSections.push({
      num: getNextNum(),
      title: "ROLE & SCOPE",
      content: (
        <div className="space-y-4">
          <p className="text-white font-bold text-base md:text-lg">{project.myRole || project.role}</p>
          {project.myContribution && (
            <div className="p-5 rounded-2xl bg-[#0c0c0e] border border-[#3b82f6]/20">
              <span className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest block mb-1.5">
                MY DIRECT CONTRIBUTION
              </span>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          )}
        </div>
      )
    });
  }

  // 4. Campaign Duration & Ad Spend (rendered only if set)
  if (project.campaignDuration || project.timeline || project.adSpend) {
    dynamicSections.push({
      num: getNextNum(),
      title: "CAMPAIGN DURATION & SPEND",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(project.campaignDuration || project.timeline) && (
            <div className="p-4 rounded-xl bg-[#0c0c0e] border border-white/5">
              <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Campaign Duration</span>
              <p className="text-white font-bold text-sm">{project.campaignDuration || project.timeline}</p>
            </div>
          )}
          {project.adSpend && (
            <div className="p-4 rounded-xl bg-[#0c0c0e] border border-white/5">
              <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Ad Spend Managed</span>
              <p className="text-[#3b82f6] font-bold text-sm">{project.adSpend}</p>
            </div>
          )}
        </div>
      )
    });
  }

  // 5. Strategy
  if (project.strategy) {
    dynamicSections.push({
      num: getNextNum(),
      title: "STRATEGY ARCHITECTURE",
      content: (
        <p className="text-white/75 leading-relaxed text-base md:text-lg font-light">
          {project.strategy}
        </p>
      )
    });
  }

  // 6. What I Tested
  if (project.whatITested) {
    dynamicSections.push({
      num: getNextNum(),
      title: "WHAT I TESTED",
      content: (
        <p className="text-white/75 leading-relaxed text-base md:text-lg font-light">
          {project.whatITested}
        </p>
      )
    });
  }

  // 7. Execution & Work Scope
  if (project.execution || (project.myWork && project.myWork.length > 0)) {
    dynamicSections.push({
      num: getNextNum(),
      title: "EXECUTION & DELIVERABLES",
      content: (
        <div className="space-y-6">
          {project.execution && (
            <p className="text-white/75 leading-relaxed text-base md:text-lg font-light">
              {project.execution}
            </p>
          )}
          {project.myWork && project.myWork.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-2">
                Implementation Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.myWork.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0c0c0e] border border-white/5 text-xs text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    });
  }

  // 8. What Changed / Optimized
  if (project.whatChangedOptimized) {
    dynamicSections.push({
      num: getNextNum(),
      title: "WHAT CHANGED & OPTIMIZED",
      content: (
        <p className="text-white/75 leading-relaxed text-base md:text-lg font-light">
          {project.whatChangedOptimized}
        </p>
      )
    });
  }

  // 9. Results & Metric Definitions
  if (project.result) {
    dynamicSections.push({
      num: getNextNum(),
      title: "RESULTS & OUTCOMES",
      content: (
        <div className="space-y-6">
          <div className="p-6 md:p-8 rounded-3xl bg-[#0c0c0e] border border-[#3b82f6]/30 shadow-xl">
            <p className="text-[#3b82f6] font-heading text-4xl md:text-6xl font-black mb-2 tracking-tight">
              {project.result}
            </p>
            <p className="text-white/70 text-xs md:text-sm tracking-widest uppercase font-bold mb-4">
              {project.resultLabel}
            </p>
            {(project.conversionDefinition || project.metricDefinition) && (
              <p className="text-white/50 text-xs leading-relaxed border-t border-white/10 pt-4 font-light">
                <strong className="text-white/80 font-medium">What Counts as a Conversion:</strong> {project.conversionDefinition || project.metricDefinition}
              </p>
            )}
          </div>

          {/* App Marketing Case Studies: My Campaign Results Block */}
          {(project.slug === "cutekaari" || project.slug === "relax-call") && (
            <div className="p-6 rounded-3xl bg-[#0c0c0e] border border-white/10">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-2">
                Verified Campaign Performance
              </span>
              {project.myCampaignResults ? (
                <p className="text-white font-heading text-xl sm:text-2xl font-bold text-[#3b82f6]">
                  {project.myCampaignResults}
                </p>
              ) : (
                <div className="py-2">
                  <p className="text-white/30 text-xs italic">
                    Campaign results pending client data verification.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* App Marketing Specific Metrics (Spend, CPI, Purchase CPA) */}
          {(project.cpi || project.purchaseCpa) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.cpi && (
                <div className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/5">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Blended CPI</span>
                  <p className="text-white font-bold text-base">{project.cpi}</p>
                </div>
              )}
              {project.purchaseCpa && (
                <div className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/5">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Purchase CPA</span>
                  <p className="text-[#3b82f6] font-bold text-base">{project.purchaseCpa}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )
    });
  }

  // 10. Results Breakdown Section (App Marketing, Lead Generation & Direct Response)
  if (resultsData) {
    const isApp = resultsData.category === "app-marketing";
    const sourceText = getSourceNote(resultsData);

    dynamicSections.push({
      num: getNextNum(),
      title: "RESULTS BREAKDOWN",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#3b82f6]" />
                {isApp
                  ? `Account Totals ${resultsData.dateRange?.display ? `(${resultsData.dateRange.display})` : ""}`
                  : `Campaign Performance Breakdown ${resultsData.dateRange?.display ? `(${resultsData.dateRange.display})` : ""}`}
              </h3>

              {/* Verified vs Unverified Neutral Badge */}
              {resultsData.verified ? (
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Ads Manager Verified
                </span>
              ) : (
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Pending Verification
                </span>
              )}
            </div>

            {/* Unverified Neutral Notice (Prominent while verified is false) */}
            {!resultsData.verified && resultsData.unverifiedNotice && (
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white/70 text-xs sm:text-sm leading-relaxed">
                <span className="text-[#3b82f6] font-semibold block mb-0.5">Verification Status:</span>
                {resultsData.unverifiedNotice}
              </div>
            )}

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              {resultsData.platformSummary}
            </p>
          </div>

          {/* 1. Results Ledger Grid */}
          <ResultsLedger data={resultsData} />

          {/* Lead Definition Quality Claim */}
          {resultsData.leadDefinition && (
            <div className="p-4 rounded-xl bg-[#0c0c0e] border border-white/10">
              <span className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest block mb-1">
                Quality Claim &amp; Conversion Definition
              </span>
              <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed">
                {resultsData.leadDefinition}
              </p>
            </div>
          )}

          {/* 2. Channel Split Table (if present, e.g. RS Water Solutions) */}
          {resultsData.channelSplit && resultsData.channelSplit.length > 0 && (
            <div className="pt-2 border-t border-white/10">
              <ChannelSplitTable channelSplit={resultsData.channelSplit} />
            </div>
          )}

          {/* Selected Campaigns Table (for App Marketing clients) */}
          {resultsData.selectedCampaigns && (
            <div className="pt-2 border-t border-white/10">
              <CampaignTable
                title={resultsData.campaignsTableTitle || "Selected Campaigns"}
                campaigns={resultsData.selectedCampaigns}
                honestyNote={resultsData.honestyNote}
                caption={`${resultsData.clientName} campaign performance metrics`}
              />
            </div>
          )}

          {/* 3. How the Result Was Achieved Block (Editable bullet points) */}
          {resultsData.achievedThrough && resultsData.achievedThrough.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                How the Result Was Achieved
              </h3>
              <ul className="space-y-2.5">
                {resultsData.achievedThrough.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0c0c0e] border border-white/5 text-xs sm:text-sm text-white/80 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 4. Screenshot Proof Gallery (Prominently rendered) */}
          <div className="pt-4 border-t border-white/10">
            <ProofScreenshots
              screenshots={proofScreenshots}
              title={`Meta Ads Manager Proof Screenshots (${resultsData.clientName})`}
            />
          </div>

          {/* 5. Mandatory Source & Attribution Footer */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono text-white/50 leading-relaxed">
            {sourceText}
          </div>
        </div>
      )
    });
  }

  // 11. Lead Quality Notes
  if (project.leadQualityNotes) {
    dynamicSections.push({
      num: getNextNum(),
      title: "LEAD QUALITY ANALYSIS",
      content: (
        <p className="text-white/75 leading-relaxed text-base md:text-lg font-light">
          {project.leadQualityNotes}
        </p>
      )
    });
  }

  // 12. Screenshots Gallery (if provided directly on project)
  if (project.screenshots && project.screenshots.length > 0) {
    dynamicSections.push({
      num: getNextNum(),
      title: "CAMPAIGN SCREENSHOTS",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.screenshots.map((s, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e]">
              <div className="relative aspect-video">
                <Image src={s.url} alt={s.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              {s.caption && (
                <p className="p-3 text-[11px] text-white/50 text-center">{s.caption}</p>
              )}
            </div>
          ))}
        </div>
      )
    });
  }

  // 13. Key Learnings
  if (project.keyLearnings) {
    dynamicSections.push({
      num: getNextNum(),
      title: "KEY LEARNINGS",
      content: (
        <div className="p-6 rounded-2xl bg-[#0c0c0e] border border-white/5 border-l-4 border-l-[#3b82f6]">
          <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
            {project.keyLearnings}
          </p>
        </div>
      )
    });
  }

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <JsonLd data={jsonLd} />
      <CaseStudyTracker slug={project.slug} title={project.title} />
      <Navbar />

      <article className="pt-32 pb-24 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#3b82f6] transition-colors mb-16 text-sm uppercase tracking-widest font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <div className="mb-20">
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              PERFORMANCE CASE STUDY
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modular Structured Sections */}
          <div className="space-y-16 md:space-y-20">
            {dynamicSections.map((section) => (
              <section
                key={section.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 items-start pb-12 border-b border-white/5 last:border-b-0"
              >
                <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-3">
                  <span className="font-heading text-3xl font-black text-white/20">{section.num}</span>
                  <h2 className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest">
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-8">{section.content}</div>
              </section>
            ))}
          </div>

          {/* Bottom CTA & Internal Linking to Services */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                Discuss Your Campaign &rarr;
              </Link>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold uppercase tracking-widest">
                <Link
                  href="/#experience"
                  className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors"
                >
                  &larr; Selected Work
                </Link>
                <span className="text-white/20">|</span>
                <Link
                  href="/services/lead-generation"
                  className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#3b82f6] transition-colors"
                >
                  Lead Gen Service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-white/20">|</span>
                <Link
                  href="/services/meta-ads"
                  className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#3b82f6] transition-colors"
                >
                  Meta Ads Service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
