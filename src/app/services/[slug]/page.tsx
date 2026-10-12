import { SITE_URL } from "../../../lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/data/services";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import { ArrowRight, CheckCircle2, AlertCircle, HelpCircle, Briefcase } from "lucide-react";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const pageTitle = service.seoTitle;
  const canonicalUrl = `${SITE_URL}/services/${slug}`;
  const description = service.seoDescription;

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
      type: "website",
      siteName: "Shahal N — Performance Marketer",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => getService(relatedSlug))
    .filter((s): s is typeof services[0] => s !== undefined)
    .slice(0, 3);

  const serviceTitle = service.slug.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/services/${service.slug}#breadcrumb`,
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
            "name": "Services",
            "item": `${SITE_URL}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": serviceTitle,
            "item": `${SITE_URL}/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}#service`,
        "name": serviceTitle,
        "serviceType": service.category,
        "description": service.seoDescription,
        "provider": {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          "name": "Shahal N",
          "jobTitle": "Performance Marketer",
          "url": SITE_URL
        },
        "url": `${SITE_URL}/services/${service.slug}`
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/services/${service.slug}#faq`,
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="bg-[#050508] min-h-screen">
      {/* JSON-LD Schema */}
      <JsonLd data={jsonLd} />

      {/* Dynamic Hero with semantic H1 */}
      <PageHero
        badge={service.category}
        title={service.heroHeadline}
        highlight={service.heroHighlight}
        description={service.intro1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: serviceTitle, href: `/services/${service.slug}` }
        ]}
      />

      {/* Intro section */}
      {service.intro2 && (
        <section className="pt-8 pb-20 bg-[#050508]">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              {service.intro2}
            </p>
          </div>
        </section>
      )}

      {/* What it Includes */}
      <section className="py-20 bg-[#0c0c0e] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              {service.whatItIncludesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whatItIncludes.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#050508] border border-white/5 hover:border-[#3b82f6]/30 hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <span className="text-[#3b82f6] text-xl mt-0.5">&rarr;</span>
                <p className="text-white/85 font-semibold tracking-wide text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Problems Solved */}
      {service.problemsSolved && service.problemsSolved.length > 0 && (
        <section className="py-24 bg-[#050508]">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3 block">
                STRATEGIC VALUE
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                {service.problemsSolvedTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.problemsSolved.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#0c0c0e] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-[#3b82f6] shrink-0" />
                    <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                      {item.problem}
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed pl-8 border-l border-white/10">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process / How I Work */}
      <section className="py-24 bg-[#0c0c0e] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3 block">
              EXECUTION FRAMEWORK
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              {service.howIWorkTitle}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {service.howIWork.map((step, i) => (
              <div key={i} className="flex items-center group">
                <div className="px-6 py-4 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/5 text-white font-bold tracking-widest text-xs uppercase hover:bg-[#3b82f6] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  {step}
                </div>
                {i < service.howIWork.length - 1 && (
                  <div className="hidden md:block w-6 md:w-10 h-[2px] bg-white/10 ml-4 md:ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="py-24 bg-[#050508]">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3 block">
                WHAT YOU RECEIVE
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                {service.deliverablesTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {service.deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#0c0c0e] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#3b82f6] shrink-0" />
                  <p className="text-white/80 font-medium text-sm md:text-base">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why It Matters / Key Focus */}
      <section className="py-24 bg-[#0c0c0e] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#3b82f6]/10 mb-8">
            <span className="w-3 h-3 rounded-full bg-[#3b82f6]" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-[#3b82f6] uppercase tracking-widest">
            {service.whyItMattersTitle}
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed">
            {service.whyItMattersDesc}
          </p>
        </div>
      </section>

      {/* Relevant Case Studies (Internal Linking) */}
      {service.relatedCaseStudies && service.relatedCaseStudies.length > 0 && (
        <section className="py-24 bg-[#050508]">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3 block">
                VALIDATED PERFORMANCE
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                RELEVANT CASE STUDIES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.relatedCaseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group p-8 rounded-3xl bg-[#0c0c0e] border border-white/5 hover:border-[#3b82f6]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>CASE STUDY</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-3 uppercase tracking-wider text-white group-hover:text-[#3b82f6] transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <p className="text-white/60 text-xs font-medium">{study.metric}</p>
                    <ArrowRight className="w-4 h-4 text-[#3b82f6] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-[#0c0c0e] border-y border-white/5">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3 block">
                GOT QUESTIONS?
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                {service.faqsTitle}
              </h2>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#050508] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <HelpCircle className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                    <h3 className="font-heading text-lg font-bold text-white tracking-wide">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-white/65 text-sm md:text-base leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service specific CTA */}
      <section className="py-24 bg-[#050508] border-b border-white/5 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-white">
            {service.ctaText}
          </h2>
          <p className="text-white/60 text-lg mb-10 font-light max-w-xl mx-auto">
            Discuss your acquisition objectives directly with Shahal N. No pitch decks, just actionable performance strategy.
          </p>
          <a
            suppressHydrationWarning
            href="https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#3b82f6] text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-white/20"
          >
            {service.ctaButtonText} &rarr;
          </a>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-24 bg-[#0c0c0e]">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold mb-12 uppercase tracking-widest text-center text-white">
              RELATED SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.slug}
                  href={`/services/${rs.slug}`}
                  className="group p-8 rounded-3xl bg-[#050508] border border-white/5 hover:border-[#3b82f6]/30 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-3 uppercase tracking-wider text-white group-hover:text-[#3b82f6] transition-colors">
                      {rs.slug.replace("-", " ")}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-3 leading-relaxed mb-6">
                      {rs.intro1}
                    </p>
                  </div>
                  <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global Footer CTA for all service pages */}
      <section className="py-24 bg-[#050508] border-t border-[#3b82f6]/20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#3b82f6]/10 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-2xl relative z-10">
          <h2 className="font-heading text-3xl font-black mb-6 uppercase tracking-tighter text-white">
            NOT SURE WHAT YOUR BUSINESS NEEDS?
          </h2>
          <p className="text-white/50 mb-10 text-lg font-light leading-relaxed">
            Tell me what you&apos;re trying to achieve and I&apos;ll help identify the right marketing approach.
          </p>
          <a
            suppressHydrationWarning
            href="https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%20need%20help%20figuring%20out%20the%20right%20approach%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold tracking-widest uppercase text-xs hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:text-[#3b82f6] transition-all duration-300"
          >
            LET&apos;S TALK &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
