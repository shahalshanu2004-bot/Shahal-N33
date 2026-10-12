import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="font-heading text-[200px] md:text-[300px] font-bold leading-none text-white/[0.03] select-none">404</p>
        <div className="-mt-16 md:-mt-24">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Page Not <span className="text-[#3b82f6] italic font-serif">Found.</span>
          </h1>
          <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="px-8 py-4 rounded-full bg-[#3b82f6] text-black font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors">
              Go Home
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium tracking-widest uppercase text-sm hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
