import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageTransition } from '../components/FadeIn'
import Footer from '../components/Footer'

/* ── Case data (chronological, with dimension overline) ── */
const cases = [
  {
    dimension: 'Imagining futures',
    title: 'Beyond 100%',
    sub: 'Speculative biotech systems for food scarcity and bodily modification',
    year: '2018',
    path: '/cases/beyond-100',
  },
  {
    dimension: 'Who gets heard',
    title: 'Out/Edge',
    sub: 'Political listening beyond platform structure',
    year: '2019',
    path: '/cases/out-edge',
  },
  {
    dimension: 'Who gets heard',
    title: 'The Air We Share',
    sub: 'Environmental perception beyond quantified data',
    year: '2017',
    path: '/cases/air-spaces',
  },
  {
    dimension: 'What systems cannot hold',
    title: 'Lockdown as Catalyst',
    sub: 'Educational design research in crisis contexts',
    year: '2021',
    path: '/cases/arts-education',
  },
  {
    dimension: 'What systems cannot hold',
    title: 'Invisible Infrastructure',
    sub: 'Research access shaped by data infrastructure',
    year: '2022–2025',
    path: '/cases/academic-platform',
  },
]

/* ── Sidebar data ── */
const experience = [
  { period: 'Apr 2026 – Present', role: 'Product Discovery & Strategy Consultant (Contract)', company: 'Keftek' },
  { period: 'Jan 2020 – Jan 2025', role: 'Founder, UX Researcher & Design Strategist', company: 'Island Design Lab' },
  { period: 'Jan 2021 – Jul 2023', role: 'Senior UX Researcher', company: 'AJA Creative Design' },
  { period: 'Jan 2022 – Jan 2023', role: 'Advisory Committee Member', company: 'The National Palace Museum' },
  { period: 'Sep 2020 – Jan 2022', role: 'Chapter Co-founder', company: 'The Design Futures Initiative' },
  { period: 'Nov 2020 – Apr 2021', role: 'User Researcher', company: 'Alphateam' },
  { period: 'Oct 2019 – May 2020', role: 'Product Manager', company: 'Airiti Inc.' },
  { period: '2018 – 2020', role: 'Volunteer Organizer & Facilitator', company: 'g0v Civic Tech Community, New York & Taipei' },
  { period: '2017', role: 'AI Trainer', company: 'Yoctol' },
  { period: '2013 – 2014', role: 'President, Philosophy Student Association', company: 'National Taiwan University' },
  { period: '2012 – 2014', role: 'Ethics Teaching Assistant', company: 'National Taiwan University' },
]

const recognition = [
  {
    type: 'Publication',
    title: 'Formative Interviews for a User-Centered Design Study on Developing an Effective Gateway for Health Research Data Search - Towards a Sustainable Wellbeing Environment',
    venue: 'Lee, H.-A., Lin, T., Chen, H.-I., Liu, W.-C., et al. · Computer Science and Information Systems (ComSIS)',
    link: 'https://doi.org/10.2298/CSIS241204069L',
  },
  {
    type: 'Exhibition',
    title: 'Biodesign Challenge Summit',
    venue: 'MoMA, New York, 2018 · also shown in San Francisco and at The Nature Lab, RISD',
    link: 'https://www.biodesignchallenge.org/parsons-2018',
  },
]

const methods = [
  'Participatory Workshops',
  'Speculative Design',
  'Design Futures',
  'Research through Design',
  'Co-Design',
  'Contextual Inquiry',
  'Design Probes',
]

export default function Home() {
  const heroRef = useRef(null)
  const spotRef = useRef(null)
  const dotRef = useRef(null)
  const revealRef = useRef(null)

  /* ── Cursor + Reveal animation ── */
  useEffect(() => {
    const hero = heroRef.current
    const spot = spotRef.current
    const dot = dotRef.current
    const revealLayer = revealRef.current
    if (!hero || !spot || !dot || !revealLayer) return

    let mx = 0, my = 0, sx = 0, sy = 0
    const RADIUS = 140

    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
      if (!spot.classList.contains('visible')) {
        spot.classList.add('visible')
        dot.classList.add('visible')
      }
    }

    hero.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      sx += (mx - sx) * 0.12
      sy += (my - sy) * 0.12
      spot.style.left = sx + 'px'
      spot.style.top = sy + 'px'
      dot.style.left = sx + 'px'
      dot.style.top = sy + 'px'

      // Reveal clip-path — revealLayer covers full hero, so sx/sy are already correct
      revealLayer.style.clipPath = `circle(${RADIUS}px at ${sx}px ${sy}px)`

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      hero.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <PageTransition>
      {/* Grid overlay */}
      <div className="grid-overlay">
        <div /><div /><div /><div />
      </div>

      {/* Fixed nav */}
      <nav className="site-nav">
        <Link to="/" className="site-nav__logo">Sylvia Lin</Link>
        <div className="site-nav__links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="hero" ref={heroRef} id="hero-section">
        <div className="cursor-spot" ref={spotRef} />
        <div className="cursor-dot" ref={dotRef} />

        {/* Base layer */}
        <div className="hero-content">
          <div className="hero-title-wrap">
            <h1>Design<br /><em>Researcher</em></h1>
          </div>

          <div className="hero-two-col">
            <svg className="corner-bracket cb-tl" viewBox="0 0 20 20">
              <line x1="0" y1="0" x2="20" y2="0" />
              <line x1="0" y1="0" x2="0" y2="20" />
            </svg>
            <svg className="corner-bracket cb-tr" viewBox="0 0 20 20">
              <line x1="0" y1="0" x2="20" y2="0" />
              <line x1="0" y1="0" x2="0" y2="20" />
            </svg>
            <svg className="corner-bracket cb-bl" viewBox="0 0 20 20">
              <line x1="0" y1="0" x2="20" y2="0" />
              <line x1="0" y1="0" x2="0" y2="20" />
            </svg>
            <svg className="corner-bracket cb-br" viewBox="0 0 20 20">
              <line x1="0" y1="0" x2="20" y2="0" />
              <line x1="0" y1="0" x2="0" y2="20" />
            </svg>

            <p className="hero-tagline">
              Futures we can argue about: participatory and speculative design
              research on who gets to imagine technology, and who bears its costs.
            </p>
          </div>
        </div>

        {/* Reveal layer — covers full hero, same flex centering */}
        <div className="hero-reveal" ref={revealRef} aria-hidden="true">
          <div className="hero-content">
            <div className="hero-title-wrap">
              <h1>Design<br /><em>Researcher</em></h1>
            </div>

            <div className="hero-two-col">
              <svg className="corner-bracket cb-tl" viewBox="0 0 20 20">
                <line x1="0" y1="0" x2="20" y2="0" />
                <line x1="0" y1="0" x2="0" y2="20" />
              </svg>
              <svg className="corner-bracket cb-tr" viewBox="0 0 20 20">
                <line x1="0" y1="0" x2="20" y2="0" />
                <line x1="0" y1="0" x2="0" y2="20" />
              </svg>
              <svg className="corner-bracket cb-bl" viewBox="0 0 20 20">
                <line x1="0" y1="0" x2="20" y2="0" />
                <line x1="0" y1="0" x2="0" y2="20" />
              </svg>
              <svg className="corner-bracket cb-br" viewBox="0 0 20 20">
                <line x1="0" y1="0" x2="20" y2="0" />
                <line x1="0" y1="0" x2="0" y2="20" />
              </svg>

              <p className="hero-tagline">
                Futures we can argue about: participatory and speculative design
                research on who gets to imagine technology, and who bears its costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WORK ══════════ */}
      <section className="grid-section" id="work">
        <h2 className="section-title">Work</h2>

        <div className="case-grid">
          {cases.slice(0, 3).map(c => (
            <Link key={c.title} to={c.path} className="case-card">
              <div>
                <div className="case-overline">{c.dimension}</div>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-subtitle">{c.sub}</p>
              </div>
              <div className="case-footer">
                <span className="case-year">{c.year}</span>
                <span className="case-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="case-grid-bottom">
          {cases.slice(3, 5).map(c => (
            <Link key={c.title} to={c.path} className="case-card">
              <div>
                <div className="case-overline">{c.dimension}</div>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-subtitle">{c.sub}</p>
              </div>
              <div className="case-footer">
                <span className="case-year">{c.year}</span>
                <span className="case-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section className="about-section" id="about">
        <h2 className="section-title">About</h2>
        <div className="about-text">
          <p>I am a design researcher trained in philosophy and transdisciplinary design. I use participatory and speculative design to bring people into conversations about technology that usually take place without them: high school students feeling the air they breathe, exhibition visitors holding food from a system set in 2070, people who disagree about politics trying to listen to each other.</p>
          <p>One question runs through this work: who is in the room when a future is imagined, and whose experience is left out. I learned it from the limits of my own projects. The students in our air-quality workshops were not the people most exposed to polluted air. The conversations on Out/Edge took place among people who had already chosen to talk. I now plan for that question from the start.</p>
          <p>I am preparing doctoral research on how AI systems turn human judgement, voice and circumstance into standards that appear objective: how fluent machine prose becomes the measure of good writing, how annotators&apos; interpretations become a model&apos;s facts, and how people applying for public services become cases to be processed. I have labelled political speech for an AI system, co-founded a chapter of The Design Futures Initiative, and organised participatory workshops in the g0v civic technology community. In my current practice I use AI to build interactive artifacts for research.</p>
        </div>
      </section>

      {/* ══════════ CREDENTIALS ══════════ */}
      <section className="cred-section">
        <h2 className="section-title">Credentials</h2>

        <div className="cred-grid">
          {/* Left column: Experience */}
          <div>
            <div className="cred-block">
              <div className="cred-label">Experience</div>
              {experience.map(e => (
                <div key={e.role} className="cred-item">
                  <div className="cred-item-title">{e.role}</div>
                  <div className="cred-item-sub">{e.company} ({e.period})</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Recognition, Methods, Education */}
          <div>
            <div className="cred-block">
              <div className="cred-label">Recognition</div>
              {recognition.map(r => (
                <React.Fragment key={r.title}>
                  <div className="cred-sublabel">{r.type}</div>
                  <div className="cred-item">
                    {r.link
                      ? <a href={r.link} target="_blank" rel="noopener noreferrer" className="cred-item-title">{r.title}</a>
                      : <span className="cred-item-title">{r.title}</span>
                    }
                    <div className="cred-item-sub">{r.venue}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="cred-block" style={{marginTop: '24px'}}>
              <div className="cred-label">Methods</div>
              <div>
                {methods.map(m => (
                  <span key={m} className="cred-tag">{m}</span>
                ))}
              </div>
            </div>

            <div className="cred-block" style={{marginTop: '24px'}}>
              <div className="cred-label">Education</div>
              <div className="cred-item">
                <div className="cred-item-title">MFA Transdisciplinary Design</div>
                <div className="cred-item-sub">Parsons School of Design, 2019</div>
              </div>
              <div className="cred-item">
                <div className="cred-item-title">BA Philosophy · Presidential Award</div>
                <div className="cred-item-sub">National Taiwan University, 2014</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section className="contact-section" id="contact">
        <h2 className="contact-email"><a href="mailto:tunglin.sy@gmail.com">tunglin.sy@gmail.com</a></h2>
        <div className="contact-links">
          <a href="https://linkedin.com/in/tl-sylvia" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/TungLin_CV_2026.pdf" download="TungLin_CV_2026.pdf">Download CV</a>
        </div>
      </section>

      <Footer />

    </PageTransition>
  )
}
