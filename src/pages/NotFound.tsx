import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <p className="section-eyebrow" style={{ justifyContent: 'center' }}>
          404
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>Page not found</h1>
        <p style={{ marginTop: 14, color: 'var(--text-secondary)' }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-primary" style={{ marginTop: 26, display: 'inline-flex' }}>
          Back to Home
        </Link>
      </div>
    </section>
  )
}
