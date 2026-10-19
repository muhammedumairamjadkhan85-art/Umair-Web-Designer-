import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Compass } from 'lucide-react';
import { STUDIO_META } from '../data/studioData';

interface HeroSectionProps {
  onOpenProjectWizard: () => void;
}

interface PreviewMode {
  id: string;
  name: string;
  urlPath: string;
  image: string;
  alt: string;
  highlight: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenProjectWizard,
}) => {
  const previews: PreviewMode[] = [
    {
      id: 'aura',
      name: 'Studio OS Platform',
      urlPath: 'veltrix.studio/systems/aura-os',
      image: '/src/assets/images/veltrix_hero_interface_1792379515518.jpg',
      alt: 'VELTRIX Aura Studio operating system interface mockup',
      highlight: 'Interactive Workspace & Asset Inspector',
    },
    {
      id: 'archetype',
      name: 'Architectural Commerce',
      urlPath: 'veltrix.studio/work/archetype',
      image: '/src/assets/images/portfolio_nordic_store_1792379516047.jpg',
      alt: 'Archetype minimalist architectural store showcase',
      highlight: 'Bespoke Stone & Furnishings Experience',
    },
    {
      id: 'obsidian',
      name: 'Fintech Intelligence',
      urlPath: 'veltrix.studio/work/obsidian-capital',
      image: '/src/assets/images/portfolio_fintech_brand_1792379517099.jpg',
      alt: 'Obsidian Capital private equity portfolio dashboard',
      highlight: 'Real-time Net Asset Value Visualizer',
    },
  ];

  const [activePreview, setActivePreview] = useState<PreviewMode>(previews[0]);

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden"
    >
      {/* Restrained Violet Ambient Background Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#7C3AED]/18 via-[#9B5CFF]/8 to-transparent blur-[120px] rounded-full"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean Unboxed Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-4">
              <span>{STUDIO_META.eyebrow}</span>
              <span aria-hidden="true" className="text-[#30263F]">·</span>
              <span className="text-[#A7A2B5] tracking-widest">BESPOKE DIGITAL CRAFT</span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] leading-[1.08] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Build Beyond <span className="bg-gradient-to-r from-[#C4B5FD] via-[#9B5CFF] to-[#7C3AED] bg-clip-text text-transparent">Ordinary.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed max-w-2xl mb-8">
              {STUDIO_META.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenProjectWizard}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] active:scale-[0.98] transition-all duration-200 rounded-md shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_28px_rgba(155,92,255,0.6)] cursor-pointer"
              >
                <span>{STUDIO_META.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] bg-[#171027]/70 dark:bg-[#171027]/70 light:bg-white border border-[#30263F] dark:border-[#30263F] light:border-[#D1C9DE] hover:border-[#9B5CFF] hover:bg-[#171027] transition-all duration-200 rounded-md cursor-pointer"
              >
                <span>{STUDIO_META.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Subtext */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A7A2B5]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C4B5FD]" />
                <span>Custom Quotes & Clear Scope</span>
              </div>
              <span aria-hidden="true" className="text-[#30263F] hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C4B5FD]" />
                <span>Global Client Collaborations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Browser Window Interface Preview (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#D1C9DE] bg-[#0E0A18]/90 dark:bg-[#0E0A18]/90 light:bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              {/* Browser Window Header Chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#30263F]/80 dark:border-[#30263F]/80 light:border-[#E2DCED] bg-[#171027]/60">
                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#30263F]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#30263F]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#30263F]" />
                </div>

                {/* Simulated URL Pill Bar */}
                <div className="text-[11px] font-mono text-[#A7A2B5] truncate max-w-[190px] sm:max-w-[240px] px-2.5 py-1 rounded bg-[#08080D]/60 border border-[#30263F]/50">
                  {activePreview.urlPath}
                </div>

                <div className="text-[10px] uppercase tracking-wider text-[#C4B5FD] font-semibold">
                  LIVE CONCEPT
                </div>
              </div>

              {/* Main Preview Screen */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full bg-[#08080D] overflow-hidden">
                <img
                  src={activePreview.image}
                  alt={activePreview.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080D]/85 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F7F5FC]">
                  <span className="font-medium text-white">{activePreview.highlight}</span>
                  <span className="text-[10px] font-mono text-[#C4B5FD] tracking-wider">VELTRIX STUDIO</span>
                </div>
              </div>

              {/* Interactive Switcher Footer (Functional Segmented Control) */}
              <div className="p-2 border-t border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#120B20]/80 grid grid-cols-3 gap-1">
                {previews.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActivePreview(item)}
                    className={`px-2 py-1.5 text-[11px] font-medium rounded transition-colors truncate ${
                      activePreview.id === item.id
                        ? 'bg-[#7C3AED] text-white shadow-sm'
                        : 'text-[#A7A2B5] hover:text-[#F7F5FC] hover:bg-[#1E1533]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-[#30263F]/60 dark:border-[#30263F]/60 light:border-[#E2DCED] grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { index: '01', title: 'Bespoke Craftsmanship', desc: 'Original layouts engineered from first principles.' },
            { index: '02', title: 'Performance First', desc: 'Sub-second speeds with lightweight, modular code.' },
            { index: '03', title: 'Commercial Focus', desc: 'Designed to drive conversions and client inquiries.' },
            { index: '04', title: 'International Calibre', desc: 'Serving global brands across US, Europe, and Asia.' },
          ].map((pillar) => (
            <div key={pillar.index} className="flex flex-col">
              <span className="font-mono text-xs text-[#9B5CFF] font-medium mb-1">
                {pillar.index}.
              </span>
              <h4 className="text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#5C566C] mt-1 leading-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
