import React from 'react';
import { Target, Cpu, Eye, Sparkles } from 'lucide-react';
import { STUDIO_META } from '../data/studioData';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
            <span>ABOUT THE STUDIO</span>
            <span aria-hidden="true" className="text-[#30263F]">·</span>
            <span className="text-[#A7A2B5]">VALUES & PHILOSOPHY</span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Digital experiences shaped by restraint, precision, and business intent.
          </h2>
          <p className="text-base sm:text-lg text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
            {STUDIO_META.philosophySummary}
          </p>
        </div>

        {/* 2-Column Asymmetric Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Brand Vision & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* The VELTRIX Philosophy */}
            <div className="p-8 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/60 dark:bg-[#0E0A18]/60 light:bg-white">
              <h3 className="text-xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-3">
                The VELTRIX Philosophy
              </h3>
              <p className="text-sm sm:text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed mb-4">
                In an era crowded with identical templates, superficial design gimmicks, and bloated software, VELTRIX exists to restore distinction. We treat web design as architectural craftsmanship: rigorous structure, deliberate typography, and purpose-built interaction.
              </p>
              <p className="text-sm sm:text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed">
                We believe your website is your company’s foremost commercial flagship. It should command respect within seconds, articulate your value without ambiguity, and smoothly guide potential clients to take action.
              </p>
            </div>

            {/* What We Believe — 3 Core Convictions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#120B20]/40 dark:bg-[#120B20]/40 light:bg-white">
                <Eye className="w-5 h-5 text-[#9B5CFF] mb-3" />
                <h4 className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-2">
                  Clarity Over Noise
                </h4>
                <p className="text-xs text-[#A7A2B5] leading-relaxed">
                  Every element on the screen must justify its presence. Meaningful whitespace and crisp hierarchy always outperform decorative clutter.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#120B20]/40 dark:bg-[#120B20]/40 light:bg-white">
                <Cpu className="w-5 h-5 text-[#9B5CFF] mb-3" />
                <h4 className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-2">
                  Speed is Aesthetic
                </h4>
                <p className="text-xs text-[#A7A2B5] leading-relaxed">
                  True luxury feels instantaneous. We engineer clean, lightweight codebases with zero unnecessary dependencies and optimal responsiveness.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#120B20]/40 dark:bg-[#120B20]/40 light:bg-white">
                <Target className="w-5 h-5 text-[#9B5CFF] mb-3" />
                <h4 className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-2">
                  Honest Collaboration
                </h4>
                <p className="text-xs text-[#A7A2B5] leading-relaxed">
                  Transparent scopes, realistic timelines, and clear expectations. We do not make false promises or fabricate results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: How We Approach Projects & Quality Commitment (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#171027]/40 dark:bg-[#171027]/40 light:bg-white">
              <h3 className="text-lg font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-4">
                How We Approach Projects
              </h3>
              <ul className="space-y-4 text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458]">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#C4B5FD] mt-0.5">01</span>
                  <span>
                    <strong className="text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">Direct Studio Dialogue:</strong> You collaborate directly with senior designers and engineers, ensuring no dilution through layers of account managers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#C4B5FD] mt-0.5">02</span>
                  <span>
                    <strong className="text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">International Standards:</strong> Built to compete on the world stage — meeting rigorous accessibility, typography, and performance benchmarks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#C4B5FD] mt-0.5">03</span>
                  <span>
                    <strong className="text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">Tailored Scoping:</strong> Every quote is built around your specific commercial objectives, never locked into arbitrary pre-packaged templates.
                  </span>
                </li>
              </ul>
            </div>

            {/* Our Commitment to Quality */}
            <div className="p-6 rounded-xl border border-[#7C3AED]/30 bg-gradient-to-br from-[#171027] to-[#0E0A18] text-left">
              <span className="text-xs font-mono text-[#C4B5FD] tracking-wider uppercase block mb-2">
                VERIFIABLE QUALITY STANDARD
              </span>
              <h4 className="text-base font-bold text-white mb-2">
                Our Commitment to Quality
              </h4>
              <p className="text-xs text-[#A7A2B5] leading-relaxed">
                We believe in total transparency. We showcase real code, functional prototypes, and verifiable concept studies. We do not claim awards we have not won, and we do not use fake testimonials. Our work speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
