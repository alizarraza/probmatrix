import { useState } from 'react'
import { faqs } from '../content/siteContent'
import { IconPlus } from './icons'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: 860 }}>
        <div className="section-header centered">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-subtitle">
            Answers to what teams most often ask before rolling out the IFRS 9 Add-In.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="accordion-header"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{ width: '100%', textAlign: 'left' }}
                >
                  <span>{item.q}</span>
                  <span className="accordion-icon">
                    <IconPlus size={18} />
                  </span>
                </button>
                <div className="accordion-body">
                  <div className="accordion-body-inner">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
