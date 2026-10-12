"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ badge, title, highlight, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#3b82f6]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {breadcrumbs && (
          <div className="flex items-center gap-2 text-xs text-white/30 uppercase tracking-widest mb-8">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <a href={crumb.href} className="hover:text-[#3b82f6] transition-colors">{crumb.label}</a>
              </span>
            ))}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {badge && (
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-[#3b82f6]" />
              <span className="text-[#3b82f6] text-xs uppercase tracking-[0.3em] font-medium">{badge}</span>
            </div>
          )}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
            {title}
            {highlight && <span className="block text-[#3b82f6] italic font-serif">{highlight}</span>}
          </h1>
          {description && (
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
