export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  logo?: string;
  rating?: number; // 1 to 5 display-only stars
  verified?: boolean; // Verified badge flag
}

/*
 * TODO(shahal): Add real testimonials from verified clients.
 * DO NOT invent or fabricate testimonials, client names, or metrics.
 * The component renders nothing when this array is empty.
 *
 * Sample entry (commented out - do not enable until real feedback is approved):
 *
 * {
 *   id: "sample-1",
 *   name: "Client Name",
 *   designation: "Head of Growth",
 *   company: "Brand Name",
 *   quote: "Shahal engineered our customer acquisition funnels, scaling verified leads while reducing blended acquisition costs.",
 *   logo: "/images/testimonials/sample-logo.png",
 *   rating: 5,
 *   verified: true,
 * }
 */
export const testimonials: Testimonial[] = [];
