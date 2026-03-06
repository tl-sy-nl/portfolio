import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

export default function AcademicPlatform() {
  return (
    <CaseLayout
      tags={['B2B SaaS', 'EdTech', 'Product Strategy']}
      title="Strategic Roadmap for a B2B Academic Knowledge Platform"
      subtitle="Defined the product vision and 12-month roadmap for a leading academic publishing platform, identifying competitive differentiation through design-driven research and stakeholder alignment across editorial, sales, and engineering teams."
      meta={[
        { label: 'Role', value: 'Product Manager' },
        { label: 'Duration', value: 'Oct 2019 – May 2020' },
        { label: 'Industry', value: 'Academic Publishing & EdTech' },
        { label: 'Scope', value: 'B2B SaaS · Product Strategy' },
      ]}
      nextCase={{ to: '/cases/digital-learning', title: "UX Research for a Media Group's Learning Platform" }}
    >
      <FadeIn>
        <div style={{ aspectRatio: '16/7', background: '#3D4B5C', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0, marginBottom: 40 }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', fontStyle: 'italic' }}>Product strategy visual — add image</span>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Context</h2>
        <p>Airiti is Taiwan's leading academic knowledge platform — a B2B SaaS product serving universities, research institutions, and libraries across Asia. During my tenure as Product Manager, the platform was at an inflection point: facing growing international competition from platforms like JSTOR and Springer, while serving a domestic customer base with deeply embedded institutional workflows.</p>
        <p>My mandate was to define where the product should go next — and to build the internal alignment necessary to get there.</p>
      </FadeIn>

      <FadeIn>
        <h2>Research & Discovery</h2>
        <h3>Understanding the B2B Buyer vs. End User Gap</h3>
        <p>In academic platforms, the buyer (institutional procurement, library directors) and the end user (researchers, faculty, students) are different people with different success metrics. Procurement cares about coverage, compliance, and cost. End users care about discoverability, export formats, and citation accuracy. Previous product decisions had optimised for the buyer — creating a product that was easy to justify in a procurement meeting but frustrating to use daily.</p>
        <p>I conducted structured interviews with both segments to map their respective journeys and identify the specific friction points that were driving competitor comparison during renewal cycles.</p>

        <div className="callout">
          <h4>Research Activities</h4>
          <ul>
            <li>In-depth interviews with library directors at 8 institutional clients</li>
            <li>Contextual research sessions with active researchers and graduate students</li>
            <li>Competitive benchmarking across 6 international academic platforms</li>
            <li>Analytics review of search behaviour, session length, and export patterns</li>
            <li>Stakeholder workshops with editorial, sales, and engineering leads</li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Strategy & Roadmap</h2>
        <h3>Differentiation Through Workflow Integration</h3>
        <p>The central strategic insight: Airiti's competitive advantage was not in coverage breadth (where international platforms would always win) but in depth of regional content and proximity to the Taiwanese and Chinese-language academic ecosystem. The opportunity was to lean into this — building workflow integrations that made Airiti indispensable to the research process itself, not just a content repository.</p>
        <p>I structured the 12-month roadmap around three strategic themes: search experience modernisation, citation workflow integration, and institutional reporting for procurement stakeholders. Each theme was grounded in specific research findings and tied to measurable renewal and expansion metrics.</p>

        <div className="callout">
          <h4>Roadmap Outcomes</h4>
          <ul>
            <li>12-month feature roadmap approved by executive leadership</li>
            <li>3 strategic themes defined with supporting research evidence</li>
            <li>Engineering prioritisation framework established for cross-functional alignment</li>
            <li>Institutional reporting module fast-tracked based on procurement interview findings</li>
          </ul>
        </div>

        <p className="nda-note">Specific metrics and internal strategy details have been omitted per confidentiality agreement. Happy to discuss in conversation.</p>
      </FadeIn>
    </CaseLayout>
  )
}
