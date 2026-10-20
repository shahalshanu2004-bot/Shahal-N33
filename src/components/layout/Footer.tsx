"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { socialLinks } from "@/lib/data/socials";
import { trackEmailClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const serviceLinks = [
  { name: "Meta Ads", href: "/services/meta-ads" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "App Marketing", href: "/services/app-marketing" },
  { name: "Lead Generation", href: "/services/lead-generation" },
  { name: "Conversion Tracking", href: "/services/conversion-tracking" },
  { name: "Campaign Optimization", href: "/services/campaign-optimization" },
  { name: "Performance Strategy", href: "/services/performance-strategy" },
  { name: "SEO", href: "/services/seo" },
  { name: "Website Development", href: "/services/website-development" },
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "AI Video Marketing", href: "/services/ai-video-marketing" },
];

const pageLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer suppressHydrationWarning className="bg-[#050508] border-t border-[#3b82f6]/20">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="group">
              <span className="font-heading text-lg tracking-[0.2em] font-bold uppercase text-white/90 group-hover:text-white transition-colors">
                Shahal N<span className="text-[#3b82f6]">.</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mt-4">
              Performance Marketer.<br />Malappuram, Kerala.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                {
                  href: socialLinks.linkedin.url,
                  Icon: LinkedinIcon,
                  label: socialLinks.linkedin.ariaLabel,
                  onClick: undefined,
                },
                {
                  href: socialLinks.instagram.url,
                  Icon: InstagramIcon,
                  label: socialLinks.instagram.ariaLabel,
                  onClick: undefined,
                },
              ].map(({ href, Icon, label, onClick }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={onClick}
                  suppressHydrationWarning
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#3b82f6]/60 hover:text-[#3b82f6] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-[#3b82f6] transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 mb-5">Pages</h3>
            <ul className="space-y-3">
              {pageLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-[#3b82f6] transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a
                  suppressHydrationWarning
                  href={`mailto:${siteConfig.email}`}
                  onClick={() => trackEmailClick("footer")}
                  className="hover:text-[#3b82f6] transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  suppressHydrationWarning
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  onClick={() => trackPhoneClick("footer")}
                  className="hover:text-[#3b82f6] transition-colors duration-200"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location.locality}, {siteConfig.location.region}, {siteConfig.location.country}</li>
            </ul>
            <a
              suppressHydrationWarning
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("footer")}
              className="inline-block mt-6 px-5 py-2.5 rounded-full bg-[#3b82f6] text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/25 text-xs tracking-widest">
            © {new Date().getFullYear()} Shahal N. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/25 text-xs hover:text-[#3b82f6] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/25 text-xs hover:text-[#3b82f6] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
