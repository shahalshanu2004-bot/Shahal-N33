export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProblem {
  problem: string;
  solution: string;
}

export interface RelatedCaseStudy {
  slug: string;
  title: string;
  metric: string;
}

export interface Service {
  slug: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  targetKeywords: string[];
  heroHeadline: string;
  heroHighlight: string;
  intro1: string;
  intro2: string;
  whatItIncludesTitle: string;
  whatItIncludes: string[];
  howIWorkTitle: string;
  howIWork: string[];
  whyItMattersTitle: string;
  whyItMattersDesc: string;
  problemsSolvedTitle: string;
  problemsSolved: ServiceProblem[];
  deliverablesTitle: string;
  deliverables: string[];
  faqsTitle: string;
  faqs: ServiceFaq[];
  ctaText: string;
  ctaButtonText: string;
  relatedSlugs: string[];
  relatedCaseStudies: RelatedCaseStudy[];
}

export const services: Service[] = [
  {
    slug: "meta-ads",
    category: "PERFORMANCE MARKETING",
    seoTitle: "Meta Ads Specialist | Facebook & Instagram Paid Acquisition | Shahal N",
    seoDescription: "Scale your revenue with high-performing Meta Ads campaigns. Specializing in audience testing, creative strategy, conversion tracking, and ROAS optimization.",
    targetKeywords: ["Meta Ads Specialist", "Meta Ads Specialist in Kerala", "Facebook Ads Specialist", "Instagram Ads Expert", "Meta Ads Campaign Optimization"],
    heroHeadline: "META ADS BUILT FOR",
    heroHighlight: "MEASURABLE GROWTH.",
    intro1: "Meta Ads help businesses reach potential customers across Facebook and Instagram using targeted paid advertising campaigns.",
    intro2: "I build systematic Meta advertising funnels focused on clear business objectives, audience segmentation, structured creative testing, conversion tracking, and continuous data-backed optimization.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "Campaign Strategy & Architecture",
      "Audience Research & Segmentation",
      "Audience Testing & Lookalike Modeling",
      "Direct-Response Creative Testing",
      "Technical Campaign Setup & Pixel Verification",
      "Full-Funnel Retargeting Sequences",
      "Conversion & ROAS Optimization",
      "Weekly Performance Reporting & Attribution"
    ],
    howIWorkTitle: "HOW I WORK",
    howIWork: ["OBJECTIVE", "AUDIENCE", "CREATIVE", "CAMPAIGN", "TRACKING", "OPTIMIZATION", "SCALE"],
    whyItMattersTitle: "WHY IT MATTERS",
    whyItMattersDesc: "Good Meta Ads are not simply about getting cheap clicks. The goal is to turn advertising spend into meaningful business outcomes and scalable customer acquisition.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "High Cost Per Acquisition (CPA)",
        solution: "Identify cost leaks by diagnosing CPM, CTR, and conversion rates, then systematically testing high-converting creative angles."
      },
      {
        problem: "Ad Fatigue and Performance Drop-offs",
        solution: "Deploy a structured creative refresh cadence with dynamic hook variations and format diversification to maintain steady delivery."
      },
      {
        problem: "Unqualified Leads from Low-Intent Traffic",
        solution: "Implement higher-friction qualifying questions in Meta Instant Forms or route prospects to conversion-optimized landing pages."
      },
      {
        problem: "Attribution Loss Post-iOS 14",
        solution: "Configure Server-Side Conversions API (CAPI) alongside Meta Pixel for resilient event deduplication and signal recovery."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Custom full-funnel Meta Ads account structure (TOF, MOF, BOF)",
      "Structured creative testing matrix with multiple visual and copy hooks",
      "Custom and Lookalike audience mapping tailored to your business model",
      "Verified Conversions API (CAPI) and Meta Pixel event configuration",
      "Transparent weekly performance reporting with actionable growth insights"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "How quickly can we expect to see results from Meta Ads?",
        answer: "Initial engagement and conversion signals usually appear within the first 3 to 7 days as the learning phase progresses. Sustainable optimization and cost stabilization typically require 2 to 4 weeks of structured testing."
      },
      {
        question: "What starting budget do you recommend for Meta Ads?",
        answer: "A practical starting budget allows sufficient event volume for Meta's algorithm to exit the learning phase (ideally 30–50 conversions per week per ad set). We determine exact budget requirements based on your average order value and target cost per acquisition."
      },
      {
        question: "How do you prevent ad creative fatigue?",
        answer: "We test multiple distinct visual hooks, angles, and messaging formats continuously, rotating new creative batches before fatigue causes CPA inflation."
      }
    ],
    ctaText: "READY TO IMPROVE YOUR META ADS?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["google-ads", "lead-generation", "campaign-optimization", "conversion-tracking"],
    relatedCaseStudies: [
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "239 Leads at ₹142 CPL" },
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "368 Conversions at ₹14.65 Cost" },
      { slug: "cutekaari", title: "CuteKaari App Marketing", metric: "50K+ Installs & High Engagement" }
    ]
  },
  {
    slug: "google-ads",
    category: "PERFORMANCE MARKETING",
    seoTitle: "Google Ads Specialist | High-Intent PPC & Search Campaigns | Shahal N",
    seoDescription: "Capture ready-to-buy customers with Google Ads. Intent-driven search campaigns, keyword research, negative keyword pruning, and conversion-focused bid management.",
    targetKeywords: ["Google Ads Specialist", "Google Ads Specialist in Kerala", "Google PPC Consultant", "Search Ads Expert", "Google Ads Conversion Tracking"],
    heroHeadline: "GOOGLE ADS CAPTURE HIGH-INTENT",
    heroHighlight: "DEMAND.",
    intro1: "Google Ads allows businesses to reach people actively searching for products, services and solutions.",
    intro2: "I build Google Ads campaigns focused on search intent, rigorous keyword selection, negative keyword hygiene, conversion tracking, and efficient customer acquisition.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "High-Intent Search Campaigns",
      "Commercial Keyword Research",
      "Search Intent & Query Analysis",
      "Conversion-Focused Ad Copywriting",
      "Negative Keyword List Architecture",
      "Google Tag Manager Conversion Actions",
      "Smart Bidding & Manual CPC Fine-Tuning",
      "Quality Score & Landing Page Alignment"
    ],
    howIWorkTitle: "HOW I WORK",
    howIWork: ["SEARCH INTENT", "KEYWORDS", "ADS", "LANDING PAGE", "CONVERSION", "OPTIMIZATION"],
    whyItMattersTitle: "KEY FOCUS",
    whyItMattersDesc: "Reach users with genuine purchase or enquiry intent instead of simply generating passive traffic.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Wasting Ad Spend on Broad Irrelevant Searches",
        solution: "Implement precise match types and exhaustive negative keyword lists to prevent budget drain on irrelevant search terms."
      },
      {
        problem: "Low Quality Scores Inflating Cost Per Click (CPC)",
        solution: "Align ad copy directly with search intent and corresponding landing page messaging to lift Quality Scores and reduce CPCs."
      },
      {
        problem: "Clicks That Never Convert Into Leads",
        solution: "Direct traffic to high-converting, dedicated landing pages with clear value propositions and low friction rather than generic homepages."
      },
      {
        problem: "Inaccurate Google Ads Conversion Data",
        solution: "Configure primary and secondary conversion actions in Google Tag Manager to provide clean optimization signals to bidding algorithms."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Single-themed or intent-grouped Search campaign structures",
      "Comprehensive commercial and transactional keyword list with negative keyword guardrails",
      "High-converting Responsive Search Ads with compelling headlines and pinned assets where appropriate",
      "Verified Google Ads conversion tracking configured via GTM",
      "Ongoing search term report audits and bid optimization"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "How is Google Ads different from Meta Ads?",
        answer: "Google Ads captures active demand—users actively looking for what you offer. Meta Ads generates passive demand by introducing your brand to relevant audiences while they browse."
      },
      {
        question: "How do you protect my budget from useless search queries?",
        answer: "By deploying strict negative keyword libraries, monitoring Search Term reports multiple times per week, and utilizing exact and phrase match types instead of uncontrolled broad match."
      },
      {
        question: "What is Google Quality Score and why does it matter?",
        answer: "Quality Score is Google's rating of the relevance of your keywords, ad copy, and landing page experience. Higher scores result in lower CPCs and better ad placements."
      }
    ],
    ctaText: "TURN SEARCHES INTO CUSTOMERS.",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["meta-ads", "lead-generation", "conversion-tracking", "performance-strategy"],
    relatedCaseStudies: [
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "Direct Inquiry Capture & WhatsApp Routing" },
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "High-Intent Inquiries & Targeted Reach" }
    ]
  },
  {
    slug: "app-marketing",
    category: "PERFORMANCE MARKETING",
    seoTitle: "App Marketing Specialist | User Acquisition & Post-Install Conversion | Shahal N",
    seoDescription: "Acquire high-retention app users and scale in-app purchases. Performance-focused mobile app user acquisition across Meta and Google App campaigns.",
    targetKeywords: ["App Marketing Specialist", "App User Acquisition", "App Marketing Specialist in Kerala", "Mobile App Install Campaigns", "App Performance Marketing"],
    heroHeadline: "APP MARKETING FROM INSTALLS",
    heroHighlight: "TO CONVERSIONS.",
    intro1: "App marketing focuses on acquiring the right users and understanding what they do after installing the app.",
    intro2: "I work with app acquisition campaigns, event tracking, audience testing, and conversion-focused optimization to drive meaningful downstream events rather than empty installs.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "App User Acquisition Strategy",
      "App Install Campaign Setup",
      "Downstream Event Optimization",
      "In-App Registration & Purchase Tracking",
      "Audience Segmentation & Demographics",
      "Video & Playable Creative Testing",
      "App Retargeting & Re-engagement",
      "Cohort & Retention Performance Analysis"
    ],
    howIWorkTitle: "IMPORTANT",
    howIWork: ["AD", "INSTALL", "REGISTRATION", "ENGAGEMENT", "PURCHASE", "RETENTION"],
    whyItMattersTitle: "IMPORTANT",
    whyItMattersDesc: "Do not claim that installs automatically equal revenue. Focus on the complete user journey from first impression to downstream transactions.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "High Volume of Low-Quality App Installs",
        solution: "Shift campaign optimization targets from simple installs to in-app milestones like account creation, tutorial completion, or initial purchase."
      },
      {
        problem: "Steep Post-Install Churn and Drop-off",
        solution: "Analyze drop-off points in the onboarding funnel and test creatives that set accurate user expectations before downloading."
      },
      {
        problem: "MMP and Event Attribution Discrepancies",
        solution: "Validate event mapping across Meta App Ads, Google App Campaigns, and tracking SDKs to ensure reliable conversion attribution."
      },
      {
        problem: "Rising Cost Per In-App Action",
        solution: "Continuously test localized creative formats, short-form gameplay/interface videos, and targeted demographic segments."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Targeted Meta and Google App Campaign architecture",
      "In-app event tracking taxonomy and validation plan",
      "Creative asset guidelines with high-converting video hook angles",
      "Audience testing matrix segmented by platform (Android/iOS) and region",
      "Post-install engagement and Cost Per Action (CPA) analytics"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "Why do app install campaigns often fail to generate revenue?",
        answer: "When campaigns optimize strictly for downloads, ad networks seek users who download apps casually but never open them. Optimizing for downstream events like registration or purchase solves this problem."
      },
      {
        question: "Which platform works better for mobile app acquisition: Meta or Google?",
        answer: "Both have distinct strengths. Google App Campaigns excel at broad automated scale across Play Store search, YouTube, and Display. Meta Ads excels at targeted visual storytelling and acquiring specific user demographics."
      },
      {
        question: "How do you track post-install conversions?",
        answer: "Through SDK integrations (such as Firebase, AppsFlyer, or Meta SDK) that dispatch post-install events directly to ad networks for optimization."
      }
    ],
    ctaText: "READY TO GROW YOUR APP?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["meta-ads", "conversion-tracking", "campaign-optimization", "performance-strategy"],
    relatedCaseStudies: [
      { slug: "cutekaari", title: "CuteKaari — App Growth", metric: "50K+ Public Downloads & Active Registrations" },
      { slug: "relax-call", title: "Relax Call — App Acquisition", metric: "10K+ Public Downloads with Purchase Focus" }
    ]
  },
  {
    slug: "lead-generation",
    category: "PERFORMANCE MARKETING",
    seoTitle: "Lead Generation Specialist | High-Intent Inquiries & Sales Pipelines | Shahal N",
    seoDescription: "Generate high-quality business inquiries that convert into paying customers. End-to-end lead funnels across Meta Instant Forms, WhatsApp, and landing pages.",
    targetKeywords: ["Lead Generation Specialist", "Lead Generation Specialist in Kerala", "B2B Lead Generation", "High-Quality Lead Funnels", "Performance Lead Generation"],
    heroHeadline: "LEAD GENERATION MORE THAN CLICKS.",
    heroHighlight: "QUALIFIED ENQUIRIES.",
    intro1: "Lead generation campaigns are designed to turn advertising traffic into enquiries from potential customers.",
    intro2: "I focus on audience quality, creative messaging, qualification forms, landing pages, and frictionless conversion paths to build genuine sales opportunities.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "Lead Funnel Architecture",
      "B2B & B2C Audience Research",
      "Meta Instant Forms with Qualifying Fields",
      "Click-to-WhatsApp Direct Inquiries",
      "Conversion-Optimized Landing Page Strategy",
      "Creative Hook Testing & Value Offers",
      "Lead Quality Auditing & CRM Integration",
      "Cost Per Qualified Lead Optimization"
    ],
    howIWorkTitle: "PROCESS",
    howIWork: ["AUDIENCE", "MESSAGE", "OFFER", "LEAD", "QUALIFICATION", "CONVERSION"],
    whyItMattersTitle: "KEY IDEA",
    whyItMattersDesc: "A cheap lead is not always a good lead. The real objective is qualified business opportunity and revenue for your sales team.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Sales Reps Wasting Time on Fake or Cold Leads",
        solution: "Add intentional friction through custom qualification questions, dropdown selections, and budget criteria within lead forms."
      },
      {
        problem: "High Drop-off Rate Between Ad Click and Form Submission",
        solution: "Deploy native Meta Lead Forms or lightning-fast mobile landing pages with transparent value propositions to reduce abandonment."
      },
      {
        problem: "Slow Lead Response Times Killing Close Rates",
        solution: "Connect automated lead notifications via webhooks to WhatsApp or CRM so sales teams can respond within minutes."
      },
      {
        problem: "Unpredictable Fluctuations in Cost Per Lead",
        solution: "Maintain parallel audience testing clusters and fresh creative rotations to stabilize inquiry volume across months."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Custom lead generation campaign setup on Meta and Google",
      "High-converting lead form layouts with custom qualification fields",
      "Click-to-WhatsApp campaign funnel setup for fast conversational qualification",
      "Automated lead delivery to email, Google Sheets, or CRM via webhooks",
      "Lead quality review and feedback loop with sales team"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "What is the difference between a cheap lead and a qualified lead?",
        answer: "A cheap lead is someone who tapped autofill without reading your offer. A qualified lead meets your target budget, timeline, and need criteria, and actively expects your follow-up."
      },
      {
        question: "Should I use Meta Instant Forms or a dedicated landing page?",
        answer: "Meta Instant Forms offer lower cost per lead and minimal mobile friction, ideal for fast outreach. Landing pages offer higher depth of information and stronger qualification, ideal for premium services."
      },
      {
        question: "How important is speed to lead?",
        answer: "Research consistently shows reaching out to a lead within 5 to 15 minutes increases qualification rates by up to 400% compared to delayed follow-ups."
      }
    ],
    ctaText: "NEED BETTER QUALITY LEADS?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["meta-ads", "google-ads", "conversion-tracking", "campaign-optimization"],
    relatedCaseStudies: [
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "239 High-Intent Inquiries at ₹142 CPL" },
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "368 Conversions at ₹14.65 via WhatsApp" }
    ]
  },
  {
    slug: "conversion-tracking",
    category: "PERFORMANCE MARKETING",
    seoTitle: "Conversion Tracking Specialist | Meta Pixel, CAPI & GTM Setup | Shahal N",
    seoDescription: "Eliminate tracking blind spots. Accurate conversion tracking with Google Tag Manager, Meta Pixel, Conversions API (CAPI), and GA4 event measurement.",
    targetKeywords: ["Conversion Tracking Specialist", "Meta Conversions API Setup", "Google Tag Manager Consultant", "GA4 Event Tracking", "Conversion Tracking Specialist Kerala"],
    heroHeadline: "CONVERSION TRACKING KNOW WHAT",
    heroHighlight: "ACTUALLY WORKS.",
    intro1: "Conversion tracking connects advertising activity with meaningful business actions.",
    intro2: "Without proper tracking, campaign optimization becomes guesswork. I ensure your advertising platforms receive accurate, deduplicated data for reliable algorithmic learning.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "Conversion Event Mapping & Planning",
      "Google Tag Manager Container Architecture",
      "Meta Pixel Client-Side Implementation",
      "Server-Side Conversions API (CAPI) Integration",
      "Google Ads Conversion Tracking & Enhanced Conversions",
      "Google Analytics 4 (GA4) Custom Events",
      "Cross-Domain & Iframe Form Tracking",
      "Event Deduplication & Diagnostics"
    ],
    howIWorkTitle: "TRACK",
    howIWork: ["CLICK", "LANDING PAGE", "SIGNUP", "LEAD", "PURCHASE"],
    whyItMattersTitle: "KEY MESSAGE",
    whyItMattersDesc: "You cannot optimize what you cannot measure accurately. Clean tracking is the bedrock of profitable performance marketing.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Inaccurate Ad Platform Reporting and Overlapping Numbers",
        solution: "Audit and eliminate duplicate tag triggers, establishing unique event IDs to guarantee 1:1 deduplication between browser and server."
      },
      {
        problem: "Loss of Tracking Data Due to Ad Blockers and iOS 14+",
        solution: "Deploy Meta Conversions API (CAPI) to send purchase and lead events directly from the server to Meta's servers."
      },
      {
        problem: "Ad Networks Optimizing for Low-Value Actions",
        solution: "Structure conversion hierarchy so campaigns bid toward high-value events (purchases, qualified inquiries) rather than surface-level page views."
      },
      {
        problem: "Unmeasured Third-Party Form Submissions or Calendars",
        solution: "Implement custom GTM JavaScript listeners, postMessage event listeners, and webhook endpoints to capture embedded form completions."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Clean Google Tag Manager workspace with organized tag/trigger/variable structure",
      "Meta Pixel and Server-Side CAPI setup with optimal Event Match Quality (EMQ)",
      "Google Ads Primary Conversion Actions with Enhanced Conversions enabled",
      "GA4 key event setup matching your conversion funnel stages",
      "End-to-end event testing and verification documentation"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "Why is Server-Side Conversions API (CAPI) necessary?",
        answer: "Browser-based pixels are increasingly blocked by privacy settings, extensions, and network filters. CAPI sends data directly from your server to Meta, recovering lost signals and improving audience matching."
      },
      {
        question: "What is Event Match Quality (EMQ) in Meta Ads?",
        answer: "EMQ measures how accurately the customer information parameters (email, phone, name) sent with your events match Meta user accounts. Higher EMQ directly lowers your cost per result."
      },
      {
        question: "Can you track WhatsApp clicks as conversions?",
        answer: "Yes, we track Click-to-WhatsApp events via Google Tag Manager and Meta Ads Manager, measuring both the click event and downstream chat initiation."
      }
    ],
    ctaText: "MAKE YOUR MARKETING DATA WORK FOR YOU.",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["meta-ads", "google-ads", "app-marketing", "campaign-optimization"],
    relatedCaseStudies: [
      { slug: "cutekaari", title: "CuteKaari App Marketing", metric: "SDK & Event Mapping for Downstream Purchases" },
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "WhatsApp & Form Conversion Tracking" }
    ]
  },
  {
    slug: "campaign-optimization",
    category: "PERFORMANCE MARKETING",
    seoTitle: "Campaign Optimization Specialist | Paid Ads Audit & ROAS Improvement | Shahal N",
    seoDescription: "Turn around underperforming ad accounts. Rigorous campaign audits, creative refresh cycles, budget reallocation, and cost per acquisition reduction.",
    targetKeywords: ["Campaign Optimization Specialist", "Paid Ads Audit", "ROAS Optimization", "Campaign Optimization Specialist Kerala", "Ad Account Performance"],
    heroHeadline: "CAMPAIGN OPTIMIZATION FIND WHAT WORKS.",
    heroHighlight: "CUT WHAT DOESN'T.",
    intro1: "Campaign optimization is the continuous process of analyzing performance, identifying problems and improving efficiency.",
    intro2: "I diagnose bottlenecks across audience segments, creative assets, bidding strategies, and conversion funnels to systematically increase return on ad spend.",
    whatItIncludesTitle: "WHAT I OPTIMIZE",
    whatItIncludes: [
      "Comprehensive Account & Structure Audits",
      "Creative Fatigue & Hook Analysis",
      "Audience Segmentation & Bid Adjustments",
      "Budget Reallocation Toward Winners",
      "Placement & Device Breakdown Filtering",
      "Funnel & Landing Page Conversion Bottlenecks",
      "Cost Per Result & ROAS Trend Analysis",
      "Iterative Testing Framework"
    ],
    howIWorkTitle: "OPTIMIZATION LOOP",
    howIWork: ["LAUNCH", "MEASURE", "ANALYZE", "TEST", "IMPROVE", "SCALE"],
    whyItMattersTitle: "KEY MESSAGE",
    whyItMattersDesc: "Optimization is not randomly changing settings. It is making disciplined decisions from verified performance data.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Diminishing Returns When Increasing Ad Spend",
        solution: "Restructure accounts to prevent audience overlap and auction self-competition, scaling spend incrementally on validated winners."
      },
      {
        problem: "Unpredictable Swings in Cost Per Result",
        solution: "Stabilize algorithmic delivery by maintaining clean learning states and avoiding disruptive wholesale edits."
      },
      {
        problem: "Wasted Budget on Poorly Performing Placements",
        solution: "Analyze granular placement and demographic reports, pruning low-ROI inventory to concentrate spend on high-converting channels."
      },
      {
        problem: "Lack of Clear Insights into Why an Ad Failed",
        solution: "Break down metrics step-by-step: thumbstop rate (3-sec hook), hold rate, CTR, and landing page conversion rate to pinpoint exact weaknesses."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Full diagnostic audit report of active and historical campaigns",
      "Actionable optimization roadmap with prioritized quick wins",
      "Creative performance dashboard tracking thumbstop, CTR, and CPA",
      "Weekly budget and bidding adjustments based on empirical ROAS data",
      "Continuous multivariate testing logs"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "When should you pause an underperforming ad?",
        answer: "An ad should typically be paused only after it has spent 1.5 to 2 times your target Cost Per Acquisition without producing a conversion, or if early engagement signals (hook rate, CTR) fall significantly below benchmarks."
      },
      {
        question: "How often should campaign adjustments be made?",
        answer: "Making daily changes resets ad algorithm learning phases. We observe conversion trends over 3 to 7 days before executing strategic refinements, unless an obvious budget anomaly occurs."
      },
      {
        question: "Can an existing underperforming ad account be salvaged?",
        answer: "Yes, by performing an account audit, cleaning out clutter, fixing conversion tracking, and restructuring campaigns around verified core offers."
      }
    ],
    ctaText: "IS YOUR CAMPAIGN UNDERPERFORMING?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["meta-ads", "google-ads", "app-marketing", "performance-strategy"],
    relatedCaseStudies: [
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "73% Cost Reduction via Segmented Optimization" },
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "Channel Split Test Produced ₹12.01 Cost per Conversion" }
    ]
  },
  {
    slug: "performance-strategy",
    category: "PERFORMANCE MARKETING",
    seoTitle: "Performance Marketing Strategist | Full-Funnel Paid Acquisition | Shahal N",
    seoDescription: "Build scalable customer acquisition engines. Strategic planning connecting media spend, audience psychology, unit economics, and conversion funnels.",
    targetKeywords: ["Performance Marketing Strategist", "Performance Marketer Kerala", "Full Funnel Advertising Strategy", "Paid Media Consultant", "Growth Marketing Strategy"],
    heroHeadline: "PERFORMANCE STRATEGY BUILD THE SYSTEM",
    heroHighlight: "BEFORE SCALING IT.",
    intro1: "Performance strategy defines how paid traffic, creative, tracking and conversion work together to achieve a business objective.",
    intro2: "Before allocating significant media budgets, I engineer complete customer acquisition blueprints that align marketing expenditure with business unit economics and target ROI.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "Business Model & Unit Economics Analysis",
      "Full-Funnel Customer Journey Mapping",
      "Multi-Channel Media Mix Allocation",
      "Target CAC & Blended ROAS Modeling",
      "Audience Segmentation & Messaging Angles",
      "Creative Direction & Testing Framework",
      "Conversion Infrastructure Planning",
      "Scalable Growth & Testing Roadmap"
    ],
    howIWorkTitle: "STRATEGIC FRAMEWORK",
    howIWork: ["BUSINESS GOAL", "AUDIENCE", "CHANNEL", "CREATIVE", "CONVERSION", "TRACKING", "OPTIMIZATION"],
    whyItMattersTitle: "KEY MESSAGE",
    whyItMattersDesc: "The goal is not simply to run ads. The goal is to build an acquisition system that can be measured, predicted, and scaled sustainably.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Unclear Understanding of Allowable Customer Acquisition Cost",
        solution: "Calculate gross margins, customer lifetime value (LTV), and cashflow cycles to establish exact break-even and target CAC ceilings."
      },
      {
        problem: "Disconnected Channels Working in Silos",
        solution: "Synthesize search capture, social demand generation, and email/WhatsApp nurturing into a coherent full-funnel ecosystem."
      },
      {
        problem: "Over-reliance on a Single Volatile Advertising Channel",
        solution: "Build a diversified media mix combining paid social (Meta), intent search (Google), and organic retention channels."
      },
      {
        problem: "Scaling Too Early Before Unit Economics Are Proven",
        solution: "Establish rigorous milestone gates that require positive unit economics at small budgets before scaling capital."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Custom Performance Marketing Strategy Document & Playbook",
      "Channel allocation and monthly budget deployment model",
      "Customer persona and angle testing matrices",
      "Measurement framework defining primary KPIs, North Star metrics, and secondary signals",
      "Quarterly growth milestones and testing roadmap"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "How does performance marketing differ from traditional brand marketing?",
        answer: "Performance marketing is strictly tied to measurable actions—leads, sales, app installs, and ROAS. Every dollar spent is tracked against the tangible return it produces."
      },
      {
        question: "How do you calculate allowable Customer Acquisition Cost (CAC)?",
        answer: "Allowable CAC is derived from your Customer Lifetime Value (LTV) and gross product margins, ensuring each acquired customer yields a healthy contribution margin."
      },
      {
        question: "How long does it take to establish a reliable acquisition engine?",
        answer: "Typically 6 to 12 weeks: Phase 1 establishes tracking and benchmarks, Phase 2 tests messaging and channels, and Phase 3 scales validated configurations."
      }
    ],
    ctaText: "LET'S BUILD YOUR PERFORMANCE STRATEGY.",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["meta-ads", "google-ads", "lead-generation", "campaign-optimization"],
    relatedCaseStudies: [
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "End-to-End Campaign Strategy & Regional Clusters" },
      { slug: "cutekaari", title: "CuteKaari App Marketing", metric: "Full Acquisition Strategy & Action Optimization" }
    ]
  },
  {
    slug: "seo",
    category: "DIGITAL & AI",
    seoTitle: "Search Engine Optimization (SEO) | Technical & On-Page Growth | Shahal N",
    seoDescription: "Build sustainable organic visibility on Google. Technical SEO audits, on-page optimization, search intent architecture, and structured data implementation.",
    targetKeywords: ["SEO Specialist", "SEO Specialist in Kerala", "Technical SEO Expert", "On-Page SEO", "Search Engine Optimization Consultant"],
    heroHeadline: "SEO GET FOUND",
    heroHighlight: "WHEN PEOPLE SEARCH.",
    intro1: "Search Engine Optimization improves a website's visibility in organic search results and helps businesses attract relevant long-term traffic.",
    intro2: "I approach SEO from a technical, search-intent, and conversion-focused perspective—ensuring your site is fast, easily crawlable by Google, and structured to convert organic visitors into clients.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "Comprehensive Technical SEO Audits",
      "Commercial Keyword & Search Intent Mapping",
      "On-Page Optimization (Titles, Headings, Meta Tags)",
      "Structured Data (Schema.org) Architecture",
      "Internal Linking & Information Architecture",
      "Core Web Vitals & Page Speed Enhancements",
      "XML Sitemap & Robots.txt Configuration",
      "Google Search Console & GA4 Performance Monitoring"
    ],
    howIWorkTitle: "SEO PROCESS",
    howIWork: ["RESEARCH", "OPTIMIZE", "PUBLISH", "MEASURE", "IMPROVE"],
    whyItMattersTitle: "IMPORTANT",
    whyItMattersDesc: "I do not promise unrealistic number-one rankings. I focus on technical excellence, search intent, and sustainable organic search visibility.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Invisible on Google for Important Commercial Services",
        solution: "Identify target search intent and optimize page titles, headings, and on-page content around specific customer queries."
      },
      {
        problem: "Technical Crawling and Indexation Errors",
        solution: "Fix robots.txt directives, canonical conflicts, orphan pages, and build clean dynamic XML sitemaps for Googlebot."
      },
      {
        problem: "High Bounce Rates Due to Slow Page Speeds",
        solution: "Optimize asset loading, compress media, eliminate render-blocking resources, and streamline Core Web Vitals (LCP, CLS, INP)."
      },
      {
        problem: "Rich Snippet and Structured Data Errors",
        solution: "Implement valid JSON-LD schemas (Person, WebSite, Service, Article, BreadcrumbList) matching Google guidelines."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Comprehensive technical SEO audit and resolution checklist",
      "Keyword mapping document assigned to target site architecture",
      "Optimized meta titles, meta descriptions, and semantic heading structures",
      "Validated JSON-LD structured data code across all templates",
      "Google Search Console setup, sitemap submission, and indexing monitoring"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "How long does it take for SEO changes to impact Google rankings?",
        answer: "Technical fixes and on-page optimizations are typically indexed within days to weeks. Substantial organic ranking and traffic growth generally builds over 3 to 6 months of steady authority building."
      },
      {
        question: "Why is technical SEO foundational before publishing blog articles?",
        answer: "If Googlebot encounters crawling errors, broken canonicals, or slow response times, content may fail to get indexed or ranked regardless of editorial quality."
      },
      {
        question: "Do you guarantee page-one rankings on Google?",
        answer: "No ethical SEO specialist guarantees specific positions, as Google's algorithms are proprietary. We guarantee rigorous adherence to Google Search Essentials and technical best practices."
      }
    ],
    ctaText: "WANT TO BUILD LONG-TERM SEARCH VISIBILITY?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["website-development", "content-creation", "performance-strategy"],
    relatedCaseStudies: [
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "Local Search & High-Intent Inquiry Optimization" }
    ]
  },
  {
    slug: "website-development",
    category: "DIGITAL & AI",
    seoTitle: "Conversion-Focused Website Development | Fast, Modern Web Apps | Shahal N",
    seoDescription: "Websites built to convert visitors into clients. High-performance, mobile-first, SEO-ready web development engineered for speed and user action.",
    targetKeywords: ["Website Development Kerala", "Conversion-Focused Web Development", "SEO Friendly Web Design", "Landing Page Developer", "Next.js Web Developer"],
    heroHeadline: "WEBSITE DEVELOPMENT BUILT TO LOOK GOOD.",
    heroHighlight: "BUILT TO CONVERT.",
    intro1: "A website should do more than look professional. It should communicate value clearly and guide visitors toward action.",
    intro2: "I build responsive, high-performance web applications and landing pages engineered with modern web technologies, seamless mobile responsiveness, and conversion architecture.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "Conversion-Focused Business Websites",
      "High-Converting Paid Traffic Landing Pages",
      "Mobile-First Responsive Layouts",
      "Core Web Vitals & Performance Optimization",
      "Technical SEO Architecture & Meta Integration",
      "Google Tag Manager & Analytics Integration",
      "Micro-Interactions & Modern Aesthetics",
      "Cross-Browser & Device Compatibility"
    ],
    howIWorkTitle: "FOCUS",
    howIWork: ["DESIGN", "UX", "CONTENT", "CONVERSION", "TRACKING"],
    whyItMattersTitle: "KEY MESSAGE",
    whyItMattersDesc: "A beautiful website that does not convert visitors into inquiries is an underperforming marketing asset.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Slow Mobile Load Times Causing Visitor Bounce",
        solution: "Build with lightweight, optimized frameworks (like Next.js) with optimized images and minimal script bloat for sub-2-second loading."
      },
      {
        problem: "Confusing User Journeys With No Clear Next Step",
        solution: "Structure visual hierarchy and strategically place clear, low-friction calls to action across every viewport."
      },
      {
        problem: "Websites Broken on Mobile and Tablet Screens",
        solution: "Ensure responsive testing across iOS and Android devices, adapting touch targets and typography for effortless interaction."
      },
      {
        problem: "Lack of Conversion Tracking Infrastructure",
        solution: "Pre-wire analytics, Meta Pixel, and Google Tag Manager triggers natively into forms and click actions."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Complete mobile-first website or landing page development",
      "Speed-optimized assets passing Core Web Vitals standards",
      "Integrated SEO metadata, semantic headings, and social OpenGraph tags",
      "Configured contact forms with validation and webhook routing",
      "Full analytics and conversion tracking integration"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "Why does website speed directly impact advertising profitability?",
        answer: "Every additional second of load time increases bounce rates significantly. Fast-loading landing pages preserve paid traffic, lower effective cost per click, and increase conversions."
      },
      {
        question: "How is a landing page different from a standard website?",
        answer: "A standard website informs visitors and offers numerous navigation paths. A dedicated landing page focuses on a single offer and a single conversion action, removing distractions."
      },
      {
        question: "Will the website be optimized for mobile search from day one?",
        answer: "Yes, all templates are built mobile-first, ensuring responsive touch navigation, fast mobile rendering, and Google mobile-first indexing compliance."
      }
    ],
    ctaText: "NEED A WEBSITE BUILT FOR GROWTH?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["seo", "content-creation", "conversion-tracking"],
    relatedCaseStudies: [
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "High-Converting Custom Landing Page Architecture" },
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "Direct Mobile Inquiry Funnel Development" }
    ]
  },
  {
    slug: "content-creation",
    category: "DIGITAL & AI",
    seoTitle: "Strategic Content Creation | Ad Creatives & Marketing Copy | Shahal N",
    seoDescription: "Create content that drives action. Performance-focused ad copy, conversion hooks, visual creative concepts, and social assets tailored for paid growth.",
    targetKeywords: ["Content Creation Specialist", "Performance Content Creation", "Ad Copywriting", "Social Media Content Strategy", "Direct Response Copywriting"],
    heroHeadline: "CONTENT CREATION CONTENT WITH",
    heroHighlight: "A PURPOSE.",
    intro1: "Content should not simply fill a social media calendar. It should communicate a message, support a brand and move people toward action.",
    intro2: "I develop performance-oriented content—from high-converting ad copy and scroll-stopping hooks to strategic social assets designed to support customer acquisition.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "Direct-Response Ad Copywriting",
      "Hook Development & Angle Testing",
      "Paid Advertising Creative Direction",
      "Short-Form Video Scripting",
      "Social Media Marketing Content",
      "Landing Page Value Proposition Copy",
      "Visual Creative Ideation & Storyboarding",
      "Performance Review & Iterative Revision"
    ],
    howIWorkTitle: "CONTENT PROCESS",
    howIWork: ["RESEARCH", "IDEA", "MESSAGE", "CREATIVE", "PUBLISH", "MEASURE"],
    whyItMattersTitle: "KEY MESSAGE",
    whyItMattersDesc: "Good content gets attention. Strategic content gives that attention somewhere meaningful to go.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Social Content That Generates Likes But No Revenue",
        solution: "Shift editorial focus from generic quote cards to problem-agitation-solution frameworks with clear next steps."
      },
      {
        problem: "Ad Creatives Ignored by Busy Mobile Users",
        solution: "Craft compelling visual and textual hooks that stop user scrolling within the first 1.5 seconds of exposure."
      },
      {
        problem: "Creative Exhaustion and Lack of Campaign Angles",
        solution: "Map out customer pain points into multiple diverse emotional and practical angles (fear of loss, social proof, convenience)."
      },
      {
        problem: "Disconnected Messaging Between Ad and Landing Page",
        solution: "Synchronize ad copy hooks directly with landing page hero headlines to prevent visitor drop-off."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Direct-response ad copywriting packages with multiple variations",
      "Scroll-stopping visual concepts and creative direction briefs",
      "Short-form video scripts structured for high retention",
      "Customer pain-point and angle messaging matrix",
      "Performance analysis report identifying top-performing copy formats"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "What is the difference between brand content and performance content?",
        answer: "Brand content focuses broadly on perception and recognition. Performance content is engineered with clear hooks, value propositions, and calls to action designed to generate measurable clicks and conversions."
      },
      {
        question: "How many creative variations should be tested in an ad campaign?",
        answer: "We recommend testing 3 to 5 distinct creative angles per concept (varying the visual hook, lead sentence, and call to action) to discover the most cost-effective variant."
      },
      {
        question: "Do you write content in regional languages?",
        answer: "Yes, we specialize in English and Malayalam-first messaging tailored to local cultural nuance for high regional engagement."
      }
    ],
    ctaText: "NEED CONTENT THAT SUPPORTS YOUR MARKETING?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["ai-video-marketing", "meta-ads", "seo", "website-development"],
    relatedCaseStudies: [
      { slug: "cutekaari", title: "CuteKaari App Marketing", metric: "Malayalam-First Messaging & High-CTR Ad Creatives" },
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "Aspirational Real Estate Ad Copy & Multi-Angle Testing" }
    ]
  },
  {
    slug: "ai-automation",
    category: "DIGITAL & AI",
    seoTitle: "Marketing AI Automation | Workflow Efficiency & Lead Processing | Shahal N",
    seoDescription: "Automate repetitive marketing workflows and speed up lead qualification. Practical AI integrations for lead routing, data processing, and reporting.",
    targetKeywords: ["Marketing AI Automation", "Lead Processing Automation", "AI Workflow Automation", "Marketing Operations Automation", "AI Automation Kerala"],
    heroHeadline: "AI AUTOMATION WORK SMARTER.",
    heroHighlight: "AUTOMATE THE REPETITIVE.",
    intro1: "AI automation can reduce repetitive manual work and help marketing teams move faster.",
    intro2: "I focus on practical automation workflows that improve operational efficiency, accelerate lead response times, and eliminate manual data entry—using AI where it provides tangible leverage.",
    whatItIncludesTitle: "WHAT IT CAN INCLUDE",
    whatItIncludes: [
      "Instant Lead Routing & Alert Automations",
      "Webhook Integrations (Meta/Google to CRM)",
      "Automated WhatsApp & Email Notifications",
      "Campaign Data Aggregation & Automated Reports",
      "AI-Assisted Customer Query Categorization",
      "Repetitive Workflow Identification & Streamlining",
      "Cross-Platform Data Synchronization",
      "Operational Health Monitoring"
    ],
    howIWorkTitle: "AUTOMATION PROCESS",
    howIWork: ["IDENTIFY", "CONNECT", "AUTOMATE", "TEST", "MONITOR", "IMPROVE"],
    whyItMattersTitle: "IMPORTANT",
    whyItMattersDesc: "I position automation as a way to reduce repetitive work and improve operational speed—not as an unrealistic promise that AI can replace human oversight.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Leads Sitting Uncontacted for Hours or Days",
        solution: "Build instant webhook triggers that dispatch lead data directly to your sales team's mobile devices within seconds of submission."
      },
      {
        problem: "Manual Copy-Pasting Across Different Spreadsheets and Tools",
        solution: "Automate data piping between advertising platforms, web forms, and central CRM spreadsheets."
      },
      {
        problem: "Hours Spent Manually Compiling Weekly Reports",
        solution: "Generate scheduled performance dashboards that pull live data from ad accounts into clean summaries."
      },
      {
        problem: "Missed Opportunities Due to Lack of Follow-Up",
        solution: "Set up multi-step automated notification reminders to ensure every inbound inquiry is worked by sales."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Custom automated lead delivery workflow connecting ad forms to CRM/messaging",
      "Automated reporting setup for ongoing campaign visibility",
      "Webhook and API connection architecture for marketing tools",
      "Error-handling guardrails and notification fallbacks",
      "Documentation on managing and updating active workflows"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "Can automation help speed up my sales cycle?",
        answer: "Yes, automated lead notifications alert your sales team the exact moment a prospect submits their details, maximizing conversion probability while intent is peak."
      },
      {
        question: "Does AI automation require expensive software?",
        answer: "No. Most high-leverage workflows can be built using cost-effective tools like Make, Zapier, Webhooks, and standard APIs without heavy infrastructure costs."
      },
      {
        question: "Can AI replace my marketing or sales staff?",
        answer: "No. Automation eliminates repetitive administrative tasks so your team can focus on high-value human activities: talking to clients, closing deals, and strategy."
      }
    ],
    ctaText: "WHAT COULD YOU AUTOMATE?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["ai-video-marketing", "website-development", "performance-strategy"],
    relatedCaseStudies: [
      { slug: "rs-water-solutions", title: "RS Water Solutions", metric: "Automated Click-to-WhatsApp Enquiry Routing" }
    ]
  },
  {
    slug: "ai-video-marketing",
    category: "DIGITAL & AI",
    seoTitle: "AI Video Marketing | Rapid Creative Testing & Ad Variations | Shahal N",
    seoDescription: "Produce more creative concepts and variations faster. AI-assisted video workflows for short-form ads, social content, and dynamic ad iteration.",
    targetKeywords: ["AI Video Marketing", "AI Ad Creatives", "Short-Form Video Marketing", "AI Video Production Kerala", "Video Creative Testing"],
    heroHeadline: "AI VIDEO MARKETING TURN IDEAS",
    heroHighlight: "INTO VIDEO.",
    intro1: "AI-assisted video production can help brands create more concepts, variations and short-form marketing content faster.",
    intro2: "I focus on using AI as an agile creative production tool—enabling brands to test multiple visual hooks, voiceovers, and messaging angles without large studio overheads.",
    whatItIncludesTitle: "WHAT IT INCLUDES",
    whatItIncludes: [
      "AI Video Conceptualization & Strategy",
      "Short-Form Video Ad Formats (Reels, TikTok, Shorts)",
      "Dynamic Hook & Ending Variations",
      "Product & Service Explainer Videos",
      "AI Voiceover & Subtitle Synchronization",
      "Multilingual Video Localization",
      "Iterative Creative A/B Testing",
      "Video Retention Rate Analysis"
    ],
    howIWorkTitle: "PROCESS",
    howIWork: ["IDEA", "SCRIPT", "VISUAL", "GENERATE", "EDIT", "TEST", "OPTIMIZE"],
    whyItMattersTitle: "KEY MESSAGE",
    whyItMattersDesc: "The real advantage of AI video is not merely producing videos faster. It is being able to test more creative ideas and discover high-converting winners.",
    problemsSolvedTitle: "BUSINESS PROBLEMS SOLVED",
    problemsSolved: [
      {
        problem: "Expensive and Slow Traditional Video Production Cycles",
        solution: "Generate and test multiple video concepts within days using AI production pipelines rather than weeks of studio scheduling."
      },
      {
        problem: "Ad Creatives Burning Out Within Weeks",
        solution: "Produce dozens of hook and audio permutations from a single core message to keep ad delivery fresh and cost-effective."
      },
      {
        problem: "Low Video Watch Time on Social Media Ads",
        solution: "Engineer rapid-paced visual cuts, bold captions, and curiosity-driven hooks in the opening 2 seconds to retain viewer attention."
      },
      {
        problem: "Difficulty Localizing Videos for Different Languages",
        solution: "Adapt scripts and voiceovers into localized dialects (e.g. Malayalam and English) to connect authentically with target audiences."
      }
    ],
    deliverablesTitle: "CORE DELIVERABLES",
    deliverables: [
      "Package of short-form vertical video ad assets optimized for 9:16 feeds",
      "Multiple hook variations per concept for rapid A/B testing",
      "Synchronized voiceover audio and bold animated captions",
      "Script and storyboard documentation",
      "Performance report highlighting drop-off and retention rates"
    ],
    faqsTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "How does AI video improve paid advertising performance?",
        answer: "Success on Meta and TikTok depends heavily on creative volume. AI video makes it cost-effective to test 10+ hook variations, rapidly surfacing the specific hook that lowers your acquisition cost."
      },
      {
        question: "Does AI video replace live video shoots?",
        answer: "AI video complements authentic live content. It is ideal for rapid testing, product explainers, and variation generation alongside customer testimonials and founder videos."
      },
      {
        question: "What video dimensions and formats do you produce?",
        answer: "We focus on vertical 9:16 video optimized for Instagram Reels, Facebook Reels, and YouTube Shorts, as well as 1:1 square formats for feed placements."
      }
    ],
    ctaText: "NEED MORE CREATIVE VARIATIONS?",
    ctaButtonText: "LET'S TALK",
    relatedSlugs: ["content-creation", "meta-ads", "ai-automation"],
    relatedCaseStudies: [
      { slug: "cutekaari", title: "CuteKaari App Marketing", metric: "Video Creative Iteration & User Acquisition" },
      { slug: "premium-real-estate", title: "₹55 Cr Premium Real Estate", metric: "Visual Creative Angles Driving High Inquiry Volume" }
    ]
  }
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
