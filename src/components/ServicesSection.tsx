import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenProjectWizard: (preselectedService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenProjectWizard,
}) => {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#30263F]/60 dark:border-[#30263F]/60 light:border-[#E2DCED]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C4B5FD] uppercase mb-3">
              <span>CORE CAPABILITIES</span>
              <span aria-hidden="true" className="text-[#30263F]">·</span>
              <span className="text-[#A7A2B5]">CUSTOM SOLUTIONS</span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]"
              style={{ textWrap: 'balance' }}
            >
              Services Tailored to Ambitious Brands
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] max-w-md">
            Every engagement is engineered specifically for your commercial objectives. We do not sell boxed packages; we build tailored digital assets.
          </p>
        </div>

        {/* 6-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-7 sm:p-8 rounded-xl border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] bg-[#0E0A18]/70 dark:bg-[#0E0A18]/70 light:bg-white hover:border-[#9B5CFF]/60 hover:bg-[#140E24]/70 dark:hover:bg-[#140E24]/70 light:hover:border-[#9B5CFF] transition-all duration-300"
            >
              <div>
                {/* Header: Editorial Number & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-medium text-[#C4B5FD] tracking-wider">
                    {service.number}.
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-[#A7A2B5] uppercase">
                    TAILORED SCOPE
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] mb-3 group-hover:text-[#C4B5FD] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7A2B5] dark:text-[#A7A2B5] light:text-[#4A4458] leading-relaxed mb-6">
                  {service.overview}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-mono tracking-wider text-[#C4B5FD] uppercase block mb-1">
                    KEY DELIVERABLES
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#120E1E]">
                      <Check className="w-3.5 h-3.5 text-[#9B5CFF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Opens Project Wizard preselecting this service */}
              <div className="pt-5 border-t border-[#30263F]/50 dark:border-[#30263F]/50 light:border-[#E2DCED]">
                <button
                  type="button"
                  onClick={() => onOpenProjectWizard(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] bg-[#171027] dark:bg-[#171027] light:bg-[#F2EDFB] hover:bg-[#7C3AED] hover:text-white dark:hover:bg-[#7C3AED] dark:hover:text-white light:hover:bg-[#7C3AED] light:hover:text-white border border-[#30263F] dark:border-[#30263F] light:border-[#D1C9DE] hover:border-[#7C3AED] rounded-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
