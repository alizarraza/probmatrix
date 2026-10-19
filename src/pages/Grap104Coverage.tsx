import React, { useEffect, useMemo, useState } from "react";
import { useDemoModal } from "../context/DemoModalContext";

/* ------------------------------------------------------------------
   Probmatrix | GRAP 104 Requirements vs Add-In Coverage
   Content: GRAP_104_Requirements_vs_Probmatrix_Add-In_Coverage.docx
   Design:  grap104_coverage_editable.html
   Edit rows in `requirements` below; stats and filter counts update
   automatically.
------------------------------------------------------------------- */

const GRAP104_PATH = "/grap104";
const ASB_URL = "https://www.asb.co.za/grap-104/";
const DEMO_MAILTO = "mailto:info@probmatrix.io?subject=GRAP%20104%20Coverage%20Discussion";
const PARTNER_DEMO_MAILTO = "mailto:info@probmatrix.io?subject=GRAP%20104%20Product%20Coverage%20and%20Demo";

type Status = "supported" | "partial" | "entity-led";

type Requirement = {
  area: string;
  requires: string;
  addin: string;
  status: Status;
};

const STATUS_META: Record<Status, { label: string; icon: string; className: string }> = {
  supported: { label: "Supported", icon: "✓", className: "gc-supported" },
  partial: { label: "Partial", icon: "◐", className: "gc-partial" },
  "entity-led": { label: "Entity-led", icon: "◐", className: "gc-entity-led" },
};

const requirements: Requirement[] = [
  {
    area: "Scope & classification",
    requires: "Identify financial instruments subject to GRAP 104 and determine the relevant measurement / impairment treatment.",
    addin: "Modules for trade receivables, loans, long-term receivables and investments. Classification decisions remain with management.",
    status: "partial",
  },
  {
    area: "ECL methodology / model development",
    requires: "Establish an appropriate methodology for measuring expected credit losses; the standard is principle-based and does not prescribe one model.",
    addin: "Ready-to-use modelling workflow rather than requiring users to construct a separate calculation workbook from scratch.",
    status: "supported",
  },
  {
    area: "Provision matrix",
    requires: "A provision matrix may be used for receivables, applying differentiated loss rates to outstanding balances.",
    addin: "DPD/ageing-based calculation framework and historical loss/default analysis can support a provision-matrix approach.",
    status: "supported",
  },
  {
    area: "Lifetime ECL for receivables",
    requires: "Receivables and lease receivables use lifetime expected credit losses under the simplified approach.",
    addin: "Lifetime ECL workflow for municipal receivable portfolios.",
    status: "supported",
  },
  {
    area: "Historical loss / default experience",
    requires: "Use relevant historical information as a starting point for estimating losses.",
    addin: "DPD history, roll-rate / observed default-rate analysis and portfolio behavior.",
    status: "supported",
  },
  {
    area: "Segmentation",
    requires: "Group exposures with shared credit-risk characteristics where collective assessment is used.",
    addin: "Customer / debtor-category and risk-based segmentation, including examples such as Business, Residential and Agriculture.",
    status: "supported",
  },
  {
    area: "Default definition",
    requires: "Apply an entity-appropriate default definition consistent with credit-risk management, subject to GRAP guidance/backstops.",
    addin: "Configurable DPD/default parameters and default identification rules.",
    status: "supported",
  },
  {
    area: "Current conditions",
    requires: "Update historical estimates for conditions existing at the reporting date.",
    addin: "Updated reporting-date portfolio behavior and model inputs can be incorporated in each run.",
    status: "supported",
  },
  {
    area: "Forward-looking information",
    requires: "Reflect reasonable and supportable forecasts of future economic conditions.",
    addin: "Macroeconomic variable analysis, model selection and forward-looking adjustments.",
    status: "supported",
  },
  {
    area: "Probability-weighted outcomes",
    requires: "Reflect an unbiased probability-weighted amount across possible outcomes where relevant.",
    addin: "Multiple macroeconomic scenarios, scenario weights and probability-weighted ECL calculation.",
    status: "supported",
  },
  {
    area: "Cash shortfalls / recovery severity",
    requires: "Measure expected credit loss using expected cash shortfalls and recoveries.",
    addin: "LGD framework covering recoveries, cure behavior and recovery horizon.",
    status: "supported",
  },
  {
    area: "Exposure amount",
    requires: "Measure the amount exposed to credit loss for relevant instruments.",
    addin: "EAD functionality for applicable exposure structures.",
    status: "supported",
  },
  {
    area: "Time value of money",
    requires: "Expected credit losses are measured on a present-value basis where applicable.",
    addin: "Should be explicitly demonstrated and documented in the GRAP 104 workflow, particularly for loans and long-term receivables.",
    status: "supported",
  },
  {
    area: "Collateral / credit enhancements",
    requires: "Reflect eligible cash flows from collateral or credit enhancements in accordance with GRAP 104, including public-sector considerations.",
    addin: "Recovery/LGD framework can incorporate collateral-related recoveries; management-intention treatment should be made explicit.",
    status: "supported",
  },
  {
    area: "SICR for general approach assets",
    requires: "For relevant loans/investments, assess whether credit risk has increased significantly to determine 12-month vs lifetime ECL.",
    addin: "SICR/staging and DPD-based assessment can support relevant instruments; not required for simplified-approach receivables.",
    status: "supported",
  },
  {
    area: "Model calibration",
    requires: "Rates and assumptions should remain aligned with observed experience and current information.",
    addin: "PD calibration and observed-vs-estimated performance assessment.",
    status: "supported",
  },
  {
    area: "Model validation",
    requires: "Methodologies, assumptions and outcomes should be reviewed and assessed for continued appropriateness.",
    addin: "Statistical tests, calibration checks and model-performance validation tools.",
    status: "supported",
  },
  {
    area: "Management overlays / adjustments",
    requires: "Incorporate relevant factors not adequately captured by the core model, supported by judgement and evidence.",
    addin: "Parameter settings / adjustments and management-overlay capability.",
    status: "supported",
  },
  {
    area: "Recalculation at reporting date",
    requires: "Refresh the estimate using current data and assumptions at each reporting date.",
    addin: "Repeatable Add-In workflow using updated source data and assumptions.",
    status: "supported",
  },
  {
    area: "Model documentation",
    requires: "Document methodology, data, assumptions, judgement, changes and governance sufficiently for review/audit.",
    addin: "Calculation outputs exist; a dedicated GRAP 104 methodology / model-documentation report would strengthen coverage.",
    status: "supported",
  },
  {
    area: "Audit trail / reproducibility",
    requires: "Be able to explain and reproduce how the ECL allowance was determined.",
    addin: "Structured workflow improves repeatability; run-level audit logging, versioning and assumption snapshots can be strengthened.",
    status: "supported",
  },
  {
    area: "Financial statement disclosures",
    requires: "Provide the disclosures required by GRAP 104 about financial instruments, credit risk and impairment.",
    addin: "The Add-In can support disclosure data, but full financial-statement disclosure preparation remains an entity responsibility.",
    status: "entity-led",
  },
];

type Filter = "all" | Status;

type Grap104CoverageProps = {
  /** Your site layout already has the navbar, so this is off by default. */
  showHeader?: boolean;
  /** Your site layout already has the footer, so this is off by default. */
  showFooter?: boolean;
};

export default function Grap104Coverage({ showHeader = false, showFooter = false }: Grap104CoverageProps) {
     const { open: openDemoModal } = useDemoModal();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const counts = useMemo(() => {
    const c = { all: requirements.length, supported: 0, partial: 0, "entity-led": 0 } as Record<Filter, number>;
    requirements.forEach((r) => (c[r.status] += 1));
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter((r) => {
      if (filter !== "all" && r.status !== filter) return false;
      if (!q) return true;
      return `${r.area} ${r.requires} ${r.addin} ${STATUS_META[r.status].label}`.toLowerCase().includes(q);
    });
  }, [query, filter]);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "supported", label: "Supported" },
    { key: "partial", label: "Partial" },
    { key: "entity-led", label: "Entity-led" },
  ];

  const stats = [
    { value: counts.all, label: "Implementation areas" },
    { value: counts.supported, label: "Marked supported" },
    { value: counts.partial, label: "Marked partial" },
    { value: counts["entity-led"], label: "Entity-led" },
  ];

  return (
    <div className="gc">
      <style>{styles}</style>

      {showHeader && (
        <header className="gc-top">
          <div className="gc-wrap gc-nav">
            <a className="gc-logo" href="https://probmatrix.io/">
              prob<span>matrix</span>
            </a>
            <nav className="gc-navlinks" aria-label="Coverage page navigation">
              <a href={GRAP104_PATH}>← Main GRAP 104 Page</a>
              <a href="#comparison">Coverage Matrix</a>
              <a className="gc-btn" href={DEMO_MAILTO}>
                Request a Demo ↗
              </a>
            </nav>
          </div>
        </header>
      )}

      <main>
        <section className="gc-hero">
          <div className="gc-wrap">
            <div className="gc-eyebrow">GRAP 104 · REGULATORY REQUIREMENTS · PRODUCT COVERAGE</div>
            <h1>GRAP 104 Requirements vs Probmatrix Add-In Coverage</h1>
            <p>
              Explore how the Probmatrix GRAP 104 Excel Add-In supports Expected Credit Loss estimation, modelling,
              validation and recurring implementation workflows for Municipalities and Public Sector Entities, delivered
              through implementation partners.
            </p>
            <div className="gc-actions">
              <a className="gc-ghost" href={GRAP104_PATH}>
                ← Back to Product Overview
              </a>
              <a className="gc-btn" href="#comparison">
                Explore the Comparison ↓
              </a>
            </div>
          </div>
        </section>

        <section className="gc-section" id="comparison">
          <div className="gc-wrap">
            <div className="gc-eyebrow gc-eyebrow-teal">CAPABILITY MAPPING</div>
            <h2 className="gc-h2">A transparent view of functionality and responsibilities</h2>
            <p className="gc-intro">
              GRAP 104 specifies the measurement and reporting principles, not a mandatory software platform. This
              comparison maps those requirements against our product capabilities. The municipality or public sector entity
              and its professional advisers retain responsibility for accounting judgements and disclosures.
            </p>

            <div className="gc-stats">
              {stats.map((s) => (
                <div className="gc-stat" key={s.label}>
                  <b>{s.value}</b>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>

            <div className="gc-controls">
              <input
                className="gc-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search requirements or capabilities..."
                aria-label="Search comparison table"
              />
              <div className="gc-filters" role="group" aria-label="Filter by coverage">
                {filters.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    className={`gc-filter${filter === f.key ? " gc-active" : ""}`}
                    aria-pressed={filter === f.key}
                    onClick={() => setFilter(f.key)}
                  >
                    {f.label} ({counts[f.key]})
                  </button>
                ))}
              </div>
            </div>

            <div className="gc-table-scroll">
              <table className="gc-table">
                <thead>
                  <tr>
                    <th scope="col">Requirement / implementation area</th>
                    <th scope="col">What GRAP 104 requires in practice</th>
                    <th scope="col">Probmatrix GRAP 104 Add-In</th>
                    <th scope="col">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((r) => {
                    const meta = STATUS_META[r.status];
                    return (
                      <tr key={r.area}>
                        <td>{r.area}</td>
                        <td>{r.requires}</td>
                        <td>{r.addin}</td>
                        <td>
                          <span className={`gc-status ${meta.className}`}>
                            {meta.icon} {meta.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {visible.length === 0 && (
                <div className="gc-no-results" role="status">
                  No requirements match "{query}". Try a different term or select All.
                </div>
              )}
            </div>

            <div className="gc-note">
              <h2>How to interpret this comparison</h2>
              <p>
                <strong>Supported:</strong> functionality is listed as available in the supplied product coverage
                assessment. The scope of a deployment still depends on its configuration and data.
              </p>
              <p>
                <strong>Partial:</strong> classification decisions are entity-led, with supporting product modules.
              </p>
              <p>
                <strong>Entity-led:</strong> the Add-In supports inputs and schedules, but the entity prepares and approves
                its statutory disclosures.
              </p>
              <p>
                <strong>Important qualification:</strong> although the matrix marks time value of money, collateral
                treatment, model documentation and audit trail/reproducibility as "Supported," the accompanying descriptions
                call for clearer documentation or enhanced controls. A partner should confirm these features and outputs for
                the specific deployment. This is a product coverage mapping, not an audit opinion, regulatory endorsement or
                statement of universal compliance.
              </p>
            </div>

            <p className="gc-small">
              Source: "GRAP 104 Requirements vs Probmatrix Add-In Coverage" supplied by Probmatrix. Terminology and coverage
              statuses reproduced from the provided comparison.
            </p>
          </div>
        </section>

        <section className="gc-bottom-cta">
          <div className="gc-wrap">
            <h2>Discuss the right GRAP 104 implementation approach</h2>
            <p>
              Implementation partners receive the Add-In, training, documentation and specialised backend support from
              Probmatrix. Partners manage municipal delivery, training and first-line support.
            </p>
            <a className="gc-btn" onClick={() => openDemoModal()} >
              Request a Partner Demo →
            </a>
          </div>
        </section>
      </main>

      {showFooter && (
        <footer className="gc-footer">
          <div className="gc-wrap gc-footrow">
            <span>© {year} Probmatrix Analytics</span>
            <span>
              GRAP 104 ECL for Municipalities and Public Sector Entities ·{" "}
              <a href={ASB_URL} target="_blank" rel="noopener noreferrer">
                ASB Guidance ↗
              </a>
            </span>
          </div>
        </footer>
      )}
    </div>
  );
}

/* Scoped under .gc so nothing leaks into the rest of the site. */
const styles = `
.gc{--bg:#0b2846;--band:#0d3c58;--card:rgba(17,76,110,.42);--border:rgba(110,165,205,.16);--border-hi:rgba(110,165,205,.32);
  --accent:#1b6aa5;--accent-txt:#3d8cc4;--white:#fff;--text:#b5c4d3;--muted:#8da3b8;--btn:linear-gradient(135deg,#04457d,#0b5c97);
  font:16px/1.65 Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:var(--text);background:var(--bg)}
.gc *,.gc *::before,.gc *::after{box-sizing:border-box}
.gc a{color:inherit;text-decoration:none}
.gc h1,.gc h2,.gc b,.gc strong{color:var(--white)}
.gc h1,.gc h2{font-family:"Space Grotesk",Inter,system-ui,sans-serif}
.gc a:focus-visible,.gc button:focus-visible,.gc input:focus-visible{outline:2px solid var(--accent-txt);outline-offset:3px}
.gc-wrap{max-width:1170px;padding:0 26px;margin:auto}

.gc-top{background:rgba(11,40,70,.92);backdrop-filter:blur(12px);position:sticky;top:0;z-index:9;border-bottom:1px solid var(--border)}
.gc-nav{height:75px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.gc-logo{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;font-size:22px;color:var(--white)}
.gc-logo span{color:var(--accent-txt)}
.gc-navlinks{display:flex;gap:20px;align-items:center;font-size:14px;font-weight:500;white-space:nowrap}
.gc-navlinks a:hover{color:var(--white)}

.gc .gc-btn{background:var(--btn);color:#fff;border-radius:999px;padding:12px 24px;display:inline-block;font-weight:600;
  box-shadow:0 0 22px rgba(11,92,151,.45);transition:filter .2s,box-shadow .2s}
.gc .gc-btn:hover{filter:brightness(1.12);box-shadow:0 0 30px rgba(27,106,165,.6)}

.gc-hero{background:radial-gradient(ellipse at 50% 0%,#1a4a70 0,transparent 60%),var(--bg);padding:84px 0 76px;border-bottom:1px solid var(--border);text-align:center}
.gc-hero .gc-eyebrow{display:inline-block;padding:7px 16px;border:1px solid var(--border-hi);border-radius:999px;background:rgba(255,255,255,.05);color:var(--text);letter-spacing:1px}
.gc-eyebrow{text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:2px;color:var(--accent-txt)}
.gc-eyebrow-teal{display:inline-flex;align-items:center;gap:10px}
.gc-eyebrow-teal::before{content:"";width:22px;height:1px;background:currentColor;opacity:.7}
.gc-hero h1{font-size:clamp(32px,4.2vw,52px);line-height:1.12;letter-spacing:-1px;max-width:900px;margin:18px auto 18px;font-weight:700}
.gc-hero p{max-width:780px;font-size:17px;margin:0 auto}
.gc-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px;justify-content:center}
.gc-ghost{border:1px solid var(--border-hi);padding:11px 22px;border-radius:999px;color:#fff;font-weight:600}
.gc-ghost:hover{background:rgba(255,255,255,.06)}

.gc-section{padding:64px 0 90px}
.gc-h2{font-size:clamp(26px,3vw,36px);margin:10px 0;line-height:1.2;font-weight:700}
.gc-intro{max-width:880px}
.gc-stats{display:grid;grid-template-columns:repeat(4,minmax(0,180px));gap:14px;margin:28px 0}
.gc-stat{border:1px solid var(--border);border-radius:12px;padding:18px 20px;background:var(--card);text-align:center}
.gc-stat b{font-family:"Space Grotesk",Inter,sans-serif;font-size:30px;line-height:1.1;display:block;color:var(--accent-txt)}
.gc-stat small{color:var(--text);font-size:13px}

.gc-controls{display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin:30px 0 16px}
.gc-search{flex:1;min-width:260px;padding:12px 18px;border:1px solid var(--border-hi);border-radius:999px;font:inherit;color:var(--white);background:rgba(255,255,255,.04)}
.gc-search::placeholder{color:var(--muted)}
.gc-filters{display:flex;flex-wrap:wrap;gap:8px}
.gc-filter{background:rgba(255,255,255,.04);border:1px solid var(--border-hi);border-radius:999px;padding:9px 16px;cursor:pointer;font:inherit;font-size:14px;font-weight:500;color:var(--text)}
.gc-filter:hover{color:var(--white)}
.gc-filter.gc-active{background:var(--btn);border-color:transparent;color:#fff}

.gc-table-scroll{overflow-x:auto;border:1px solid var(--border);border-radius:12px;background:var(--card)}
.gc-table{border-collapse:collapse;width:100%;min-width:870px;font-size:14px;line-height:1.55}
.gc-table th{background:var(--band);color:var(--white);text-align:left;padding:16px;font-size:13px;font-weight:600;vertical-align:top;border-bottom:1px solid var(--border-hi)}
.gc-table td{padding:16px;border-top:1px solid var(--border);vertical-align:top}
.gc-table tbody tr:nth-child(even){background:rgba(255,255,255,.02)}
.gc-table tbody tr:hover{background:rgba(61,140,196,.06)}
.gc-table td:first-child{width:20%;font-weight:600;color:var(--white)}
.gc-table td:nth-child(2){width:30%}
.gc-table td:nth-child(3){width:37%}
.gc-table td:last-child{width:13%;text-align:center}
.gc-status{padding:5px 11px;border-radius:999px;font-weight:600;font-size:12px;display:inline-block;white-space:nowrap;border:1px solid}
.gc-supported{background:rgba(52,168,108,.12);color:#7fd6a5;border-color:rgba(52,168,108,.35)}
.gc-partial{background:rgba(224,170,60,.12);color:#f0c674;border-color:rgba(224,170,60,.35)}
.gc-entity-led{background:rgba(61,140,196,.14);color:#8cc2ea;border-color:rgba(61,140,196,.4)}
.gc-no-results{padding:24px;text-align:center;color:var(--muted)}

.gc-note{background:var(--card);border:1px solid var(--border);border-left:3px solid var(--accent);padding:22px 26px;border-radius:10px;margin-top:28px}
.gc-note h2{margin:0 0 8px;font-size:19px}
.gc-note p{margin:6px 0;font-size:15px}
.gc-small{font-size:13px;color:var(--muted);margin-top:18px}

.gc-bottom-cta{padding:0 0 80px}
.gc-bottom-cta .gc-wrap{max-width:1118px;background:var(--band);border:1px solid var(--border);border-radius:18px;padding:44px 48px}
.gc-bottom-cta h2{margin:0;font-size:27px;line-height:1.25}
.gc-bottom-cta p{max-width:820px}

.gc-footer{padding:26px 0;font-size:13px;color:var(--muted);background:var(--band);border-top:1px solid var(--border)}
.gc-footrow{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.gc-footer a{text-decoration:underline}

@media (prefers-reduced-motion:no-preference){html:has(.gc){scroll-behavior:smooth}}
@media (max-width:800px){
  .gc-nav{height:auto;padding:16px 0;flex-wrap:wrap}
  .gc-navlinks{gap:13px;flex-wrap:wrap}
  .gc-hero{padding:58px 0}
  .gc-section{padding:45px 0}
  .gc-stats{grid-template-columns:repeat(2,1fr)}
  .gc-table{min-width:820px}
  .gc-bottom-cta .gc-wrap{margin:0 20px;padding:32px 24px}
}
`;
