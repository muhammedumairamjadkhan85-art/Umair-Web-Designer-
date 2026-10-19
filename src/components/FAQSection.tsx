import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/studioData';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
            <span>CLARITY & TRANSPARENCY</span>
            <span aria-hidden="true" className="text-[#30263F]">·</span>
            <span className="text-[#A7A2B5]">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4"
            style={{ textWrap: 'balance' }}
          >
            Clear Answers to Common Questions
          </h2>
          <p className="text-sm sm:text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our custom quotation architecture, collaboration workflow, and technical delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item: FAQItem, idx: number) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/70 dark:bg-[#0E0A18]/70 light:bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9B5CFF]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-[#30263F] transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#7C3AED] text-white rotate-180 border-[#7C3AED]'
                        : 'bg-[#171027] text-[#A7A2B5]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed border-t border-[#30263F]/40 dark:border-[#30263F]/40 light:border-[#E2DCED] animate-in fade-in duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-xl border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#171027]/40 dark:bg-[#171027]/40 light:bg-[#FAF9FD] text-center">
          <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458]">
            Have a project question not answered above?{' '}
            <a
              href="#contact"
              className="text-[#C4B5FD] font-semibold underline underline-offset-4 hover:text-white transition-colors"
            >
              Reach out directly to our studio team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
