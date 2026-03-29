import { useState, useEffect } from 'react'
import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'


// ── Full-width PDF image with optional lightbox ──
function DiagramImage({ src, alt, caption, clickable, onExpand, width = 4800, height = 2700 }) {
  return (
    <figure className="diagram-figure">
      <div
        className="diagram-figure__container"
        onClick={clickable ? onExpand : undefined}
        title={clickable ? 'Click to enlarge' : undefined}
      >
        {/* TODO: Add srcSet when 2x version of image is available */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="svg-responsive"
          loading="lazy"
        />
        {clickable && (
          <div className="diagram-expand-badge">
            ⊕ Expand
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="diagram-figure__caption">
          {caption}
        </figcaption>
      )}
    </figure>
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
    <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" className="svg-responsive">
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
      body: 'No researcher found a dataset through a platform. They found it through people — and what you knew depended on who you knew. For anyone outside established networks, entire datasets were effectively invisible.',
      color: '#9B6B8A',
    },
    {
      num: '02',
      title: 'Evaluation was nearly impossible before committing',
      body: '"Buying a book with a blank cover." Coverage periods, variable completeness, and linkage options were absent or buried in technical documentation — researchers applied blind.',
      color: '#A8804E',
    },
    {
      num: '03',
      title: 'A clinical trial process applied to everything',
      body: 'Two to six months waiting. No status visibility. Forms designed for patient consent and trial protocols used for routine retrospective queries. One researcher physically visited a secure facility just to preview data.',
      color: '#5A4A72',
    },
  ]
  return (
    <div className="insight-grid">
      {insights.map((ins) => (
        <div key={ins.num} className="insight-card" style={{ borderTopColor: ins.color }}>
          <span className="insight-card__num" style={{ color: ins.color }}>
            {ins.num}
          </span>
          <p className="insight-card__title">{ins.title}</p>
          <p className="insight-card__body">{ins.body}</p>
        </div>
      ))}
    </div>
  )
}

// ── Storyboard strip ──
function StoryboardStrip() {
  const panels = [
    { src: '/ghd/p26.jpg', label: 'Act I', alt: 'Act I — Researcher discovers a dataset through the GHD platform search interface' },
    { src: '/ghd/p27.jpg', label: 'Act II', alt: 'Act II — Researcher reads dataset metadata including coverage period and variable list' },
    { src: '/ghd/p28.jpg', label: 'Act III', alt: 'Act III — Researcher submits a streamlined access application with clear requirements' },
    { src: '/ghd/p29.jpg', label: 'Act IV', alt: 'Act IV — Researcher accesses approved dataset from their desk with status visibility' },
  ]
  return (
    <div className="storyboard-grid">
      {panels.map((p, i) => (
        <div key={i} className="storyboard-item">
          {/* TODO: Add srcSet when 2x version of image is available */}
          <img
            src={p.src}
            alt={p.alt}
            width="4800"
            height="2700"
            loading="lazy"
          />
          <div className="storyboard-item__label">
            {p.label}
          </div>
        </div>
      ))}
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
        className="lightbox-overlay"
        onClick={() => setLightbox(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Enlarged diagram view"
      >
        <img
          src={lightbox}
          alt="Enlarged view of research diagram — click outside or press Escape to close"
          className="lightbox-image"
        />
        <button
          onClick={() => setLightbox(null)}
          className="lightbox-close"
          aria-label="Close enlarged image"
        >×</button>
      </div>
    )}
    <CaseLayout
      tags={['Biomedical', 'Public Sector', 'Published Research']}
      title="The Infrastructure Nobody Mapped: Research for Taiwan's National Health Data Gateway"
      subtitle="What does it mean to make a dataset findable, evaluable, and accessible? Taiwan's Ministry of Health and Welfare asked that question in 2022. The answer required understanding how biomedical researchers actually navigated — and got stuck in — a fragmented health data ecosystem."
      meta={[
        { label: 'Industry', value: 'Biomedical & Public Sector' },
        { label: 'Role',     value: 'Co-Researcher — co-led research design, fieldwork, synthesis & IA recommendations' },
        { label: 'Methods',  value: 'Contextual Inquiry · Card Sorting · Usability Testing' },
        { label: 'Scope',    value: '6 interviews · 5 industries · National platform' },
        { label: 'Year',     value: '2022' },
        { label: 'Publication', value: 'Peer-reviewed — ComSIS Journal, 2023' },
      ]}
      nextCase={{ to: '/cases/digital-learning', title: "What the Analytics Couldn't Show: Research for a Media Group's Enterprise Learning Platform" }}
    >

      {/* ── IMPACT BAR ── */}
      <div className="case-impact-bar">
        <span className="case-impact-bar__label">Research Outcome</span>
        <p className="case-impact-bar__text">
          Research with 15 biomedical researchers made visible three systemic failures in Taiwan&apos;s
          health data ecosystem — failures that had been structurally invisible until qualitative
          methods surfaced them. The findings informed GHD&apos;s information architecture and
          contributed to a peer-reviewed publication in <em>ComSIS</em>.
        </p>
      </div>

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

        <figure className="diagram-figure">
          <div className="diagram-figure__container">
            <StakeholderMapSVG />
          </div>
        </figure>
      </FadeIn>

      {/* ── RESEARCH FRAMEWORK ── */}
      <FadeIn>
        <h2>How We Listened</h2>
        <p>We chose formative research methods because the friction had become invisible to the system&apos;s own users — so habitual it could only be observed, not self-reported. The formative work came first: understanding the system as researchers actually experienced it, not as the institutions that built it understood it to work.</p>
        <p>Fifteen participants across the full study: six two-hour contextual interviews across five research industries, card-sorting to surface filter priorities, and secondary validation. We benchmarked against UK HDR, NIH GDC, and PhysioNet to understand where Taiwan sat within a global landscape shifting rapidly toward open, federated access.</p>

        <DiagramImage
          src="/ghd/p07.jpg"
          alt="Research framework diamond diagram — contextual inquiry with biomedical researchers across five industries revealed that friction in data discovery had become so habitual it could only be observed, not self-reported"
          caption="Four-phase research framework. Contextual inquiry was the deliberate methodological choice: the system's friction had become invisible to its users through habituation — it could only be surfaced through direct observation of actual research workflows."
        />

        <p>We recruited across two levels of seniority on purpose. Junior researchers — five to ten years in — were still navigating the system with fresh frustration. Research leads had learned to work around it. Both perspectives mattered: the one that remembered what broken felt like, and the one that had stopped noticing.</p>
        <p>As a UX researcher trained in industry, I carried assumptions about what &quot;good discovery&quot; meant — I expected interface elegance and feature completeness to be the core problems. The field work unsettled that. My position — as someone trained in product design, not in research governance or public health infrastructure — meant I initially saw this as a design problem. Researchers in the room saw it differently: who decides which datasets are findable? The real friction wasn&apos;t in the interface; it was in the ecosystem&apos;s structure itself. That reframing shaped how the team thought about what a platform could and couldn&apos;t fix.</p>
      </FadeIn>

      {/* ── USER JOURNEY ── */}
      <FadeIn>
        <h2>Where Time Was Being Lost</h2>
        <p>The journey had four stages — Identifying, Searching, Applying, Acquiring. At each, the same pattern: researchers expected simplicity; the system delivered complexity. The friction wasn&apos;t random — it was structural.</p>

        <DiagramImage
          src="/ghd/p15.jpg"
          alt="User journey map synthesised from contextual inquiry sessions — revealing that friction concentrates at the search-to-application transition, where researchers commit to a months-long process without knowing whether the dataset matches their needs"
          caption="Journey map synthesised from six two-hour contextual inquiry sessions across five research industries. The critical finding: pain concentrates at the search-to-application boundary — the moment researchers must commit to a months-long access process with no preview of whether the data matches their needs."
          clickable
          onExpand={() => setLightbox('/ghd/p15.jpg')}
        />

        <p>The pattern was consistent across industries: the earlier stages, where motivation is high and intent is clear, were the most undermined. This undermining wasn&apos;t accidental; it reflected institutional priorities about data stewardship, liability, and researcher accountability that had never been made explicit in the user experience. Researchers who had already decided they wanted a dataset were then faced with months of waiting, uncertain paperwork, and the possibility that the data wouldn&apos;t match what the abstract had suggested.</p>
      </FadeIn>

      {/* ── KEY INSIGHTS ── */}
      <FadeIn>
        <h2>What the Research Found</h2>
        <p>Three findings recurred across every interview, regardless of which industry the researcher came from or how long they had been working.</p>

        <InsightCards />
      </FadeIn>

      {/* ── DESIGN STRATEGY ── */}
      <FadeIn>
        <h2>What the Research Made Possible</h2>
        <p>Each finding pointed to a specific place where the platform could intervene. The strategy wasn&apos;t about adding features — it was about giving back something that layers of institutional gatekeeping had quietly taken away: the researcher&apos;s ability to judge for themselves whether a dataset was worth pursuing. The information architecture couldn&apos;t just be &quot;intuitive&quot; — it had to be honest about what was missing, and why.</p>

        <DiagramImage
          src="/ghd/p17.jpg"
          alt="Insight-to-design translation framework — three columns tracing each observed researcher behaviour through a design principle to a specific platform improvement, ensuring no feature exists without research grounding"
          caption="Insight-to-design translation framework. Every platform feature traces directly to an observed behaviour from contextual inquiry — the three-column structure was the team's accountability tool for ensuring no design decision drifted from the research."
        />

        <p>Discovery, which previously required knowing the right person, becomes a guided search. Evaluation, which previously required committing to an application to learn anything meaningful, becomes readable before a single form is submitted. Access, which previously meant months of silence, becomes a process with visible steps and timelines. The blank cover, replaced by a jacket with a synopsis.</p>
        <p>In concrete terms: the platform&apos;s metadata specification now surfaces dataset coverage periods, variable counts, and linkage capacity upfront — before researchers submit an access request. This single change directly addressed the second systemic failure the research had uncovered.</p>
      </FadeIn>

      {/* ── STORYBOARD ── */}
      <FadeIn>
        <h2>The Platform in Motion</h2>
        <p>To translate findings into vision, we built a storyboard: four acts, one researcher. Find. Read metadata. Apply with clarity. Access — without leaving their desk.</p>
        <p>The storyboard did something we hadn&apos;t expected. By walking stakeholders through one researcher&apos;s journey — find, evaluate, wait, access — it made the system&apos;s failures concrete enough to argue about. We discovered, in building it, where the platform could actually help and where the real barriers were policy decisions no interface could fix.</p>

        <StoryboardStrip />
      </FadeIn>

      {/* ── LIMITATIONS ── */}
      <FadeIn>
        <h2>Limitations</h2>
        <p>This study engaged 15 participants across multiple research phases — contextual interviews, card-sorting, and secondary validation — a scope appropriate for formative, qualitative work, but not designed for statistical generalisation. Interview participants were recruited through Taiwan&apos;s existing academic networks — a choice that inadvertently reproduced the very exclusion mechanisms we were trying to map. Researchers outside these networks would likely report even more friction; our findings may underestimate the system&apos;s barriers for junior, international, or non-institutional researchers.</p>
        <p>The study focused on five research industries in our sample; future work should validate findings across additional biomedical and clinical domains. The stakeholder ecosystem map captured conditions in 2022; institutional relationships and data infrastructure have shifted considerably since. Additionally, the study prioritised the researcher&apos;s perspective; data management units and platform administrators — whose workflows are equally complex — were not included as primary interview subjects, leaving their needs to be addressed in a subsequent research phase.</p>
        <p>That research taught me something I keep coming back to: when a system makes people wait, makes them guess, makes them depend on who they know — it&apos;s not a usability problem. It&apos;s the system working exactly as it was built. The design question isn&apos;t how to make it smoother. It&apos;s whether the friction is serving anyone, and if not, what it would take to stop.</p>
      </FadeIn>

      {/* ── PUBLICATION + REPORT DOWNLOAD ── */}
      <FadeIn>
        <div className="publication-block">
          <div className="publication-block__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#7EC8BE" strokeWidth="1.5"/>
              <path d="M7 8h10M7 12h10M7 16h6" stroke="#7EC8BE" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="publication-block__content">
            <p className="publication-block__label">Peer-Reviewed Publication · 2023</p>
            <p className="publication-block__title">
              Formative Interviews for a User-Centred Design Study on Developing an Effective Gateway for Biomedical Data Discovery
            </p>
            <p className="publication-block__desc">
              <em>Computer Science and Information Systems (ComSIS)</em>, ComSIS Consortium. This paper documents the complete mixed-methods formative research process — from stakeholder mapping and contextual inquiry through to insight synthesis — revealing how systemic barriers in data discovery are both designed and habitual. It presents the information architecture recommendations and metadata schema derived from the study, demonstrating how research circulates within scholarly discourse and informs practice beyond the commissioning institution.
            </p>
            <div className="publication-block__links">
              <a
                href="https://orcid.org/0009-0008-9499-7505"
                target="_blank"
                rel="noopener noreferrer"
                className="publication-block__link"
              >
                View on ORCID ↗
              </a>
              <a
                href="/ghd/GHD_report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="publication-block__link publication-block__link--download"
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
