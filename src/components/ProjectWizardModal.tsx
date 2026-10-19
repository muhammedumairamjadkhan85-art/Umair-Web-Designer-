import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Send,
  MessageCircle,
  Download,
  Copy,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { ProjectInquiryData, InquirySubmissionResult } from '../types';
import {
  submitProjectInquiry,
  getWhatsAppUrl,
  generateBriefSummaryText,
} from '../services/inquiryService';

interface ProjectWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const INITIAL_DATA: ProjectInquiryData = {
  fullName: '',
  brandName: '',
  email: '',
  country: '',
  contactMethod: 'email',
  whatsappNumber: '',
  projectTypes: [],
  goals: [],
  additionalContext: '',
  pageRange: '4-7 pages',
  features: [],
  existingWebsiteUrl: '',
  hasBrandingAndContent: 'partial',
  referenceWebsites: '',
  budgetRange: '$3,000 – $6,000',
  timeline: '4 – 6 weeks',
  consentDataHandling: false,
};

export const ProjectWizardModal: React.FC<ProjectWizardModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ProjectInquiryData>(INITIAL_DATA);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResult | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);

  // If a preselected service is passed, ensure it is in the projectTypes
  useEffect(() => {
    if (preselectedService && isOpen) {
      setFormData((prev) => ({
        ...prev,
        projectTypes: prev.projectTypes.includes(preselectedService)
          ? prev.projectTypes
          : [...prev.projectTypes, preselectedService],
      }));
    }
  }, [preselectedService, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalSteps = 6;

  // Validation per step
  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
      if (!formData.email.trim()) {
        newErrors.email = 'Please provide your email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email format.';
      }
      if (formData.contactMethod === 'whatsapp' && !formData.whatsappNumber?.trim()) {
        newErrors.whatsappNumber = 'Please provide your WhatsApp number with country code.';
      }
    }

    if (step === 2) {
      if (formData.projectTypes.length === 0) {
        newErrors.projectTypes = 'Please select at least one project type.';
      }
    }

    if (step === 3) {
      if (formData.goals.length === 0) {
        newErrors.goals = 'Please select at least one primary project goal.';
      }
    }

    if (step === 6) {
      if (!formData.consentDataHandling) {
        newErrors.consentDataHandling = 'Please confirm consent for handling your inquiry data.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const toggleMultiSelect = (field: 'projectTypes' | 'goals' | 'features', value: string) => {
    setFormData((prev) => {
      const currentList = prev[field];
      const nextList = currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];
      return { ...prev, [field]: nextList };
    });
    // Clear error for that field
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;

    setIsSubmitting(true);
    try {
      const result = await submitProjectInquiry(formData);
      setSubmissionResult(result);
    } catch (err) {
      console.error(err);
      setErrors({ submission: 'Failed to record inquiry. Please retry or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyBrief = () => {
    if (!submissionResult) return;
    const text = generateBriefSummaryText(formData, submissionResult.referenceId);
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 3000);
  };

  const handleDownloadBrief = () => {
    if (!submissionResult) return;
    const text = generateBriefSummaryText(formData, submissionResult.referenceId);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VELTRIX_Brief_${submissionResult.referenceId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wizard-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-[#0E0A18] dark:bg-[#0E0A18] light:bg-white border border-[#30263F] dark:border-[#30263F] light:border-[#E2DCED] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Header Bar */}
        <div className="px-6 py-4.5 border-b border-[#30263F]/70 dark:border-[#30263F]/70 light:border-[#E2DCED] bg-[#171027]/70 dark:bg-[#171027]/70 light:bg-[#F7F5FC] flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider block">
              VELTRIX CLIENT ONBOARDING
            </span>
            <h2
              id="wizard-modal-title"
              className="text-lg font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]"
            >
              Start Your Project
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A7A2B5] hover:text-white dark:hover:text-white light:hover:text-[#08080D] hover:bg-[#30263F]/40 transition-colors"
            aria-label="Close project wizard"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Only shown before submission) */}
        {!submissionResult && (
          <div className="px-6 py-3 bg-[#120B20]/80 dark:bg-[#120B20]/80 light:bg-[#FAF9FD] border-b border-[#30263F]/40">
            <div className="flex items-center justify-between text-xs text-[#A7A2B5] mb-2 font-mono">
              <span className="text-[#C4B5FD] font-semibold">
                STEP {currentStep} OF {totalSteps}
              </span>
              <span>
                {currentStep === 1 && 'Basic Information'}
                {currentStep === 2 && 'Project Type'}
                {currentStep === 3 && 'Business Goals'}
                {currentStep === 4 && 'Project Scope'}
                {currentStep === 5 && 'Budget & Timeline'}
                {currentStep === 6 && 'Review & Submit'}
              </span>
            </div>
            {/* Step Indicator Bar */}
            <div className="w-full h-1.5 bg-[#30263F]/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#9B5CFF] transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submissionResult ? (
            /* Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#171027] border border-[#7C3AED] text-[#C4B5FD] flex items-center justify-center mx-auto shadow-lg shadow-[#7C3AED]/20">
                <CheckCircle className="w-8 h-8 text-[#9B5CFF]" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#C4B5FD] tracking-wider uppercase block mb-1">
                  BRIEF SUCCESSFULLY REGISTERED
                </span>
                <h3 className="text-2xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                  Reference ID: <span className="text-[#9B5CFF]">{submissionResult.referenceId}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A2B5] max-w-lg mx-auto mt-2 leading-relaxed">
                  Thank you, {formData.fullName}. Your project inquiry has been saved. We will review your brief within 24 to 48 business hours.
                </p>
              </div>

              {/* Action Buttons: WhatsApp handoff or text brief download */}
              <div className="p-5 rounded-xl border border-[#30263F] bg-[#140E24]/60 max-w-md mx-auto text-left space-y-3">
                <span className="text-[11px] font-mono text-[#C4B5FD] uppercase block mb-1">
                  NEXT RECOMMENDED ACTIONS
                </span>

                <a
                  href={getWhatsAppUrl(formData, submissionResult.referenceId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20ba5a] rounded transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Transmit Draft to WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#F7F5FC] bg-[#171027] hover:bg-[#30263F] border border-[#30263F] rounded transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#C4B5FD]" />
                    <span>{copiedBrief ? 'Copied!' : 'Copy Brief'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadBrief}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#F7F5FC] bg-[#171027] hover:bg-[#30263F] border border-[#30263F] rounded transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C4B5FD]" />
                    <span>Save Text File</span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionResult(null);
                    setCurrentStep(1);
                    setFormData(INITIAL_DATA);
                    onClose();
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#A7A2B5] hover:text-white border border-[#30263F] rounded hover:border-[#7C3AED] transition-colors"
                >
                  Close & Return to Studio
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form Content */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      Who are we collaborating with?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A2B5] mt-1">
                      Let us know how to address you and your brand.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A7A2B5] mb-1.5">
                        Full Name <span className="text-[#9B5CFF]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F] focus:border-[#9B5CFF] focus:outline-none text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]"
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A7A2B5] mb-1.5">
                        Brand or Business Name <span className="text-[#A7A2B5]/60">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        placeholder="e.g. Archetype Studio"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F] focus:border-[#9B5CFF] focus:outline-none text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A7A2B5] mb-1.5">
                        Email Address <span className="text-[#9B5CFF]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F] focus:border-[#9B5CFF] focus:outline-none text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]"
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A7A2B5] mb-1.5">
                        Country or Region
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United States, UK, Canada, Pakistan..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 dark:bg-[#140E24]/60 light:bg-[#FAF9FD] border border-[#30263F] focus:border-[#9B5CFF] focus:outline-none text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]"
                      />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-medium text-[#A7A2B5] mb-2">
                      Preferred Communication Method
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'email', label: 'Email Correspondence' },
                        { id: 'whatsapp', label: 'WhatsApp Messenger' },
                        { id: 'video-call', label: 'Intro Video Consultation' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: item.id as any })}
                          className={`p-3 rounded-lg border text-left text-xs font-medium transition-all ${
                            formData.contactMethod === item.id
                              ? 'border-[#9B5CFF] bg-[#1E1435] text-white shadow-sm'
                              : 'border-[#30263F] bg-[#140E24]/40 text-[#A7A2B5] hover:text-[#F7F5FC]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {formData.contactMethod === 'whatsapp' && (
                      <div className="mt-3">
                        <label className="block text-xs font-medium text-[#A7A2B5] mb-1">
                          WhatsApp Number with Country Code
                        </label>
                        <input
                          type="tel"
                          value={formData.whatsappNumber || ''}
                          onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                          placeholder="+1 555 123 4567"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 border border-[#30263F] focus:border-[#9B5CFF] text-[#F7F5FC]"
                        />
                        {errors.whatsappNumber && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.whatsappNumber}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2: Project Type (Multi-select) */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      What type of project are you commissioning?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A2B5] mt-1">
                      Select all disciplines that apply to your engagement.
                    </p>
                  </div>

                  {errors.projectTypes && (
                    <p className="text-xs text-red-400 bg-red-950/30 p-2.5 rounded border border-red-900/40">
                      {errors.projectTypes}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: 'Website Design', desc: 'Bespoke layouts, typography, and brand alignment.' },
                      { title: 'Website Development', desc: 'High-speed modern code with responsive architecture.' },
                      { title: 'Website Redesign', desc: 'Overhaul an existing website for modern luxury appeal.' },
                      { title: 'E-commerce Website', desc: 'Curated digital shop with catalog & checkout flow.' },
                      { title: 'Landing Page', desc: 'Single-page campaign focused on lead conversion.' },
                      { title: 'UI/UX Design', desc: 'Web application interface, dashboards, and workflows.' },
                      { title: 'Design System / Identity', desc: 'Component library, design tokens, and guidelines.' },
                      { title: 'Other Custom Scope', desc: 'Specialized interactive web or software requirements.' },
                    ].map((item) => {
                      const isSelected = formData.projectTypes.includes(item.title);
                      return (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => toggleMultiSelect('projectTypes', item.title)}
                          className={`p-4 rounded-lg border text-left transition-all flex items-start justify-between gap-3 ${
                            isSelected
                              ? 'border-[#9B5CFF] bg-[#1E1435] text-white shadow-sm'
                              : 'border-[#30263F] bg-[#140E24]/50 text-[#A7A2B5] hover:text-[#F7F5FC] hover:border-[#47395C]'
                          }`}
                        >
                          <div>
                            <div className="text-xs sm:text-sm font-semibold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-[#A7A2B5] mt-1 leading-normal">
                              {item.desc}
                            </div>
                          </div>
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                              isSelected
                                ? 'bg-[#7C3AED] border-[#7C3AED] text-white'
                                : 'border-[#30263F] bg-[#0E0A18]'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Business & Project Goals */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      What business outcomes do you want to achieve?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A2B5] mt-1">
                      Clarifying your commercial objectives helps us architect the right conversion journey.
                    </p>
                  </div>

                  {errors.goals && (
                    <p className="text-xs text-red-400 bg-red-950/30 p-2.5 rounded border border-red-900/40">
                      {errors.goals}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Establish a credible, premium online presence',
                      'Generate qualified inbound leads & project inquiries',
                      'Sell physical or digital products online',
                      'Modernize an outdated existing website',
                      'Showcase a personal brand or founder profile',
                      'Improve user experience & mobile usability',
                      'Increase conversion rates & reduce bounce rates',
                      'Support upcoming company fundraising or PR launch',
                    ].map((goal) => {
                      const isSelected = formData.goals.includes(goal);
                      return (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleMultiSelect('goals', goal)}
                          className={`p-3.5 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'border-[#9B5CFF] bg-[#1E1435] text-white'
                              : 'border-[#30263F] bg-[#140E24]/50 text-[#A7A2B5] hover:text-[#F7F5FC]'
                          }`}
                        >
                          <span>{goal}</span>
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                              isSelected
                                ? 'bg-[#7C3AED] border-[#7C3AED] text-white'
                                : 'border-[#30263F] bg-[#0E0A18]'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-3">
                    <label className="block text-xs font-medium text-[#A7A2B5] mb-1.5">
                      Additional Context or Specific Business Goals <span className="text-[#A7A2B5]/60">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.additionalContext}
                      onChange={(e) => setFormData({ ...formData, additionalContext: e.target.value })}
                      placeholder="Tell us about your brand story, specific requirements, or competitor sites you like..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 border border-[#30263F] focus:border-[#9B5CFF] text-[#F7F5FC] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Project Scope */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      Define Scope & Existing Assets
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A2B5] mt-1">
                      Estimating scope helps us determine the appropriate architectural scale.
                    </p>
                  </div>

                  {/* Approximate page count */}
                  <div>
                    <label className="block text-xs font-medium text-[#A7A2B5] mb-2">
                      Approximate Page Count
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'Single Landing Page',
                        '2 – 4 Pages',
                        '5 – 8 Pages',
                        '9+ Pages / Custom App',
                      ].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, pageRange: range })}
                          className={`p-2.5 rounded-lg border text-center text-xs font-medium transition-all ${
                            formData.pageRange === range
                              ? 'border-[#9B5CFF] bg-[#1E1435] text-white'
                              : 'border-[#30263F] bg-[#140E24]/50 text-[#A7A2B5] hover:text-[#F7F5FC]'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brand & Content Readiness */}
                  <div>
                    <label className="block text-xs font-medium text-[#A7A2B5] mb-2">
                      Current Brand Guidelines & Content Status
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'complete', label: 'Complete', desc: 'Logo, typography, and copywriting are finalized.' },
                        { id: 'partial', label: 'Partial / In Progress', desc: 'Some assets exist, need assistance refining.' },
                        { id: 'needs-creation', label: 'Needs Creation', desc: 'Starting from scratch, need studio to craft assets.' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, hasBrandingAndContent: item.id as any })}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            formData.hasBrandingAndContent === item.id
                              ? 'border-[#9B5CFF] bg-[#1E1435] text-white'
                              : 'border-[#30263F] bg-[#140E24]/50 text-[#A7A2B5] hover:text-[#F7F5FC]'
                          }`}
                        >
                          <div className="text-xs font-semibold">{item.label}</div>
                          <div className="text-[11px] text-[#A7A2B5] mt-1">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Existing Website URL & Reference URLs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A7A2B5] mb-1.5">
                        Current Website URL <span className="text-[#A7A2B5]/60">(If redesigning)</span>
                      </label>
                      <input
                        type="url"
                        value={formData.existingWebsiteUrl}
                        onChange={(e) => setFormData({ ...formData, existingWebsiteUrl: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 border border-[#30263F] text-[#F7F5FC] focus:border-[#9B5CFF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A7A2B5] mb-1.5">
                        Reference / Inspiration Links <span className="text-[#A7A2B5]/60">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.referenceWebsites}
                        onChange={(e) => setFormData({ ...formData, referenceWebsites: e.target.value })}
                        placeholder="e.g. apple.com, stripe.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#140E24]/60 border border-[#30263F] text-[#F7F5FC] focus:border-[#9B5CFF] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Budget & Timeline */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      Budget Horizon & Delivery Timeline
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A2B5] mt-1">
                      VELTRIX works on a custom quotation model. An indicative range helps us tailor an appropriate scope and feature tier.
                    </p>
                  </div>

                  {/* Indicative Budget Ranges */}
                  <div>
                    <label className="block text-xs font-medium text-[#A7A2B5] mb-2.5">
                      Indicative Project Investment (USD)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { range: '$1,500 – $3,000', label: 'Focused Scope', desc: 'Single landing experience or focused 2-3 page launch.' },
                        { range: '$3,000 – $6,000', label: 'Comprehensive Build', desc: 'Custom commercial website, interactive features, full art direction.' },
                        { range: '$6,000 – $12,000', label: 'Advanced Platform', desc: 'Bespoke e-commerce, complex CMS structure, rich motion.' },
                        { range: '$12,000+', label: 'Flagship Web App', desc: 'Multi-tenant web application, custom UI/UX system, enterprise scope.' },
                        { range: 'Flexible / Not Sure Yet', label: 'Seeking Recommendation', desc: 'We will present tiered options based on your goals.' },
                      ].map((tier) => (
                        <button
                          key={tier.range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: tier.range })}
                          className={`p-3.5 rounded-lg border text-left transition-all ${
                            formData.budgetRange === tier.range
                              ? 'border-[#9B5CFF] bg-[#1E1435] text-white shadow-sm'
                              : 'border-[#30263F] bg-[#140E24]/50 text-[#A7A2B5] hover:text-[#F7F5FC]'
                          }`}
                        >
                          <div className="text-xs sm:text-sm font-semibold">{tier.range}</div>
                          <div className="text-[11px] text-[#A7A2B5] mt-0.5">{tier.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-medium text-[#A7A2B5] mb-2">
                      Preferred Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        'Urgent (< 3 weeks)',
                        '3 – 5 weeks',
                        '6 – 8 weeks',
                        'Flexible / Planning',
                      ].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: time })}
                          className={`p-2.5 rounded-lg border text-center text-xs font-medium transition-all ${
                            formData.timeline === time
                              ? 'border-[#9B5CFF] bg-[#1E1435] text-white'
                              : 'border-[#30263F] bg-[#140E24]/50 text-[#A7A2B5] hover:text-[#F7F5FC]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#A7A2B5] mt-2">
                      *Timelines are estimates and confirmed upon contract execution.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-5">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D]">
                      Review Your Project Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A2B5] mt-1">
                      Check your parameters below. You can navigate back to adjust any section before submitting.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-xl border border-[#30263F] bg-[#140E24]/70 space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-[#30263F]/50">
                      <div>
                        <span className="text-[#A7A2B5] block mb-0.5">Client & Brand:</span>
                        <strong className="text-white text-sm">
                          {formData.fullName} {formData.brandName ? `(${formData.brandName})` : ''}
                        </strong>
                      </div>
                      <div>
                        <span className="text-[#A7A2B5] block mb-0.5">Email / Region:</span>
                        <span className="text-white font-mono">{formData.email}</span> · {formData.country || 'Global'}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-[#30263F]/50">
                      <div>
                        <span className="text-[#A7A2B5] block mb-0.5">Requested Services:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {formData.projectTypes.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-[#1E1435] border border-[#30263F] text-[#C4B5FD] text-[11px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[#A7A2B5] block mb-0.5">Estimated Scope & Budget:</span>
                        <span className="text-white">{formData.pageRange}</span> ·{' '}
                        <span className="text-[#C4B5FD] font-mono">{formData.budgetRange}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[#A7A2B5] block mb-0.5">Target Goals:</span>
                      <p className="text-white">
                        {formData.goals.join(', ')}
                      </p>
                    </div>

                    {formData.additionalContext && (
                      <div>
                        <span className="text-[#A7A2B5] block mb-0.5">Additional Context:</span>
                        <p className="text-[#A7A2B5] italic">"{formData.additionalContext}"</p>
                      </div>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="p-4 rounded-lg bg-[#0E0A18] border border-[#30263F]/70">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentDataHandling}
                        onChange={(e) => setFormData({ ...formData, consentDataHandling: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded border-[#30263F] text-[#7C3AED] focus:ring-[#9B5CFF]"
                      />
                      <span className="text-xs text-[#A7A2B5] leading-relaxed">
                        I agree to submit this project brief to VELTRIX for quotation and scoping purposes. I understand that submitted estimates are non-binding until a formal agreement is executed.
                      </span>
                    </label>
                    {errors.consentDataHandling && (
                      <p className="text-[11px] text-red-400 mt-2">{errors.consentDataHandling}</p>
                    )}
                  </div>

                  {errors.submission && (
                    <div className="flex items-center gap-2 p-3 rounded bg-red-950/40 border border-red-900 text-red-300 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.submission}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="pt-4 border-t border-[#30263F]/60 flex items-center justify-between gap-3">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#A7A2B5] hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded transition-all shadow-md shadow-[#7C3AED]/20 cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-50 rounded transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Recording Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
