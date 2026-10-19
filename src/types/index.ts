export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  label: string;
  href: string;
}

export type ServiceId = 
  | 'web-design'
  | 'web-dev'
  | 'web-redesign'
  | 'ecommerce'
  | 'landing-pages'
  | 'ui-ux';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  title: string;
  shortDesc: string;
  overview: string;
  deliverables: string[];
  techFocus: string[];
}

export type PortfolioCategory = 'all' | 'business' | 'ecommerce' | 'landing' | 'ui-ux';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'business' | 'ecommerce' | 'landing' | 'ui-ux';
  categoryLabel: string;
  shortDesc: string;
  type: 'concept' | 'verified';
  typeLabel: string;
  image: string;
  imageAlt: string;
  year: string;
  scope: string[];
  overview: string;
  challenge: string;
  strategy: string;
  solution: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  timelineEstimate: string;
  summary: string;
  activities: string[];
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProjectInquiryData {
  // Step 1: Basic Information
  fullName: string;
  brandName: string;
  email: string;
  country: string;
  contactMethod: 'email' | 'whatsapp' | 'video-call';
  whatsappNumber?: string;

  // Step 2: Project Type (multi-select)
  projectTypes: string[];

  // Step 3: Business & Project Goals
  goals: string[];
  additionalContext: string;

  // Step 4: Project Scope
  pageRange: string;
  features: string[];
  existingWebsiteUrl: string;
  hasBrandingAndContent: 'complete' | 'partial' | 'needs-creation';
  referenceWebsites: string;

  // Step 5: Budget and Timeline
  budgetRange: string;
  timeline: string;

  // Step 6: Review & Consent
  consentDataHandling: boolean;
}

export interface InquirySubmissionResult {
  success: boolean;
  referenceId: string;
  message: string;
  timestamp: string;
  data: ProjectInquiryData;
}
