export interface Certification {
  id: string;
  title: string;
  issuer: "Meta" | "Google" | "HubSpot" | string;
  badgeUrl?: string;
  issuedYear?: string;
}

// TODO: add real verified certifications (Meta Blueprint, Google Ads certification, Google Analytics)
// Example entries:
// {
//   id: "meta-blueprint",
//   title: "Meta Certified Media Buying Professional",
//   issuer: "Meta",
//   issuedYear: "2024"
// },
// {
//   id: "google-ads-search",
//   title: "Google Ads Search Certification",
//   issuer: "Google",
//   issuedYear: "2024"
// },
// {
//   id: "google-analytics-4",
//   title: "Google Analytics 4 Certification",
//   issuer: "Google",
//   issuedYear: "2024"
// }

export const certifications: Certification[] = [];
