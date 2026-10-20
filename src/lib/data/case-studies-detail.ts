export interface CaseStudyScreenshot {
  url: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyDetail {
  slug: string;
  title: string;
  pdfUrl?: string; // Only show "Download Case Study PDF" when pdfUrl is provided
  // Tabs: all optional; empty tabs are hidden
  overview?: {
    clientIndustry?: string;
    objective: string;
    role: string;
    timeline?: string;
    adSpend?: string;
  };
  strategy?: {
    strategyText: string;
    whatITested?: string;
    whatChangedOptimized?: string;
    executionScope?: string[];
  };
  screenshots?: CaseStudyScreenshot[];
  learnings?: {
    keyLearnings: string;
    leadQualityNotes?: string;
    scalingFramework?: string;
  };
  // App marketing special block
  isAppMarketing?: boolean;
  publicPlayDownloads?: string;
  myCampaignResults?: {
    spend?: string;
    cpi?: string;
    purchaseCost?: string;
    roas?: string;
  };
}

/*
 * TODO(shahal): Obtain written client permission and ensure all client logos, names,
 * customer phone numbers, and sensitive campaign account IDs are blurred before uploading
 * real screenshots into /public/images/case-studies/
 */
export const caseStudiesDetail: Record<string, CaseStudyDetail> = {
  "premium-real-estate": {
    slug: "premium-real-estate",
    title: "₹55 CR Premium Real Estate Project",
    overview: {
      clientIndustry: "Premium Residential Real Estate (Malappuram & Kozhikode, Kerala)",
      objective: "Generate qualified leads for a high-ticket ₹55 Cr premium real-estate development with strict buyer qualification.",
      role: "Performance Marketer",
      timeline: "Ongoing Campaign Architecture",
      adSpend: "₹33.9K",
    },
    strategy: {
      strategyText: "Meta Ads architecture combining high-intent interest targeting, lookalike clusters, and localized Malayalam and English creatives.",
      whatITested: "Tested 6 multi-hook creative angles (luxury lifestyle vs. investment appreciation vs. unit tour teasers) alongside Instant Form vs. landing page qualification funnels.",
      whatChangedOptimized: "Split campaigns into distinct regional clusters to eliminate budget leakage outside key affluent pin codes. Transitioned from broad targeting to verified buyer interest segments.",
      executionScope: [
        "Landing Page Funnel Engineering",
        "Server-side Meta Pixel & CAPI Tracking",
        "Meta Ads Management & Bid Optimization",
        "Geo-Fenced & Pin-Code Targeting",
        "Lead Verification & Disqualification Filters",
      ],
    },
    // No fake screenshots: empty array hides the screenshots tab
    screenshots: [],
    learnings: {
      keyLearnings: "In Kerala real estate, Malayalam video hooks communicating unit value combined with English property brochures delivered 73% lower cost per verified lead compared to generic image ads.",
      leadQualityNotes: "High-ticket buyer qualification achieved through mandatory multi-step questionnaire questions, weeding out low-intent curiosity clicks.",
      scalingFramework: "Continuous budget scaling focused on verified buyer pin-code clusters while rotating Malayalam creative hooks bi-weekly.",
    },
  },
  "rs-water-solutions": {
    slug: "rs-water-solutions",
    title: "RS Water Solutions",
    overview: {
      clientIndustry: "RS Water Solutions (Residential & Commercial Water Treatment)",
      objective: "Generate genuine local customer enquiries efficiently for water filtration and purification systems.",
      role: "Performance Marketer",
      timeline: "Local Direct-Response Campaign",
      adSpend: undefined, // // TODO(shahal): Add real ad spend if shareable
    },
    strategy: {
      strategyText: "Test two enquiry routes side by side: Instant Lead Form vs. Click-to-WhatsApp, identifying which generated higher conversion rates.",
      whatITested: "Direct Head-to-Head test: Meta Instant Lead Form with custom validation vs. Click-to-WhatsApp with automated pre-filled conversation prompts.",
      whatChangedOptimized: "Reallocated 70% of campaign budget directly into Click-to-WhatsApp after data proved a 20% lower cost per inquiry and substantially faster closing speed.",
      executionScope: [
        "Direct-Response Lead Generation Campaign Architecture",
        "Click-to-WhatsApp Funnel Integration",
        "Instant Form Field Qualification",
        "Hyperlocal Demographic & Geographic Targeting",
      ],
    },
    screenshots: [],
    learnings: {
      keyLearnings: "For high-trust local home services, WhatsApp conversational ads converted with less friction and higher close rates than standard lead forms.",
      leadQualityNotes: "WhatsApp conversation starters pre-qualified prospect requirements before sales consultation, reducing response lag from hours to minutes.",
      scalingFramework: "Expand geo-radius dynamically based on technician service coverage and technician route density.",
    },
  },
  cutekaari: {
    slug: "cutekaari",
    title: "CuteKaari — App Performance Marketing",
    isAppMarketing: true,
    publicPlayDownloads: "50K+ (Publicly displayed Google Play figure)",
    myCampaignResults: {
      spend: "₹27.83 lakh",
      cpi: "₹30.76",
      purchaseCost: "₹81.95",
      roas: "6.88x",
    },
    overview: {
      clientIndustry: "CuteKaari (Mobile Application & Digital Entertainment)",
      objective: "Drive app acquisition and optimize for meaningful downstream actions and active in-app conversions.",
      role: "App Performance Marketer",
      timeline: "15 Apr 2026 – 20 Oct 2026",
      adSpend: "₹27.83 lakh",
    },
    strategy: {
      strategyText: "Build campaigns around measurable app actions rather than optimizing only for reach. Structure ad sets around high-intent parent demographics.",
      whatITested: "Tested short-form gameplay vs. feature demonstration reels, comparing App Install optimization vs. In-App Purchase event optimization.",
      whatChangedOptimized: "Budget shifted dynamically toward top-converting Android devices and creative hooks that generated active engagement rather than idle installs.",
      executionScope: [
        "App Install Campaign Setup",
        "Meta App Events & SDK Verification",
        "Audience Testing & Lookalikes",
        "Malayalam-first Creative Angle Iterations",
      ],
    },
    screenshots: [],
    learnings: {
      keyLearnings: "Direct demonstration video hooks emphasizing app utility reduced CPI significantly while increasing Day-1 user retention.",
      leadQualityNotes: "Focus placed on downstream retention signals and post-install activation rather than raw low-cost ghost installs.",
    },
  },
  "relax-call": {
    slug: "relax-call",
    title: "Relax Call — App Performance Marketing",
    isAppMarketing: true,
    publicPlayDownloads: "10K+ (Publicly displayed Google Play figure)",
    myCampaignResults: {
      spend: "₹18.66 lakh",
      cpi: "₹53.91",
      purchaseCost: "₹181.03",
      roas: "1.87x",
    },
    overview: {
      clientIndustry: "Relax Call (Voice & Social Communication Mobile App)",
      objective: "App promotion campaigns focusing on downstream actions and purchase optimization rather than just installs.",
      role: "App Performance Marketer",
      timeline: "15 Apr 2026 – 20 Oct 2026",
      adSpend: "₹18.66 lakh",
    },
    strategy: {
      strategyText: "Structure campaigns around meaningful downstream actions instead of focusing only on app installs. Align creative messaging with core app utility.",
      whatITested: "Tested interest clusters in communication, entertainment, and social apps across diverse age brackets.",
      whatChangedOptimized: "Eliminated low-retention audience segments and reallocated ad spend into cohorts with higher repeat usage and purchase propensity.",
      executionScope: [
        "Cross-Platform App Marketing (Android + iOS)",
        "Conversion Event Mapping & Purchase Tracking",
        "Iterative Creative & Hook Testing",
        "Budget Reallocation to High-LTV Cohorts",
      ],
    },
    screenshots: [],
    learnings: {
      keyLearnings: "Downstream purchase optimization yields far higher lifetime value than raw install-volume bidding.",
      leadQualityNotes: "Optimized specifically toward accounts completing user registration and in-app purchase triggers.",
    },
  },
};
