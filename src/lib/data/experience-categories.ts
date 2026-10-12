export const experienceCategories = [
  {
    title: "App Marketing",
    slug: "app-marketing",
    description: "Driving scalable growth for mobile applications through data-driven acquisition and retention strategies.",
    content: "App marketing is more than just getting installs; it's about acquiring users who will actually engage with and retain on your application. We focus on downstream events—like registrations, in-app purchases, or subscriptions—to ensure that your ad spend translates into real business value.",
    howItWorks: [
      { step: "01", title: "SDK Integration", desc: "Setting up tracking with tools like AppsFlyer or Adjust." },
      { step: "02", title: "Audience Segmentation", desc: "Targeting high-intent users based on behavior." },
      { step: "03", title: "Creative Testing", desc: "Iterating on ad formats that drive conversion." },
      { step: "04", title: "Event Optimization", desc: "Optimizing for downstream events like purchases." }
    ]
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description: "Generating high-quality leads for premium real estate projects using hyper-targeted campaigns.",
    content: "Real estate marketing requires a deep understanding of audience psychology and geographic targeting to find qualified buyers. We build robust funnels that capture high-intent prospects and filter out unqualified leads, ultimately driving down the Cost Per Lead (CPL) while improving lead quality.",
    howItWorks: [
      { step: "01", title: "Geo-Targeting", desc: "Focusing on regions with high investment potential." },
      { step: "02", title: "Lead Generation", desc: "Creating optimized landing pages and instant forms." },
      { step: "03", title: "CPL Optimization", desc: "Driving down the cost per lead while maintaining quality." },
      { step: "04", title: "Nurturing", desc: "Retargeting users who showed initial interest." }
    ]
  },
  {
    title: "Lead Generation",
    slug: "lead-generation",
    description: "Building automated funnels that convert cold traffic into qualified sales opportunities.",
    content: "Effective lead generation connects your business with people actively looking for your solution. We design end-to-end systems from the initial ad click to the final conversion, ensuring every step is optimized to maximize your return on ad spend.",
    howItWorks: [
      { step: "01", title: "Offer Creation", desc: "Developing compelling lead magnets." },
      { step: "02", title: "Funnel Building", desc: "Setting up landing pages and conversion tracking." },
      { step: "03", title: "Traffic Acquisition", desc: "Running targeted ads on Meta and Google." },
      { step: "04", title: "Qualification", desc: "Filtering leads to ensure sales readiness." }
    ]
  },
  {
    title: "Google Ads",
    slug: "google-ads",
    description: "Capturing high-intent search traffic and converting it into measurable business results.",
    content: "Google Ads allows you to appear exactly when potential customers are searching for your services. We structure campaigns to capture the most profitable search terms, carefully managing bids and ad copy to ensure you get the best possible return on investment.",
    howItWorks: [
      { step: "01", title: "Keyword Research", desc: "Identifying high-intent search terms." },
      { step: "02", title: "Ad Copywriting", desc: "Writing compelling ads that drive clicks." },
      { step: "03", title: "Bid Management", desc: "Optimizing bids to maximize ROI." },
      { step: "04", title: "Conversion Tracking", desc: "Measuring exactly which clicks lead to sales." }
    ]
  },
  {
    title: "Meta Ads",
    slug: "meta-ads",
    description: "Leveraging Facebook and Instagram's powerful algorithm to drive awareness and conversions.",
    content: "Meta Ads provide unparalleled audience targeting and creative formats to reach your ideal customer. We focus on rigorous creative testing and audience segmentation to find the perfect combination that drives consistent, scalable results.",
    howItWorks: [
      { step: "01", title: "Audience Research", desc: "Building core, custom, and lookalike audiences." },
      { step: "02", title: "Creative Strategy", desc: "Designing visually engaging ad creatives." },
      { step: "03", title: "A/B Testing", desc: "Systematically testing variables to find winners." },
      { step: "04", title: "Scaling", desc: "Increasing budget on top-performing campaigns." }
    ]
  },
  {
    title: "Other Campaigns",
    slug: "other-campaigns",
    description: "Exploring alternative digital channels to maximize reach and drive unique campaign objectives.",
    content: "Beyond the standard platforms, we explore native advertising, programmatic display, and specific localized strategies to ensure your message reaches the right people, no matter where they are online.",
    howItWorks: [
      { step: "01", title: "Platform Selection", desc: "Choosing the right alternative channel for the goal." },
      { step: "02", title: "Custom Tracking", desc: "Implementing bespoke measurement solutions." },
      { step: "03", title: "Format Adaptation", desc: "Tailoring creatives to specific platform norms." },
      { step: "04", title: "Performance Review", desc: "Comparing alternative channels against core ones." }
    ]
  }
];

export const getExperienceCategory = (slug: string) => {
  return experienceCategories.find((c) => c.slug === slug);
};
