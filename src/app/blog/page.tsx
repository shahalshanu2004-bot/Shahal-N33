import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { blogs } from "@/lib/data/blog";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing Blog & Insights | Shahal N",
  description: "Practical performance marketing insights by Shahal N: Meta Ads strategies, Google Ads optimization, conversion tracking, app marketing, and lead generation.",
  keywords: [
    "Performance Marketing Blog",
    "Meta Ads Guide",
    "Google Ads Optimization",
    "Conversion Tracking Tips",
    "Lead Generation Strategies",
    "Shahal N"
  ],
  alternates: { canonical: "https://shahaln.vercel.app/blog" },
  openGraph: {
    title: "Performance Marketing Blog & Insights | Shahal N",
    description: "Practical performance marketing insights by Shahal N: Meta Ads strategies, Google Ads optimization, conversion tracking, app marketing, and lead generation.",
    url: "https://shahaln.vercel.app/blog",
    siteName: "Shahal N — Performance Marketer",
    images: [{ url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Blog & Insights | Shahal N",
    description: "Practical performance marketing insights by Shahal N: Meta Ads strategies, Google Ads optimization, conversion tracking, app marketing, and lead generation.",
  },
};

export default function BlogPage() {
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
        "name": "Blog",
        "item": "https://shahaln.vercel.app/blog"
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
        badge="Insights & Strategies"
        title="Performance Marketing"
        highlight="Insights."
        description="Explore practical performance marketing strategies, Meta Ads breakdowns, Google Ads optimization tips, conversion tracking workflows, and lead generation architectures."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]}
      />

      <section className="py-24 bg-[#050508]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {blogs.map((blog) => (
              <article 
                key={blog.slug} 
                className="group relative flex flex-col bg-[#0c0c0e] rounded-3xl border border-white/10 overflow-hidden hover:border-[#3b82f6]/40 transition-all duration-500"
              >
                <Link href={`/blog/${blog.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${blog.title}`}>
                  <span className="sr-only">Read More about {blog.title}</span>
                </Link>
                
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-[0.33,1,0.68,1]"
                    style={{ backgroundImage: `url('${blog.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#3b82f6]/90 text-white text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 backdrop-blur-md">
                      <Tag className="w-3 h-3" />
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#3b82f6] transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-white/60 leading-relaxed mb-8 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mt-auto group-hover:translate-x-2 transition-transform duration-300">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
