import React from 'react';
import { VeltrixLogo } from './VeltrixLogo';
import { STUDIO_META, SERVICES_DATA } from '../data/studioData';

interface FooterProps {
  onOpenProjectWizard: (serviceId?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenProjectWizard,
  onOpenLegal,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#08080D] text-[#A7A2B5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#30263F]/50">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <VeltrixLogo size="md" />
            <p className="font-display text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
              {STUDIO_META.tagline}
            </p>
            <p className="text-xs text-[#A7A2B5] max-w-sm leading-relaxed">
              Independent digital design and front-end engineering studio. We craft bespoke websites and digital experiences for ambitious international brands.
            </p>
            <div className="pt-2 text-xs text-[#C4B5FD] font-mono">
              Direct Desk: <a href={`mailto:${STUDIO_META.contactEmail}`} className="hover:underline">{STUDIO_META.contactEmail}</a>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono text-[#F7F5FC] uppercase tracking-wider block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Selected Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Process</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Custom Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-[#F7F5FC] uppercase tracking-wider block">
              SERVICES
            </span>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onOpenProjectWizard(service.title)}
                    className="hover:text-[#9B5CFF] text-left transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Action (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-mono text-[#F7F5FC] uppercase tracking-wider block">
              ENGAGEMENT
            </span>
            <p className="text-xs leading-relaxed">
              Ready to elevate your digital presence?
            </p>
            <button
              type="button"
              onClick={() => onOpenProjectWizard()}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded transition-all shadow-md shadow-[#7C3AED]/20 cursor-pointer"
            >
              Start Project
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A2B5]">
          <div>
            © {currentYear} VELTRIX. All rights reserved. Build Beyond Ordinary.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-[#30263F]">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
