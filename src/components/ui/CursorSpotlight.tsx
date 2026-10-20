"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".interactive");
        
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!mounted || (typeof window !== "undefined" && window.innerWidth < 768)) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#3b82f6]/40 rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.25 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(59, 130, 246, 0.7)" : "rgba(59, 130, 246, 0.3)",
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 24,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#3b82f6] rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0,
        }}
      />
    </>
  );
}
