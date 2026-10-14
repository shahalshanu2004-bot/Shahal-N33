export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://shahaln.vercel.app";

export const siteConfig = {
  name: "Shahal N",
  title: "Performance Marketer in Kerala | Shahal N.",
  shortTitle: "Shahal N — Performance Marketer",
  description:
    "Shahal N. is a performance marketer in Kerala specializing in Meta Ads, Google Ads, app marketing, lead generation and conversion tracking to help businesses achieve measurable growth.",
  email: "shahalnwork@gmail.com",
  phone: "+91 759 305 2256",
  whatsappNumber: "917593052256",
  whatsappUrl:
    "https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
  whatsappAuditUrl:
    "https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%20would%20like%20to%20request%20a%20Free%20Ad%20Account%20Audit.",
  location: {
    locality: "Malappuram",
    region: "Kerala",
    country: "India",
    countryCode: "IN"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/shahal-n/",
    instagram: "https://www.instagram.com/shahal_n/",
    github: "https://github.com/shahalshanu2004-bot/Shahal-N33"
  },
  currentRole: {
    title: "Digital Marketing Executive",
    company: "First Logic Meta Lab",
    status: "Available for select freelance projects"
  },
  // Stats - leave as null to hide that stat block entirely
  stats: {
    clientsWorkedWith: 15, // TODO: set real numbers or null to hide
    projectsCompleted: 20, // TODO: set real numbers or null to hide
    totalAdSpendManaged: null as string | null, // TODO: set real numbers (e.g. "₹50L+")
    campaignsRun: null as number | null, // TODO: set real numbers
    industriesServed: 8, // TODO: set real numbers or null to hide
  }
};
