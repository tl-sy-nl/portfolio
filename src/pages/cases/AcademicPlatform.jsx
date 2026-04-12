import CaseLayout from '../../components/CaseLayout'

export default function AcademicPlatform() {
  return (
    <CaseLayout
      dimension="Access conditions"
      title="Invisible Infrastructure: Research for Taiwan's National Health Data Gateway"
      subtitle="How do data infrastructures fail in supporting real-world research workflows — and how can design address these failures?"
      meta={[
        { label: 'Industry', value: 'Biomedical & Public Sector' },
        { label: 'Role', value: 'Co-Researcher — co-led research design, fieldwork, synthesis & IA recommendations' },
        { label: 'Methods', value: 'Contextual Inquiry · Card Sorting · Usability Testing' },
        { label: 'Scope', value: '15 researchers · 5 industries · National platform' },
        { label: 'Year', value: '2022–2025' },
        { label: 'Publication', value: 'Peer-reviewed — ComSIS Journal, 2025' },
      ]}
    >

      {/* ── OVERVIEW ── */}
      <p>
        This project investigates how large-scale health data infrastructures fail at the level of everyday research practice.
      </p>
      <p>
        Commissioned by Taiwan&apos;s Ministry of Health and Welfare, the project contributed to the design of the Gateway to Health Data (GHD), a national platform intended to make biomedical datasets findable, evaluable, and accessible.
      </p>
      <p>
        Rather than focusing on technical integration, the research examines how researchers navigate fragmented data systems in practice — and where these systems break down.
      </p>

      {/* ── RESEARCH FRAMING ── */}
      <h2>Research Framing</h2>

      <div className="callout">
        <h4>Research Question</h4>
        <p className="case-body-sm">
          How do data infrastructures fail in supporting real-world research workflows, and how can design address these failures?
        </p>
      </div>

      <div className="callout">
        <h4>Method</h4>
        <p className="case-body-sm">
          Qualitative design research combining contextual inquiry, semi-structured interviews, card sorting, and usability testing with 15 biomedical researchers across multiple sectors.
        </p>
      </div>

      <div className="callout">
        <h4>Contribution</h4>
        <p className="case-body-sm">
          The project identifies three systemic failures in health data infrastructures: (1) Discovery failure — datasets are located through informal networks rather than searchable systems. (2) Evaluation failure — insufficient metadata prevents informed assessment before access. (3) Access failure — opaque and time-intensive procedures limit usability. These findings informed the information architecture of a national platform and contributed to a peer-reviewed publication.
        </p>
      </div>

      {/* ── SYSTEM BREAKDOWN ── */}
      <h2>System Breakdown: Find, Evaluate, Access</h2>

      <p>
        The research revealed that access to biomedical data is not a single problem, but a sequence of breakdowns across three stages.
      </p>

      <div className="callout">
        <h4>Find</h4>
        <p className="case-body-sm">
          Dataset discovery depends on personal networks, citations, and institutional knowledge rather than centralized systems. This creates barriers for newcomers and interdisciplinary researchers.
        </p>
      </div>

      <div className="callout">
        <h4>Evaluate</h4>
        <p className="case-body-sm">
          Metadata is inconsistent or incomplete, making it difficult to assess dataset suitability prior to application. Researchers often commit to lengthy processes without knowing whether the data meets their needs.
        </p>
      </div>

      <div className="callout">
        <h4>Access</h4>
        <p className="case-body-sm">
          Application procedures are slow, opaque, and often designed for clinical trials rather than exploratory research. Waiting periods of several months are common, with limited feedback during the process.
        </p>
      </div>

      <p>
        These failures are not isolated usability issues, but systemic conditions that shape who can effectively conduct research and how knowledge is produced.
      </p>

      {/* ── DESIGN IMPLICATIONS ── */}
      <h2>Design Implications</h2>

      <p>
        The findings informed the design of the Gateway to Health Data (GHD), particularly in: structuring metadata to support pre-access evaluation, designing search and categorization systems that reduce reliance on informal networks, and improving transparency in access procedures.
      </p>
      <p>
        The project reframes data accessibility not as a technical problem of aggregation, but as a design problem of usability, visibility, and trust.
      </p>

      {/* ── KEY INSIGHTS ── */}
      <h2>Key Insights</h2>

      <div className="callout">
        <h4>Infrastructure Is Experienced, Not Just Built</h4>
        <p className="case-body-sm">
          Data systems are shaped by how they are navigated in practice, not only by their technical architecture.
        </p>
      </div>

      <div className="callout">
        <h4>Informality as Hidden Structure</h4>
        <p className="case-body-sm">
          Informal networks function as de facto infrastructure, but create inequities in access and knowledge distribution.
        </p>
      </div>

      <div className="callout">
        <h4>Access Shapes Knowledge Production</h4>
        <p className="case-body-sm">
          Barriers in discovery, evaluation, and access influence which research questions can be asked and answered.
        </p>
      </div>

      {/* ── EVALUATION ── */}
      <h2>Evaluation</h2>

      <p>
        If extended as a PhD research project, this work would be evaluated through a combination of usability testing, longitudinal deployment, and system-level analysis.
      </p>

      <div className="callout">
        <h4>Task Efficiency</h4>
        <p className="case-body-sm">
          Whether redesigned systems reduce time and uncertainty in finding and accessing datasets.
        </p>
      </div>

      <div className="callout">
        <h4>Decision Quality</h4>
        <p className="case-body-sm">
          Whether improved metadata supports more accurate dataset evaluation.
        </p>
      </div>

      <div className="callout">
        <h4>Access Equity</h4>
        <p className="case-body-sm">
          How different user groups benefit from improved infrastructure.
        </p>
      </div>

      {/* ── RELEVANCE ── */}
      <h2>Relevance to Ongoing Research</h2>

      <p>
        This project establishes a research direction focused on how infrastructures shape perception, access, and behavior.
      </p>
      <p>
        While data systems are often framed as neutral and technical, this work shows that they actively structure what users can find, evaluate, and act upon. This connects to broader questions in design research on how systems mediate awareness and decision-making.
      </p>
      <p>
        In the context of sustainability and rebound effects, increasing efficiency in data access may not necessarily lead to better outcomes if it reduces critical engagement or shifts burdens elsewhere. This project opens up the question of how alternative design approaches can make system behavior more visible, accountable, and equitable.
      </p>

      {/* ── PUBLICATION ── */}
      <div className="publication-block">
        <div className="publication-block__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#7EC8BE" strokeWidth="1.5"/>
            <path d="M7 8h10M7 12h10M7 16h6" stroke="#7EC8BE" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="publication-block__content">
          <p className="publication-block__label">Peer-Reviewed Publication · 2025</p>
          <p className="publication-block__title">
            Formative Interviews for a User-Centred Design Study on Developing an Effective Gateway for Biomedical Data Discovery
          </p>
          <p className="publication-block__desc">
            <em>Computer Science and Information Systems (ComSIS)</em>, ComSIS Consortium.
          </p>
          <div className="publication-block__links">
            <a
              href="https://doi.org/10.2298/CSIS241204069L"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-block__link"
            >
              View Publication ↗
            </a>
          </div>
        </div>
      </div>

    </CaseLayout>
  )
}
