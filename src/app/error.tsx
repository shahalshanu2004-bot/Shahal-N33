"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Runtime Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-lg text-center relative z-10 p-8 rounded-3xl bg-[#0c0c0e] border border-white/10 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="font-heading text-3xl font-black uppercase tracking-tight text-white mb-3">
          Something Went Wrong
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          An unexpected error occurred while loading this page. You can attempt to reload or navigate back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3b82f6] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 font-bold text-xs uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all"
          >
            <Home className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
