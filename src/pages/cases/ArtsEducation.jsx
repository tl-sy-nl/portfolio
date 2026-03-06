import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

export default function ArtsEducation() {
  return (
    <CaseLayout
      tags={['Arts & Culture', 'Digital Transformation', 'User Research']}
      title="Digital Classroom for a Renowned Performing Arts Organisation"
      subtitle="Translated an embodied, in-person pedagogy into a meaningful online learning experience — designing for community, ritual, and the at-home physical environment of a performing arts practice."
      meta={[
        { label: 'Role', value: 'Senior UX Researcher' },
        { label: 'Industry', value: 'Performing Arts & Cultural Education' },
        { label: 'Methods', value: 'Ethnographic Research · Co-design' },
        { label: 'Focus', value: 'Digital Transformation' },
      ]}
      nextCase={{ to: '/cases/mobility-platform', title: 'Usability Research for a Vehicle-Sharing Platform' }}
    >
      <FadeIn>
        <div style={{ aspectRatio: '16/7', background: '#4A6358', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0, marginBottom: 40 }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', fontStyle: 'italic' }}>Platform visual — add image</span>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>The Challenge</h2>
        <p>A renowned Taiwanese performing arts organisation with decades of institutional history sought to extend its educational programming online. Its practice — rooted in physical discipline, breath, and presence — was deeply resistant to digital mediation. The organisation's educators and leadership were sceptical that digital formats could preserve what made their teaching meaningful.</p>
        <p>The question wasn't how to film a class. It was how to design a digital environment that could hold the essence of an embodied practice.</p>

        <div className="pullquote">
          "The challenge was not technical. It was about whether digital could hold something that had always been understood as irreducibly physical."
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Research Approach</h2>
        <h3>Ethnographic Immersion</h3>
        <p>I began by attending in-person classes and workshops — not as a researcher with a clipboard, but as a participant observer. This immersion was essential: understanding what practitioners valued about the physical experience required experiencing it directly. What emerged was a nuanced picture of the rituals, social textures, and embodied cues that made in-person practice meaningful.</p>
        <p>I then conducted depth interviews with three groups: long-term practitioners, newer students, and lapsed participants who had dropped out — to understand what continuity meant across different stages of practice.</p>

        <div className="callout">
          <h4>Research Methods</h4>
          <ul>
            <li>Participant observation across 6 in-person class sessions</li>
            <li>Depth interviews with practitioners, educators, and lapsed students (n=18)</li>
            <li>At-home contextual research: participants documented their practice space and routine</li>
            <li>Co-design sessions with educators to map the pedagogy structure digitally</li>
            <li>Prototype evaluation of early digital classroom concepts</li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Key Insight: Motivational Continuity</h2>
        <p>The research identified <strong>motivational continuity</strong> — not technical friction — as the primary barrier to sustained online learning. Users could navigate the platform. What they couldn't replicate was the social accountability, the sense of shared effort, and the subtle teacher presence that kept them returning to a physical class week after week.</p>
        <p>This reframed the design challenge entirely. The platform didn't need better video or more content — it needed to engineer the conditions for commitment: community touchpoints, practice rituals, and signals of belonging that could substitute for physical co-presence.</p>

        <div className="callout">
          <h4>Design Principles Derived from Research</h4>
          <ul>
            <li>Prioritise community visibility: learners should see each other practising</li>
            <li>Replicate ritual entry points: warm-up structures that signal "class has begun"</li>
            <li>Design for the home environment: acknowledge furniture, space constraints, privacy</li>
            <li>Preserve educator presence through asynchronous guidance, not just live sessions</li>
            <li>Build in social accountability without surveillance</li>
          </ul>
        </div>

        <p className="nda-note">Organisation identity and specific platform metrics have been anonymised per NDA. Available to discuss in detail.</p>
      </FadeIn>
    </CaseLayout>
  )
}
