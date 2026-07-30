import { Link, useParams } from "react-router-dom";
import { getPaperBySlug, type ContentBlock } from "../../content/Whitepaperdata";

function Block({ block }: { block: ContentBlock }): JSX.Element | null {
  switch (block.type) {
    case "h2":
      return <h2 className="wpd-h2">{block.text}</h2>;
    case "p":
      return <p className="wpd-p">{block.text}</p>;
    case "ul":
      return (
        <ul className="wpd-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote className="wpd-quote">{block.text}</blockquote>;
    case "image":
      return (
        <figure className="wpd-figure">
          <img className="wpd-image" src={block.src} alt={block.alt} />
        </figure>
      );
    default:
      return null;
  }
}

export default function WhitePaperDetail(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const paper = slug ? getPaperBySlug(slug) : undefined;

  if (!paper) {
    return (
      <section className="wpd-section">
        <div className="wpd-container wpd-not-found">
          <h1 className="wpd-title">White paper not found</h1>
          <p className="wpd-p">This paper may have been moved or no longer exists.</p>
          <Link className="wpd-back" to="/insights/white-papers">
            ← Back to White Papers
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="wpd-section">
      <div className="wpd-glow" aria-hidden="true" />

      <div className="wpd-container">
        <Link className="wpd-back" to="/insights/white-papers">
          ← Back to White Papers
        </Link>

        <span className="wpd-eyebrow">
          <span className="wpd-eyebrow-dot" aria-hidden="true" />
          White Paper
        </span>

        <h1 className="wpd-title">{paper.title}</h1>

        <div className="wpd-meta">
          <span className="wpd-author">{paper.author}</span>
          <span className="wpd-dot" aria-hidden="true">•</span>
          <span>{paper.date}</span>
          <span className="wpd-dot" aria-hidden="true">•</span>
          <span>{paper.read}</span>
        </div>

        {paper.body ? (
          <div className="wpd-body">
            {paper.body.map((block, i) => (
              <Block block={block} key={i} />
            ))}
          </div>
        ) : (
          <div className="wpd-body">
            <p className="wpd-p">{paper.description}</p>
            <p className="wpd-coming-soon">The full paper is being prepared and will be published here soon.</p>
          </div>
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .wpd-section {
          position: relative;
          background: #0a1b2e;
          padding: 100px 24px 120px;
          overflow: hidden;
        }

        .wpd-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(59, 158, 234, 0.16) 0%, rgba(59, 158, 234, 0) 70%);
          pointer-events: none;
        }

        .wpd-container {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }

        .wpd-not-found {
          text-align: center;
          padding-top: 40px;
        }

        .wpd-back {
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

        .wpd-back:hover {
          color: #3b9eea;
        }

        .wpd-eyebrow {
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

        .wpd-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b9eea;
          box-shadow: 0 0 8px #3b9eea;
        }

        .wpd-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.7rem, 3.4vw, 2.4rem);
          line-height: 1.25;
          color: #ffffff;
          margin: 0 0 20px;
        }

        .wpd-meta {
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

        .wpd-author {
          color: #cfe3f7;
        }

        .wpd-dot {
          color: rgba(255, 255, 255, 0.25);
        }

        .wpd-body {
          font-family: "Inter", system-ui, sans-serif;
        }

        .wpd-p {
          font-size: 1rem;
          line-height: 1.75;
          color: #c3d0e0;
          margin: 0 0 20px;
        }

        .wpd-h2 {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: #ffffff;
          margin: 36px 0 16px;
        }

        .wpd-list {
          list-style: disc;
          margin: 0 0 20px;
          padding-left: 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .wpd-list li {
          font-size: 1rem;
          line-height: 1.7;
          color: #c3d0e0;
        }

        .wpd-quote {
          margin: 24px 0;
          padding: 18px 22px;
          border-left: 3px solid #3b9eea;
          background: #0f2540;
          border-radius: 0 10px 10px 0;
          font-size: 1.05rem;
          font-style: italic;
          line-height: 1.6;
          color: #e2ecf7;
        }

        .wpd-figure {
          margin: 28px 0;
        }

        .wpd-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.09);
        }

        .wpd-coming-soon {
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
          .wpd-section {
            padding: 80px 20px 80px;
          }
        }
      `,
        }}
      />
    </section>
  );
}