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
import MobileStickyBar from "@/components/layout/MobileStickyBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shahal N. | Performance Marketer in Kerala | Meta & Google Ads",
    template: "%s | Shahal N",
  },
  description:
    "Looking for a performance marketer in Kerala? Shahal N. specializes in Meta Ads, Google Ads, mobile app marketing, lead generation, and conversion tracking.",
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
    title: "Shahal N. | Performance Marketer in Kerala | Meta & Google Ads",
    description:
      "Looking for a performance marketer in Kerala? Shahal N. specializes in Meta Ads, Google Ads, mobile app marketing, lead generation, and conversion tracking.",
    url: SITE_URL,
    siteName: "Shahal N — Performance Marketer",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Shahal N — Performance Marketer | Meta & Google Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahal N. | Performance Marketer in Kerala | Meta & Google Ads",
    description:
      "Looking for a performance marketer in Kerala? Shahal N. specializes in Meta Ads, Google Ads, mobile app marketing, lead generation, and conversion tracking.",
    images: [`${SITE_URL}/og-image.png`],
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
  verification: {
    google: "bTy15iju4DhOMSbaAMKvtYQAHSyBr1R2Xr9v6uaobj8",
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
          "Campaign Optimization",
          "Performance Strategy",
        ],
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Shahal N — Performance Marketer",
        url: SITE_URL,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "Country", name: "India" },
        ],
        serviceType: [
          "Meta Ads",
          "Google Ads",
          "App Marketing",
          "Lead Generation",
          "Conversion Tracking",
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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-[#050508] text-white selection:bg-[#3b82f6] selection:text-white overflow-x-hidden font-sans pb-16 md:pb-0`}
        suppressHydrationWarning
      >
        <ScrollTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <MobileStickyBar />
        <CookieConsent />
      </body>
    </html>
  );
}
