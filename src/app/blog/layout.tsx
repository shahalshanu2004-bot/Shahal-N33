import { SITE_URL } from "../../lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Best Digital Marketing Expert In Malappuram, Kerala",
  description: "Read performance marketing insights, Meta Ads guides, Google PPC tactics, and SEO strategies by Shahal N — Best Digital Marketing Expert in Malappuram, Kerala.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Digital Marketing Blog | Best Digital Marketing Expert In Malappuram, Kerala",
    description: "In-depth guides, campaign breakdowns, and strategic frameworks by Shahal N — Best Digital Marketing Expert in Malappuram, Kerala.",
    url: `${SITE_URL}/blog`,
    siteName: "Shahal N",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
