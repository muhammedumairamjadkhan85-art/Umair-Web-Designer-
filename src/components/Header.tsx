import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { VeltrixLogo } from './VeltrixLogo';
import { ThemeToggle } from './ThemeToggle';
import { ThemeMode } from '../types';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenProjectWizard: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenProjectWizard,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080D]/90 dark:bg-[#08080D]/90 light:bg-[#F7F5FC]/95 backdrop-blur-md border-b border-[#30263F]/80 dark:border-[#30263F]/80 light:border-[#E2DCED] py-3.5 shadow-sm'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Exactly 3 Zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single Brand Element */}
            <a
              href="#home"
              className="group whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#9B5CFF] rounded-lg p-1 -m-1"
              aria-label="VELTRIX Home"
            >
              <VeltrixLogo size="md" />
            </a>

            {/* Zone 2: 5 Concise Single-Line Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458]"
              aria-label="Main Navigation"
            >
              <a
                href="#services"
                className="whitespace-nowrap shrink-0 hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B5CFF] hover:after:w-full after:transition-all"
              >
                Services
              </a>
              <a
                href="#work"
                className="whitespace-nowrap shrink-0 hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B5CFF] hover:after:w-full after:transition-all"
              >
                Work
              </a>
              <a
                href="#about"
                className="whitespace-nowrap shrink-0 hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B5CFF] hover:after:w-full after:transition-all"
              >
                About
              </a>
              <a
                href="#process"
                className="whitespace-nowrap shrink-0 hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B5CFF] hover:after:w-full after:transition-all"
              >
                Process
              </a>
              <a
                href="#pricing"
                className="whitespace-nowrap shrink-0 hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B5CFF] hover:after:w-full after:transition-all"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="whitespace-nowrap shrink-0 hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B5CFF] hover:after:w-full after:transition-all"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="whitespace-nowrap shrink-0 hover:text-[#F7F5FC] dark:hover:text-[#F7F5FC] light:hover:text-[#08080D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B5CFF] hover:after:w-full after:transition-all"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action + Theme Toggle + Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />

              <button
                type="button"
                onClick={() => onOpenProjectWizard()}
                className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] active:scale-[0.98] transition-all duration-200 rounded-md shadow-[0_0_15px_rgba(124,58,237,0.35)] hover:shadow-[0_0_22px_rgba(155,92,255,0.5)] whitespace-nowrap shrink-0"
              >
                Start Your Project
              </button>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#A7A2B5] hover:text-white dark:text-[#A7A2B5] dark:hover:text-white light:text-[#4A4458] light:hover:text-[#08080D] border border-transparent hover:border-[#30263F]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 md:hidden bg-[#08080D]/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#30263F]">
            <VeltrixLogo size="md" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#A7A2B5] hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 py-8 text-lg font-medium tracking-wide text-[#F7F5FC]">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Work', href: '#work' },
              { label: 'About', href: '#about' },
              { label: 'Process', href: '#process' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#9B5CFF] transition-colors border-b border-[#30263F]/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectWizard();
              }}
              className="w-full py-3.5 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md shadow-lg shadow-[#7C3AED]/30"
            >
              Start Your Project
            </button>
            <p className="text-center text-xs text-[#A7A2B5]">
              VELTRIX — Build Beyond Ordinary.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
