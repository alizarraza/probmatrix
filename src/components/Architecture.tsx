import type { ReactNode } from 'react'

export default function Architecture() {
  return (
    <section id="architecture" style={{ padding: '90px 0 40px', position: 'relative' }}>
      <div className="container">
        <p className="section-eyebrow">
          Our Platform
        </p>
        <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 36px)', color: '#fff', maxWidth: 700 }}>
          The New Architecture
        </h2>

        <p style={{ color: 'var(--text-secondary)', maxWidth: 640, marginTop: 22, fontSize: 15 }}>
          Even experienced risk teams find IFRS 9 implementation resource-intensive.
          Traditional ECL workflows depend on external consultants, disconnected models,
          and manual spreadsheets that struggle under audit scrutiny. ProbMatrix rebuilds
          this process natively inside Excel — the environment finance teams already
          trust — automating PD, LGD, EAD/EIR and macroeconomic scenario calibrations
          end to end, entirely on your own infrastructure.
        </p>

        <p
          style={{
            marginTop: 40,
            fontSize: 'clamp(20px, 2.6vw, 26px)',
            color: '#fff',
            maxWidth: 680,
            fontFamily: 'var(--font-display)',
          }}
        >
          When audit-readiness is a given and full transparency is the end goal
        </p>

        {/* Diagram */}
        <div
          className="glow-border"
          style={{
            marginTop: 56,
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)',
            padding: 28,
            display: 'flex',
            gap: 16,
            alignItems: 'stretch',
            overflowX: 'auto',
          }}
        >
          {/* Source systems */}
          <DiagramColumn title="Source Systems">
            <MiniBox label="Core Banking" />
            <MiniBox label="Loan Ledger" />
            <MiniBox label="Market Data" />
          </DiagramColumn>

          <Arrow />

          {/* Center - IFRS9 Add-In */}
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              className="glow-border"
              style={{
                textAlign: 'center',
                padding: '8px 0',
                borderRadius: 8,
                fontWeight: 700,
                color: '#fff',
                fontSize: 14,
                background: 'rgba(13,100,150,0.12)',
              }}
            >
              IFRS 9 Excel Add-In
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <ModuleBox title="Data.PM" items={['Import & Mapping', 'Data Quality Checks', 'Bucket / Rating Assignment']} />
              <ModuleBox title="Scenario Model" items={['Macroeconomic Overlay', 'Behavioral Adjustments', 'Multi-scenario Weighting']} />
              <ModuleBox title="PD · LGD" items={['Probability of Default', 'Loss Given Default', 'Calibration & Validation']} />
              <ModuleBox title="EAD / EIR" items={['Exposure at Default', 'Effective Interest Rate', 'Amortization Schedules']} />
            </div>
            <div
              style={{
                marginTop: 4,
                textAlign: 'center',
                fontSize: 12,
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 8,
                padding: '8px 0',
              }}
            >
              Platform Features &nbsp;·&nbsp; No Prescribed Data Model &nbsp;·&nbsp; Runs Fully On-Premise
            </div>
          </div>

          <Arrow />

          {/* Destination */}
          <DiagramColumn title="Outputs">
            <MiniBox label="ECL Disclosures" />
            <MiniBox label="Audit Trail" />
            <MiniBox label="Regulatory Reports" />
          </DiagramColumn>
        </div>

        <p
          style={{
            marginTop: 46,
            fontSize: 'clamp(20px, 2.6vw, 26px)',
            color: '#fff',
            maxWidth: 700,
          }}
        >
          The ease of use inside Excel, combined with full automation, adds a different
          dimension to the world of IFRS 9 compliance
        </p>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #architecture .glow-border[style*='overflowX'] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}

function DiagramColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="glow-border"
      style={{
        flex: 1,
        minWidth: 140,
        borderRadius: 10,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        background: 'var(--bg-card)',
      }}
    >
      <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', fontWeight: 600 }}>{title}</p>
      {children}
    </div>
  )
}

function MiniBox({ label }: { label: string }) {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        borderRadius: 6,
        padding: '8px 6px',
        textAlign: 'center',
        fontSize: 12,
        color: 'var(--text-secondary)',
      }}
    >
      {label}
    </div>
  )
}

function ModuleBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      style={{
        border: '1px solid var(--border-glow)',
        borderRadius: 8,
        padding: 10,
        background: 'rgba(13,100,150,0.05)',
      }}
    >
      <p style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--accent-blue-bright)', marginBottom: 6 }}>{title}</p>
      {items.map((it) => (
        <p key={it} style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {it}
        </p>
      ))}
    </div>
  )
}

function Arrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', minWidth: 20 }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10H17M17 10L12 5M17 10L12 15" stroke="#0d6496" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
