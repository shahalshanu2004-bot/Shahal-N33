export interface CaseStudyScreenshot {
  url: string;
  alt: string;
  caption?: string;
}

export interface ExperienceProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  role: string;
  myRole?: string; // Optional "my role" line
  clientIndustry?: string;
  timeline?: string; // e.g. "6 Weeks"
  campaignDuration?: string | null; // Optional campaign duration
  adSpend?: string | null; // // TODO: add real ad spend if shareable
  cpi?: string | null; // // TODO: add real CPI for app campaigns
  purchaseCpa?: string | null; // // TODO: add real purchase CPA
  conversionDefinition?: string | null; // What counts as a "conversion"
  myCampaignResults?: string | null; // My campaign results for app case studies (CuteKaari, Relax Call)
  myContribution?: string; // Explicit scope for app / multi-stakeholder campaigns
  objective: string;
  strategy: string;
  whatITested?: string;
  whatChangedOptimized?: string;
  execution: string;
  myWork: string[];
  result: string;
  resultLabel: string;
  metricDefinition?: string;
  leadQualityNotes?: string;
  keyLearnings?: string;
  screenshots?: CaseStudyScreenshot[];
  sections?: { title: string; content: string }[];
  relatedServiceSlug?: string;
}

export const experienceProjects: ExperienceProject[] = [
  {
    id: "01",
    slug: "premium-real-estate",
    title: "₹55 CR PREMIUM REAL ESTATE PROJECT",
    category: "PERFORMANCE MARKETING",
    tags: ["META ADS", "LEAD GENERATION", "CAMPAIGN OPTIMIZATION"],
    clientIndustry: "Premium Residential Real Estate (Malappuram & Kozhikode, Kerala)",
    role: "Performance Marketer",
    myRole: "Performance Marketer",
    timeline: "Ongoing Campaign Architecture",
    campaignDuration: "Ongoing Campaign Architecture",
    adSpend: "₹33.9K",
    conversionDefinition: "1 Lead = Verified inquiry with verified phone number, budget requirement, and site visit request.",
    objective: "Generate qualified leads for a high-ticket ₹55 Cr premium real-estate development with strict buyer qualification.",
    strategy: "Meta Ads architecture combining high-intent interest targeting, lookalike clusters, and localized Malayalam and English creatives.",
    whatITested: "Tested 6 multi-hook creative angles (luxury lifestyle vs. investment appreciation vs. unit tour teasers) alongside Instant Form vs. landing page qualification funnels.",
    whatChangedOptimized: "Split campaigns into distinct regional clusters to eliminate budget leakage outside key affluent pin codes. Transitioned from broad targeting to verified buyer interest segments.",
    execution: "Test and optimize different audiences and creatives based on campaign performance. Split campaigns into regional clusters to analyze performance region by region.",
    myWork: [
      "Landing Page Funnel Engineering",
      "Server-side Meta Pixel & CAPI Tracking",
      "Meta Ads Management & Bid Optimization",
      "Geo-Fenced & Pin-Code Targeting",
      "Lead Verification & Disqualification Filters"
    ],
    result: "239 LEADS",
    resultLabel: "₹142 BLENDED CPL",
    metricDefinition: "1 Lead = Verified inquiry with verified phone number, budget requirement, and site visit request.",
    leadQualityNotes: "High-ticket buyer qualification achieved through mandatory multi-step questionnaire questions, weeding out low-intent curiosity clicks.",
    keyLearnings: "In Kerala real estate, Malayalam video hooks communicating unit value combined with English property brochures delivered 73% lower cost per verified lead compared to generic image ads.",
    relatedServiceSlug: "lead-generation",
    sections: [
      { title: "OBJECTIVE", content: "Generate qualified leads for a premium real-estate project." },
      { title: "STRATEGY", content: "Meta Ads, audience segmentation and creative testing." },
      { title: "EXECUTION", content: "Test and optimize different audiences and creatives based on campaign performance. Split campaigns into regional clusters to analyze performance region by region." },
      { title: "RESULT", content: "239 leads at ₹142 blended CPL. The best-performing setup delivered leads at 73% lower cost than the first campaign." }
    ]
  },
  {
    id: "02",
    slug: "cutekaari",
    title: "CUTEKAARI — APP PERFORMANCE MARKETING",
    category: "APP MARKETING",
    tags: ["META ADS", "APP ACQUISITION", "PURCHASE", "TRACKING"],
    clientIndustry: "CuteKaari (Mobile Application & Digital Entertainment)",
    role: "App Performance Marketer",
    myRole: "App Performance Marketer",
    myContribution: "Engineered paid user acquisition strategy on Meta Ads, implemented event measurement, tested regional Malayalam visual hooks, and optimized post-install purchase conversion events.",
    campaignDuration: "15 Apr 2026 – 20 Oct 2026",
    adSpend: "₹27.83 lakh",
    cpi: "₹30.76",
    purchaseCpa: "₹81.95",
    conversionDefinition: "Verified in-app purchase (Meta App Events / SDK default attribution).",
    myCampaignResults: "90,465 Installs (₹30.76 CPI) | 33,961 Purchases (₹81.95 CPA) | 6.88x ROAS",
    objective: "Drive app acquisition and optimize for meaningful downstream actions and active in-app conversions.",
    strategy: "Build campaigns around measurable app actions rather than optimizing only for reach. Structure ad sets around high-intent parent demographics.",
    whatITested: "Tested short-form gameplay vs. feature demonstration reels, comparing App Install optimization vs. In-App Purchase event optimization.",
    whatChangedOptimized: "Budget shifted dynamically toward top-converting Android devices and creative hooks that generated active engagement rather than idle installs.",
    execution: "Test different audience and creative combinations, monitor conversion signals and move attention toward stronger-performing combinations.",
    myWork: [
      "App Install Campaign Setup",
      "Meta App Events & SDK Verification",
      "Audience Testing & Lookalikes",
      "Malayalam-first Creative Angle Iterations"
    ],
    result: "6.88X ROAS",
    resultLabel: "90,465 INSTALLED | ₹1.92 CR VALUE",
    metricDefinition: "Meta Ads Manager verified: 90,465 app installs and 33,961 in-app purchases generating ₹1.92 crore in purchase value.",
    leadQualityNotes: "Focus placed on downstream retention signals and post-install activation rather than raw low-cost ghost installs.",
    keyLearnings: "Direct demonstration video hooks emphasizing app utility reduced CPI significantly while increasing Day-1 user retention.",
    relatedServiceSlug: "app-marketing",
    sections: [
      { title: "OBJECTIVE", content: "Drive app acquisition and optimize for meaningful downstream actions for CuteKaari." },
      { title: "STRATEGY", content: "Build campaigns around measurable app actions rather than optimizing only for reach." },
      { title: "EXECUTION", content: "Test different audience and creative combinations, monitor conversion signals and move attention toward stronger-performing combinations. Focused on Malayalam-first messaging and creative testing." },
      { title: "RESULT", content: "90,465 installs at ₹30.76 CPI, 33,961 purchases at ₹81.95 CPA, and ₹1.92 crore in revenue at 6.88x ROAS." }
    ]
  },
  {
    id: "03",
    slug: "relax-call",
    title: "RELAX CALL — APP PERFORMANCE MARKETING",
    category: "APP MARKETING",
    tags: ["META ADS", "APP ACQUISITION", "PURCHASE", "OPTIMIZATION"],
    clientIndustry: "Relax Call (Voice & Social Communication Mobile App)",
    role: "App Performance Marketer",
    myRole: "App Performance Marketer",
    myContribution: "Structured user acquisition funnels across Android and iOS, mapped in-app purchase events, and continuously iterated ad creatives to lower acquisition costs while maximizing downstream purchase value.",
    campaignDuration: "15 Apr 2026 – 20 Oct 2026",
    adSpend: "₹18.66 lakh",
    cpi: "₹53.91",
    purchaseCpa: "₹181.03",
    conversionDefinition: "Verified in-app purchase (Meta App Events default attribution).",
    myCampaignResults: "34,618 Installs (₹53.91 CPI) | 10,309 Purchases (₹181.03 CPA) | Up to 5.33x ROAS on Top iOS Campaigns",
    objective: "App promotion campaigns focusing on downstream actions and purchase optimization rather than just installs.",
    strategy: "Structure campaigns around meaningful downstream actions instead of focusing only on app installs. Align creative messaging with core app utility.",
    whatITested: "Tested interest clusters in communication, entertainment, and social apps across diverse age brackets.",
    whatChangedOptimized: "Eliminated low-retention audience segments and reallocated ad spend into cohorts with higher repeat usage and purchase propensity.",
    execution: "Track conversion events and evaluate the quality of acquisition across Android and iOS platforms.",
    myWork: [
      "Cross-Platform App Marketing (Android + iOS)",
      "Conversion Event Mapping & Purchase Tracking",
      "Iterative Creative & Hook Testing",
      "Budget Reallocation to High-LTV Cohorts"
    ],
    result: "5.33X ROAS",
    resultLabel: "TOP IOS CAMPAIGN | ₹34.84 LAKH VALUE",
    metricDefinition: "Meta Ads Manager verified: Top iOS acquisition campaigns delivered up to 5.33x ROAS, with 34,618 total app installs and 10,309 in-app purchases generating ₹34.84 lakh in purchase value.",
    leadQualityNotes: "Optimized specifically toward accounts completing user registration and in-app purchase triggers.",
    keyLearnings: "Downstream purchase optimization yields far higher lifetime value than raw install-volume bidding.",
    relatedServiceSlug: "app-marketing",
    sections: [
      { title: "OBJECTIVE", content: "App promotion focusing on downstream actions and purchase optimization rather than just installs." },
      { title: "STRATEGY", content: "Structure campaigns around meaningful downstream actions instead of focusing only on app installs." },
      { title: "EXECUTION", content: "Track conversion events and evaluate the quality of acquisition across Android and iOS platforms. Optimize budget toward downstream action quality." },
      { title: "RESULT", content: "34,618 installs at ₹53.91 CPI, 10,309 purchases at ₹181.03 CPA, and ₹34.84 lakh in revenue with top iOS campaigns achieving up to 5.33x ROAS." }
    ]
  },
  {
    id: "04",
    slug: "rs-water-solutions",
    title: "RS WATER SOLUTIONS",
    category: "LEAD GENERATION",
    tags: ["META ADS", "LEAD GENERATION", "WHATSAPP"],
    clientIndustry: "RS Water Solutions (Residential & Commercial Water Treatment)",
    role: "Performance Marketer",
    myRole: "Performance Marketer",
    timeline: "Local Direct-Response Campaign",
    campaignDuration: "Local Direct-Response Campaign",
    adSpend: null, // // TODO: add real ad spend for RS Water Solutions
    conversionDefinition: "1 Conversion = Verified customer inquiry (Click-to-WhatsApp chat initiated at ₹12.01/conv or verified Instant Form at ₹14.95/conv).",
    objective: "Generate genuine local customer enquiries efficiently for water filtration and purification systems.",
    strategy: "Test two enquiry routes side by side: INSTANT LEAD FORM vs CLICK-TO-WHATSAPP, identifying which generated higher conversion rates.",
    whatITested: "Direct Head-to-Head test: Meta Instant Lead Form with custom validation vs. Click-to-WhatsApp with automated pre-filled conversation prompts.",
    whatChangedOptimized: "Reallocated 70% of campaign budget directly into Click-to-WhatsApp after data proved a 20% lower cost per inquiry and substantially faster closing speed.",
    execution: "Run parallel campaigns to identify which route produced more efficient enquiries, then reallocate budget.",
    myWork: [
      "Direct-Response Lead Generation Campaign Architecture",
      "Click-to-WhatsApp Funnel Integration",
      "Instant Form Field Qualification",
      "Hyperlocal Demographic & Geographic Targeting"
    ],
    result: "368 CONVERSIONS",
    resultLabel: "₹14.65 AVG. COST / CONVERSION",
    metricDefinition: "1 Conversion = Verified customer inquiry (Click-to-WhatsApp chat initiated at ₹12.01/conv or verified Instant Form at ₹14.95/conv).",
    leadQualityNotes: "WhatsApp conversation starters pre-qualified prospect requirements before sales consultation, reducing response lag from hours to minutes.",
    keyLearnings: "For high-trust local home services, WhatsApp conversational ads converted with less friction and higher close rates than standard lead forms.",
    relatedServiceSlug: "lead-generation",
    sections: [
      { title: "OBJECTIVE", content: "Generate genuine local customer enquiries efficiently." },
      { title: "STRATEGY", content: "Test two enquiry routes side by side: INSTANT LEAD FORM vs CLICK-TO-WHATSAPP." },
      { title: "EXECUTION", content: "Run parallel campaigns to identify which route produced more efficient enquiries. Evaluated cost per conversion across both funnels." },
      { title: "RESULT", content: "368 Total Conversions. Best Route: Click-to-WhatsApp (₹12.01/conv) vs Instant Form (₹14.95/conv)." }
    ]
  }
];

export interface AdditionalExperienceItem {
  client: string;
  type: string;
  role: string;
  objective: string;
  metric?: string | null; // Data-driven verified metric (e.g. "119 Inquiries", "₹18 CPL")
  numericResult?: string | null; // Optional numeric result field to replace vague text later
}

export const additionalExperience: AdditionalExperienceItem[] = [
  {
    client: "Fabline",
    type: "Meta Ads",
    role: "Digital Marketer",
    objective: "Lead Generation",
    metric: null, // // TODO: add real numbers (e.g. "X Leads @ ₹Y CPL")
    numericResult: null // // TODO: add real numeric result for Fabline
  },
  {
    client: "Island Foods",
    type: "Meta Ads",
    role: "Digital Marketer",
    objective: "Brand Awareness",
    metric: null, // // TODO: add real numbers (e.g. "X Impressions / Y Local Reach")
    numericResult: null // // TODO: add real numeric result for Island Foods
  },
  {
    client: "Bserve",
    type: "Meta Ads",
    role: "Performance Marketer",
    objective: "Customer Acquisition",
    metric: null, // // TODO: add real numbers (e.g. "X Inquiries / Y CAC")
    numericResult: null // // TODO: add real numeric result for Bserve
  },
  {
    client: "Al Saud",
    type: "Meta Ads",
    role: "Performance Marketer",
    objective: "Placement Enquiries",
    metric: "119 Inquiries", // Verified count
    numericResult: "119 Inquiries"
  }
];
