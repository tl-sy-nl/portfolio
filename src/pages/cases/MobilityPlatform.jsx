import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

export default function MobilityPlatform() {
  return (
    <CaseLayout
      tags={['Mobility', 'App Experience', 'Usability Research']}
      title="Usability Research for a Vehicle-Sharing Platform"
      subtitle="Evaluated the end-to-end booking-to-return task flow of a leading car-sharing service under realistic conditions — surfacing high-severity issues hidden in processing states, error recovery, and identity verification onboarding."
      meta={[
        { label: 'Role', value: 'UX Researcher' },
        { label: 'Focus', value: 'End-to-End Flow Evaluation' },
        { label: 'Methods', value: 'Usability Testing · Task Analysis' },
        { label: 'Scope', value: 'Mobile App · Moderated Testing' },
      ]}
      nextCase={{ to: '/cases/luxury-vip-app', title: 'VIP App Experience for a Premium Fashion Distributor' }}
    >
      <FadeIn>
        <div style={{ aspectRatio: '16/7', background: '#7A5C4A', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0, marginBottom: 40 }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', fontStyle: 'italic' }}>App flow visual — add image</span>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Overview</h2>
        <p>A major vehicle-sharing platform in Taiwan engaged our team to conduct a comprehensive usability evaluation of its mobile application — with particular focus on the full task flow from account registration through to vehicle return. The platform served both occasional and frequent users, and the client was preparing for a significant app update.</p>
        <p>The study was designed to surface usability barriers under realistic conditions — with participants navigating the actual app in outdoor settings, mimicking real-world usage contexts.</p>
      </FadeIn>

      <FadeIn>
        <h2>Research Design</h2>
        <h3>Moderated Usability Testing in Context</h3>
        <p>Standard lab-based testing would have failed to capture the core usability challenges of this product: a car-sharing app is used outdoors, often under time pressure, with physical interactions (finding the vehicle, operating locks) intertwined with digital ones. I designed a moderated usability protocol that paired in-app task completion with physical location scenarios.</p>
        <p>Participants completed realistic tasks — from first-time registration through booking, vehicle location, unlock, return, and billing review — with think-aloud protocol throughout.</p>

        <div className="callout">
          <h4>Study Design</h4>
          <ul>
            <li>Moderated usability sessions with 12 participants (mixed first-time and returning users)</li>
            <li>Think-aloud protocol across full booking-to-return task flow</li>
            <li>Outdoor context testing to capture real environmental conditions</li>
            <li>Severity rating of identified issues (Critical / Major / Minor)</li>
            <li>Post-task questionnaires and debrief interviews</li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Key Findings</h2>
        <h3>Identity Verification: The Invisible Barrier</h3>
        <p>The highest-severity finding was in the identity verification onboarding flow — a mandatory step for new users involving document upload and government ID validation. The process was technically functional but experientially opaque: users received no clear indication of processing status, no time estimate, and ambiguous error messages when verification failed. Multiple participants abandoned the flow entirely, assuming the app was broken rather than waiting for an asynchronous process to complete.</p>

        <h3>Vehicle Return: Error Recovery Under Pressure</h3>
        <p>The vehicle return flow surfaced a cluster of high-severity issues around error states. When the app failed to confirm a return — due to GPS inaccuracy or connectivity issues — users had no reliable recovery path. The error messaging did not distinguish between "try again" and "call support" scenarios, leaving users stranded with an active rental and no clear next step.</p>

        <div className="callout">
          <h4>Recommendations (Critical Priority)</h4>
          <ul>
            <li>Redesign identity verification with explicit status feedback and time estimates</li>
            <li>Create distinct error state messaging for recoverable vs. support-required failures</li>
            <li>Add in-app support access at all critical error points in the return flow</li>
            <li>Improve GPS confirmation UI with manual override for return completion</li>
            <li>Introduce onboarding progress indicators for multi-step registration</li>
          </ul>
        </div>

        <p className="nda-note">Client identity and specific platform metrics have been anonymised per NDA. Available to discuss in detail.</p>
      </FadeIn>
    </CaseLayout>
  )
}
