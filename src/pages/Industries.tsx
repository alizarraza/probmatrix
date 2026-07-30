import IndustriesWeServe from '../components/IndustriesWeServe'
import Statistics from '../components/Statistics'
import FinalCTA from '../components/FinalCTA'
import { images, img } from '../content/images'

export default function Industries() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          padding: '110px 0 70px',
          overflow: 'hidden',
        }}
      >
        <img
          src={img(images.financialDistrict, 1600)}
          alt="Financial district skyline of glass office towers"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(6,10,20,0.88) 0%, rgba(6,10,20,0.94) 60%, var(--bg-primary) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', maxWidth: 720 }}>
          <span className="section-eyebrow">Industries</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.4vw, 44px)' }}>Built for banks, MFIs, DFI, NBFCs, insurers, and advisors</h1>
          <p style={{ marginTop: 20, fontSize: 16.5, color: 'var(--text-secondary)' }}>
            Faster closes for audit-ready Expected Credit Loss, wherever you sit in financial
            services.
          </p>
        </div>
      </section>

      <IndustriesWeServe />
      <Statistics />

      <FinalCTA
        title="Don't see your exact institution type listed?"
        subtitle="The IFRS 9 Add-In adapts to your existing data — no prescribed data model required. Tell us about your portfolio."
      />
    </>
  )
}
