interface NativeExcelExperienceProps {
  /**
   * Path to the ribbon screenshot (the ifrsaddin.avif file). Defaults to
   * "/ifrsaddin.avif" — make sure that file lives in your public/ folder.
   *
   * NOTE: client is sending a new screenshot for this section via WhatsApp —
   * once you have it, drop it in /public and update the default below (or
   * pass imageSrc explicitly from IfrsAddin.tsx).
   */
  imageSrc?: string;
}

export default function NativeExcelExperience({
  imageSrc = "/ifrsaddin.avif",
}: NativeExcelExperienceProps): JSX.Element {
  return (
    <section className="nx-section">
      <div className="nx-container">
        <div className="nx-card">
          <span className="nx-eyebrow">
            <span className="nx-eyebrow-line" aria-hidden="true" />
           Familiar Excel Interface. Enterprise-Grade ECL Engine.
            <span className="nx-eyebrow-line" aria-hidden="true" />
          </span>

          <h2 className="nx-title">Familiar Excel Interface. Enterprise-Grade ECL Engine.</h2>
          <p className="nx-subtitle">
            A familiar Excel interface powered by a controlled calculation
            engine for advanced IFRS 9 modelling, automated ECL processing
            and review-ready results.
          </p>

          <div className="nx-frame">
            <img
              className="nx-frame-img"
              src={imageSrc}
              alt="The ProbMatrix IFRS 9 ribbon tab inside Excel, showing PD calibration, MEV modeling, loss given default, and EAD estimation tools"
            />
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&display=swap");

        .nx-section {
          --nx-page-bg: #0a1b2e;
          --nx-card-bg: #eef1f6;
          --nx-card-border: rgba(15, 37, 64, 0.08);
          --nx-accent: #2f6fd6;
          --nx-heading: #10192b;
          --nx-body: #55647a;

          background: var(--nx-page-bg);
          padding: 88px 24px;
        }

        .nx-container {
          max-width: 1080px;
          margin: 0 auto;
        }

        .nx-card {
          background: var(--nx-card-bg);
          border: 1px solid var(--nx-card-border);
          border-radius: 28px;
          padding: 56px 48px 48px;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
        }

        .nx-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 600;
          font-size: 12.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--nx-accent);
          margin-bottom: 20px;
        }

        .nx-eyebrow-line {
          display: inline-block;
          width: 28px;
          height: 1px;
          background: rgba(47, 111, 214, 0.35);
        }

        .nx-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.7rem, 3.4vw, 2.4rem);
          line-height: 1.2;
          color: var(--nx-heading);
          margin: 0 0 14px;
        }

        .nx-subtitle {
          font-family: "Inter", system-ui, sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--nx-body);
          max-width: 52ch;
          margin: 0 auto 40px;
        }

        .nx-frame {
          background: #ffffff;
          border-radius: 16px;
          padding: 8px;
          box-shadow: 0 20px 40px rgba(16, 25, 43, 0.14);
        }

        .nx-frame-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        @media (max-width: 640px) {
          .nx-section {
            padding: 64px 16px;
          }

          .nx-card {
            padding: 40px 24px 32px;
            border-radius: 20px;
          }

          .nx-eyebrow-line {
            width: 16px;
          }
        }
      `,
        }}
      />
    </section>
  );
}