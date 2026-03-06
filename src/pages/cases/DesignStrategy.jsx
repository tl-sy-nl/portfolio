import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

export default function DesignStrategy() {
  return (
    <CaseLayout
      tags={['Social Innovation', 'Strategic Foresight', 'Facilitation']}
      title="Design Thinking & Foresight Programs for Public Institutions"
      subtitle="Facilitated 10+ innovation programs for universities, NGOs, and government bodies across Taiwan — translating complex societal challenges into actionable design opportunities and building internal capacity for human-centred practice."
      meta={[
        { label: 'Role', value: 'Design Strategist & Lead Facilitator' },
        { label: 'Duration', value: '2020 – 2025' },
        { label: 'Sectors', value: 'Education / NGO / Government' },
        { label: 'Highlight', value: 'MoMA & Biodesign Challenge 2019' },
      ]}
      nextCase={{ to: '/cases/academic-platform', title: 'Strategic Roadmap for a B2B Academic Platform' }}
    >
      <FadeIn>
        <div style={{ aspectRatio: '16/7', background: 'var(--accent)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0, marginBottom: 40 }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', fontStyle: 'italic' }}>Workshop / facilitation visual — add image</span>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Overview</h2>
        <p>Between 2020 and 2025, I designed and facilitated design thinking and strategic foresight programs for a range of public-sector clients — including national universities, non-profit organisations, and government ministries. These programs ranged from single-day workshops to multi-week curriculum modules, each tailored to the specific strategic challenge and audience.</p>
        <p>Work from this period was also recognised internationally — presented at MoMA and the Biodesign Challenge Summit (2019) — reflecting the calibre of design thinking applied to complex systems challenges.</p>
      </FadeIn>

      <FadeIn>
        <h2>Facilitation Approach</h2>
        <h3>Meeting Clients in Their Complexity</h3>
        <p>Public institutions rarely have a single, well-defined problem. Their challenges are systemic, politically layered, and involve stakeholders with conflicting incentives. My approach begins with a diagnostic phase — understanding the organisational dynamics, the unspoken constraints, and the difference between the stated problem and the actual problem.</p>
        <p>From there, I design facilitated sessions that help groups move from vague concerns to specific opportunity spaces, using tools drawn from systems thinking, futures methods, and participatory design.</p>

        <div className="callout">
          <h4>Methods Used</h4>
          <ul>
            <li>Systems mapping and causal loop analysis</li>
            <li>Horizon scanning and scenario development (STEEP framework)</li>
            <li>How Might We reframing and opportunity laddering</li>
            <li>Stakeholder journey mapping and service blueprinting</li>
            <li>Rapid prototyping and concept stress-testing</li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Selected Programs</h2>
        <h3>Government Innovation Lab</h3>
        <p>Delivered a 3-day intensive for a central government agency exploring digital service transformation. Outcomes included a prioritised innovation portfolio and a service redesign brief that informed subsequent policy development.</p>

        <h3>University Curriculum Integration</h3>
        <p>Partnered with a leading Taiwanese university to embed design thinking methodology into a graduate programme. Designed the 10-week curriculum framework, trained faculty facilitators, and ran the inaugural cohort alongside academic staff.</p>

        <h3>NGO Strategic Foresight</h3>
        <p>Facilitated a futures visioning process for a social welfare organisation navigating demographic shifts and funding uncertainty. Developed three plausible scenarios for 2035 and identified strategic implications for service design.</p>

        <p className="nda-note">Specific client names and programme details have been anonymised per confidentiality agreements. Available to discuss in detail during a conversation.</p>
      </FadeIn>
    </CaseLayout>
  )
}
