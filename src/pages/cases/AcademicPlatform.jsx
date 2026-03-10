import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'
import { motion } from 'framer-motion'

// ── Inline hero: biomedical data network diagram ──
function DataNetworkHero() {
  const hubs = [
    { id: 'nhird',  x: 120, y: 80,  label: 'NHIRD',        r: 18 },
    { id: 'hosp',   x: 280, y: 60,  label: 'Hospital DBs', r: 14 },
    { id: 'pharm',  x: 60,  y: 155, label: 'Pharma R&D',   r: 12 },
    { id: 'acad',   x: 340, y: 150, label: 'Academia',     r: 14 },
    { id: 'gov',    x: 200, y: 175, label: 'Gov Open Data', r: 12 },
  ]
  const gateway = { x: 500, y: 120 }
  const spokes = hubs.map(h => ({ x1: h.x, y1: h.y, x2: gateway.x, y2: gateway.y }))

  return (
    <svg viewBox="0 0 680 220" style={{ width: '100%', height: '100%' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B2D3A" />
          <stop offset="100%" stopColor="#0F3D4E" />
        </linearGradient>
        <linearGradient id="spokeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3E93A8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7EC8BE" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="gatewayGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#7EC8BE" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7EC8BE" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="680" height="220" fill="url(#bgGrad)" />

      {/* Grid dots */}
      {Array.from({ length: 10 }, (_, col) =>
        Array.from({ length: 5 }, (_, row) => (
          <circle key={`g${col}${row}`}
            cx={30 + col * 65} cy={20 + row * 45} r="1"
            fill="rgba(126,200,190,0.08)" />
        ))
      )}

      {/* Fragmented cloud left */}
      <text x="20" y="14" fill="rgba(126,200,190,0.3)"
        fontSize="7" fontFamily="var(--sans, sans-serif)" letterSpacing="0.1em"
        fontWeight="600" textTransform="uppercase">FRAGMENTED</text>

      {/* Spoke lines */}
      {spokes.map((s, i) => (
        <motion.line key={i}
          x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
          stroke="url(#spokeGrad)" strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }} />
      ))}

      {/* Data flow dots along spokes */}
      {spokes.map((s, i) => (
        <motion.circle key={`dot${i}`} r="2.5"
          fill="#7EC8BE"
          initial={{ offsetDistance: '0%', opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, delay: 1.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            offsetPath: `path('M ${s.x1} ${s.y1} L ${s.x2} ${s.y2}')`,
            offsetDistance: '0%',
          }}>
          <animateMotion
            path={`M ${s.x1} ${s.y1} L ${s.x2} ${s.y2}`}
            dur={`${2 + i * 0.3}s`} repeatCount="indefinite"
            begin={`${1.5 + i * 0.4}s`} />
        </motion.circle>
      ))}

      {/* Source nodes */}
      {hubs.map((h, i) => (
        <motion.g key={h.id}
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}>
          <circle cx={h.x} cy={h.y} r={h.r + 6}
            fill="rgba(62,147,168,0.1)" />
          <circle cx={h.x} cy={h.y} r={h.r}
            fill="#0F3D4E" stroke="#3E93A8" strokeWidth="1.2" />
          <text x={h.x} y={h.y + 3} fill="rgba(255,255,255,0.7)"
            fontSize="6.5" textAnchor="middle" fontFamily="var(--sans, sans-serif)"
            fontWeight="500">{h.label.split(' ')[0]}</text>
        </motion.g>
      ))}

      {/* Gateway glow */}
      <circle cx={gateway.x} cy={gateway.y} r="52" fill="url(#gatewayGlow)" />
      <motion.circle cx={gateway.x} cy={gateway.y} r="38"
        fill="#0F3D4E" stroke="#7EC8BE" strokeWidth="1.5"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }} />
      {/* Pulsing ring */}
      <motion.circle cx={gateway.x} cy={gateway.y} r="38"
        fill="none" stroke="#7EC8BE" strokeWidth="1"
        animate={{ r: [38, 54, 38], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.text x={gateway.x} y={gateway.y - 7} fill="#7EC8BE"
        fontSize="8" textAnchor="middle" fontFamily="var(--sans, sans-serif)"
        fontWeight="700" letterSpacing="0.08em"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        GHD
      </motion.text>
      <motion.text x={gateway.x} y={gateway.y + 5} fill="rgba(126,200,190,0.7)"
        fontSize="6" textAnchor="middle" fontFamily="var(--sans, sans-serif)"
        fontWeight="500" letterSpacing="0.06em"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        GATEWAY
      </motion.text>
      <motion.text x={gateway.x} y={gateway.y + 14} fill="rgba(126,200,190,0.5)"
        fontSize="5.5" textAnchor="middle" fontFamily="var(--sans, sans-serif)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        to Health Data
      </motion.text>

      {/* UNIFIED label */}
      <motion.text x={gateway.x + 56} y={14} fill="rgba(126,200,190,0.3)"
        fontSize="7" fontFamily="var(--sans, sans-serif)" letterSpacing="0.1em"
        fontWeight="600"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        UNIFIED
      </motion.text>
      <motion.line x1="497" y1="18" x2="640" y2="18"
        stroke="rgba(126,200,190,0.15)" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }} />
    </svg>
  )
}

// ── Full-width PDF image with caption ──
function DiagramImage({ src, alt, caption }) {
  return (
    <div style={{ margin: '36px 0' }}>
      <div style={{
        borderRadius: 'var(--r-md)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
      }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          loading="lazy"
        />
      </div>
      {caption && (
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: '0.75rem',
          color: 'var(--ink-3)',
          letterSpacing: '0.02em',
          marginTop: 10,
          paddingLeft: 4,
          lineHeight: 1.5,
        }}>
          {caption}
        </p>
      )}
    </div>
  )
}

// ── Storyboard strip ──
function StoryboardStrip() {
  const panels = [
    { src: '/ghd/p26.jpg', label: 'Act I' },
    { src: '/ghd/p27.jpg', label: 'Act II' },
    { src: '/ghd/p28.jpg', label: 'Act III' },
    { src: '/ghd/p29.jpg', label: 'Act IV' },
  ]
  return (
    <div style={{ margin: '36px 0' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12,
      }}>
        {panels.map((p, i) => (
          <div key={i} style={{
            borderRadius: 'var(--r-sm)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
          }}>
            <img
              src={p.src}
              alt={p.label}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
            <div style={{
              padding: '8px 12px',
              fontFamily: 'var(--sans)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}>
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AcademicPlatform() {
  return (
    <CaseLayout
      tags={['Biomedical', 'Public Sector', 'Published Research']}
      title="The Infrastructure Nobody Mapped: Research for Taiwan's National Health Data Gateway"
      subtitle="A formative user research study commissioned by Taiwan's Ministry of Health and Welfare — uncovering how biomedical researchers find, evaluate, and access data across a fragmented national ecosystem, and translating those findings into platform strategy and information architecture for GHD."
      meta={[
        { label: 'Industry', value: 'Biomedical & Public Sector' },
        { label: 'Methods',  value: 'Contextual Inquiry · Card Sorting · Usability Testing' },
        { label: 'Scope',    value: '6 interviews · 5 industries · National platform' },
        { label: 'Year',     value: '2022' },
      ]}
      nextCase={{ to: '/cases/digital-learning', title: "What the Analytics Couldn't Show: Research for a Media Group's Enterprise Learning Platform" }}
    >

      {/* ── HERO VISUAL ── */}
      <FadeIn>
        <div style={{
          aspectRatio: '16/6', borderRadius: 'var(--r-md)', overflow: 'hidden',
          marginTop: 0, marginBottom: 40, border: '1px solid var(--border)',
        }}>
          <DataNetworkHero />
        </div>
      </FadeIn>

      {/* ── CONTEXT ── */}
      <FadeIn>
        <h2>The Problem: Find, Evaluate, Access</h2>
        <p>Taiwan has world-class biomedical data. The National Health Insurance Research Database alone covers 23 million people across three decades — one of the most complete longitudinal health records in the world. Add to that genomic databases, clinical trial repositories, hospital records, epidemiological surveys from universities and government agencies. The data exists.</p>
        <p>For most researchers, it exists the way a library exists if you don't know it's there, don't have the address, and aren't sure you're allowed in.</p>
        <p>There are three steps between a researcher and the dataset they need. Each one fails in a different way.</p>
        <p>To <strong>find</strong> a dataset, you need to know the right person. Discovery happens through conference conversations, paper citations, departmental contacts — not through any centralised search. A researcher who is new to the field, or new to Taiwan's academic networks, may not know that the dataset they need even exists.</p>
        <p>To <strong>evaluate</strong> it — to determine whether it's suitable before committing to an application — you're largely working blind. Metadata is inconsistent across institutions. Coverage periods and variable lists are rarely surfaced upfront. One participant described it as buying a book with a blank cover.</p>
        <p>To <strong>access</strong> it: submit forms designed for clinical trials, wait two to six months with no visibility into the process, and hope the data turns out to match what the title implied. One researcher described having to travel in person to a secure facility just to look at a dataset on-site. "What year is this?" they asked.</p>
        <p>In 2022, Taiwan's Ministry of Health and Welfare commissioned Island Design Lab to design the user experience for <strong>Gateway to Health Data (GHD)</strong> — a platform that would aggregate datasets from across Taiwan's biomedical ecosystem and make them findable, evaluable, and accessible in one place. Taiwan has long aspired to lead in Open Science; GHD was the infrastructure that could make that real. My role was to lead the formative research: to understand, in detail, where the friction lived and what it would take to remove it.</p>
      </FadeIn>

      {/* ── STAKEHOLDERS ── */}
      <FadeIn>
        <h2>A Platform Between Institutions</h2>
        <p>GHD didn't sit inside one institution. It sat between them. The Ministry of Health and Welfare provided mandate and oversight. Data management units from hospitals, universities, NGOs, and government agencies would contribute datasets. A web development team would build the infrastructure. And researchers — the platform's primary users — came from five distinct industries, each with different workflows, data needs, technical fluency, and definitions of what "good data" looked like.</p>
        <p>Understanding who the platform was actually serving — and how different their needs were — was the first task.</p>

        <DiagramImage
          src="/ghd/p06.jpg"
          alt="Stakeholders and users diagram showing the GHD ecosystem"
          caption="Stakeholder and user landscape. The platform sits at the intersection of data providers, government mandate, technical infrastructure, and five distinct research communities."
        />
      </FadeIn>

      {/* ── RESEARCH FRAMEWORK ── */}
      <FadeIn>
        <h2>Research Framework</h2>
        <p>We structured the engagement across four phases — exploratory research, design ideation, design development, and post-launch optimisation. The formative work documented here covered the first two: building the evidence base and translating it into platform strategy and information architecture.</p>
        <p>Six in-depth interviews, two hours each, across five research industries. Contextual inquiry as participants navigated reference platforms. Card-sorting to surface filter priorities. Secondary research on international biomedical data discovery platforms — UK HDR, NIH GDC, PhysioNet — to understand where Taiwan sat within a global landscape that had been shifting rapidly toward open, federated access.</p>

        <DiagramImage
          src="/ghd/p07.jpg"
          alt="Research framework diamond diagram showing four phases"
          caption="Four-phase research framework. Each phase narrows the scope: from broad contextual inquiry to validated design recommendations."
        />

        <p>Participants were split between junior researchers (5–10 years) and research leads (10+ years), ensuring findings reflected both the immediate search behaviour of active users and the strategic framing of senior decision-makers. Anyone with market research or design industry backgrounds was excluded, to preserve naturalistic behaviour when navigating unfamiliar platforms.</p>
      </FadeIn>

      {/* ── USER JOURNEY ── */}
      <FadeIn>
        <h2>Where Time Was Being Lost</h2>
        <p>The research surfaced a journey with four stages — Identifying, Searching, Applying, Acquiring. At each stage, a consistent pattern of friction. What the map made visible wasn't the steps themselves; it was the gap between what researchers expected to be simple and what the system had made complicated.</p>

        <DiagramImage
          src="/ghd/p15.jpg"
          alt="User journey map showing four stages: Identifying, Searching, Applying, Acquiring"
          caption="User journey map across four stages. Pain points cluster around the transition from searching to applying — the moment when researchers lose visibility into what a dataset actually contains."
        />

        <p>The pattern was consistent across industries: the earlier stages, where motivation is high and intent is clear, were the most undermined. Researchers who had already decided they wanted a dataset were then faced with months of waiting, uncertain paperwork, and the possibility that the data wouldn't match what the abstract had suggested.</p>
      </FadeIn>

      {/* ── KEY INSIGHTS ── */}
      <FadeIn>
        <h2>What the Research Found</h2>
        <p>Three findings recurred across every interview, regardless of which industry the researcher came from or how long they had been working.</p>

        <DiagramImage
          src="/ghd/p16.jpg"
          alt="Key insights from the GHD formative research, including participant quotes"
          caption="Key insights and participant voice. The quotes are direct — researchers describing, without prompting, the gap between what a data access system should do and what theirs actually does."
        />

        <p>The first: discovery didn't happen on platforms. It happened through people. Senior researchers relied on colleague recommendations; junior researchers didn't know what search terms to use, or even whether a dataset they needed existed. The platform needed to function as a discovery tool for researchers who couldn't yet articulate what they were looking for.</p>
        <p>The second: evaluation was nearly impossible before committing to an application. The "blank cover" wasn't a metaphor — it was the operational reality. Coverage periods, variable completeness, and data linkage options were either absent or buried in documentation written for data engineers, not researchers. Researchers were making application decisions with almost no information.</p>
        <p>The third was structural. Approval processes inherited from clinical trial frameworks had been applied, without modification, to routine data access requests. Two to six months of waiting. No status visibility. Formats that required information about patient consent and trial protocols for what was, in most cases, a retrospective database query. One researcher had adapted by physically visiting a secure facility. Another had learned to submit multiple applications simultaneously, treating each one as a lottery.</p>
      </FadeIn>

      {/* ── DESIGN STRATEGY ── */}
      <FadeIn>
        <h2>From Friction to Design</h2>
        <p>Each insight mapped to a design principle. The strategy wasn't about adding features — it was about removing friction at the three points where researchers most consistently lost time and motivation: finding, evaluating, and applying.</p>

        <DiagramImage
          src="/ghd/p17.jpg"
          alt="Three-column diagram mapping insights to design principles to platform improvements"
          caption="From insights to design principles to platform improvements. The column structure reflects the discipline of the translation: every feature decision traces back to an observed behaviour."
        />

        <p>The Search Wizard — a six-step guided filter tool — addresses the discovery gap for researchers who don't yet know what search terms to use. Quality Tier Indicators (Bronze to Platinum) surface dataset reliability at search result level, not buried inside detail pages. Time Lag becomes a front-page filter, not a metadata afterthought. And access requirements — tier, estimated approval timeline, required credentials — are shown before a researcher commits to applying. The blank cover, replaced by a jacket with a synopsis.</p>
      </FadeIn>

      {/* ── STORYBOARD ── */}
      <FadeIn>
        <h2>The Platform in Motion</h2>
        <p>To translate the research into a shared product vision, we developed a storyboard. Four acts. A researcher who, for the first time, can find a dataset, read its metadata, apply with transparency, and — eventually — access it without leaving their desk.</p>
        <p>The storyboard was a communication tool as much as a design artefact: a way of making the research findings visceral for stakeholders who had lived inside the current system long enough to stop noticing how much it asked of its users.</p>

        <StoryboardStrip />
      </FadeIn>

      {/* ── PUBLICATION + REPORT DOWNLOAD ── */}
      <FadeIn>
        <div style={{
          background: 'linear-gradient(135deg, #0F3D4E 0%, #1A5C72 100%)',
          borderRadius: 'var(--r-md)',
          padding: '36px 40px',
          margin: '48px 0 0',
          display: 'flex',
          gap: 40,
          alignItems: 'flex-start',
        }}>
          <div style={{ flex: '0 0 auto' }}>
            <div style={{
              width: 48, height: 48,
              background: 'rgba(126,200,190,0.15)',
              borderRadius: 8,
              border: '1px solid rgba(126,200,190,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#7EC8BE" strokeWidth="1.5"/>
                <path d="M7 8h10M7 12h10M7 16h6" stroke="#7EC8BE" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(126,200,190,0.7)', marginBottom: 10,
            }}>Peer-Reviewed Publication · 2023</p>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: '1.08rem',
              color: '#fff', lineHeight: 1.5, marginBottom: 8,
            }}>
              Formative Interviews for a User-Centred Design Study on Developing an Effective Gateway for Biomedical Data Discovery
            </p>
            <p style={{
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.6, marginBottom: 24,
            }}>
              <em>Computer Science and Information Systems (ComSIS)</em>, ComSIS Consortium. This paper documents the mixed-methods formative research process — from stakeholder mapping and contextual inquiry through to insight synthesis — and presents the information architecture recommendations derived from the study.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="https://orcid.org/0009-0008-9499-7505"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600,
                  color: '#7EC8BE',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(126,200,190,0.4)',
                  paddingBottom: 2,
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                View on ORCID ↗
              </a>
              <a
                href="/ghd/GHD_report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600,
                  color: 'rgba(126,200,190,0.8)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(126,200,190,0.25)',
                  paddingBottom: 2,
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                Download Research Report (PDF)
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

    </CaseLayout>
  )
}
