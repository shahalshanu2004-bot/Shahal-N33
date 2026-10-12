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
    default: "Shahal N | Performance Marketer | Meta & Google Ads",
    template: "%s | Shahal N",
  },
  description:
    "Shahal N offers performance marketing services focused on Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking for businesses across Kerala, India, and relevant GCC markets.",
  keywords: [
    "Performance Marketer",
    "Performance Marketing Specialist",
    "Meta Ads Specialist",
    "Google Ads Specialist",
    "App Marketing Specialist",
    "Lead Generation Specialist",
    "Conversion Tracking Specialist",
    "Performance Marketer in Kerala",
    "Performance Marketing in India",
    "Performance Marketing in UAE",
    "Performance Marketing in GCC",
    "Digital Marketing Specialist in Kerala",
    "Shahal N"
  ],
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
    title: "Shahal N | Performance Marketer | Meta & Google Ads",
    description:
      "Shahal N is a performance marketer focused on Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking to help businesses improve campaign performance.",
    url: SITE_URL,
    siteName: "Shahal N — Performance Marketer",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Shahal N | Performance Marketer | Meta & Google Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahal N | Performance Marketer | Meta & Google Ads",
    description:
      "Shahal N is a performance marketer focused on Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking to help businesses improve campaign performance.",
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"],
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
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Malappuram, Kerala, India",
    "geo.position": "11.0728;76.0740",
    "ICBM": "11.0728, 76.0740",
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
