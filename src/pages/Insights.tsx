// import { Link } from 'react-router-dom'
// import { IconClipboard } from '../components/icons'

// export default function Insights() {
//   return (
//     <section
//       className="section"
//       style={{
//         minHeight: '55vh',
//         display: 'flex',
//         alignItems: 'center',
//         background:
//           'radial-gradient(ellipse 800px 400px at 50% -10%, rgba(13,100,150,0.18) 0%, rgba(11,40,70,0) 65%), var(--bg-primary)',
//       }}
//     >
//       <div className="container" style={{ maxWidth: 640, textAlign: 'center', margin: '0 auto' }}>
//         <div className="icon-badge" style={{ margin: '0 auto 22px' }}>
//           <IconClipboard size={22} />
//         </div>
//         <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
//           Insights
//         </span>
//         <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}>Articles and updates, coming soon</h1>
//         <p style={{ marginTop: 18, fontSize: 15.5, color: 'var(--text-secondary)' }}>
//           We're building out a library of articles on IFRS 9, credit risk, and regulatory
//           compliance. In the meantime, reach out directly and we'll happily answer any questions
//           about the IFRS 9 Add-In or our other services.
//         </p>
//         <Link to="/contact" className="btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
//           Contact Us
//         </Link>
//       </div>
//     </section>
//   )
// }

import { Link } from 'react-router-dom'
import { IconClipboard } from '../components/icons'

const insightSections = [
  {
    title: 'Articles',
    description:
      'Read the latest insights on IFRS 9, credit risk modelling, expected credit loss, and regulatory compliance.',
    link: '/insights/articles',
    button: 'View Articles',
  },
  {
    title: 'IFRS 9 Guides',
    description:
      'Step-by-step implementation guides covering portfolio preparation, ECL calculations, validation, and reporting.',
    link: '/insights/guides',
    button: 'View Guides',
  },
  {
    title: 'White Papers',
    description:
      'Technical research papers exploring behavioural maturity, survival analysis, IFRS 9 methodologies, and advanced credit risk analytics.',
    link: '/insights/white-papers',
    button: 'Read White Papers',
  },
  {
    title: 'Case Studies',
    description:
      'See how banks and financial institutions improved IFRS 9 reporting, automation, governance, and portfolio analytics using Probmatrix solutions.',
    link: '/insights/case-studies',
    button: 'View Case Studies',
  },
]

export default function Insights() {
  return (
    <section
      className="section"
      style={{
        background:
          'radial-gradient(ellipse 800px 400px at 50% -10%, rgba(13,100,150,0.18) 0%, rgba(11,40,70,0) 65%), var(--bg-primary)',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            textAlign: 'center',
            marginBottom: 70,
          }}
        >
          <div className="icon-badge" style={{ margin: '0 auto 22px' }}>
            <IconClipboard size={22} />
          </div>

          <span
            className="section-eyebrow"
            style={{ justifyContent: 'center' }}
          >
            Insights
          </span>

          <h1
            style={{
              fontSize: 'clamp(34px,5vw,52px)',
              marginTop: 16,
            }}
          >
            Insights & Resources
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}
          >
            Explore our growing collection of articles, implementation guides,
            technical white papers, and real-world case studies focused on IFRS
            9, credit risk, expected credit loss, and regulatory compliance.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 28,
          }}
        >
          {insightSections.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'rgba(14,42,72,.65)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 18,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                transition: '.3s',
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  marginBottom: 18,
                  color: '#fff',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                {item.description}
              </p>

              <Link
                to={item.link}
                className="btn-primary"
                style={{
                  marginTop: 28,
                  alignSelf: 'flex-start',
                }}
              >
                {item.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}