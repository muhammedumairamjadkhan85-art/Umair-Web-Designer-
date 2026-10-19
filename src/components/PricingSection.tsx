import React from 'react';
import { ArrowRight, HelpCircle, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

interface PricingSectionProps {
  onOpenProjectWizard: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenProjectWizard,
}) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
            <span>PRICING ARCHITECTURE</span>
            <span aria-hidden="true" className="text-[#30263F]">·</span>
            <span className="text-[#A7A2B5]">CUSTOM QUOTES ONLY</span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-5"
            style={{ textWrap: 'balance' }}
          >
            Every Project Is Different. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#9B5CFF] to-[#7C3AED] bg-clip-text text-transparent">
              Your Quote Should Be Too.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed max-w-2xl mx-auto">
            We do not sell pre-fabricated pricing tiers or generic templates. Every investment figure is calibrated specifically to your business scope, technical specifications, and delivery horizon.
          </p>
        </div>

        {/* 2-Column Grid: What Influences Cost & The 3-Step Quoting Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left: What Drives Project Investment (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/80 dark:bg-[#0E0A18]/80 light:bg-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider block mb-2">
                TRANSPARENT VALUE MODEL
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4">
                What Influences Your Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed mb-6">
                When preparing your quote, we evaluate five core parameters to ensure complete budget transparency with zero surprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Scope & Architecture',
                    desc: 'Total viewports, custom layout templates, and information depth.',
                  },
                  {
                    title: 'Technical Integrations',
                    desc: 'Client onboarding flows, custom forms, payment gateways, or APIs.',
                  },
                  {
                    title: 'Art Direction & 3D Assets',
                    desc: 'Degree of bespoke visual identity, custom illustrations, or motion.',
                  },
                  {
                    title: 'Content & Asset Readiness',
                    desc: 'Whether copywriting and brand assets exist or require co-creation.',
                  },
                  {
                    title: 'Deployment Timeline',
                    desc: 'Standard sequential development vs. expedited sprint schedules.',
                  },
                  {
                    title: 'Post-Launch Support',
                    desc: 'Handover documentation, team training, or ongoing maintenance.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F]/50 dark:border-[#30263F]/50 light:border-[#E2DCED]"
                  >
                    <h4 className="text-xs font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#A7A2B5] leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: How Quoting Works (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#171027]/50 dark:bg-[#171027]/50 light:bg-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider block mb-2">
                ESTIMATION ROADMAP
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4">
                The 3-Step Quoting Process
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded bg-[#7C3AED]/30 text-[#C4B5FD] flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      Intake Questionnaire
                    </h4>
                    <p className="text-xs text-[#A7A2B5] mt-0.5 leading-relaxed">
                      Complete our 3-minute guided wizard detailing your project type, primary objectives, and indicative budget parameters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded bg-[#7C3AED]/30 text-[#C4B5FD] flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      Scope & Feasibility Review
                    </h4>
                    <p className="text-xs text-[#A7A2B5] mt-0.5 leading-relaxed">
                      Our studio analyses technical complexity and creates a clear deliverables matrix tailored to your budget range.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded bg-[#7C3AED]/30 text-[#C4B5FD] flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      Formal Tailored Proposal
                    </h4>
                    <p className="text-xs text-[#A7A2B5] mt-0.5 leading-relaxed">
                      You receive a binding itemized proposal with clear milestone schedules, exact deliverables, and payment terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-6 border-t border-[#30263F]/60">
              <button
                type="button"
                onClick={onOpenProjectWizard}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] cursor-pointer"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Policy Guarantee */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-lg border border-[#30263F]/50 bg-[#0E0A18]/50 text-xs text-[#A7A2B5]">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#9B5CFF] shrink-0" />
            <span>Zero obligation · No aggressive sales calls · Clear milestone payments</span>
          </div>
          <span className="font-mono text-[#C4B5FD]">All quotes valid for 30 days</span>
        </div>
      </div>
    </section>
  );
};
