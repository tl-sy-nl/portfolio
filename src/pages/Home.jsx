import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn, PageTransition } from '../components/FadeIn'
import Footer from '../components/Footer'
/* TopographicHero removed — hero is now quiet, image-based */

/* ── All work — unified, sorted by year (newest first) ── */
const work = [
  {
    to: '/cases/academic-platform',
    title: 'National Health Data Gateway',
    desc: 'How biomedical researchers navigate 50+ fragmented databases — and what their workarounds reveal about how infrastructure could work differently.',
    tags: ['Public Sector', 'Published in ComSIS'],
    year: '2023',
    role: 'UX Researcher · Island Design Lab',
    pattern: 'health',
  },
  {
    to: '/cases/luxury-vip-app',
    title: 'The Camera Roll as Wardrobe',
    desc: 'How high-net-worth clients actually manage their wardrobes — and why a phone gallery became the unexpected centre of the experience.',
    tags: ['Luxury Retail', '0-to-1 Product'],
    year: '2022',
    role: 'Senior UX Researcher · AJA Creative',
    pattern: 'luxury',
  },
  {
    to: '/cases/arts-education',
    title: 'Lockdown as Catalyst',
    desc: 'Whether a deeply embodied performing arts pedagogy could extend online — and what platform architecture could preserve its values.',
    tags: ['Arts & Culture', 'Discovery Research'],
    year: '2021',
    role: 'Senior UX Researcher · AJA Creative',
    pattern: 'arts',
  },
  {
    to: '/cases/out-edge',
    title: 'Out/Edge',
    desc: 'Redesigning online political discourse through silence, co-vulnerability, and open-source conversation tools.',
    tags: ['MFA Thesis', 'Parsons School of Design'],
    year: '2019',
    role: 'MFA Candidate · Parsons',
    pattern: 'outedge',
  },
  {
    to: '/cases/beyond-100',
    title: 'Beyond 100%',
    desc: 'Speculative biodesign imagining how a chip could reshape humanity\'s relationship with food in a 2070 population crisis.',
    tags: ['BioDesign Challenge', 'Exhibited at MoMA'],
    year: '2018',
    role: 'Designer · Parsons',
    pattern: 'beyond',
  },
]

/* ── Experience = things I did (career + teaching + leadership) ── */
const experience = [
  { period: 'Jan 2020 – Present', role: 'Design Strategist', company: 'Island Design Lab' },
  { period: 'Jan 2021 – Jul 2023', role: 'Senior UX Researcher', company: 'AJA Creative Design' },
  { period: 'Jan 2022 – Jan 2023', role: 'Advisory Committee Member', company: 'The National Palace Museum' },
  { period: 'Sep 2020 – Jan 2022', role: 'Chapter Co-founder', company: 'The Design Futures Initiative' },
  { period: 'Nov 2020 – Apr 2021', role: 'User Researcher', company: 'Alphateam' },
  { period: 'Oct 2019 – May 2020', role: 'Product Manager', company: 'Airiti Inc.' },
  { period: '2013 – 2014', role: 'President, Philosophy Student Association', company: 'National Taiwan University' },
  { period: '2012 – 2014', role: 'Ethics Teaching Assistant', company: 'National Taiwan University' },
]

/* ── Recognition = things I was recognized for (publication + exhibition only) ── */
const recognition = [
  {
    type: 'Publication',
    title: 'Formative Interviews for a User-Centred Design Study on Developing an Effective Gateway for Biomedical Data Discovery',
    venue: 'ComSIS, Vol. 20, No. 4, 2023',
    link: 'https://doi.org/10.2298/CSIS241204069L',
  },
  {
    type: 'Exhibition',
    title: 'Biodesign Challenge Summit',
    venue: 'MoMA, New York · San Francisco · Rhode Island, 2019',
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

      {/* ── HERO — fullscreen camellia photo ── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/images/hero-camellia.webp"
            alt="Fallen camellia petals resting on green moss"
            width="2500"
            height="1674"
            fetchpriority="high"
          />
        </div>
        <motion.div
          className="hero__content"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero__name" variants={heroItem}>
            Tung<br />Lin
          </motion.h1>
          <motion.p className="hero__tagline" variants={heroItem}>
            Philosophy-trained design researcher,<br />
            exploring how urban spaces exclude children — through soma design, feminist STS, and research through design.
          </motion.p>
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
      <div id="main" className="main-content">

        {/* ── WORK — 2-column grid with CSS geometric art ── */}
        <section id="work" className="work">
          <div className="wrap">
            <FadeIn>
              <span className="eyebrow">Work</span>
            </FadeIn>

            <div className="work-stack">
              {work.map((p, i) => (
                <FadeIn key={p.to} delay={i * 0.08}>
                  <Link to={p.to} className="work-item">
                    <span className="work-item__num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="work-item__body">
                      <p className="work-item__meta">{p.year} · {p.tags.join(' · ')}</p>
                      <h3 className="work-item__title">{p.title}</h3>
                      <p className="work-item__desc">{p.desc}</p>
                      <p className="work-item__role">{p.role}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── PATTERNS OF ATTENTION — cross-case reflection ── */}
        <section className="reflection" id="reflection">
          <div className="wrap">
            <FadeIn>
              <span className="eyebrow">Patterns of Attention</span>
              <div className="reflection__body">
                <p>Across five projects spanning health data, luxury retail, performing arts, political discourse, and speculative biodesign, a recurring pattern surfaced: the fabric of designed environments doesn't merely contain human action — it teaches bodies what is possible and what is not worth asking for. In every case, the most consequential design decisions were the ones nobody had made deliberately. They had accumulated — in metadata schemas, platform architectures, spatial arrangements, institutional workflows — until they felt inevitable.</p>
                <p>In health data, researchers had stopped expecting discovery to be possible without personal connections. In luxury retail, clients had learned to trust their camera rolls more than the systems built to serve them. In performing arts, a pedagogy built on co-presence and rhythm confronted a digital medium that could transmit image and sound but not shared breath. In political discourse, silence — the thing platforms are designed to eliminate — turned out to be the condition under which vulnerability, and therefore genuine exchange, became possible.</p>
                <p>These are not five separate findings. They are variations on a single observation: that the fabric of everyday environments shapes which bodies are welcome, which needs become visible, and which forms of participation are imaginable. Design research — particularly when grounded in contextual inquiry and sustained observation rather than self-report — can make that fabric legible. Not to fix it from above, but to open it to contestation.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── WHAT THE WORK HAS MADE VISIBLE — PhD research intent ── */}
        <section className="research-intent" id="research-intent">
          <div className="wrap">
            <FadeIn>
              <span className="eyebrow">What the Work Has Made Visible</span>
              <div className="research-intent__body">
                <p>Making that fabric legible is only the beginning. Once you see how designed environments teach bodies what is possible, the question shifts: it is no longer "how might we design better systems?" but "what might happen if we designed <em>with</em> the bodies that are currently being designed <em>around</em>?"</p>
                <p>This is a feminist STS question. It asks how design — and designed spaces, systems, platforms — shapes which bodies matter, which temporalities count as productive, which needs rise to the level of visibility. I am specifically interested in the spaces where this happens most invisibly: urban environments that children move through every day but had no part in shaping. Drawing on soma design, I want to investigate what children's bodies already know about these spaces — knowledge that is carried in gesture, hesitation, and play, but that has no seat at the table where design decisions are made.</p>
                <p>If we could reveal how childhood is systematically designed out of public space, then design research gains a new ethics: not just responding to users' stated needs, but questioning whose needs are never asked. This is what five projects and six years of practice have surfaced but cannot yet fully articulate — and why I am seeking doctoral research to develop the methodologies, theoretical grounding, and sustained inquiry that practice alone cannot generate.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── ABOUT — dual-column: narrative left, lists right ── */}
        <section className="about" id="about">
          <div className="about__bg" aria-hidden="true" />
          <div className="wrap">
            <div className="about__grid">

              {/* ── Left column: narrative ── */}
              <div className="about__narrative">
                <FadeIn>
                  <span className="eyebrow">About</span>
                  <h2 className="about__headline">
                    I make the invisible<br />
                    <em>legible.</em>
                  </h2>
                  <p className="about__phd-intent">Currently exploring doctoral programmes in feminist STS, soma design, and research through design — asking how the fabric of urban environments excludes children as legitimate spatial participants, and what somatic knowledge six years of design research practice have surfaced but cannot yet fully articulate.</p>
                  <div className="about__body">
                    <p>Philosophy first, then teaching. Seven years with students in Taiwan taught me that staying with a hard question is itself a discipline. That habit followed me into design.</p>
                    <p>At Parsons I learned to use design as a method for asking questions that conventional research cannot hold — a speculative biodesign at MoMA, a thesis on political silence. My making practice spans physical prototyping — woodworking, metalworking, Arduino — alongside design probes and research instruments. Writing runs through all of it: not to report, but to stay near the complexity while it&apos;s alive.</p>
                    <p>Back in Taipei, I brought research through design into industry — sharpening my methods across health data, luxury retail, media, and arts education, while facilitating workshops that helped teams surface the shared vision and first viable steps that meetings alone could not reach.</p>
                    <p>I am also a mother; that changed everything. Now, one preoccupation: making the invisible legible, so that what bodies already know can enter the conversation.</p>
                  </div>
                  <div className="about__edu">
                    <p className="about__edu-title">Education</p>
                    <div className="about__edu-items">
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

              {/* ── Right column: experience + recognition ── */}
              <div className="about__sidebar">
                <FadeIn delay={0.15}>
                  <div className="about__list-section">
                    <h3 className="about__list-heading">Experience</h3>
                    <ul className="about__timeline">
                      {experience.map(e => (
                        <li key={e.role} className="about__timeline-item">
                          <span className="about__timeline-period">{e.period}</span>
                          <span className="about__timeline-role">{e.role}</span>
                          <span className="about__timeline-company">{e.company}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="about__list-section">
                    <h3 className="about__list-heading">Recognition</h3>
                    <ul className="about__recognition">
                      {recognition.map(r => (
                        <li key={r.title} className="about__recognition-item">
                          <span className="about__recognition-type">{r.type}</span>
                          {r.link
                            ? <a href={r.link} target="_blank" rel="noopener noreferrer" className="about__recognition-title">{r.title} ↗</a>
                            : <span className="about__recognition-title">{r.title}</span>
                          }
                          <span className="about__recognition-venue">{r.venue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>

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
                    Let's start<br /><em>a conversation.</em>
                  </h2>
                  <p className="contact__sub">Based in Taipei — open to research collaborations, academic exchange, and new ways of thinking together.</p>
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

        <Footer />

      </div>{/* end .main-content */}

    </PageTransition>
  )
}
