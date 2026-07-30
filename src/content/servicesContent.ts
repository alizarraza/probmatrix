// Content for the Hero slider and the Services page.
// The IFRS 9 advisory content below is sourced from ProbMatrix's
// "Solution & Services Overview" deck (March 2026).

import { heroContent, heroStats } from './siteContent'

export type HeroSlide = {
  eyebrow: string
  title: string
  subtitle: string
  bullets?: string[]
  primaryCta: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  showStats?: boolean
}

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: heroContent.eyebrow,
    title: heroContent.title,
    subtitle: heroContent.subtitle,
    primaryCta: { label: heroContent.primaryCta, to: '/contact' },
    secondaryCta: { label: heroContent.secondaryCta, to: '/services' },
    showStats: true,
  },
  {
    eyebrow: 'IFRS 9 Excel Add-In',
    title: 'The Fimilarity Of Excel, The Power Of an Enterprise-grade IFRS 9 Engine',
    subtitle:
      'A user-friendly Excel add-in backed by a high-performance, DLL-based calculation engine—delivering speed, scalability, accuracy, and enterprise-level reliability.',
    bullets: [
      'PD, LGD, EAD/EIR & ECL in one workflow',
      'Transparent, traceable, auditable calculations',
      'User training & handover included',
    ],
    primaryCta: { label: 'See the Add-In', to: '/services#ifrs9-add-in' },
    secondaryCta: { label: 'Request a Demo', to: '/contact' },
  },
  {
    eyebrow: 'CredX',
    title: 'CredX — Trusted by 200+ Risk Professionals',
    subtitle:
      "CredX is a Validation and Calibration Toolkit for IFRS 9 and credit risk models --designed for model validation terms, consultants and external audit professionals.",
    bullets: [
      '200+ professionals using CredX',
      'Consistent, regulator-aligned methodology',
      'Built for banks, MFIs, DFIs, NBFCs & insurers',
    ],
    primaryCta: { label: 'Learn More', to: '/services' },
    secondaryCta: { label: 'Talk to Us', to: '/contact' },
  },
  {
    eyebrow: 'Our Services',
    title: 'End-to-End IFRS 9 Advisory & Automation',
    subtitle:
      'From framework design and model validation to Excel Add-In deployment — independent, regulator-aligned IFRS 9 services for banks, DFIs, MFBs, fintechs, NBFCs, insurance and leasing companies.',
    bullets: ['ECL Validation', 'Model Development & Implementation', 'Gap Analysis / Health Check'],
    primaryCta: { label: 'Get a Quote', to: '/contact' },
    secondaryCta: { label: 'Get More Info', to: '/services' },
  },
]

// ---------------------------------------------------------------------
// Services page content — from the "Solution & Services Overview" deck
// ---------------------------------------------------------------------

export const ifrs9AdvisoryIntro = {
  eyebrow: 'Our IFRS 9 Advisory Services',
  title: 'Independent, regulator-aligned IFRS 9 advisory',
  body: 'ProbMatrix provides independent, regulator-aligned IFRS 9 advisory services covering design, validation, implementation, and governance of Expected Credit Loss frameworks.',
}

export const expertiseAreas = [
  {
    title: 'IFRS 9 Framework Design',
    items: [
      'Portfolio scoping & staging',
      'Significant Increase in Credit Risk methodology',
      'Lifetime vs 12-month ECL logic',
      'Product-specific treatment',
    ],
  },
  {
    title: 'ECL Modelling Advisory',
    items: [
      'PD, LGD, EAD methodology design (General & Simplified Approach)',
      'Behavioural maturity modelling',
      'Forward-looking macroeconomic overlays (multi-scenario)',
      'Portfolio segmentation & PD calibration support',
      'EIR & CCF estimation',
    ],
  },
  {
    title: 'Implementation & Automation Support',
    items: [
      'Integration with ProbMatrix IFRS 9 Excel Add-In',
      'Transparent, traceable, and auditable calculations',
      'User training & handover sessions',
    ],
  },
  {
    title: 'Regulatory & Audit Alignment',
    items: [
      'Alignment with local regulator guidance (e.g. central bank expectations)',
      'Auditor-ready documentation & methodology justification',
      'Model assumptions, limitations, and expert judgment framework',
      'Gap assessment vs IFRS 9 best practices',
    ],
  },
  {
    title: 'Model Validation & Review',
    items: [
      'Independent model review & challenge',
      'Back-testing, sensitivity & stress testing',
      'Benchmarking against industry practices',
      'Validation reports suitable for Audit Committee & Regulators',
    ],
  },
]

export const engagementTypes = [
  {
    type: 'IFRS 9 ECL Validation',
    scope: [
      'Review data inputs',
      'Review ECL framework & model mechanics',
      'Review staging & SICR',
      'Review/reperform PD, LGD, EAD & ECL calculations',
      'Review/reperform macroeconomic modeling',
      'Review/reperform forward-looking adjustments',
      'Review model documentation',
    ],
    deliverables: 'Technical observations and findings report.',
  },
  {
    type: 'IFRS 9 ECL Model Development & Implementation',
    scope: [
      'Segmentation',
      'Develop PD and LGD models',
      'PD calibration (where required)',
      'Macroeconomic modeling',
      'Forward-looking adjustments',
      'SICR & staging',
      'EAD modeling',
      'CCF & EIR (where required)',
      'ECL estimation',
      'Model documentation',
    ],
    deliverables: 'IFRS 9 ECL model results, along with model assumptions and methodology documentation.',
  },
]

export const engagementApplicability =
  'Applicable to banks, development finance institutions (DFIs), microfinance banks (MFBs), fintechs, non-bank financial companies (NBFCs), insurance companies, and leasing companies.'

export const servicesProcess = {
  title: 'Our IFRS 9 Services Process',
  paths: [
    {
      label: 'IFRS 9 Already Implemented',
      steps: [
        {
          title: 'Step 1: End-to-End IFRS 9 Consulting',
          items: [
            'Framework design (PD, LGD, EAD, staging)',
            'Data structuring and segmentation',
            'Model development and calibration',
            'Governance and documentation',
          ],
        },
        {
          title: 'Step 2: Add-In Deployment (if required)',
          items: [
            'Accelerated implementation using Excel-based ECL engine',
            'Standardized, transparent, and audit-ready outputs',
            'User training and controlled environment setup',
          ],
        },
      ],
    },
    {
      label: 'IFRS 9 Not Yet Implemented',
      steps: [
        {
          title: 'Step 1: Gap Analysis / Health Check',
          badge: 'Complimentary',
          items: [
            'Review of existing IFRS 9 models and assumptions',
            'Identification of gaps in methodology, data, and governance',
            'Alignment check with regulatory expectations and best practices',
          ],
        },
        {
          title: 'Step 2: Targeted Consulting or Add-In Deployment',
          items: [
            'Model refinement, recalibration, or redevelopment',
            'Overlay framework enhancement',
            'Optional Add-In deployment for improved control, transparency, and efficiency',
          ],
        },
      ],
    },
  ],
  note: 'Complimentary: provided at no cost as part of our initial assessment.',
}

export { heroStats }