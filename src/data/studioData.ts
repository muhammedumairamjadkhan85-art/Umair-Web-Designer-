import { ServiceItem, PortfolioItem, ProcessStep, FAQItem } from '../types';

export const STUDIO_META = {
  brandName: 'VELTRIX',
  tagline: 'Build Beyond Ordinary.',
  eyebrow: 'INDEPENDENT DIGITAL DESIGN STUDIO',
  primaryCta: 'Start Your Project',
  secondaryCta: 'Explore Our Work',
  heroDescription:
    'Distinctive websites and digital experiences, thoughtfully designed to help ambitious brands stand out, connect with customers, and grow online.',
  philosophySummary:
    'We believe digital craftsmanship is a balance of restraint, architectural clarity, and commercial purpose. We build websites that elevate brand perception and perform reliably across global markets.',
  contactEmail: 'inquiries@veltrix.studio', // Configurable business mailbox
  whatsappConfigNumber: '+1 (555) 019-2831', // Configurable international placeholder
  whatsappRawNumber: '15550192831',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Website Design',
    shortDesc: 'Bespoke visual identity alignment, art-directed layouts, and distinctive typography systems.',
    overview:
      'We craft original, high-conviction visual directions tailored to your industry positioning. No cookie-cutter components or generic templates — every grid, typeface pairing, and interaction is designed to make your brand memorable.',
    deliverables: [
      'Custom visual identity & design language',
      'High-fidelity responsive desktop & mobile screens',
      'Art-directed typography & spatial hierarchy',
      'Component library & brand design tokens',
    ],
    techFocus: ['Figma Design System', 'Responsive Grid Math', 'Accessible Contrast', 'Design Tokens'],
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'Website Development',
    shortDesc: 'High-performance front-end engineering with clean architecture, fluid motion, and zero bloat.',
    overview:
      'Modern web engineering built with clean TypeScript, modern web standards, and swift load times. We engineer websites that feel instantaneous, run flawlessly across browsers, and are built to scale.',
    deliverables: [
      'Production-grade TypeScript & React code',
      'Sub-second page loading & lightweight bundles',
      'Purposeful micro-interactions & compositor animations',
      'Full semantic HTML and WCAG AA accessibility',
    ],
    techFocus: ['React / Vite', 'TypeScript', 'Tailwind CSS', 'Accessible DOM'],
  },
  {
    id: 'web-redesign',
    number: '03',
    title: 'Website Redesign',
    shortDesc: 'Modernize aging digital platforms, rectify navigation friction, and re-energize your market presence.',
    overview:
      'If your current website no longer matches the calibre of your company or struggles to convert visitors, we rebuild your information architecture, modernize visual standards, and revitalize customer confidence.',
    deliverables: [
      'Comprehensive UX audit of existing site friction',
      'Restructured user journeys & information architecture',
      'Complete visual overhaul to modern luxury standards',
      'Migration assistance & seamless launch plan',
    ],
    techFocus: ['UX Heuristics', 'IA Mapping', 'Friction Reduction', 'Conversion Flow'],
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'E-commerce Websites',
    shortDesc: 'Curated shopping experiences engineered to showcase products with editorial grace and purchase clarity.',
    overview:
      'Digital storefronts that balance editorial storytelling with seamless purchasing journeys. We design product discovery grids, tactile detail pages, and intuitive checkout flows that respect the buyer.',
    deliverables: [
      'Product catalog & visual hierarchy curation',
      'High-impact collection & product showcase layouts',
      'Streamlined cart interactions & checkout states',
      'Mobile-first conversion optimization',
    ],
    techFocus: ['Product Discovery', 'Visual Merchandising', 'Cart State UX', 'Mobile Checkout'],
  },
  {
    id: 'landing-pages',
    number: '05',
    title: 'Landing Pages',
    shortDesc: 'High-conviction campaign pages designed to clarify your proposition and drive qualified action.',
    overview:
      'Single-destination experiences designed to communicate a distinct value proposition without distraction. Ideal for product launches, investor briefs, lead qualification, or event announcements.',
    deliverables: [
      'Editorial hook & value proposition framing',
      'Objection handling & proof-to-claim sequencing',
      'Interactive lead qualification & intake forms',
      'Speed-optimized mobile conversion funnel',
    ],
    techFocus: ['Conversion Rate Science', 'Lead Capture Systems', 'Viewport Geometry', 'Speed Index'],
  },
  {
    id: 'ui-ux',
    number: '06',
    title: 'UI/UX Design',
    shortDesc: 'Intuitive application interfaces, multi-tenant workflows, and coherent digital product systems.',
    overview:
      'From complex SaaS workflows to client portals, we organize intricate functional requirements into effortless, elegant interfaces that users enjoy operating every day.',
    deliverables: [
      'Interactive user journey maps & wireframes',
      'Atomic design systems with comprehensive states',
      'Developer-ready specifications & token exports',
      'Functional interface prototypes',
    ],
    techFocus: ['Design Systems', 'Workflow Optimization', 'State Matrix', 'Human Factors'],
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'nordic-archetype',
    title: 'Archetype & Casa Luna',
    category: 'ecommerce',
    categoryLabel: 'E-commerce & Architecture',
    shortDesc: 'Minimalist editorial showcase and bespoke commerce platform for architectural furnishings.',
    type: 'concept',
    typeLabel: 'Concept Project — Demonstration Design',
    image: '/src/assets/images/portfolio_nordic_store_1792379516047.jpg',
    imageAlt: 'Archetype Casa Luna minimalist architectural furnishings store design',
    year: '2026',
    scope: ['Brand Identity', 'E-commerce Design', 'Front-End Development'],
    overview:
      'Archetype is an editorial commerce concept exploring how bespoke travertine furniture and coastal architectural residences can be presented together in a cohesive, tranquil digital sanctuary.',
    challenge:
      'Traditional furniture retail sites are often cluttered with aggressive countdown banners, noisy badges, and cramped grids that undermine the luxury aesthetic of five-figure artisan pieces.',
    strategy:
      'We designed an editorial publication feel where products are presented in architectural context, pairing generous negative space with warm stone textures, refined serif headings, and clear specifications.',
    solution:
      'An asymmetric layout combining architectural project narratives with tactile product cards, interactive material selectors, and a discrete concierge quotation inquiry mechanism.',
    deliverables: [
      'Editorial collection layout system',
      'Contextual architectural photography presentation',
      'Custom inquiries & private showroom appointment flow',
      'Mobile fluid typographic scale',
    ],
  },
  {
    id: 'obsidian-capital',
    title: 'Obsidian Capital',
    category: 'ui-ux',
    categoryLabel: 'Fintech & Web Platform',
    shortDesc: 'Private venture capital portfolio portal and real-time asset performance interface.',
    type: 'concept',
    typeLabel: 'Concept Project — Demonstration Design',
    image: '/src/assets/images/portfolio_fintech_brand_1792379517099.jpg',
    imageAlt: 'Obsidian Capital private equity dashboard platform',
    year: '2026',
    scope: ['UI/UX Design', 'Design System', 'Data Visualization'],
    overview:
      'A private wealth management and venture capital intelligence portal engineered for partners and institutional investors seeking real-time clarity across multi-million dollar asset allocations.',
    challenge:
      'Private equity platforms frequently suffer from data fatigue — overwhelming partners with spreadsheet grids and fragmented charts without clear executive hierarchy.',
    strategy:
      'Adopt a deep obsidian dark mode with violet focal indicators, tabular numerals for instant vertical scannability, and high-level portfolio health summaries paired with expandable drilldowns.',
    solution:
      'A streamlined interface featuring a central Net Asset Value trajectory, multi-asset allocation rings, recent investment timelines, and intuitive drill-down cards with zero latency feel.',
    deliverables: [
      'Executive dashboard layout & modular widget grid',
      'Data visualization system with electric violet accents',
      'Tabular financial scannability rules',
      'Comprehensive dark theme tokens',
    ],
  },
  {
    id: 'obscura-culinary',
    title: 'Obscura Culinary Studio',
    category: 'landing',
    categoryLabel: 'Hospitality & Landing Page',
    shortDesc: 'Sensory tasting experience and reservation website for an avant-garde dining room.',
    type: 'concept',
    typeLabel: 'Concept Project — Demonstration Design',
    image: '/src/assets/images/portfolio_hospitality_brand_1792379516570.jpg',
    imageAlt: 'Obscura culinary studio immersive reservation website',
    year: '2026',
    scope: ['Art Direction', 'Landing Experience', 'Reservation UX'],
    overview:
      'Obscura is an immersive digital prelude to a 12-course sensory dining experience, capturing the restaurant’s philosophy of seasonal darkness, raw elements, and culinary experimentation.',
    challenge:
      'Standard hospitality websites rely on generic booking widgets that feel disconnected from the theatrical quality of fine dining, diminishing the perceived exclusivity.',
    strategy:
      'We treated the landing page as an artistic prologue. Dramatic photography of artisanal dishes against slate stone, coupled with restrained narrative typography and a discreet reservation concierge.',
    solution:
      'A single-page narrative journey that guides the patron through philosophy, seasonal tasting courses, and an effortless reservation booking inquiry with automated preference gathering.',
    deliverables: [
      'Cinematic full-screen visual composition',
      'Sensory course preview interactive slider',
      'Private seating concierge intake system',
      'Zero layout shift performance on high-DPI displays',
    ],
  },
  {
    id: 'aura-workspace',
    title: 'Aura Design OS',
    category: 'business',
    categoryLabel: 'SaaS & Design Studio',
    shortDesc: 'Next-generation creative studio workspace for multi-disciplinary architecture and brand teams.',
    type: 'concept',
    typeLabel: 'Concept Project — Demonstration Design',
    image: '/src/assets/images/veltrix_hero_interface_1792379515518.jpg',
    imageAlt: 'Aura workspace user interface concept by VELTRIX',
    year: '2026',
    scope: ['Product Concept', 'Interactive Prototype', 'Design Architecture'],
    overview:
      'A studio orchestration interface designed for boutique architectural firms managing multi-phase masterplans, client revisions, and digital asset libraries in one cohesive environment.',
    challenge:
      'Creative agencies often juggle 4 different tools for project management, file reviews, and analytics, causing context switching and inconsistent communication.',
    strategy:
      'Unify studio milestones, live architectural renders, and client interaction records into a calm, dark-mode cockpit designed to minimize cognitive overload.',
    solution:
      'A layered glass-edge workspace featuring project status timelines, live asset previews, and client review threads with high spatial precision and zero clutter.',
    deliverables: [
      'Multi-panel studio overview wireframe',
      'Architectural asset inspector card system',
      'Integrated team workflow states',
      'High-contrast visual accessibility tokens',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    timelineEstimate: 'Days 1 – 3',
    summary: 'We unpack your business goals, target audience, competitive landscape, and digital requirements.',
    activities: [
      'In-depth review of project brief & questionnaire responses',
      'Competitive positioning & digital landscape assessment',
      'Clarification of success metrics & key user journeys',
    ],
    deliverable: 'Project Discovery Document & Strategic Brief',
  },
  {
    number: '02',
    title: 'Planning',
    timelineEstimate: 'Days 4 – 7',
    summary: 'We define the technical architecture, content strategy, sitemap, and functional requirements.',
    activities: [
      'Information architecture & structural sitemap creation',
      'Wireframing primary conversion flows and navigation',
      'Agreed scope roadmap and technical stack confirmation',
    ],
    deliverable: 'Sitemap, Wireframes & Technical Scope Document',
  },
  {
    number: '03',
    title: 'Design',
    timelineEstimate: 'Weeks 2 – 3',
    summary: 'We create the bespoke visual identity, typography system, responsive screens, and design components.',
    activities: [
      'Art direction exploration & luxury visual moodboards',
      'Full desktop and mobile responsive interface screens',
      'Interactive prototype walkthrough for team review',
    ],
    deliverable: 'Interactive Figma Prototype & Design System Tokens',
  },
  {
    number: '04',
    title: 'Development',
    timelineEstimate: 'Weeks 3 – 5',
    summary: 'We engineer the agreed layouts into responsive, high-performance, accessible code with clean motion.',
    activities: [
      'Clean TypeScript front-end component implementation',
      'Micro-interactions and performance optimization',
      'Form integration, validation, and accessibility audits',
    ],
    deliverable: 'Staging Preview Environment on Private URL',
  },
  {
    number: '05',
    title: 'Review',
    timelineEstimate: 'Week 5',
    summary: 'We conduct rigorous cross-browser testing, review client feedback, and refine every interaction.',
    activities: [
      'Cross-browser and multi-device viewport verification',
      'Speed index, Core Web Vitals, and accessibility checks',
      'Coordinated refinement pass based on client feedback',
    ],
    deliverable: 'Refinement Log & Pre-Launch Verification Report',
  },
  {
    number: '06',
    title: 'Launch & Handover',
    timelineEstimate: 'Week 6',
    summary: 'We assist with production deployment, domain verification, and hand over clean source deliverables.',
    activities: [
      'DNS records & production environment launch',
      'Asset bundle, source repository, and documentation handover',
      'Post-launch 14-day warranty monitoring',
    ],
    deliverable: 'Live Website, Documentation & Source Code Assets',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What services does VELTRIX provide?',
    answer:
      'VELTRIX provides premium digital design and web engineering services, including Website Design, Website Development, Website Redesign, E-commerce Websites, High-Converting Landing Pages, and UI/UX Design systems for web applications.',
  },
  {
    question: 'How do custom quotes work?',
    answer:
      'We do not offer generic pre-packaged prices because every business has distinct scope, technical demands, and brand ambitions. After you submit your project questionnaire, we analyze your requirements and prepare a detailed, transparent proposal outlining deliverables, timeline, and exact investment.',
  },
  {
    question: 'What information is needed to start a project?',
    answer:
      'To provide an accurate quote and kickoff effectively, we ask for: your business overview, primary project objectives, preferred timeframe, any existing brand guidelines or content assets, and reference sites that reflect the aesthetic standard you appreciate.',
  },
  {
    question: 'Can an existing website be redesigned?',
    answer:
      'Yes. Our Website Redesign service conducts a thorough audit of your current site’s usability and visual perception, then completely reimagines the layout, typography, speed, and mobile responsiveness to bring it up to modern international standards.',
  },
  {
    question: 'Can VELTRIX design e-commerce websites?',
    answer:
      'Yes. We design and build curated e-commerce experiences tailored to luxury, architectural, retail, and direct-to-consumer brands. We emphasize product storytelling, visual merchandising, and frictionless purchasing flows.',
  },
  {
    question: 'Will the website work on mobile devices?',
    answer:
      'Every project we build is mobile-first and tested across smartphones, tablets, laptops, and ultra-wide displays. Mobile typography, touch targets, and navigation menus are designed specifically for handheld ergonomic ease.',
  },
  {
    question: 'How does the design and development process work?',
    answer:
      'We guide each engagement through a structured 6-stage workflow: Discovery, Planning, Design, Development, Review, and Launch & Handover. You receive regular staging milestone previews and clear feedback opportunities at each phase.',
  },
  {
    question: 'Can clients request particular features or custom integrations?',
    answer:
      'Absolutely. Whether you require custom client intake wizards, multi-currency display, third-party CRM hooks, WhatsApp direct routing, or specialized interactive calculators, we can scope and engineer your exact requirements.',
  },
  {
    question: 'How can clients arrange a consultation?',
    answer:
      'You can initiate a consultation by completing our multi-step project questionnaire or by reaching out directly via our contact form. We will coordinate a suitable video call or asynchronous brief review at a time convenient for your timezone.',
  },
  {
    question: 'What happens after submitting a project inquiry?',
    answer:
      'Within 24 to 48 business hours, our studio reviews your submitted project parameters. We will reply via your preferred contact method (Email or WhatsApp) with initial clarifying questions and a tailored project proposal.',
  },
];
