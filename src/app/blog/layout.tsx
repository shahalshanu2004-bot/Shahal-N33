import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Best Digital Marketing Expert In Malappuram, Kerala",
  description: "Read performance marketing insights, Meta Ads guides, Google PPC tactics, and SEO strategies by Shahal N — Best Digital Marketing Expert in Malappuram, Kerala.",
  keywords: [
    "Best Digital Marketing Expert In Malappuram, Kerala",
    "Digital Marketing Blog Kerala",
    "Meta Ads Strategy Guide",
    "SEO Expert Insights Malappuram"
  ],
  alternates: {
    canonical: "https://shahaln.vercel.app/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog | Best Digital Marketing Expert In Malappuram, Kerala",
    description: "In-depth guides, campaign breakdowns, and strategic frameworks by Shahal N — Best Digital Marketing Expert in Malappuram, Kerala.",
    url: "https://shahaln.vercel.app/blog",
    siteName: "Shahal N",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
