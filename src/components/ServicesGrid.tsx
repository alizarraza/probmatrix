import { Link } from 'react-router-dom'
import { services } from '../content/siteContent'
import {
  IconExcel,
  IconLayers,
  IconClipboard,
  IconGauge,
  IconChart,
  IconUsers,
  IconArrowRight,
} from './icons'

const iconMap: Record<string, (props: { size?: number }) => JSX.Element> = {
  excel: IconExcel,
  layers: IconLayers,
  clipboard: IconClipboard,
  gauge: IconGauge,
  chart: IconChart,
  users: IconUsers,
}

export default function ServicesGrid({
  eyebrow = 'What We Offer',
  title = 'Services built for risk teams',
  subtitle = 'Explore our risk management solutions, automation tools, and consulting services tailored for your business.',
  linkToDetail = false,
}: {
  eyebrow?: string
  title?: string
  subtitle?: string
  linkToDetail?: boolean
}) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div className="grid-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.slug} id={s.slug} className="card card-hover" style={{ scrollMarginTop: 130 }}>
                <div className="icon-badge">
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: 18, marginTop: 20 }}>{s.title}</h3>
                <p style={{ marginTop: 10, fontSize: 14.5 }}>{s.summary}</p>
                {linkToDetail && (
                  <Link
                    to={`/services#${s.slug}`}
                    className="btn-ghost"
                    style={{ marginTop: 18, fontSize: 14 }}
                  >
                    Learn more <IconArrowRight size={14} />
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
