import { blogs } from "@/lib/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    return { title: "Article Not Found" };
  }

  const pageTitle = `${blog.title} | Shahal N`;
  const canonicalUrl = `${SITE_URL}/blog/${blog.slug}`;

  return {
    title: pageTitle,
    description: blog.metaDescription,
    keywords: [blog.primaryKeyword, "Performance Marketing", "Shahal N"],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      url: canonicalUrl,
      siteName: "Shahal N — Performance Marketer",
      images: [{ url: blog.image, width: 1200, height: 630, alt: blog.title }],
      locale: "en_IN",
      type: "article",
      publishedTime: new Date(blog.date).toISOString(),
      authors: [`${SITE_URL}/about`],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  // Structured Data / JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    image: [blog.image],
    datePublished: new Date(blog.date).toISOString(),
    dateModified: new Date(blog.date).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog.author,
        url: `${SITE_URL}/about`,
      },
    ],
    publisher: {
      "@type": "Person",
      name: "Shahal N",
      jobTitle: "Performance Marketer",
      url: SITE_URL,
    },
    description: blog.metaDescription,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `${SITE_URL}/blog/${blog.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      {/* Schema Injection */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [articleSchema, breadcrumbSchema],
        }}
      />

      <article className="pt-32 pb-24">
        {/* Article Header */}
        <header className="container mx-auto px-6 md:px-12 max-w-4xl mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#3b82f6] transition-colors mb-12 text-xs uppercase tracking-widest font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-6">
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> {blog.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/40 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {blog.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/40">{blog.readTime}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 pt-8 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-widest">By {blog.author}</p>
              <p className="text-xs text-white/40">Performance Marketer</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl mb-16">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c0e]">
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight 
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-white
              prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-white/90
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#3b82f6] prose-a:underline hover:prose-a:text-white
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-white/70 prose-li:my-2
              prose-ol:text-white/70"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Contextual Service Callout */}
          {blog.relatedServiceSlug && (
            <div className="mt-16 p-8 bg-[#0c0c0e] rounded-3xl border border-[#3b82f6]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest block mb-1">
                  RELATED SERVICE
                </span>
                <p className="text-white font-heading text-lg font-bold uppercase">
                  Need Help With {blog.relatedServiceSlug.replace("-", " ")}?
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Explore how we engineer and optimize these campaigns directly.
                </p>
              </div>
              <Link
                href={`/services/${blog.relatedServiceSlug}`}
                className="shrink-0 px-6 py-3 rounded-full bg-[#3b82f6] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                View Service &rarr;
              </Link>
            </div>
          )}

          {/* CTA Section at bottom of article */}
          <div className="mt-16 p-10 bg-gradient-to-br from-[#111116] to-[#050508] border border-white/10 rounded-3xl text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase mb-4">
              Want Expert Help With Your Performance Marketing?
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto text-sm sm:text-base font-light">
              Stop guessing with your ad budget. Let&apos;s build a data-driven customer acquisition engine for your business.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#3b82f6] text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-24 bg-[#08080b] border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-[#3b82f6]"></span>
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((related) => (
                <Link
                  href={`/blog/${related.slug}`}
                  key={related.slug}
                  className="group flex flex-col bg-[#111116] rounded-2xl border border-white/5 overflow-hidden hover:border-[#3b82f6]/30 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#3b82f6]/90 text-white text-[10px] uppercase tracking-widest font-bold backdrop-blur-md">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors line-clamp-2 leading-snug">
                      {related.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <span>{related.date}</span>
                      <span className="group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
