import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigationType } from 'react-router-dom'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#research-intent', label: 'Research' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navType = useNavigationType()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reset scroll on forward navigation only; preserve position on back/forward
  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, navType])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  if (!isHome) return null

  return (
    <>
    <a href="#main" className="skip-link">Skip to main content</a>
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">Tung Lin</Link>

        {/* Desktop nav links */}
        <ul className="nav__links">
          {NAV_LINKS.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div id="nav-mobile-menu" className="nav__mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <ul className="nav__mobile-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
    </>
  )
}
