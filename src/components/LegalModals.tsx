import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#0E0A18] dark:bg-[#0E0A18] light:bg-white border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#30263F]/70 bg-[#171027]/70">
          <div>
            <span className="text-[10px] font-mono text-[#C4B5FD] uppercase tracking-wider block">
              STANDARD STUDIO LEGAL TEMPLATE
            </span>
            <h3 id="legal-modal-title" className="text-base font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A7A2B5] hover:text-white"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-xs text-[#A7A2B5] space-y-4 leading-relaxed">
          <div className="p-3 rounded bg-[#171027]/60 border border-[#30263F] text-[11px] text-[#C4B5FD]">
            Note: This is an editable draft template provided for demonstration. It should be reviewed by legal counsel prior to binding commercial operation.
          </div>

          {type === 'privacy' ? (
            <>
              <h4 className="text-sm font-semibold text-white">1. Information Collection</h4>
              <p>
                VELTRIX collects project inquiry data (such as names, business identities, email addresses, and project scope details) solely for the purpose of communicating with prospective clients, generating accurate project quotes, and executing contracted digital deliverables.
              </p>
              <h4 className="text-sm font-semibold text-white">2. Data Usage & Confidentiality</h4>
              <p>
                Client data submitted through our onboarding questionnaires is strictly confidential. We do not sell, rent, or trade your contact or project information to third parties. Data is retained solely for project estimation and ongoing communication.
              </p>
              <h4 className="text-sm font-semibold text-white">3. Local Storage & Transmission</h4>
              <p>
                The VELTRIX application utilizes local browser storage to prevent loss of questionnaire data while you navigate steps. When you choose to submit, data is transmitted securely to our inquiry handler.
              </p>
              <h4 className="text-sm font-semibold text-white">4. Your Rights</h4>
              <p>
                You may request deletion or inspection of any submitted project inquiries at any time by contacting us directly.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold text-white">1. Scope of Services</h4>
              <p>
                VELTRIX delivers custom web design, front-end development, redesign, e-commerce layouts, and UI/UX consulting services. Specific deliverables, payment schedules, and turnaround windows are formalized within an individualized Master Services Agreement (MSA) and Statement of Work (SOW).
              </p>
              <h4 className="text-sm font-semibold text-white">2. Quotations & Non-Binding Estimates</h4>
              <p>
                Estimates generated via our interactive project questionnaire or email correspondence represent initial scoping guidelines and do not constitute a binding legal agreement until formalized in a signed contract.
              </p>
              <h4 className="text-sm font-semibold text-white">3. Intellectual Property Rights</h4>
              <p>
                Upon receipt of full contracted payment, clients receive agreed intellectual property rights to the final bespoke design assets and custom code created specifically for their engagement, excluding pre-existing studio frameworks and open-source packages.
              </p>
              <h4 className="text-sm font-semibold text-white">4. Governing Standard</h4>
              <p>
                All collaborations adhere to international industry standards of good faith, privacy protection, and transparent milestone approvals.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#30263F]/70 bg-[#171027]/50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
