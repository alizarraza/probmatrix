import { useState } from "react";
import IFRS9Workflow from "../../components/IFRS9Workflow";
import NativeExcelExperience from "../../components/Nativeexcelexperience";
import { useDemoModal } from "../../context/DemoModalContext";

interface Edition {
  key: string;
  name: string;
  bestFor: string;
  description: string;
  accent: string;
}

interface FeatureRow {
  dimension: string;
  values: [string, string, string, string];
}

interface Benefit {
  title: string;
  description: string;
}

const editions: Edition[] = [
  {
    key: "foundation",
    name: "IFRS 9 Foundation",
    bestFor: "Corporates",
    description:
      "A focused solution using the Simple Approach for trade receivables and contract assets.",
    accent: "#34d399",
  },
  {
    key: "structured",
    name: "IFRS 9 Structured",
    bestFor: "FinTechs, NBFCs, MFIs, Insurers, and Small Lenders",
    description:
      "Applies the General Approach for lease receivables and smaller loan portfolios using PD-LGD-EAD modeling.",
    accent: "#3b9eea",
  },
  {
    key: "enterprise",
    name: "IFRS 9 Enterprise",
    bestFor: "Banks & Large Financial Institutions",
    description:
      "An enterprise-grade, advanced General Approach solution supporting multiple complex credit portfolios.",
    accent: "#f59e0b",
  },
  {
    key: "modular",
    name: "IFRS 9 Modular",
    bestFor: "Module-specific deployments",
    description:
      "A configurable option letting institutions choose only the specific modules they need (e.g., just PD, LGD, or Macroeconomic modeling).",
    accent: "#a78bfa",
  },
];

const featureMatrix: FeatureRow[] = [
  {
    dimension: "Target Institutions",
    values: [
      "Corporates",
      "FinTechs, NBFCs, MFIs, insurers, small lenders",
      "Banks & large financial institutions",
      "Institutions requiring specific modules",
    ],
  },
  {
    dimension: "IFRS 9 Approach",
    values: [
      "Simple Approach",
      "General Approach",
      "General Approach (advanced)",
      "Simple or General (module-based)",
    ],
  },
  {
    dimension: "Segmentation",
    values: [
      "Bucket-level segmentation",
      "Advanced segmentation",
      "Granular multi-portfolio segmentation",
      "All levels (as enabled)",
    ],
  },
  {
    dimension: "PD Methodology",
    values: [
      "Loss rate approach",
      "Portfolio-specific PD methodologies",
      "Product/data-specific PD methodologies",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "PD Calibration",
    values: [
      "Not applicable",
      "One calibration technique (if required)",
      "Portfolio-specific calibration suite",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "LGD Methodology",
    values: [
      "Not applicable",
      "Cost, cure & recovery period adjustments",
      "Cost, cure, recovery & collateral adjustments",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "Macroeconomic Modelling",
    values: [
      "Forward-looking overlays",
      "Modelling with testing/validation",
      "Advanced modelling with testing/validation",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "Scenario Analysis",
    values: [
      "Probability-weighted lifetime ECL",
      "Multi-scenario, probability-weighted ECL",
      "Multi-scenario, probability-weighted ECL",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "Staging & SICR",
    values: [
      "Not applicable",
      "Supported",
      "Supported",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "EAD / CCF / EIR",
    values: [
      "Not applicable",
      "EAD term structures; PiT PD & LGD term structures",
      "EAD term structures; CCF & EIR estimation; PiT PD & LGD term structures",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "Output Summary",
    values: [
      "Provision summary",
      "Stage/rating/bucket/portfolio summaries",
      "Stage/rating/bucket/portfolio summaries",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "Validation Tools",
    values: [
      "Not applicable",
      "Limited checks",
      "Comprehensive validation tools",
      "Depends on enabled modules",
    ],
  },
  {
    dimension: "Documentation & Training",
    values: ["Included", "Included", "Included", "As per enabled modules"],
  },
  {
    dimension: "Implementation & Audit Support",
    values: ["Available", "Available", "Available", "Available"],
  },
];

// Expanded to match the full benefit set from the live probmatrix.io site
// (previously only 3 of these were shown).
const benefits: Benefit[] = [
  {
    title: "End-to-End ECL Calculation",
    description:
      "Perform complete IFRS 9 Expected Credit Loss computations seamlessly, without the need for costly external consultants.",
  },
  {
    title: "Simple & Intuitive",
    description:
      "A user-friendly, form-based interface makes it easy: just select your data, click, and get results instantly.",
  },
  {
    title: "Secure & Independent",
    description:
      "Runs entirely within your internal system, with no internet connection required, keeping your sensitive financial data safe and compliant.",
  },
  {
    title: "Fast & Efficient",
    description:
      "Automates complex IFRS 9 models (PD, LGD, Macroeconomic Scenarios, EAD, ECL) directly in Excel, saving significant time compared to manual processes.",
  },
  {
    title: "Cost-Effective Compliance",
    description:
      "Avoid the high costs of large enterprise risk systems while still meeting IFRS 9 requirements.",
  },
  {
    title: "Easy Adoption",
    description:
      "Built in Excel, making it familiar and easy for finance and risk teams to adopt with minimal training.",
  },
];

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  {
    q: "What is the Probmatrix IFRS 9 Add-In?",
    a: "The Probmatrix IFRS 9 Add-In is a solution designed to automate and streamline Expected Credit Loss calculations. It supports key IFRS 9 processes, including PD, LGD, EAD, macroeconomic scenario analysis, stage allocation, and ECL calculation within the familiar Microsoft Excel environment.",
  },
  {
    q: "Who is the IFRS 9 Add-In designed for?",
    a: "The Add-In is designed for banks, microfinance institutions, credit unions, leasing companies, financial institutions and all institutions where IFRS 9 is applicable. It can be used by risk, finance, credit, validation, and IFRS 9 professionals involved in ECL calculation, review, reporting, or implementation.",
  },
  {
    q: "Is the Add-In based on VBA?",
    a: "No. While the user interface is integrated with Microsoft Excel for ease of use, the underlying ECL engine and component-estimation processes are powered by enterprise-grade DLL-based systems rather than VBA.",
  },
  {
    q: "How many data collection options are available in the Add-In?",
    a: "The Add-In provides three data-loading options to accommodate different data volumes and operating environments: (1) Direct Excel Selection — for smaller datasets, users can select the required data directly from an Excel worksheet. (2) Multiple-File Import — for larger datasets, users can import and process data from multiple Excel files. (3) Direct Server Integration — for high-volume or centrally managed datasets, the Add-In can retrieve data directly from the designated server.",
  },
  {
    q: "Do I need an internet connection to use the IFRS 9 Add-In?",
    a: "An internet connection is not required for normal ECL processing. The Add-In operates within your organization's internal environment. However, occasional internet access may be required to verify license integrity. This license-verification process is separate from the processing of your financial and portfolio data.",
  },
  {
    q: "Is our financial data uploaded to the cloud?",
    a: "No cloud upload is required to perform calculations. Portfolio data, assumptions, models, and calculation results are processed within your organization's internal environment, helping you maintain control over sensitive financial information.",
  },
  {
    q: "Which IFRS 9 calculations and methodologies are supported?",
    a: "The Add-In supports a comprehensive range of IFRS 9 calculations and methodologies, including Through-the-Cycle and Point-in-Time PD estimation, PD calibration, macroeconomic modelling and scenario analysis, LGD/recovery-period/cure-rate analysis, Point-in-Time LGD estimation, EAD and Credit Conversion Factor calculations, Effective Interest Rate calculations, stage allocation and SICR assessment, Expected Credit Loss calculations, and model validation tools and calculation logs. Available methodologies may vary depending on the selected product package and implementation requirements.",
  },
  {
    q: "Can we use our own data, assumptions, and economic scenarios?",
    a: "Yes. Users can apply institution-specific portfolio data, model assumptions, segmentation rules, economic scenarios, and management inputs. This allows teams to test alternative assumptions, compare results, and assess their impact on ECL.",
  },
  {
    q: "Is the calculation process transparent and auditable?",
    a: "Yes. The Add-In is designed to produce structured and reviewable calculation outputs. Its transparent methodology, calculation logs, and supporting results can help risk teams, management, auditors, and model validators understand and reproduce ECL calculations.",
  },
  {
    q: "Does the Add-In automatically guarantee IFRS 9 compliance?",
    a: "The Add-In supports the implementation and automation of IFRS 9-aligned methodologies. However, compliance also depends on the institution's data quality, accounting policies, model governance, management judgments, validation processes, and applicable regulatory requirements.",
  },
  {
    q: "How is the Add-In installed?",
    a: "The Add-In is installed directly within Microsoft Excel. It does not require the implementation of a separate enterprise risk platform, dedicated server, or complex ERP system. Installation and configuration assistance can be provided during onboarding.",
  },
  {
    q: "Can the Add-In work with our existing IFRS 9 models?",
    a: "The Add-In can support organizations that already have established IFRS 9 methodologies, assumptions, and calculation frameworks. Existing approaches can be reviewed during implementation to determine how they can be configured or incorporated into the solution.",
  },
  {
    q: "What data do we need to use in the Add-In?",
    a: "The required data depends on the calculations being performed. It may include account-level exposure information, repayment schedules, historical default data, recovery information, collateral data, staging indicators, PD and LGD assumptions, and macroeconomic variables. A detailed data-requirement template can be provided before implementation.",
  },
  {
    q: "Can the Add-In handle multiple portfolios and financial products?",
    a: "The Add-In is designed to support different portfolio types and credit products. The exact configuration may depend on the institution's products, segmentation methodology, contractual terms, and modelling requirements.",
  },
  {
    q: "Can results be exported for management or audit reporting?",
    a: "Calculation results can be generated and reviewed within Excel, making it easier to prepare supporting schedules, management reports, validation evidence, and audit documentation. The available output formats and reporting templates should be confirmed during the demonstration or implementation process.",
  },
  {
    q: "Does the Add-In integrate with core banking or ERP systems?",
    a: "The Add-In operates within Excel and can work with data extracted from existing source systems. Where required, custom data-import, automation, or system-integration services may be evaluated separately.",
  },
  {
    q: "How long does implementation take?",
    a: "Implementation time depends on the institution's portfolio complexity, data readiness, methodology, customization requirements, and number of users. A preliminary implementation plan can be provided after an initial assessment or product demonstration.",
  },
  {
    q: "Is training included?",
    a: "Training and implementation support are available to help users configure the Add-In, prepare data, perform calculations, interpret results, and generate supporting reports. Probmatrix also offers a dedicated IFRS 9 Add-In Certification Program for professionals seeking more comprehensive practical training.",
  },
  {
    q: "Is technical support available after implementation?",
    a: "Yes. Technical and methodological support options are available. The applicable support coverage, response times, upgrade arrangements, and service levels depend on the selected license and support package.",
  },
  {
    q: "Can we request a demonstration or trial?",
    a: "Yes. Organizations can request a product demonstration to review the Add-In's functionality and discuss their IFRS 9 requirements. Trial availability and conditions can be confirmed with the Probmatrix team.",
  },
];

const MUTED_VALUES = new Set(["Not applicable", "Depends on enabled modules"]);

// Illustrative mockup of the Add-In running inside Excel, with a risk-graded
// grid and a floating ECL badge — echoes the PD/LGD/ECL pills used site-wide.
interface ExcelIllustrationProps {
  /**
   * Replace this with your hosted image URL (e.g., "/images/ecl-model-preview.png")
   * when ready. Leaving it blank or omitting it will show a clean, styled placeholder.
   */
  imageSrc?: string;
}

export function ExcelIllustration({ imageSrc }: ExcelIllustrationProps): JSX.Element {
  return (
    <div
      className="ia-excel-container"
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
      aria-label="Illustrative mockup of the IFRS 9 Add-In grid inside Excel, with risk-graded cells and an ECL summary badge"
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
        {/* Window Dots */}
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97066" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f5c26b" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399" }} />
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1, position: "relative", width: "100%", height: "100%" }}>
        <img
          src={imageSrc || "/ifrs.jpeg"}
          alt="IFRS 9 Add-In Excel Grid"
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

// Dimensions surfaced as quick-glance highlights on each edition card —
// pulled live from featureMatrix so the cards never drift from the table.
const HIGHLIGHT_DIMENSIONS: string[] = [
  "IFRS 9 Approach",
  "PD Methodology",
  "Validation Tools",
];

function getFeatureValue(dimension: string, editionIndex: number): string {
  const row = featureMatrix.find((r) => r.dimension === dimension);
  return row ? row.values[editionIndex] : "—";
}

function EditionIcon({ editionKey }: { editionKey: string }): JSX.Element {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (editionKey === "foundation") {
    return (
      <svg {...common}>
        <path d="M4 21V7l8-4 8 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
      </svg>
    );
  }
  if (editionKey === "structured") {
    return (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
      </svg>
    );
  }
  if (editionKey === "enterprise") {
    return (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6M12 21v-6M15 21v-6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14 3h4a2 2 0 0 1 2 2v4h-2a2 2 0 1 0 0 4h2v4a2 2 0 0 1-2 2h-4v-2a2 2 0 1 0-4 0v2H6a2 2 0 0 1-2-2v-4h2a2 2 0 1 0 0-4H4V5a2 2 0 0 1 2-2h4v2a2 2 0 1 0 4 0z" />
    </svg>
  );
}

// Shield + local-device motif for the Data Security benefit — no cloud icon,
// reinforcing that the Add-In runs entirely offline.
function SecurityIllustration(): JSX.Element {
  return (
    <svg
      className="ia-security-svg"
      viewBox="0 0 260 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a shield and a local device, representing data that stays on-premise with no internet connection required"
    >
      <circle cx="130" cy="130" r="118" fill="rgba(59,158,234,0.07)" />
      <circle cx="130" cy="130" r="86" fill="rgba(59,158,234,0.06)" />

      <path
        d="M130,52 L182,72 V126 C182,164 160,190 130,204 C100,190 78,164 78,126 V72 Z"
        fill="#0f2540"
        stroke="#3b9eea"
        strokeWidth="2.5"
      />
      <path
        d="M108,128 L124,144 L156,110"
        fill="none"
        stroke="#34d399"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g transform="translate(90, 208)">
        <rect width="80" height="16" rx="3" fill="#0d2036" stroke="rgba(255,255,255,0.14)" />
        <rect x="34" y="16" width="12" height="10" fill="#0d2036" stroke="rgba(255,255,255,0.14)" />
        <rect x="22" y="26" width="36" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
      </g>
    </svg>
  );
}

// Accordion item for the FAQ section — styled with the same ia- design
// tokens as the rest of this page.
function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}): JSX.Element {
  return (
    <div className={`ia-faq-item ${isOpen ? "ia-faq-item-open" : ""}`}>
      <button className="ia-faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <span className="ia-faq-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className="ia-faq-answer-wrap">
        <p className="ia-faq-answer">{faq.a}</p>
      </div>
    </div>
  );
}

export default function IfrsAddin(): JSX.Element {
  const { open: openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="ia-page">
      <div className="ia-glow" aria-hidden="true" />

      {/* Intro */}
      <section className="ia-hero">
        <div className="ia-container ia-hero-grid">
          <div className="ia-hero-text">
            {/* <span className="ia-eyebrow">
              <span className="ia-eyebrow-dot" aria-hidden="true" />
              Product
            </span> */}
            <h1 className="ia-title">Probmatrix IFRS 9 Add-In</h1>
            <p className="ia-description">
              Automate the complete Expected Credit Loss process—from data
              preparation and model calculations to forward-looking
              scenarios, reporting and audit trails.
            </p>

            <div className="ia-hero-actions">
  <button type="button" className="ia-btn ia-btn-primary" onClick={openDemoModal}>
    Request a Demo <span aria-hidden="true">→</span>
  </button>
  {/* <a className="ia-btn ia-btn-outline" href="#editions">
    Compare Editions
  </a> */}
  <a className="ia-btn ia-btn-outline" href="/ifrs9-add-in-brochure.pdf" download>
    Download Add-In Brochure
  </a>
</div>
          </div>

          <div className="ia-hero-visual">
            <ExcelIllustration />
          </div>
        </div>
      </section>
                <div className="container">
                 <NativeExcelExperience />   
                </div>

                <div className="container">
                    <IFRS9Workflow />
                </div>


      {/* Editions */}
      <section className="ia-section" id="editions">
        <div className="ia-container">
          <h2 className="ia-section-title">Product Editions</h2>
          <p className="ia-section-description">
            Four editions, each scoped to how an institution actually
            measures and reports credit risk.
          </p>

          <div className="ia-edition-grid">
            {editions.map((edition, editionIndex) => (
              <div className="ia-edition-card" key={edition.key}>
                <span
                  className="ia-edition-bar"
                  style={{ background: edition.accent }}
                  aria-hidden="true"
                />

                <span
                  className="ia-edition-icon"
                  style={{ color: edition.accent, background: `${edition.accent}1f` }}
                >
                  <EditionIcon editionKey={edition.key} />
                </span>

                <h3 className="ia-edition-name">{edition.name}</h3>
                <div className="ia-edition-best-for">
                  <span className="ia-edition-best-for-label">Best for</span>
                  <span
                    className="ia-edition-best-for-value"
                    style={{ color: edition.accent }}
                  >
                    {edition.bestFor}
                  </span>
                </div>
                <p className="ia-edition-description">{edition.description}</p>

                <ul className="ia-edition-highlights">
                  {HIGHLIGHT_DIMENSIONS.map((dimension) => (
                    <li key={dimension}>
                      <span className="ia-edition-highlight-label">{dimension}</span>
                      <span className="ia-edition-highlight-value">
                        {getFeatureValue(dimension, editionIndex)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a className="ia-edition-cta" href="#comparison">
                  See full comparison <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison matrix */}
      <section className="ia-section ia-section-alt" id="comparison">
        <div className="ia-container">
          <h2 className="ia-section-title">Feature Comparison</h2>
          <p className="ia-section-description">
            A dimension-by-dimension breakdown of what each edition covers.
          </p>

          <div className="ia-table-scroll">
            <table className="ia-table">
              <thead>
                <tr>
                  <th className="ia-table-dimension-head">Dimension</th>
                  {editions.map((edition) => (
                    <th key={edition.key}>
                      <span
                        className="ia-table-dot"
                        style={{ background: edition.accent }}
                        aria-hidden="true"
                      />
                      {edition.name.replace("IFRS 9 ", "")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row) => (
                  <tr key={row.dimension}>
                    <th className="ia-table-dimension-cell">{row.dimension}</th>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={MUTED_VALUES.has(value) ? "ia-muted" : ""}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="ia-section">
        <div className="ia-container ia-benefits-grid">
          <div className="ia-benefits-visual">
            <SecurityIllustration />
          </div>

          <div className="ia-benefits-text">
            <h2 className="ia-section-title">Key Benefits</h2>
            <div className="ia-benefit-list">
              {benefits.map((benefit) => (
                <div className="ia-benefit-row" key={benefit.title}>
                  <h3 className="ia-benefit-title">{benefit.title}</h3>
                  <p className="ia-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ia-section ia-section-alt" id="faq">
        <div className="ia-container ia-faq-container">
          <h2 className="ia-section-title">Frequently Asked Questions</h2>
          <p className="ia-section-description">
            Answers to what teams most often ask before rolling out the IFRS 9 Add-In.
          </p>

          <div className="ia-faq-list">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="ia-section ia-section-alt">
        <div className="ia-container ia-contact">
          <h2 className="ia-section-title">Talk to the Team</h2>
          <p className="ia-section-description">
            Questions about which edition fits your institution? Reach out
            directly.
          </p>

          <div className="ia-contact-actions">
            <a className="ia-btn ia-btn-primary" href="mailto:info@probmatrix.io">
              info@probmatrix.io
            </a>
            <a className="ia-btn ia-btn-outline" href="tel:+923365264744">
              +92 336 5264744
            </a>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .ia-page {
          --ia-bg: #0a1b2e;
          --ia-bg-alt: #0d2036;
          --ia-panel: #0f2540;
          --ia-line: rgba(255, 255, 255, 0.09);
          --ia-accent: #3b9eea;
          --ia-text-body: #9fb4cc;
          --ia-text-heading: #ffffff;

          position: relative;
          background: var(--ia-bg);
          overflow: hidden;
        }

        .ia-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(
            ellipse at center,
            rgba(59, 158, 234, 0.16) 0%,
            rgba(59, 158, 234, 0) 70%
          );
          pointer-events: none;
        }

        .ia-container {
          position: relative;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .ia-hero {
          padding: 110px 0 64px;
        }

        .ia-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 48px;
        }

        .ia-hero-text {
          text-align: left;
        }

        .ia-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ia-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .ia-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ia-accent);
          box-shadow: 0 0 8px var(--ia-accent);
        }

        .ia-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 4.5vw, 3.1rem);
          line-height: 1.15;
          color: var(--ia-text-heading);
          margin: 0 0 18px;
        }

        .ia-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--ia-text-body);
          max-width: 52ch;
          margin: 0 0 36px;
        }

        .ia-hero-actions {
          display: flex;
          justify-content: flex-start;
          gap: 14px;
          flex-wrap: wrap;
        }

        .ia-hero-visual {
          background: var(--ia-panel);
          border: 1px solid var(--ia-line);
          border-radius: 18px;
          padding: 16px;
        }

        .ia-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 999px;
          padding: 12px 24px;
          text-decoration: none;
          transition: opacity 0.2s ease, border-color 0.2s ease;
        }

        .ia-btn-primary {
          background: var(--ia-accent);
          color: #ffffff;
        }

        .ia-btn-primary:hover {
          opacity: 0.9;
        }

        .ia-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .ia-btn-outline:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }

        .ia-section {
          position: relative;
          padding: 72px 0;
        }

        .ia-section-alt {
          background: var(--ia-bg-alt);
        }

        .ia-section-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          color: var(--ia-text-heading);
          margin: 0 0 12px;
        }

        .ia-section-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--ia-text-body);
          max-width: 60ch;
          margin: 0 0 40px;
        }

        .ia-edition-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .ia-edition-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--ia-panel);
          border: 1px solid var(--ia-line);
          border-radius: 16px;
          padding: 26px 22px 22px;
          overflow: hidden;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .ia-edition-card:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 158, 234, 0.35);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
        }

        .ia-edition-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .ia-edition-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 10px;
          margin-bottom: 14px;
        }

        .ia-edition-name {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--ia-text-heading);
          margin: 8px 0 12px;
        }

        .ia-edition-best-for {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--ia-line);
        }

        .ia-edition-best-for-label {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ia-text-body);
        }

        .ia-edition-best-for-value {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .ia-edition-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--ia-text-body);
          margin: 0 0 20px;
        }

        .ia-edition-highlights {
          list-style: none;
          margin: 0 0 20px;
          padding: 14px 0 0;
          border-top: 1px solid var(--ia-line);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ia-edition-highlights li {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-family: "Inter", system-ui, sans-serif;
        }

        .ia-edition-highlight-label {
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--ia-text-body);
        }

        .ia-edition-highlight-value {
          font-size: 0.85rem;
          color: var(--ia-text-heading);
        }

        .ia-edition-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--ia-accent);
          text-decoration: none;
        }

        .ia-edition-cta:hover {
          text-decoration: underline;
        }

        .ia-table-scroll {
          overflow-x: auto;
          border: 1px solid var(--ia-line);
          border-radius: 16px;
        }

        .ia-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 880px;
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.85rem;
        }

        .ia-table thead th {
          text-align: left;
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--ia-text-heading);
          background: var(--ia-panel);
          padding: 16px 18px;
          border-bottom: 1px solid var(--ia-line);
          white-space: nowrap;
        }

        .ia-table-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 8px;
        }

        .ia-table-dimension-head {
          position: sticky;
          left: 0;
          z-index: 2;
        }

        .ia-table tbody tr:nth-child(odd) td,
        .ia-table tbody tr:nth-child(odd) th {
          background: rgba(255, 255, 255, 0.015);
        }

        .ia-table tbody th {
          position: sticky;
          left: 0;
          text-align: left;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--ia-text-heading);
          background: var(--ia-panel);
          padding: 14px 18px;
          border-bottom: 1px solid var(--ia-line);
          white-space: nowrap;
        }

        .ia-table tbody td {
          color: var(--ia-text-body);
          padding: 14px 18px;
          border-bottom: 1px solid var(--ia-line);
          vertical-align: top;
        }

        .ia-muted {
          color: rgba(159, 180, 204, 0.45);
          font-style: italic;
        }

        .ia-benefits-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          align-items: center;
          gap: 48px;
        }

        .ia-benefits-visual {
          display: flex;
          justify-content: center;
        }

        .ia-security-svg {
          width: 100%;
          max-width: 280px;
          height: auto;
        }

        .ia-benefit-list {
          display: flex;
          flex-direction: column;
        }

        .ia-benefit-row {
          padding: 20px 0;
          border-bottom: 1px solid var(--ia-line);
        }

        .ia-benefit-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .ia-benefit-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--ia-text-heading);
          margin: 0 0 10px;
        }

        .ia-benefit-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--ia-text-body);
          margin: 0;
        }

        .ia-faq-container {
          max-width: 860px;
        }

        .ia-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ia-faq-item {
          background: var(--ia-panel);
          border: 1px solid var(--ia-line);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .ia-faq-item-open {
          border-color: rgba(59, 158, 234, 0.4);
        }

        .ia-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          padding: 18px 22px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--ia-text-heading);
        }

        .ia-faq-icon {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(59, 158, 234, 0.12);
          color: var(--ia-accent);
          transition: transform 0.2s ease;
        }

        .ia-faq-item-open .ia-faq-icon {
          transform: rotate(45deg);
        }

        .ia-faq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.25s ease;
        }

        .ia-faq-item-open .ia-faq-answer-wrap {
          grid-template-rows: 1fr;
        }

        .ia-faq-answer {
          overflow: hidden;
          min-height: 0;
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.875rem;
          line-height: 1.7;
          color: var(--ia-text-body);
          margin: 0;
          padding: 0 22px;
        }

        .ia-faq-item-open .ia-faq-answer {
          padding: 0 22px 20px;
        }

        .ia-contact {
          text-align: center;
        }

        .ia-contact .ia-section-description {
          margin-left: auto;
          margin-right: auto;
        }

        .ia-contact-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .ia-hero-grid {
            grid-template-columns: 1fr;
          }

          .ia-hero-text {
            text-align: center;
          }

          .ia-hero-actions {
            justify-content: center;
          }

          .ia-hero-visual {
            order: -1;
            max-width: 420px;
            margin: 0 auto;
          }

          .ia-edition-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ia-benefits-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .ia-benefits-visual {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .ia-hero {
            padding: 88px 0 48px;
          }

          .ia-section {
            padding: 56px 0;
          }

          .ia-edition-grid {
            grid-template-columns: 1fr;
          }
        }
      `,
        }}
      />
    </div>
  );
}