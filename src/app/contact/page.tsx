import { SITE_URL } from "../../lib/site";
﻿import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact Shahal N | Performance Marketer | Meta & Google Ads",
  description: "Get in touch with Shahal N — Performance Marketer. Schedule a consultation for Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking.",
  keywords: [
    "Contact Shahal N",
    "Hire Performance Marketer",
    "Performance Marketer in Kerala",
    "Meta Ads Consultant",
    "Google Ads Consultant"
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Shahal N | Performance Marketer | Meta & Google Ads",
    description: "Get in touch with Shahal N — Performance Marketer. Schedule a consultation for Meta Ads, Google Ads, app marketing, and conversion tracking.",
    url: `${SITE_URL}/contact`,
    siteName: "Shahal N — Performance Marketer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Shahal N | Performance Marketer | Meta & Google Ads",
    description: "Get in touch with Shahal N — Performance Marketer. Schedule a consultation for Meta Ads, Google Ads, app marketing, and conversion tracking.",
  },
};

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function ContactPage() {
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
        "name": "Contact",
        "item": `${SITE_URL}/contact`
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
        badge="Let's Collaborate"
        title="Start the"
        highlight="Conversation."
        description="Ready to transform your digital performance? Fill out the form below or reach out directly — I respond within 24 hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick contact */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { label: "Email", value: "shahalnwork@gmail.com", href: "mailto:shahalnwork@gmail.com" },
                    { label: "Phone / WhatsApp", value: "+91 759 305 2256", href: "tel:+917593052256" },
                    { label: "Location", value: "Malappuram, Kerala, India", href: null },
                  ].map((item) => (
                    <div key={item.label} className="p-5 rounded-[16px] bg-white/[0.02] border border-white/8 hover:border-[#3b82f6]/30 transition-colors">
                      <p className="text-xs uppercase tracking-widest text-white/30 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-[#3b82f6] transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                suppressHydrationWarning
                href="https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold tracking-widest uppercase text-sm hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Chat on WhatsApp
              </a>

              {/* Social links */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Follow Along</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.linkedin.com/in/shahal-n/", Icon: LinkedinIcon, label: "LinkedIn" },
                    { href: "https://www.instagram.com/shahal_n/", Icon: InstagramIcon, label: "Instagram" }
                  ].map(({ href, Icon, label }) => (
                    <a key={label} suppressHydrationWarning href={href} target="_blank" rel="noreferrer" aria-label={label}
                      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Full Name", type: "text" },
                    { id: "email", label: "Email Address", type: "email" }
                  ].map(({ id, label, type }) => (
                    <div key={id} className="relative group">
                      <input id={id} type={type} placeholder=" " required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-[14px] px-5 pt-7 pb-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/60 transition-all peer placeholder:text-transparent" />
                      <label htmlFor={id} className="absolute left-5 top-5 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 peer-focus:top-2.5 peer-focus:text-[9px] peer-focus:text-[#3b82f6] peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[9px]">{label}</label>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input id="phone" type="tel" placeholder=" " required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-[14px] px-5 pt-7 pb-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/60 transition-all peer placeholder:text-transparent" />
                    <label htmlFor="phone" className="absolute left-5 top-5 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 peer-focus:top-2.5 peer-focus:text-[9px] peer-focus:text-[#3b82f6] peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[9px]">Phone / WhatsApp</label>
                  </div>
                  <div className="relative">
                    <select defaultValue="" required className="w-full bg-white/[0.03] border border-white/10 rounded-[14px] px-5 pt-7 pb-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/60 transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="bg-[#0a0a0a]">Select service</option>
                      {["Meta Ads", "Google Ads", "SEO", "Social Media", "Web Development", "AI Automation", "Branding", "Marketing Strategy", "Full Package"].map(s => (
                        <option key={s} value={s.toLowerCase()} className="bg-[#0a0a0a]">{s}</option>
                      ))}
                    </select>
                    <label className="absolute left-5 top-2.5 text-[#3b82f6]/60 text-[9px] uppercase tracking-widest">Service Needed</label>
                  </div>
                </div>
                <div className="relative group">
                  <textarea id="message" rows={6} placeholder=" " required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[14px] px-5 pt-7 pb-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/60 transition-all resize-none peer placeholder:text-transparent" />
                  <label htmlFor="message" className="absolute left-5 top-5 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 peer-focus:top-2.5 peer-focus:text-[9px] peer-focus:text-[#3b82f6] peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[9px]">Project Details & Goals</label>
                </div>
                <button type="submit" className="w-full py-4 rounded-full bg-[#3b82f6] text-black font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
