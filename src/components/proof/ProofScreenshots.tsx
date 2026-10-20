"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, Eye } from "lucide-react";
import { ProofScreenshotItem } from "@/lib/proof-screenshots";

interface ProofScreenshotsProps {
  screenshots: ProofScreenshotItem[];
  title?: string;
}

export default function ProofScreenshots({
  screenshots,
  title = "Meta Ads Manager Verified Proof",
}: ProofScreenshotsProps) {
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<ProofScreenshotItem | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (item: ProofScreenshotItem, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedScreenshot(item);
  };

  const handleClose = useCallback(() => {
    setSelectedScreenshot(null);
    // Return focus to trigger element for accessibility
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  }, []);

  // Trap focus & listen to Escape
  useEffect(() => {
    if (!selectedScreenshot) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedScreenshot, handleClose]);

  // Return nothing if folder is empty (no broken boxes or empty placeholders)
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#3b82f6]" />
          {title}
        </h3>
        <span className="text-[11px] uppercase tracking-wider text-white/40">
          Click image to zoom
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {screenshots.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => handleOpen(s, e)}
            className="group relative block w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e] hover:border-[#3b82f6]/50 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all text-left"
            aria-label={`View full resolution screenshot: ${s.alt}`}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs">
                <ZoomIn className="w-4 h-4 text-[#3b82f6]" />
                <span>View Full Resolution</span>
              </div>
            </div>
            {s.caption && (
              <p className="p-3 text-[11px] text-white/60 text-center font-mono truncate">
                {s.caption}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedScreenshot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox view"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#0c0c0e] rounded-2xl border border-white/15 overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
              <p className="text-xs sm:text-sm text-white/80 font-medium truncate pr-4">
                {selectedScreenshot.alt}
              </p>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close lightbox"
                autoFocus
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto p-2 sm:p-4 bg-black flex items-center justify-center min-h-[300px]">
              <Image
                src={selectedScreenshot.src}
                alt={selectedScreenshot.alt}
                width={selectedScreenshot.width}
                height={selectedScreenshot.height}
                className="max-h-[75vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            </div>
            {selectedScreenshot.caption && (
              <div className="p-3 bg-white/[0.02] border-t border-white/5 text-center text-xs text-white/50">
                {selectedScreenshot.caption} — Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">Esc</kbd> to close
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
