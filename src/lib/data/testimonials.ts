export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  rating?: number;
}

// TODO: add real testimonials from verified clients
// Example entry:
// {
//   id: "1",
//   name: "Client Name",
//   role: "Founder / Marketing Head",
//   company: "Brand Name",
//   quote: "Shahal engineered our customer acquisition funnel from scratch, scaling our qualified enquiries while reducing blended CPL.",
//   image: "/images/testimonials/client-1.jpg"
// }

export const testimonials: Testimonial[] = [];
