import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn, PageTransition } from '../components/FadeIn'
import Footer from '../components/Footer'

/* ── Sidebar data ── */
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

const methods = [
  'Contextual Inquiry',
  'Design Probes',
  'Concept Testing',
  'Speculative Design',
  'Participatory Workshops',
  'Research through Design',
]

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } }
}
const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

/* ── Inline case link component ── */
function CaseLink({ to, title, year }) {
  return (
    <Link to={to} className="essay__case-link">
      <span className="essay__case-title">{title}</span>
      <span className="essay__case-year">{year}</span>
    </Link>
  )
}

export default function Home() {
  return (
    <PageTransition>

      {/* ── HERO — fullscreen camellia photo (unchanged) ── */}
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
        {/* Name and frosted glass removed — hero is pure photo */}

        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.2 }}
        >
          <motion.div
            className="hero__scroll-line"
            animate={{ scaleY: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.svg
            className="hero__scroll-chevron"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <polyline
              points="18 15 12 21 6 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT — essay + sidebar ── */}
      <div id="main" className="main-content">
        <div className="wrap">
          <div className="essay">

            {/* ── LEFT: Continuous article ── */}
            <article className="essay__article">

              {/* ── Opening: The Discovery ── */}
              <FadeIn>
                <p className="essay__lead">Once you see how designed environments teach bodies what is possible, the question is no longer &ldquo;how might we design better systems?&rdquo; but &ldquo;what might happen if we designed <em>with</em> the bodies that are currently being designed <em>around</em>?&rdquo;</p>
              </FadeIn>

              {/* ── The Pattern ── */}
              <FadeIn>
                <h3 className="essay__section-title">Patterns of Attention</h3>
                <p>Six years of practice have surfaced a recurring observation: <strong>the fabric of everyday environments shapes which bodies are welcome, which needs become visible, and which forms of participation are imaginable.</strong> In every case, the most consequential design decisions were the ones nobody had made deliberately. They had accumulated — in metadata schemas, platform architectures, spatial arrangements, institutional workflows — until they felt inevitable. And in every case, optimising for smoother interaction risked making that fabric harder to see — a pattern that sustainability researchers recognise as rebound effect, where systems designed to reduce friction end up obscuring the conditions they were meant to address.</p>
              </FadeIn>

              {/* ── Origin: MFA work (reordered with Beyond100% first) ── */}
              <FadeIn>
                <p>This insight did not arrive suddenly. At Parsons, I learned to use design as a method for asking questions that conventional research cannot hold. My making practice spans physical prototyping — woodworking, metalworking, Arduino — alongside design probes and research instruments. Writing runs through all of it: not to report, but to stay near the complexity while it&apos;s alive.</p>
              </FadeIn>

              <FadeIn>
                <p>In <CaseLink to="/cases/beyond-100" title="Beyond 100%" year="2018" />, I designed a speculative biotechnology — hand-fabricated and 3D printed — imagining how a chip could reshape humanity&apos;s relationship with food in a 2070 population crisis. The artifacts were exhibited at MoMA. But the real learning was methodological: every design detail I had to commit to surfaced a political choice I hadn&apos;t anticipated. <CaseLink to="/cases/air-spaces" title="The Air We Share" year="2017" /> took a different path to the same question: I built a walk-in geodesic dome where people could sense air quality through their bodies — after discovering that an Arduino sensor produced data but no awareness. My thesis, <CaseLink to="/cases/out-edge" title="Out/Edge" year="2019" />, asked whether we could redesign online political discourse through silence and co-vulnerability. Design research, I discovered, was not separate from philosophy. It was philosophy made tangible.</p>
              </FadeIn>

              {/* ── Bridge: philosophy → industry ── */}
              <FadeIn>
                <p>Philosophy came first, then seven years of teaching in Taiwan — where I learned that staying with a hard question is itself a discipline. That habit followed me into design, and back in Taipei I brought it into industry: sharpening my methods across health data, luxury retail, media, and arts education.</p>
              </FadeIn>

              <FadeIn>
                <p>In <CaseLink to="/cases/academic-platform" title="National Health Data Gateway" year="2023" />, I spent months observing how biomedical researchers navigate 50+ fragmented databases. What surfaced was not broken UX, exactly — it was something deeper. Researchers had stopped expecting discovery to be possible without personal connections. Their workarounds had calcified into infrastructure — not because anyone had designed it that way, but because no one had designed it at all. The research was <a href="https://doi.org/10.2298/CSIS241204069L" target="_blank" rel="noopener noreferrer">published in ComSIS</a>.</p>
              </FadeIn>

              <FadeIn>
                <p>In <CaseLink to="/cases/luxury-vip-app" title="The Camera Roll as Wardrobe" year="2022" />, I worked with high-net-worth clients managing their wardrobes. They had learned to trust their phone&apos;s camera roll more than the luxury systems built specifically to serve them — because no designed platform had made room for the actual complexity of how they related to clothes. The invisible design was not in the interface but in the assumptions about what a wardrobe means.</p>
              </FadeIn>

              <FadeIn>
                <p>In <CaseLink to="/cases/arts-education" title="Lockdown as Catalyst" year="2021" />, I researched whether a deeply embodied performing arts pedagogy could extend online. The pedagogy had been built on co-presence and shared rhythm — things a digital medium could not transmit. What I found was that each engagement tool designed to hold a child&apos;s focus risked undermining what made the institution worth attending. Some practices live in the body, and the body needs other bodies nearby. That&apos;s not a metaphor — it&apos;s a material fact that only became legible by designing around it.</p>
              </FadeIn>

              {/* ── Turning point + PhD intent ── */}
              <FadeIn>
                <p>I am also a mother. That changed everything — not as metaphor, but as a shift in what I notice: whose bodies are accommodated, whose needs get assumed, whose rhythms count as productive.</p>
                <p>The home is where this becomes most visible. Care work that once happened invisibly — laundry, temperature, air quality — is now distributed across systems designed to reduce friction: the washing machine that runs while I sleep, the air purifier humming in the background. But here&apos;s what design obscures: these systems don&apos;t eliminate the labor, they relocate it. I become responsible for maintaining the machines, monitoring their outputs, learning their logics. This is a feminist STS question. It asks how designed systems shape what counts as care, which bodies bear responsibility, which rhythms become naturalised as normal.</p>
                <p>What I&apos;m beginning to see, through living inside this problem, is that the moments when home life feels sustainable are not moments of control — not sleek dashboards or optimised flows — but moments when there&apos;s room for things to unfold without predetermined outcomes. I want to investigate design aesthetics that create space for emergence rather than efficiency. Practice has surfaced these patterns but cannot fully articulate them. Doctoral research would give me the methodologies and theoretical grounding to develop a more rigorous investigation into how design might acknowledge, rather than erase, the labour embedded in care.</p>
              </FadeIn>

              {/* ── Education ── */}
              <FadeIn>
                <div className="essay__edu">
                  <div className="edu-item">
                    <p className="edu-item__degree">MFA, Transdisciplinary Design</p>
                    <p className="edu-item__school">Parsons School of Design — The New School, 2019</p>
                  </div>
                  <div className="edu-item">
                    <p className="edu-item__degree">BA, Philosophy · Presidential Award</p>
                    <p className="edu-item__school">National Taiwan University, 2014</p>
                  </div>
                </div>
              </FadeIn>
            </article>

            {/* ── RIGHT: Sidebar (sticky) ── */}
            <aside className="essay__sidebar">
              <FadeIn delay={0.15}>

                <div className="sidebar__section">
                  <h3 className="sidebar__heading">Experience</h3>
                  <ul className="sidebar__timeline">
                    {experience.map(e => (
                      <li key={e.role} className="sidebar__timeline-item">
                        <span className="sidebar__period">{e.period}</span>
                        <span className="sidebar__role">{e.role}</span>
                        <span className="sidebar__company">{e.company}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar__section">
                  <h3 className="sidebar__heading">Recognition</h3>
                  <ul className="sidebar__recognition">
                    {recognition.map(r => (
                      <li key={r.title} className="sidebar__recognition-item">
                        <span className="sidebar__recognition-type">{r.type}</span>
                        {r.link
                          ? <a href={r.link} target="_blank" rel="noopener noreferrer" className="sidebar__recognition-title">{r.title} ↗</a>
                          : <span className="sidebar__recognition-title">{r.title}</span>
                        }
                        <span className="sidebar__recognition-venue">{r.venue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar__section">
                  <h3 className="sidebar__heading">Methods</h3>
                  <div className="sidebar__methods">
                    {methods.map(m => (
                      <span key={m} className="sidebar__method-tag">{m}</span>
                    ))}
                  </div>
                </div>

              </FadeIn>
            </aside>

          </div>{/* end .essay */}
        </div>{/* end .wrap */}

        {/* ── CONTACT ── */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact__grid">
              <FadeIn>
                <div>
                  <span className="eyebrow">Contact</span>
                  <h2 className="contact__headline">
                    Let&apos;s start<br /><em>a conversation.</em>
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
