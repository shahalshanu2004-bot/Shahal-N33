export interface CampaignResult {
  name: string;
  spend: number;
  installs: number;
  costPerInstall: number;
  purchases: number;
  costPerPurchase: number;
  roas: number;
}

export interface ChannelSplitItem {
  channel: string;
  costPerConversion: number;
  costPerConversionDisplay: string;
  isLowestCost?: boolean;
  notes?: string;
}

export interface ClientResultsData {
  clientName: string;
  clientNamePublic?: boolean;
  slug: string;
  category: "app-marketing" | "lead-generation" | "direct-response";
  verified: boolean;
  unverifiedNotice?: string;
  platformSummary: string;
  sourceNote: string;
  honestyNote?: string;
  leadDefinition?: string;
  dateRange?: {
    from: string;
    to: string;
    display: string;
  };
  attribution?: string;
  currency: string;
  // Account totals for App Marketing
  accountTotals?: {
    adSpend: number;
    adSpendDisplay: string;
    impressions: number;
    impressionsDisplay: string;
    reach: number;
    reachDisplay: string;
    installs: number;
    costPerInstall: number;
    purchases: number;
    costPerPurchase: number;
    purchaseValue: number;
    purchaseValueDisplay: string;
    roas: number;
  };
  // Metrics for Lead Generation & Direct Response
  leadGenTotals?: {
    adSpend?: number;
    adSpendDisplay?: string;
    leads?: number;
    costPerLead?: number;
    conversions?: number;
    costPerConversion?: number;
  };
  channelSplit?: ChannelSplitItem[];
  achievedThrough?: string[];
  campaignsTableTitle?: string;
  selectedCampaigns?: CampaignResult[];
}

/**
 * Privacy toggle:
 * When false: hides ad spend, purchase value, and the spend column,
 * showing only counts and ratios (installs, purchases, CPI, CPA, ROAS, CPL).
 */
export const SHOW_RUPEE_AMOUNTS = true;

export const COMMON_SOURCE_NOTE =
  "Source: Meta Ads Manager, 15 April to 20 October 2026. Purchase ROAS = purchase value / ad spend, using Meta's default attribution.";

export const clientResults: Record<
  "cutekaari" | "relax-call" | "premium-real-estate" | "rs-water-solutions",
  ClientResultsData
> = {
  cutekaari: {
    clientName: "CuteKaari",
    clientNamePublic: true,
    slug: "cutekaari",
    category: "app-marketing",
    verified: true,
    platformSummary: "Android app install & in-app purchase campaigns across India and GCC regions.",
    sourceNote: COMMON_SOURCE_NOTE,
    dateRange: {
      from: "2026-04-15",
      to: "2026-10-20",
      display: "15 Apr 2026 – 20 Oct 2026",
    },
    attribution: "Meta default attribution",
    currency: "INR",
    accountTotals: {
      adSpend: 2782954,
      adSpendDisplay: "₹27.83 lakh",
      impressions: 20292876,
      impressionsDisplay: "2.03 crore",
      reach: 2598166,
      reachDisplay: "25.98 lakh",
      installs: 90465,
      costPerInstall: 30.76,
      purchases: 33961,
      costPerPurchase: 81.95,
      purchaseValue: 19158947,
      purchaseValueDisplay: "₹1.92 crore",
      roas: 6.88,
    },
    campaignsTableTitle: "Selected High-Performing Campaigns",
    selectedCampaigns: [
      {
        name: "Audience campaign",
        spend: 888642,
        installs: 39427,
        costPerInstall: 22.54,
        purchases: 9578,
        costPerPurchase: 92.78,
        roas: 5.43,
      },
      {
        name: "Maximize conversion",
        spend: 769199,
        installs: 16815,
        costPerInstall: 45.74,
        purchases: 8244,
        costPerPurchase: 93.3,
        roas: 7.08,
      },
      {
        name: "GCC purchase event",
        spend: 323977,
        installs: 8230,
        costPerInstall: 39.37,
        purchases: 3484,
        costPerPurchase: 92.99,
        roas: 7.01,
      },
      {
        name: "Gulf purchase audience",
        spend: 253239,
        installs: 6165,
        costPerInstall: 41.08,
        purchases: 5000,
        costPerPurchase: 50.65,
        roas: 12.09,
      },
      {
        name: "All India campaign",
        spend: 59168,
        installs: 4401,
        costPerInstall: 13.44,
        purchases: 1401,
        costPerPurchase: 42.23,
        roas: 6.04,
      },
    ],
  },
  "relax-call": {
    clientName: "Relax Call",
    clientNamePublic: true,
    slug: "relax-call",
    category: "app-marketing",
    verified: true,
    platformSummary: "Cross-platform app acquisition & purchase optimization (Android & iOS).",
    sourceNote: COMMON_SOURCE_NOTE,
    honestyNote:
      "These are the strongest iOS campaigns. Several Android and awareness campaigns returned around or below 1x ROAS, so the account total is 1.87x.",
    dateRange: {
      from: "2026-04-15",
      to: "2026-10-20",
      display: "15 Apr 2026 – 20 Oct 2026",
    },
    attribution: "Meta default attribution",
    currency: "INR",
    accountTotals: {
      adSpend: 1866209,
      adSpendDisplay: "₹18.66 lakh",
      impressions: 10875011,
      impressionsDisplay: "1.09 crore",
      reach: 1695260,
      reachDisplay: "16.95 lakh",
      installs: 34618,
      costPerInstall: 53.91,
      purchases: 10309,
      costPerPurchase: 181.03,
      purchaseValue: 3483815,
      purchaseValueDisplay: "₹34.84 lakh",
      roas: 1.87,
    },
    campaignsTableTitle: "Selected Top iOS Campaigns",
    selectedCampaigns: [
      {
        name: "iOS campaign",
        spend: 84165,
        installs: 5503,
        costPerInstall: 15.29,
        purchases: 1597,
        costPerPurchase: 52.7,
        roas: 5.33,
      },
      {
        name: "Video purchase, iOS Gulf",
        spend: 120874,
        installs: 1518,
        costPerInstall: 79.63,
        purchases: 1171,
        costPerPurchase: 103.22,
        roas: 4.54,
      },
      {
        name: "Purchase, iOS all Kerala",
        spend: 66134,
        installs: 1571,
        costPerInstall: 42.1,
        purchases: 904,
        costPerPurchase: 73.16,
        roas: 4.0,
      },
      {
        name: "iOS Gulf",
        spend: 277733,
        installs: 4218,
        costPerInstall: 65.84,
        purchases: 2248,
        costPerPurchase: 123.55,
        roas: 3.28,
      },
      {
        name: "Purchase event, iOS",
        spend: 66645,
        installs: 1330,
        costPerInstall: 50.11,
        purchases: 764,
        costPerPurchase: 87.23,
        roas: 3.35,
      },
    ],
  },
  "premium-real-estate": {
    clientName: "₹55 Cr Premium Real Estate Project",
    clientNamePublic: false, // Privacy rule: Do not name developer or project unless explicitly flagged true
    slug: "premium-real-estate",
    category: "lead-generation",
    verified: false, // While false: show neutral disclaimer and unverified state
    unverifiedNotice: "Figures reported by Shahal N. Ads Manager screenshots below.",
    platformSummary: "Meta Ads lead generation architecture with high-ticket qualifying questionnaires.",
    // dateRange: { from: "", to: "", display: "" }, // TODO: Fill in exact date range from Meta Ads Manager
    sourceNote: "Source: Meta Ads Manager. Cost per lead = ad spend / qualified leads as defined above.",
    currency: "INR",
    leadDefinition: "1 lead = verified inquiry with a verified phone number, budget requirement and site visit request.",
    leadGenTotals: {
      adSpend: 33900,
      adSpendDisplay: "₹33.9K",
      leads: 239,
      costPerLead: 142,
    },
    achievedThrough: [
      "Audience Architecture: [TODO: Audience targeting & geo-fencing approach, e.g. Affluent pin codes & NRI clusters]",
      "Creative Testing: [TODO: Creative angles tested, e.g. Malayalam walk-through video vs English luxury brochures]",
      "Tracking Setup: [TODO: Tracking & qualification setup, e.g. Meta Conversions API & Instant Form verification logic]",
      "Optimization: [TODO: Optimization changes made during the campaign to decrease CPL from baseline]",
    ],
  },
  "rs-water-solutions": {
    clientName: "RS Water Solutions",
    clientNamePublic: true,
    slug: "rs-water-solutions",
    category: "direct-response",
    verified: false, // While false: show neutral disclaimer and unverified state
    unverifiedNotice: "Figures reported by Shahal N. Ads Manager screenshots below.",
    platformSummary: "Direct-response Meta Ads campaigns driving verified customer inquiries via WhatsApp and Instant Forms.",
    // NOTE FOR VERIFICATION ONLY: Implied total ad spend is approximately ₹5,390 (368 conversions × ₹14.65 blended). Do NOT display this implied spend on the website.
    // dateRange: { from: "", to: "", display: "" }, // TODO: Fill in exact date range from Meta Ads Manager
    sourceNote: "Source: Meta Ads Manager. Cost per lead = ad spend / qualified leads as defined above.",
    currency: "INR",
    leadDefinition: "1 conversion = verified customer inquiry (WhatsApp chat started or verified instant form).",
    leadGenTotals: {
      conversions: 368,
      costPerConversion: 14.65,
    },
    channelSplit: [
      {
        channel: "Click-to-WhatsApp",
        costPerConversion: 12.01,
        costPerConversionDisplay: "₹12.01",
        isLowestCost: true,
        notes: "Lowest cost channel — Direct WhatsApp conversations with verified intent",
      },
      {
        channel: "Instant Form",
        costPerConversion: 14.95,
        costPerConversionDisplay: "₹14.95",
        isLowestCost: false,
        notes: "Pre-filled Instant Form lead inquiries",
      },
    ],
    achievedThrough: [
      "Audience Targeting: [TODO: Local radius & household demographic targeting, e.g. Malappuram & Kozhikode residential clusters]",
      "Creative Angles: [TODO: Pain-point messaging, e.g. hard water damage vs clean water filtration system savings]",
      "Tracking Setup: [TODO: WhatsApp click conversion event mapping & Meta Instant Form verification webhook]",
      "Optimization: [TODO: Bid and budget shifts toward WhatsApp chat start events delivering faster customer closure]",
    ],
  },
};

/**
 * Utility: format number into Indian numbering system (e.g. 27,82,954 or 90,465)
 */
export function formatIndianNumber(num: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(num);
}

/**
 * Utility: format currency with Indian numbering (e.g. ₹30.76 or ₹8,88,642)
 */
export function formatINR(num: number, decimals: number = 2): string {
  return (
    "₹" +
    new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num)
  );
}

/**
 * Utility: generate source note respecting date range presence
 */
export function getSourceNote(data: ClientResultsData): string {
  if (data.dateRange && data.dateRange.display) {
    if (data.category === "app-marketing") {
      return `Source: Meta Ads Manager, ${data.dateRange.display}. Purchase ROAS = purchase value / ad spend, using Meta's default attribution.`;
    }
    return `Source: Meta Ads Manager, ${data.dateRange.display}. Cost per lead = ad spend / qualified leads as defined above.`;
  }
  // If dateRange is empty or missing, omit date range and include source statement
  return data.sourceNote;
}
