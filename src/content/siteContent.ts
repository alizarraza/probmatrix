// Content sourced from https://probmatrix.io/ (homepage + IFRS 9 Add-In page).
// Kept close to the site's own wording; only lightly rephrased where needed
// to fit section formats (cards, FAQ, etc.).

export const company = {
  name: 'ProbMatrix',
  tagline: 'Empowering Risk Management with Automation & Intelligence',
  metaDescription:
    'Discover how ProbMatrix specializes in risk management process automation using AI agents to enhance your operational efficiency and ensure compliance.',
  email: 'info@probmatrix.io',
  phone: '+92 336 5264744',
  address: 'Office # 804, 8th floor, Landmark plaza, Karachi, Pakistan',
  year: new Date().getFullYear(),
}

// Leadership contacts, from the ProbMatrix "About Us" deck.
export const leadership = [
  {
    name: 'Mohammad Zahid Khan',
    role: 'Strategic CEO',
    phone: '+966 53 445 1483',
    email: 'zahid.khan@probmatrix.io',
  },
  {
    name: 'Muhammad Danyal',
    role: 'Director',
    phone: '+92 336 2019750 ',
    email: 's.danyal@probmatrix.io',
  },
]

// Hero stat strip — real figures provided by ProbMatrix.
export const heroStats = [
  { value: '20+', label: 'Clients Served' },
  { value: '5+', label: 'Partners' },
  { value: '200+', label: 'Professionals Using CredX' },
]

export const heroContent = {
  eyebrow: 'Risk Management, Automated',
  title: 'Empowering Risk Management with Automation & Intelligence',
  subtitle:
    'Probmatrix specializes in risk management process automation and Advisory — enhancing operational efficiency and ensuring compliance for banks, MFIs, DFIs, NBFCs, insurers, and advisors.',
  primaryCta: 'Frequently Asked Questions',
  secondaryCta: 'Explore Our Services',
}

export const trustedBy = [
  'Commercial Banks',
  'Microfinance Institutions',
  'Development Finance Institutions',
  'NBFCs',
  'Insurers',
  'Risk Advisory Firms',
]

export const clientserved = [
  '20+ clients served',
  '5+ Partners',
  'Trusted by BDO',
  '200+ Professionals using CredX',
]

export const aboutTeaser = {
  eyebrow: 'About Us',
  title: 'Technology-driven risk management, built by risk practitioners',
  body:
    'ProbMatrix delivers technology-driven risk management solutions for enhanced operational efficiency and compliance in financial risk management processes. We combine deep risk-modeling expertise with practical automation — so financial institutions can move from manual, resource-intensive processes to fast, audit-ready, Automated workflows.',
  cta: 'Learn More About Us',
}

export const aboutPage = {
  eyebrow: 'About ProbMatrix',
  title: 'A specialized Risk Automation and Advisory firm',
  intro:
    'ProbMatrix is a specialized Risk Automation and Advisory firm supporting financial institutions in meeting complex regulatory and risk management requirements through robust methodologies, advanced analytics, and scalable automation.',
  team:
    'Our strength lies in a multidisciplinary team comprising governance and compliance professionals, financial risk management experts, data scientists, and IT automation specialists. Our consultants bring experience from Big Four firms, international advisory practices, regulated banking institutions, NBFCs, fintechs, and enterprise IT organizations — enabling us to combine regulatory insight with practical system implementation.',
  vision:
    'To empower financial institutions with transparent, controllable, and regulator-ready risk intelligence — enabling true internal ownership of models, decisions, and outcomes.',
  mission:
    'Our mission is to transform complex regulatory and risk frameworks into clear, explainable, and internally owned solutions.',
  missionPoints: [
    'Embedding risk and regulatory intelligence directly into tools used by banks',
    'Enabling institutions to independently understand, operate, and defend their numbers',
    'Reducing reliance on opaque models and recurring external dependency',
    'Strengthening governance, audit readiness, and decision confidence',
    'Supporting compliance with IFRS 9, Basel III, ICAAP, ILAAP, and local regulatory expectations',
  ],
  approachIntro:
    'Beyond advisory, we focus on implementation and sustainability. Our engagement model ensures solutions are fully operational, scalable, and transferable to client teams — enabling long-term value creation and regulatory confidence.',
  pillars: [
    {
      title: 'Proven Automation Capabilities',
      body: 'We design and deliver custom automation solutions that embed regulatory logic directly into operational workflows — automated regulatory and risk reporting, workflow optimization, and data-driven decision support.',
    },
    {
      title: 'Regulatory & Compliance Expertise',
      body: 'Strong domain expertise across IFRS 9 Expected Credit Loss (PD, LGD, EAD, ECL), Basel regulatory frameworks, and IRRBB, ICAAP, and ILAAP reporting.',
    },
    {
      title: 'Advanced Analytics & Model Development',
      body: 'Predictive risk and compliance models, credit scoring and customer segmentation frameworks, and machine learning and statistical models designed for regulated environments.',
    },
    {
      title: 'Governance & Auditability',
      body: 'Every solution is built with a strong focus on governance, validation, explainability, and regulatory defensibility — with transparent assumptions and audit-ready outputs.',
    },
  ],
}

// The 3x2 services grid — sourced from probmatrix.io homepage service blurbs
// plus the dedicated IFRS 9 Add-In product page.
export const services = [
  {
    slug: 'ifrs9-add-in',
    icon: 'excel',
    title: 'IFRS 9 Excel Add-In',
    summary:
      'Excel-native IFRS 9 and Credit Risk management Add-In for fast, audit-ready Expected Credit Loss.',
    detail:
      'Perform complete IFRS 9 Expected Credit Loss computations seamlessly inside Excel, without the need for costly external consultants. A user-friendly, form-based interface makes it easy: select your data, click, and get results instantly.',
  },
  {
    slug: 'risk-modeling',
    icon: 'layers',
    title: 'Risk Modeling Solutions',
    summary:
      'Ready-made risk modeling solutions to enhance compliance and operational efficiency for your organization.',
    detail:
      'Structured, ready-to-deploy models covering PD, LGD, EAD/EIR and macroeconomic scenario calibration — built to fit your existing data without a prescribed data model.',
  },
  {
    slug: 'ecl-compliance',
    icon: 'clipboard',
    title: 'Expected Credit Loss & Compliance',
    summary:
      'Expert guidance on expected credit loss calculations and regulatory compliance for financial institutions.',
    detail:
      'End-to-end support on ECL methodology, disclosures, and audit trails — helping your institution stay aligned with evolving regulatory expectations.',
  },
  {
    slug: 'automation',
    icon: 'gauge',
    title: 'Risk Automation Services',
    summary:
      'Our automation services transform the way financial risk is managed, minimizing manual input and maximizing accuracy.',
    detail:
      'AI-driven automation reduces manual spreadsheet work, cuts processing time, and improves consistency across your ongoing risk management processes.',
  },
  {
    slug: 'validation-stress-testing',
    icon: 'chart',
    title: 'Model Validation & Stress Testing',
    summary:
      'Our model validation and stress testing services help ensure your risk models are reliable, compliant, and ready for real-world challenges.',
    detail:
      'Independent validation and scenario-based stress testing to confirm your models perform reliably under both baseline and adverse conditions.',
  },
  {
    slug: 'consulting',
    icon: 'users',
    title: 'Risk Management Consulting',
    summary:
      'Reach out for custom risk management and consulting services tailored to your business.',
    detail:
      'Custom advisory engagements for institutions that need hands-on support implementing, calibrating, or auditing their risk management processes.',
  },
]

export const whyChooseUs = [
  {
    icon: 'lock',
    title: 'Runs fully on-premise',
    body: 'Runs entirely within your internal system, with no internet connection required — keeping your sensitive financial data safe and compliant.',
  },
  {
    icon: 'excel',
    title: 'Works inside Excel',
    body: 'A user-friendly, form-based interface inside the environment your finance team already trusts. Just select your data, click, and get results instantly.',
  },
  {
    icon: 'gauge',
    title: 'No external consultants needed',
    body: 'Perform complete IFRS 9 Expected Credit Loss computations seamlessly, without the need for costly external consultants.',
  },
  {
    icon: 'layers',
    title: 'Full model coverage',
    body: 'Automates complex IFRS 9 models — PD, LGD, Macroeconomic Scenarios, EAD, ECL — directly, saving significant time compared to manual processes.',
  },
  {
    icon: 'users',
    title: 'Backed by risk practitioners',
    body: 'Built by people who have implemented IFRS 9 themselves — giving you a practical way to review, challenge, and validate assumptions.',
  },
]

export const industries = [
  {
    icon: 'bank',
    title: 'Commercial Banks',
    body: 'Faster, audit-ready closes for IFRS 9 Expected Credit Loss, credit risk, and regulatory reporting workflows.',
  },
  {
    icon: 'users',
    title: 'Microfinance Institutions (MFIs)',
    body: 'Structured ECL modeling and compliance support built to fit MFI portfolios and reporting cycles.',
  },
  {
    icon: 'globe',
    title: 'Development Finance Institutions (DFIs)',
    body: 'Risk modeling and disclosure tools that scale with complex, multi-currency, multi-market portfolios.',
  },
  {
    icon: 'trendUp',
    title: 'NBFCs',
    body: 'Automation that reduces reliance on manual spreadsheets while keeping full control of sensitive data on-premise.',
  },
  {
    icon: 'shield',
    title: 'Insurers',
    body: 'Expected credit loss and risk model validation support tailored to insurance-sector exposures.',
  },
  {
    icon: 'clipboard',
    title: 'Advisors & Consultants',
    body: 'A practical way to review and challenge ECL numbers, run alternative scenarios, and validate client assumptions inside Excel.',
  },
]

// Qualitative, defensible metrics — derived directly from what ProbMatrix
// states about the product (no invented numbers).
export const stats = [
  {
    value: "4",
    label: "Critical IFRS 9 challenges covered",
    sub: "From framework enhancement and first-time implementation to quarterly reporting and process automation.",
  },
  {
    value: "18",
    label: "Specialist support capabilities",
    sub: "Assessment, modelling, recalibration, validation, reporting, governance and quality assurance—all in one offering.",
  },
  {
    value: "12",
    label: "Business outcomes targeted",
    sub: "More stable ECL, risk-sensitive provisioning, audit readiness, faster reporting and greater financial confidence.",
  },
  {
    value: "5",
    label: "Implementation workstreams",
    sub: "Policy review, ECL model development, forward-looking adjustments, governance documentation and end-to-end delivery.",
  },
  {
    value: "4×",
    label: "Quarterly reporting support",
    sub: "ECL calculations, management reporting packs, audit documentation and independent QA for each reporting cycle.",
  },
  {
    value: "1",
    label: "End-to-end IFRS 9 partner",
    sub: "From initial gap assessment through implementation, validation, reporting and ongoing governance.",
  },
  {
    value: "5",
    label: "Framework enhancement services",
    sub: "Gap assessment, framework review, model recalibration, independent validation and governance enhancement.",
  },
  {
    value: "4",
    label: "Automation and control capabilities",
    sub: "An enterprise solution with an Excel-based interface, automated calculations, reporting and governance controls.",
  },
];

export const faqs = [
  {
    q: "Do I need an internet connection to use the IFRS 9 Add-In?",
    a: "An internet connection is not required for the day-to-day use of the IFRS 9 Add-In. The Add-In operates entirely within your internal system, helping keep sensitive financial data secure and compliant. However, occasional internet access may be required to verify license integrity.",
  },
  {
    q: "Does the Probmatrix IFRS 9 Add-In support local regulatory requirements?",
    a: "Yes. The Probmatrix IFRS 9 Add-In is designed as a flexible, globally applicable solution that supports IFRS 9 requirements and can be configured to accommodate relevant local regulatory guidelines and reporting practices.",
  },
  {
    q: "Is the Add-In based on VBA?",
    a: "No. While the user interface is integrated with Microsoft Excel for ease of use, the underlying ECL engine and all component estimations are powered by enterprise-grade DLL-based systems.",
  },
  {
    q: "What does the Add-In actually automate?",
    a: "It automates the complex IFRS 9 models directly in Excel — Probability of Default (PD), Loss Given Default (LGD), Exposure at Default (EAD), macroeconomic scenarios, Forward Looking estimations and Expected Credit Loss (ECL) — saving significant time compared to manual processes.",
  },
  {
    q: "Who is ProbMatrix built for?",
    a: "Banks, MFIs, DFIs, NBFCs, insurers, and advisors looking for faster, audit-ready IFRS 9 and credit risk management.",
  },
  {
    q: "Is there a partnership program?",
    a: "Yes. We offer two partnership options: Reseller and Referral Programs. Partners can earn revenue and generate recurring service opportunities by helping banks, microfinance institutions, credit unions, and leasing companies achieve compliance with confidence through our Partnership Program.",
  },
  {
    q: "Which IFRS 9 calculations and methodologies are supported?",
    a: `The Add-In supports a comprehensive range of IFRS 9 calculations and methodologies, including:

• Through-the-Cycle and Point-in-Time PD estimation
• PD calibration
• Macroeconomic modelling and scenario analysis
• LGD, recovery-period and cure-rate analysis
• Point-in-Time LGD estimation
• EAD, Credit Conversion Factor calculations and Expected Life
• Effective Interest Rate calculations
• Stage allocation and SICR assessment
• Expected Credit Loss calculations
• Model validation tools and calculation logs

Available methodologies may vary depending on the selected product package and implementation requirements.`,
  },
  {
    q: "Can we use our own data, assumptions, and economic scenarios?",
    a: "Yes. Users can apply institution-specific portfolio data, model assumptions, segmentation rules, economic scenarios, and management inputs. This allows teams to test alternative assumptions, compare results, and assess their impact on ECL.",
  },
  {
    q: "Does Probmatrix offer a calibration and validation tool for consultants, finance teams, validation teams, and risk professionals?",
    a: `Yes. Probmatrix offers the CredX Add-In, a specialized calibration and validation solution designed for consultants, finance teams, model validation teams, and risk professionals.

The CredX Add-In includes:

• Through-the-Cycle PD and LGD validation tests
• Point-in-Time PD and LGD validation tests
• PD calibration tools
• Macroeconomic variable selection and validation`,
  },
  {
    q: "Can our team get certified on the Add-In?",
    a: "Yes — we offer certification in IFRS 9 Add-In implementation, covering the technology that powers IFRS 9 reporting.",
  },
  {
    q: "Is our financial data uploaded to the cloud?",
    a: "No cloud upload is required to perform calculations. Portfolio data, assumptions, models, and calculation results are processed within your organization's internal environment, helping you maintain control over sensitive financial information.",
  },
];

export const testimonialsHeader = 'Discover what our clients think about IFRS 9 Add-In'

export const testimonials = [
  {
    quote:
      'Even with years of experience in risk management, I found IFRS 9 implementation to be resource-intensive. The ProbMatrix IFRS 9 Add-In gives me a practical way to review and challenge ECL numbers, run alternative scenarios, and validate assumptions all inside Excel.',
    name: 'Risk Management Professional',
  },
  {
    quote:
      'The ProbMatrix IFRS 9 Excel Add-In has made my day-to-day work much easier. I can now run PD, LGD, EAD, and ECL calculations in a structured way directly in Excel, without rebuilding complex models from scratch each time.',
    name: 'Finance Team Lead',
  },
]

export const partnership = {
  title: 'Explore Partnership Program',
  body: 'Earn reseller revenue and recurring services as you help banks, MFIs, credit unions, and leasing firms achieve compliance with confidence.',
}

export const certification = {
  title: 'Get Certified in IFRS 9 Add-In implementation',
  body: 'Learn the technology that powers IFRS 9 reporting.',
}
