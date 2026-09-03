import { Link } from "react-router-dom";
import { papers } from "../../content/Whitepaperdata";
import { Helmet } from "react-helmet-async";

// Survival / behavioural-maturity curve — recolored to sit on the dark navy
// theme, echoing the PD / LGD / ECL metric badges used across the site.
function SurvivalCurve(): JSX.Element {
  return (
    <svg
      className="wp-curve-svg"
      viewBox="0 0 220 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative survival curve showing exposure decaying over months on book"
    >
      <line x1="10" y1="8" x2="10" y2="80" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <line x1="10" y1="80" x2="212" y2="80" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />

      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={10 + i * 50}
          y1="80"
          x2={10 + i * 50}
          y2="84"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
        />
      ))}

      <path
        d="M10,12 L 60,12 L 60,28 L 100,28 L 100,44 L 130,44 L 130,58 L 155,58 L 155,68 L 180,68 L 180,74 L 212,74"
        stroke="var(--wp-accent)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <circle cx="10" cy="12" r="2.5" fill="var(--wp-accent)" />
      <circle cx="212" cy="74" r="2.5" fill="var(--wp-accent)" />
    </svg>
  );
}

function accessionNumber(dateStr: string, index: number): string {
  const yearMatch = dateStr.match(/\d{4}/);
  const year = yearMatch ? yearMatch[0] : "----";
  return `WP-${year}-${String(index + 1).padStart(2, "0")}`;
}

export default function WhitePapers(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>IFRS 9 White Papers | ECL & Credit Risk Research | ProbMatrix</title>
        <meta
          name="description"
          content="Explore IFRS 9 white papers on ECL, credit risk analytics, survival analysis, behavioural modelling, expected maturity, and advanced risk modelling research."
        />
      </Helmet>

      <section className="wp-section">
        <div className="wp-glow" aria-hidden="true" />

        <div className="wp-container">
          <div className="wp-heading">
            <span className="wp-eyebrow">
              <span className="wp-eyebrow-dot" aria-hidden="true" />
              Research Library
            </span>
            <h1 className="wp-title">IFRS 9, ECL & Credit Risk White Papers</h1>
            <p className="wp-description">
              Technical publications covering IFRS 9 methodologies, survival
              analysis, behavioural modelling, expected credit loss, and
              advanced credit risk analytics.
            </p>
          </div>

          <div className="wp-list">
            {papers.map((paper, i) => (
              <article className="wp-card" key={paper.slug}>
                <div className="wp-card-top">
                  <span className="wp-doc-no">{accessionNumber(paper.date, i)}</span>
                  <span className="wp-doc-type">White Paper</span>
                </div>

                <div className="wp-card-body">
                  <div className="wp-card-text">
                    <h2 className="wp-card-title">{paper.title}</h2>
                    <p className="wp-card-description">{paper.description}</p>

                    <div className="wp-card-footer">
                      <span className="wp-author">{paper.author}</span>
                      <span className="wp-dot" aria-hidden="true">•</span>
                      <span>{paper.date}</span>
                      <span className="wp-dot" aria-hidden="true">•</span>
                      <span>{paper.read}</span>
                    </div>

                    {paper.body && (
                      <Link className="wp-cta" to={`/insights/white-papers/${paper.slug}`}>
                        Read the paper <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>

                  <div className="wp-card-figure">
                    <SurvivalCurve />
                    <span className="wp-curve-label">
                      Behavioural maturity curve — illustrative
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .wp-section {
          --wp-bg: #0a1b2e;
          --wp-panel: #0f2540;
          --wp-line: rgba(255, 255, 255, 0.09);
          --wp-accent: #3b9eea;
          --wp-accent-soft: rgba(59, 158, 234, 0.14);
          --wp-text-body: #9fb4cc;
          --wp-text-heading: #ffffff;

          position: relative;
          background: var(--wp-bg);
          padding: 100px 24px;
          overflow: hidden;
        }

        .wp-glow {
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

        .wp-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .wp-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        .wp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.02em;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--wp-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .wp-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--wp-accent);
          box-shadow: 0 0 8px var(--wp-accent);
        }

        .wp-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(2.1rem, 4vw, 2.9rem);
          line-height: 1.15;
          color: var(--wp-text-heading);
          margin: 0 0 16px;
        }

        .wp-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--wp-text-body);
          max-width: 56ch;
          margin: 0 auto;
        }

        .wp-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .wp-card {
          background: var(--wp-panel);
          border: 1px solid var(--wp-line);
          border-radius: 16px;
          padding: 28px 32px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .wp-card:hover {
          border-color: rgba(59, 158, 234, 0.35);
        }

        .wp-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .wp-doc-no {
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 12px;
          letter-spacing: 0.03em;
          color: var(--wp-accent);
          background: var(--wp-accent-soft);
          border: 1px solid rgba(59, 158, 234, 0.3);
          border-radius: 999px;
          padding: 4px 12px;
        }

        .wp-doc-type {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--wp-text-body);
        }

        .wp-card-body {
          display: grid;
          grid-template-columns: 1fr 200px;
          gap: 32px;
          align-items: center;
        }

        .wp-card-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 1.3;
          color: var(--wp-text-heading);
          margin: 0 0 12px;
        }

        .wp-card-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--wp-text-body);
          margin: 0 0 20px;
        }

        .wp-card-footer {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 12px;
          color: var(--wp-text-body);
          margin-bottom: 18px;
        }

        .wp-author {
          color: #cfe3f7;
        }

        .wp-dot {
          color: rgba(255, 255, 255, 0.25);
        }

        .wp-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--wp-accent);
          text-decoration: none;
        }

        .wp-cta:hover {
          text-decoration: underline;
        }

        .wp-card-figure {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--wp-line);
          border-radius: 12px;
          padding: 14px 12px;
        }

        .wp-curve-svg {
          width: 100%;
          height: auto;
        }

        .wp-curve-label {
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.02em;
          color: var(--wp-text-body);
          text-align: center;
          margin-top: 8px;
        }

        @media (max-width: 640px) {
          .wp-section {
            padding: 72px 20px;
          }

          .wp-card {
            padding: 22px 20px;
          }

          .wp-card-body {
            grid-template-columns: 1fr;
          }
        }
      `,
          }}
        />
      </section>
    </>
  );
}