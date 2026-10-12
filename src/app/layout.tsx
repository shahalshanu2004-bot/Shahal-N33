import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";

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
        "name": "Shahal N",
        "jobTitle": "Performance Marketer",
        "description": "Shahal N is a performance marketer focused on Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking.",
        "url": SITE_URL,
        "image": `${SITE_URL}/favicon.ico`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Malappuram",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Kerala"
          },
          {
            "@type": "Country",
            "name": "India"
          },
          {
            "@type": "Country",
            "name": "United Arab Emirates"
          },
          {
            "@type": "Country",
            "name": "Saudi Arabia"
          },
          {
            "@type": "Country",
            "name": "Qatar"
          }
        ],
        "knowsAbout": [
          "Performance Marketing",
          "Meta Ads",
          "Google Ads",
          "App Marketing",
          "Lead Generation",
          "Conversion Tracking",
          "Campaign Optimization",
          "Search Engine Optimization (SEO)"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/shahal-n/",
          "https://www.instagram.com/shahal_n/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": "Shahal N — Performance Marketer",
        "url": SITE_URL,
        "inLanguage": "en-IN",
        "publisher": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-[#050508] text-white selection:bg-[#3b82f6] selection:text-white overflow-x-hidden font-sans`}
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
