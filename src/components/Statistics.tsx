import { stats } from '../content/siteContent'

export default function Statistics() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header centered">
          <span className="section-eyebrow">By The Numbers</span>
          <h2 className="section-title">How Probmatrix Simplifies Your IFRS 9 Workload</h2>
        </div>

        <div className="grid-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card glow-border"
              style={{ textAlign: 'center', padding: '32px 20px' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(30px, 4vw, 42px)',
                  fontWeight: 700,
                  color: 'var(--accent-blue-bright)',
                }}
              >
                {s.value}
              </p>
              <p style={{ marginTop: 8, fontSize: 15, color: '#fff', fontWeight: 600 }}>{s.label}</p>
              <p style={{ marginTop: 8, fontSize: 12.5, color: 'var(--text-muted)' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
