import type { Metadata } from "next";
import { experienceProjects } from "@/lib/data/experience";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return experienceProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = experienceProjects.find((p) => p.slug === slug);
  if (!project) return {};

  const pageTitle = `${project.title} | Performance Marketing Case Study | Shahal N`;
  const canonicalUrl = `https://shahaln.com/case-studies/${slug}`;
  const description = `${project.title}: ${project.objective} Results: ${project.result} (${project.resultLabel}). Performance marketing strategy and execution by Shahal N.`;

  return {
    title: pageTitle,
    description: description,
    keywords: [...project.tags, "Performance Marketing Case Study", "Shahal N Case Studies", "Meta Ads Results"],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://shahaln.com/case-studies/${project.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://shahaln.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://shahaln.com/case-studies"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://shahaln.com/case-studies/${project.slug}`
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": `https://shahaln.com/case-studies/${project.slug}#work`,
        "name": project.title,
        "headline": project.title,
        "description": `${project.objective} Result: ${project.result} (${project.resultLabel})`,
        "author": {
          "@type": "Person",
          "@id": "https://shahaln.com/#person",
          "name": "Shahal N",
          "jobTitle": "Performance Marketer"
        },
        "publisher": {
          "@id": "https://shahaln.com/#person"
        },
        "url": `https://shahaln.com/case-studies/${project.slug}`
      }
    ]
  };

  const sections = [
    {
      num: "01",
      title: "PROJECT",
      content: (
        <>
          <p className="font-heading text-2xl mb-2">{project.title}</p>
          <p className="text-[#3b82f6] uppercase tracking-widest text-xs font-bold">{project.category}</p>
        </>
      ),
    },
    {
      num: "02",
      title: "THE BRIEF",
      content: <p className="text-white/70 leading-relaxed text-base md:text-lg">{project.objective}</p>,
    },
    {
      num: "03",
      title: "MY ROLE",
      content: <p className="text-white/80 leading-relaxed font-bold text-base md:text-lg">{project.role}</p>,
    },
    {
      num: "04",
      title: "STRATEGY",
      content: <p className="text-white/70 leading-relaxed text-base md:text-lg">{project.strategy}</p>,
    },
    {
      num: "05",
      title: "EXECUTION",
      content: <p className="text-white/70 leading-relaxed text-base md:text-lg">{project.execution}</p>,
    },
    {
      num: "06",
      title: "MY WORK",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-white/70 text-base md:text-lg">
          {project.myWork.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      num: "07",
      title: "RESULTS",
      content: (
        <div>
          <p className="text-[#3b82f6] font-heading text-3xl md:text-5xl font-black mb-2">{project.result}</p>
          <p className="text-white/50 text-sm tracking-widest uppercase font-bold">{project.resultLabel}</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="pt-32 pb-24 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#3b82f6] transition-colors mb-16 text-sm uppercase tracking-widest font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <div className="mb-24">
            <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-widest mb-4 block">
              Case Study
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-20">
            {sections.map((section) => (
              <section
                key={section.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
              >
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                  <span className="font-heading text-4xl font-black text-white/20">{section.num}</span>
                  <h2 className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest">
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-9">{section.content}</div>
              </section>
            ))}
          </div>

          {/* Bottom CTA & Navigation */}
          <div className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Discuss Your Campaign &rarr;
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
            >
              Explore Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
