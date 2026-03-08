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

// ── Research framework diamond diagram ──
function ResearchFrameDiagram() {
  const phases = [
    { x: 60,  label: 'Exploratory\nResearch',  sub: 'Contextual Inquiry\nObservational Study\nCard Sorting' },
    { x: 200, label: 'Design\nIdeation',       sub: 'Persona · Journey Map\nKey Insights\nDesign Strategy' },
    { x: 340, label: 'Design\nDevelopment',    sub: 'Storyboard\nUser Flow\nIA & Interaction' },
    { x: 480, label: 'Post-Launch\nOptimisation', sub: 'AB Testing\nUsability Testing' },
  ]
  return (
    <svg viewBox="0 0 580 130" style={{ width: '100%', maxHeight: 130 }} aria-hidden="true">
      {/* Track line */}
      <line x1="60" y1="65" x2="520" y2="65"
        stroke="rgba(14,31,36,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Diamond connectors */}
      {[130, 270, 410].map((x, i) => (
        <circle key={i} cx={x} cy={65} r="5"
          fill="#1A5C72" />
      ))}
      {phases.map((p, i) => (
        <g key={i}>
          {/* Diamond shape */}
          <polygon
            points={`${p.x},45 ${p.x+20},65 ${p.x},85 ${p.x-20},65`}
            fill="none" stroke="#1A5C72" strokeWidth="1.5" />
          {/* Phase label */}
          <text x={p.x} y={105} textAnchor="middle" fontSize="8.5"
            fill="#0E1F24" fontFamily="var(--sans, sans-serif)" fontWeight="600">
            {p.label.split('\n').map((line, li) => (
              <tspan key={li} x={p.x} dy={li === 0 ? 0 : 11}>{line}</tspan>
            ))}
          </text>
        </g>
      ))}
      {/* Arrow */}
      <path d="M 515 61 L 525 65 L 515 69" fill="none" stroke="#1A5C72" strokeWidth="1.5" />
    </svg>
  )
}

// ── Inline data quality dimension grid ──
function DataQualityGrid() {
  const dims = [
    {
      n: '01', title: 'Completeness',
      body: 'Data must cover required fields consistently over time. Gaps in temporal coverage or missing variables signal low research utility.',
      quote: '"Completeness is fundamental — if a third of records are missing key variables, the database is unusable for us."',
    },
    {
      n: '02', title: 'Collaboration Utility',
      body: 'Standardised field definitions and unified formats enable data linkage and multi-institutional analysis without weeks of cleaning.',
      quote: '"I need to merge data across institutions. If every hospital uses a different variable name for the same thing, that\'s a week of work."',
    },
    {
      n: '03', title: 'Accessibility',
      body: 'Friendly application processes, short approval timelines, and appropriate data retrieval mechanisms reduce research delays.',
      quote: '"The approval process takes 6 months. I\'ve had studies stall because I couldn\'t get access to data I knew existed."',
    },
    {
      n: '04', title: 'Maturity',
      body: 'Data collected over a sufficient time span allows longitudinal analysis and reduces the need for repeated applications as records update.',
      quote: '"A dataset that only covers two years can\'t answer survival questions. Maturity is about whether the data can carry a hypothesis to completion."',
    },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '32px 0' }}>
      {dims.map(d => (
        <div key={d.n} style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-md)',
          padding: '20px 22px',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
            <span style={{
              fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--accent-warm)',
            }}>{d.n}</span>
            <span style={{
              fontFamily: 'var(--display)', fontSize: '0.95rem', fontWeight: 600,
              color: 'var(--ink)', letterSpacing: '-0.01em',
            }}>{d.title}</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 12 }}>
            {d.body}
          </p>
          <blockquote style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: '0.82rem', color: 'var(--ink-3)',
            lineHeight: 1.6, borderLeft: '2px solid var(--accent-warm)',
            paddingLeft: 12, margin: 0,
          }}>
            {d.quote}
          </blockquote>
        </div>
      ))}
    </div>
  )
}

// ── Key insight card ──
function InsightCard({ n, headline, evidence, quotes }) {
  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      paddingTop: 24,
      paddingBottom: 24,
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 32,
    }}>
      <div>
        <span style={{
          display: 'block',
          fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--accent-warm)', marginBottom: 6,
        }}>Insight {n}</span>
        <span style={{
          fontFamily: 'var(--display)', fontSize: '0.85rem', fontWeight: 500,
          color: 'var(--ink-3)', lineHeight: 1.5,
        }}>{headline}</span>
      </div>
      <div>
        <p style={{ fontSize: '0.88rem', color: 'var(--ink-2)', marginBottom: 12 }}>{evidence}</p>
        {quotes.map((q, i) => (
          <p key={i} style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: '0.85rem', color: 'var(--ink-3)',
            lineHeight: 1.65, marginBottom: 8,
            borderLeft: '2px solid var(--border)', paddingLeft: 14,
          }}>"{q}"</p>
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
      subtitle="Formative research commissioned by Taiwan's Ministry of Health and Welfare — uncovering how biomedical researchers discover, evaluate, and access data across 50+ fragmented institutions, then translating findings into product strategy and information architecture for a unified national gateway."
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
        <h2>The Problem: 50+ Platforms, No Way In</h2>
        <p>Taiwan has world-class biomedical data. The National Health Insurance Research Database (NHIRD) alone covers 23 million people over decades. Hospitals, universities, government agencies, and pharma companies all maintain their own datasets — genomic, clinical, epidemiological, administrative. But none of them talk to each other.</p>
        <p>For a researcher studying long-term disease progression, finding the right dataset means searching through academic papers, calling colleagues, and navigating application processes that can take six months to complete — only to discover the data lacks the variables they actually need.</p>
        <p>In 2022, Taiwan's Ministry of Health and Welfare commissioned Island Design Lab to design the user experience for <strong>Gateway to Health Data (GHD)</strong> — a unified national platform that would aggregate datasets from across Taiwan's fragmented biomedical ecosystem and make them searchable, evaluable, and accessible in one place.</p>
        <p>My role was to lead the formative user research: understand how biomedical researchers currently find, evaluate, and access data — and what that meant for how the platform should be built.</p>
      </FadeIn>

      {/* ── STAKEHOLDERS ── */}
      <FadeIn>
        <h2>A Complex Stakeholder Ecosystem</h2>
        <p>The platform sat at the intersection of multiple institutions. The Ministry of Health and Welfare provided direction and mandate. Platform management units from hospitals, universities, NGOs, and government agencies would contribute data. A web development team would build the infrastructure. And researchers — the primary users — came from five distinct industries, each with different workflows, data needs, and technical capabilities.</p>

        <div className="callout">
          <h4>Five Research Sectors Represented</h4>
          <ul>
            <li><strong>Pharmaceutical R&D</strong> — genomic and clinical trial datasets; high technical fluency</li>
            <li><strong>Health Information Services</strong> — epidemiological data; focus on population-level patterns</li>
            <li><strong>Medical Support Services</strong> — clinical trial coordination; complex multi-institution workflows</li>
            <li><strong>Medical Device Testing & R&D</strong> — biomarker and regulatory data; IRB-heavy access processes</li>
            <li><strong>Academic Institutions</strong> — broad, longitudinal datasets; familiarity with international platforms</li>
          </ul>
        </div>
      </FadeIn>

      {/* ── RESEARCH FRAMEWORK ── */}
      <FadeIn>
        <h2>Research Framework</h2>
        <p>We structured the engagement across four phases, using design tools to progressively narrow from exploration to validated product direction. The formative phase — the work documented here — covered exploratory research and design ideation, producing the evidence base that informed GHD's information architecture and product strategy.</p>

        <div style={{ background: 'var(--surface)', borderRadius: 'var(--r-md)', padding: '28px 24px', margin: '28px 0', border: '1px solid var(--border)', overflowX: 'auto' }}>
          <ResearchFrameDiagram />
        </div>

        <p>The research addressed four core questions: how do users define high-quality data? What tasks are they trying to accomplish, and what drives their choices? What do they use instead of GHD — and why? And what do they already understand (or misunderstand) about data aggregation platforms?</p>

        <div className="callout">
          <h4>Research Activities</h4>
          <ul>
            <li>6 one-on-one depth interviews (2 hours each), across 5 industries</li>
            <li>Contextual inquiry as participants navigated competing platforms (NHIS, TCGA, PhysioNet, data.gov.tw)</li>
            <li>Card-sorting structured evaluation: filter priority (篩選條件偏好) and data utility dimensions</li>
            <li>Secondary research on international biomedical data discovery platforms (UK HDR, NIH GDC)</li>
            <li>Stakeholder interviews with MOHW project leads</li>
          </ul>
        </div>

        <p>Participants were split between junior researchers (5–10 years' experience) and research leads (10+ years), ensuring findings reflected both the immediate search behaviour of active users and the strategic framing of senior decision-makers. We excluded anyone with market research or design industry backgrounds to preserve naturalistic behaviour.</p>
      </FadeIn>

      {/* ── DATA QUALITY FINDINGS ── */}
      <FadeIn>
        <h2>How Researchers Describe Data Quality</h2>
        <p>Before we could design a search experience, we needed to understand what "good data" meant to users — because a platform that surfaces the wrong datasets quickly is still a failing platform. Users described quality along four consistent dimensions.</p>

        <DataQualityGrid />

        <p>This taxonomy directly informed how GHD should present metadata in search results: rather than exposing raw fields, the platform should surface quality signals aligned to these four dimensions — reducing the cognitive work of evaluation and enabling faster, more confident decisions.</p>
      </FadeIn>

      {/* ── KEY INSIGHTS ── */}
      <FadeIn>
        <h2>Key Insights</h2>
        <div style={{ margin: '28px 0' }}>
          <InsightCard
            n="1"
            headline="Fragmented data forces researchers to spend weeks on discovery"
            evidence="None of our participants had a systematic way to find datasets. Discovery happened through colleagues, conference references, and paper citations — not through platform search. Senior researchers particularly had no habit of using search engines for datasets, because no credible aggregated source existed."
            quotes={[
              "I don't even know if the dataset I need exists or where to find it.",
              "I spend weeks finding a dataset, only to realise half the variables are missing.",
            ]}
          />
          <InsightCard
            n="2"
            headline="Inconsistent formats multiply the cost of every download"
            evidence="Even when researchers found a promising dataset, the real work began after access. Variable names for identical concepts differed across institutions, units were inconsistent, and linking records across databases required weeks of cleaning. The platform's information architecture — not just search — needed to address this at source."
            quotes={[
              "Different datasets call the same variable ten different names. Cleaning this will take forever.",
              "I downloaded the wrong dataset again. This could've been avoided if I had more information upfront.",
            ]}
          />
          <InsightCard
            n="3"
            headline="Approval processes are opaque and unpredictable, disrupting research timelines"
            evidence="IRB applications for health data in Taiwan can take two to six months. Researchers often have no visibility into where their application stands, and the required formats are designed for clinical trials rather than data access. The platform needed to make this process transparent and, where possible, streamlined."
            quotes={[
              "The approval process takes months, but I can't even see what's inside a dataset before applying. It's like buying a book with a blank cover.",
              "It takes two months to get approval and I have no visibility into the process. By the time I get access, my research timeline has shifted.",
            ]}
          />
        </div>
      </FadeIn>

      {/* ── FILTER PRIORITY RESEARCH ── */}
      <FadeIn>
        <h2>Filter Priority Research: What Actually Matters</h2>
        <p>To inform the platform's search filter architecture, we ran a card-sorting evaluation. Participants reviewed filter categories from international reference platforms (UK HDR, NIH GDC) and selected the 3–5 most useful criteria for their work. The findings were specific and occasionally surprising.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '24px 0' }}>
          {[
            { category: 'Coverage', note: 'Universal — both geographic and temporal coverage. Researchers across all domains selected this first.', priority: 'High' },
            { category: 'Time Lag', note: 'How long between data collection and availability. Universally important; should be surfaced prominently in search results, not buried in dataset detail pages.', priority: 'High' },
            { category: 'Phenotype', note: 'Critical for genomic researchers specifically. Not relevant to all users but a strong differentiator for attracting specialist communities.', priority: 'Domain-specific' },
            { category: 'Publisher / Source', note: 'Researchers use institutional credibility as a proxy for data reliability. Source information builds trust and informs citation decisions.', priority: 'High' },
            { category: 'Collection Context', note: 'How and where the data was gathered. Particularly valued by clinical researchers assessing ecological validity.', priority: 'Medium' },
            { category: 'Standards & Format', note: 'Helps researchers estimate data cleaning workload before committing to an application. Often overlooked by platform designers.', priority: 'Medium' },
          ].map(item => (
            <div key={item.category} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-sm)',
              padding: '16px 18px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <strong style={{ fontSize: '0.88rem', color: 'var(--ink)' }}>{item.category}</strong>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '2px 8px', borderRadius: 100,
                  background: item.priority === 'High' ? 'rgba(224,112,87,0.12)' : item.priority === 'Domain-specific' ? 'rgba(62,147,168,0.12)' : 'rgba(122,154,163,0.12)',
                  color: item.priority === 'High' ? 'var(--accent-warm)' : item.priority === 'Domain-specific' ? 'var(--accent-mid)' : 'var(--ink-3)',
                }}>
                  {item.priority}
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>

        <div className="pullquote">
          "If I want to explore, the filter system is useful. But time lag and coverage should be on the front page — not hidden inside the dataset record. I need to see those before I invest time reading the full description."
        </div>
      </FadeIn>

      {/* ── DESIGN STRATEGY ── */}
      <FadeIn>
        <h2>Design Strategy: From Friction to Flow</h2>
        <p>Each insight mapped directly to a design principle. The strategy wasn't about adding features — it was about removing friction at the three points where researchers most consistently lost time and motivation.</p>

        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-md)', overflow: 'hidden', margin: '28px 0' }}>
          {[
            {
              insight: 'Fragmented data forces weeks of manual searching',
              principle: 'Streamlined Data Discovery',
              desc: 'A centralised search with AI-assisted recommendations and cross-platform metadata tagging. The Search Wizard guides junior researchers through 6 structured questions; expert filters allow advanced users to narrow directly.',
            },
            {
              insight: 'Inconsistent formats multiply manual processing time',
              principle: 'User-Centred Data Hub',
              desc: 'Standardised variable naming conventions and structured metadata fields. Clear documentation per dataset on format, schema, and linkage method. Quality indicators (Bronze → Platinum tiers) surface at search result level, not just in detail pages.',
            },
            {
              insight: 'Opaque approval processes stall research',
              principle: 'Transparent & Efficient Data Requests',
              desc: 'Application status tracking with estimated timelines. Automated compliance checks reduce unnecessary rejections. Access requirements shown before a researcher commits to applying — the "blank cover" problem eliminated.',
            },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1.3fr',
              gap: 0, borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              alignItems: 'stretch',
            }}>
              <div style={{ padding: '18px 20px', background: i % 2 === 0 ? 'var(--surface)' : 'var(--canvas)' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', display: 'block', marginBottom: 6 }}>Insight</span>
                <p style={{ fontSize: '0.84rem', color: 'var(--ink-2)', lineHeight: 1.5, margin: 0 }}>{row.insight}</p>
              </div>
              <div style={{ background: 'var(--border)' }} />
              <div style={{ padding: '18px 20px', background: i % 2 === 0 ? 'var(--surface)' : 'var(--canvas)', display: 'flex', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--display)', fontSize: '0.88rem', fontWeight: 600,
                  color: 'var(--accent)', letterSpacing: '-0.01em',
                }}>{row.principle}</span>
              </div>
              <div style={{ background: 'var(--border)' }} />
              <div style={{ padding: '18px 20px', background: i % 2 === 0 ? 'var(--surface)' : 'var(--canvas)' }}>
                <p style={{ fontSize: '0.83rem', color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── PLATFORM FEATURES ── */}
      <FadeIn>
        <h2>What the Research Made Possible</h2>
        <p>The findings from this study directly shaped GHD's information architecture and three headline product features. Because the research surfaced specific behaviour — not just preference data — the design team could trace each feature decision back to an observed need.</p>

        <div className="callout">
          <h4>Platform Features Informed by Research</h4>
          <ul>
            <li><strong>Search Wizard</strong> — A 6-step guided filter tool that addresses the discovery gap for researchers who don't yet know what search terms to use. Steps map to the filter priorities surfaced in card sorting: follow-up duration, coverage, phenotype, source, requirement.</li>
            <li><strong>Quality Tier Indicators (Bronze → Platinum)</strong> — A structured metadata quality scoring framework, adapted from UK HDR, enabling researchers to assess dataset reliability at a glance without reading full documentation.</li>
            <li><strong>Time Lag as a Prominent Filter</strong> — Elevated from a buried metadata field to a front-page filter, based on the finding that time lag was the single most universally-cited evaluation criterion across all five industries.</li>
            <li><strong>Access Requirement Transparency</strong> — Dataset pages now surface access tier, estimated approval timeline, and required credentials before a researcher commits to applying — directly addressing Insight 3.</li>
          </ul>
        </div>
      </FadeIn>

      {/* ── PUBLICATION ── */}
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
          <div>
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
              lineHeight: 1.6, marginBottom: 18,
            }}>
              <em>Computer Science and Information Systems (ComSIS)</em>, ComSIS Consortium. This paper documents the mixed-methods formative research process — from stakeholder mapping and contextual inquiry through to insight synthesis — and presents the information architecture recommendations derived from the study.
            </p>
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
          </div>
        </div>
      </FadeIn>

    </CaseLayout>
  )
}
