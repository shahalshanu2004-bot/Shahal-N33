import { SITE_URL } from "../../lib/site";
﻿import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shahal N — Performance Marketer",
  description: "Terms and conditions for engaging Shahal N's performance marketing consulting services.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  const sections = [
    {
      title: "Services",
      content: "Shahal N provides digital marketing consulting services including but not limited to: Meta Ads management, Google Ads management, SEO strategy, social media marketing, website development, and AI automation. The specific services, deliverables, timelines, and fees for each engagement are agreed upon in writing prior to commencement of work."
    },
    {
      title: "Payment Terms",
      content: "Payment terms are specified in the individual service agreement or proposal. Typically, a 50% deposit is required before work commences, with the remaining balance due upon completion or on a monthly retainer basis. All fees are non-refundable unless otherwise stated in the service agreement."
    },
    {
      title: "Client Responsibilities",
      content: "Clients are responsible for providing accurate information, timely feedback, necessary access to accounts and assets, and ensuring they have the legal right to use all content provided for marketing purposes. Delays caused by the client may affect delivery timelines."
    },
    {
      title: "Intellectual Property",
      content: "Upon receipt of full payment, clients own the deliverables created for their specific project. Shahal N retains the right to reference completed work in a portfolio or case study (with client permission) and retains ownership of all proprietary methodologies, frameworks, and tools used in the delivery of services."
    },
    {
      title: "Confidentiality",
      content: "Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives the termination of the service agreement."
    },
    {
      title: "Limitation of Liability",
      content: "While every effort is made to achieve the best possible results, Shahal N cannot guarantee specific outcomes from marketing campaigns, as results depend on many factors outside of our control including market conditions, platform algorithm changes, and client-side factors. Total liability shall not exceed the total fees paid for the relevant service."
    },
    {
      title: "Termination",
      content: "Either party may terminate an ongoing engagement with 30 days written notice. Work completed up to the date of termination will be invoiced and payable by the client."
    },
    {
      title: "Governing Law",
      content: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kerala, India."
    }
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-white/30 uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-[#3b82f6] transition-colors">Home</Link>
            <span>/</span>
            <span>Terms & Conditions</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Terms & <span className="text-[#3b82f6] italic font-serif">Conditions.</span></h1>
          <p className="text-white/40 text-sm">Last updated: July 2024</p>
        </div>
      </section>

      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <p className="text-white/60 leading-relaxed mb-12">
            By engaging the services of Shahal N, you agree to the following terms and conditions. Please read them carefully before proceeding with any engagement.
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
