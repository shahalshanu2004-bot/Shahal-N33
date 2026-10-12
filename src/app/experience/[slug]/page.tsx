import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experienceCategories, getExperienceCategory } from "@/lib/data/experience-categories";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return experienceCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getExperienceCategory(slug);
  if (!category) return {};

  const pageTitle = `${category.title} Experience | Shahal N — Performance Marketer`;
  const canonicalUrl = `https://shahaln.com/experience/${slug}`;
  
  return {
    title: pageTitle,
    description: category.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: category.description,
      url: canonicalUrl,
      type: "website",
      siteName: "Shahal N — Performance Marketer",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: category.description,
    },
  };
}

export default async function ExperienceCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getExperienceCategory(slug);
  
  if (!category) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Experience",
        "item": "https://shahaln.com/#experience"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.title,
        "item": `https://shahaln.com/experience/${category.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        badge="EXPERIENCE"
        title={category.title}
        highlight="Domain"
        description={category.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experience", href: "/#experience" }, { label: category.title, href: `/experience/${category.slug}` }]}
      />

      <article className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Link href="/#experience" className="inline-flex items-center gap-2 text-white/40 hover:text-[#3b82f6] transition-colors mb-12 text-xs uppercase tracking-widest font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Experience
          </Link>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-heading text-3xl font-black uppercase text-white mb-6">Overview</h2>
            <p className="text-white/70 leading-relaxed mb-16">{category.content}</p>
          </div>

          <h2 className="font-heading text-3xl font-black uppercase text-white mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.howItWorks.map((step, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all group">
                <div className="w-12 h-12 rounded-full border border-[#3b82f6] flex items-center justify-center text-[#3b82f6] font-heading font-bold text-xl mb-6 group-hover:bg-[#3b82f6] group-hover:text-black transition-colors">
                  {step.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-[#3b82f6] transition-colors">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-10 bg-gradient-to-br from-[#111116] to-[#050508] border border-white/10 rounded-3xl text-center">
            <h3 className="font-heading text-3xl font-black text-white uppercase mb-4">Need help with {category.title}?</h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Partner with us to scale your business using data-driven digital marketing.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#3b82f6] text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
