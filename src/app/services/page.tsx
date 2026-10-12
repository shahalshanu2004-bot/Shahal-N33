import { SITE_URL } from "../../lib/site";
﻿import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { services } from "@/lib/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Marketing Services | Meta & Google Ads | Shahal N",
  description: "Explore performance marketing services by Shahal N: Meta Ads, Google Ads, App Marketing, Lead Generation, Conversion Tracking, Campaign Optimization, and SEO.",
  keywords: [
    "Performance Marketing Services",
    "Meta Ads Services",
    "Google Ads Services",
    "App Marketing Services",
    "Lead Generation Services",
    "Conversion Tracking Services",
    "Shahal N Services"
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Performance Marketing Services | Meta & Google Ads | Shahal N",
    description: "Explore performance marketing services by Shahal N: Meta Ads, Google Ads, App Marketing, Lead Generation, Conversion Tracking, and Campaign Optimization.",
    url: `${SITE_URL}/services`,
    siteName: "Shahal N — Performance Marketer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Services | Meta & Google Ads | Shahal N",
    description: "Explore performance marketing services by Shahal N: Meta Ads, Google Ads, App Marketing, Lead Generation, Conversion Tracking, and Campaign Optimization.",
  },
};

export default function ServicesPage() {
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
        "name": "Services",
        "item": `${SITE_URL}/services`
      }
    ]
  };

  return (
    <main className="bg-[#050508] min-h-screen">
      <JsonLd data={jsonLd} />



      <PageHero
        badge="WHAT I DO"
        title="SERVICES BUILT FOR"
        highlight="MEASURABLE GROWTH."
        description="Every service is engineered to deliver quantifiable results — not vanity metrics, but leads, conversions, and sustainable revenue."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      {/* Services Grid */}
      <section className="py-24 bg-[#050508]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group relative p-8 rounded-3xl bg-[#0c0c0e] border border-white/5 hover:border-[#3b82f6]/40 transition-all duration-500 overflow-hidden flex flex-col shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3b82f6]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3b82f6] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="relative z-10 flex flex-col flex-1">
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-3">{service.category}</p>
                  <h2 className="font-heading text-2xl font-bold mb-4 uppercase tracking-wider text-white group-hover:text-[#3b82f6] transition-colors">{service.slug.replace("-", " ")}</h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">{service.intro1}</p>

                  <ul className="space-y-3 mb-8">
                    {service.whatItIncludes.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {service.whatItIncludes.length > 3 && (
                      <li className="text-xs text-white/30 italic pl-4">+ more</li>
                    )}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#3b82f6] hover:gap-4 transition-all duration-300"
                  >
                    Explore Service &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0c0c0e] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white">
            NOT SURE WHAT YOUR <span className="text-[#3b82f6]">BUSINESS NEEDS?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg font-light leading-relaxed">
            Tell me what you&apos;re trying to achieve and I&apos;ll help identify the right marketing approach.
          </p>
          <a suppressHydrationWarning href="https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%20need%20help%20figuring%20out%20the%20right%20approach%20for%20my%20business." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3b82f6] text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors duration-300">
            Let&apos;s Talk &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
