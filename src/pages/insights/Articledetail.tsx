import { Link, useParams } from "react-router-dom";
import { getArticleBySlug, type ContentBlock } from "../../content/Articlesdata";

function Block({ block }: { block: ContentBlock }): JSX.Element | null {
  switch (block.type) {
    case "h2":
      return <h2 className="ad-h2">{block.text}</h2>;
    case "h3":
      return <h3 className="ad-h3">{block.text}</h3>;
    case "p":
      return <p className="ad-p">{block.text}</p>;
    case "ul":
      return (
        <ul className="ad-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="ad-list ad-list-ordered">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "image":
      return (
        <figure className="ad-figure">
          <img className="ad-image" src={block.src} alt={block.alt} />
        </figure>
      );
    default:
      return null;
  }
}

export default function ArticleDetail(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <section className="ad-section">
        <div className="ad-container ad-not-found">
          <h1 className="ad-title">Article not found</h1>
          <p className="ad-p">This article may have been moved or no longer exists.</p>
          <Link className="ad-back" to="/insights/articles">
            ← Back to Articles
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="ad-section">
      <div className="ad-glow" aria-hidden="true" />

      <div className="ad-container">
        <Link className="ad-back" to="/insights/articles">
          ← Back to Articles
        </Link>

        <span className="ad-eyebrow">
          <span className="ad-eyebrow-dot" aria-hidden="true" />
          Insights
        </span>

        <h1 className="ad-title">{article.title}</h1>

        <div className="ad-meta">
          <span className="ad-author">{article.author}</span>
          <span className="ad-dot" aria-hidden="true">•</span>
          <span>{article.date}</span>
          <span className="ad-dot" aria-hidden="true">•</span>
          <span>{article.read}</span>
        </div>

        {article.body ? (
          <div className="ad-body">
            {article.body.map((block, i) => (
              <Block block={block} key={i} />
            ))}
          </div>
        ) : (
          <div className="ad-body">
            <p className="ad-p">{article.description}</p>
            <p className="ad-coming-soon">The full article is being prepared and will be published here soon.</p>
          </div>
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .ad-section {
          position: relative;
          background: #0a1b2e;
          padding: 100px 24px 120px;
          overflow: hidden;
        }

        .ad-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(59, 158, 234, 0.16) 0%, rgba(59, 158, 234, 0) 70%);
          pointer-events: none;
        }

        .ad-container {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }

        .ad-not-found {
          text-align: center;
          padding-top: 40px;
        }

        .ad-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          color: #9fb4cc;
          text-decoration: none;
          margin-bottom: 32px;
        }

        .ad-back:hover {
          color: #3b9eea;
        }

        .ad-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 500;
          font-size: 13px;
          color: #cfe3f7;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 20px;
        }

        .ad-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b9eea;
          box-shadow: 0 0 8px #3b9eea;
        }

        .ad-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3.6vw, 2.5rem);
          line-height: 1.2;
          color: #ffffff;
          margin: 0 0 20px;
        }

        .ad-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          font-family: "IBM Plex Mono", ui-monospace, monospace;
          font-size: 12px;
          color: #9fb4cc;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          padding-bottom: 28px;
          margin-bottom: 40px;
        }

        .ad-author {
          color: #cfe3f7;
        }

        .ad-dot {
          color: rgba(255, 255, 255, 0.25);
        }

        .ad-body {
          font-family: "Inter", system-ui, sans-serif;
        }

        .ad-p {
          font-size: 1rem;
          line-height: 1.75;
          color: #c3d0e0;
          margin: 0 0 20px;
        }

        .ad-h2 {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #ffffff;
          margin: 40px 0 18px;
        }

        .ad-h3 {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: #ffffff;
          margin: 28px 0 14px;
        }

        .ad-list {
          margin: 0 0 20px;
          padding-left: 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ad-list li {
          font-size: 1rem;
          line-height: 1.7;
          color: #c3d0e0;
        }

        .ad-list:not(.ad-list-ordered) {
          list-style: disc;
        }

        .ad-list-ordered {
          list-style: decimal;
        }

        .ad-figure {
          margin: 28px 0;
        }

        .ad-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.09);
        }

        .ad-coming-soon {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 0.9rem;
          font-style: italic;
          color: #9fb4cc;
          background: #0f2540;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 12px;
          padding: 16px 20px;
        }

        @media (max-width: 640px) {
          .ad-section {
            padding: 80px 20px 80px;
          }
        }
      `,
        }}
      />
    </section>
  );
}