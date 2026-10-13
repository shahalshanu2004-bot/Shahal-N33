"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth } from "@/lib/analytics";

export default function ScrollTracker() {
  const pathname = usePathname();
  const tracked50 = useRef(false);
  const tracked90 = useRef(false);

  useEffect(() => {
    tracked50.current = false;
    tracked90.current = false;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;

          if (docHeight <= 0) {
            ticking = false;
            return;
          }

          const scrollPercent = (scrollTop / docHeight) * 100;

          if (!tracked50.current && scrollPercent >= 50) {
            tracked50.current = true;
            trackScrollDepth(50);
          }

          if (!tracked90.current && scrollPercent >= 90) {
            tracked90.current = true;
            trackScrollDepth(90);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
