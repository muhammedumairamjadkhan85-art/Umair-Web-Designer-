import React, { useState } from 'react';
import { Mail, MessageCircle, Calendar, ArrowRight, Copy, Check, Send } from 'lucide-react';
import { STUDIO_META } from '../data/studioData';

interface ContactSectionProps {
  onOpenProjectWizard: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenProjectWizard,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [quickEmail, setQuickEmail] = useState('');
  const [quickMessage, setQuickMessage] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_META.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail.trim() || !quickMessage.trim()) return;
    setQuickSent(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Channels (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
                <span>PROJECT INITIATION</span>
                <span aria-hidden="true" className="text-[#30263F]">·</span>
                <span className="text-[#A7A2B5]">DIRECT STUDIO DESK</span>
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4"
                style={{ textWrap: 'balance' }}
              >
                Let's Build Something Exceptional.
              </h2>
              <p className="text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed max-w-lg">
                Whether you need a full digital redesign, an architectural e-commerce shop, or a high-impact campaign landing page, we are ready to review your project.
              </p>
            </div>

            {/* Direct Studio Channels */}
            <div className="space-y-4">
              {/* Email Desk */}
              <div className="p-5 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/70 dark:bg-[#0E0A18]/70 light:bg-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#171027] border border-[#30263F] flex items-center justify-center text-[#C4B5FD]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A7A2B5] uppercase block">
                      STUDIO MAILBOX
                    </span>
                    <a
                      href={`mailto:${STUDIO_META.contactEmail}`}
                      className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] hover:text-[#9B5CFF] transition-colors"
                    >
                      {STUDIO_META.contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium text-[#A7A2B5] hover:text-white border border-[#30263F] rounded hover:border-[#7C3AED] transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* WhatsApp Direct Line */}
              <div className="p-5 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/70 dark:bg-[#0E0A18]/70 light:bg-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#171027] border border-[#30263F] flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A7A2B5] uppercase block">
                      WHATSAPP BUSINESS LINE
                    </span>
                    <span className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      {STUDIO_META.whatsappConfigNumber}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${STUDIO_META.whatsappRawNumber}?text=${encodeURIComponent('Hello VELTRIX team, I would like to inquire about initiating a digital project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-[#25D366] hover:text-white hover:bg-[#25D366] border border-[#25D366]/40 rounded transition-colors"
                >
                  Message
                </a>
              </div>

              {/* Consultation Booking Fallback */}
              <div className="p-5 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/70 dark:bg-[#0E0A18]/70 light:bg-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#171027] border border-[#30263F] flex items-center justify-center text-[#9B5CFF]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A7A2B5] uppercase block">
                      DISCOVERY CONSULTATION
                    </span>
                    <span className="text-xs text-[#A7A2B5]">
                      30-min technical & design review
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenProjectWizard}
                  className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded transition-colors"
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Initiation Card (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#140E24]/70 dark:bg-[#140E24]/70 light:bg-white relative overflow-hidden shadow-xl">
            <span className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider block mb-2">
              RECOMMENDED ONBOARDING ROUTE
            </span>
            <h3 className="font-display text-2xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-3">
              Multi-Step Project Questionnaire
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed mb-6">
              Our structured 6-step project wizard collects key technical requirements, scope parameters, and budget horizons to generate an accurate custom quote without delay.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Takes approximately 3 minutes to complete',
                'Pre-formats an exportable brief for internal team review',
                'Generates an encoded WhatsApp draft for immediate dispatch',
                'Guaranteed response within 24–48 business hours',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#120E1E]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9B5CFF]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenProjectWizard}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] active:scale-[0.98] rounded-md transition-all shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_28px_rgba(155,92,255,0.5)] cursor-pointer"
            >
              <span>Launch Project Questionnaire</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick Inquiry Fallback Form */}
            <div className="mt-8 pt-6 border-t border-[#30263F]/60">
              <span className="text-[11px] font-mono text-[#A7A2B5] uppercase block mb-3">
                OR SEND A QUICK DIRECT NOTE:
              </span>

              {quickSent ? (
                <div className="p-4 rounded-lg bg-[#1E1435] border border-[#7C3AED] text-xs text-[#C4B5FD]">
                  ✓ Thank you. Your message has been received. Our team will follow up at {quickEmail}.
                </div>
              ) : (
                <form onSubmit={handleQuickContactSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3 py-2 text-xs rounded bg-[#0E0A18] border border-[#30263F] text-[#F7F5FC] focus:border-[#9B5CFF] focus:outline-none"
                  />
                  <textarea
                    rows={2}
                    required
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    placeholder="Brief description of your project..."
                    className="w-full px-3 py-2 text-xs rounded bg-[#0E0A18] border border-[#30263F] text-[#F7F5FC] focus:border-[#9B5CFF] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#30263F] hover:bg-[#47395C] rounded transition-colors"
                  >
                    <Send className="w-3 h-3" />
                    <span>Send Note</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
