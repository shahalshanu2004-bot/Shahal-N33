import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { portfolioProjects, projectCategories } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Campaign Portfolio | Performance Marketer | Shahal N",
  description: "Explore performance marketing portfolio by Shahal N. View Meta Ads, Google Ads, App Marketing, and Lead Generation client projects and campaigns.",
  keywords: [
    "Performance Marketing Portfolio",
    "Meta Ads Portfolio",
    "App Marketing Portfolio",
    "Lead Generation Projects",
    "Shahal N Portfolio"
  ],
  alternates: { canonical: "https://shahaln.vercel.app/portfolio" },
  openGraph: {
    title: "Campaign Portfolio | Performance Marketer | Shahal N",
    description: "Explore performance marketing portfolio by Shahal N. View Meta Ads, Google Ads, App Marketing, and Lead Generation client projects and campaigns.",
    url: "https://shahaln.vercel.app/portfolio",
    siteName: "Shahal N — Performance Marketer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Portfolio | Performance Marketer | Shahal N",
    description: "Explore performance marketing portfolio by Shahal N. View Meta Ads, Google Ads, App Marketing, and Lead Generation client projects and campaigns.",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shahaln.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://shahaln.vercel.app/portfolio"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        badge="Selected Campaign Work"
        title="Projects That"
        highlight="Deliver Results."
        description="A curated selection of campaigns, strategies, and digital projects that have driven real business outcomes for real brands."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }]}
      />

      {/* Filter + Grid */}
      <section className="py-24 bg-[#050508]">
        <div className="container mx-auto px-6 md:px-12">
          {/* Category pills (static display) */}
          <div className="flex flex-wrap gap-3 mb-12">
            {projectCategories.map((cat) => (
              <span key={cat} className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium border transition-all cursor-pointer ${cat === "All" ? "bg-[#3b82f6] text-white border-[#3b82f6]" : "bg-transparent text-white/50 border-white/10 hover:border-[#3b82f6] hover:text-[#3b82f6]"}`}>
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project) => (
              <div key={project.slug} className="group rounded-[20px] overflow-hidden border border-white/8 hover:border-[#3b82f6]/40 transition-all duration-500 bg-[#0c0c0e]">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/30 text-[#3b82f6] text-xs uppercase tracking-widest font-bold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs text-white/40">{project.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-[#3b82f6] transition-colors text-white uppercase tracking-wider">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>
                  
                  {project.myWork && (
                    <div className="mb-6 pt-4 border-t border-white/8">
                      <p className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest mb-3">MY WORK</p>
                      <div className="flex flex-wrap gap-2">
                        {project.myWork.map(work => (
                          <div key={work} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                            <span className="text-[#3b82f6] text-[10px]">✓</span>
                            <span className="text-xs text-white/70">{work}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-white/8">
                    <div>
                      <p className="font-heading text-2xl font-black text-[#3b82f6]">{project.metric}</p>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{project.metricLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050508] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">
            WANT SIMILAR <span className="text-[#3b82f6]">RESULTS?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg font-light">Let&apos;s build a campaign strategy tailored to your business goals.</p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3b82f6] text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Start Your Campaign
          </a>
        </div>
      </section>
    </>
  );
}
