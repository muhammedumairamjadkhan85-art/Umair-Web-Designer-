import React, { useEffect } from 'react';
import { X, ArrowRight, Check, Layers, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../types';

interface CaseStudyModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onStartSimilarProject: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0A18] dark:bg-[#0E0A18] light:bg-white border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] rounded-xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#171027]/70 dark:bg-[#171027]/70 light:bg-[#F7F5FC]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-[#30263F]">·</span>
            <span className="text-xs text-[#A7A2B5] tracking-wide">
              {project.typeLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A7A2B5] hover:text-white dark:hover:text-white light:hover:text-[#08080D] hover:bg-[#30263F]/50 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Short Desc */}
          <div>
            <h2
              id="case-study-title"
              className="font-display text-2xl sm:text-3xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-3"
            >
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Large Visual Preview */}
          <div className="relative rounded-xl overflow-hidden border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] aspect-[16/10] bg-[#08080D]">
            <img
              src={project.image}
              alt={project.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/75 backdrop-blur-sm rounded text-[11px] font-mono text-[#C4B5FD] border border-white/10">
              {project.typeLabel}
            </div>
          </div>

          {/* Deep-dive Sections: Challenge, Strategy, Solution */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#120B20]/40 dark:bg-[#120B20]/40 light:bg-[#FAF9FD]">
              <span className="text-[11px] font-mono text-[#C4B5FD] uppercase tracking-wider block mb-2">
                01. THE CHALLENGE
              </span>
              <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#120B20]/40 dark:bg-[#120B20]/40 light:bg-[#FAF9FD]">
              <span className="text-[11px] font-mono text-[#C4B5FD] uppercase tracking-wider block mb-2">
                02. DESIGN STRATEGY
              </span>
              <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
                {project.strategy}
              </p>
            </div>

            <div className="p-5 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#120B20]/40 dark:bg-[#120B20]/40 light:bg-[#FAF9FD]">
              <span className="text-[11px] font-mono text-[#C4B5FD] uppercase tracking-wider block mb-2">
                03. THE SOLUTION
              </span>
              <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-xs font-mono text-[#C4B5FD] tracking-wider uppercase mb-3">
              KEY DELIVERABLES & ARTIFACTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#120E1E] p-2.5 rounded bg-[#171027]/40 dark:bg-[#171027]/40 light:bg-[#F2EDFB] border border-[#30263F]/40 dark:border-[#30263F]/40 light:border-[#E2DCED]"
                >
                  <Check className="w-3.5 h-3.5 text-[#9B5CFF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#171027]/60 dark:bg-[#171027]/60 light:bg-[#F7F5FC] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#A7A2B5]">
            Interested in a comparable build for your company?
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#A7A2B5] hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartSimilarProject(project.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md transition-all shadow-md shadow-[#7C3AED]/30 cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
