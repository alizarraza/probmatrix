import { Link } from 'react-router-dom'
import { aboutTeaser } from '../content/siteContent'
import { images, img } from '../content/images'
import { IconArrowRight, IconCheckCircle } from './icons'

export default function AboutTeaser() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2 about-grid" style={{ alignItems: 'center' }}>
          <div
            className="glow-border"
            style={{
              borderRadius: 'var(--radius-lg)',
              aspectRatio: '4 / 3.1',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={img(images.teamMeeting, 800)}
              srcSet={`${img(images.teamMeeting, 600)} 600w, ${img(images.teamMeeting, 1000)} 1000w`}
              sizes="(max-width: 900px) 100vw, 600px"
              alt="Risk management professionals reviewing figures together in an office"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(160deg, rgba(13,100,150,0.18) 0%, rgba(6,10,20,0.15) 60%)',
              }}
            />
          </div>

          <div>
            <span className="section-eyebrow">{aboutTeaser.eyebrow}</span>
            <h2 className="section-title">{aboutTeaser.title}</h2>
            <p className="section-subtitle">{aboutTeaser.body}</p>

            <ul style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Audit-ready workflows', 'Faster Reporting Cycles', 'Runs fully on-premise'].map(
                (point) => (
                  <li key={point} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: 'var(--text-secondary)' }}>
                    <IconCheckCircle size={18} />
                    {point}
                  </li>
                )
              )}
            </ul>

            <Link to="/about" className="btn-primary" style={{ marginTop: 30 }}>
              {aboutTeaser.cta} <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
