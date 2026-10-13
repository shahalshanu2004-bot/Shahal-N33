import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL, siteConfig } from "@/lib/site";
import { homeFaqs } from "@/lib/data/faqs";
import JsonLd from "@/components/ui/JsonLd";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";
import ScrollTracker from "@/components/analytics/ScrollTracker";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Performance Marketer in Kerala | Meta & Google Ads – Shahal N",
    template: "%s | Shahal N",
  },
  description:
    "Meta & Google Ads specialist in Malappuram, Kerala. Lead generation and app install campaigns with measurable results. Get a free ad audit.",
  authors: [{ name: "Shahal N", url: SITE_URL }],
  creator: "Shahal N",
  publisher: "Shahal N",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Performance Marketer in Kerala | Meta & Google Ads – Shahal N",
    description:
      "Meta & Google Ads specialist in Malappuram, Kerala. Lead generation and app install campaigns with measurable results. Get a free ad audit.",
    url: SITE_URL,
    siteName: "Shahal N — Performance Marketer",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketer in Kerala | Meta & Google Ads – Shahal N",
    description:
      "Meta & Google Ads specialist in Malappuram, Kerala. Lead generation and app install campaigns with measurable results. Get a free ad audit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: siteConfig.name,
        jobTitle: "Performance Marketer",
        description: siteConfig.description,
        url: SITE_URL,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        image: `${SITE_URL}/favicon.ico`,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "Qatar" },
        ],
        knowsAbout: [
          "Meta Ads",
          "Google Ads",
          "App Marketing",
          "Lead Generation",
          "Conversion Tracking",
          "ROAS Optimization",
          "Search Engine Optimization (SEO)",
        ],
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
          siteConfig.socials.github,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Shahal N — Performance Marketing Services",
        url: SITE_URL,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "AdministrativeArea", name: "GCC" },
        ],
        serviceType: [
          "Meta Ads Management",
          "Google Ads Management",
          "App Performance Marketing",
          "Lead Generation Funnels",
          "Conversion Tracking & CAPI Setup",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: siteConfig.shortTitle,
        url: SITE_URL,
        inLanguage: "en-IN",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd data={jsonLd} />
        <AnalyticsScripts />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-[#050508] text-white selection:bg-[#3b82f6] selection:text-white overflow-x-hidden font-sans`}
        suppressHydrationWarning
      >
        <ScrollTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
