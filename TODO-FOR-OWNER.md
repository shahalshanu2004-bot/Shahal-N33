# Action Items & Decisions for Shahal N (Site Owner)

This checklist contains all configuration parameters, real numbers, and credentials that you need to fill in. Placeholders and defensive checks have been built so the website functions cleanly today, and will automatically display these items as you add them.

---

## 1. Custom Domain & DNS Configuration
- [ ] **Decide on your custom domain** (e.g., `shahaln.com`, `shahal.marketing`, or `shahalads.com`).
- [ ] **Add custom domain on Vercel**:
  1. Open Vercel Dashboard > Project Settings > **Domains**.
  2. Add your apex domain and `www` subdomain.
  3. Configure DNS records at your registrar (A record to `76.76.21.21`, CNAME for www to `cname.vercel-dns.com`).
  4. Ensure `shahaln.vercel.app` permanently 301-redirects to your primary domain (detailed guide in [`DOMAIN_MIGRATION.md`](file:///c:/Users/HP/.antigravity-ide/portfolio/DOMAIN_MIGRATION.md)).
- [ ] **Update Environment Variable on Vercel**:
  - `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`

---

## 2. Real Numbers & Headline Stats (`src/lib/site.ts`)
Open [`src/lib/site.ts`](file:///c:/Users/HP/.antigravity-ide/portfolio/src/lib/site.ts) and verify or update the `stats` object:
```ts
stats: {
  clientsWorkedWith: 15,       // Set real count, or null to hide
  projectsCompleted: 20,       // Set real count, or null to hide
  totalAdSpendManaged: "₹75L+",// Set real number (e.g., "₹50L+", "$100K+"), or null to hide
  campaignsRun: 85,            // Set real number, or null to hide
  industriesServed: 8,         // Set real count, or null to hide
}
```
*Note: If any value is set to `null`, that statistic card will automatically hide itself.*

---

## 3. Testimonials & Client Reviews (`src/lib/data/testimonials.ts`)
Open [`src/lib/data/testimonials.ts`](file:///c:/Users/HP/.antigravity-ide/portfolio/src/lib/data/testimonials.ts) to add genuine client feedback. The section on the homepage is currently hidden because the array is empty:
```ts
export const testimonials: Testimonial[] = [
  // Uncomment and fill with real client data:
  // {
  //   id: "1",
  //   name: "Client Name",
  //   role: "Marketing Director / Founder",
  //   company: "Company / Brand Name",
  //   quote: "Real feedback on campaign results, lead quality, or communication...",
  //   image: "/images/testimonials/client1.webp", // Optional
  // }
];
```

---

## 4. Certifications & Badges (`src/lib/data/certifications.ts`)
Open [`src/lib/data/certifications.ts`](file:///c:/Users/HP/.antigravity-ide/portfolio/src/lib/data/certifications.ts) to add any verified industry certifications you hold:
```ts
export const certifications: Certification[] = [
  // Example:
  // {
  //   title: "Meta Certified Media Buying Professional",
  //   issuer: "Meta Blueprint",
  //   year: "2024",
  //   credentialUrl: "https://www.credly.com/...",
  // }
];
```

---

## 5. Case Study Details & Ad Spend Numbers (`src/lib/data/experience.ts`)
Open [`src/lib/data/experience.ts`](file:///c:/Users/HP/.antigravity-ide/portfolio/src/lib/data/experience.ts) to provide exact figures for your campaigns:
- [ ] **CuteKaari App Marketing**:
  - Add ad spend managed (e.g. `adSpend: "₹X,XX,XXX"`).
  - Add blended Cost Per Install (CPI) and purchase CPA.
  - Review `myContribution` summary.
- [ ] **Relax Call App Marketing**:
  - Add ad spend managed.
  - Add Cost Per Install (CPI).
- [ ] **Premium Real Estate**:
  - Verify exact ad spend on the ₹55 Cr project.
  - Add optional screenshots gallery (drop images into `public/images/case-studies/`).
- [ ] **RS Water Solutions**:
  - Verify campaign ad spend and timeline dates.
- [ ] **Additional Experience Cards (Fabline, Island Foods, Bserve, Al Saud)**:
  - Add real numeric outcome data (e.g., `verifiedMetric: "120+ Inquiries"` or `roas: "3.4x"`). If left empty, vague outcome text is suppressed.

---

## 6. Analytics & Conversion Tracking Keys (`.env.local` / Vercel Environment Variables)
Add your production IDs to `.env.local` (local testing) and the **Vercel Project Settings > Environment Variables** tab:
- [ ] `NEXT_PUBLIC_GA_ID` — Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`).
- [ ] `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID (`123456789012345`).
- [ ] `NEXT_PUBLIC_GTM_ID` — Google Tag Manager Container ID (`GTM-XXXXXXX`, optional).

---

## 7. Audit Request Form Email Provider (`src/app/api/contact/route.ts`)
Currently, form submissions are logged and saved cleanly. To receive instant email notifications directly to your inbox when someone submits the audit form:
- [ ] Sign up for [Resend](https://resend.com) (free tier allows 3,000 emails/month).
- [ ] Add your API key to Vercel environment variables:
  - `RESEND_API_KEY` = `re_your_api_key_here`
  - `CONTACT_NOTIFICATION_EMAIL` = `shahalnwork@gmail.com`
- [ ] (Alternatively, Formspree or any webhook endpoint can be configured in `src/app/api/contact/route.ts`).

---

## 8. Cal.com / Calendly Strategy Slot (Optional)
If you wish to allow visitors to book a 15-minute consultation directly into your calendar:
- [ ] Set `NEXT_PUBLIC_CAL_LINK` = `https://cal.com/your-username` (or your Calendly link) in your environment variables.
- [ ] The calendar booking slot in the contact section will automatically become visible.

---

## 9. Review & Publish Blog Outlines (`src/content/blog/`)
Review the 3 draft blog outlines:
1. `src/content/blog/meta-ads-real-estate-kerala.md`
2. `src/content/blog/track-app-purchase-events-meta-ads.md`
3. `src/content/blog/google-ads-vs-meta-ads-lead-generation.md`
- [ ] Verify each statistic marked with `// TODO: verify`.
- [ ] Add your personal commentary and case examples when you are ready to publish.
- [ ] Add to `src/lib/data/blog.ts` with `status: "published"` when ready.
