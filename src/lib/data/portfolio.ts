export const portfolioProjects = [
  {
    slug: "premium-real-estate",
    title: "Premium Real Estate",
    category: "Meta Ads",
    tags: ["Meta Ads", "Lead Generation", "Real Estate"],
    description: "Iterative v1 → v2 scaling across regional markets to drive sustainable enquiries for a ₹55 CR project.",
    myWork: ["Landing Page", "Tracking", "Meta Ads", "Geo Targeting", "Lead Generation", "Optimization", "Reporting"],
    challenge: "Generate high-intent real estate leads efficiently across multiple geographic clusters.",
    result: "Best-performing setup delivered leads at 73% lower cost.",
    metric: "239",
    metricLabel: "Leads Generated",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  },
  {
    slug: "rs-water-solutions",
    title: "RS Water Solutions",
    category: "Meta Ads",
    tags: ["Meta Ads", "WhatsApp", "Lead Generation"],
    description: "A split test identifying the most cost-efficient acquisition channel between Instant Forms and WhatsApp.",
    myWork: ["Lead Generation", "Instant Form Testing", "WhatsApp Acquisition", "Audience Testing", "Campaign Optimization", "Performance Analysis"],
    challenge: "Find the cheapest route to generate qualified enquiries without audience saturation.",
    result: "Click-to-WhatsApp proved 20% cheaper at ₹12.01 per conversion.",
    metric: "368",
    metricLabel: "Conversions",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  },
  {
    slug: "cutekaari",
    title: "CuteKaari",
    category: "App Marketing",
    tags: ["App Marketing", "Meta Ads", "Conversion Optimization"],
    description: "Malayalam-first messaging and creative testing focusing on app promotion and audience refinement.",
    myWork: ["App Marketing", "SDK / Event Tracking", "Audience Testing", "Creative Optimization", "Purchase/Event Analysis", "Campaign Optimization"],
    challenge: "Reduce dependence on a single creative format while maintaining steady app growth.",
    result: "Rigorous testing of event data to continuously optimize the acquisition loop.",
    metric: "50K+",
    metricLabel: "Public Play Downloads",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  },
  {
    slug: "relax-call",
    title: "Relax Call",
    category: "App Marketing",
    tags: ["App Marketing", "Purchase Optimization", "Meta Ads"],
    description: "Purchase-oriented conversion tracking and platform comparison for an iOS & Android app.",
    myWork: ["App Marketing", "SDK / Event Tracking", "Purchase Optimization", "Audience Testing", "Creative Testing", "Performance Analysis"],
    challenge: "Optimize budget toward downstream action quality rather than top-of-funnel install volume.",
    result: "Data-driven budget allocation based on actual purchase events.",
    metric: "10K+",
    metricLabel: "Public Play Downloads",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  },
  {
    slug: "al-saud-opportunities",
    title: "Al Saud Opportunities",
    category: "Selected Work",
    tags: ["Meta Ads", "Lead Generation"],
    description: "Targeted Meta Ads campaign for a placement consultancy achieving high-intent inquiries.",
    myWork: ["Meta Ads", "Audience Targeting", "Lead Generation"],
    challenge: "Generate high-intent overseas job applicants at minimal cost.",
    result: "Delivered qualified pipeline below industry benchmarks.",
    metric: "119",
    metricLabel: "Inquiries",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    year: "2024"
  },
  {
    slug: "ldf-wandoor-election",
    title: "LDF Wandoor",
    category: "Political Campaign",
    tags: ["Meta Ads", "Geo-Targeting", "Political"],
    description: "Strictly factual digital operations case study documenting geo-targeted reach and frequency.",
    challenge: "Saturate voter awareness within a single constituency using precision targeting.",
    result: "Reached targeted demographic efficiently with strong budget utilization.",
    metric: "5.16L+",
    metricLabel: "Voters Reached",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  }
];

export const projectCategories = ["All", ...new Set(portfolioProjects.map(p => p.category))];

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  myWork?: string[];
  challenge: string;
  result: string;
  metric: string;
  metricLabel: string;
  image: string;
  year: string;
  myRole?: string;
  campaignDuration?: string;
  adSpend?: string;
  conversionDefinition?: string;
  myCampaignResults?: string;
}
