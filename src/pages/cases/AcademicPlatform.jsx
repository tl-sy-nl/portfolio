import { useState, useEffect } from 'react'
import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'


// ── Full-width PDF image with optional lightbox ──
function DiagramImage({ src, alt, caption, clickable, onExpand }) {
  return (
    <div style={{ margin: '36px 0' }}>
      <div
        style={{
          borderRadius: 'var(--r-md)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          cursor: clickable ? 'zoom-in' : 'default',
          position: 'relative',
        }}
        onClick={clickable ? onExpand : undefined}
        title={clickable ? 'Click to enlarge' : undefined}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          loading="lazy"
        />
        {clickable && (
          <div style={{
            position: 'absolute', bottom: 10, right: 10,
            background: 'rgba(0,0,0,0.45)', borderRadius: 4,
            padding: '3px 8px',
            fontFamily: 'var(--sans)', fontSize: '0.65rem', color: '#fff',
            letterSpacing: '0.05em', pointerEvents: 'none',
          }}>
            ⊕ Expand
          </div>
        )}
      </div>
      {caption && (
        <p style={{
          fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--ink-3)',
          letterSpacing: '0.02em', marginTop: 10, paddingLeft: 4, lineHeight: 1.5,
        }}>
          {caption}
        </p>
      )}
    </div>
  )
}

// ── Stakeholder ecosystem map ──
function StakeholderMapSVG() {
  const ink = '#0E1F24', border = '#C8DEDE', accent = '#1A5C72'
  const mid = '#3E93A8', glow = '#7EC8BE', bg = '#F0F5F5'

  const groups = [
    { x: 60,  y: 30,  w: 140, h: 28, label: 'Ministry of Health & Welfare', sub: 'Mandate & oversight', color: accent },
    { x: 10,  y: 115, w: 140, h: 28, label: 'Data Management Units',         sub: 'Hospitals · Universities · NGOs', color: mid },
    { x: 170, y: 115, w: 140, h: 28, label: 'Development Team',              sub: 'Platform infrastructure', color: mid },
    { x: 10,  y: 200, w: 140, h: 42, label: 'Biomedical Researchers',        sub: 'Clinical · Pharma · Academia\nEpidemiology · Public Health', color: '#2A6B62' },
    { x: 170, y: 200, w: 140, h: 28, label: 'International Standards',       sub: 'UK HDR · NIH GDC · PhysioNet', color: '#5A4A72' },
  ]
  const cx = 160, cy = 130, r = 36

  return (
    <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
      <rect width="320" height="260" fill={bg}/>

      {/* Connection lines to centre */}
      {[
        [130, 44],  // Ministry
        [80,  129], // Data
        [240, 129], // Dev
        [80,  216], // Researchers
        [240, 214], // International
      ].map(([x2, y2], i) => (
        <line key={i} x1={cx} y1={cy} x2={x2} y2={y2}
          stroke={border} strokeWidth="1" strokeDasharray="4 3"/>
      ))}

      {/* Stakeholder nodes */}
      {groups.map((g, i) => (
        <g key={i}>
          <rect x={g.x} y={g.y} width={g.w} height={g.h} rx="5"
            fill="#fff" stroke={g.color} strokeWidth="1" strokeOpacity="0.5"/>
          <text x={g.x + g.w/2} y={g.y + 11} textAnchor="middle"
            fontFamily="Inter,sans-serif" fontSize="6.8" fontWeight="600" fill={ink}>{g.label}</text>
          {g.sub.split('\n').map((line, li) => (
            <text key={li} x={g.x + g.w/2} y={g.y + 22 + li*10} textAnchor="middle"
              fontFamily="Inter,sans-serif" fontSize="5.8" fill={ink} opacity="0.45">{line}</text>
          ))}
        </g>
      ))}

      {/* Central GHD node */}
      <circle cx={cx} cy={cy} r={r+10} fill={`rgba(126,200,190,0.08)`}/>
      <circle cx={cx} cy={cy} r={r} fill={accent} stroke={glow} strokeWidth="1.2"/>
      <text x={cx} y={cy-6} textAnchor="middle" fontFamily="Inter,sans-serif"
        fontSize="9" fontWeight="700" letterSpacing="0.06em" fill="#fff">GHD</text>
      <text x={cx} y={cy+6} textAnchor="middle" fontFamily="Inter,sans-serif"
        fontSize="5.5" fill={glow} opacity="0.8">Gateway to</text>
      <text x={cx} y={cy+14} textAnchor="middle" fontFamily="Inter,sans-serif"
        fontSize="5.5" fill={glow} opacity="0.8">Health Data</text>

      <text x="160" y="254" textAnchor="middle" fontFamily="Inter,sans-serif"
        fontSize="6.5" fill="#7A9AA3" fontStyle="italic">
        Stakeholder landscape — five groups, one platform
      </text>
    </svg>
  )
}

// ── Key insights cards ──
function InsightCards() {
  const insights = [
    {
      num: '01',
      title: 'Discovery happened through people',
      body: 'No researcher found a dataset through a platform. They found it through colleagues, citations, and departmental contacts. For anyone outside established networks, entire datasets were effectively invisible.',
      color: '#1A5C72',
    },
    {
      num: '02',
      title: 'Evaluation was nearly impossible before committing',
      body: '"Buying a book with a blank cover." Coverage periods, variable completeness, and linkage options were absent or buried in technical documentation — researchers applied blind.',
      color: '#2A6B62',
    },
    {
      num: '03',
      title: 'A clinical trial process applied to everything',
      body: 'Two to six months waiting. No status visibility. Forms designed for patient consent and trial protocols used for routine retrospective queries. One researcher physically visited a secure facility just to preview data.',
      color: '#5A4A72',
    },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '32px 0' }}>
      {insights.map((ins) => (
        <div key={ins.num} style={{
          background: 'var(--canvas)',
          border: `1px solid var(--border)`,
          borderTop: `3px solid ${ins.color}`,
          borderRadius: 'var(--r-md)',
          padding: '24px 20px',
        }}>
          <span style={{
            display: 'block',
            fontFamily: 'var(--serif)',
            fontSize: '1.8rem',
            fontStyle: 'italic',
            color: ins.color,
            opacity: 0.35,
            lineHeight: 1,
            marginBottom: 10,
          }}>{ins.num}</span>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.4,
            marginBottom: 10,
          }}>{ins.title}</p>
          <p style={{
            fontSize: '0.78rem',
            color: 'var(--ink-3)',
            lineHeight: 1.6,
          }}>{ins.body}</p>
        </div>
      ))}
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
  const [lightbox, setLightbox] = useState(null)

  // Close on Escape key
  useEffect(() => {
    if (!lightbox) return
    const handle = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [lightbox])

  return (
    <>
    {/* Lightbox overlay */}
    {lightbox && (
      <div
        onClick={() => setLightbox(null)}
        style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,0,0,0.88)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'zoom-out',
          padding: '40px',
        }}
      >
        <img
          src={lightbox}
          alt="Enlarged diagram"
          style={{
            maxWidth: '90vw', maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: 8,
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          }}
        />
        <button
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', top: 20, right: 24,
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', borderRadius: '50%',
            width: 36, height: 36,
            fontSize: '1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >×</button>
      </div>
    )}
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
          marginTop: 0, marginBottom: 40, position: 'relative',
        }}>
          <img
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1400&q=80"
            alt="Data infrastructure"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(11,45,58,0.82) 0%, rgba(15,61,78,0.55) 60%, rgba(62,147,168,0.25) 100%)',
          }} />
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

        <div style={{ margin: '36px 0', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', overflow: 'hidden', background: 'var(--surface)' }}>
          <StakeholderMapSVG />
        </div>
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

        <p>We recruited across two levels of seniority on purpose. Junior researchers — five to ten years in — were still navigating the system with fresh frustration. Research leads had learned to work around it. Both perspectives mattered: the one that remembered what broken felt like, and the one that had stopped noticing.</p>
      </FadeIn>

      {/* ── USER JOURNEY ── */}
      <FadeIn>
        <h2>Where Time Was Being Lost</h2>
        <p>The research surfaced a journey with four stages — Identifying, Searching, Applying, Acquiring. At each stage, a consistent pattern of friction. What the map made visible wasn't the steps themselves; it was the gap between what researchers expected to be simple and what the system had made complicated.</p>

        <DiagramImage
          src="/ghd/p15.jpg"
          alt="User journey map showing four stages: Identifying, Searching, Applying, Acquiring"
          caption="User journey map across four stages. Pain points cluster around the transition from searching to applying — the moment when researchers lose visibility into what a dataset actually contains."
          clickable
          onExpand={() => setLightbox('/ghd/p15.jpg')}
        />

        <p>The pattern was consistent across industries: the earlier stages, where motivation is high and intent is clear, were the most undermined. Researchers who had already decided they wanted a dataset were then faced with months of waiting, uncertain paperwork, and the possibility that the data wouldn't match what the abstract had suggested.</p>
      </FadeIn>

      {/* ── KEY INSIGHTS ── */}
      <FadeIn>
        <h2>What the Research Found</h2>
        <p>Three findings recurred across every interview, regardless of which industry the researcher came from or how long they had been working.</p>

        <InsightCards />

        <p>The first: discovery didn't happen on platforms. It happened through people. Senior researchers relied on colleague recommendations; junior researchers didn't know what search terms to use, or even whether a dataset they needed existed. The platform needed to function as a discovery tool for researchers who couldn't yet articulate what they were looking for.</p>
        <p>The second: evaluation was nearly impossible before committing to an application. The "blank cover" wasn't a metaphor — it was the operational reality. Coverage periods, variable completeness, and data linkage options were either absent or buried in documentation written for data engineers, not researchers. Researchers were making application decisions with almost no information.</p>
        <p>The third was structural. Approval processes inherited from clinical trial frameworks had been applied, without modification, to routine data access requests. Two to six months of waiting. No status visibility. Formats that required information about patient consent and trial protocols for what was, in most cases, a retrospective database query. One researcher had adapted by physically visiting a secure facility. Another had learned to submit multiple applications simultaneously, treating each one as a lottery.</p>
      </FadeIn>

      {/* ── DESIGN STRATEGY ── */}
      <FadeIn>
        <h2>What the Research Made Possible</h2>
        <p>Each finding pointed to a specific place where the platform could intervene. The strategy wasn't about adding features — it was about restoring something that had been quietly taken away: the researcher's ability to act on their own judgment.</p>

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
    </>
  )
}
