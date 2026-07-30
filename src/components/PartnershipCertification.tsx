import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { partnership, certification } from '../content/siteContent'
import { images, img } from '../content/images'
import { IconArrowRight, IconUsers, IconShield } from './icons'

export default function PartnershipCertification() {
  return (
    <section className="section">
      <div className="container">
        <div className="pc-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 32, alignItems: 'stretch' }}>
          <div
            className="glow-border"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              minHeight: 220,
            }}
          >
            <img
              src={img(images.handshake, 700)}
              srcSet={`${img(images.handshake, 500)} 500w, ${img(images.handshake, 900)} 900w`}
              sizes="(max-width: 820px) 100vw, 400px"
              alt="Two business partners shaking hands on an agreement"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(200deg, rgba(13,100,150,0.2) 0%, rgba(6,10,20,0.15) 60%)',
              }}
            />
          </div>

          <div className="pc-panels" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Link to="/partnership">
            <div style={{ scrollMarginTop: 130 }}>
              <Panel icon={<IconUsers size={22} />} title={partnership.title} body={partnership.body} cta="Explore Partnership" ctaLink="/partnership" />
            </div>
            </Link>
            <div id="certification" style={{ scrollMarginTop: 130 }}>
              <Panel icon={<IconShield size={22} />} title={certification.title} body={certification.body} cta="Get Certified" ctaLink="/certification" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .pc-grid { grid-template-columns: 1fr !important; }
          .pc-panels { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Panel({ icon, title, body, cta, ctaLink }: { icon: ReactNode; title: string; body: string; cta: string; ctaLink: string }) {
  return (
    <div className="card glow-border" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="icon-badge">{icon}</div>
      <h3 style={{ fontSize: 19 }}>{title}</h3>
      <p style={{ fontSize: 14.5 }}>{body}</p>
      <Link to={ctaLink} className="btn-ghost" style={{ marginTop: 6 }}>
        {cta} <IconArrowRight size={14} />
      </Link>
    </div>
  )
}
