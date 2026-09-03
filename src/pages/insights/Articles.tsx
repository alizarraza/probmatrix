import { Link } from "react-router-dom";
import { articles } from "../../content/Articlesdata";
import { Helmet } from "react-helmet-async";

export default function Articles(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Blogs | IFRS 9, ECL, Credit Risk & Risk Modelling Articles</title>
        <meta
          name="description"
          content="Explore articles on IFRS 9, expected credit loss, credit risk, risk modelling, PD, LGD, regulatory compliance, stress testing, data quality, and financial risk."
        />
      </Helmet>
      <section className="ar-section">
        <div className="ar-glow" aria-hidden="true" />

        <div className="ar-container">
          <div className="ar-heading">
            <span className="ar-eyebrow">
              <span className="ar-eyebrow-dot" aria-hidden="true" />
              Insights
            </span>
            <h1 className="ar-title">IFRS 9, ECL, Credit Risk & Risk Modelling Articles</h1>
            <p className="ar-description">
              Stay informed with practical articles covering IFRS 9, expected
              credit loss, risk modelling, regulatory compliance, and industry
              best practices.
            </p>
          </div>

          <div className="ar-grid">
            {articles.map((article) => (
              <div className="ar-card" key={article.slug}>
                <h3 className="ar-card-title">{article.title}</h3>
                <p className="ar-card-description">{article.description}</p>

                <div className="ar-card-meta">
                  <span className="ar-author">{article.author}</span>
                  <span className="ar-dot" aria-hidden="true">•</span>
                  <span>{article.date}</span>
                  <span className="ar-dot" aria-hidden="true">•</span>
                  <span>{article.read}</span>
                </div>

                <Link className="ar-cta" to={`/insights/articles/${article.slug}`}>
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .ar-section {
          --ar-bg: #0a1b2e;
          --ar-panel: #0f2540;
          --ar-line: rgba(255, 255, 255, 0.09);
          --ar-accent: #3b9eea;
          --ar-text-body: #9fb4cc;
          --ar-text-heading: #ffffff;

          position: relative;
          background: var(--ar-bg);
          padding: 100px 24px;
          overflow: hidden;
        }

        .ar-glow {
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

        .ar-container {
          position: relative;
          max-width: 1080px;
          margin: 0 auto;
        }

        .ar-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        .ar-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ar-line);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }

        .ar-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ar-accent);
          box-shadow: 0 0 8px var(--ar-accent);
        }

        .ar-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(2.1rem, 4vw, 2.9rem);
          line-height: 1.15;
          color: var(--ar-text-heading);
          margin: 0 0 16px;
        }

        .ar-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--ar-text-body);
          max-width: 56ch;
          margin: 0 auto;
        }

        .ar-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ar-card {
          display: flex;
          flex-direction: column;
          background: var(--ar-panel);
          border: 1px solid var(--ar-line);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.2s ease;
        }

        .ar-card:hover {
          border-color: rgba(59, 158, 234, 0.35);
        }

        .ar-card-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          line-height: 1.4;
          color: var(--ar-text-heading);
          margin: 0 0 12px;
        }

        .ar-card-description {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--ar-text-body);
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .ar-card-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 11.5px;
          color: var(--ar-text-body);
          border-top: 1px solid var(--ar-line);
          padding-top: 16px;
          margin-bottom: 18px;
        }

        .ar-author {
          color: #cfe3f7;
        }

        .ar-dot {
          color: rgba(255, 255, 255, 0.25);
        }

        .ar-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--ar-accent);
          text-decoration: none;
          width: fit-content;
        }

        .ar-cta:hover {
          text-decoration: underline;
        }

        @media (max-width: 960px) {
          .ar-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ar-section {
            padding: 72px 20px;
          }

          .ar-grid {
            grid-template-columns: 1fr;
          }

          .ar-card {
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