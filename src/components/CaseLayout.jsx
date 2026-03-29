import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn, PageTransition } from './FadeIn'
import Footer from './Footer'

export default function CaseLayout({ title, subtitle, tags, meta, children, nextCase }) {
  useEffect(() => {
    const prev = document.title
    document.title = `${title} — Tung Lin`
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
          <Link to="/#work" className="case-nav__back">← All Projects</Link>
          <Link to="/" className="case-nav__logo">Tung Lin</Link>
          <a href="mailto:tunglin.sy@gmail.com" className="case-nav__contact">Get in touch ↗</a>
        </div>
      </nav>

      <section className="case-hero">
        <div className="wrap">
          <motion.div
            className="case-hero__inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="case-hero__tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 className="case-hero__title">{title}</h1>
            <p className="case-hero__subtitle">{subtitle}</p>
          </motion.div>
        </div>

        <div className="wrap">
          <motion.div
            className="case-meta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {meta.map(m => (
              <div key={m.label} className="case-meta__item">
                <span className="case-meta__label">{m.label}</span>
                <span className="case-meta__value">{m.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="case-body">
        {children}
      </div>

      {nextCase && (
        <div className="next-case-wrapper">
          <FadeIn>
            <Link to={nextCase.to} className="next-case">
              <div>
                <p className="next-case__label">Next Project</p>
                <p className="next-case__title">{nextCase.title}</p>
              </div>
              <span className="next-case__arrow">→</span>
            </Link>
          </FadeIn>
        </div>
      )}

      <Footer />
    </PageTransition>
  )
}
