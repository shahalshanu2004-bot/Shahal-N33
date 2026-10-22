import { socialLinks } from "@/lib/data/socials";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://shahaln.vercel.app";

export const siteConfig = {
  name: "Shahal N",
  title: "Shahal N. | Performance Marketer in Kerala | Meta & Google Ads",
  shortTitle: "Shahal N — Performance Marketer",
  description:
    "Looking for a performance marketer in Kerala? Shahal N. specializes in Meta Ads, Google Ads, mobile app marketing, lead generation, and conversion tracking.",
  email: "shahalnwork@gmail.com",
  phone: "+91 759 305 2256",
  whatsappNumber: "917593052256",
  whatsappUrl:
    "https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%27m%20interested%20in%20discussing%20performance%20marketing%20services%20for%20my%20business.",
  whatsappAuditUrl:
    "https://wa.me/917593052256?text=Hi%20Shahal%2C%20I%20would%20like%20to%20request%20a%20Free%20Ad%20Account%20Audit.",
  location: {
    locality: "Malappuram",
    region: "Kerala",
    country: "India",
    countryCode: "IN"
  },
  socials: {
    linkedin: socialLinks.linkedin.url,
    instagram: socialLinks.instagram.url,
    github: socialLinks.github.url
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
