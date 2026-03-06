import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInChild, PageTransition } from '../components/FadeIn'

const cases = [
  {
    to: '/cases/luxury-vip-app',
    featured: true,
    image: '/images/vip-wireframes.jpeg',
    imageAlt: 'Wireframes for VIP App',
    tags: ['Luxury Retail', '0-to-1 Product', 'Mobile App'],
    title: 'VIP App Experience for a Premium Fashion Distributor',
    desc: 'Led end-to-end research and product design for a luxury fashion agency\'s first mobile app — building a privacy-first research framework for high-net-worth clients, uncovering a product north star, and shipping a cross-brand digital wardrobe experience.',
    role: 'Research Lead & Product Designer · AJA Creative',
  },
  {
    to: '/cases/design-strategy',
    colorClass: 'case-card__image--navy',
    label: 'Strategic Foresight',
    tags: ['Social Innovation', 'Foresight'],
    title: 'Design Thinking & Foresight Programs for Public Institutions',
    desc: 'Facilitated 10+ programs for universities, NGOs, and government bodies — translating complex challenges into actionable design opportunities.',
    role: 'Design Strategist · Island Design Lab',
  },
  {
    to: '/cases/academic-platform',
    colorClass: 'case-card__image--slate',
    label: 'B2B Product Strategy',
    tags: ['B2B SaaS', 'EdTech'],
    title: 'Strategic Roadmap for a B2B Academic Knowledge Platform',
    desc: 'Defined the product vision and 12-month roadmap for an academic platform, identifying competitive differentiation through design-driven research.',
    role: 'Product Manager · Airiti Inc.',
  },
  {
    to: '/cases/digital-learning',
    colorClass: 'case-card__image--warm',
    label: 'Media & Education',
    tags: ['Media', 'Learning Platform'],
    title: "UX Research for a Leading Media Group's Learning Platform",
    desc: 'Mixed-methods research and service planning for a major media conglomerate\'s digital learning and membership ecosystem.',
    role: 'Senior UX Researcher · AJA Creative',
  },
  {
    to: '/cases/arts-education',
    colorClass: 'case-card__image--sage',
    label: 'Arts & Culture',
    tags: ['Arts & Culture', 'Digital Transformation'],
    title: 'Digital Classroom for a Renowned Performing Arts Organisation',
    desc: 'Translated an embodied, in-person pedagogy into a meaningful online learning experience — designing for community, ritual, and the at-home physical environment.',
    role: 'Senior UX Researcher · AJA Creative',
  },
  {
    to: '/cases/mobility-platform',
    colorClass: 'case-card__image--clay',
    label: 'Mobility',
    tags: ['Mobility', 'Usability Research'],
    title: 'Usability Research for a Vehicle-Sharing Platform',
    desc: 'Evaluated the end-to-end booking-to-return task flow of a leading car-sharing service under realistic conditions — surfacing high-severity issues hidden in processing states and error recovery.',
    role: 'UX Researcher · AJA Creative',
  },
]

const experience = [
  { period: '2021 – Present', role: 'Senior UX Researcher', company: 'AJA Creative Design', desc: 'Lead researcher across luxury retail, media, arts, and mobility sectors. Manage client relationships, research operations, and cross-functional insight delivery.' },
  { period: '2020 – 2021', role: 'Design Strategist', company: 'Island Design Lab', desc: 'Designed and facilitated innovation programs for universities, NGOs, and government bodies. Developed foresight frameworks for public sector transformation.' },
  { period: '2019 – 2020', role: 'Product Manager', company: 'Airiti Inc.', desc: 'Owned the product roadmap for a B2B academic knowledge platform. Conducted competitive research and defined a 12-month feature strategy.' },
  { period: '2018 – 2019', role: 'UX Designer', company: 'Alphateam', desc: 'Designed digital products for healthcare and civic technology clients. Conducted user research and prototyping.' },
]

// Hero text animation variants
const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function Home() {
  return (
    <PageTransition>

      {/* ── HERO ── */}
      <section className="hero wrap">
        <div className="hero__grid">
          <motion.div
            className="hero__left"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero__role" variants={heroItem}>
              Design Strategist &amp; UX Researcher
            </motion.span>
            <motion.h1 className="hero__name" variants={heroItem}>
              Tung<br /><em>Lin</em>
            </motion.h1>
            <motion.p className="hero__desc" variants={heroItem}>
              I translate deep research into product strategy and organisational change. With roots in philosophy and transdisciplinary design, I bridge the gap between human insight and business decisions — across health, education, retail, and civic technology.
            </motion.p>
            <motion.div className="hero__links" variants={heroItem}>
              <a href="#work" className="btn btn--dark">View Selected Work ↓</a>
              <a href="mailto:tunglin.sy@gmail.com" className="btn btn--outline">Get in Touch</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__right"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="hero__image-block">
              <div className="hero__image-wrap">
                <img src="/images/process-bg.jpeg" alt="Design process work in session" />
              </div>
              <div className="hero__stat-card">
                <span className="hero__stat-num">6+</span>
                <span className="hero__stat-label">Years of Research Leadership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── WORK ── */}
      <section className="work" id="work">
        <div className="wrap">
          <FadeIn>
            <div className="section-header">
              <span className="eyebrow">Selected Work</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>All clients anonymised per NDA</span>
            </div>
          </FadeIn>

          <FadeInStagger className="work-grid">
            {cases.map((c, i) => (
              <FadeInChild key={c.to}>
                <Link
                  to={c.to}
                  className={`case-card${c.featured ? ' case-card--featured' : ''}`}
                >
                  {c.featured ? (
                    <div className="case-card__image">
                      <img src={c.image} alt={c.imageAlt} />
                    </div>
                  ) : (
                    <div className={`case-card__image case-card__image--color ${c.colorClass}`}>
                      <span className="case-card__image-label">{c.label}</span>
                    </div>
                  )}
                  <div className="case-card__body">
                    <div className="case-card__meta">
                      {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <h3 className="case-card__title">{c.title}</h3>
                    <p className="case-card__desc">{c.desc}</p>
                    <div className="case-card__footer">
                      <span className="case-card__role">{c.role}</span>
                      <span className="case-card__arrow">→</span>
                    </div>
                  </div>
                </Link>
              </FadeInChild>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about__grid">
            <FadeIn>
              <div className="about__left">
                <span className="eyebrow">About</span>
                <h2 className="about__headline">
                  Research isn't a phase —<br />
                  it's the <em>whole argument.</em>
                </h2>
                <div className="about__body">
                  <p>I'm a multi-disciplinary designer and researcher with a background in Philosophy. My practice sits at the intersection of deep qualitative inquiry, business strategy, and participatory design — always oriented toward the question of what actually matters to the people a product serves.</p>
                  <p>I've led research across digital health, civic technology, luxury retail, education, and public policy. I believe the most impactful products are built on the clearest understanding of people — and that translating that understanding into language stakeholders can act on is its own craft.</p>
                  <p>Before design, I studied philosophy at National Taiwan University and received my MFA in Transdisciplinary Design from Parsons School of Design, New York.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="about__right">
                <p className="about__skills-title">Methods &amp; Skills</p>
                <div className="skills-grid">
                  {['Contextual Inquiry','Usability Testing','Mixed-Methods Research','Stakeholder Alignment','Experience Mapping','Participatory Design','Strategic Foresight','Workshop Facilitation','Insight Synthesis','Product Strategy'].map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
                <div className="about__edu">
                  <p className="about__edu-title">Education</p>
                  <div className="edu-item">
                    <p className="edu-item__degree">MFA, Transdisciplinary Design</p>
                    <p className="edu-item__school">Parsons School of Design — The New School, 2019</p>
                  </div>
                  <div className="edu-item">
                    <p className="edu-item__degree">BA, Philosophy · Presidential Award</p>
                    <p className="edu-item__school">National Taiwan University, 2014</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience" id="experience">
        <div className="wrap">
          <FadeIn>
            <h2 className="experience__title">Experience</h2>
          </FadeIn>
          <div className="timeline">
            {experience.map((e, i) => (
              <FadeIn key={e.role} delay={i * 0.08}>
                <div className="timeline-item">
                  <span className="timeline__period">{e.period}</span>
                  <div>
                    <p className="timeline__role">{e.role}</p>
                    <p className="timeline__company">{e.company}</p>
                    <p className="timeline__desc">{e.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact__grid">
            <FadeIn>
              <div>
                <span className="eyebrow">Contact</span>
                <h2 className="contact__headline">
                  Let's make something<br /><em>worth researching.</em>
                </h2>
                <p className="contact__sub">Open to research leadership, strategic advisory, and collaborative projects. Based in Taipei — available globally.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="contact__links">
                {[
                  { label: 'Email', value: 'tunglin.sy@gmail.com', href: 'mailto:tunglin.sy@gmail.com' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/tl-sylvia', href: 'https://linkedin.com/in/tl-sylvia' },
                  { label: 'GitHub', value: 'github.com/tl-sy-nl', href: 'https://github.com/tl-sy-nl' },
                ].map(l => (
                  <a key={l.label} href={l.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                    <div>
                      <p className="contact-link__label">{l.label}</p>
                      <p className="contact-link__value">{l.value}</p>
                    </div>
                    <span className="contact-link__arrow">→</span>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Tung Lin. All rights reserved.</p>
      </footer>

    </PageTransition>
  )
}
