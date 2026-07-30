import { Link } from 'react-router-dom'
import { IconArrowRight } from './icons'

export default function FinalCTA({
  title = 'Ready to automate your risk management?',
  subtitle = 'Reach out for custom risk management and consulting services — or request a demo of the IFRS 9 Excel Add-In.',
  primaryLabel = 'Request a Demo',
  primaryTo = '/contact',
}: {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryTo?: string
}) {
  return (
    <section className="section">
      <div className="container">
        <div
          className="glow-border"
          style={{
            borderRadius: 'var(--radius-lg)',
            padding: '56px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
            background:
              'linear-gradient(135deg, rgba(13,100,150,0.10), rgba(6,10,20,0.4)), radial-gradient(circle at 85% 15%, rgba(13,100,150,0.15), transparent 60%)',
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>{title}</h2>
            <p style={{ marginTop: 14, fontSize: 15.5, color: 'var(--text-secondary)' }}>{subtitle}</p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to={primaryTo} className="btn-primary">
              {primaryLabel} <IconArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
