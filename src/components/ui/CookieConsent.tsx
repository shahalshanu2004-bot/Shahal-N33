"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("shahal_cookie_consent");
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const handleChoice = (choice: "accepted" | "dismissed") => {
    try {
      localStorage.setItem("shahal_cookie_consent", choice);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 rounded-2xl bg-[#0a0f1d]/95 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-white/70 leading-relaxed">
          This site uses privacy-focused analytics to improve campaign insights. No sensitive personal data is shared.
        </p>
        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <button
            type="button"
            onClick={() => handleChoice("dismissed")}
            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
          >
            Dismiss
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
