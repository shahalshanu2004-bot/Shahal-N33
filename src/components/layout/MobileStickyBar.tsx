"use client";

import { siteConfig } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";
import Link from "next/link";
import { MessageSquare, ShieldCheck } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09090c]/90 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* WhatsApp message button */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackWhatsAppClick("mobile_sticky_bar")}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-wider text-[11px] leading-tight shadow-[0_0_15px_rgba(37,211,102,0.3)] active:scale-95 transition-all text-center"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Free Audit button */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#3b82f6] text-white font-bold uppercase tracking-wider text-[11px] leading-tight shadow-[0_0_15px_rgba(59,130,246,0.3)] active:scale-95 transition-all text-center"
        >
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Free Audit</span>
        </Link>
      </div>
    </aside>
  );
}
