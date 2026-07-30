import { testimonials, testimonialsHeader } from '../content/siteContent'
import { images, img } from '../content/images'

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }} id="testimonials">
      <div className="container">
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 48, alignItems: 'center' }}>
          {/* Photo */}
          <div
            className="glow-border"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              aspectRatio: '4 / 5',
              position: 'relative',
            }}
          >
            <img
              src={img(images.teamMeeting, 700)}
              srcSet={`${img(images.teamMeeting, 500)} 500w, ${img(images.teamMeeting, 900)} 900w`}
              sizes="(max-width: 900px) 100vw, 500px"
              alt="Risk and finance professionals reviewing IFRS 9 numbers together"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(6,10,20,0.55) 0%, rgba(6,10,20,0) 45%)',
              }}
            />
          </div>

          {/* Quotes */}
          <div>
            <span className="section-eyebrow">What Risk Teams Say</span>
            <h2 className="section-title">{testimonialsHeader}</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
              {testimonials.map((t) => (
                <div key={t.name} className="card">
                  <Quote />
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: 14 }}>
                    "{t.quote}"
                  </p>
                  <p style={{ fontSize: 13.5, color: 'var(--accent-blue-bright)', fontWeight: 600, marginTop: 14 }}>
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Quote() {
  return (
    <svg width="30" height="22" viewBox="0 0 32 24" fill="none">
      <path
        d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.4 7.2 7.2 7.2 11.2H12.8V24H0ZM19.2 24V14.4C19.2 6.4 24 1.2 32 0L33.6 3.2C28.8 4.4 26.4 7.2 26.4 11.2H32V24H19.2Z"
        fill="#0d6496"
        opacity="0.5"
      />
    </svg>
  )
}
