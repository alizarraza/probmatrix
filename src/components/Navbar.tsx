import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import { IconChevronDown } from './icons'

type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const navLinks: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Solutions',
    to: '/solutions',
    children: [
      { label: 'IFRS 9 Add-In', to: '/solutions/ifrsaddin' },
      { label: 'CredX', to: '/solutions/credx' },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  {
    label: 'Insights',
    to: '/insights',
    children: [
      { label: 'Articles', to: '/insights/articles' },
      { label: 'IFRS 9 Guides', to: '/insights/guides' },
      { label: 'White Papers', to: '/insights/white-papers' },
      { label: 'Case Studies', to: '/insights/case-studies' },
    ],
  },
  { label: 'Partnership', to: '/partnership' },
  { label: 'Certification', to: '/certification' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  function handleEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(11, 40, 70, 0.94)' : 'rgba(11, 40, 70, 0.75)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 112,
          gap: 16,
        }}
      >
        <Link to="/" aria-label="ProbMatrix home" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', height: '100%' }}>
          <Logo size={100} />
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'nowrap' }}>
          {navLinks.map((l) => (
            <div
              key={l.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => l.children && handleEnter(l.label)}
              onMouseLeave={() => l.children && handleLeave()}
            >
              <NavLink
                to={l.to}
                end={l.to === '/'}
                style={({ isActive }) => ({
                  fontSize: 13.5,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  position: 'relative',
                  paddingBottom: 4,
                  borderBottom: isActive ? '2px solid var(--accent-blue-bright)' : '2px solid transparent',
                })}
              >
                {l.label}
                {l.children && <IconChevronDown size={11} />}
              </NavLink>

              {l.children && openDropdown === l.label && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: 14,
                    minWidth: 190,
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.35)',
                    padding: 8,
                    zIndex: 50,
                  }}
                >
                  {l.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      style={{
                        display: 'block',
                        padding: '10px 14px',
                        fontSize: 13.5,
                        borderRadius: 8,
                        color: 'var(--text-secondary)',
                      }}
                      className="dropdown-link"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <a
            href="/contact"
            className="btn-primary desktop-cta"
            style={{ fontSize: 13.5, padding: '10px 20px' }}
          >
            Request IFRS9 Add-in Demo
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="hamburger"
            style={{
              width: 36,
              height: 36,
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <span
              style={{
                width: 20,
                height: 2,
                background: '#fff',
                borderRadius: 2,
                transition: 'transform 0.2s ease',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                width: 20,
                height: 2,
                background: '#fff',
                borderRadius: 2,
                opacity: open ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            />
            <span
              style={{
                width: 20,
                height: 2,
                background: '#fff',
                borderRadius: 2,
                transition: 'transform 0.2s ease',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="mobile-panel"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-secondary)',
            padding: '10px 18px 24px',
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((l) => (
            <div key={l.label} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  style={({ isActive }) => ({
                    display: 'block',
                    flex: 1,
                    padding: '14px 4px',
                    color: isActive ? 'var(--accent-blue-bright)' : 'var(--text-secondary)',
                    fontSize: 15.5,
                    fontWeight: 500,
                  })}
                >
                  {l.label}
                </NavLink>
                {l.children && (
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === l.label ? null : l.label)}
                    aria-label={`Toggle ${l.label} submenu`}
                    style={{
                      padding: 10,
                      color: 'var(--text-secondary)',
                      transform: openMobileDropdown === l.label ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <IconChevronDown size={14} />
                  </button>
                )}
              </div>
              {l.children && openMobileDropdown === l.label && (
                <div style={{ paddingBottom: 10, paddingLeft: 14, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {l.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      onClick={() => setOpen(false)}
                      style={{ padding: '10px 4px', fontSize: 14, color: 'var(--text-muted)' }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="/contact"
            className="btn-primary btn-block"
            style={{ marginTop: 18 }}
            onClick={() => setOpen(false)}
          >
            Request a Demo
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1180px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        .dropdown-link:hover {
          background: rgba(13,100,150,0.18);
          color: #fff !important;
        }
      `}</style>
    </header>
  )
}