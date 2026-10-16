"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { CaseStudyDetail, CaseStudyScreenshot } from "@/lib/data/case-studies-detail";
import { X, Download, ZoomIn, CheckCircle2 } from "lucide-react";

interface CaseStudyModalProps {
  detail: CaseStudyDetail;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ detail, isOpen, onClose }: CaseStudyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState<CaseStudyScreenshot | null>(null);

  // Determine available tabs with memoization
  const availableTabs: Array<{ id: "overview" | "strategy" | "screenshots" | "learnings"; label: string }> =
    useMemo(() => {
      const tabs: Array<{ id: "overview" | "strategy" | "screenshots" | "learnings"; label: string }> = [];
      if (detail.overview) {
        tabs.push({ id: "overview", label: "Overview & Objective" });
      }
      if (detail.strategy) {
        tabs.push({ id: "strategy", label: "Funnel & Targeting Strategy" });
      }
      if (detail.screenshots && detail.screenshots.length > 0) {
        tabs.push({ id: "screenshots", label: "Proof Screenshots" });
      }
      if (detail.learnings) {
        tabs.push({ id: "learnings", label: "Key Learnings & Scaling" });
      }
      return tabs;
    }, [detail]);

  const [activeTab, setActiveTab] = useState<string>(availableTabs[0]?.id || "overview");

  useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.some((t) => t.id === activeTab)) {
      setActiveTab(availableTabs[0].id);
    }
  }, [availableTabs, activeTab]);

  // Focus trap & ESC to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeLightboxImg) {
          setActiveLightboxImg(null);
        } else {
          onClose();
        }
      }
    },
    [onClose, activeLightboxImg]
  );

  useEffect(() => {
    if (!isOpen) return;

    // Scroll lock without layout shift
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener("keydown", handleKeyDown);

    // Focus inside modal
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0e] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden focus:outline-none"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/10 bg-[#09090c]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/30 text-[#3b82f6] text-[10px] font-bold uppercase tracking-wider">
                Case Study Breakdown
              </span>
              {detail.pdfUrl && (
                <a
                  href={detail.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3 h-3 text-[#3b82f6]" />
                  <span>Download PDF</span>
                </a>
              )}
            </div>
            <h2 id="modal-case-study-title" className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              {detail.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Tabs Header */}
        {availableTabs.length > 1 && (
          <div className="flex items-center gap-2 px-6 sm:px-8 border-b border-white/10 bg-[#09090c]/50 overflow-x-auto no-scrollbar">
            {availableTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "border-[#3b82f6] text-[#3b82f6]"
                    : "border-transparent text-white/40 hover:text-white/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Modal Tab Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-white/70 font-light leading-relaxed">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && detail.overview && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {detail.overview.clientIndustry && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/30 text-[10px] uppercase tracking-wider block mb-1">Industry</span>
                    <p className="text-white font-medium text-xs sm:text-sm">{detail.overview.clientIndustry}</p>
                  </div>
                )}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/30 text-[10px] uppercase tracking-wider block mb-1">Role</span>
                  <p className="text-white font-medium text-xs sm:text-sm">{detail.overview.role}</p>
                </div>
                {detail.overview.timeline && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/30 text-[10px] uppercase tracking-wider block mb-1">Timeline</span>
                    <p className="text-white font-medium text-xs sm:text-sm">{detail.overview.timeline}</p>
                  </div>
                )}
                {detail.overview.adSpend && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/30 text-[10px] uppercase tracking-wider block mb-1">Ad Spend Managed</span>
                    <p className="text-[#3b82f6] font-bold text-xs sm:text-sm">{detail.overview.adSpend}</p>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-2">Campaign Objective</h4>
                <p className="text-white/80 text-base">{detail.overview.objective}</p>
              </div>

              {/* App Marketing Public Play + Empty Campaign Block */}
              {detail.isAppMarketing && (
                <div className="p-6 rounded-2xl bg-[#08080b] border border-white/10 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">
                      Platform Visibility
                    </span>
                    <p className="text-white font-bold text-base">{detail.publicPlayDownloads}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3b82f6] block mb-2">
                      My Campaign Results (Paid Ads Attribution)
                    </span>
                    {/* TODO(shahal): Add verified spend, CPI, purchase cost, and ROAS */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/50">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="block text-white/30 text-[10px]">Spend</span>
                        <span>{detail.myCampaignResults?.spend || "Pending verification"}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="block text-white/30 text-[10px]">CPI</span>
                        <span>{detail.myCampaignResults?.cpi || "Pending verification"}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="block text-white/30 text-[10px]">Purchase Cost</span>
                        <span>{detail.myCampaignResults?.purchaseCost || "Pending verification"}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="block text-white/30 text-[10px]">ROAS</span>
                        <span>{detail.myCampaignResults?.roas || "Pending verification"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: STRATEGY */}
          {activeTab === "strategy" && detail.strategy && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-2">Targeting & Funnel Strategy</h4>
                <p className="text-white/80 text-base">{detail.strategy.strategyText}</p>
              </div>

              {detail.strategy.whatITested && (
                <div className="p-5 rounded-2xl bg-[#09090c] border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">Creative & Hook Testing</h4>
                  <p className="text-white/60">{detail.strategy.whatITested}</p>
                </div>
              )}

              {detail.strategy.whatChangedOptimized && (
                <div className="p-5 rounded-2xl bg-[#09090c] border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">Optimization & Adjustments</h4>
                  <p className="text-white/60">{detail.strategy.whatChangedOptimized}</p>
                </div>
              )}

              {detail.strategy.executionScope && detail.strategy.executionScope.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">Key Execution Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {detail.strategy.executionScope.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SCREENSHOTS */}
          {activeTab === "screenshots" && detail.screenshots && detail.screenshots.length > 0 && (
            <div className="space-y-4">
              <p className="text-xs text-white/40">Click any proof screenshot to enlarge in lightbox view.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveLightboxImg(s)}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#3b82f6]/50 transition-all text-left"
                  >
                    <div className="relative aspect-video w-full bg-black/50">
                      <Image src={s.url} alt={s.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {s.caption && (
                      <div className="p-3 bg-[#09090c]">
                        <p className="text-xs text-white/70">{s.caption}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: LEARNINGS */}
          {activeTab === "learnings" && detail.learnings && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#09090c] border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-2">Key Campaign Takeaways</h4>
                <p className="text-white/80 text-base">{detail.learnings.keyLearnings}</p>
              </div>

              {detail.learnings.leadQualityNotes && (
                <div className="p-5 rounded-2xl bg-[#09090c] border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">Lead Quality & Disqualification</h4>
                  <p className="text-white/60">{detail.learnings.leadQualityNotes}</p>
                </div>
              )}

              {detail.learnings.scalingFramework && (
                <div className="p-5 rounded-2xl bg-[#09090c] border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">Scaling Framework</h4>
                  <p className="text-white/60">{detail.learnings.scalingFramework}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-[#09090c] flex items-center justify-between">
          <span className="text-[11px] text-white/40 uppercase tracking-wider">
            Verified Case Study &middot; Shahal N.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-bold uppercase text-xs tracking-wider transition-all"
          >
            Close
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div
          role="dialog"
          aria-label="Enlarged screenshot"
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveLightboxImg(null)}
        >
          <button
            type="button"
            onClick={() => setActiveLightboxImg(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-[60vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activeLightboxImg.url}
              alt={activeLightboxImg.alt}
              fill
              className="object-contain"
            />
          </div>
          {activeLightboxImg.caption && (
            <p className="text-white/80 text-sm mt-4 text-center max-w-xl">{activeLightboxImg.caption}</p>
          )}
        </div>
      )}
    </div>
  );
}
