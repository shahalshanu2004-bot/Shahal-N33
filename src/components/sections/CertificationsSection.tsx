"use client";

import { certifications } from "@/lib/data/certifications";
import { Award } from "lucide-react";

export default function CertificationsSection() {
  // Render ONLY if certifications exist
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-[#0c0c0e] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3b82f6]">
            ACCREDITED EXPERTISE
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#050508] border border-white/10 hover:border-[#3b82f6]/40 transition-colors shadow-sm"
            >
              <Award className="w-4 h-4 text-[#3b82f6]" />
              <div className="text-left">
                <p className="text-xs font-bold uppercase text-white tracking-wider">
                  {cert.title}
                </p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">
                  {cert.issuer} {cert.issuedYear ? `· ${cert.issuedYear}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
