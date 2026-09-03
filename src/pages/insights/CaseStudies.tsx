import { Helmet } from "react-helmet-async";

interface Study {
  title: string;
  industry: string;
  description: string;
}

const studies: Study[] = [
  {
    title: "Regional Bank Reduces IFRS 9 Reporting Time by 75%",
    industry: "Banking",
    description:
      "A regional bank automated impairment calculations using the Probmatrix IFRS 9 Add-In, significantly reducing reporting time and improving governance.",
  },
  {
    title: "Microfinance Institution Standardizes Credit Risk Assessment",
    industry: "Microfinance",
    description:
      "Standardized IFRS 9 workflows improved consistency across branches while reducing manual errors.",
  },
  {
    title: "Commercial Bank Improves Portfolio Analytics",
    industry: "Commercial Banking",
    description:
      "Behavioural lifetime estimation and advanced analytics enhanced Expected Credit Loss modelling.",
  },
  {
    title: "Finance Company Accelerates Regulatory Compliance",
    industry: "Consumer Finance",
    description:
      "Automated reporting and audit-ready outputs reduced compliance effort and spreadsheet dependency.",
  },
];

// Pull a headline stat straight out of the title when one exists (e.g. "75%"),
// rather than inventing figures the source data doesn't provide.
function extractStat(title: string): string | null {
  const match = title.match(/(\d+%)/);
  return match ? match[1] : null;
}

export default function CaseStudies(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>IFRS 9 Case Studies | ECL & Credit Risk Success Stories</title>
        <meta
          name="description"
          content="Explore IFRS 9 case studies showing how banks and financial institutions improve ECL modelling, credit risk management, reporting, governance, and compliance."
        />
      </Helmet>

      <section className="cs-section">
        <div className="cs-glow" aria-hidden="true" />

        <div className="cs-container">
          <div className="cs-heading">
            <span className="cs-eyebrow">
              <span className="cs-eyebrow-dot" aria-hidden="true" />
              Success Stories
            </span>
            <h1 className="cs-title">IFRS 9, ECL & Credit Risk Case Studies</h1>
            <p className="cs-description">
              Discover how financial institutions use Probmatrix solutions to
              modernize IFRS 9 reporting, improve governance, and strengthen
              credit risk management.
            </p>
          </div>

          <div className="cs-grid">
            {studies.map((study) => {
              const stat = extractStat(study.title);
              return (
                <div className="cs-card" key={study.title}>
                  <div className="cs-card-top">
                    <span className="cs-industry">{study.industry}</span>
                    {stat && <span className="cs-stat">{stat}</span>}
                  </div>

                  <h3 className="cs-card-title">{study.title}</h3>
                  <p className="cs-card-description">{study.description}</p>

                  <a className="cs-cta" href="#">
                    Read case study <span aria-hidden="true">→</span>
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

        .cs-section {
          --cs-bg: #0a1b2e;
          --cs-panel: #0f2540;
          --cs-line: rgba(255, 255, 255, 0.09);
          --cs-accent: #3b9eea;
          --cs-text-body: #9fb4cc;
          --cs-text-heading: #ffffff;

          position: relative;
          background: var(--cs-bg);
          padding: 100px 24px;
          overflow: hidden;
        }

        .cs-glow {
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

        .cs-container {
          position: relative;
          max-width: 1080px;
          margin: 0 auto;
        }

        .cs-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--cs-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .cs-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cs-accent);
          box-shadow: 0 0 8px var(--cs-accent);
        }

        .cs-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(2.1rem, 4vw, 2.9rem);
          line-height: 1.15;
          color: var(--cs-text-heading);
          margin: 0 0 16px;
        }

        .cs-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--cs-text-body);
          max-width: 56ch;
          margin: 0 auto;
        }

        .cs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .cs-card {
          display: flex;
          flex-direction: column;
          background: var(--cs-panel);
          border: 1px solid var(--cs-line);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.2s ease;
        }

        .cs-card:hover {
          border-color: rgba(59, 158, 234, 0.35);
        }

        .cs-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .cs-industry {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--cs-accent);
          background: rgba(59, 158, 234, 0.14);
          border: 1px solid rgba(59, 158, 234, 0.3);
          border-radius: 999px;
          padding: 4px 12px;
        }

        .cs-stat {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--cs-text-heading);
        }

        .cs-card-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.15rem;
          line-height: 1.35;
          color: var(--cs-text-heading);
          margin: 0 0 10px;
        }

        .cs-card-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--cs-text-body);
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .cs-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--cs-accent);
          text-decoration: none;
          width: fit-content;
        }

        .cs-cta:hover {
          text-decoration: underline;
        }

        @media (max-width: 760px) {
          .cs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .cs-section {
            padding: 72px 20px;
          }

          .cs-card {
            padding: 22px 20px;
          }
        }
      `,
          }}
        />
      </section>
    </>
  );
}