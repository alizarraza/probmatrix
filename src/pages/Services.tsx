import { Link } from 'react-router-dom'
import { useState } from 'react'
import ServicesGrid from '../components/ServicesGrid'
import Architecture from '../components/Architecture'
import IFRS9Workflow from '../components/IFRS9Workflow'
import FinalCTA from '../components/FinalCTA'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
import { images, img } from '../content/images'
import {
  ifrs9AdvisoryIntro,
  expertiseAreas,
  engagementTypes,
  engagementApplicability,
  servicesProcess,
} from '../content/servicesContent'
import { IconCheckCircle, IconArrowRight } from '../components/icons'
import ExpertForm from '../components/forms/ExpertForm'
import { Helmet } from 'react-helmet-async'

export default function Services() {
  const [expertOpen, setExpertOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>IFRS 9 Advisory & Consulting Services | ProbMatrix</title>
        <meta
          name="description"
          content="ProbMatrix provides IFRS 9 advisory and consulting services, including ECL modeling, model validation, implementation, regulatory compliance, and automation."
        />
      </Helmet>
      {/* Hero */}
      <section
        style={{
          padding: '90px 0 40px',
          background: 'radial-gradient(ellipse 800px 400px at 50% -10%, rgba(13,100,150,0.18) 0%, rgba(11,40,70,0) 65%), var(--bg-primary)',
        }}
      >
        <div className="container">
          <div className="services-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">{ifrs9AdvisoryIntro.eyebrow}</span>
              <h1 style={{ fontSize: 'clamp(28px, 4.2vw, 42px)' }}>{ifrs9AdvisoryIntro.title}</h1>
              <p style={{ marginTop: 20, fontSize: 16.5, color: 'var(--text-secondary)' }}>{ifrs9AdvisoryIntro.body}</p>
            </div>

            <div
              className="glow-border"
              style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4 / 3', position: 'relative' }}
            >
              <img
                src={img(images.analyticsLaptop, 700)}
                srcSet={`${img(images.analyticsLaptop, 500)} 500w, ${img(images.analyticsLaptop, 900)} 900w`}
                sizes="(max-width: 900px) 100vw, 500px"
                alt="Performance and risk analytics displayed on a laptop screen"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .services-hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* 3x2 general services grid */}
      <ServicesGrid eyebrow="What We Offer" title="Every service, in one place" subtitle="" linkToDetail={false} />

      {/* End-to-end IFRS 9 expertise */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">End-to-End IFRS 9 Expertise</span>
            <h2 className="section-title">From policy to production</h2>
          </div>
          <div className="grid-3">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="card card-hover">
                <h3 style={{ fontSize: 16.5 }}>{area.title}</h3>
                <ul style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {area.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                      <IconCheckCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement types */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">IFRS 9 General Approach — Advisory</span>
            <h2 className="section-title">Engagement types</h2>
          </div>
          <div className="grid-2 engagement-grid" style={{ gap: 24 }}>
            {engagementTypes.map((eng) => (
              <div key={eng.type} className="card glow-border">
                <h3 style={{ fontSize: 17 }}>{eng.type}</h3>
                <p style={{ marginTop: 10, fontSize: 12.5, fontWeight: 700, color: 'var(--accent-blue-bright)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Scope
                </p>
                <ul style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {eng.scope.map((s) => (
                    <li key={s} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                      <IconCheckCircle size={14} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 14, fontSize: 12.5, fontWeight: 700, color: 'var(--accent-blue-bright)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Deliverables
                </p>
                <p style={{ marginTop: 8, fontSize: 13 }}>{eng.deliverables}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 26, fontSize: 13.5, color: 'var(--text-muted)' }}>{engagementApplicability}</p>
        </div>
        <style>{`
          @media (max-width: 820px) {
            .engagement-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Services process */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">How We Engage</span>
            <h2 className="section-title">{servicesProcess.title}</h2>
          </div>
          <div className="grid-2 process-grid" style={{ gap: 24 }}>
            {servicesProcess.paths.map((path) => (
              <div key={path.label} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <span className="badge-pill" style={{ alignSelf: 'flex-start' }}>{path.label}</span>
                {path.steps.map((step) => (
                  <div key={step.title} className="card glow-border" style={{ padding: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: 14.5 }}>{step.title}</h4>
                      {'badge' in step && step.badge && (
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#3ddc84', border: '1px solid rgba(61,220,132,0.4)', borderRadius: 999, padding: '2px 10px' }}>
                          {step.badge}
                        </span>
                      )}
                    </div>
                    <ul style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {step.items.map((item) => (
                        <li key={item} style={{ display: 'flex', gap: 8, fontSize: 12.5, color: 'var(--text-secondary)' }}>
                          <IconCheckCircle size={13} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 22, fontSize: 12.5, color: 'var(--text-muted)' }}>{servicesProcess.note}</p>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .process-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>


      <Architecture />

      {/* Email Our Expert */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header centered">
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              Talk To Us
            </span>
            <h2 className="section-title">Email Our Expert</h2>
            <p className="section-subtitle">Share your requirements and we'll get back to you with next steps.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="button" className="btn-primary" onClick={() => setExpertOpen(true)}>
              Email Our Expert <IconArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="section">
        <div className="container">
          <div
            className="glow-border"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '48px 40px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(0,59,117,0.25), rgba(13,100,150,0.15))',
            }}
          >
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>Ready to scope your engagement?</h2>
            <p style={{ marginTop: 12, fontSize: 15, color: 'var(--text-secondary)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Tell us where you are — not yet implemented, mid-implementation, or looking for
              validation — and we'll recommend the right engagement type.
            </p>
            <div style={{ marginTop: 26, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                Get a Quote <IconArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get More Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Not sure which service fits your team?"
        subtitle="Tell us about your portfolio and reporting cycle, and we'll recommend the right starting point."
      />

      <Modal open={expertOpen} onClose={() => setExpertOpen(false)} title="Email Our Expert">
        <ExpertForm
          onSuccess={() => {
            setExpertOpen(false)
            setToastOpen(true)
          }}
        />
      </Modal>
      <Toast message="Your request has been sent!" show={toastOpen} onDone={() => setToastOpen(false)} />
    </>
  )
}