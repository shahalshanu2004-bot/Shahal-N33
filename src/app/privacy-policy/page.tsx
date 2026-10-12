import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Shahal N — Performance Marketer",
  description: "Privacy Policy for shahaln.com — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://shahaln.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "When you use the contact form on this website, we collect the personal information you voluntarily provide, including your name, email address, phone number, and the content of your message. We do not collect information through cookies or tracking technologies beyond standard server logs."
    },
    {
      title: "How We Use Your Information",
      content: "The information you provide is used solely to respond to your inquiry and to communicate with you about potential services. We do not sell, rent, or share your personal information with third parties for marketing purposes."
    },
    {
      title: "Data Retention",
      content: "We retain your contact information only as long as necessary to fulfill the purpose for which it was collected or as required by applicable laws. Inquiries that do not result in an engagement are typically deleted within 12 months."
    },
    {
      title: "Third-Party Services",
      content: "This website may use third-party services such as Google Analytics for anonymised website traffic analysis. These services have their own privacy policies, and we encourage you to review them."
    },
    {
      title: "Your Rights",
      content: "You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, please contact us at shahalnwork@gmail.com."
    },
    {
      title: "Security",
      content: "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "Contact",
      content: "If you have any questions about this Privacy Policy, please contact us at shahalnwork@gmail.com or call +91 759 305 2256."
    }
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-white/30 uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-[#3b82f6] transition-colors">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Privacy <span className="text-[#3b82f6] italic font-serif">Policy.</span></h1>
          <p className="text-white/40 text-sm">Last updated: July 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <p className="text-white/60 leading-relaxed mb-12">
            This Privacy Policy describes how Shahal N (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) collects, uses, and protects information gathered through this website (shahaln.com). By using this website, you agree to the practices described in this policy.
          </p>
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="pb-10 border-b border-white/8 last:border-0">
                <h2 className="font-heading text-xl font-bold mb-4 text-[#3b82f6]">{i + 1}. {section.title}</h2>
                <p className="text-white/60 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
