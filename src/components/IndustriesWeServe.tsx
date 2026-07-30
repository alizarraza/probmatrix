import { industries } from '../content/siteContent'
import { IconBank, IconUsers, IconGlobe, IconTrendUp, IconShield, IconClipboard } from './icons'

const iconMap: Record<string, (props: { size?: number }) => JSX.Element> = {
  bank: IconBank,
  users: IconUsers,
  globe: IconGlobe,
  trendUp: IconTrendUp,
  shield: IconShield,
  clipboard: IconClipboard,
}

export default function IndustriesWeServe() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="section-title">
            Faster IFRS 9 and credit risk, wherever you sit in financial services
          </h2>
          <p className="section-subtitle">
            Built for banks, MFIs, DFI, NBFCs, insurers, and advisors — with a workflow that fits
            each portfolio's scale and reporting cycle.
          </p>
        </div>

        <div className="grid-3">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon]
            return (
              <div key={ind.title} className="card card-hover">
                <div className="icon-badge">
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: 17, marginTop: 18 }}>{ind.title}</h3>
                <p style={{ marginTop: 8, fontSize: 14 }}>{ind.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
