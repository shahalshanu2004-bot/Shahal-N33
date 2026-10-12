"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    // Restrained, subtle parallax effect on the visual
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: 36,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section id="about" ref={sectionRef} className="py-28 md:py-36 relative z-10 bg-[#050508] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center" ref={textRef}>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="mb-10"
            >
              <span className="text-[#3b82f6] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                HELLO, I&apos;M
              </span>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-2">
                SHAHAL N
              </h2>
              <h3 className="font-heading text-2xl md:text-3xl text-white/50 uppercase tracking-wide font-black">
                PERFORMANCE MARKETER
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
              className="space-y-6"
            >
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light max-w-xl">
                I help businesses acquire customers through paid advertising, app marketing and conversion-focused campaigns.
              </p>
              
              <p className="text-[#3b82f6] text-sm md:text-base font-bold tracking-widest uppercase">
                Meta Ads &middot; Google Ads &middot; App Marketing &middot; Analytics
              </p>
              
              <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
                I treat advertising as a measurable growth system &mdash; from audience and creative to tracking, optimization and scale.
              </p>
            </motion.div>

            {/* Horizontal Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.75, delay: 0.4, ease: EASE }}
              className="mt-12 overflow-x-auto pb-4 hide-scrollbar"
            >
              <div className="flex items-center gap-4 min-w-max text-[10px] md:text-xs font-bold tracking-widest text-white/40">
                {["01 AUDIENCE", "02 CREATIVE", "03 CAMPAIGN", "04 TRACKING", "05 OPTIMIZE", "06 SCALE"].map((step, index, arr) => (
                  <div key={step} className="flex items-center gap-4 group cursor-default">
                    <span className="text-white/80 uppercase group-hover:text-white transition-colors">{step}</span>
                    {index < arr.length - 1 && <span className="text-[#3b82f6] opacity-70 group-hover:opacity-100 transition-opacity">→</span>}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Statement */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.75, delay: 0.55, ease: EASE }}
              className="mt-12 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 border-l-4 border-l-[#3b82f6] shadow-2xl hover:border-l-[#60a5fa] hover:border-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-500 group"
            >
              <p className="font-heading text-lg md:text-xl font-bold uppercase tracking-wide text-white/90 leading-relaxed">
                I DON&apos;T OPTIMIZE FOR VANITY METRICS.<br/>
                <span className="text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors duration-300">I OPTIMIZE FOR BUSINESS OUTCOMES.</span>
              </p>
            </motion.div>
          </div>
          
          {/* Right Image */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end relative group">
            {/* Restrained Ambient Glow */}
            <div className="absolute inset-0 bg-[#3b82f6]/10 blur-[100px] opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="relative w-full max-w-[700px] z-10"
            >
              <img 
                ref={imageRef}
                src="/about-laptop.jpg" 
                alt="Performance Marketing Analytics and Campaign Optimization Dashboard"
                width={700}
                height={450}
                loading="lazy"
                className="w-full h-auto object-contain brightness-110 contrast-110 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatAbout {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
