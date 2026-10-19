import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandStorySection } from './components/BrandStorySection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectWizardModal } from './components/ProjectWizardModal';
import { LegalModals } from './components/LegalModals';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [wizardOpen, setWizardOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const saved = localStorage.getItem('veltrix_theme') as ThemeMode | null;
    if (saved && (saved === 'dark' || saved === 'light')) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
      document.documentElement.classList.toggle('light', saved === 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('veltrix_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.classList.toggle('light', nextTheme === 'light');
  };

  const handleOpenWizard = (service?: string) => {
    setPreselectedService(service);
    setWizardOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080D] dark:bg-[#08080D] light:bg-[#F7F5FC] text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] transition-colors duration-300 relative selection:bg-[#7C3AED]/30 selection:text-white">
      {/* Discreet Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenProjectWizard={handleOpenWizard}
      />

      {/* Main Page Content Flow */}
      <main id="main-content">
        <HeroSection onOpenProjectWizard={() => handleOpenWizard()} />
        <BrandStorySection />
        <ServicesSection onOpenProjectWizard={handleOpenWizard} />
        <PortfolioSection onOpenProjectWizard={handleOpenWizard} />
        <ProcessSection onOpenProjectWizard={() => handleOpenWizard()} />
        <PricingSection onOpenProjectWizard={() => handleOpenWizard()} />
        <TestimonialsSection onOpenProjectWizard={() => handleOpenWizard()} />
        <FAQSection />
        <ContactSection onOpenProjectWizard={() => handleOpenWizard()} />
      </main>

      {/* Footer with Studio branding, legal, and navigation */}
      <Footer
        onOpenProjectWizard={handleOpenWizard}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive 6-Step Client Onboarding System */}
      <ProjectWizardModal
        isOpen={wizardOpen}
        onClose={() => setWizardOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Legal Information Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
