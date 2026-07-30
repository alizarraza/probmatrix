import { aboutPage, leadership } from '../content/siteContent'
import Testimonials from '../components/Testimonials'
import PartnershipCertification from '../components/PartnershipCertification'
import FinalCTA from '../components/FinalCTA'
import { IconCheckCircle, IconMail, IconPhone, IconUsers } from '../components/icons'

export default function About() {
  return (
    <>
      <section
        style={{
          padding: '90px 0 70px',
          background: 'radial-gradient(ellipse 800px 400px at 50% -10%, rgba(13,100,150,0.18) 0%, rgba(11,40,70,0) 65%), var(--bg-primary)',
        }}
      >
        <div className="container" style={{ maxWidth: 780 }}>
          <span className="section-eyebrow">{aboutPage.eyebrow}</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.4vw, 44px)' }}>{aboutPage.title}</h1>
          <p style={{ marginTop: 20, fontSize: 16.5, color: 'var(--text-secondary)' }}>{aboutPage.intro}</p>
          <p style={{ marginTop: 16, fontSize: 15, color: 'var(--text-secondary)' }}>{aboutPage.team}</p>
        </div>
      </section>

      {/* Vision & Mission */}
<section className="section" style={{ paddingTop: 0 }}>
  <div className="container">
    <div
      className="grid-2 mission-grid"
      style={{ alignItems: "stretch", gap: 24 }}
    >
      {/* Vision */}
      <div className="card glow-border">
        <span className="section-eyebrow">Our Vision</span>

        <h3
          style={{
            margin: "12px 0 18px",
            fontSize: 28,
            lineHeight: 1.3,
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Empowering Financial Institutions with Transparent Risk Intelligence
        </h3>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          {aboutPage.vision}
        </p>
      </div>

      {/* Mission */}
      <div className="card">
        <span className="section-eyebrow">Our Mission</span>

        <p
          style={{
            marginTop: 16,
            marginBottom: 22,
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          {aboutPage.mission}
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {aboutPage.missionPoints.map((point) => (
            <li
              key={point}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              {/* <IconCheckCircle
                size={18}
                style={{
                  color: "var(--accent)",
                  flexShrink: 0,
                  marginTop: 3,
                }}
              /> */}

              <span
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p
      style={{
        marginTop: 36,
        maxWidth: 850,
        fontSize: 16,
        lineHeight: 1.8,
        color: "var(--text-secondary)",
      }}
    >
      {aboutPage.approachIntro}
    </p>
  </div>

  <style>{`
    .mission-grid {
      align-items: stretch;
    }

    @media (max-width: 820px) {
      .mission-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `}</style>
</section>

      {/* Capabilities */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What Sets Us Apart</span>
            <h2 className="section-title">Capabilities behind everything we build</h2>
          </div>
          <div className="grid-4">
            {aboutPage.pillars.map((p) => (
              <div key={p.title} className="card card-hover">
                <IconCheckCircle size={20} />
                <h3 style={{ fontSize: 16, marginTop: 16 }}>{p.title}</h3>
                <p style={{ marginTop: 8, fontSize: 13.5 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-title">The people behind ProbMatrix</h2>
          </div>
          <div className="grid-2 leadership-grid">
            {leadership.map((person) => (
              <div key={person.name} className="card card-hover" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <IconUsers size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17 }}>{person.name}</h3>
                  <p style={{ marginTop: 2, fontSize: 13.5, color: 'var(--accent-blue-bright)', fontWeight: 600 }}>
                    {person.role}
                  </p>
                  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <a href={`mailto:${person.email}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                      <IconMail size={14} /> {person.email}
                    </a>
                    <a href={`tel:${person.phone.replace(/\s+/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                      <IconPhone size={14} /> {person.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 720px) {
            .leadership-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
{/* Location */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Location</span>
            <h2 className="section-title">Located in a Financial Hub</h2>
          </div>
          <div className="grid-2 location-grid" style={{ alignItems: 'stretch', gap: 24 }}>
            {/* Details card */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 10 }}>Office</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  Office No. 325, 3rd Floor, Ruby Center,<br />
                  I.I. Chundrigar Road, Karachi
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 10 }}>Hours</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  9 AM – 9 PM
                </p>
              </div>
            </div>

            {/* Map card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', minHeight: 280 }}>
              <iframe
                title="ProbMatrix Office Location"
                src="https://www.google.com/maps?q=Ruby+Center,+I.I.+Chundrigar+Road,+Karachi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 280, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 720px) {
            .location-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
      <Testimonials />
      <PartnershipCertification />
      <FinalCTA
        title="Want to see it on your own portfolio data?"
        subtitle="Request a walkthrough of the IFRS 9 Add-In, or talk to us about a custom risk management engagement."
      />
    </>
  )
}
