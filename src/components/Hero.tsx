import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../content/servicesContent'
import { heroStats } from '../content/siteContent'
import { IconArrowRight, IconGauge, IconExcel, IconChart, IconLayers } from './icons'

const AUTO_ADVANCE_MS = 6500

const slideThemes = [
  { icon: IconGauge, badgeBg: 'rgba(13,100,150,0.14)', badgeBorder: 'var(--border-glow)', accent: 'var(--accent-blue-bright)', dot: '#3ddc84' },
  { icon: IconExcel, badgeBg: 'rgba(0,59,117,0.4)', badgeBorder: 'rgba(13,100,150,0.55)', accent: '#4fb2e0', dot: '#4fb2e0' },
  { icon: IconChart, badgeBg: 'rgba(255,255,255,0.07)', badgeBorder: 'rgba(255,255,255,0.28)', accent: '#ffffff', dot: '#ffffff' },
  { icon: IconLayers, badgeBg: 'rgba(61,220,132,0.1)', badgeBorder: 'rgba(61,220,132,0.4)', accent: '#3ddc84', dot: '#3ddc84' },
]

const backdrops = [BgTunnel, BgSpreadsheet, BgNetwork, BgWaves]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[index]
  const theme = slideThemes[index] ?? slideThemes[0]
  const ThemeIcon = theme.icon

  const floatingTags = [
    { v: 'PD 1.94%', top: '18%', left: '9%' },
    { v: 'LGD 38.6%', top: '15%', left: '80%' },
    { v: 'EAD / EIR', top: '62%', left: '6%' },
    { v: 'ECL 4.82%', top: '66%', left: '86%' },
  ]

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 460,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '90px 20px 50px',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Crossfading backgrounds — one distinct pattern per slide */}
      {backdrops.map((Backdrop, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        >
          <Backdrop />
        </div>
      ))}

      {index === 0 &&
        floatingTags.map((t, i) => (
          <span
            key={t.v}
            className="hero-tag"
            style={{
              position: 'absolute',
              top: t.top,
              left: t.left,
              zIndex: 2,
              fontFamily: 'monospace',
              fontSize: 12.5,
              padding: '5px 12px',
              borderRadius: 999,
              border: '1px solid var(--border-glow)',
              background: 'rgba(10,15,28,0.6)',
              color: 'var(--accent-blue-bright)',
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {t.v}
          </span>
        ))}

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 780, width: '100%' }}>
        <div key={index} className="hero-slide-fade">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              borderRadius: 999,
              border: `1px solid ${theme.badgeBorder}`,
              background: theme.badgeBg,
              marginBottom: 18,
              transition: 'all 0.4s ease',
            }}
          >
            <ThemeIcon size={13} />
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: theme.dot,
                boxShadow: `0 0 8px ${theme.dot}`,
              }}
            />
            <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--text-secondary)' }}>
              {slide.eyebrow}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 4.6vw, 50px)', color: '#fff', letterSpacing: '-0.02em' }}>
            {slide.title}
          </h1>

          <p
            style={{
              marginTop: 14,
              fontSize: 16.5,
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: 620,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {slide.subtitle}
          </p>

          {slide.bullets && (
            <div style={{ marginTop: 14, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              {slide.bullets.map((b) => (
                <span
                  key={b}
                  style={{
                    fontSize: 12.5,
                    padding: '7px 16px',
                    borderRadius: 999,
                    border: `1px solid ${theme.badgeBorder}`,
                    background: theme.badgeBg,
                    color: theme.accent === '#ffffff' ? 'var(--text-secondary)' : theme.accent,
                    fontWeight: 600,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          <div style={{ marginTop: 22, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={slide.primaryCta.to} className="btn-primary">
              {slide.primaryCta.label} <IconArrowRight size={16} />
            </Link>
            {slide.secondaryCta && (
              <Link to={slide.secondaryCta.to} className="btn-secondary">
                {slide.secondaryCta.label}
              </Link>
            )}
          </div>

          {slide.showStats && (
            <div style={{ marginTop: 24, display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
              {heroStats.map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(22px, 2.6vw, 30px)',
                      fontWeight: 700,
                      color: 'var(--accent-blue-bright)',
                    }}
                  >
                    {s.value}
                  </p>
                  <p style={{ marginTop: 4, fontSize: 12, letterSpacing: '0.03em', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Slide dots */}
        <div style={{ marginTop: 26, display: 'flex', gap: 10, justifyContent: 'center' }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              style={{
                width: i === index ? 26 : 8,
                height: 8,
                borderRadius: 999,
                background: i === index ? slideThemes[i].accent : 'var(--border-strong)',
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
        aria-label="Previous slide"
        className="hero-nav-arrow"
        style={{ left: 18, borderColor: theme.badgeBorder }}
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % heroSlides.length)}
        aria-label="Next slide"
        className="hero-nav-arrow"
        style={{ right: 18, borderColor: theme.badgeBorder }}
      >
        ›
      </button>

      <style>{`
        @keyframes heroTagFloat {
          0%, 100% { transform: translateY(0); opacity: 0.75; }
          50% { transform: translateY(-9px); opacity: 1; }
        }
        .hero-tag { animation: heroTagFloat 5s ease-in-out infinite; }
        @media (max-width: 780px) {
          .hero-tag { display: none; }
        }
        @keyframes heroSlideFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-slide-fade { animation: heroSlideFade 0.5s ease; }
        .hero-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-glow);
          background: rgba(10,15,28,0.55);
          color: #fff;
          font-size: 22px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.4s ease;
        }
        @media (max-width: 700px) {
          .hero-nav-arrow { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-tag, .hero-slide-fade { animation: none !important; }
        }
      `}</style>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Background 1 — Tunnel: converging perspective lines (default slide) */
/* ------------------------------------------------------------------ */
function BgTunnel() {
  const vpX = 700
  const vpY = 210
  const spokes = [140, 280, 420, 570, 730, 900]
  const rings = [640, 560, 480, 410, 345, 285]

  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(900px 520px at 50% 18%, rgba(13,100,150,0.28) 0%, rgba(11,40,70,0) 68%)',
        }}
      />
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="spokeFade" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#003b75" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0d6496" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ringFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0d6496" stopOpacity="0" />
            <stop offset="50%" stopColor="#0d6496" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0d6496" stopOpacity="0" />
          </linearGradient>
        </defs>
        {spokes.map((s) => (
          <line key={`l${s}`} x1={vpX - s} y1={700} x2={vpX} y2={vpY} stroke="url(#spokeFade)" strokeWidth="1" />
        ))}
        {spokes.map((s) => (
          <line key={`r${s}`} x1={vpX + s} y1={700} x2={vpX} y2={vpY} stroke="url(#spokeFade)" strokeWidth="1" />
        ))}
        {rings.map((y, i) => {
          const half = (y - vpY) * 1.55 + 40
          return <line key={`ring${i}`} x1={vpX - half} y1={y} x2={vpX + half} y2={y} stroke="url(#ringFade)" strokeWidth="1" />
        })}
        {[[vpX - 90, 420], [vpX + 130, 380], [vpX - 200, 500], [vpX + 60, 300], [vpX + 240, 470]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={2.4} fill="#0d6496" fillOpacity={0.85} />
        ))}
        <circle cx={vpX} cy={vpY} r="70" stroke="#0d6496" strokeOpacity="0.45" fill="none" />
        <circle cx={vpX} cy={vpY} r="130" stroke="#0d6496" strokeOpacity="0.3" fill="none" />
        <circle cx={vpX} cy={vpY} r="200" stroke="#0d6496" strokeOpacity="0.2" fill="none" />
      </svg>
      <Vignette />
    </>
  )
}

/* --------------------------------------------------------------------- */
/* Background 2 — Spreadsheet grid with highlighted cells (IFRS 9 Add-In) */
/* --------------------------------------------------------------------- */
function BgSpreadsheet() {
  const cols = 16
  const rows = 9
  const cellW = 1400 / cols
  const cellH = 700 / rows
  const highlighted = [
    [3, 2], [4, 2], [5, 2],
    [8, 4], [9, 4],
    [11, 6], [12, 6], [13, 6],
    [3, 6], [4, 6],
  ]

  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(1000px 560px at 50% 15%, rgba(0,59,117,0.34) 0%, rgba(11,40,70,0) 68%)',
        }}
      />
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: cols + 1 }).map((_, i) => (
          <line key={`v${i}`} x1={i * cellW} y1={0} x2={i * cellW} y2={700} stroke="#0d6496" strokeOpacity={0.28} strokeWidth="1" />
        ))}
        {Array.from({ length: rows + 1 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * cellH} x2={1400} y2={i * cellH} stroke="#0d6496" strokeOpacity={0.28} strokeWidth="1" />
        ))}
        {highlighted.map(([c, r], i) => (
          <rect
            key={i}
            x={c * cellW + 2}
            y={r * cellH + 2}
            width={cellW - 4}
            height={cellH - 4}
            fill="#0d6496"
            fillOpacity={0.22}
            stroke="#4fb2e0"
            strokeOpacity={0.5}
            strokeWidth="1"
          />
        ))}
      </svg>
      <Vignette />
    </>
  )
}

/* -------------------------------------------------------------- */
/* Background 3 — Node network graph (CredX credit-risk platform)  */
/* -------------------------------------------------------------- */
function BgNetwork() {
  const nodes = [
    [200, 180], [420, 120], [640, 220], [860, 140], [1080, 200], [1250, 320],
    [150, 400], [380, 480], [600, 420], [840, 500], [1040, 440], [1220, 540],
    [300, 300], [700, 320], [950, 300],
  ]
  const edges: [number, number][] = [
    [0, 2], [2, 4], [4, 5], [1, 2], [2, 13], [13, 14], [14, 4],
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [7, 12], [12, 13], [12, 2],
    [3, 4], [1, 12],
  ]

  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(1000px 560px at 50% 20%, rgba(255,255,255,0.1) 0%, rgba(11,40,70,0) 70%)',
        }}
      />
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="#ffffff"
            strokeOpacity={0.32}
            strokeWidth="1"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.6} fill={i % 3 === 0 ? '#ffffff' : '#0d6496'} fillOpacity={0.85} />
        ))}
      </svg>
      <Vignette />
    </>
  )
}

/* ------------------------------------------------------------ */
/* Background 4 — Flowing process arcs (Services / process flow)  */
/* ------------------------------------------------------------ */
function BgWaves() {
  const arcs = [
    'M -100 560 Q 700 380 1500 560',
    'M -100 460 Q 700 300 1500 460',
    'M -100 630 Q 700 480 1500 630',
    'M -100 350 Q 700 220 1500 350',
  ]

  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(1000px 560px at 50% 85%, rgba(61,220,132,0.16) 0%, rgba(11,40,70,0) 70%)',
        }}
      />
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="waveFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0d6496" stopOpacity="0" />
            <stop offset="50%" stopColor="#3ddc84" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0d6496" stopOpacity="0" />
          </linearGradient>
        </defs>
        {arcs.map((d, i) => (
          <path key={i} d={d} stroke="url(#waveFade)" strokeWidth="1.4" fill="none" />
        ))}
        {[[300, 420], [700, 300], [1050, 420], [500, 500], [900, 520]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3} fill="#3ddc84" fillOpacity={0.7} />
        ))}
      </svg>
      <Vignette />
    </>
  )
}

function Vignette() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(11,40,70,0) 55%, var(--bg-primary) 100%)',
      }}
    />
  )
}