import { whyChooseUs } from '../content/siteContent'
import { images, img } from '../content/images'
import { IconLock, IconExcel, IconGauge, IconLayers, IconShield, IconUsers } from './icons'

const iconMap: Record<string, (props: { size?: number }) => JSX.Element> = {
  lock: IconLock,
  excel: IconExcel,
  gauge: IconGauge,
  layers: IconLayers,
  shield: IconShield,
  users: IconUsers,
}

export default function WhyChooseUs() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, alignItems: 'center' }}>
          <div
            className="glow-border"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              aspectRatio: '3 / 4',
              position: 'relative',
            }}
          >
            <img
              src={img(images.laptopWork, 700)}
              srcSet={`${img(images.laptopWork, 500)} 500w, ${img(images.laptopWork, 900)} 900w`}
              sizes="(max-width: 900px) 100vw, 500px"
              alt="Finance professional working through calculations on a laptop"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(200deg, rgba(13,100,150,0.16) 0%, rgba(6,10,20,0.1) 55%)',
              }}
            />
          </div>

          <div>
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Built for how risk teams actually work</h2>
            <p className="section-subtitle">
              Every part of the ProbMatrix Add-In is designed around one goal: getting you to an
              audit-ready number faster, without adding new tools or new risk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
              {whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <div key={item.title} style={{ display: 'flex', gap: 16 }}>
                    <div className="icon-badge" style={{ marginTop: 2 }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15.5 }}>{item.title}</h3>
                      <p style={{ marginTop: 5, fontSize: 13.5 }}>{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
