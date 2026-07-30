interface PdfGuide {
  title: string;
  description: string;
  file: string;
  fileName: string;
  fileSize: string;
}

const pdfGuides: PdfGuide[] = [
  {
    title: "IFRS 9 ECL Guide for Development Finance Institutions",
    description:
      "Practical implementation guide, industry best practices, and regulatory expectations for DFIs.",
    file: "/guides/ifrs9-ecl-guide-dfi.pdf",
    fileName: "IFRS 9 ECL Guide for Development Finance Institutions.pdf",
    fileSize: "0.8 MB",
  },
  {
    title: "IFRS 9 ECL Guide for Investment Finance Companies",
    description:
      "Practical implementation guide, industry best practices, and regulatory expectations for IFCs.",
    file: "/guides/ifrs9-ecl-guide-ifc.pdf",
    fileName: "IFRS 9 ECL Guide for Investment Finance Companies.pdf",
    fileSize: "0.9 MB",
  },
  {
    title: "IFRS 9 ECL Guide for Insurance Companies",
    description:
      "Practical implementation guide, industry best practices, and regulatory expectations for insurance companies.",
    file: "/guides/ifrs9-ecl-guide-insurance.pdf",
    fileName: "IFRS 9 ECL Guide for Insurance Companies.pdf",
    fileSize: "0.7 MB",
  },
];

interface Guide {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
}

const guides: Guide[] = [
  {
    title: "Getting Started with the IFRS 9 Add-In",
    level: "Beginner",
    duration: "10 min",
    description:
      "Install and configure the Probmatrix IFRS 9 Add-In for Microsoft Excel.",
  },
  {
    title: "Preparing Your Loan Portfolio Data",
    level: "Beginner",
    duration: "8 min",
    description:
      "Prepare customer, facility, collateral, and historical default data before importing.",
  },
  {
    title: "Calculating Lifetime Expected Credit Loss",
    level: "Intermediate",
    duration: "15 min",
    description:
      "Learn how to calculate Lifetime ECL using PD, LGD, EAD, and macroeconomic scenarios.",
  },
  {
    title: "Model Validation & Governance Checklist",
    level: "Advanced",
    duration: "12 min",
    description:
      "Best practices for validation, governance, sensitivity analysis, and audit readiness.",
  },
];

const levelStyles: Record<Guide["level"], { color: string; soft: string; border: string }> = {
  Beginner: {
    color: "#34d399",
    soft: "rgba(52, 211, 153, 0.12)",
    border: "rgba(52, 211, 153, 0.32)",
  },
  Intermediate: {
    color: "#3b9eea",
    soft: "rgba(59, 158, 234, 0.14)",
    border: "rgba(59, 158, 234, 0.32)",
  },
  Advanced: {
    color: "#f59e0b",
    soft: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.32)",
  },
};

function PdfIcon(): JSX.Element {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3v5a1 1 0 0 0 1 1h5" />
      <path d="M6 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2z" />
      <path d="M9 15h1.5a1.5 1.5 0 0 0 0-3H9v5" />
      <path d="M13.5 17v-5h1.75a1.25 1.25 0 0 1 0 2.5h-1.75" />
      <path d="M18.5 12v5M18.5 14.25h1.5" />
    </svg>
  );
}

function DownloadIcon(): JSX.Element {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  );
}

export default function IFRS9Guides(): JSX.Element {
  return (
    <section className="gd-section">
      <div className="gd-glow" aria-hidden="true" />

      <div className="gd-container">
        <div className="gd-heading">
          <span className="gd-eyebrow">
            <span className="gd-eyebrow-dot" aria-hidden="true" />
            Guides
          </span>
          <h1 className="gd-title">IFRS 9 Implementation Guides</h1>
          <p className="gd-description">
            Practical implementation guides to help financial institutions
            deploy, validate, and manage IFRS 9 impairment models.
          </p>
        </div>

        {/* Downloadable industry PDF guides */}
        <div className="gd-subheading">
          <h2 className="gd-subheading-title">Industry ECL Guides</h2>
          <p className="gd-subheading-description">
            Free, in-depth PDF guides covering methodology, governance, and
            regulatory expectations by institution type.
          </p>
        </div>

        <div className="gd-pdf-grid">
          {pdfGuides.map((pdf) => (
            <a
              className="gd-pdf-card"
              key={pdf.file}
              href={pdf.file}
              download={pdf.fileName}
            >
              <span className="gd-pdf-icon">
                <PdfIcon />
              </span>

              <h3 className="gd-pdf-title">{pdf.title}</h3>
              <p className="gd-pdf-description">{pdf.description}</p>

              <span className="gd-pdf-footer">
                <span className="gd-pdf-meta">PDF · {pdf.fileSize}</span>
                <span className="gd-pdf-download">
                  <DownloadIcon />
                  Download
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="gd-subheading">
          <h2 className="gd-subheading-title">Add-In Walkthroughs</h2>
          <p className="gd-subheading-description">
            Step-by-step guides for working directly in the Probmatrix IFRS 9
            Excel Add-In.
          </p>
        </div>

        <div className="gd-grid">
          {guides.map((guide, i) => {
            const style = levelStyles[guide.level];
            return (
              <div className="gd-card" key={guide.title}>
                <div className="gd-card-top">
                  <span className="gd-step">
                    <span className="gd-step-label">Step</span>
                    <span className="gd-step-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  {i < guides.length - 1 && (
                    <span className="gd-step-line" aria-hidden="true" />
                  )}
                </div>

                <h3 className="gd-card-title">{guide.title}</h3>
                <p className="gd-card-description">{guide.description}</p>

                <div className="gd-card-footer">
                  <span
                    className="gd-level"
                    style={{
                      color: style.color,
                      background: style.soft,
                      borderColor: style.border,
                    }}
                  >
                    {guide.level}
                  </span>
                  <span className="gd-duration">{guide.duration}</span>
                </div>

                <a className="gd-cta" href="#">
                  Start guide <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .gd-section {
          --gd-bg: #0a1b2e;
          --gd-panel: #0f2540;
          --gd-line: rgba(255, 255, 255, 0.09);
          --gd-accent: #3b9eea;
          --gd-text-body: #9fb4cc;
          --gd-text-heading: #ffffff;

          position: relative;
          background: var(--gd-bg);
          padding: 100px 24px;
          overflow: hidden;
        }

        .gd-glow {
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

        .gd-container {
          position: relative;
          max-width: 1080px;
          margin: 0 auto;
        }

        .gd-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        .gd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--gd-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .gd-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gd-accent);
          box-shadow: 0 0 8px var(--gd-accent);
        }

        .gd-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(2.1rem, 4vw, 2.9rem);
          line-height: 1.15;
          color: var(--gd-text-heading);
          margin: 0 0 16px;
        }

        .gd-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--gd-text-body);
          max-width: 56ch;
          margin: 0 auto;
        }

        .gd-subheading {
          margin-bottom: 24px;
        }

        .gd-subheading-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.3rem;
          color: var(--gd-text-heading);
          margin: 0 0 8px;
        }

        .gd-subheading-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--gd-text-body);
          max-width: 60ch;
          margin: 0;
        }

        .gd-pdf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        .gd-pdf-card {
          display: flex;
          flex-direction: column;
          background: var(--gd-panel);
          border: 1px solid var(--gd-line);
          border-radius: 16px;
          padding: 26px;
          text-decoration: none;
          transition: border-color 0.2s ease;
        }

        .gd-pdf-card:hover {
          border-color: rgba(59, 158, 234, 0.35);
        }

        .gd-pdf-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(59, 158, 234, 0.12);
          color: var(--gd-accent);
          margin-bottom: 16px;
        }

        .gd-pdf-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          line-height: 1.35;
          color: var(--gd-text-heading);
          margin: 0 0 10px;
        }

        .gd-pdf-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--gd-text-body);
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .gd-pdf-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          border-top: 1px solid var(--gd-line);
          padding-top: 16px;
        }

        .gd-pdf-meta {
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 11.5px;
          color: var(--gd-text-body);
        }

        .gd-pdf-download {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--gd-accent);
        }

        .gd-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .gd-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: var(--gd-panel);
          border: 1px solid var(--gd-line);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.2s ease;
        }

        .gd-card:hover {
          border-color: rgba(59, 158, 234, 0.35);
        }

        .gd-card-top {
          position: relative;
          margin-bottom: 18px;
        }

        .gd-step {
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
          font-family: "IBM Plex Mono", ui-monospace, monospace;
        }

        .gd-step-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gd-text-body);
        }

        .gd-step-number {
          font-size: 20px;
          font-weight: 500;
          color: var(--gd-accent);
        }

        .gd-card-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.15rem;
          line-height: 1.35;
          color: var(--gd-text-heading);
          margin: 0 0 10px;
        }

        .gd-card-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--gd-text-body);
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .gd-card-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .gd-level {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid;
          border-radius: 999px;
          padding: 4px 12px;
        }

        .gd-duration {
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 12px;
          color: var(--gd-text-body);
        }

        .gd-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--gd-accent);
          text-decoration: none;
          width: fit-content;
        }

        .gd-cta:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .gd-pdf-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .gd-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .gd-section {
            padding: 72px 20px;
          }

          .gd-card,
          .gd-pdf-card {
            padding: 22px 20px;
          }
        }
      `,
        }}
      />
    </section>
  );
}