import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahaln.vercel.app"),
  title: {
    default: "Shahal N | Performance Marketer | Meta & Google Ads",
    template: "%s | Shahal N",
  },
  description:
    "Shahal N is a performance marketer focused on Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking to help businesses improve campaign performance.",
  keywords: [
    "Performance Marketer",
    "Performance Marketing Specialist",
    "Meta Ads Specialist",
    "Google Ads Specialist",
    "App Marketing Specialist",
    "Lead Generation Specialist",
    "Conversion Tracking Specialist",
    "Performance Marketer in Kerala",
    "Performance Marketer in Malappuram",
    "Digital Marketing Specialist in Kerala",
    "Meta Ads Specialist in Kerala",
    "Shahal N"
  ],
  authors: [{ name: "Shahal N", url: "https://shahaln.vercel.app" }],
  creator: "Shahal N",
  publisher: "Shahal N",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://shahaln.vercel.app",
  },
  openGraph: {
    title: "Shahal N | Performance Marketer | Meta & Google Ads",
    description:
      "Shahal N is a performance marketer focused on Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking to help businesses improve campaign performance.",
    url: "https://shahaln.vercel.app",
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
        "@id": "https://shahaln.vercel.app/#person",
        "name": "Shahal N",
        "jobTitle": "Performance Marketer",
        "description": "Shahal N is a performance marketer focused on Meta Ads, Google Ads, app marketing, lead generation, and conversion tracking.",
        "url": "https://shahaln.vercel.app",
        "image": "https://shahaln.vercel.app/favicon.ico",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Malappuram",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
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
        "@id": "https://shahaln.vercel.app/#website",
        "name": "Shahal N — Performance Marketer",
        "url": "https://shahaln.vercel.app",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": "https://shahaln.vercel.app/#person"
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
