import CaseLayout from '../../components/CaseLayout'

export default function AcademicPlatform() {
  return (
    <CaseLayout
      dimension="What systems cannot hold"
      title="Invisible Infrastructure: Research for Taiwan's National Health Data Gateway"
      subtitle="How do data infrastructures fail in supporting real-world research workflows — and how can design address these failures?"
      meta={[
        { label: 'Industry', value: 'Biomedical & Public Sector' },
        { label: 'Role', value: 'User Researcher & Interface Designer — research design, fieldwork, synthesis, IA and interface design' },
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

      {/* ── RELEVANCE ── */}
      <h2>Relevance to Proposed Research</h2>

      <p>
        This project gave me a method and a publication. Researchers&apos; complaints about the data systems were general; their workarounds were specific, and the workarounds described the infrastructure more accurately than its documentation did. The project also showed that access shapes knowledge: researchers without the right contacts often could not find data at all.
      </p>
      <p>
        I carry both lessons into research on AI. I would treat what people do around AI tools, such as checking, rewriting or refusing their output, as evidence of what the tools cannot do. And I would ask who has the access, language and connections to shape these systems, and who does not.
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
            Formative Interviews for a User-Centered Design Study on Developing an Effective Gateway for Health Research Data Search - Towards a Sustainable Wellbeing Environment
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
