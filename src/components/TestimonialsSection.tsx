import React from 'react';
import { ShieldCheck, MessageSquare, ExternalLink } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenProjectWizard: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenProjectWizard,
}) => {
  return (
    <section className="py-20 sm:py-24 relative border-t border-b border-[#30263F]/50 dark:border-[#30263F]/50 light:border-[#E2DCED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
            <span>CLIENT REPUTATION</span>
            <span aria-hidden="true" className="text-[#30263F]">·</span>
            <span className="text-[#A7A2B5]">VERIFICATION POLICY</span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4"
            style={{ textWrap: 'balance' }}
          >
            Authentic Endorsements & Client Integrity
          </h2>
          <p className="text-sm sm:text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
            VELTRIX adheres to a strict anti-fabrication standard. We do not publish simulated reviews, stock avatar testimonials, or unverified star ratings.
          </p>
        </div>

        {/* Tasteful Empty State / Verification Protocol Container */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/70 dark:bg-[#0E0A18]/70 light:bg-white text-center">
          <div className="w-12 h-12 rounded-full bg-[#171027] border border-[#30263F] flex items-center justify-center mx-auto mb-5 text-[#9B5CFF]">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <span className="text-xs font-mono text-[#C4B5FD] tracking-wider uppercase block mb-2">
            CLIENT FEEDBACK PROTOCOL
          </span>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4">
            Direct Verification in Progress
          </h3>

          <p className="text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] max-w-xl mx-auto leading-relaxed mb-8">
            As a boutique international studio, we protect our client partners’ privacy under non-disclosure agreements. Public testimonials are published only following formal client approval and verified domain ownership.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6 border-t border-[#30263F]/50 dark:border-[#30263F]/50 light:border-[#E2DCED] max-w-2xl mx-auto mb-8">
            <div className="p-4 rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F]/40">
              <span className="text-[11px] font-mono text-[#C4B5FD] block mb-1">01. NO STOCK QUOTES</span>
              <p className="text-xs text-[#A7A2B5]">Zero AI-generated testimonials or fabricated avatars.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F]/40">
              <span className="text-[11px] font-mono text-[#C4B5FD] block mb-1">02. NDA RESPECT</span>
              <p className="text-xs text-[#A7A2B5]">Client identities protected unless explicitly authorized.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F]/40">
              <span className="text-[11px] font-mono text-[#C4B5FD] block mb-1">03. AUDITABLE CODE</span>
              <p className="text-xs text-[#A7A2B5]">Real code quality demonstrated directly in staging reviews.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenProjectWizard}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md transition-colors shadow-md shadow-[#7C3AED]/20 cursor-pointer"
            >
              <span>Initiate Project Consultation</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
