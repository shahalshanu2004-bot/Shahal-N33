export interface TrackingSkill {
  name: string;
  category: "Tag & Event Setup" | "Ad Platforms & Measurement" | "CMS & Funnel Tech";
  description: string;
  confirmed: boolean;
  href?: string;
}

// Pre-fill ONLY with skills that are already confirmed on the site
export const confirmedTrackingSkills: TrackingSkill[] = [
  {
    name: "Google Tag Manager",
    category: "Tag & Event Setup",
    description: "Container deployment, trigger management, custom variables, and cross-domain tracking setup.",
    confirmed: true,
  },
  {
    name: "Conversion Tracking",
    category: "Tag & Event Setup",
    description: "End-to-end conversion event verification for lead forms, button clicks, purchases, and user interactions.",
    confirmed: true,
    href: "/services/conversion-tracking",
  },
  {
    name: "App Event Tracking",
    category: "Tag & Event Setup",
    description: "In-app install, registration, and purchase event tracking for iOS and Android acquisition funnels.",
    confirmed: true,
    href: "/services/app-marketing",
  },
  {
    name: "Campaign Analytics",
    category: "Ad Platforms & Measurement",
    description: "Cost-per-lead, ROAS, retention, and conversion rate analysis across paid media channels.",
    confirmed: true,
    href: "/services/campaign-optimization",
  },
  {
    name: "Meta Ads",
    category: "Ad Platforms & Measurement",
    description: "Full-funnel campaign architecture, Advantage+ setups, custom audiences, and attribution windows.",
    confirmed: true,
    href: "/services/meta-ads",
  },
  {
    name: "Google Ads",
    category: "Ad Platforms & Measurement",
    description: "Search, Performance Max, and conversion action mapping with value rules and audience signals.",
    confirmed: true,
    href: "/services/google-ads",
  },
  {
    name: "Meta Business Manager",
    category: "Ad Platforms & Measurement",
    description: "Asset permission management, partner integrations, domain verification, and data source hygiene.",
    confirmed: true,
  },
  {
    name: "WordPress",
    category: "CMS & Funnel Tech",
    description: "CMS landing page pixel placement, webhook firing, and lead form integration.",
    confirmed: true,
    href: "/services/website-development",
  },
];

/*
 * TODO(shahal): Confirm hands-on client experience with the following tools/capabilities
 * before enabling them on the site:
 *
 * 1. Meta Conversions API (CAPI) - Server-side gateway / Stape / Cloudflare CAPI setup
 * 2. GA4 custom events - Custom parameter mapping, BigQuery export, exploration reports
 * 3. Firebase - Firebase Analytics & dynamic links SDK integration
 * 4. Razorpay - Standard checkout webhook & payment success event tracking
 * 5. In-app purchase event tracking (SDK setup) - AppsFlyer / Adjust / Singular / Native SDK hooks
 *
 * Uncomment and activate entries below once verified:
 *
 * export const unconfirmedPendingSkills: TrackingSkill[] = [
 *   {
 *     name: "Meta Conversions API (CAPI)",
 *     category: "Tag & Event Setup",
 *     description: "Server-side event streaming to bypass iOS privacy blocks and ad blockers.",
 *     confirmed: false,
 *   },
 *   {
 *     name: "GA4 Custom Events",
 *     category: "Tag & Event Setup",
 *     description: "Custom event parameters and conversion event modeling in Google Analytics 4.",
 *     confirmed: false,
 *   },
 *   {
 *     name: "Firebase",
 *     category: "Tag & Event Setup",
 *     description: "Mobile app event tracking, user properties, and remote config signals.",
 *     confirmed: false,
 *   },
 *   {
 *     name: "Razorpay",
 *     category: "CMS & Funnel Tech",
 *     description: "Payment gateway success/failure event webhooks and transaction tracking.",
 *     confirmed: false,
 *   },
 *   {
 *     name: "In-App Purchase Event Tracking (SDK Setup)",
 *     category: "Tag & Event Setup",
 *     description: "SDK implementation for digital purchases, subscriptions, and revenue tracking.",
 *     confirmed: false,
 *   },
 * ];
 */
