import { useState } from "react";

/* ---------------------------------------------------------------- */
/*  Data                                                              */
/* ---------------------------------------------------------------- */

interface Tool {
  name: string;
  desc: string;
  supports: string[];
}

interface ToolCategory {
  id: string;
  label: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    id: "pd-calibration",
    label: "PD Calibration",
    tools: [
      {
        name: "Quasi Moment Matching Calibration",
        desc: "Calibrate rating-grade PDs while maintaining the relative risk differentiation of the original model.",
        supports: [
          "Alignment with a target portfolio default rate",
          "Alignment with a target Accuracy ratio",
          "Preservation of the general risk-ranking structure",
          "Comparison of original and calibrated PDs",
          "Assessment of calibration impact across rating grades",
        ],
      },
      {
        name: "Logit Calibration",
        desc: "Adjust PD estimates where scorecards are available, using a logit-based transformation.",
        supports: [
          "Rating-grade calibration",
          "Assessment of changes across the PD scale",
          "Review of calibration consistency",
        ],
      },
      {
        name: "Binomial Calibration",
        desc: "Assess and calibrate PD estimates using the binomial distribution — suited to low default portfolios.",
        supports: ["Comparison of predicted and observed defaults", "Rating-grade calibration"],
      },
    ],
  },
  {
    id: "macro",
    label: "Macroeconomic Model Tools",
    tools: [
      {
        name: "Macroeconomic Model Selection",
        desc: "Evaluate alternative macroeconomic models and identify variable combinations with an appropriate relationship to the selected credit risk indicator.",
        supports: [
          "Testing of alternative macroeconomic variables",
          "Comparison of candidate model specifications",
          "Evaluation of statistical performance",
          "Assessment of coefficient direction",
          "Model ranking and selection",
          "Review of economic interpretability",
          "Identification of potentially unstable specifications",
        ],
      },
      {
        name: "Macroeconomic Model Validation",
        desc: "Assess the performance, stability, and reasonableness of a selected macroeconomic model.",
        supports: [
          "Statistical significance assessment",
          "Goodness-of-fit analysis",
          "Residual diagnostics",
          "Multicollinearity assessment",
          "Model stability analysis",
          "Comparison of actual and predicted values",
        ],
      },
    ],
  },
  {
    id: "calibrated-pd-validation",
    label: "Calibrated PD Validation",
    tools: [
      {
        name: "Binomial Testing",
        desc: "Evaluate whether observed defaults are statistically consistent with the calibrated PD assigned to a rating grade or portfolio segment.",
        supports: [
          "Comparison of expected and observed defaults",
          "Identification of calibration exceptions",
          "Rating-grade validation",
          "Assessment of potential PD underestimation or overestimation",
          "Statistical validation of calibrated PD estimates",
        ],
      },
      {
        name: "Chi-Square Testing",
        desc: "Assess the overall difference between calibrated and observed default outcomes across multiple rating grades or segments.",
        supports: [
          "Comparison across rating grades",
          "Identification of material deviations",
          "Investigation of model calibration weaknesses",
        ],
      },
    ],
  },
  {
    id: "ttc-pd-validation",
    label: "TTC PD Validation",
    tools: [
      {
        name: "Gini Coefficient",
        desc: "Assess how effectively the model ranks higher-risk borrowers above lower-risk borrowers.",
        supports: [
          "Assessment of model rank ordering",
          "Comparison between development and validation samples",
          "Period-over-period model monitoring",
          "Identification of potential deterioration in model performance",
        ],
      },
      {
        name: "Kolmogorov-Smirnov Test",
        desc: "Measure the maximum separation between the distributions of defaulted and non-defaulted observations.",
        supports: [
          "Assessment of model rank ordering",
          "Comparison between development and validation samples",
          "Period-over-period model monitoring",
          "Identification of potential deterioration in model performance",
        ],
      },
    ],
  },
  {
    id: "ttc-lgd-validation",
    label: "TTC LGD Validation",
    tools: [
      {
        name: "Bi-Model Testing",
        desc: "Assess whether observed LGD values demonstrate a bimodal distribution, with observations concentrated around low-loss and high-loss outcomes.",
        supports: [
          "Analysis of LGD distribution behavior",
          "Identification of low-loss and high-loss concentrations",
          "Assessment of extreme recovery outcomes",
          "Review of the suitability of the LGD modelling approach",
          "Evaluation of changes in LGD distribution over time",
        ],
      },
    ],
  },
  {
    id: "pit-pd-validation",
    label: "PiT PD Validation",
    tools: [
      {
        name: "Forecast-Year Movement Test",
        desc: "Evaluate how Point-in-Time PDs move across forecast years.",
        supports: [
          "Identification of unexpected annual movements",
          "Assessment of forecast smoothness",
          "Review of macroeconomic responsiveness",
          "Detection of sharp increases or decreases",
          "Comparison of movement across rating grades or segments",
        ],
      },
      {
        name: "TTC-versus-PiT Comparison",
        desc: "Compare TTC PDs with forecasted PiT PDs to evaluate the direction and magnitude of the Point-in-Time adjustment.",
        supports: [
          "Assessment of whether PiT PDs are above or below TTC PDs",
          "Review of the economic-cycle impact",
          "Comparison across rating grades",
          "Identification of excessive or insufficient PiT adjustment",
          "Analysis of convergence toward long-run risk levels",
        ],
      },
      {
        name: "Implied Systematic-Factor Test",
        desc: "Derive the systematic factor implied by the relationship between TTC PD and PiT PD.",
        supports: [
          "Assessment of consistency across rating grades",
          "Identification of unusual implied-factor movements",
          "Review of the severity of the macroeconomic adjustment",
          "Comparison of systematic factors across forecast years",
          "Evaluation of the internal consistency of PiT PD estimates",
        ],
      },
      {
        name: "Asset-Correlation-Sensitivity Test",
        desc: "Assess how PiT PD estimates respond to changes in the assumed asset-correlation parameter.",
        supports: [
          "Comparison of PiT PDs under alternative correlation assumptions",
          "Identification of models that are highly sensitive to correlation",
          "Evaluation of parameter uncertainty",
          "Assessment of the reasonableness of the selected correlation assumption",
          "Documentation of model sensitivity",
        ],
      },
    ],
  },
  {
    id: "pit-lgd-validation",
    label: "PiT LGD Validation",
    tools: [
      {
        name: "Forecast-Year LGD Movement",
        desc: "Evaluate movements in Point-in-Time LGD estimates across forecast years.",
        supports: [
          "Identification of unusual LGD increases or decreases",
          "Review of forecast smoothness",
          "Comparison across LGD bands",
          "Assessment of economic responsiveness",
          "Detection of inconsistent forecast patterns",
        ],
      },
      {
        name: "TTC-versus-PiT LGD Comparison",
        desc: "Compare TTC LGD with forecast-year PiT LGD estimates.",
        supports: [
          "Evaluation of the direction of PiT adjustments",
          "Measurement of the magnitude of LGD movement",
          "Comparison across LGD bands",
          "Identification of excessive or insufficient adjustment",
          "Review of the relationship between long-run and forecasted loss severity",
        ],
      },
      {
        name: "Implied Conditional PiT PD Test",
        desc: "Estimate the conditional PiT PD implied by TTC LGD and PiT LGD outcomes.",
        supports: [
          "Assessment of whether PiT LGD adjustments imply reasonable credit conditions",
          "Comparison of implied PDs across forecast years",
          "Identification of unstable or extreme implied values",
          "Review of the consistency between PD and LGD adjustments",
          "Evaluation of the macroeconomic severity reflected in LGD",
        ],
      },
      {
        name: "Cross-Band Implied-PD Consistency",
        desc: "Compare implied PiT PD estimates across different LGD bands.",
        supports: [
          "Identification of inconsistent macroeconomic signals",
          "Assessment of cross-band model alignment",
          "Detection of unusual implied-PD dispersion",
          "Review of whether LGD bands reflect a consistent economic scenario",
        ],
      },
      {
        name: "Directional Implied-PD and PiT-LGD Relationship",
        desc: "Assess whether changes in implied PiT PD and PiT LGD move in an economically reasonable direction.",
        supports: [
          "Evaluation of PD and LGD relationship consistency",
          "Identification of contradictory forecast movements",
          "Review of adverse and favorable scenario behavior",
          "Assessment of whether higher implied credit risk corresponds with higher loss severity",
          "Investigation of model or input inconsistencies",
        ],
      },
      {
        name: "Asset-Correlation Sensitivity",
        desc: "Assess the sensitivity of implied PiT PD and PiT LGD relationships to different asset-correlation assumptions.",
        supports: [
          "Comparison under alternative correlation parameters",
          "Evaluation of model sensitivity",
          "Identification of parameter-dependent conclusions",
          "Review of correlation assumptions",
          "Documentation of uncertainty and model limitations",
        ],
      },
    ],
  },
];

interface Audience {
  key: string;
  title: string;
  desc: string;
  suitableFor: string[];
  note?: string;
}

const audiences: Audience[] = [
  {
    key: "individual",
    title: "Individual Credit Risk Professionals",
    desc: "CredX helps individual professionals perform model calibration and validation without developing every calculation, formula, test, and output format manually.",
    suitableFor: [
      "Credit risk analysts",
      "IFRS 9 professionals",
      "Model developers",
      "Model validators",
      "Independent consultants",
      "Risk management professionals",
      "Finance professionals involved in ECL modelling",
    ],
  },
  {
    key: "teams",
    title: "Model Validation Teams",
    desc: "CredX enables validation teams to apply a more consistent testing framework across models, portfolios, segments, and reporting periods.",
    suitableFor: [
      "Independent model validation teams",
      "Model risk management functions",
      "Credit risk departments",
      "IFRS 9 impairment teams",
      "Model monitoring teams",
      "Risk assurance functions",
    ],
  },
  {
    key: "consultants",
    title: "Consultants and Advisory Firms",
    desc: "CredX allows consultants to perform structured calibration and validation procedures across client engagements without rebuilding the testing framework for every assignment.",
    suitableFor: [
      "IFRS 9 consultants",
      "Credit risk advisory firms",
      "Financial risk consultants",
      "Independent model validators",
      "Accounting and advisory practices",
      "Professionals providing model review services",
    ],
  },
  {
    key: "auditors",
    title: "External Auditors",
    desc: "CredX can support audit procedures over selected IFRS 9 and credit risk model components by providing structured analytical and recalculation tools.",
    suitableFor: [
      "External audit firms",
      "Audit engagement teams",
      "Accounting firms",
      "Financial services assurance teams",
      "Specialists reviewing IFRS 9 model assumptions and results",
    ],
    note: "CredX supports analytical and review procedures but does not replace professional judgement, audit standards, or the auditor's responsibility for determining the nature and extent of audit work.",
  },
];

interface Benefit {
  title: string;
  desc: string;
  extra?: string[];
}

const benefits: Benefit[] = [
  { title: "Specialised for Credit Risk Models", desc: "CredX is designed around IFRS 9 and credit risk model testing rather than generic statistical analysis." },
  { title: "Excel-Based Interface", desc: "Perform calibration and validation within the environment already used by many risk, finance, validation, consulting, and audit teams." },
  { title: "Structured Testing", desc: "Apply consistent tests, parameters, and result formats across models and reporting periods." },
  { title: "Transparent Results", desc: "Review inputs, assumptions, thresholds, calculations, and results within Excel." },
  { title: "Repeatable Workflows", desc: "Repeat the same validation procedures across portfolios, segments, clients, and forecast periods." },
  { title: "Faster Execution", desc: "Reduce the time required to build formulas, create calculations, format results, and prepare standard model tests." },
  {
    title: "Evidence-Oriented Outputs",
    desc: "Use CredX results to support:",
    extra: [
      "Model validation reports",
      "Calibration documentation",
      "Model monitoring reports",
      "Audit working papers",
      "Model governance submissions",
      "Management and committee presentations",
      "Consultant deliverables",
    ],
  },
];

interface Plan {
  key: string;
  name: string;
  audience: string;
  desc: string;
  priceMonthly: string;
  priceYearly: string;
  usage: string[];
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    key: "professional",
    name: "CredX Professional",
    audience: "For Individual Professionals",
    desc: "A named-user licence for professionals who perform model calibration, validation, monitoring, or independent review.",
    priceMonthly: "$59",
    priceYearly: "$599",
    usage: [
      "Up to 10 runs per tool per month",
      "Limited macroeconomic-variable inputs for Macroeconomic Model Selection",
      "Usage limits reset at the beginning of each monthly billing cycle",
    ],
    features: [
      "User manual",
      "Product updates during the active license period",
      "Standard technical support",
      "Internal professional use",
    ],
  },
  {
    key: "team",
    name: "CredX Team",
    audience: "For Consulting Firms, Audit Firms and Organizational Teams",
    desc: "A multi-user license for organizations and professional firms requiring CredX across internal teams or approved external client assignments.",
    priceMonthly: "$99",
    priceYearly: "$999",
    highlighted: true,
    usage: [
      "Unlimited runs across all included tools",
      "Unlimited macroeconomic-variable inputs for Macroeconomic Model Selection",
      "Usage remains subject to applicable fair-use, security, and licence terms",
    ],
    features: [
      "User training",
      "Product documentation",
      "Product updates during the active license period",
      "Priority technical support",
      "Optional implementation support",
      "Optional custom training",
      "Optional custom validation tools",
      "Optional organization-specific output templates",
    ],
  },
];

const comparisonRows: { feature: string; professional: string; team: string }[] = [
  { feature: "Intended users", professional: "Individual professionals", team: "Firms and organizational teams" },
  { feature: "Model runs", professional: "Limited (10/month)", team: "Unlimited" },
  { feature: "Excel Add-In access", professional: "Included", team: "Included" },
  { feature: "Calibration tools", professional: "Included", team: "Included" },
  { feature: "Validation tools", professional: "Included", team: "Included" },
  { feature: "Standard documentation", professional: "Included", team: "Included" },
  { feature: "Product updates", professional: "Included", team: "Included" },
  { feature: "Standard technical support", professional: "Included", team: "Included" },
  { feature: "Priority support", professional: "Not included", team: "Included" },
  { feature: "Team onboarding", professional: "Not included", team: "Included" },
  { feature: "Group training", professional: "Not included", team: "Available" },
  { feature: "Custom testing tools", professional: "Optional", team: "Available" },
  { feature: "Organization-specific templates", professional: "No", team: "Available" },
];

const howItWorks: { title: string; desc: string }[] = [
  { title: "Select the Required Tool", desc: "Choose the relevant calibration or validation test from the CredX Excel interface." },
  { title: "Select the Input Data", desc: "Provide the required Excel ranges for model estimates, observed outcomes, forecast values, or macroeconomic variables." },
  { title: "Configure the Analysis", desc: "Define the required parameters, thresholds, confidence levels, forecast periods, or correlation assumptions." },
  { title: "Run the Test", desc: "CredX performs the selected calculations using the configured inputs." },
  { title: "Review the Results", desc: "Examine statistical results, movements, exceptions, sensitivities, and test conclusions." },
  { title: "Use the Output", desc: "Use the structured results as supporting evidence for calibration, validation, monitoring, consulting, audit, or governance documentation." },
];

const useCases: { title: string; desc: string }[] = [
  { title: "Independent Model Validation", desc: "Perform a structured assessment before model approval, implementation, redevelopment, or material change." },
  { title: "Periodic Model Monitoring", desc: "Track model performance and stability over time using consistent tests and thresholds." },
  { title: "Model Calibration", desc: "Adjust model outputs while retaining clear pre-calibration and post-calibration evidence." },
  { title: "Audit Review", desc: "Test selected assumptions, inputs, calculations, controls, and outputs as part of IFRS 9 audit procedures." },
  { title: "Regulatory or Governance Review", desc: "Prepare evidence for model committees, audit committees, internal governance functions, and regulatory review." },
  { title: "Consulting Engagements", desc: "Apply a repeatable validation framework across client assignments while maintaining separate engagement files and outputs." },
  { title: "Challenger Analysis", desc: "Compare existing model results with alternative assumptions, calibration approaches, or validation benchmarks." },
];

const faqs: { q: string; a: string }[] = [
  { q: "Is CredX an IFRS 9 calculation engine?", a: "CredX is primarily designed for the validation, calibration, testing, and monitoring of IFRS 9 and credit risk models. It can complement an existing IFRS 9 calculation process by independently testing model components and outcomes." },
  { q: "Is CredX only for banks?", a: "No. CredX can be used by banks, leasing companies, Modarabas, microfinance institutions, development finance institutions, consulting firms, audit firms, and other organizations that develop, validate, review, or audit credit risk models." },
  { q: "Can consultants use CredX for client assignments?", a: "Yes, where the purchased Consultant & Team licence includes authorised external client-use rights." },
  { q: "Can audit firms use CredX?", a: "Yes. CredX can support selected analytical, recalculation, and model-review procedures. The auditor remains responsible for determining the appropriate audit procedures and conclusions." },
  { q: "Does CredX replace professional judgement?", a: "No. CredX provides analytical and decision-support functionality. Model conclusions, validation opinions, audit judgements, accounting conclusions, and regulatory interpretations remain the responsibility of appropriately qualified professionals." },
  { q: "Does CredX guarantee IFRS 9 compliance?", a: "No software can independently guarantee compliance. CredX supports structured testing and documentation, but compliance depends on the institution's methodology, data, assumptions, governance, implementation, and professional judgement." },
  { q: "Can we select only the modules we require?", a: "Yes. Team, Advisory & Audit, and Enterprise buying options may be configured according to the required validation and calibration modules." },
  { q: "Is CredX used directly in Excel?", a: "Yes. CredX is designed as a Microsoft Excel Add-In." },
  { q: "Can a team purchase multiple licences?", a: "Yes. CredX Consultant & Team pricing can be structured according to the required number of users." },
  { q: "Is CredX cloud-based?", a: "CredX is an Excel Add-In where the UI runs in Excel and the models run on the Enterprise Engine. Deployment options may include installation within the user's approved environment or controlled access through a supported virtual-desktop arrangement, depending on the selected licence." },
  { q: "Is training available?", a: "Yes. Product onboarding, technical training, and certification options can be provided separately or included within selected packages." },
  { q: "How is CredX priced?", a: "Pricing depends on the selected modules, number of users, internal or external use, client engagements, deployment requirements, support level, and customisation." },
  { q: "Can CredX be customised?", a: "Custom tests, output formats, thresholds, and organisation-specific requirements may be considered under the Consultant & Team option." },
];


interface CredXIllustrationProps {
  /**
   * Replace this with your hosted screenshot URL (e.g., a CredX Excel
   * validation-output screenshot) when ready. Falls back to a styled
   * placeholder path if left blank.
   */
  imageSrc?: string;
}

function CredXIllustration({ imageSrc }: CredXIllustrationProps): JSX.Element {
  return (
    <div
      className="cx-excel-container"
      style={{
        width: "100%",
        maxWidth: "420px",
        aspectRatio: "420 / 300",
        borderRadius: "14px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "#0d2036",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Inter, sans-serif",
      }}
      role="img"
      aria-label="Illustrative mockup of CredX validation results inside Excel"
    >
      {/* Excel Title Bar / Window Control Mockup */}
      <div
        style={{
          height: "34px",
          background: "rgba(255, 255, 255, 0.03)",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97066" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f5c26b" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399" }} />
        </div>
      </div>

      <div style={{ flexGrow: 1, position: "relative", width: "100%", height: "100%" }}>
        <img
          src={imageSrc || "/credx.jpeg"}
          alt="CredX Excel validation and calibration grid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Component                                                         */
/* ---------------------------------------------------------------- */

export default function CredX(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>(toolCategories[0].id);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentCategory = toolCategories.find((c) => c.id === activeCategory) ?? toolCategories[0];

  return (
    <div className="cx-page">
      <div className="cx-glow" aria-hidden="true" />
      <div className="cx-glow cx-glow-2" aria-hidden="true" />

      {/* Hero — rebuilt as a two-column layout (text + visual), matching
          the IFRS 9 Add-In page's hero design. */}
      <section className="cx-hero">
        <div className="cx-container cx-hero-grid">
          <div className="cx-hero-text">
            <span className="cx-eyebrow cx-anim cx-anim-1">
              <span className="cx-eyebrow-dot" aria-hidden="true" />
              CredX
            </span>
            <h1 className="cx-title cx-anim cx-anim-2">Validate. Calibrate. Audit Credit Risk Models.</h1>
            <p className="cx-lead cx-anim cx-anim-3">
              CredX is a validation and calibration toolkit for IFRS 9 and credit risk models.
            </p>
            <p className="cx-description cx-anim cx-anim-4">
              Designed for model validation teams, consultants, and external audit professionals.
            </p>

            <div className="cx-hero-actions cx-anim cx-anim-5">
              <a className="cx-btn cx-btn-primary" href="#pricing">
                See Pricing <span className="cx-btn-arrow" aria-hidden="true">→</span>
              </a>
              <a className="cx-btn cx-btn-outline" href="#tools">
                Explore Tools
              </a>
            </div>
          </div>

          <div className="cx-hero-visual cx-anim cx-anim-5">
            <CredXIllustration />
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="cx-section cx-section-alt">
        <div className="cx-container">
          <div className="cx-positioning">
            <div className="cx-reveal">
              <h2 className="cx-section-title">Model Validation Without Spreadsheet Chaos</h2>
              <p className="cx-body-text">
                Credit risk model validation often involves disconnected spreadsheets, manually
                developed tests, and inconsistent calculations.
              </p>
              <p className="cx-body-text">
                CredX provides an environment within Microsoft Excel for validating and
                calibrating IFRS 9 and credit risk models. It helps users perform model testing
                more consistently, investigate exceptions, compare model outcomes, and generate
                evidence that can support validation, governance, and audit procedures.
              </p>
            </div>

            <div className="cx-sits-between cx-reveal">
              <span className="cx-sits-between-label">CredX sits between</span>
              <div className="cx-sits-between-row">
                <div className="cx-sits-between-item">Manually developed Excel testing files</div>
                <span className="cx-sits-between-arrow" aria-hidden="true">↔</span>
                <div className="cx-sits-between-item cx-sits-between-highlight">CredX</div>
                <span className="cx-sits-between-arrow" aria-hidden="true">↔</span>
                <div className="cx-sits-between-item">Highly technical statistical software</div>
              </div>
              <p className="cx-body-text cx-sits-between-note">
                …and large enterprise model-risk platforms — combining the familiarity of Excel
                with a structured credit risk validation framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who CredX Is For */}
      <section className="cx-section">
        <div className="cx-container">
          <h2 className="cx-section-title cx-centered cx-reveal">Who CredX Is For</h2>
          <div className="cx-audience-grid">
            {audiences.map((a, i) => (
              <div className="cx-card cx-reveal" style={{ transitionDelay: `${i * 60}ms` }} key={a.key}>
                <h3 className="cx-card-title">{a.title}</h3>
                <p className="cx-card-desc">{a.desc}</p>
                <span className="cx-label">Suitable for</span>
                <ul className="cx-tag-list">
                  {a.suitableFor.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
                {a.note && <p className="cx-note">{a.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Explorer */}
      <section className="cx-section cx-section-alt" id="tools">
        <div className="cx-container">
          <h2 className="cx-section-title cx-centered cx-reveal">CredX Tools</h2>
          <p className="cx-section-description cx-centered cx-reveal">
            Twenty calibration and validation tools across seven categories, covering the full
            IFRS 9 model lifecycle from PD calibration through PiT LGD validation.
          </p>

          <div className="cx-tab-row" role="tablist">
            {toolCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`cx-tab ${activeCategory === cat.id ? "cx-tab-active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="cx-tool-grid" key={activeCategory}>
            {currentCategory.tools.map((tool, i) => (
              <div className="cx-card cx-tool-card cx-fade-in" style={{ animationDelay: `${i * 70}ms` }} key={tool.name}>
                <h3 className="cx-card-title">{tool.name}</h3>
                <p className="cx-card-desc">{tool.desc}</p>
                <span className="cx-label">Can support</span>
                <ul className="cx-bullet-list">
                  {tool.supports.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use CredX */}
      <section className="cx-section">
        <div className="cx-container">
          <h2 className="cx-section-title cx-centered cx-reveal">Why Use CredX?</h2>
          <div className="cx-benefit-grid">
            {benefits.map((b, i) => (
              <div className="cx-card cx-reveal" style={{ transitionDelay: `${i * 50}ms` }} key={b.title}>
                <h3 className="cx-card-title">{b.title}</h3>
                <p className="cx-card-desc">{b.desc}</p>
                {b.extra && (
                  <ul className="cx-bullet-list">
                    {b.extra.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Options */}
      <section className="cx-section cx-section-alt" id="pricing">
        <div className="cx-container">
          <h2 className="cx-section-title cx-centered cx-reveal">Buying Options</h2>
          <p className="cx-section-description cx-centered cx-reveal">
            CredX is available under two principal licence options.
          </p>

          <div className="cx-billing-toggle">
            <span
              className="cx-billing-thumb"
              style={{ transform: billing === "monthly" ? "translateX(0%)" : "translateX(100%)" }}
              aria-hidden="true"
            />
            <button
              className={`cx-billing-btn ${billing === "monthly" ? "cx-billing-btn-active" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`cx-billing-btn ${billing === "yearly" ? "cx-billing-btn-active" : ""}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>

          <div className="cx-plan-grid">
            {plans.map((plan) => (
              <div
                className={`cx-plan-card ${plan.highlighted ? "cx-plan-card-highlighted" : ""}`}
                key={plan.key}
              >
                {plan.highlighted && <span className="cx-plan-badge">Most Popular</span>}
                <h3 className="cx-plan-name">{plan.name}</h3>
                <p className="cx-plan-audience">{plan.audience}</p>

                <div className="cx-plan-price">
                  <span className="cx-plan-price-value" key={billing}>
                    {billing === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  </span>
                  <span className="cx-plan-price-period">
                    /{billing === "monthly" ? "month" : "year"}/user
                  </span>
                </div>

                <p className="cx-card-desc">{plan.desc}</p>

                <span className="cx-label">Usage allowance</span>
                <ul className="cx-bullet-list">
                  {plan.usage.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>

                <span className="cx-label">License features</span>
                <ul className="cx-bullet-list">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <p className="cx-plan-tools-note">
                  Includes all 20 CredX calibration and validation tools — see{" "}
                  <a href="#tools">CredX Tools</a>.
                </p>

                <a
                  className={`cx-btn ${plan.highlighted ? "cx-btn-primary" : "cx-btn-outline"} cx-plan-cta`}
                  href="/contact"
                >
                  Coming soon<span className="cx-btn-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="cx-table-scroll cx-reveal">
            <table className="cx-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>CredX Professional</th>
                  <th>CredX Team</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <th>{row.feature}</th>
                    <td className={row.professional.startsWith("Not") || row.professional === "No" ? "cx-muted" : ""}>
                      {row.professional}
                    </td>
                    <td>{row.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Refund & Cancellation Policy — moved to its own page so the
          pricing/legal content isn't all crammed into one long scroll. */}
      <section className="cx-section" id="refund-policy">
        <div className="cx-container">
          <div className="cx-policy-cta cx-reveal">
            <div>
              <h2 className="cx-card-title" style={{ fontSize: "1.2rem" }}>Refund &amp; Cancellation Policy</h2>
              <p className="cx-card-desc" style={{ marginBottom: 0 }}>
                Details on eligibility windows, subscriptions, renewals, and how to request a refund.
              </p>
            </div>
            <a className="cx-btn cx-btn-outline cx-policy-cta-btn" href="/refund-policy">
              View Full Policy <span className="cx-btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="cx-section cx-section-alt">
        <div className="cx-container">
          <h2 className="cx-section-title cx-centered cx-reveal">How CredX Works</h2>
          <div className="cx-steps-grid">
            {howItWorks.map((step, i) => (
              <div className="cx-card cx-step-card cx-reveal" style={{ transitionDelay: `${i * 60}ms` }} key={step.title}>
                <span className="cx-step-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="cx-card-title">{step.title}</h3>
                <p className="cx-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="cx-section cx-section-alt">
        <div className="cx-container">
          <h2 className="cx-section-title cx-centered cx-reveal">CredX Use Cases</h2>
          <div className="cx-usecase-grid">
            {useCases.map((u, i) => (
              <div className="cx-card cx-reveal" style={{ transitionDelay: `${i * 50}ms` }} key={u.title}>
                <h3 className="cx-card-title">{u.title}</h3>
                <p className="cx-card-desc">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cx-section">
        <div className="cx-container cx-faq-container">
          <h2 className="cx-section-title cx-centered cx-reveal">Frequently Asked Questions</h2>
          <div className="cx-faq-list">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`cx-faq-item ${isOpen ? "cx-faq-item-open" : ""}`} key={f.q}>
                  <button
                    className="cx-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {f.q}
                    <span className="cx-faq-icon" aria-hidden="true">+</span>
                  </button>
                  <div className="cx-faq-answer-wrap">
                    <div className="cx-faq-answer-inner">
                      <p className="cx-faq-answer">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="cx-section cx-section-alt">
        <div className="cx-container cx-contact cx-reveal">
          <h2 className="cx-section-title">Ready to Validate with Confidence?</h2>
          <p className="cx-section-description">
            Talk to the team about which CredX licence fits your validation, calibration, or
            audit workflow.
          </p>
          <div className="cx-contact-actions">
            <a className="cx-btn cx-btn-primary" href="mailto:info@probmatrix.io">
              info@probmatrix.io
            </a>
            <a className="cx-btn cx-btn-outline" href="tel:+923365264744">
              +92 336 5264744
            </a>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .cx-page {
          --cx-bg: #0a1b2e;
          --cx-bg-alt: #0d2036;
          --cx-panel: #0f2540;
          --cx-line: rgba(255, 255, 255, 0.09);
          --cx-accent: #3b9eea;
          --cx-text-body: #9fb4cc;
          --cx-text-heading: #ffffff;

          position: relative;
          background: var(--cx-bg);
          overflow: hidden;
          font-family: "Inter", system-ui, sans-serif;
        }

        .cx-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(59, 158, 234, 0.18) 0%, rgba(59, 158, 234, 0) 70%);
          pointer-events: none;
          animation: cxPulse 8s ease-in-out infinite;
        }

        .cx-glow-2 {
          top: 900px;
          left: 20%;
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(162, 89, 230, 0.12) 0%, rgba(162, 89, 230, 0) 70%);
          animation-delay: 3s;
        }

        @keyframes cxPulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.08); }
        }

        .cx-container {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .cx-hero {
          padding: 110px 0 64px;
        }

        /* Two-column hero layout — text left, visual right — matching the
           IFRS 9 Add-In page's ia-hero-grid pattern. */
        .cx-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 48px;
        }

        .cx-hero-text {
          text-align: left;
        }

        .cx-hero-visual {
          background: var(--cx-panel);
          border: 1px solid var(--cx-line);
          border-radius: 18px;
          padding: 16px;
        }

        @keyframes cxFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cx-anim {
          opacity: 0;
          animation: cxFadeUp 0.6s ease forwards;
        }

        .cx-anim-1 { animation-delay: 0.05s; }
        .cx-anim-2 { animation-delay: 0.15s; }
        .cx-anim-3 { animation-delay: 0.25s; }
        .cx-anim-4 { animation-delay: 0.32s; }
        .cx-anim-5 { animation-delay: 0.4s; }

        .cx-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--cx-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .cx-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cx-accent);
          box-shadow: 0 0 8px var(--cx-accent);
          animation: cxDotPulse 2s ease-in-out infinite;
        }

        @keyframes cxDotPulse {
          0%, 100% { box-shadow: 0 0 6px var(--cx-accent); }
          50% { box-shadow: 0 0 14px var(--cx-accent); }
        }

        .cx-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4.2vw, 2.9rem);
          line-height: 1.18;
          color: var(--cx-text-heading);
          margin: 0 0 18px;
        }

        .cx-lead {
          font-weight: 600;
          font-size: 1.15rem;
          color: #dceaf9;
          max-width: 56ch;
          margin: 0 0 10px;
        }

        .cx-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--cx-text-body);
          max-width: 56ch;
          margin: 0 0 36px;
        }

        .cx-hero-actions {
          display: flex;
          justify-content: flex-start;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cx-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 999px;
          padding: 12px 24px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
        }

        .cx-btn-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .cx-btn:hover .cx-btn-arrow {
          transform: translateX(3px);
        }

        .cx-btn-primary {
          background: var(--cx-accent);
          color: #ffffff;
          box-shadow: 0 4px 18px rgba(59, 158, 234, 0.35);
        }

        .cx-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(59, 158, 234, 0.5);
        }

        .cx-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .cx-btn-outline:hover {
          border-color: rgba(255, 255, 255, 0.55);
          transform: translateY(-2px);
        }

        .cx-section {
          position: relative;
          padding: 80px 0;
        }

        .cx-section-alt {
          background: var(--cx-bg-alt);
        }

        .cx-section-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--cx-text-heading);
          margin: 0 0 12px;
        }

        .cx-section-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--cx-text-body);
          max-width: 62ch;
          margin: 0 0 32px;
        }

        .cx-centered {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .cx-reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: cxFadeUp 0.7s ease forwards;
          animation-timeline: view();
          animation-range: entry 0% cover 25%;
        }

        @supports not (animation-timeline: view()) {
          .cx-reveal {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        .cx-body-text {
          font-size: 0.975rem;
          line-height: 1.7;
          color: var(--cx-text-body);
          margin: 0 0 14px;
        }

        .cx-positioning {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .cx-sits-between {
          background: var(--cx-panel);
          border: 1px solid var(--cx-line);
          border-radius: 16px;
          padding: 24px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .cx-sits-between:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 158, 234, 0.3);
        }

        .cx-sits-between-label {
          display: block;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--cx-accent);
          margin-bottom: 16px;
        }

        .cx-sits-between-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cx-sits-between-item {
          flex: 1 1 140px;
          font-size: 0.8rem;
          text-align: center;
          color: var(--cx-text-body);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--cx-line);
          border-radius: 10px;
          padding: 14px 10px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .cx-sits-between-item:hover {
          transform: scale(1.04);
          border-color: rgba(59, 158, 234, 0.35);
        }

        .cx-sits-between-highlight {
          color: #ffffff;
          font-weight: 700;
          background: rgba(59, 158, 234, 0.16);
          border-color: rgba(59, 158, 234, 0.4);
        }

        .cx-sits-between-arrow {
          color: var(--cx-text-body);
          font-size: 1rem;
          flex-shrink: 0;
        }

        .cx-sits-between-note {
          margin: 16px 0 0;
          font-size: 0.875rem;
        }

        .cx-card {
          background: var(--cx-panel);
          border: 1px solid var(--cx-line);
          border-radius: 16px;
          padding: 26px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .cx-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 158, 234, 0.35);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.28);
        }

        @keyframes cxFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cx-fade-in {
          opacity: 0;
          animation: cxFadeIn 0.4s ease forwards;
        }

        .cx-card-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--cx-text-heading);
          margin: 0 0 10px;
        }

        .cx-card-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--cx-text-body);
          margin: 0 0 16px;
        }

        .cx-label {
          display: block;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cx-accent);
          margin-bottom: 8px;
        }

        .cx-tag-list,
        .cx-bullet-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cx-tag-list li,
        .cx-bullet-list li {
          position: relative;
          padding-left: 14px;
          font-size: 0.825rem;
          line-height: 1.5;
          color: var(--cx-text-body);
        }

        .cx-tag-list li::before,
        .cx-bullet-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--cx-accent);
        }

        .cx-note {
          margin: 16px 0 0;
          padding-top: 14px;
          border-top: 1px solid var(--cx-line);
          font-size: 0.8rem;
          font-style: italic;
          line-height: 1.6;
          color: rgba(159, 180, 204, 0.75);
        }

        .cx-audience-grid,
        .cx-benefit-grid,
        .cx-usecase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .cx-tab-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 32px;
        }

        .cx-tab {
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--cx-text-body);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--cx-line);
          border-radius: 999px;
          padding: 9px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cx-tab:hover {
          color: #ffffff;
          border-color: rgba(59, 158, 234, 0.4);
          transform: translateY(-1px);
        }

        .cx-tab-active {
          color: #ffffff;
          background: var(--cx-accent);
          border-color: var(--cx-accent);
          box-shadow: 0 4px 14px rgba(59, 158, 234, 0.4);
        }

        .cx-tool-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .cx-billing-toggle {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--cx-line);
          border-radius: 999px;
          padding: 4px;
          width: 220px;
          margin: 0 auto 40px;
        }

        .cx-billing-thumb {
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(50% - 4px);
          height: calc(100% - 8px);
          background: var(--cx-accent);
          border-radius: 999px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cx-billing-btn {
          position: relative;
          z-index: 1;
          flex: 1;
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--cx-text-body);
          background: transparent;
          border: none;
          border-radius: 999px;
          padding: 8px 20px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .cx-billing-btn-active {
          color: #ffffff;
        }

        .cx-plan-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .cx-plan-card {
          position: relative;
          background: var(--cx-panel);
          border: 1px solid var(--cx-line);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cx-plan-card:hover {
          transform: translateY(-6px);
        }

        .cx-plan-card-highlighted {
          border-color: rgba(59, 158, 234, 0.5);
          box-shadow: 0 0 0 1px rgba(59, 158, 234, 0.2), 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        @keyframes cxBadgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .cx-plan-badge {
          position: absolute;
          top: -12px;
          left: 32px;
          background: var(--cx-accent);
          color: #ffffff;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 4px 12px;
          animation: cxBadgeFloat 2.4s ease-in-out infinite;
        }

        .cx-plan-name {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--cx-text-heading);
          margin: 8px 0 4px;
        }

        .cx-plan-audience {
          font-size: 0.85rem;
          color: var(--cx-accent);
          margin: 0 0 20px;
        }

        .cx-plan-price {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 18px;
        }

        @keyframes cxPriceIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cx-plan-price-value {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 2.4rem;
          color: var(--cx-text-heading);
          display: inline-block;
          animation: cxPriceIn 0.3s ease;
        }

        .cx-plan-price-period {
          font-size: 0.85rem;
          color: var(--cx-text-body);
        }

        .cx-plan-card .cx-label {
          margin-top: 6px;
        }

        .cx-plan-card .cx-bullet-list {
          margin-bottom: 20px;
        }

        .cx-plan-tools-note {
          font-size: 0.8rem;
          color: var(--cx-text-body);
          margin: 0 0 24px;
        }

        .cx-plan-tools-note a {
          color: var(--cx-accent);
          text-decoration: none;
        }

        .cx-plan-tools-note a:hover {
          text-decoration: underline;
        }

        .cx-plan-cta {
          margin-top: auto;
          justify-content: center;
        }

        .cx-table-scroll {
          overflow-x: auto;
          border: 1px solid var(--cx-line);
          border-radius: 16px;
        }

        .cx-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 640px;
          font-size: 0.85rem;
        }

        .cx-table thead th {
          text-align: left;
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--cx-text-heading);
          background: var(--cx-panel);
          padding: 16px 18px;
          border-bottom: 1px solid var(--cx-line);
        }

        .cx-table tbody th {
          text-align: left;
          font-weight: 500;
          color: var(--cx-text-heading);
          background: var(--cx-panel);
          padding: 13px 18px;
          border-bottom: 1px solid var(--cx-line);
          white-space: nowrap;
        }

        .cx-table tbody td {
          color: var(--cx-text-body);
          padding: 13px 18px;
          border-bottom: 1px solid var(--cx-line);
        }

        .cx-table tbody tr {
          transition: background 0.15s ease;
        }

        .cx-table tbody tr:hover td,
        .cx-table tbody tr:hover th {
          background: rgba(59, 158, 234, 0.06);
        }

        .cx-table tbody tr:nth-child(odd) td,
        .cx-table tbody tr:nth-child(odd) th {
          background: rgba(255, 255, 255, 0.015);
        }

        .cx-muted {
          color: rgba(159, 180, 204, 0.45);
          font-style: italic;
        }

        .cx-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .cx-step-number {
          display: inline-block;
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--cx-accent);
          margin-bottom: 12px;
        }

        .cx-faq-container {
          max-width: 820px;
        }

        .cx-faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cx-faq-item {
          background: var(--cx-panel);
          border: 1px solid var(--cx-line);
          border-radius: 12px;
          transition: border-color 0.2s ease;
        }

        .cx-faq-item-open {
          border-color: rgba(59, 158, 234, 0.35);
        }

        .cx-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--cx-text-heading);
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 18px 20px;
        }

        .cx-faq-icon {
          flex-shrink: 0;
          font-size: 1.2rem;
          color: var(--cx-accent);
          transition: transform 0.25s ease;
        }

        .cx-faq-item-open .cx-faq-icon {
          transform: rotate(45deg);
        }

        .cx-faq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }

        .cx-faq-item-open .cx-faq-answer-wrap {
          grid-template-rows: 1fr;
        }

        .cx-faq-answer-inner {
          overflow: hidden;
        }

        .cx-faq-answer {
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--cx-text-body);
          margin: 0;
          padding: 0 20px 18px;
        }

        .cx-policy-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          background: var(--cx-panel);
          border: 1px solid var(--cx-line);
          border-radius: 16px;
          padding: 26px;
        }

        .cx-policy-cta-btn {
          flex-shrink: 0;
        }

        @media (max-width: 560px) {
          .cx-policy-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .cx-contact {
          text-align: center;
        }

        .cx-contact .cx-section-description {
          margin-left: auto;
          margin-right: auto;
        }

        .cx-contact-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .cx-hero-grid {
            grid-template-columns: 1fr;
          }

          .cx-hero-text {
            text-align: center;
          }

          .cx-hero-actions {
            justify-content: center;
          }

          .cx-hero-visual {
            order: -1;
            max-width: 420px;
            margin: 0 auto;
          }

          .cx-lead,
          .cx-description {
            margin-left: auto;
            margin-right: auto;
          }

          .cx-positioning {
            grid-template-columns: 1fr;
          }

          .cx-audience-grid,
          .cx-benefit-grid,
          .cx-usecase-grid,
          .cx-tool-grid,
          .cx-steps-grid,
          .cx-plan-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .cx-hero {
            padding: 88px 0 48px;
          }

          .cx-section {
            padding: 56px 0;
          }

          .cx-sits-between-row {
            flex-direction: column;
          }

          .cx-sits-between-arrow {
            transform: rotate(90deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cx-anim, .cx-reveal, .cx-fade-in, .cx-glow, .cx-eyebrow-dot, .cx-plan-badge {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}