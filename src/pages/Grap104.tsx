import React, { useEffect, useState } from "react";
import { useDemoModal } from "../context/DemoModalContext";
/* ------------------------------------------------------------------
   Probmatrix | GRAP 104 ECL landing page
   Content: Probmatrix_GRAP104_Editable_Website_Copy.docx
   Design:  grap104_editable.html
   All copy lives in the data blocks below so it can be edited
   without touching the markup.
------------------------------------------------------------------- */

const COVERAGE_PATH = "/grap-104/coverage";
const ASB_URL = "https://www.asb.co.za/grap-104/";
const CONTACT_EMAIL = "info@probmatrix.io";
const DEMO_MAILTO =
  "mailto:info@probmatrix.io?subject=GRAP%20104%20Add-In%20Demo%20Request&body=Organisation%3A%0ARole%3A%0AInterested%20in%3A%20Expert%20%2F%20Automated%0AFinancial%20system%20(if%20Automated)%3A%0AMessage%3A";

const EXPERT_RIBBON_IMG = "/images/grap104/expert-ribbon.jpg";
const AUTOMATED_RIBBON_IMG = "/images/grap104/automated-ribbon.jpg";

/* ---------------------------- Content ---------------------------- */

const credItems = [
  { title: "South African rollout experience", text: "Municipal implementation engagements through local firms." },
  { title: "Audit-review experience", text: "Audited implementation experience; scope available for discussion." },
  { title: "Partner-led delivery", text: "Both editions are supplied through implementation partners." },
];

const challenges = [
  {
    title: "Complex debtor data",
    text: "Multiple account categories, ageing histories, repayments and recoveries can make inputs difficult to prepare consistently.",
  },
  {
    title: "Inconsistent calculations",
    text: "Disconnected spreadsheets and manual adjustments make recurring ECL exercises harder to reproduce and review.",
  },
  {
    title: "Audit and reporting pressure",
    text: "Finance teams need to explain assumptions, changing risk estimates and the basis of reported impairment allowances.",
  },
];

const editions = [
  {
    tag: "For implementation partners",
    title: "GRAP 104 Expert Edition",
    strap: "Calculate and deliver ECL for multiple client engagements.",
    body: (
      <>
        Built for accounting firms, municipal finance consultants and GRAP 104 specialists who prepare impairment
        models and reporting support for Municipalities and Public Sector Entities.
      </>
    ),
    bullets: [
      "Client-specific ECL modelling and calculation",
      "PD, LGD, EAD and relevant forward-looking scenarios",
      "Reusable methodology for different client portfolios",
      "Supporting results for engagement deliverables",
    ],
    fine: "Partner licensing and permitted client usage are agreed commercially.",
    cta: "Discuss Expert Edition →",
    featured: false,
  },
  {
    tag: "For partner-client deployment",
    title: "GRAP 104 Automated Edition",
    strap: "Give your municipal clients a connected, in-house ECL workflow.",
    body: (
      <>
        Deployed to Municipalities and Public Sector Entities <strong>through Probmatrix implementation partners</strong>.
        Built for recurring financial reporting and configured integration with an entity's approved systems and
        servers.
      </>
    ),
    bullets: [
      "Approved server and source-data connections",
      "Configured extraction, mapping and input checks",
      "Repeatable ECL execution and scenario calculations",
      "Review of assumptions and results by finance teams",
      "Structured outputs for reporting and audit review",
      "Partner-led deployment, UAT, training and support",
    ],
    fine: "Connectivity and automation scope depend on the entity's financial systems, infrastructure and implementation agreement.",
    cta: "Discuss Automated Edition →",
    featured: true,
  },
];

const ribbons = [
  {
    tag: "For implementation partners",
    title: "GRAP 104 Expert Edition",
    strap: "Build, test and calculate ECL for your municipal clients.",
    img: "/two22.jpeg",
    alt: "Probmatrix GRAP 104 Expert Edition Excel ribbon interface",
    text: "This ribbon provides access to RollRate, Model Selection, Model Validation, Normalization, Weightages, PiTPD and Expected Credit Loss.",
    fine: "Modelling and analytical controls for partner-led ECL engagements.",
  },
  {
    tag: "For partner-led client deployment",
    title: "GRAP 104 Automated Edition",
    strap: "Configure repeatable ECL operations within the client environment.",
    img: "/one11.jpeg",
    alt: "Probmatrix GRAP 104 Automated Edition Excel ribbon interface",
    text: "This ribbon includes PD, Get MEV Data, MEV Selection, Forward Looking PD, Expected Credit Loss, Parameter Settings, Server Setup, Save Logs and View Logs.",
    fine: "Workflow controls for server configuration, parameter settings and operational logs.",
  },
];

const flowSteps = [
  { title: "Source systems", text: "Access authorised debtor ledgers, balances, ageing, collections and recoveries." },
  { title: "Data integration", text: "Map, extract, structure and validate approved information." },
  { title: "ECL engine", text: "Apply suitable PD/LGD/EAD or loss-rate approaches and scenarios." },
  { title: "Review controls", text: "Review assumptions, exceptions, scenario weights and results." },
  { title: "Reporting", text: "Prepare structured impairment and supporting outputs." },
];

const portfolios = [
  {
    title: "Contractual & lease receivables",
    text: "Lifetime ECL using the simplified approach. Segment debtor balances, analyse ageing and payment history, estimate historical loss behaviour and incorporate current and forward-looking information. Provision-matrix or roll-rate-based approaches may be suitable.",
  },
  {
    title: "Loans & long-term receivables",
    text: "General ECL approach where applicable, including assessment of significant increases in credit risk (SICR), 12-month or lifetime ECL, recovery assumptions and appropriate consideration of the time value of money.",
  },
  {
    title: "Investments, deposits & bank balances",
    text: "Assess relevant counterparty credit risk using available internal information, appropriately sourced external ratings or benchmarks, exposure characteristics and suitable recoveries. The applicable approach depends on classification and instrument terms.",
  },
];

const capabilities = [
  {
    title: "Probability of Default (PD)",
    text: "Historical default behaviour using relevant roll-rate, observed-default, Markov and survival approaches where suitable.",
  },
  {
    title: "Loss Given Default (LGD)",
    text: "Recovery histories, cure behaviour and recovery horizons to estimate potential loss after default.",
  },
  {
    title: "Exposure at Default (EAD)",
    text: "Exposure estimates based on financial instrument characteristics, including outstanding gross balances for typical receivables.",
  },
  {
    title: "Forward-looking analysis",
    text: "Macroeconomic factors, scenarios, scenario weights and probability-weighted impairment estimates.",
  },
  {
    title: "Calculation transparency",
    text: "Support for reviewing portfolio segmentation, inputs, modelling assumptions and outputs.",
  },
];

const governance = [
  {
    title: "Segmentation & default settings",
    text: "Apply portfolio risk groupings, ageing buckets and documented default parameters. GRAP 104 includes a rebuttable 90-days-past-due default presumption.",
  },
  {
    title: "Validation & calibration",
    text: "Use statistical tests and comparisons of estimated versus realised performance where data and the selected methodology permit.",
  },
  {
    title: "Management adjustments",
    text: "Apply supportable parameter adjustments and overlays for material risks not adequately reflected in core model outputs, subject to review.",
  },
  {
    title: "Repeatable reporting-date runs",
    text: "Rerun the Add-In with updated period-end data and appropriately refreshed assumptions, reducing dependence on manually linked workbook formulas.",
  },
  {
    title: "Documentation support",
    text: "Use calculation outputs and validation information as inputs to methodology papers and audit enquiries. A comprehensive GRAP-specific documentation report is not claimed as fully automated.",
  },
  {
    title: "Accounting responsibility",
    text: "The entity and its advisers remain responsible for classification, model selection, discounting treatment where applicable, final disclosures and sign-off.",
  },
];

const standardBullets = [
  "Appropriate lifetime ECL methods for receivables",
  "Risk segmentation and historical loss information",
  "Current and forecast economic adjustments",
  "Scenario-specific and probability-weighted estimates",
  "Supporting calculations for finance and audit review",
];

const partnerRoles = [
  {
    mark: "P",
    title: "Implementation Partners",
    strap: "Own the entire client delivery process.",
    bullets: [
      "Manage client relationships, project scoping and implementation.",
      "Assess financial instruments and select appropriate ECL methodologies.",
      "Collect, prepare and validate client data.",
      "Configure risk parameters, economic scenarios and ECL calculations.",
      "Review model outputs and prepare supporting reports.",
      "Deploy the Expert or Automated Edition according to client requirements.",
      "Conduct client training and provide first-line support.",
    ],
  },
  {
    mark: "T",
    title: "Probmatrix",
    strap: "We provide the technology and empower our partners.",
    bullets: [
      "Provide licensed access to the GRAP 104 Expert and Automated Editions.",
      "Deliver technical training to implementation partners.",
      "Provide product documentation, user guides and implementation guidance.",
      "Maintain and enhance the Add-In's calculation engine and functionality.",
      "Provide backend technical assistance and troubleshooting to partners.",
      "Support partners with specialized product-related issues when required.",
    ],
  },
  {
    mark: "M",
    title: "Municipalities and Public Sector Entities",
    strap: "Retain ownership of their financial reporting process.",
    bullets: [
      "Provide relevant financial records and authorized system access.",
      "Review and approve significant assumptions and ECL results.",
      "Maintain responsibility for accounting policies, financial reporting and governance decisions.",
    ],
  },
];

const faqs = [
  {
    q: "Can a municipality or public sector entity obtain the Automated Edition directly?",
    a: "The Automated Edition is supplied and implemented through Probmatrix's authorised implementation partners. Probmatrix can introduce enquiries to the appropriate partner-led process.",
  },
  {
    q: "Who uses the Expert Edition?",
    a: "Implementation firms and professional advisers use the Expert Edition to perform ECL calculations for their municipal and public-sector engagements, subject to licensing terms.",
  },
  {
    q: "Can the Automated Edition connect to our financial system?",
    a: "It supports configured connections to approved servers and data sources. The exact approach depends on available interfaces, system architecture, data permissions and security requirements; compatibility is confirmed during assessment.",
  },
  {
    q: "Can a municipality or public sector entity's finance team run recurring ECL calculations internally?",
    a: "Yes. The Automated Edition is designed for in-house execution of configured workflows, with continued review and approval of assumptions and results by the organisation's responsible personnel.",
  },
  {
    q: "Does GRAP 104 require a PD/LGD/EAD model?",
    a: "No. The relevant standard determines the ECL measurement requirement, not a single mandatory calculation architecture. Depending on portfolio characteristics, a loss rate or another supportable methodology may be appropriate.",
  },
  {
    q: "Has the solution been audited?",
    a: "Probmatrix has audit-review experience involving the solution and municipal ECL work. The precise scope, outcome and any shareable evidence can be discussed during commercial evaluation; this does not amount to blanket regulatory certification or automatic audit acceptance.",
  },
  {
    q: "Do all assets use lifetime ECL?",
    a: "No. Receivables and lease receivables under the simplified approach use lifetime ECL. Relevant loans and investments under the general approach may require 12-month or lifetime ECL, depending on significant changes in credit risk.",
  },
  {
    q: "Does the Add-In generate a complete GRAP 104 financial-statement disclosure pack and audit trail?",
    a: "The Add-In provides calculation and validation outputs that support review. Full financial-statement disclosures are entity-led, and comprehensive run-level logging, methodology documentation and disclosure schedules may require additional configuration or development.",
  },
  {
    q: "How does the partner-led implementation work?",
    a: "Probmatrix supplies ECL calculation technology to its implementation partners. Partners manage their engagements, requirements assessment, rollout, training and agreed first-line support; municipalities and public-sector clients retain responsibility for data and accounting decisions.",
  },
];

const navLinks = [
  { href: "#editions", label: "Editions" },
  { href: "#product-preview", label: "Product Preview" },
  { href: "#automation", label: "Automation" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#partners", label: "Partners" },
];

/* ---------------------------- Component ---------------------------- */

type Grap104Props = {
  /** Your site layout already has the navbar, so this is off by default. */
  showHeader?: boolean;
  /** Your site layout already has the footer, so this is off by default. */
  showFooter?: boolean;
};

export default function Grap104({ showHeader = false, showFooter = false }: Grap104Props) {
    const { open: openDemoModal } = useDemoModal();
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <div className="g104">
      <style>{styles}</style>

      {showHeader && (
        <header className="g104-top">
          <div className="g104-wrap g104-nav">
            <a className="g104-logo" href="https://probmatrix.io/">
              prob<span>matrix</span>
            </a>
            <nav aria-label="GRAP 104 page navigation" className="g104-navlinks">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <a href={COVERAGE_PATH}>GRAP 104 Coverage ↗</a>
              <a className="g104-btn" onClick={() => openDemoModal()}>
                Request a Demo ↗
              </a>
            </nav>
          </div>
        </header>
      )}

      <main>
        {/* Hero */}
        <section className="g104-hero">
          <div className="g104-wrap g104-hero-grid">
            <div>
              <div className="g104-eyebrow">GRAP 104 · SOUTH AFRICA · EXCEL ADD-IN</div>
              <h1>
                GRAP 104 ECL.
                <br />
                <em>From calculation to automation.</em>
              </h1>
              <p>
                Purpose-built Expected Credit Loss technology for <strong>Municipalities and Public Sector Entities</strong>,
                delivered through experienced implementation partners in South Africa.
              </p>
              <p>
                Equip your advisory team with the <strong>Expert Edition</strong>, or deploy a connected, recurring ECL
                workflow at your client organisation with the <strong>Automated Edition</strong>.
              </p>
              <div className="g104-actions">
                <a className="g104-btn" onClick={() => openDemoModal()}>
                  Request a Product Demo →
                </a>
                <a className="g104-btn g104-outline" href="#editions">
                  Explore the Two Editions
                </a>
              </div>
              <p className="g104-subnote">
                Already being implemented for South African municipal engagements through local partner firms.
              </p>
            </div>

            <div aria-label="Illustrative ECL software interface" className="g104-product-visual">
              <div className="g104-window">
                <div className="g104-wtop">
                  <span>PROBMATRIX / GRAP 104</span>
                  <span className="g104-dots" aria-hidden="true">
                    ● ● ●
                  </span>
                </div>
                <div className="g104-wbody">
                  <div className="g104-wlabel">Illustrative product workflow</div>
                  <div className="g104-wtitle">Expected Credit Loss Analysis</div>
                  <div className="g104-metrics">
                    {[
                      ["Risk factor", "PD"],
                      ["Recovery factor", "LGD"],
                      ["Exposure", "EAD"],
                    ].map(([label, value]) => (
                      <div className="g104-metric" key={value}>
                        <small>{label}</small>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="g104-bars" aria-hidden="true">
                    {[30, 55, 43, 76, 61, 89, 70].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="g104-bottom-ribbon">Historical data → Scenarios → Probability-weighted ECL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility strip */}
        <section className="g104-cred">
          <div className="g104-wrap g104-credgrid">
            {credItems.map((c) => (
              <div className="g104-creditem" key={c.title}>
                <b>{c.title}</b>
                {c.text}
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="g104-section" id="challenges">
          <div className="g104-wrap g104-center">
            <div className="g104-eyebrow">THE CHALLENGE</div>
            <h2>Reliable ECL requires more than a spreadsheet result.</h2>
            <p className="g104-lead">
              Municipalities and Public Sector Entities need defensible, repeatable estimates supported by historical
              collection data, current conditions, forward-looking information and clear calculation evidence.
            </p>
            <div className="g104-cards g104-left">
              {challenges.map((c, i) => (
                <div className="g104-card" key={c.title}>
                  <span className="g104-numb">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editions */}
        <section className="g104-section g104-soft" id="editions">
          <div className="g104-wrap">
            <div className="g104-eyebrow g104-center">TWO EDITIONS · ONE PARTNER ECOSYSTEM</div>
            <h2 className="g104-center">The right ECL solution for how you deliver.</h2>
            <p className="g104-lead g104-center">
              Both versions are made available through Probmatrix's implementation partner network. Partners choose the
              Expert Edition for engagements or implement the Automated Edition at client entities.
            </p>
            <div className="g104-editions">
              {editions.map((e) => (
                <article className={`g104-edition${e.featured ? " g104-featured" : ""}`} key={e.title}>
                  <span className="g104-tag">{e.tag}</span>
                  <h3>{e.title}</h3>
                  <p>
                    <strong>{e.strap}</strong>
                  </p>
                  <p>{e.body}</p>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className="g104-fine">{e.fine}</p>
                  <a className="g104-btn" href="#demo">
                    {e.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product preview (ribbon screenshots) */}
        <section className="g104-section g104-ribbon-showcase" id="product-preview">
          <div className="g104-wrap">
            <div className="g104-eyebrow g104-center">SEE THE ACTUAL ADD-IN</div>
            <h2 className="g104-center">Two editions. Familiar Excel interface. Distinct ways to deliver ECL.</h2>
            <p className="g104-lead g104-center">
              Explore the real GRAP 104 ribbon interfaces. Expert gives implementation partners the modelling tools for
              client assignments; Automated adds operational controls for workflows deployed at Municipalities and Public
              Sector Entities through those same partners.
            </p>
            <div className="g104-ribbon-grid">
              {ribbons.map((r) => (
                <article className="g104-ribbon-card" key={r.title}>
                  <span className="g104-tag">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p>
                    <strong>{r.strap}</strong>
                  </p>
                  <div className="g104-ribbon-screen">
                    <a href={r.img} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${r.title} ribbon`}>
                      <img src={r.img} alt={r.alt} loading="lazy" />
                    </a>
                  </div>
                  <p>{r.text}</p>
                  <p className="g104-fine">{r.fine}</p>
                </article>
              ))}
            </div>
            <p className="g104-ribbon-note">
              Actual Microsoft Excel ribbon screenshots supplied by Probmatrix. The selected feature set and configuration
              may vary by edition and implementation scope. Ribbon controls illustrate available interfaces, not a
              guarantee that all underlying processes run without user review.
            </p>
          </div>
        </section>

        {/* Automation flow */}
        <section className="g104-section g104-dark" id="automation">
          <div className="g104-wrap">
            <div className="g104-eyebrow">AUTOMATED EDITION IN DETAIL</div>
            <h2>From municipal servers to structured ECL outputs.</h2>
            <p className="g104-lead g104-flush">
              The Automated Edition connects the organisation's source-data environment to a configurable calculation
              workflow, reducing repeated manual preparation and keeping reviews in the hands of the municipality or public
              sector entity.
            </p>
            <ol className="g104-flow">
              {flowSteps.map((s, i) => (
                <li className="g104-step" key={s.title}>
                  <span>STEP {String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="g104-fine g104-mt">
              Deployment is configured to suit each entity's infrastructure and access policies. The illustrated workflow
              describes available implementation capabilities; specific interfaces, scheduling and controls are confirmed
              during scoping.
            </p>
          </div>
        </section>

        {/* Portfolios */}
        <section className="g104-section g104-soft" id="portfolios">
          <div className="g104-wrap">
            <div className="g104-eyebrow g104-center">PORTFOLIO COVERAGE</div>
            <h2 className="g104-center">Designed for different financial assets, not one-size-fits-all impairment.</h2>
            <p className="g104-lead g104-center">
              Municipalities and Public Sector Entities manage different types of financial assets. The modelling approach
              depends on instrument classification, credit-risk characteristics and the available information.
            </p>
            <div className="g104-cards">
              {portfolios.map((p, i) => (
                <article className="g104-card" key={p.title}>
                  <span className="g104-numb">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
            <p className="g104-fine g104-mt">
              Important scope distinction: contractual receivables may fall under GRAP 104, while statutory receivables are
              dealt with under GRAP 108. Classification decisions remain with the reporting entity and its advisers.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="g104-section" id="capabilities">
          <div className="g104-wrap">
            <div className="g104-eyebrow">MODELLING &amp; CONTROL</div>
            <h2>Technical depth where it matters. Clear outputs where they're needed.</h2>
            <div className="g104-features">
              {capabilities.map((f) => (
                <div className="g104-feature" key={f.title}>
                  <b>{f.title}</b>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
            <p className="g104-fine">
              Methodology selection depends on instrument type, data availability and the applicable GRAP 104 measurement
              requirements. A PD/LGD/EAD decomposition is not mandatory for every portfolio; suitable loss rate methods may
              be appropriate for receivables.
            </p>
          </div>
        </section>

        {/* Governance */}
        <section className="g104-section g104-soft" id="governance">
          <div className="g104-wrap">
            <div className="g104-eyebrow">REVIEW &amp; GOVERNANCE</div>
            <h2>ECL estimates that teams can explain and challenge.</h2>
            <p className="g104-lead g104-flush">
              The calculation is only part of the process. Sound implementation also needs clear assumptions, appropriate
              review and reconciliation to underlying finance records.
            </p>
            <div className="g104-features">
              {governance.map((f) => (
                <div className="g104-feature" key={f.title}>
                  <b>{f.title}</b>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standard */}
        <section className="g104-section" id="standard">
          <div className="g104-wrap g104-two">
            <div>
              <div className="g104-eyebrow">GRAP 104 CONTEXT</div>
              <h2>Aligned with expected credit loss principles.</h2>
              <p>
                GRAP 104 requires appropriate impairment estimates for relevant financial instruments, considering
                historical information and reasonable, supportable current and forward-looking information.
              </p>
              <p>
                For receivables subject to the simplified approach, lifetime ECL is measured without an additional
                significant-increase-in-credit-risk staging assessment. Other financial instruments can be subject to
                different requirements.
              </p>
              <a className="g104-textlink" href={ASB_URL} target="_blank" rel="noopener noreferrer">
                Read the authoritative GRAP 104 guidance ↗
              </a>
            </div>
            <div className="g104-card">
              <h3>Designed to support</h3>
              <ul>
                {standardBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Coverage page CTA */}
        <section className="g104-section g104-soft" id="requirements-coverage">
          <div className="g104-wrap">
            <div className="g104-eyebrow">REQUIREMENTS &amp; SOFTWARE COVERAGE</div>
            <h2>See how the Add-In maps to GRAP 104 requirements.</h2>
            <p className="g104-measure">
              Explore a transparent, requirement-by-requirement comparison of GRAP 104 ECL implementation areas and
              Probmatrix functionality, from ageing and lifetime ECL to forward-looking adjustments, validation,
              documentation and disclosure responsibilities.
            </p>
            <a className="g104-btn" href={COVERAGE_PATH}>
              View GRAP 104 Requirements vs Add-In Coverage →
            </a>
            <p className="g104-fine g104-mt-sm">A searchable 22-area comparison table.</p>
          </div>
        </section>

        {/* Partners */}
        <section className="g104-section" id="partners">
          <div className="g104-wrap">
            <div className="g104-eyebrow g104-center">OUR DELIVERY MODEL</div>
            <h2 className="g104-center">Your Clients. Your Implementation. Our Technology.</h2>
            <div className="g104-lead g104-center">
              <p>
                Probmatrix works with South African professional firms to deliver GRAP 104 Expected Credit Loss solutions
                to <strong>Municipalities and Public Sector Entities</strong>.
              </p>
              <p>
                We equip our implementation partners with the GRAP 104 Excel Add-In, technical training and comprehensive
                product documentation, enabling them to independently manage client engagements, ECL calculations,
                implementation and ongoing support.
              </p>
              <p>
                Our role is to provide the underlying technology, product updates and specialized backend technical support
                whenever required.
              </p>
            </div>
            <div className="g104-cards">
              {partnerRoles.map((r) => (
                <article className="g104-card" key={r.title}>
                  <span className="g104-numb">{r.mark}</span>
                  <h3>{r.title}</h3>
                  <p>
                    <strong className="g104-ink">{r.strap}</strong>
                  </p>
                  <ul className="g104-bullet">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="g104-partner-note">
              <h3>A Partnership Built for Independent Delivery</h3>
              <p>
                Partners manage implementation and client relationships. Probmatrix provides the technology, training,
                documentation and backend support needed to help them deliver GRAP 104 ECL solutions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="g104-section g104-soft" id="faq">
          <div className="g104-wrap g104-faq">
            <div className="g104-eyebrow g104-center">COMMON QUESTIONS</div>
            <h2 className="g104-center">Frequently asked questions</h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Demo */}
        <section className="g104-section" id="demo">
          <div className="g104-wrap">
            <div className="g104-contact">
              <div className="g104-eyebrow">LET'S DISCUSS YOUR IMPLEMENTATION</div>
              <h2>Ready to make GRAP 104 ECL more repeatable?</h2>
              <p>
                Whether you are an implementation partner looking to expand service delivery or a Municipality or Public
                Sector Entity exploring internal automation, request a demonstration. Automated Edition enquiries are
                coordinated through our partner network.
              </p>
              <a className="g104-btn" href={DEMO_MAILTO}>
                Request a Demo by Email →
              </a>
              <div className="g104-linksrow">
                <span>{CONTACT_EMAIL}</span>
                <a href="https://probmatrix.io/" target="_blank" rel="noopener noreferrer">
                  Visit Probmatrix
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showFooter && (
        <footer className="g104-footer">
          <div className="g104-wrap">
            <span>© {year} Probmatrix Analytics. Risk Management, Automated.</span>
            <span>
              GRAP 104 ECL technology for Municipalities and Public Sector Entities ·{" "}
              <a href={ASB_URL} target="_blank" rel="noopener noreferrer">
                ASB reference
              </a>
            </span>
          </div>
        </footer>
      )}
    </div>
  );
}

/* ---------------------------- Styles ----------------------------
   Scoped under .g104 so nothing leaks into the rest of the site.
------------------------------------------------------------------- */

const styles = `
.g104{--bg:#0b2846;--band:#0d3c58;--card:rgba(17,76,110,.42);--card-hi:rgba(22,92,132,.5);--border:rgba(110,165,205,.16);
  --border-hi:rgba(110,165,205,.32);--accent:#1b6aa5;--accent-txt:#3d8cc4;--white:#fff;--text:#b5c4d3;--muted:#8da3b8;
  --btn:linear-gradient(135deg,#04457d,#0b5c97);
  color:var(--text);background:var(--bg);font:16px/1.7 Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
.g104 *,.g104 *::before,.g104 *::after{box-sizing:border-box}
.g104 a{text-decoration:none;color:inherit}
.g104 p{margin:0 0 1.2rem}
.g104 h1,.g104 h2,.g104 h3,.g104 b,.g104 strong,.g104 summary{color:var(--white)}
.g104 h1,.g104 h2,.g104 h3{font-family:"Space Grotesk",Inter,system-ui,sans-serif}
.g104 a:focus-visible,.g104 summary:focus-visible{outline:2px solid var(--accent-txt);outline-offset:3px;border-radius:6px}
.g104-wrap{max-width:1160px;margin:auto;padding:0 28px}

.g104-top{position:sticky;top:0;z-index:10;background:rgba(11,40,70,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.g104-nav{height:75px;display:flex;justify-content:space-between;align-items:center;gap:22px}
.g104-logo{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;font-size:22px;color:var(--white)}
.g104-logo span{color:var(--accent-txt)}
.g104-navlinks{display:flex;gap:22px;white-space:nowrap;font-size:14px;font-weight:500;align-items:center;color:var(--text)}
.g104-navlinks a:hover{color:var(--white)}

.g104 .g104-btn{background:var(--btn);color:#fff;padding:12px 24px;border-radius:999px;display:inline-block;font-weight:600;line-height:1.35;border:0;cursor:pointer;
  box-shadow:0 0 22px rgba(11,92,151,.45);transition:box-shadow .2s,filter .2s}
.g104 .g104-btn:hover{filter:brightness(1.12);box-shadow:0 0 30px rgba(27,106,165,.6)}
.g104 .g104-btn.g104-outline{background:transparent;border:1px solid var(--border-hi);box-shadow:none}
.g104 .g104-btn.g104-outline:hover{background:rgba(255,255,255,.06)}

.g104-hero{background:radial-gradient(ellipse at 50% 0%,#1a4a70 0,transparent 60%),var(--bg);padding:95px 0 90px;border-bottom:1px solid var(--border)}
.g104-hero-grid{display:grid;grid-template-columns:1.12fr .88fr;align-items:center;gap:56px}
.g104-eyebrow{display:inline-flex;align-items:center;gap:10px;text-transform:uppercase;letter-spacing:2px;font-size:11px;font-weight:600;color:var(--accent-txt);margin:0 0 14px}
.g104-eyebrow::before{content:"";width:22px;height:1px;background:currentColor;opacity:.7}
.g104-center>.g104-eyebrow,.g104-eyebrow.g104-center{display:flex;justify-content:center}
.g104-hero .g104-eyebrow{padding:7px 16px;border:1px solid var(--border-hi);border-radius:999px;background:rgba(255,255,255,.05);letter-spacing:1px;color:var(--text)}
.g104-hero .g104-eyebrow::before{display:none}
.g104-hero h1{font-size:clamp(36px,4.6vw,58px);letter-spacing:-1px;line-height:1.1;margin:0 0 24px;font-weight:700}
.g104-hero h1 em{font-style:normal;color:var(--white)}
.g104-hero p{font-size:17px}
.g104-actions{display:flex;gap:12px;flex-wrap:wrap;margin:28px 0}
.g104 .g104-subnote{display:inline-block;font-size:13px;color:var(--text);padding:7px 16px;border:1px solid var(--border-hi);border-radius:999px;background:rgba(255,255,255,.04)}

.g104-product-visual{border:1px solid var(--border-hi);background:rgba(255,255,255,.04);border-radius:18px;padding:14px;box-shadow:0 30px 80px rgba(0,0,0,.35)}
.g104-window{background:var(--band);border:1px solid var(--border);border-radius:12px;overflow:hidden}
.g104-wtop{background:rgba(255,255,255,.04);border-bottom:1px solid var(--border);padding:10px 16px;font-size:12px;font-weight:600;display:flex;justify-content:space-between;color:var(--text)}
.g104-dots{letter-spacing:3px;color:var(--muted)}
.g104-wbody{padding:21px}
.g104-wlabel{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--accent-txt);font-weight:600}
.g104-wtitle{font-family:"Space Grotesk",Inter,sans-serif;font-size:21px;font-weight:700;margin:4px 0 20px;color:var(--white)}
.g104-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
.g104-metric{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px}
.g104-metric strong{display:block;font-size:19px;font-family:"Space Grotesk",Inter,sans-serif}
.g104-metric small{color:var(--muted);font-size:11px}
.g104-bars{height:105px;display:flex;align-items:flex-end;gap:12px;padding:17px 0 0}
.g104-bars i{flex:1;display:block;background:linear-gradient(#2a82c0,#0b4d80);border-radius:4px 4px 0 0}
.g104-bottom-ribbon{background:rgba(255,255,255,.05);border:1px solid var(--border);padding:12px 16px;margin-top:20px;border-radius:999px;font-size:12px;font-weight:500;text-align:center}

.g104-cred{background:var(--band);padding:30px 0;border-bottom:1px solid var(--border)}
.g104-credgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.g104-creditem{border-left:2px solid var(--accent);padding-left:15px;font-size:14px}
.g104-creditem b{display:block;font-size:16px;font-family:"Space Grotesk",Inter,sans-serif}

.g104-section{padding:94px 0}
.g104-soft{background:var(--band)}
.g104-dark{background:linear-gradient(180deg,var(--band),var(--bg))}
.g104-center{text-align:center}
.g104-left{text-align:left}
.g104-section h2{font-size:clamp(28px,3.1vw,40px);line-height:1.2;letter-spacing:-.5px;margin:0 0 20px;font-weight:700}
.g104-lead{font-size:17px;color:var(--text);max-width:820px;margin:0 auto 32px}
.g104-lead.g104-flush{margin-left:0}
.g104-measure{max-width:820px}
.g104-mt{margin-top:24px}
.g104-mt-sm{margin-top:14px}

.g104-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:34px}
.g104-card{border:1px solid var(--border);padding:28px;border-radius:12px;background:var(--card)}
.g104-card h3{font-size:19px;line-height:1.3;margin:14px 0 10px}
.g104-card p{font-size:15px}
.g104-ink{color:var(--white)}
.g104-numb{display:inline-flex;width:42px;height:42px;align-items:center;justify-content:center;border:1px solid var(--border-hi);background:rgba(27,106,165,.12);border-radius:8px;color:var(--accent-txt);font-weight:700;font-size:14px;font-family:"Space Grotesk",Inter,sans-serif}
.g104 ul{padding-left:20px;margin:0 0 1.2rem}
.g104 li{margin-bottom:8px}
.g104 li::marker{color:var(--accent-txt)}
.g104-bullet{font-size:14px}

.g104-editions{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:32px}
.g104-edition{border:1px solid var(--border);border-radius:14px;padding:34px;background:var(--card);display:flex;flex-direction:column;align-items:flex-start}
.g104-edition.g104-featured{border-color:rgba(61,140,196,.55);box-shadow:0 0 40px rgba(27,106,165,.18)}
.g104-edition ul{flex:1}
.g104-tag{display:inline-block;padding:5px 13px;border-radius:999px;border:1px solid var(--border-hi);background:rgba(255,255,255,.05);color:var(--text);font-size:11px;letter-spacing:1px;font-weight:600;text-transform:uppercase}
.g104-edition h3{font-size:28px;line-height:1.2;margin:16px 0 14px}
.g104-fine{font-size:13px;color:var(--muted)}

.g104-ribbon-showcase{background:var(--bg)}
.g104-ribbon-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:32px}
.g104-ribbon-card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:28px;min-width:0}
.g104-ribbon-card h3{font-size:24px;line-height:1.2;margin:14px 0 12px}
.g104-ribbon-card p{font-size:15px}
.g104-ribbon-screen{background:rgba(0,0,0,.18);border:1px solid var(--border);border-radius:10px;padding:12px;margin:18px 0;overflow-x:auto}
.g104-ribbon-screen img{display:block;width:100%;height:auto;min-width:470px;object-fit:contain;border-radius:4px;background:#fff}
.g104-ribbon-note{max-width:860px;margin:25px auto 0;text-align:center;font-size:13px;color:var(--muted)}

.g104-flow{list-style:none;padding:0;display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:32px 0 0}
.g104-step{border-radius:12px;background:var(--card);border:1px solid var(--border);padding:22px 18px;min-height:182px;margin:0}
.g104-step span{color:var(--accent-txt);font-size:12px;font-weight:700;letter-spacing:1px}
.g104-step h3{font-size:17px;line-height:1.3;margin:10px 0}
.g104-step p{font-size:13px;margin:0}

.g104-two{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.g104-textlink{color:var(--accent-txt);font-weight:600;text-decoration:underline!important}
.g104-features{display:grid;grid-template-columns:repeat(2,1fr);gap:0 32px;margin-bottom:12px}
.g104-feature{padding:20px 0 4px;border-top:1px solid var(--border)}
.g104-feature b{display:block;font-size:17px;margin-bottom:6px;font-family:"Space Grotesk",Inter,sans-serif}
.g104-feature p{font-size:14px}

.g104-partner-note{margin-top:34px;background:var(--card);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:10px;padding:24px 28px}
.g104-partner-note h3{margin:0 0 6px;font-size:20px}
.g104-partner-note p{margin:0}

.g104-faq{max-width:820px;margin:auto}
.g104-faq h2{margin-bottom:32px!important}
.g104-faq details{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:18px 22px;margin-bottom:12px}
.g104-faq details[open]{border-color:var(--border-hi)}
.g104-faq summary{font-size:15px;font-weight:600;cursor:pointer}
.g104-faq details p{padding-top:12px;margin:0;font-size:14px}

.g104-contact{background:var(--band);border:1px solid var(--border);border-radius:18px;padding:56px 54px;text-align:center}
.g104-contact h2{margin-bottom:15px}
.g104-contact p{max-width:680px;margin:0 auto 24px}
.g104-linksrow{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:19px;font-size:14px;color:var(--muted)}
.g104-linksrow a{text-decoration:underline}

.g104-footer{background:var(--band);border-top:1px solid var(--border);color:var(--muted);padding:30px 0;font-size:13px}
.g104-footer .g104-wrap{display:flex;justify-content:space-between;gap:25px;flex-wrap:wrap}
.g104-footer a{text-decoration:underline}

@media (prefers-reduced-motion:no-preference){html:has(.g104){scroll-behavior:smooth}}
@media (max-width:900px){
  .g104-navlinks a:not(.g104-btn){display:none}
  .g104-hero-grid,.g104-two,.g104-editions,.g104-ribbon-grid{grid-template-columns:1fr}
  .g104-flow,.g104-cards{grid-template-columns:repeat(2,1fr)}
  .g104-hero{padding:65px 0}
  .g104-section{padding:70px 0}
}
@media (max-width:560px){
  .g104-wrap{padding:0 20px}
  .g104-nav{height:65px}
  .g104 .g104-navlinks .g104-btn{font-size:12px;padding:10px 14px}
  .g104-metrics{gap:4px}.g104-metric{padding:8px}.g104-metric strong{font-size:14px}
  .g104-credgrid,.g104-cards,.g104-flow,.g104-features{grid-template-columns:1fr}
  .g104-contact{padding:40px 22px}
  .g104-section{padding:58px 0}
  .g104-edition,.g104-ribbon-card{padding:22px}
  .g104-ribbon-screen{padding:8px}
}
`;
