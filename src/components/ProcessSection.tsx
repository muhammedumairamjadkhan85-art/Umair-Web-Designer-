import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/studioData';
import { ProcessStep } from '../types';

interface ProcessSectionProps {
  onOpenProjectWizard: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenProjectWizard,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep: ProcessStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
            <span>METHODOLOGY</span>
            <span aria-hidden="true" className="text-[#30263F]">·</span>
            <span className="text-[#A7A2B5]">HOW WE COLLABORATE</span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4"
            style={{ textWrap: 'balance' }}
          >
            A Systematic 6-Stage Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
            From initial discovery to final deployment, every project is executed through structured milestones with total transparency and dedicated review checkpoints.
          </p>
        </div>

        {/* Desktop Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'border-[#9B5CFF] bg-[#1E1435] text-white shadow-md'
                  : 'border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#0E0A18]/60 dark:bg-[#0E0A18]/60 light:bg-white text-[#A7A2B5] hover:text-[#F7F5FC] hover:border-[#30263F]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs text-[#C4B5FD] font-semibold">
                  {step.number}
                </span>
                <Clock className="w-3 h-3 text-[#A7A2B5]" />
              </div>
              <div className="text-xs font-bold truncate text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                {step.title}
              </div>
              <div className="text-[10px] text-[#A7A2B5] truncate mt-0.5">
                {step.timelineEstimate}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown Card */}
        <div className="p-8 sm:p-10 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/90 dark:bg-[#0E0A18]/90 light:bg-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-sm text-[#C4B5FD] font-semibold">
                  STAGE {activeStep.number} OF 06
                </span>
                <span aria-hidden="true" className="text-[#30263F]">·</span>
                <span className="text-xs font-mono text-[#A7A2B5]">
                  TYPICAL WINDOW: {activeStep.timelineEstimate}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4">
                {activeStep.title} — {activeStep.summary}
              </h3>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono text-[#C4B5FD] tracking-wider uppercase block">
                  KEY ACTIVITIES DURING THIS STAGE:
                </span>
                {activeStep.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458]">
                    <CheckCircle2 className="w-4 h-4 text-[#9B5CFF] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full p-6 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD]">
              <div>
                <span className="text-[11px] font-mono tracking-wider text-[#C4B5FD] uppercase block mb-1">
                  STAGE MILESTONE DELIVERABLE
                </span>
                <h4 className="text-base font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-3">
                  {activeStep.deliverable}
                </h4>
                <p className="text-xs text-[#A7A2B5] leading-relaxed">
                  Every milestone requires explicit client sign-off before advancing to the subsequent stage, preventing scope creep and ensuring aligned expectations.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#30263F]/60 flex items-center justify-between">
                <span className="text-xs text-[#A7A2B5]">
                  Ready to map your timeline?
                </span>
                <button
                  type="button"
                  onClick={onOpenProjectWizard}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded transition-colors cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Variation Notice */}
        <p className="text-xs text-[#A7A2B5] mt-6 text-center">
          Note: Exact timelines and sprint phases are tailored during Discovery based on scope, feature complexity, and asset readiness.
        </p>
      </div>
    </section>
  );
};
