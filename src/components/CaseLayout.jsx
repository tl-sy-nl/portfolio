import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn, PageTransition } from './FadeIn'

export default function CaseLayout({ title, subtitle, tags, meta, children, nextCase }) {
  return (
    <PageTransition>
      <nav className="case-nav">
        <div className="case-nav__inner">
          <Link to="/#work" className="case-nav__back">← All Projects</Link>
          <Link to="/" className="case-nav__logo">Tung Lin</Link>
        </div>
      </nav>

      <section className="case-hero">
        <div className="wrap">
          <motion.div
            className="case-hero__inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
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
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
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
        <div style={{ maxWidth: 'var(--w-content)', margin: '0 auto 80px', padding: '0 40px' }}>
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

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tung Lin. All rights reserved.</p>
      </footer>
    </PageTransition>
  )
}
