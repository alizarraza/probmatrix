import { Link } from 'react-router-dom'
import { images, img } from '../content/images'
import { IconExcel, IconChart, IconCheckCircle, IconArrowRight } from '../components/icons'
import FinalCTA from '../components/FinalCTA'

export default function Solutions() {
  return (
    <>
      <section
        style={{
          padding: '90px 0 60px',
          background: 'radial-gradient(ellipse 800px 400px at 50% -10%, rgba(13,100,150,0.18) 0%, rgba(11,40,70,0) 65%), var(--bg-primary)',
        }}
      >
        <div className="container" style={{ maxWidth: 720 }}>
          <span className="section-eyebrow">Our Solutions</span>
          <h1 style={{ fontSize: 'clamp(28px, 4.2vw, 42px)' }}>Two products, one goal: audit-ready numbers</h1>
          <p style={{ marginTop: 20, fontSize: 16.5, color: 'var(--text-secondary)' }}>
            The IFRS 9 Excel Add-In and CredX work together to automate credit risk and regulatory
            reporting — from Excel-native ECL computations to the platform behind our advisory
            engagements.
          </p>
        </div>
      </section>

      {/* IFRS 9 Add-In */}
      <section className="section" id="ifrs9-add-in" style={{ scrollMarginTop: 130 }}>
        <div className="container">
          <div className="grid-2 solutions-grid" style={{ alignItems: 'center', gap: 48 }}>
            <div>
              <div className="icon-badge">
                <IconExcel size={22} />
              </div>
              <h2 className="section-title" style={{ marginTop: 20 }}>IFRS 9 Excel Add-In</h2>
              <p className="section-subtitle">
                Perform complete IFRS 9 Expected Credit Loss computations seamlessly inside Excel,
                without the need for costly external consultants. A user-friendly, form-based
                interface makes it easy: select your data, click, and get results instantly.
              </p>
              <ul style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'PD, LGD, EAD/EIR and macroeconomic scenario calibration in one workflow',
                  'Transparent, traceable, and auditable calculations',
                  'Runs fully on-premise — no internet connection required',
                  'No external consultants needed for day-to-day ECL runs',
                ].map((point) => (
                  <li key={point} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                    <IconCheckCircle size={17} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">
                  Request a Demo <IconArrowRight size={16} />
                </Link>
                <Link to="/solutions/ifrsaddin" className="btn-secondary">
                  See Full Details
                </Link>
              </div>
            </div>

            <div className="glow-border" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4 / 3', position: 'relative' }}>
              <img
                src="/ifrs.jpeg"
                srcSet="/ifrs.jpeg 500w, /ifrs-large.jpeg 900w"
                sizes="(max-width: 900px) 100vw, 500px"
                alt="IFRS 9 analytics displayed on a laptop screen"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CredX */}
      <section className="section" id="credx" style={{ background: 'var(--bg-secondary)', scrollMarginTop: 130 }}>
        <div className="container">
          <div className="grid-2 solutions-grid" style={{ alignItems: 'center', gap: 48 }}>
            <div
              className="glow-border"
              style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4 / 3', position: 'relative', order: 2 }}
            >
              <img
                src="/credx.jpeg"
                srcSet="/credx.jpeg 500w, /credx-large.jpeg 900w"
                sizes="(max-width: 900px) 100vw, 500px"
                alt="Risk professionals reviewing CredX outputs together"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <div style={{ order: 1 }}>
              <div className="icon-badge">
                <IconChart size={22} />
              </div>
              <h2 className="section-title" style={{ marginTop: 20 }}>CredX</h2>
              <p className="section-subtitle">
                CredX is ProbMatrix's credit risk platform behind our IFRS 9 and credit modeling
                engagements — built for consistent, defensible, audit-ready results, trusted by
                200+ risk professionals.
              </p>
              <ul style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  '200+ professionals using CredX',
                  'Consistent, regulator-aligned methodology across engagements',
                  'Built for banks, MFIs, DFIs, NBFCs & insurers',
                  'Powers the models behind our advisory & validation work',
                ].map((point) => (
                  <li key={point} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                    <IconCheckCircle size={17} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">
                  Talk to Us <IconArrowRight size={16} />
                </Link>
                <Link to="/solutions/credX" className="btn-secondary">
                  Explore Full details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .solutions-grid { grid-template-columns: 1fr !important; }
            .solutions-grid > div { order: initial !important; }
          }
        `}</style>
      </section>

      <FinalCTA
        title="Not sure which solution fits your team?"
        subtitle="Tell us about your portfolio and reporting needs, and we'll recommend the right starting point."
      />
    </>
  )
}