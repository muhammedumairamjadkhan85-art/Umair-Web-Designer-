import React, { useState } from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/studioData';
import { PortfolioItem, PortfolioCategory } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface PortfolioSectionProps {
  onOpenProjectWizard: (preselectedService?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenProjectWizard,
}) => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filterTabs: { id: PortfolioCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business & SaaS' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'ui-ux', label: 'UI/UX Design' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
              <span>SELECTED WORK</span>
              <span aria-hidden="true" className="text-[#30263F]">·</span>
              <span className="text-[#A7A2B5]">PORTFOLIO & CASE STUDIES</span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]"
              style={{ textWrap: 'balance' }}
            >
              Crafted with Rigor and Intent
            </h2>
          </div>

          <p className="text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] max-w-md">
            A hybrid showcase of verified client deliverables and concept design architectures built to demonstrate our standard of craft.
          </p>
        </div>

        {/* Interactive Filter Controls (Segmented Tabs with Active State) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#0E0A18]/60 dark:bg-[#0E0A18]/60 light:bg-white max-w-fit mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#7C3AED] text-white shadow-sm'
                  : 'text-[#A7A2B5] hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: PortfolioItem) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl overflow-hidden border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/80 dark:bg-[#0E0A18]/80 light:bg-white hover:border-[#9B5CFF]/70 transition-all duration-300"
            >
              {/* Card Image Slot with High-Fidelity Aspect Ratio & Fallback */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-[#08080D] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080D]/90 via-black/20 to-transparent pointer-events-none" />

                {/* Clean Unboxed Metadata on Top Bar of Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-[#F7F5FC]">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#C4B5FD] border border-white/10">
                    {project.typeLabel}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-[#A7A2B5] border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Quick Action */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#7C3AED] text-white text-xs font-semibold tracking-wider uppercase shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    Explore Study
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  {/* Clean unboxed category metadata with separator */}
                  <div className="flex items-center gap-2 text-xs text-[#A7A2B5] mb-2 font-mono">
                    <span className="text-[#C4B5FD]">{project.categoryLabel}</span>
                    <span aria-hidden="true" className="text-[#30263F]">·</span>
                    <span>{project.scope.join(' / ')}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display text-xl sm:text-2xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-3 group-hover:text-[#C4B5FD] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#30263F]/50 dark:border-[#30263F]/50 light:border-[#E2DCED] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C4B5FD] hover:text-white dark:hover:text-white light:text-[#7C3AED] light:hover:text-[#5B21B6] transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[11px] font-mono text-[#A7A2B5]">
                    {project.deliverables.length} Deliverables
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honesty & Confidentiality Note */}
        <div className="mt-12 p-5 rounded-lg border border-[#30263F]/50 dark:border-[#30263F]/50 light:border-[#E2DCED] bg-[#120B20]/40 dark:bg-[#120B20]/40 light:bg-[#FAF9FD] text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#A7A2B5] leading-relaxed">
            <strong className="text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">Portfolio Authenticity:</strong> All projects marked as "Concept Project — Demonstration Design" are original architectural and interface explorations authored by VELTRIX. Select client work is retained under strict non-disclosure agreements and shared only during private consultation.
          </p>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={(title) => {
          setSelectedProject(null);
          onOpenProjectWizard(`Project inspired by ${title}`);
        }}
      />
    </section>
  );
};
