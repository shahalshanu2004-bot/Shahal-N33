"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { ArrowRight, CheckCircle2, MessageSquare, Loader2, AlertCircle } from "lucide-react";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";

export default function AuditContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const budgetOptions = [
    "< ₹50,000 / month",
    "₹50,000 – ₹2,00,000 / month",
    "₹2,00,000 – ₹5,00,000 / month",
    "₹5,00,000+ / month",
    "New Account / Exploring",
  ];

  const businessTypes = [
    "Real Estate & Property",
    "App & Mobile Games",
    "E-commerce / D2C",
    "B2B & Professional Services",
    "Healthcare / Clinic",
    "Education / EdTech",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMessage("Please enter a valid phone or WhatsApp number.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmittedData({ ...formData });
      setStatus("success");

      // Analytics conversion event
      trackFormSubmit("ad_audit_form", {
        business_type: formData.businessType,
        budget: formData.budget,
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please reach out directly on WhatsApp.");
    }
  };

  const getWhatsAppFollowupUrl = () => {
    if (!submittedData) return siteConfig.whatsappAuditUrl;
    const text = encodeURIComponent(
      `Hi Shahal, I just requested a Free Ad Account Audit on your website.\n\n*Name:* ${submittedData.name}\n*Phone:* ${submittedData.phone}\n*Business:* ${submittedData.businessType || "N/A"}\n*Budget:* ${submittedData.budget || "N/A"}${submittedData.message ? `\n*Note:* ${submittedData.message}` : ""}`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  if (status === "success") {
    return (
      <div className="p-8 md:p-10 rounded-3xl bg-[#0c0c0e] border border-green-500/30 text-center animate-fade-in shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">
          Audit Request Received!
        </h3>
        <p className="text-white/60 text-sm md:text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
          Thank you, <span className="text-white font-medium">{submittedData?.name}</span>. I will review your information and get back to you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppFollowupUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("audit_form_success")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-all shadow-[0_0_25px_rgba(37,211,102,0.3)]"
          >
            <MessageSquare className="w-4 h-4" />
            Continue on WhatsApp with Details &rarr;
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({ name: "", phone: "", businessType: "", budget: "", message: "" });
            }}
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-white/10 text-white/60 text-xs uppercase tracking-widest font-bold hover:text-white hover:border-white/20 transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" id="audit-form">
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="audit-name" className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">
            Full Name *
          </label>
          <input
            id="audit-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Menon"
            className="w-full bg-[#09090c] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3b82f6] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="audit-phone" className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            id="audit-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full bg-[#09090c] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3b82f6] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="audit-business" className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">
            Business / Industry
          </label>
          <select
            id="audit-business"
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full bg-[#09090c] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#3b82f6] transition-colors cursor-pointer"
          >
            <option value="" className="bg-[#09090c] text-white/40">Select industry</option>
            {businessTypes.map((type) => (
              <option key={type} value={type} className="bg-[#09090c]">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="audit-budget" className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">
            Monthly Ad Budget Range
          </label>
          <select
            id="audit-budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full bg-[#09090c] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#3b82f6] transition-colors cursor-pointer"
          >
            <option value="" className="bg-[#09090c] text-white/40">Select budget range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#09090c]">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="audit-message" className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">
          Website / Ad Goals / Account Notes (Optional)
        </label>
        <textarea
          id="audit-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your current campaigns, website URL, or key acquisition challenge..."
          className="w-full bg-[#09090c] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-full bg-[#3b82f6] text-white font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Audit Request...</span>
          </>
        ) : (
          <>
            <span>Request Free Ad Account Audit</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-white/40 text-[11px] text-center font-light mt-3">
        Zero sales pressure. You will receive an actionable evaluation of your ad account within 24 hours.
      </p>
    </form>
  );
}
