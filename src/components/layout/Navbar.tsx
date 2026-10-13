"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Case Studies",
    href: "/case-studies",
    children: [
      { name: "CuteKaari", href: "/case-studies/cutekaari" },
      { name: "Relax Call", href: "/case-studies/relax-call" },
      { name: "Premium Real Estate", href: "/case-studies/premium-real-estate" },
      { name: "RS Water Solutions", href: "/case-studies/rs-water-solutions" },
    ]
  },
  {
    name: "Services",
    href: "/#services",
    categories: [
      {
        title: "PERFORMANCE MARKETING",
        items: [
          { name: "Meta Ads", href: "/services/meta-ads" },
          { name: "Google Ads", href: "/services/google-ads" },
          { name: "App Marketing", href: "/services/app-marketing" },
          { name: "Lead Generation", href: "/services/lead-generation" },
          { name: "Conversion Tracking", href: "/services/conversion-tracking" },
          { name: "Campaign Optimization", href: "/services/campaign-optimization" },
          { name: "Performance Strategy", href: "/services/performance-strategy" },
        ]
      },
      {
        title: "DIGITAL & AI",
        items: [
          { name: "SEO", href: "/services/seo" },
          { name: "Website Development", href: "/services/website-development" },
          { name: "Content Creation", href: "/services/content-creation" },
          { name: "AI Automation", href: "/services/ai-automation" },
          { name: "AI Video Marketing", href: "/services/ai-video-marketing" },
        ]
      }
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="group flex-shrink-0">
            <span className="font-heading text-base tracking-[0.2em] font-bold uppercase text-white/90 group-hover:text-white transition-colors">
              Shahal N<span className="text-[#3b82f6]">.</span>
            </span>
          </Link>

          {/* Desktop nav & button */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) =>
                link.children || link.categories ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={link.href} className="group relative py-1 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:text-[#3b82f6]">
                      <span>{link.name}</span>
                      <span className="text-[7px] transition-transform duration-200 group-hover:translate-y-0.5">▼</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full" />
                    </Link>
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full left-0 pt-3 ${link.categories ? "w-[400px]" : "w-64"}`}
                        >
                          <div className="bg-[#0a0a0c]/95 backdrop-blur-xl border border-white/10 rounded-[16px] p-4 shadow-2xl shadow-black/80">
                            {link.children ? (
                              link.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-2.5 text-xs text-white/60 hover:text-[#3b82f6] hover:bg-white/[0.04] rounded-[10px] transition-all duration-200"
                                >
                                  {child.name}
                                </Link>
                              ))
                            ) : link.categories ? (
                              <div className="flex gap-6">
                                {link.categories.map((category, idx) => (
                                  <div key={idx} className="flex-1">
                                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3 px-2">
                                      {category.title}
                                    </h4>
                                    <div className="flex flex-col gap-1">
                                      {category.items.map((item) => (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          className="block px-2 py-2 text-xs text-white/70 hover:text-[#3b82f6] hover:bg-white/[0.04] rounded-lg transition-all duration-200"
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.name} href={link.href} className="group relative py-1 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-[#3b82f6]">
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              )}
            </div>

            <a
              suppressHydrationWarning
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("navbar_desktop")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3b82f6] text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-black hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center text-white/70" aria-label="Menu">
            <div className="flex flex-col gap-1.5">
              <span className={`block w-5 h-[1.5px] bg-current transition-all ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#050505]/98 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)} className="block text-sm uppercase tracking-widest text-white/60 hover:text-[#3b82f6] transition-colors py-1">
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {link.children.map(child => (
                        <Link key={child.name} href={child.href} onClick={() => setMenuOpen(false)} className="text-xs text-white/40 hover:text-[#3b82f6] transition-colors">
                          → {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.categories && (
                    <div className="pl-4 mt-3 flex flex-col gap-4">
                      {link.categories.map((cat, idx) => (
                        <div key={idx}>
                          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">{cat.title}</p>
                          <div className="flex flex-col gap-2 pl-2">
                            {cat.items.map(item => (
                              <Link key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="text-xs text-white/40 hover:text-[#3b82f6] transition-colors">
                                → {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                suppressHydrationWarning
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  trackWhatsAppClick("navbar_mobile");
                  setMenuOpen(false);
                }}
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#3b82f6] text-white font-bold text-xs tracking-widest uppercase w-fit hover:bg-white hover:text-black transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
