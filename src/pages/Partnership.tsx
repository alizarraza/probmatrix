import { useState } from 'react'
import PartnershipForm from '../components/forms/PartnershipForm'
import Modal from '../components/Modal'
import Toast from '../components/Toast'

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Deliver Auditor-ready IFRS 9",
    description: "Help clients achieve IFRS 9.",
  },
  {
    title: "Excel-native Add-in",
    description: "Seamlessly integrate ECL faster, with stronger governance & better margins.",
  },
  {
    title: "Boost Margins & Efficiency",
    description: "Generate recurring revenue and long-term growth.",
  },
  {
    title: "Comprehensive Support",
    description: "Expert-backed assistance that drives accuracy, efficiency, and client confidence.",
  },
  {
    title: "Ideal For",
    description:
      "Audit and advisory firms, IFRS 9 consultants, and practitioners supporting banks, insurance companies, MFIs, credit unions, and leasing companies.",
  },
];

interface Tier {
  key: string;
  name: string;
  whoItSuits: string;
  keyBenefits: string[];
  commercials: string[];
  accent: string;
}

const tiers: Tier[] = [
  {
    key: "referral",
    name: "Referral Tier",
    whoItSuits: "Audit & consulting firms that prefer introductions.",
    keyBenefits: ["Lead registration & tracking."],
    commercials: ["X% Commission on initial sales.", "X% on renewals.", "Probmatrix handles client billing."],
    accent: "#34d399",
  },
  {
    key: "reseller",
    name: "Reseller Tier",
    whoItSuits: "Certified practitioners & consultants delivering implementations/managed ECL.",
    keyBenefits: [
      "Partner-only templates & training.",
      "Priority product support.",
      "First-line delivery rights.",
      "Free reviewer sandbox.",
    ],
    commercials: ["X% discount on licenses.", "X% trailing renewals.", "Partner bills the client directly."],
    accent: "#3b9eea",
  },
];

const steps: { title: string; description: string }[] = [
  { title: "Apply", description: "Confirm alignment on fit and territory/vertical focus" },
  { title: "Onboard", description: "Attend two partner training sessions and access demo datasets" },
  {
    title: "First Client",
    description: "Launch your first pilot license and host a co-branded webinar or briefing within 30–45 days",
  },
  { title: "Scale", description: "Register deals and earn margin and commissions as you grow" },
];

function BenefitIcon({ index }: { index: number }): JSX.Element {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (index === 0) {
    return (
      <svg {...common}>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 3v2h6V3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 2v4M16 2v4" />
        <path d="M17 15a3 3 0 1 1-1-2.2" />
        <path d="M17 12v2h-2" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M6 17V11M12 17V7M18 17v-4" />
        <path d="M14 4l4 0 0 4" />
        <path d="M18 4l-6 6-3-3-5 5" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg {...common}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
        <path d="M19 19v1a3 3 0 0 1-3 3h-3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3v3M12 18v3M21 12h-3M6 12H3" />
    </svg>
  );
}

function TierIcon({ tierKey }: { tierKey: string }): JSX.Element {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (tierKey === "referral") {
    return (
      <svg {...common}>
        <path d="M8 12l-3 3 3 3" />
        <path d="M16 12l3 3-3 3" />
        <path d="M5 15h14" />
        <circle cx="12" cy="6" r="2.5" />
        <path d="M8.5 10a3.5 3.5 0 0 1 7 0" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M9 15h6" />
      <path d="M12 13v4" />
    </svg>
  );
}

export default function Partnership(): JSX.Element {
  const [applyOpen, setApplyOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)

  return (
    <div className="px-page">
      <div className="px-glow" aria-hidden="true" />

      {/* Hero */}
      <section className="px-hero">
        <div className="px-container">
          <span className="px-eyebrow">
            <span className="px-eyebrow-dot" aria-hidden="true" />
            Partnership Program
          </span>
          <h1 className="px-title">
            Partner with Probmatrix — Elevate Your Clients' Financial Reporting
          </h1>

          <p className="px-lead">
            A partnership with Probmatrix is ideal for audit practices, risk
            advisory firms, IFRS 9 consultants and our Certified
            practitioners that serve financial institutions seeking to:
          </p>

          <ul className="px-checklist">
            <li>Standardize and streamline IFRS 9 processes with transparent, auditor-ready evidence</li>
            <li>Accelerate re-performance, overlays, recalibration, and quarterly ECL runs</li>
            <li>Deliver implementation services with consistent, governed outputs</li>
            <li>Maintain continuity and user adoption through Excel — the platform their teams already use daily</li>
          </ul>

          <p className="px-lead">
            Generate recurring revenue through software resale and
            implementation services, while positioning your firm as a
            trusted provider of IFRS 9 excellence and operational
            resilience.
          </p>

          <div className="px-hero-actions">
            <button type="button" className="px-btn px-btn-primary" onClick={() => setApplyOpen(true)}>
              Become a Partner <span aria-hidden="true">→</span>
            </button>
            <a className="px-btn px-btn-outline" href="mailto:info@probmatrix.io">
              Book a 30-Minute Partner Demo
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-section px-section-alt">
        <div className="px-container">
          <div className="px-benefit-grid">
            {benefits.map((b, i) => (
              <div className="px-benefit-card" key={b.title}>
                <span className="px-benefit-icon">
                  <BenefitIcon index={i} />
                </span>
                <h3 className="px-benefit-title">{b.title}</h3>
                <p className="px-benefit-description">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program Tiers */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="px-section-title px-centered">Probmatrix Partner Program Tiers</h2>

          <div className="px-tier-grid">
            {tiers.map((tier) => (
              <div className="px-tier-card" key={tier.key}>
                <span
                  className="px-tier-icon"
                  style={{ color: tier.accent, borderColor: `${tier.accent}55` }}
                >
                  <TierIcon tierKey={tier.key} />
                </span>

                <h3 className="px-tier-name" style={{ color: tier.accent }}>
                  {tier.name}
                </h3>

                <div className="px-tier-block">
                  <span className="px-tier-label">Who it Suits</span>
                  <p className="px-tier-text">{tier.whoItSuits}</p>
                </div>

                <div className="px-tier-block">
                  <span className="px-tier-label">Key Benefits</span>
                  <ul className="px-tier-list">
                    {tier.keyBenefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="px-tier-block">
                  <span className="px-tier-label">Commercials</span>
                  <ul className="px-tier-list">
                    {tier.commercials.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner steps */}
      <section className="px-cta-band">
        <div className="px-container">
          <h2 className="px-cta-title">Become a Partner</h2>
          <p className="px-cta-lead">
            Partners play a key role in helping clients accelerate success
            through our focused solutions and collaborative go-to-market
            approach. Please follow the steps below to become a partner:
          </p>

          <div className="px-steps">
            {steps.map((step, i) => (
              <div className="px-step" key={step.title}>
                <span className="px-step-number">{i + 1}</span>
                <div>
                  <h3 className="px-step-title">{step.title}</h3>
                  <p className="px-step-description">{step.description}</p>
                </div>
                {i < steps.length - 1 && <span className="px-step-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>

          <button type="button" className="px-btn px-btn-primary" onClick={() => setApplyOpen(true)}>
            Become a Partner <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="px-section px-section-alt">
        <div className="px-container px-contact">
          <h2 className="px-section-title">Questions About the Program?</h2>
          <div className="px-contact-actions">
            <a className="px-btn px-btn-primary" href="mailto:info@probmatrix.io">
              info@probmatrix.io
            </a>
            <a className="px-btn px-btn-outline" href="tel:+923365264744">
              +92 336 5264744
            </a>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .px-page {
          --px-bg: #0a1b2e;
          --px-bg-alt: #0d2036;
          --px-panel: #0f2540;
          --px-line: rgba(255, 255, 255, 0.09);
          --px-accent: #3b9eea;
          --px-text-body: #9fb4cc;
          --px-text-heading: #ffffff;

          position: relative;
          background: var(--px-bg);
          overflow: hidden;
        }

        .px-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(59, 158, 234, 0.16) 0%, rgba(59, 158, 234, 0) 70%);
          pointer-events: none;
        }

        .px-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .px-hero {
          padding: 110px 0 64px;
          text-align: center;
        }

        .px-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--px-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .px-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--px-accent);
          box-shadow: 0 0 8px var(--px-accent);
        }

        .px-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          line-height: 1.2;
          color: var(--px-text-heading);
          margin: 0 0 24px;
        }

        .px-lead {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--px-text-body);
          max-width: 68ch;
          margin: 0 auto 20px;
          text-align: left;
        }

        .px-checklist {
          list-style: none;
          margin: 0 auto 24px;
          padding: 0;
          max-width: 68ch;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .px-checklist li {
          position: relative;
          padding-left: 22px;
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--px-text-body);
        }

        .px-checklist li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--px-accent);
        }

        .px-hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .px-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 999px;
          padding: 12px 24px;
          text-decoration: none;
        }

        .px-btn-primary {
          background: var(--px-accent);
          color: #ffffff;
        }

        .px-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .px-section {
          position: relative;
          padding: 72px 0;
        }

        .px-section-alt {
          background: var(--px-bg-alt);
        }

        .px-section-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--px-text-heading);
          margin: 0 0 40px;
        }

        .px-centered {
          text-align: center;
        }

        .px-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .px-benefit-card {
          text-align: center;
        }

        .px-benefit-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(59, 158, 234, 0.12);
          color: var(--px-accent);
          margin-bottom: 16px;
        }

        .px-benefit-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--px-text-heading);
          margin: 0 0 8px;
        }

        .px-benefit-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--px-text-body);
          margin: 0;
          max-width: 30ch;
          margin-left: auto;
          margin-right: auto;
        }

        .px-tier-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .px-tier-card {
          background: var(--px-panel);
          border: 1px solid var(--px-line);
          border-radius: 16px;
          padding: 28px;
        }

        .px-tier-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid;
          margin-bottom: 16px;
        }

        .px-tier-name {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }

        .px-tier-block {
          margin-bottom: 18px;
        }

        .px-tier-block:last-child {
          margin-bottom: 0;
        }

        .px-tier-label {
          display: block;
          font-family: "Inter", system-ui, sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--px-text-body);
          margin-bottom: 8px;
        }

        .px-tier-text {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--px-text-heading);
          margin: 0;
        }

        .px-tier-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .px-tier-list li {
          position: relative;
          padding-left: 14px;
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--px-text-heading);
        }

        .px-tier-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 7px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--px-text-body);
        }

        .px-cta-band {
          position: relative;
          background: linear-gradient(135deg, #0f4c5c, #0a3540);
          padding: 72px 0;
        }

        .px-cta-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 3.2vw, 2.1rem);
          color: #ffffff;
          margin: 0 0 16px;
        }

        .px-cta-lead {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          max-width: 68ch;
          margin: 0 0 36px;
        }

        .px-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .px-step {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 18px 20px;
        }

        .px-step-number {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .px-step-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .px-step-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.875rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .px-step-arrow {
          display: none;
        }

        .px-cta-band .px-btn-primary {
          background: #0a1b2e;
        }

        .px-contact {
          text-align: center;
        }

        .px-contact-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .px-benefit-grid {
            grid-template-columns: 1fr 1fr;
          }

          .px-tier-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .px-hero {
            padding: 88px 0 48px;
          }

          .px-section,
          .px-cta-band {
            padding: 56px 0;
          }

          .px-benefit-grid {
            grid-template-columns: 1fr;
          }
        }
      `,
        }}
      />

      <Modal open={applyOpen} onClose={() => setApplyOpen(false)} title="Collaborate With Us">
        <PartnershipForm
          onSuccess={() => {
            setApplyOpen(false)
            setToastOpen(true)
          }}
        />
      </Modal>
      <Toast message="Partnership application submitted!" show={toastOpen} onDone={() => setToastOpen(false)} />
    </div>
  );
}