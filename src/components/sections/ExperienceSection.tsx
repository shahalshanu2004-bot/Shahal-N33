"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { experienceProjects, additionalExperience } from "@/lib/data/experience";
import { caseStudiesDetail, CaseStudyDetail } from "@/lib/data/case-studies-detail";
import CaseStudyModal from "@/components/modals/CaseStudyModal";
import Link from "next/link";

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedModalDetail, setSelectedModalDetail] = useState<CaseStudyDetail | null>(null);

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const openModal = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    const detail = caseStudiesDetail[slug];
    if (detail) {
      setSelectedModalDetail(detail);
    }
  };

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#050508] relative border-b border-white/5" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-20 md:mb-24 flex flex-col items-start"
        >
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-black text-white uppercase tracking-tighter leading-none mb-6">
            SELECTED <br /> <span className="text-[#3b82f6]">WORK</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-2xl">
            Selected campaigns and projects where strategy, paid acquisition, testing and optimization translated into measurable outcomes.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-10">
          {experienceProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[#0c0c0e] rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#3b82f6]/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="block relative z-10 p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LEFT: Project Number & Category */}
                  <div className="lg:col-span-3 flex flex-col">
                    <span className="text-white/20 font-heading text-6xl font-black group-hover:text-[#3b82f6]/30 transition-colors duration-300">
                      {project.id}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-[#3b82f6] transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CENTER: Project Title & Optional Metadata */}
                  <div className="lg:col-span-5 flex flex-col justify-center h-full">
                    <Link href={`/case-studies/${project.slug}`}>
                      <h3 className="font-heading text-2xl md:text-4xl font-bold text-white uppercase tracking-tight leading-[1.2] group-hover:translate-x-1.5 transition-transform duration-300 mb-3 hover:text-[#3b82f6]">
                        {project.title}
                      </h3>
                    </Link>

                    {/* Optional metadata: My Role, Duration, Ad Spend */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50">
                      {(project.myRole || project.role) && (
                        <div>
                          <span className="text-white/30 uppercase tracking-wider text-[10px] block">Role</span>
                          <span className="text-white/80 font-medium">{project.myRole || project.role}</span>
                        </div>
                      )}
                      {(project.campaignDuration || project.timeline) && (
                        <div>
                          <span className="text-white/30 uppercase tracking-wider text-[10px] block">Duration</span>
                          <span className="text-white/80 font-medium">{project.campaignDuration || project.timeline}</span>
                        </div>
                      )}
                      {project.adSpend && (
                        <div>
                          <span className="text-white/30 uppercase tracking-wider text-[10px] block">Ad Spend</span>
                          <span className="text-[#3b82f6] font-semibold">{project.adSpend}</span>
                        </div>
                      )}
                    </div>

                    {(project.conversionDefinition || project.metricDefinition) && (
                      <p className="text-[11px] text-white/40 mt-3 font-light leading-relaxed">
                        <span className="text-white/60 font-medium">Conversion:</span> {project.conversionDefinition || project.metricDefinition}
                      </p>
                    )}
                  </div>

                  {/* RIGHT: Key Metric & Buttons */}
                  <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end h-full">
                    <div className="bg-[#111116] border border-white/5 p-6 rounded-2xl w-full group-hover:border-[#3b82f6]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)]">
                      <p className="text-[#3b82f6] font-heading text-2xl md:text-3xl font-black mb-2">
                        {project.result}
                      </p>
                      <p className="text-white/70 text-xs font-medium">
                        {project.resultLabel}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-6">
                      <button
                        type="button"
                        onClick={(e) => openModal(e, project.slug)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 hover:bg-[#3b82f6] border border-[#3b82f6]/30 text-[#3b82f6] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full Breakdown</span>
                      </button>

                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors duration-200 text-xs font-bold tracking-widest uppercase"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE CONTENT ON HOVER */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 mt-8 border-t border-white/10">
                        {project.sections?.map((sec, i) => (
                          <div key={i}>
                            <p className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest mb-3">{sec.title}</p>
                            <p className="text-sm text-white/70 leading-relaxed">{sec.content}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ADDITIONAL CAMPAIGNS */}
        <div className="mt-28 md:mt-32">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-10 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#3b82f6]"></span>
            ADDITIONAL CAMPAIGN EXPERIENCE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-[#08080b] border border-white/5 p-6 rounded-2xl hover:border-[#3b82f6]/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <p className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest mb-4">{exp.type}</p>
                  <h4 className="text-xl font-bold text-white mb-2">{exp.client}</h4>
                  <p className="text-white/50 text-xs mb-4">{exp.role}</p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{exp.objective}</p>
                  {(exp.numericResult || exp.metric) ? (
                    <p className="text-[#3b82f6] font-bold text-sm tracking-wide mt-1">{exp.numericResult || exp.metric}</p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedModalDetail && (
        <CaseStudyModal
          detail={selectedModalDetail}
          isOpen={!!selectedModalDetail}
          onClose={() => setSelectedModalDetail(null)}
        />
      )}
    </section>
  );
}
