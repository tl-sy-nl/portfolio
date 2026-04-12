import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PageTransition } from './FadeIn'
import FrameworkGrid from './FrameworkGrid'
import Footer from './Footer'

export default function CaseLayout({ title, subtitle, dimension, meta, children }) {
  const location = useLocation()

  useEffect(() => {
    const prev = document.title
    document.title = `${title} — Sylvia Lin`
    const descEl = document.querySelector('meta[name="description"]')
    const prevDesc = descEl?.getAttribute('content')
    if (descEl) descEl.setAttribute('content', subtitle)
    return () => {
      document.title = prev
      if (descEl && prevDesc) descEl.setAttribute('content', prevDesc)
    }
  }, [title, subtitle])

  return (
    <PageTransition>
      <nav className="case-nav">
        <div className="case-nav__inner">
          <Link to="/" className="case-nav__back">← Back</Link>
          <Link to="/" className="case-nav__logo">Sylvia Lin</Link>
        </div>
      </nav>

      <header className="case-hero">
        <div className="case-hero__inner">
          {dimension && (
            <span className="case-hero__dimension">{dimension}</span>
          )}
          <h1 className="case-hero__title">{title}</h1>
          <p className="case-hero__subtitle">{subtitle}</p>
        </div>

        <dl className="case-meta">
          {meta.map(m => (
            <div key={m.label} className="case-meta__item">
              <dt className="case-meta__label">{m.label}</dt>
              <dd className="case-meta__value">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <main id="main" className="case-body">
        {children}
      </main>

      <section className="case-framework">
        <FrameworkGrid currentPath={location.pathname} />
      </section>

      <Footer />
    </PageTransition>
  )
}
