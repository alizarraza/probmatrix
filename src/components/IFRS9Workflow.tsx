import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  IconTrendUp,
  IconGauge,
  IconLayers,
  IconCheckCircle,
  IconClipboard,
  IconShield,
  IconClock,
} from './icons'

/* ---------------------------------------------------------------- */
/*  Small inline icons (kept local so we don't depend on unknown     */
/*  exports from ./icons that this diagram needs)                    */
/* ---------------------------------------------------------------- */

function Ic({ children, size = 14 }: { children: ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      {children}
    </svg>
  )
}

const IconDatabase = (p: { size?: number }) => (
  <Ic {...p}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </Ic>
)
const IconChartLine = (p: { size?: number }) => (
  <Ic {...p}>
    <path d="M3 3v18h18" />
    <path d="M7 15l3-4 3 3 5-7" />
  </Ic>
)
const IconGlobe = (p: { size?: number }) => (
  <Ic {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </Ic>
)
const IconSearch = (p: { size?: number }) => (
  <Ic {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </Ic>
)
const IconClipboardCheck = (p: { size?: number }) => (
  <Ic {...p}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 3h6v3H9z" />
    <path d="M9 12l2 2 4-4" />
  </Ic>
)
const IconScale = (p: { size?: number }) => (
  <Ic {...p}>
    <path d="M12 3v18M5 7h14M5 7l-3 6a4 4 0 0 0 8 0zM19 7l-3 6a4 4 0 0 0 8 0z" />
  </Ic>
)
const IconSettings = (p: { size?: number }) => (
  <Ic {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87M4.6 9a1.7 1.7 0 0 0-.34-1.87M9 4.6A1.7 1.7 0 0 0 10.04 3M15.04 4.6A1.7 1.7 0 0 1 13.96 3M19.4 9a1.7 1.7 0 0 1 1.56 1.04M4.6 15a1.7 1.7 0 0 1-1.56 1.04M9 19.4a1.7 1.7 0 0 1 1.04 1.56M15.04 19.4a1.7 1.7 0 0 0 1.96 0" />
  </Ic>
)
const IconRecovery = (p: { size?: number }) => (
  <Ic {...p}>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 3v6h-6" />
  </Ic>
)
const IconPercentSmall = (p: { size?: number }) => (
  <Ic {...p}>
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
    <path d="M19 5L5 19" />
  </Ic>
)
const IconGridSmall = (p: { size?: number }) => (
  <Ic {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </Ic>
)
const IconFolder = (p: { size?: number }) => (
  <Ic {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </Ic>
)
const IconFlag = (p: { size?: number }) => (
  <Ic {...p}>
    <path d="M4 3v18" />
    <path d="M4 4h13l-2 4 2 4H4" />
  </Ic>
)

/* ---------------------------------------------------------------- */
/*  Data                                                              */
/* ---------------------------------------------------------------- */

type Step = {
  id: string
  n?: string
  label: string
  desc: string
  icon?: ReactNode
  kind?: 'decision'
}

const allSteps: Record<string, Step> = {
  pdData: { id: 'pdData', n: '01', label: 'PD Data', desc: 'Raw probability-of-default inputs pulled from the portfolio, covering historical and yearly observations.', icon: <IconDatabase /> },
  ttcPd: { id: 'ttcPd', n: '02', label: 'TTC PD', desc: 'Through-the-cycle PD is derived first, giving a long-run, cycle-neutral default probability per segment.', icon: <IconChartLine /> },
  calibratedQ: { id: 'calibratedQ', label: 'Are PDs\nCalibrated?', desc: 'A checkpoint: if TTC PDs are not yet calibrated to the portfolio, they are routed through calibration before proceeding.', kind: 'decision' },
  calibration: { id: 'calibration', n: '04', label: 'Calibration', desc: 'TTC PDs are adjusted so long-run averages match observed default experience for each segment.', icon: <IconSettings /> },
  pitPd: { id: 'pitPd', n: '03', label: 'PIT PD', desc: 'Point-in-time PD is produced by overlaying macroeconomic conditions onto the calibrated TTC PD.', icon: <IconChartLine /> },

  macro: { id: 'macro', n: '05', label: 'Macroeconomic\nModelling', desc: 'Forward-looking macroeconomic scenarios (baseline, upside, downside) are modelled and weighted.', icon: <IconGlobe /> },
  modelDetect: { id: 'modelDetect', n: '06', label: 'Model\nDetection', desc: 'The engine identifies which model specification best fits the current segment and data profile.', icon: <IconSearch /> },
  modelTest: { id: 'modelTest', n: '07', label: 'Model\nTesting', desc: 'Candidate models are back-tested for stability and predictive power before being accepted.', icon: <IconClipboardCheck /> },
  weights: { id: 'weights', n: '08', label: 'Weights', desc: 'Scenario weights are assigned across baseline/upside/downside paths based on macro modelling output.', icon: <IconScale /> },
  standardization: { id: 'standardization', n: '09', label: 'Standardization', desc: 'Outputs are standardized into a consistent format so every segment feeds the same downstream logic.', icon: <IconSettings /> },

  recovery: { id: 'recovery', n: '10', label: 'Recovery Profiles', desc: 'Historical recovery patterns are compiled by segment and collateral type.', icon: <IconRecovery /> },
  cureRates: { id: 'cureRates', n: '11', label: 'Cure Rates', desc: 'Cure-rate experience is layered in alongside recovery profiles to refine loss severity assumptions.', icon: <IconPercentSmall /> },
  ttcLgd: { id: 'ttcLgd', n: '12', label: 'TTC LGD', desc: 'Through-the-cycle Loss Given Default is derived from long-run recovery experience.', icon: <IconChartLine /> },
  pitLgd: { id: 'pitLgd', n: '13', label: 'PIT LGD', desc: 'Point-in-time LGD applies current macro and recovery conditions to the TTC baseline.', icon: <IconClock /> },

  firr: { id: 'firr', n: '14', label: 'EIR', desc: 'Effective interest rate assumptions used to project balances and accrued interest forward.', icon: <IconPercentSmall /> },
  ccf: { id: 'ccf', n: '15', label: 'CCF', desc: 'Credit Conversion Factor estimates how much of an undrawn facility will be drawn before default.', icon: <IconGridSmall /> },
  asAt: { id: 'asAt', n: '17', label: 'As At Portfolio', desc: 'The live portfolio snapshot as at the reporting date, feeding balances into EAD determination.', icon: <IconFolder /> },
  eadDet: { id: 'eadDet', n: '16', label: 'EAD\nDetermination', desc: 'Exposure at Default is calculated by combining current balances, EIR, and CCF assumptions.', icon: <IconGridSmall /> },
  staging: { id: 'staging', n: '18', label: 'Staging', desc: 'Each exposure is classified into Stage 1, 2, or 3 based on credit deterioration since origination.', icon: <IconFlag /> },
}

// Outputs list, resequenced per the client's requested order/content.
const outputs = [
  { id: 'ttc-pd-lgd-r', label: 'TTC PD & LGD Results', icon: <IconClock size={15} /> },
  { id: 'pit-pd-lgd-r', label: 'PiT PD & LGD Results', icon: <IconTrendUp size={15} /> },
  { id: 'fwd-adj-r', label: 'Forward looking adjustments', icon: <IconGlobe size={15} /> },
  { id: 'staging-r', label: 'Staging Results', icon: <IconShield size={15} /> },
  { id: 'pw-ecl-r', label: 'Probability Weighted ECL Results', icon: <IconScale size={15} /> },
  { id: 'summary-r', label: 'Summary & Dashboards', icon: <IconClipboard size={15} /> },
]

const capabilities = [
  'Automated Workflow',
  'Consistent Methodology',
  'Validated Models',
  'Auditable Results',
  'Regulatory Compliant',
  'Efficient & Scalable',
]

// Input group contents, updated per the client's requested wording.
const inputGroups = [
  { title: 'PD Inputs', color: '#2f8bf0', items: ['Historical Data', 'Behavioral Data', 'macroeconomic data'], icon: <IconChartLine size={24} /> },
  { title: 'LGD Inputs', color: '#a259e6', items: ['Recovery Data', 'Default Behavioral Data', 'Cured Customers', 'macroeconomic data'], icon: <IconPercentSmall size={24} /> },
  { title: 'EAD Inputs', color: '#22b8a0', items: ['As of Portfolio', 'EIR', 'CCF'], icon: <IconDatabase size={24} /> },
]

/* ---------------------------------------------------------------- */
/*  Canvas geometry — a fixed px coordinate space, laid out with      */
/*  generous gaps so nothing overlaps regardless of label length.    */
/* ---------------------------------------------------------------- */

const CW = 780
const CH = 600

const W = 120 // standard node width
const H = 56 // standard node height
const HS = 36 // small stacked-node height

const pos: Record<string, { x: number; y: number; w: number; h: number }> = {
  // Row 1 — PD track (cy = 58)
  pdData: { x: 10, y: 30, w: W, h: H },
  ttcPd: { x: 150, y: 30, w: W, h: H },
  calibratedQ: { x: 300, y: 13, w: 140, h: 90 },
  calibration: { x: 470, y: 30, w: W, h: H },
  pitPd: { x: 630, y: 30, w: W, h: H },

  // Row 2 — Macro / model governance (cy = 208), weights/standardization stacked
  macro: { x: 10, y: 180, w: W, h: H },
  modelDetect: { x: 150, y: 180, w: W, h: H },
  modelTest: { x: 300, y: 180, w: W, h: H },
  weights: { x: 470, y: 180, w: W, h: 50 },
  standardization: { x: 470, y: 240, w: W, h: 50 },

  // Row 3 — LGD recovery track
  recovery: { x: 10, y: 330, w: W, h: HS },
  cureRates: { x: 10, y: 376, w: W, h: HS },
  ttcLgd: { x: 210, y: 345, w: W, h: H },
  pitLgd: { x: 470, y: 345, w: W, h: H },

  // Row 4 — EAD & staging track
  firr: { x: 10, y: 447, w: W, h: HS },
  ccf: { x: 10, y: 493, w: W, h: HS },
  asAt: { x: 10, y: 539, w: W, h: HS },
  eadDet: { x: 300, y: 480, w: W, h: H },
  staging: { x: 630, y: 480, w: W, h: H },
}

const cx = (r: { x: number; w: number }) => r.x + r.w / 2
const cy = (r: { y: number; h: number }) => r.y + r.h / 2
const right = (r: { x: number; w: number }) => r.x + r.w
const bottom = (r: { y: number; h: number }) => r.y + r.h

// Same order used for both the desktop canvas layout and the mobile step
// list, so the two views always describe the same sequence.
const orderedIds = Object.keys(pos)

/* ---------------------------------------------------------------- */
/*  Component                                                         */
/* ---------------------------------------------------------------- */

export default function IFRS9Workflow() {
  const [active, setActive] = useState<Step>(allSteps.pdData)

  return (
    <section className="section" id="workflow">
      <div className="container">
        <div className="section-header centered">
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            How It Works
          </span>
          <h2 className="section-title">IFRS 9 Add-In Estimation Workflow</h2>
          <p className="section-subtitle">Integrated. Intelligent. Compliant. — data flows live through the engine below.</p>
        </div>

        <div
          className="workflow-grid"
          style={{ display: 'grid', gridTemplateColumns: '0.72fr 2.15fr 0.85fr', gap: 20, alignItems: 'stretch' }}
        >
          {/* ============================ INPUTS ============================ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ColumnLabel>Inputs</ColumnLabel>
            {inputGroups.map((g) => (
              <div key={g.title} className="card" style={{ padding: 16, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    background: `radial-gradient(circle at 30% 30%, ${g.color}, ${g.color}55)`,
                    boxShadow: `0 0 18px ${g.color}66`,
                  }}
                >
                  {g.icon}
                </div>
                <div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: g.color }}>{g.title}</p>
                  <ul style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {g.items.map((item) => (
                      <li key={item} style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ======================= ENGINE / PROCESS ======================= */}
          <div className="glow-border workflow-engine-panel" style={{ borderRadius: 'var(--radius-lg)', padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <ColumnLabel center>Engine / Process</ColumnLabel>

            {/* Desktop / tablet: full node-and-arrow canvas. Hidden below 760px
                because the fixed-px labels can't scale down to phone widths
                without overlapping — see the mobile list below instead. */}
            <div className="workflow-canvas-desktop" style={{ position: 'relative', width: '100%', aspectRatio: `${CW} / ${CH}`, overflow: 'visible' }}>
              <svg viewBox={`0 0 ${CW} ${CH}`} width="100%" height="100%" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
                <defs>
                  <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent-blue-bright)" />
                  </marker>
                  <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#ef4444" />
                  </marker>
                </defs>

                {/* --- PD track --- */}
                <Straight from={pos.pdData} to={pos.ttcPd} speed={2.2} />
                <Straight from={pos.ttcPd} to={pos.calibratedQ} speed={2} />
                <line x1={cx(pos.ttcPd)} y1={bottom(pos.ttcPd)} x2={cx(pos.ttcPd)} y2={bottom(pos.ttcPd) + 30} stroke="var(--border-glow)" strokeDasharray="3 3" />
                <BranchRight from={pos.calibratedQ} to={pos.calibration} label="No" color="#ef4444" speed={1.6} />
                <Straight from={pos.calibration} to={pos.pitPd} speed={2} />
                <BranchDown from={pos.calibratedQ} to={pos.macro} label="Yes" color="#22c55e" speed={2.4} />

                {/* --- Macro / model governance --- */}
                <Straight from={pos.macro} to={pos.modelDetect} speed={2.2} />
                <Straight from={pos.modelDetect} to={pos.modelTest} speed={2.2} />
                <LoopBack from={pos.modelTest} to={pos.modelDetect} label="Testing Failed" speed={2.8} />
                <SplitRight from={pos.modelTest} toTop={pos.weights} toBottom={pos.standardization} speed={2.4} />
                {/* standardization merges back up into the PD track's output, routed clear of Calibration */}
                <Polyline
                  points={[
                    [right(pos.standardization), cy(pos.standardization)],
                    [right(pos.standardization) + 25, cy(pos.standardization)],
                    [right(pos.standardization) + 25, bottom(pos.calibratedQ) + 25],
                    [right(pos.pitPd) + 15, bottom(pos.calibratedQ) + 25],
                    [right(pos.pitPd) + 15, cy(pos.pitPd)],
                    [right(pos.pitPd), cy(pos.pitPd)],
                  ]}
                  opacity={0.85}
                  speed={3.2}
                />

                {/* --- LGD recovery track --- */}
                <MergeRight from={[pos.recovery, pos.cureRates]} to={pos.ttcLgd} speed={2.6} />
                <Straight from={pos.ttcLgd} to={pos.pitLgd} speed={2.2} />

                {/* --- EAD & staging track --- */}
                <MergeRight from={[pos.firr, pos.ccf, pos.asAt]} to={pos.eadDet} speed={2.6} />
                <Straight from={pos.eadDet} to={pos.staging} speed={2.2} />

                {/* exits toward Outputs column */}
                {[pos.pitPd, pos.pitLgd, pos.staging].map((r, i) => (
                  <g key={i}>
                    <line
                      x1={right(r)}
                      y1={cy(r)}
                      x2={CW - 6}
                      y2={cy(r)}
                      stroke="var(--accent-blue-bright)"
                      strokeWidth="1.5"
                      markerEnd="url(#arrow)"
                      opacity={0.55}
                    />
                    <FlowDot d={`M ${right(r)},${cy(r)} L ${CW - 6},${cy(r)}`} duration={2} delay={i * 0.4} />
                  </g>
                ))}
              </svg>

              {Object.keys(pos).map((id) => {
                const step = allSteps[id]
                const r = pos[id]
                return step.kind === 'decision' ? (
                  <DecisionNode key={id} step={step} rect={r} isActive={active.id === id} onClick={() => setActive(step)} />
                ) : (
                  <Node key={id} step={step} rect={r} isActive={active.id === id} onClick={() => setActive(step)} />
                )
              })}
            </div>

            {/* Mobile: a simple tappable step list, same order and same
                active/onSelect state as the desktop canvas. Shown only
                below 760px — see the CSS at the bottom of this file. */}
            <div className="workflow-canvas-mobile">
              <MobileStepList activeId={active.id} onSelect={setActive} />
            </div>

            {/* detail panel — hidden on mobile since the step list already
                shows the description inline when a step is expanded */}
            {/* <div className="card workflow-detail-panel" style={{ marginTop: 4, borderColor: 'var(--border-glow)' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{active.label.replace('\n', ' ')}</p>
              <p style={{ marginTop: 6, fontSize: 13, color: 'var(--text-secondary)' }}>{active.desc}</p>
            </div> */}
          </div>

          {/* ============================ OUTPUTS ============================ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ColumnLabel>Outputs</ColumnLabel>
            <EclRing />
            {outputs.map((o) => (
              <div key={o.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px' }}>
                {o.icon}
                <span style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>{o.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Built for excellence strip */}
        <div
          className="glow-border workflow-excellence-strip"
          style={{
            marginTop: 32,
            borderRadius: 'var(--radius-lg)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 28,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: 12, letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700 }}>
            BUILT FOR EXCELLENCE
          </span>
          {capabilities.map((c) => (
            <span key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
              <IconCheckCircle size={15} />
              {c}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .workflow-grid { grid-template-columns: 1fr !important; }
        }

        /* --- Mobile fallback for the engine canvas --- */
        .workflow-canvas-mobile { display: none; }

        @media (max-width: 760px) {
          .workflow-canvas-desktop { display: none; }
          .workflow-canvas-mobile { display: block; }
          .workflow-detail-panel { display: none; }
          .workflow-engine-panel { padding: 16px !important; }
          .workflow-excellence-strip { padding: 16px !important; gap: 16px !important; justify-content: flex-start !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-dot animateMotion { display: none; }
        }
      `}</style>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/*  Sub components                                                    */
/* ---------------------------------------------------------------- */

function ColumnLabel({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <div
      style={{
        textAlign: center ? 'center' : 'left',
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--accent-blue-bright)',
        padding: '6px 14px',
        border: '1px solid var(--border-glow)',
        borderRadius: 999,
        display: 'inline-block',
        alignSelf: center ? 'center' : 'flex-start',
      }}
    >
      {children}
    </div>
  )
}

// Mobile-only replacement for the fixed-canvas diagram: a plain vertical
// list in the same step order, each row tappable to expand its description.
// Reuses the same `active` state as the desktop canvas so switching between
// breakpoints (e.g. rotating a tablet) never loses the current selection.
function MobileStepList({ activeId, onSelect }: { activeId: string; onSelect: (s: Step) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {orderedIds.map((id) => {
        const step = allSteps[id]
        const isActive = activeId === id
        const isDecision = step.kind === 'decision'
        return (
          <button
            key={id}
            onClick={() => onSelect(step)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              width: '100%',
              textAlign: 'left',
              padding: '12px 14px',
              borderRadius: 10,
              border: isActive ? '1px solid var(--accent-blue-bright)' : '1px solid var(--border-subtle)',
              background: isActive ? 'rgba(13,100,150,0.22)' : 'var(--bg-card)',
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 26,
                height: 26,
                borderRadius: isDecision ? 7 : '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDecision ? 'rgba(162,89,230,0.22)' : 'rgba(47,139,240,0.16)',
                color: isDecision ? '#c084fc' : 'var(--accent-blue-bright)',
                fontSize: 12,
              }}
            >
              {isDecision ? '?' : step.icon}
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: isActive ? '#fff' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                {step.label.replace('\n', ' ')}
              </span>
              {isActive && (
                <span style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {step.desc}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}

type R = { x: number; y: number; w: number; h: number }

// Every node is positioned as a % of the CW x CH design canvas, exactly like
// the SVG's viewBox scaling — this keeps buttons locked to the arrows
// regardless of how wide the actual rendered container ends up being.
function pctRect(r: R) {
  return {
    left: `${(r.x / CW) * 100}%`,
    top: `${(r.y / CH) * 100}%`,
    width: `${(r.w / CW) * 100}%`,
    height: `${(r.h / CH) * 100}%`,
  }
}

function Node({ step, rect, isActive, onClick }: { step: Step; rect: R; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="workflow-node"
      style={{
        position: 'absolute',
        ...pctRect(rect),
        borderRadius: 8,
        border: isActive ? '1px solid var(--accent-blue-bright)' : '1px solid var(--border-subtle)',
        background: isActive ? 'rgba(13,100,150,0.28)' : 'var(--bg-card)',
        color: isActive ? '#fff' : 'var(--text-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '2px 6px',
        textAlign: 'center',
        zIndex: 2,
        overflow: 'visible',
        boxSizing: 'border-box',
        transition: 'transform 0.15s ease, border-color 0.15s ease, background 0.15s ease',
        boxShadow: isActive ? '0 0 16px rgba(13,100,150,0.55)' : 'none',
      }}
    >
      {step.icon}
      <span style={{ fontSize: 10, fontWeight: 700, lineHeight: 1.15, whiteSpace: 'pre-line' }}>{step.label}</span>
      <style>{`
        .workflow-node:hover { transform: scale(1.06); border-color: var(--accent-blue-bright) !important; }
      `}</style>
    </button>
  )
}

function DecisionNode({ step, rect, isActive, onClick }: { step: Step; rect: R; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="workflow-node decision-pulse"
      style={{
        position: 'absolute',
        ...pctRect(rect),
        boxSizing: 'border-box',
        clipPath: 'polygon(50% 2%, 98% 50%, 50% 98%, 2% 50%)',
        border: isActive ? '1px solid var(--accent-blue-bright)' : '1px solid var(--border-subtle)',
        background: isActive ? 'rgba(162,89,230,0.28)' : 'rgba(162,89,230,0.14)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 8,
        zIndex: 2,
        transition: 'transform 0.15s ease',
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 700, whiteSpace: 'pre-line', lineHeight: 1.2 }}>{step.label}</span>
      <style>{`
        .decision-pulse { animation: decisionPulse 2.6s ease-in-out infinite; }
        @keyframes decisionPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(162,89,230,0); }
          50% { box-shadow: 0 0 16px rgba(162,89,230,0.45); }
        }
        @media (prefers-reduced-motion: reduce) {
          .decision-pulse { animation: none; }
        }
      `}</style>
    </button>
  )
}

/* --- moving flow-dot, travels along an SVG path on a loop --- */

function FlowDot({ d, color = 'var(--accent-blue-bright)', duration = 2.4, delay = 0 }: { d: string; color?: string; duration?: number; delay?: number }) {
  return (
    <circle r="3.2" fill={color} className="flow-dot" opacity={0.95}>
      <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" path={d} />
    </circle>
  )
}

/* --- connector primitives, all drawn in the shared SVG coordinate space --- */

function Straight({ from, to, speed = 2.2 }: { from: R; to: R; speed?: number }) {
  const x1 = right(from)
  const y1 = cy(from)
  const x2 = to.x
  const y2 = cy(to)
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent-blue-bright)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <FlowDot d={`M ${x1},${y1} L ${x2},${y2}`} duration={speed} />
    </g>
  )
}

function BranchRight({ from, to, label, color, speed = 2 }: { from: R; to: R; label: string; color: string; speed?: number }) {
  const x1 = right(from)
  const y1 = cy(from)
  const x2 = to.x
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={cy(to)} stroke="var(--accent-blue-bright)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <FlowDot d={`M ${x1},${y1} L ${x2},${cy(to)}`} duration={speed} color={color} />
      <text x={(x1 + x2) / 2} y={y1 - 8} fontSize="10" fontWeight={700} fill={color} textAnchor="middle">
        {label}
      </text>
    </g>
  )
}

function BranchDown({ from, to, label, color, speed = 2.4 }: { from: R; to: R; label: string; color: string; speed?: number }) {
  const x1 = cx(from)
  const y1 = bottom(from)
  const x2 = cx(to)
  const y2 = to.y
  const midY = (y1 + y2) / 2
  const d = `M ${x1},${y1} L ${x1},${midY} L ${x2},${midY} L ${x2},${y2}`
  return (
    <g>
      <polyline points={`${x1},${y1} ${x1},${midY} ${x2},${midY} ${x2},${y2}`} fill="none" stroke="var(--accent-blue-bright)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <FlowDot d={d} duration={speed} color={color} />
      <text x={x1 + 10} y={y1 + 14} fontSize="10" fontWeight={700} fill={color}>
        {label}
      </text>
    </g>
  )
}

function LoopBack({ from, to, label, speed = 2.8 }: { from: R; to: R; label: string; speed?: number }) {
  const x1 = cx(from)
  const y1 = from.y
  const x2 = cx(to)
  const y2 = to.y
  const midY = y1 - 30
  const d = `M ${x1},${y1} L ${x1},${midY} L ${x2},${midY} L ${x2},${y2}`
  return (
    <g>
      <polyline points={`${x1},${y1} ${x1},${midY} ${x2},${midY} ${x2},${y2}`} fill="none" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowRed)" />
      <FlowDot d={d} duration={speed} color="#ef4444" />
      <text x={(x1 + x2) / 2} y={midY - 6} fontSize="9.5" fontWeight={700} fill="#ef4444" textAnchor="middle">
        {label}
      </text>
    </g>
  )
}

function SplitRight({ from, toTop, toBottom, speed = 2.4 }: { from: R; toTop: R; toBottom: R; speed?: number }) {
  const x1 = right(from)
  const y1 = cy(from)
  const midX = x1 + 18
  const dTop = `M ${x1},${y1} L ${midX},${y1} L ${midX},${cy(toTop)} L ${toTop.x},${cy(toTop)}`
  const dBottom = `M ${x1},${y1} L ${midX},${y1} L ${midX},${cy(toBottom)} L ${toBottom.x},${cy(toBottom)}`
  return (
    <g>
      <polyline points={`${x1},${y1} ${midX},${y1} ${midX},${cy(toTop)} ${toTop.x},${cy(toTop)}`} fill="none" stroke="var(--accent-blue-bright)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <polyline points={`${x1},${y1} ${midX},${y1} ${midX},${cy(toBottom)} ${toBottom.x},${cy(toBottom)}`} fill="none" stroke="var(--accent-blue-bright)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <FlowDot d={dTop} duration={speed} />
      <FlowDot d={dBottom} duration={speed} delay={speed / 2} />
    </g>
  )
}

function MergeRight({ from, to, speed = 2.6 }: { from: R[]; to: R; speed?: number }) {
  const midX = to.x - 20
  return (
    <g>
      {from.map((f, i) => {
        const d = `M ${right(f)},${cy(f)} L ${midX},${cy(f)} L ${midX},${cy(to)} L ${to.x},${cy(to)}`
        return (
          <g key={i}>
            <polyline
              points={`${right(f)},${cy(f)} ${midX},${cy(f)} ${midX},${cy(to)} ${to.x},${cy(to)}`}
              fill="none"
              stroke="var(--accent-blue-bright)"
              strokeWidth="1.5"
              markerEnd={i === from.length - 1 ? 'url(#arrow)' : undefined}
            />
            <FlowDot d={d} duration={speed} delay={i * (speed / from.length)} />
          </g>
        )
      })}
    </g>
  )
}

function Polyline({ points, opacity = 1, speed = 3 }: { points: [number, number][]; opacity?: number; speed?: number }) {
  const d = `M ${points.map(([x, y]) => `${x},${y}`).join(' L ')}`
  return (
    <g>
      <polyline
        points={points.map(([x, y]) => `${x},${y}`).join(' ')}
        fill="none"
        stroke="var(--accent-blue-bright)"
        strokeWidth="1.5"
        markerEnd="url(#arrow)"
        opacity={opacity}
      />
      <FlowDot d={d} duration={speed} />
    </g>
  )
}

/* --- ECL output ring, segmented to match the five feeder tracks --- */

function EclRing() {
  const segments = [
    { color: '#2f8bf0', pct: 22 },
    { color: '#a259e6', pct: 18 },
    { color: '#22b8a0', pct: 18 },
    { color: '#4ade80', pct: 18 },
    { color: '#f59e0b', pct: 24 },
  ]
  const radius = 46
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <div style={{ position: 'relative', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 120 120" style={{ position: 'absolute', inset: 0 }}>
        <circle cx="60" cy="60" r={radius} fill="none" stroke="var(--border-subtle)" strokeWidth="14" />
        {segments.map((s, i) => {
          const len = (s.pct / 100) * circumference
          const el = (
            <circle
              key={i}
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={s.color}
              strokeWidth="14"
              strokeDasharray={`${len} ${circumference - len}`}
              strokeDashoffset={-offset}
              transform="rotate(-90 60 60)"
            />
          )
          offset += len
          return el
        })}
        <g style={{ transformOrigin: '60px 60px' }} className="ecl-ring-spin">
          <circle cx="60" cy="14" r="3" fill="#fff" opacity={0.9} />
        </g>
      </svg>
      <span style={{ fontSize: 14, fontWeight: 700, color: '#fff', textAlign: 'center', fontFamily: 'var(--font-display)', zIndex: 1 }}>
        ECL
        <br />
        Estimation
      </span>
      <style>{`
        .ecl-ring-spin {
          animation: eclSpin 6s linear infinite;
        }
        @keyframes eclSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ecl-ring-spin { animation: none; }
        }
      `}</style>
    </div>
  )
}