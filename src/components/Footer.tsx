import { Link } from 'react-router-dom'
import Logo from './Logo'
import { company } from '../content/siteContent'
import { IconMail, IconPhone, IconLinkedIn, IconFacebook } from './icons'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Industries We Serve', to: '/industries' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'IFRS 9 Excel Add-In', to: '/services#ifrs9-add-in' },
      { label: 'Risk Modeling', to: '/services#risk-modeling' },
      { label: 'Automation Services', to: '/services#automation' },
      { label: 'Model Validation & Stress Testing', to: '/services#validation-stress-testing' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { label: 'Request a Demo', to: '/contact' },
      { label: 'Partnership Program', to: '/about#partnership' },
      { label: 'Get Certified', to: '/about#certification' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 64, background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 40,
            paddingBottom: 48,
          }}
          className="footer-grid"
        >
          <div>
            <Logo size={84} />
            <p style={{ marginTop: 18, fontSize: 14, color: 'var(--text-secondary)', maxWidth: 280 }}>
              Technology-driven risk management solutions for enhanced operational efficiency and
              compliance in financial risk management processes.
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`mailto:${company.email}`} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                <IconMail size={16} /> {company.email}
              </a>
              <a href={`tel:${company.phone.replace(/\s+/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                <IconPhone size={16} /> {company.phone}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p style={{ color: '#fff', fontWeight: 700, marginBottom: 18, fontSize: 14.5 }}>{col.title}</p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{
                    display: 'block',
                    color: 'var(--text-muted)',
                    fontSize: 13.5,
                    marginBottom: 12,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 24,
            paddingBottom: 32,
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            © {company.year}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <SocialIcon type="linkedin" />
            <SocialIcon type="facebook" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

function SocialIcon({ type }: { type: 'linkedin' | 'facebook' }) {
  return (
    <a
      href="#"
      aria-label={type}
      style={{
        width: 34,
        height: 34,
        borderRadius: '50%',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
      }}
    >
      {type === 'linkedin' ? <IconLinkedIn /> : <IconFacebook />}
    </a>
  )
}
