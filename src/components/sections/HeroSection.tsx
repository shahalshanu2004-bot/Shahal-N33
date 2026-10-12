"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Disable on touch devices/small screens
      if (window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll parallax
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 1000], [0, -150]);
  const scaleVisual = useTransform(scrollY, [0, 1000], [1, 0.9]);
  const yVisual = useTransform(scrollY, [0, 1000], [0, 100]);

  const smoothMouseX = useSpring(mousePosition.x, { stiffness: 40, damping: 30 });
  const smoothMouseY = useSpring(mousePosition.y, { stiffness: 40, damping: 30 });

  const visualX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const visualY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);
  
  const bgShape1X = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const bgShape1Y = useTransform(smoothMouseY, [-1, 1], [-20, 20]);

  const bgShape2X = useTransform(smoothMouseX, [-1, 1], [30, -30]);
  const bgShape2Y = useTransform(smoothMouseY, [-1, 1], [30, -30]);

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const headlineLines = [
    ["I", "TURN", "AD", "SPEND"],
    ["INTO", "MEASURABLE"],
    ["BUSINESS", "GROWTH."]
  ];

  let wordCounter = 0;

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050508] text-white pt-24 pb-0">
      
      {/* Background Parallax Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: bgShape1X, y: bgShape1Y }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]" 
        />
        <motion.div 
          style={{ x: bgShape2X, y: bgShape2Y }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#3b82f6]/[0.06] rounded-full blur-[160px]" 
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            style={{ y: yContent }}
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="flex items-center gap-3 mb-6 w-max px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">AVAILABLE FOR FREELANCE PROJECTS</p>
            </motion.div>

            {/* Headline with Word-by-Word Reveal */}
            <h1 className="mb-6 flex flex-col gap-1 sm:gap-2">
              {headlineLines.map((lineWords, lineIdx) => (
                <div key={lineIdx} className="flex flex-wrap overflow-hidden">
                  {lineWords.map((word, wordIdx) => {
                    const currentCount = wordCounter++;
                    return (
                      <div key={wordIdx} className="overflow-hidden inline-block mr-[0.26em] last:mr-0">
                        <motion.span
                          initial={{ y: "115%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            duration: 0.85,
                            delay: 0.22 + currentCount * 0.055,
                            ease: EASE
                          }}
                          className="inline-block font-heading text-[11vw] leading-[0.88] sm:text-[9vw] md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter uppercase"
                        >
                          {word}
                        </motion.span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </h1>

            {/* Supporting Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.72, ease: EASE }}
            >
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-4 font-light">
                Performance marketer helping businesses across Kerala, India, and the GCC acquire customers through Meta Ads, Google Ads, app marketing, and conversion tracking — built on data, structured testing, and measurable outcomes.
              </p>
              <p className="text-white/40 text-xs md:text-sm font-medium tracking-widest uppercase mb-10">
                SHAHAL N — PERFORMANCE MARKETER
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.9, ease: EASE }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                href="#experience"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  VIEW MY RESULTS
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
              
              <Link 
                href="#contact"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:border-[#3b82f6]/60 hover:text-[#3b82f6] hover:-translate-y-0.5 hover:bg-[#3b82f6]/[0.05] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
              >
                <span className="relative z-10">LET&apos;S WORK TOGETHER</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div 
            style={{ y: yVisual, scale: scaleVisual }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end perspective-[1000px] mt-10 lg:mt-0"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.45, ease: EASE }}
              style={{ x: visualX, y: visualY, rotateX: useTransform(smoothMouseY, [-1, 1], [3, -3]), rotateY: useTransform(smoothMouseX, [-1, 1], [-3, 3]) }}
              className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl"
            >
              {/* Restrained subtle blue glow behind image */}
              <div className="absolute inset-0 bg-[#3b82f6]/15 rounded-3xl blur-[50px] transform -translate-y-3 pointer-events-none" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl group transition-all duration-500 hover:border-[#3b82f6]/30">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
                
                {/* Profile Image */}
                <div className="w-full h-full relative transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                   <Image 
                     src="/images/profile.jpg" 
                     alt="Shahal N - Performance Marketer, Meta & Google Ads Specialist" 
                     fill 
                     className="object-cover object-[75%_top]"
                     priority
                   />
                </div>
              </div>

              {/* Floating skill labels */}
              {[
                { text: "META ADS", top: "10%", left: "-10%", delay: 1.1, floatDuration: "6s" },
                { text: "APP GROWTH", top: "40%", left: "-15%", delay: 1.25, floatDuration: "7s" },
                { text: "LEAD GENERATION", bottom: "20%", left: "-5%", delay: 1.4, floatDuration: "6.5s" },
                { text: "ROAS", top: "15%", right: "-10%", delay: 1.15, floatDuration: "5.5s" },
                { text: "GOOGLE ADS", top: "50%", right: "-15%", delay: 1.3, floatDuration: "6.8s" },
                { text: "ANALYTICS", bottom: "25%", right: "-5%", delay: 1.45, floatDuration: "6.2s" },
              ].map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: label.delay, ease: EASE }}
                  className="absolute hidden md:flex px-4 py-2 bg-[#111116]/85 backdrop-blur-md border border-white/10 hover:border-[#3b82f6]/40 transition-colors duration-300 rounded-full text-[10px] font-bold tracking-wider uppercase text-white/85 shadow-xl select-none"
                  style={{ 
                    top: label.top, 
                    bottom: label.bottom, 
                    left: label.left, 
                    right: label.right,
                    animation: `floatHero ${label.floatDuration} ease-in-out ${i * 0.4}s infinite alternate`
                  }}
                >
                  {label.text}
                </motion.div>
              ))}

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Marquee Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        className="w-full overflow-hidden border-y border-white/5 py-5 mt-12 bg-[#050508] relative z-10 flex group"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div
          className="flex whitespace-nowrap items-center w-max group-hover:[animation-play-state:paused]"
          style={{ animation: "marqueeTicker 42s linear infinite" }}
        >
          {/* Duplicate text for seamless loop */}
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              {[
                "META ADS", "GOOGLE ADS", "APP MARKETING", 
                "LEAD GENERATION", "CONVERSION TRACKING", "CAMPAIGN OPTIMIZATION", 
                "PERFORMANCE STRATEGY", "SEO", "WEBSITE DEVELOPMENT", 
                "CONTENT CREATION", "AI AUTOMATION", "AI VIDEO MARKETING"
              ].map((skill, index) => (
                <div key={`${i}-${index}`} className="flex items-center">
                  <span className="font-heading font-bold text-sm sm:text-base md:text-lg uppercase tracking-[0.15em] px-8 transition-colors duration-300 cursor-default text-[#3b82f6]/60 hover:text-[#3b82f6] hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                    {skill}
                  </span>
                  <span className="text-white/40 text-lg flex-shrink-0">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatHero {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes marqueeTicker {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </section>
  );
}

