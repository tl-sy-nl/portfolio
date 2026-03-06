import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

export default function DigitalLearning() {
  return (
    <CaseLayout
      tags={['Media & Education', 'User Research', 'Service Design']}
      title="UX Research for a Leading Media Group's Learning Platform"
      subtitle="Mixed-methods research and service strategy for a major media conglomerate's digital learning and membership ecosystem — mapping learner journeys, identifying conversion barriers, and informing a platform redesign roadmap."
      meta={[
        { label: 'Role', value: 'Senior UX Researcher' },
        { label: 'Duration', value: '2022 – 2023' },
        { label: 'Industry', value: 'Media & Digital Education' },
        { label: 'Methods', value: 'Mixed Methods · Service Design' },
      ]}
      nextCase={{ to: '/cases/arts-education', title: 'Digital Classroom for a Performing Arts Organisation' }}
    >
      <FadeIn>
        <div style={{ aspectRatio: '16/7', background: '#8B6B4A', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0, marginBottom: 40 }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', fontStyle: 'italic' }}>Research process visual — add image</span>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Background</h2>
        <p>A leading Taiwanese media group had developed a digital learning platform as part of its broader media ecosystem — combining editorial content, online courses, and a membership programme. The platform had strong brand recognition but struggled with conversion and retention: users engaged with free content but rarely committed to paid membership or course completion.</p>
        <p>I was engaged as senior researcher to diagnose the underlying experience and service design issues, and to inform a comprehensive platform redesign.</p>
      </FadeIn>

      <FadeIn>
        <h2>Research Approach</h2>
        <h3>Multi-Segment Learner Research</h3>
        <p>The platform served several distinct learner segments — professionals seeking career development, parents seeking content for their children, and casual readers deepening their knowledge on specific topics. Each segment had different motivations, learning behaviours, and value perceptions of the membership offer.</p>
        <p>I designed a mixed-methods research programme that combined quantitative funnel analysis with qualitative depth interviews, supplemented by diary studies to capture the in-the-moment learning experience across devices and contexts.</p>

        <div className="callout">
          <h4>Research Methods</h4>
          <ul>
            <li>In-depth interviews across 3 learner segments (n=24)</li>
            <li>7-day learning diary study to capture real-world usage patterns</li>
            <li>Usability evaluation of course discovery, enrolment, and completion flows</li>
            <li>Membership value proposition testing through concept interviews</li>
            <li>Quantitative analysis of drop-off points and session behaviour</li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Key Findings</h2>
        <h3>The Commitment Paradox</h3>
        <p>A consistent finding across segments: learners valued the content but resisted committing to membership because the platform's structure implied a level of learning dedication they weren't sure they could sustain. The membership framing — with course schedules, completion tracking, and visible progress metrics — created what I termed a "commitment paradox": it made the platform feel more valuable on paper, but more daunting in practice.</p>

        <h3>Discovery as the Primary Barrier</h3>
        <p>Users who did convert consistently cited a specific piece of content as the trigger — a single article, video, or course that made them realise the depth of the platform's offer. The problem: the discovery journey to that moment was unreliable and often accidental. The research identified a structural gap between the platform's editorial richness and its ability to surface the right content to the right person at the right moment.</p>

        <div className="callout">
          <h4>Strategic Recommendations</h4>
          <ul>
            <li>Reframe membership value around access and flexibility, not completion</li>
            <li>Redesign content discovery to support intent-based and mood-based browsing</li>
            <li>Introduce a "taster" content layer to reduce pre-conversion commitment anxiety</li>
            <li>Develop segment-specific onboarding paths for distinct learner motivations</li>
          </ul>
        </div>

        <p className="nda-note">Client identity and specific performance metrics have been anonymised per NDA. Available to discuss in detail.</p>
      </FadeIn>
    </CaseLayout>
  )
}
