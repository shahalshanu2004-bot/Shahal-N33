"use client";

import { useEffect } from "react";
import { trackCaseStudyView } from "@/lib/analytics";

interface CaseStudyTrackerProps {
  slug: string;
  title: string;
}

export default function CaseStudyTracker({ slug, title }: CaseStudyTrackerProps) {
  useEffect(() => {
    trackCaseStudyView(slug, title);
  }, [slug, title]);

  return null;
}
