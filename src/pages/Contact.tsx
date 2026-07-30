import type { ReactNode } from 'react'
import { company } from '../content/siteContent'
import { images, img } from '../content/images'
import { IconMail, IconPhone, IconMapPin, IconArrowRight } from '../components/icons'
import { useNetlifyForm } from '../lib/useNetlifyForm'

export default function Contact() {
  const { status, errorMsg, handleSubmit } = useNetlifyForm('contact')

  return (
    <>
      <section
        style={{
          padding: '90px 0 60px',
          background: 'radial-gradient(ellipse 800px 400px at 50% -10%, rgba(13,100,150,0.18) 0%, rgba(6,10,20,0) 65%), var(--bg-primary)',
        }}
      >
        <div className="container" style={{ maxWidth: 720 }}>
          <span className="section-eyebrow">Contact Us</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.4vw, 44px)' }}>
            Reach out for custom risk management and consulting services
          </h1>
          <p style={{ marginTop: 20, fontSize: 16.5, color: 'var(--text-secondary)' }}>
            Whether you want a walkthrough of the IFRS 9 Add-In, a partnership conversation, or
            help scoping a consulting engagement — tell us a bit about what you need.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2 contact-grid" style={{ alignItems: 'flex-start', gap: 40 }}>
            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div
                className="glow-border"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '16 / 10',
                  position: 'relative',
                }}
              >
                <img
                  src={img(images.supportDesk, 700)}
                  srcSet={`${img(images.supportDesk, 500)} 500w, ${img(images.supportDesk, 900)} 900w`}
                  sizes="(max-width: 900px) 100vw, 500px"
                  alt="ProbMatrix support representative assisting a client"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>

              <ContactRow icon={<IconMail size={20} />} label="Email" value={company.email} href={`mailto:${company.email}`} />
              <ContactRow icon={<IconPhone size={20} />} label="Phone" value={company.phone} href={`tel:${company.phone.replace(/\s+/g, '')}`} />
              <ContactRow icon={<IconMapPin size={20} />} label="Working with" value="Banks, MFIs, DFIs, NBFCs, insurers, and advisors" />

              <div className="card glow-border" style={{ marginTop: 8 }}>
                <h3 style={{ fontSize: 16 }}>Prefer email?</h3>
                <p style={{ marginTop: 8, fontSize: 14 }}>
                  Send details of your portfolio, reporting cycle, and what you'd like to see, and
                  we'll follow up with next steps.
                </p>
                <a href={`mailto:${company.email}`} className="btn-ghost" style={{ marginTop: 14 }}>
                  {company.email} <IconArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {/* Honeypot field — hidden from real users via CSS, bots often fill it anyway */}
              <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                <label htmlFor="company_website">Leave this field empty</label>
                <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="form-field">
                <label htmlFor="name">Your First Name</label>
                <input id="name" name="name" type="text" required placeholder="Enter your first name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Your Email Address*</label>
                <input id="email" name="email" type="email" required placeholder="Enter your email address" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Your Message*</label>
                <textarea id="message" name="message" required placeholder="Type your message here" />
              </div>

              <button type="submit" className="btn-primary btn-block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit Your Inquiry'}
              </button>

              {status === 'success' && (
                <p style={{ fontSize: 14, color: '#3ddc84' }}>
                  Thanks — your message has been sent. We'll get back to you shortly.
                </p>
              )}
              {status === 'error' && <p style={{ fontSize: 14, color: '#ff6b6b' }}>{errorMsg}</p>}
            </form>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div className="icon-badge">{icon}</div>
      <div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{label}</p>
        <p style={{ fontSize: 15, color: '#fff', fontWeight: 600 }}>{value}</p>
      </div>
    </div>
  )
  return href ? <a href={href}>{content}</a> : content
}