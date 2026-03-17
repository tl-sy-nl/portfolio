import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn, PageTransition } from '../components/FadeIn'
import TopographicHero from '../components/TopographicHero'

/* ── Full-Bleed Work Carousel ── */
function WorkCarousel({ items }) {
  const [idx, setIdx] = useState(0)
  const total = items.length

  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  return (
    <div className="fc">
      {/* Slides */}
      <div className="fc__viewport">
        {items.map((c, i) => (
          <Link
            key={c.to}
            to={c.to}
            className={`fc__slide${i === idx ? ' fc__slide--active' : ''}`}
            aria-hidden={i !== idx}
          >
            {/* Background image */}
            <img
              className="fc__bg"
              src={c.image}
              alt={c.imageAlt}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            {/* Tint + gradient overlays */}
            {c.tint && <div className="fc__tint" style={{ background: c.tint }} />}
            <div className="fc__gradient" />

            {/* Text content */}
            <div className="fc__content">
              <span className="fc__num">{c.num}</span>
              <div className="fc__tags">
                {c.tags.map(t => <span key={t} className="fc__tag">{t}</span>)}
              </div>
              <h3 className="fc__title">{c.title}</h3>
              <p className="fc__desc">{c.desc}</p>
              <div className="fc__cta">
                <span className="fc__role">{c.role}</span>
                <span className="fc__arrow">View Case →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation */}
      <div className="fc__nav">
        <button className="fc__nav-btn" onClick={prev} aria-label="Previous">←</button>
        <div className="fc__counter">
          <span className="fc__counter-current">{String(idx + 1).padStart(2, '0')}</span>
          <span className="fc__counter-sep">/</span>
          <span className="fc__counter-total">{String(total).padStart(2, '0')}</span>
        </div>
        <div className="fc__dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`fc__dot${i === idx ? ' fc__dot--active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Case ${i + 1}`}
            />
          ))}
        </div>
        <button className="fc__nav-btn" onClick={next} aria-label="Next">→</button>
      </div>
    </div>
  )
}

const cases = [
  {
    to: '/cases/academic-platform',
    num: '01',
    // Earth at night — glowing networks, data infrastructure
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Earth at night from space, glowing networks of light',
    tint: 'rgba(10,46,62,0.52)',
    tags: ['Biomedical', 'Public Sector', 'Published Research'],
    title: 'The Infrastructure Nobody Mapped: Research for Taiwan\'s National Health Data Gateway',
    desc: 'Formative research commissioned by Taiwan\'s Ministry of Health and Welfare — uncovering how biomedical researchers navigate 50+ fragmented databases, then translating findings into product strategy for a unified national gateway. Research published in ComSIS, 2023.',
    role: 'UX Researcher & Design Strategist · Island Design Lab',
  },
  {
    to: '/cases/luxury-vip-app',
    num: '02',
    // Luxury fashion — editorial clothing close-up
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Editorial fashion detail, luxury fabric and form',
    tint: 'rgba(18,8,4,0.42)',
    tags: ['Luxury Retail', '0-to-1 Product', 'Mobile App'],
    title: 'The Camera Roll as Wardrobe: Research for a Luxury Fashion Distributor\'s First Mobile App',
    desc: 'Research for a luxury fashion distributor\'s first mobile app — uncovering how high-net-worth clients actually manage their wardrobes and make purchase decisions, and translating an unexpected field behaviour into a product north star.',
    role: 'Research Lead · AJA Creative',
  },
  {
    to: '/cases/digital-learning',
    num: '03',
    // Looking up through deep water — depth, layers of meaning
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Looking upward through layers of deep blue water',
    tint: 'rgba(4,14,36,0.48)',
    tags: ['Media', 'Enterprise Learning', 'Mixed-Methods Research'],
    title: 'What the Analytics Couldn\'t Show: Research for a Media Group\'s Enterprise Learning Platform',
    desc: 'Mixed-methods study uncovering three structural misalignments between how a major media group understood its enterprise learning platform and how users actually experienced it.',
    role: 'Senior UX Researcher · AJA Creative',
  },
  {
    to: '/cases/arts-education',
    num: '04',
    // Dance silhouette — body, movement, light
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Dancer silhouette in motion, dramatic stage lighting',
    tint: 'rgba(22,8,16,0.45)',
    tags: ['Arts & Culture', 'Discovery Research', 'Interaction Design'],
    title: 'Lockdown as Catalyst: Discovery Research for a Performing Arts Organisation\'s Online School',
    desc: 'Pre-product discovery study conducted in 2021 — exploring whether a deeply embodied performing arts pedagogy could extend online, and what platform architecture could preserve its educational values.',
    role: 'Senior UX Researcher & Interaction Designer · AJA Creative',
  },
]

const experience = [
  { period: 'Jan 2020 – Present', role: 'Design Strategist', company: 'Island Design Lab', desc: 'Facilitated 10+ design thinking and foresight programs for universities, NGOs, and public institutions across Taiwan, focusing on social innovation and sustainable development.' },
  { period: 'Jan 2021 – Jul 2023', role: 'Senior UX Researcher', company: 'AJA Creative Design', desc: 'Led exploratory and evaluative research across luxury retail, media, arts, and mobility sectors. Translated complex human behaviours into design and data insights for cross-functional delivery.' },
  { period: 'Sep 2020 – Jan 2022', role: 'Chapter Co-founder', company: 'The Design Futures Initiative', desc: 'Co-founded the Taiwan chapter of an international design futures community — organising speculative design workshops and foresight programmes for designers, academics, and civic innovators.' },
  { period: 'Nov 2020 – Apr 2021', role: 'User Researcher', company: 'Alphateam', desc: 'Led user research for an academia–government collaboration supporting small business innovation and entrepreneurship development.' },
  { period: 'Oct 2019 – May 2020', role: 'Product Manager', company: 'Airiti Inc.', desc: 'Owned the product roadmap for a B2B academic knowledge platform. Conducted competitive research and defined a 12-month feature strategy.' },
  { period: 'Jan 2022 – Jan 2023', role: 'Advisory Committee Member', company: 'The National Palace Museum', desc: 'Member of the Advisory Committee on Promotion of Children and Youth Affairs — contributing to cultural education strategy and digital engagement for the museum\'s collection.' },
]

const recognition = [
  {
    type: 'Publication',
    year: '2023',
    title: 'Formative Interviews for a User-Centred Design Study on Developing an Effective Gateway for Biomedical Data Discovery',
    authors: 'Lee, H.-A., Lin, T., Chen, H.-I., Liu, W.-C., et al.',
    journal: 'Computer Science and Information Systems (ComSIS), Vol. 20, No. 4',
    detail: 'Mixed-methods formative study with 15 biomedical researchers investigating how domain experts navigate Taiwan\'s fragmented health data infrastructure. Contributed research design, interview protocol development, and thematic analysis — translating qualitative findings into information architecture recommendations for a unified national data gateway.',
    link: 'https://orcid.org/0009-0008-9499-7505',
  },
  {
    type: 'Exhibition',
    year: '2019',
    title: 'Biodesign Challenge Summit',
    venue: 'MoMA, New York · San Francisco · Rhode Island',
    detail: 'Selected work presented across three cities as part of the annual international Biodesign Challenge — a competition for student projects at the intersection of biology, technology, and design. Developed at Parsons School of Design.',
  },
  {
    type: 'Teaching',
    year: '2012–2014',
    title: 'Ethics Teaching Assistant — Eastern & Western Ethics and Aesthetics',
    venue: 'National Taiwan University, Department of Philosophy',
    detail: 'Supported undergraduate instruction in comparative ethics and aesthetics. Designed discussion prompts, facilitated seminar sessions, and mentored students in philosophical argumentation — experience that shaped a lasting commitment to pedagogy as a form of research practice.',
  },
  {
    type: 'Community',
    year: '2013–2014',
    title: 'President, Philosophy Student Association',
    venue: 'National Taiwan University',
    detail: 'Led the student association during a period of institutional reform advocacy. Organised public lecture series, inter-departmental dialogues on humanities education, and collaborative events with civic organisations.',
  },
  {
    type: 'Facilitation',
    year: '2020–2025',
    title: '10+ Design Thinking & Strategic Foresight Programmes',
    venue: 'Universities, NGOs, and Government Agencies across Taiwan',
    detail: 'Designed and facilitated programmes integrating systems mapping, scenario development, and participatory research methods for public institutions — bridging design strategy with policy innovation.',
  },
]

const researchInterests = [
  {
    theme: 'Technological Mediation & the Texture of Interaction',
    desc: 'How do digital systems shape the way people perceive, interpret, and act? Drawing on postphenomenology and Verbeek\'s mediation theory, I want to investigate the often-invisible ways interfaces frame understanding — the moments users reach, pause, and recalibrate. Six years of industry research have given me a library of these observations; philosophical frameworks offer a language to finally articulate them.',
    cases: [
      { label: 'Case 01 — Health Data Gateway', to: '/cases/academic-platform' },
      { label: 'Case 03 — Enterprise Learning', to: '/cases/digital-learning' },
      { label: 'Case 04 — Performing Arts School', to: '/cases/arts-education' },
    ],
  },
  {
    theme: 'Participatory Design as Epistemic Practice',
    desc: 'My experience facilitating stakeholder research across eight industries has shown me that participation is not only a democratic ideal — it is an epistemic method. When communities co-construct the logic of a system, they surface knowledge that no expert process alone can reach. I am interested in how phenomenological thinking can deepen participatory design beyond preference elicitation toward genuine shared sense-making.',
    cases: [
      { label: 'Case 01 — Health Data Gateway', to: '/cases/academic-platform' },
      { label: 'Case 04 — Performing Arts School', to: '/cases/arts-education' },
    ],
  },
  {
    theme: 'Ethics, Infrastructure & Legibility',
    desc: 'From national health data gateways to enterprise learning platforms, a recurring question runs through my work: how do people make opaque systems legible enough to act upon — and what gets lost in that translation? I am drawn to the intersection of infrastructure studies and design ethics, asking not just how to make systems usable, but how the very act of making them legible reshapes what users can know and care about.',
    cases: [
      { label: 'Case 01 — Health Data Gateway', to: '/cases/academic-platform' },
      { label: 'Case 02 — Luxury Mobile App', to: '/cases/luxury-vip-app' },
      { label: 'Case 03 — Enterprise Learning', to: '/cases/digital-learning' },
    ],
  },
]

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } }
}
const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Home() {
  return (
    <PageTransition>

      {/* ── HERO — fullscreen topographic canvas ── */}
      <section className="hero">
        <TopographicHero />
        <motion.div
          className="hero__content"
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
            I observe people — and the things they live with.<br />
            How they reach, pause, arrange.<br />
            I look for what needs to be placed differently.<br />
            So the right things can find each other.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.2 }}
        >
          <span>Scroll</span>
          <span className="hero__scroll-arrow">↓</span>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT — slides over sticky hero ── */}
      <div className="main-content">

        {/* ── WORK ── */}
        <section className="work" id="work">
          <div className="wrap">
            <FadeIn>
              <div className="section-header">
                <span className="eyebrow">Selected Work</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>All clients anonymised per NDA</span>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <WorkCarousel items={cases} />
          </FadeIn>
        </section>

        {/* ── ABOUT ── */}
        <section className="about" id="about">
          <img
            className="about__bg"
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=80"
            alt=""
            aria-hidden="true"
          />
          <div className="wrap">

            <div className="about__grid">
              <FadeIn>
                <div className="about__left">
                  <span className="eyebrow">About</span>
                  <h2 className="about__headline">
                    I make the invisible<br />
                    <em>legible.</em>
                  </h2>
                  <div className="about__body">
                    <p>The most useful question in a project is rarely the one the brief contains. I've spent my working life — first as a philosopher and educator in Taiwan, then as a researcher across industries — learning to ask the one underneath: the question users and stakeholders haven't yet found language for.</p>
                    <p>Before research, there was teaching. For seven years in Taiwan, I worked with high schoolers and medical students — not to give them answers, but to help them sit with hard questions. Philosophy, I came to believe, is not abstract: it is a discipline of staying with a question until it properly opens. That habit never left.</p>
                    <p>Writing is how I hold the ambiguity. I write throughout my research — not to report findings after the fact, but to stay near the complexity while it's still alive. That's where the non-rational connections live: the ones data alone cannot hold. This same logic carries into how I work with groups. In workshops and facilitated sessions, I try to make space for thinking, feeling, and doing to happen together — because the most honest answers often emerge in motion.</p>
                    <p>I studied at the School of Design Strategies at Parsons, New York — where design is a research practice, grounded in sociology and anthropology.</p>
                    <p>I am a mother and a researcher; both have taught me to be fully present with what someone cannot yet say. Now back in Taipei — across eight industries, one preoccupation: making the invisible legible for those who need to act on it.</p>
                  </div>
                </div>
              </FadeIn>
              <div className="about__right">

                  {/* Stats strip */}
                  <div className="about__stats">
                    <div>
                      <span className="about__stat-num">8+</span>
                      <span className="about__stat-label">Industries</span>
                    </div>
                    <div>
                      <span className="about__stat-num">20+</span>
                      <span className="about__stat-label">Research engagements</span>
                    </div>
                    <div>
                      <span className="about__stat-num">6</span>
                      <span className="about__stat-label">Years in practice</span>
                    </div>
                  </div>

                  {/* Lens groups as pill tags */}
                  <div className="about__lenses">
                    <div className="lens-group">
                      <p className="lens-group__label">Domains</p>
                      <div className="lens-group__pills">
                        {['Digital Health', 'Public Policy', 'Luxury Retail', 'Arts & Culture', 'Education'].map(d => (
                          <span key={d} className="about__pill">{d}</span>
                        ))}
                      </div>
                    </div>
                    <div className="lens-group">
                      <p className="lens-group__label">Practices</p>
                      <div className="lens-group__pills">
                        {['Strategic Foresight', 'Speculative Design', 'Participatory Research', 'Insight Synthesis'].map(p => (
                          <span key={p} className="about__pill">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Education */}
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
            </div>
          </div>
        </section>

        {/* ── RESEARCH INTERESTS ── */}
        <section className="research" id="research">
          <div className="wrap">
            <FadeIn>
              <span className="eyebrow">Research Interests</span>
              <h2 className="research__headline">
                Where practice meets<br /><em>inquiry.</em>
              </h2>
              <p className="research__intro">
                Six years of industry research — across health data, luxury retail, media, arts education, and public policy — have shaped a set of questions I want to pursue with academic rigour. I am currently exploring PhD opportunities in design research, HCI, and Science & Technology Studies.
              </p>
            </FadeIn>
            <div className="research__grid">
              {researchInterests.map((r, i) => (
                <FadeIn key={r.theme} delay={i * 0.1}>
                  <div className="research__card">
                    <h3 className="research__theme">{r.theme}</h3>
                    <p className="research__desc">{r.desc}</p>
                    {r.cases && r.cases.length > 0 && (
                      <div className="research__case-links">
                        <span className="research__case-links-label">Seen in practice →</span>
                        <div className="research__case-tags">
                          {r.cases.map(c => (
                            <Link key={c.to} to={c.to} className="research__case-tag">
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESEARCH & PUBLICATIONS ── */}
        <section className="recognition">
          <div className="wrap">
            <FadeIn>
              <span className="eyebrow">Research &amp; Academic Contributions</span>
            </FadeIn>
            <div className="recognition-list">
              {recognition.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.1}>
                  <div className="recognition-item">
                    <div className="recognition-item__meta">
                      <span className="recognition-item__type">{r.type}</span>
                      <span className="recognition-item__year">{r.year}</span>
                    </div>
                    <div>
                      {r.link
                        ? <a href={r.link} target="_blank" rel="noopener noreferrer" className="recognition-item__title recognition-item__title--link">{r.title} ↗</a>
                        : <p className="recognition-item__title">{r.title}</p>
                      }
                      {r.authors && <p className="recognition-item__authors">{r.authors}</p>}
                      {r.journal && <p className="recognition-item__journal">{r.journal}</p>}
                      {r.venue && <p className="recognition-item__venue">{r.venue}</p>}
                      <p className="recognition-item__detail">{r.detail}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
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
                    The best work starts<br /><em>before the brief.</em>
                  </h2>
                  <p className="contact__sub">I tend to be most helpful when the question is still forming. Based in Taipei — available for research partnerships, strategic advisory, and embedded project roles.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.12}>
                <div className="contact__links">
                  {[
                    { label: 'Email', value: 'tunglin.sy@gmail.com', href: 'mailto:tunglin.sy@gmail.com' },
                    { label: 'LinkedIn', value: 'linkedin.com/in/tl-sylvia', href: 'https://linkedin.com/in/tl-sylvia' },
                    { label: 'CV', value: 'Download PDF →', href: '/TungLin_CV_2026.pdf' },
                  ].map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="contact-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...(l.label === 'CV' ? { download: 'TungLin_CV_2026.pdf' } : {})}
                    >
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
          <p>© {new Date().getFullYear()} Tung Lin. All rights reserved.</p>
        </footer>

      </div>{/* end .main-content */}

    </PageTransition>
  )
}
