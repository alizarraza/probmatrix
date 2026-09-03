import { useState } from 'react'
import EnrollmentForm from '../components/forms/EnrollmentForm'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
import { Helmet } from 'react-helmet-async';

const expertiseItems: string[] = [
  "Setting up and configuring the IFRS 9 Add-In",
  "Performing PD, LGD, and EAD estimations",
  "Automating Expected Credit Loss calculations",
  "Conducting Stage Allocation & SICR assessments",
  "Generating transparent, audit-ready reports",
  "Applying IFRS 9 methodologies using real data and live case examples",
];

interface WhyItem {
  text: string;
}

const whyItems: WhyItem[] = [
  { text: "Hands-on, tool-based learning — master real use cases with the Add-In" },
  { text: "Certification by the Probmatrix" },
  { text: "Strengthens both your technical and analytical IFRS 9 capabilities" },
  { text: "Demonstrates applied proficiency in risk automation and compliance" },
  { text: "Makes you eligible for our Partnership Program" },
];

const partnerGains: string[] = [
  "Access to client referrals and implementation opportunities",
  "Marketing recognition",
  "Priority support and feature access",
  "Revenue-sharing opportunities for certified partners",
];

const audiences: string[] = [
  "Risk, Finance, and Credit Professionals",
  "IFRS 9 Implementation & Consulting Teams",
  "Auditors & Analysts working on ECL validation",
  "Fintech teams automating IFRS 9 models",
  "Students aspiring to enter the field of Risk Analytics",
];

const receiveItems: string[] = [
  "Official Certificate (Probmatrix)",
  "Virtual access to our Add-In",
  "Hands-on exercises using the Add-In",
  "Access to materials, templates & examples",
  "Assessment and feedback for certification",
  "Eligibility for Partnership Program",
];

function CheckIcon(): JSX.Element {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

// Original illustration standing in for the rocket/network hero graphic —
// a launch trajectory crossing a few IFRS-9-relevant icons (governance,
// data, reporting) rather than a licensed stock photo.
function LaunchIllustration(): JSX.Element {
  return (
    <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a launch trajectory crossing icons representing collaboration, reporting, and data">
      <rect x="0.5" y="0.5" width="419" height="259" rx="16" fill="#0f2540" stroke="rgba(255,255,255,0.09)" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={40 + i * 30} y1={230 - i * 20} x2={380} y2={30} stroke="rgba(59,158,234,0.18)" strokeWidth="1.5" />
      ))}
      <g stroke="#3b9eea" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M330 55 L346 39 L362 55 L354 55 L354 71 L338 71 L338 55 Z" fill="rgba(59,158,234,0.16)" />
        <circle cx="346" cy="47" r="3" fill="#3b9eea" stroke="none" />
      </g>
      <g stroke="#7fd4c1" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        <circle cx="120" cy="180" r="14" />
        <path d="M113 180a7 7 0 0 1 14 0" />
      </g>
      <g stroke="#f2c14e" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        <rect x="205" y="150" width="26" height="20" rx="2" />
        <path d="M209 150v-6h18v6" />
      </g>
      <g stroke="#a78bfa" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        <circle cx="80" cy="90" r="12" />
        <path d="M74 96l-6 6M86 96l6 6" />
      </g>
    </svg>
  );
}

function HandshakeIllustration(): JSX.Element {
  return (
    <svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a handshake alongside a small chart, representing certification and applied expertise">
      <circle cx="130" cy="110" r="100" fill="rgba(59,158,234,0.06)" />
      <g transform="translate(60,90)" stroke="#3b9eea" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 20 L28 4 L46 14 L34 26 L18 20" />
        <path d="M100 20 L72 4 L54 14 L66 26 L82 20" />
        <path d="M46 14 L54 14" />
      </g>
      <g transform="translate(150,130)" stroke="#7fd4c1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width="56" height="42" rx="4" />
        <path d="M8 32 L20 20 L30 26 L46 10" />
      </g>
    </svg>
  );
}

// Subtle network-line backdrop for the dark "What You'll Receive" band —
// echoes the tech-network photo without using a licensed image.
function NetworkBackdrop(): JSX.Element {
  const nodes = [
    [340, 40], [380, 90], [300, 110], [360, 160], [260, 60], [400, 200], [230, 170],
  ];
  return (
    <svg className="ct-network-svg" viewBox="0 0 420 260" preserveAspectRatio="none" aria-hidden="true">
      {nodes.map(([x1, y1], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => (
          <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(59,158,234,0.16)" strokeWidth="1" />
        ))
      )}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#3b9eea" />
      ))}
    </svg>
  );
}

export default function Certification(): JSX.Element {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>IFRS 9 Certification Program | ECL & Risk Analytics | ProbMatrix</title>
        <meta
          name="description"
          content="Earn IFRS 9 certification with practical training in ECL, PD, LGD, EAD, SICR, risk modelling and Excel-based automation. Build expertise and career growth."
        />
      </Helmet>

      <div className="ct-page">
        <div className="ct-glow" aria-hidden="true" />

        {/* Hero */}
        <section className="ct-hero">
          <div className="ct-container ct-hero-grid">
            <div>
              <span className="ct-eyebrow">
                <span className="ct-eyebrow-dot" aria-hidden="true" />
                Certification Program
              </span>
              <h1 className="ct-title">IFRS 9 Certification Program</h1>
              <p className="ct-lead">
                Take your IFRS 9 knowledge to the next level with the IFRS 9
                Add-In Certification Program — designed for professionals who
                want to apply IFRS 9 through technology.
              </p>
              <p className="ct-lead">
                This program validates your ability to use the IFRS 9 Add-In
                effectively for ECL computation, modeling, and reporting — the
                same tool used by financial institutions, auditors, and
                consulting teams.
              </p>
              <button type="button" className="ct-btn ct-btn-primary" onClick={() => setEnrollOpen(true)}>
                Enroll Now <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="ct-hero-visual">
              <LaunchIllustration />
            </div>
          </div>
        </section>

        {/* Certification Overview */}
        <section className="ct-section ct-section-alt">
          <div className="ct-container">
            <h2 className="ct-section-title ct-centered">Certification Overview</h2>

            <div className="ct-overview-grid">
              <div className="ct-overview-visual">
                <HandshakeIllustration />
              </div>

              <div>
                <h3 className="ct-overview-subtitle">Gain practical expertise in:</h3>
                <ul className="ct-list">
                  {expertiseItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="ct-overview-close">
                  This certification ensures you can <strong>implement IFRS 9 efficiently in Excel</strong>, with technology that simplifies complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Get Certified */}
        <section className="ct-why-band">
          <div className="ct-container">
            <h2 className="ct-why-title ct-centered">Why Get Certified</h2>

            <div className="ct-why-grid">
              {whyItems.map((item) => (
                <div className="ct-why-item" key={item.text}>
                  <span className="ct-why-check">
                    <CheckIcon />
                  </span>
                  <p className="ct-why-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discover Partnership Potential */}
        <section className="ct-section">
          <div className="ct-container ct-partnership-grid">
            <div>
              <h2 className="ct-section-title">Discover Partnership Potential</h2>
              <p className="ct-lead">
                Certified users are eligible for our Partnership Program,
                enabling professionals to collaborate with us in delivering
                IFRS 9 and risk analytics solutions.
              </p>

              <h3 className="ct-overview-subtitle">As a partner, you'll gain:</h3>
              <ul className="ct-list">
                {partnerGains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="ct-lead">
                Your certification becomes more than a badge — it's your
                gateway to collaboration and growth.
              </p>

              <a className="ct-btn ct-btn-outline" href="/partnership">
                Partnership Program <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="ct-partnership-visual">
              <svg viewBox="0 0 240 240" role="img" aria-label="Illustration representing collaboration and network growth through the partnership program">
                <circle cx="120" cy="120" r="110" fill="rgba(59,158,234,0.08)" />
                <circle cx="120" cy="120" r="78" fill="rgba(59,158,234,0.07)" />
                <g stroke="#3b9eea" strokeWidth="1.6" fill="none" strokeLinecap="round">
                  <circle cx="120" cy="70" r="5" />
                  <circle cx="80" cy="150" r="5" />
                  <circle cx="160" cy="150" r="5" />
                  <circle cx="120" cy="120" r="6" fill="#3b9eea" />
                  <path d="M120 76v38M84 146l30-22M156 146l-30-22" />
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* Who Should Enroll */}
        <section className="ct-section ct-section-alt">
          <div className="ct-container">
            <h2 className="ct-section-title ct-centered">Who Should Enroll</h2>

            <div className="ct-audience-list">
              {audiences.map((a) => (
                <div className="ct-audience-row" key={a}>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Receive */}
        <section className="ct-receive-band">
          <NetworkBackdrop />
          <div className="ct-container ct-receive-grid">
            <div className="ct-receive-panel">
              <h2 className="ct-receive-title">What You'll Receive</h2>
              <ul className="ct-list ct-list-light">
                {receiveItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <button type="button" className="ct-btn ct-btn-primary ct-receive-cta" onClick={() => setEnrollOpen(true)}>
              Enroll Now <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        {/* Contact */}
        <section className="ct-section">
          <div className="ct-container ct-contact">
            <h2 className="ct-section-title">Questions About Certification?</h2>
            <div className="ct-contact-actions">
              <a className="ct-btn ct-btn-primary" href="mailto:info@probmatrix.io">
                info@probmatrix.io
              </a>
              <a className="ct-btn ct-btn-outline" href="tel:+923365264744">
                +92 336 5264744
              </a>
            </div>
          </div>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap");

        .ct-page {
          --ct-bg: #0a1b2e;
          --ct-bg-alt: #0d2036;
          --ct-panel: #0f2540;
          --ct-line: rgba(255, 255, 255, 0.09);
          --ct-accent: #3b9eea;
          --ct-text-body: #9fb4cc;
          --ct-text-heading: #ffffff;

          position: relative;
          background: var(--ct-bg);
          overflow: hidden;
          font-family: "Inter", system-ui, sans-serif;
        }

        .ct-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(59, 158, 234, 0.16) 0%, rgba(59, 158, 234, 0) 70%);
          pointer-events: none;
        }

        .ct-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .ct-hero {
          padding: 110px 0 64px;
        }

        .ct-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .ct-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ct-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .ct-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ct-accent);
          box-shadow: 0 0 8px var(--ct-accent);
        }

        .ct-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          line-height: 1.2;
          color: var(--ct-text-heading);
          margin: 0 0 20px;
        }

        .ct-lead {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--ct-text-body);
          margin: 0 0 20px;
        }

        .ct-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 999px;
          padding: 12px 24px;
          text-decoration: none;
        }

        .ct-btn-primary {
          background: var(--ct-accent);
          color: #ffffff;
        }

        .ct-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .ct-hero-visual svg {
          width: 100%;
          height: auto;
        }

        .ct-section {
          position: relative;
          padding: 72px 0;
        }

        .ct-section-alt {
          background: var(--ct-bg-alt);
        }

        .ct-section-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--ct-text-heading);
          margin: 0 0 36px;
        }

        .ct-centered {
          text-align: center;
        }

        .ct-section-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--ct-text-body);
          max-width: 60ch;
          margin: -20px auto 36px;
        }

        .ct-overview-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 48px;
          align-items: center;
        }

        .ct-overview-visual svg {
          width: 100%;
          max-width: 260px;
          height: auto;
          margin: 0 auto;
          display: block;
        }

        .ct-overview-subtitle {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--ct-text-heading);
          margin: 0 0 16px;
        }

        .ct-list {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ct-list li {
          position: relative;
          padding-left: 18px;
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--ct-text-body);
        }

        .ct-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--ct-accent);
        }

        .ct-list li strong {
          color: var(--ct-text-heading);
        }

        .ct-overview-close {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--ct-text-body);
          margin: 0;
        }

        .ct-overview-close strong {
          color: var(--ct-text-heading);
        }

        .ct-why-band {
          position: relative;
          background: linear-gradient(135deg, #0f4c5c, #0a3540);
          padding: 72px 0;
        }

        .ct-why-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 3.2vw, 2.2rem);
          color: #ffffff;
          margin: 0 0 44px;
        }

        .ct-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px 24px;
        }

        .ct-why-item {
          text-align: center;
        }

        .ct-why-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          margin-bottom: 14px;
        }

        .ct-why-text {
          font-size: 0.9rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          max-width: 26ch;
          margin-left: auto;
          margin-right: auto;
        }

        .ct-partnership-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .ct-partnership-visual svg {
          width: 100%;
          max-width: 260px;
          height: auto;
          margin: 0 auto;
          display: block;
        }

        .ct-audience-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 640px;
          margin: 0 auto;
        }

        .ct-audience-row {
          text-align: center;
          background: var(--ct-panel);
          border: 1px solid var(--ct-line);
          border-radius: 10px;
          padding: 14px 20px;
          font-weight: 500;
          font-size: 0.95rem;
          color: #cfe3f7;
        }

        .ct-receive-band {
          position: relative;
          background: #071523;
          padding: 72px 0;
          overflow: hidden;
        }

        .ct-network-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .ct-receive-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 32px;
        }

        .ct-receive-panel {
          background: var(--ct-panel);
          border: 1px solid rgba(59, 158, 234, 0.25);
          border-radius: 16px;
          padding: 32px;
          max-width: 460px;
        }

        .ct-receive-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #ffffff;
          margin: 0 0 20px;
        }

        .ct-list-light li {
          color: #dceaf9;
        }

        .ct-receive-cta {
          justify-self: start;
        }

        .ct-contact {
          text-align: center;
        }

        .ct-contact-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .ct-hero-grid,
          .ct-overview-grid,
          .ct-partnership-grid {
            grid-template-columns: 1fr;
          }

          .ct-hero-visual {
            order: -1;
            max-width: 420px;
            margin: 0 auto;
          }

          .ct-why-grid {
            grid-template-columns: 1fr 1fr;
          }

          .ct-receive-grid {
            grid-template-columns: 1fr;
          }

          .ct-receive-cta {
            justify-self: center;
          }
        }

        @media (max-width: 640px) {
          .ct-hero {
            padding: 88px 0 48px;
          }

          .ct-section,
          .ct-why-band,
          .ct-receive-band {
            padding: 56px 0;
          }

          .ct-why-grid {
            grid-template-columns: 1fr;
          }
        }
      `,
          }}
        />

        <Modal open={enrollOpen} onClose={() => setEnrollOpen(false)} title="Enrollment Form">
          <EnrollmentForm
            onSuccess={() => {
              setEnrollOpen(false)
              setToastOpen(true)
            }}
          />
        </Modal>
        <Toast message="Enrollment submitted!" show={toastOpen} onDone={() => setToastOpen(false)} />
      </div>
    </>
  );
}