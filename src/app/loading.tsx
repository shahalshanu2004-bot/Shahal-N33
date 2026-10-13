export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-[#3b82f6]/20 animate-ping" />
          <div className="w-16 h-16 rounded-full border-2 border-t-[#3b82f6] border-r-transparent border-b-[#3b82f6]/40 border-l-transparent animate-spin" />
        </div>
        <div className="text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-white/90">
            SHAHAL N<span className="text-[#3b82f6]">.</span>
          </p>
          <p className="text-[11px] uppercase tracking-widest text-white/40 mt-1">
            Loading Performance Data...
          </p>
        </div>
      </div>
    </div>
  );
}
