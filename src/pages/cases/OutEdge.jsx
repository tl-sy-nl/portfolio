import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'
import { CaseImage } from '../../components/Lightbox'

export default function OutEdge() {
  return (
    <CaseLayout
      title="Out/Edge"
      subtitle="How do temporal and structural conditions of a platform shape the emergence of dialogue in situations of disagreement?"
      dimension="Perception enables"
      meta={[
        { label: 'Context', value: 'Parsons School of Design, MFA Transdisciplinary Design' },
        { label: 'Role', value: 'Design Researcher, Workshop Facilitator, Visual Storyteller' },
        { label: 'Duration', value: 'Nov 2018 – May 2019' },
        { label: 'Exhibited at', value: 'Transdisciplinary Design Thesis 2019, Parsons' },
        { label: 'Team', value: 'Anh-Ton Tran, Sylvia Lin' },
      ]}
      nextCase={{ to: '/cases/air-spaces', title: 'The Air We Share' }}
    >

      {/* ══════════ OVERVIEW ══════════ */}
      <FadeIn>
        <p>
          Out/Edge investigates how the temporal structure of a designed environment shapes the possibility of dialogue under disagreement.
        </p>
        <p>
          Developed as a research-through-design project, it examines how pauses, pacing, and visibility influence when and how people choose to speak or remain silent in political conversation.
        </p>
        <p>
          Rather than optimizing for participation or consensus, the project explores how introducing instability into conversational systems may reconfigure conditions for listening and trust.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-platform.webp"
          alt="Out/Edge platform — non-live ongoing conversation with open-sourced tagging"
          width={2050} height={1280}
          caption="When discourse data is visible and revisable, participants shift from defending positions to examining patterns."
        />
      </FadeIn>

      {/* ══════════ RESEARCH FRAMING ══════════ */}
      <FadeIn>
        <h2>Research Framing</h2>

        <div className="callout">
          <h4>Research Question</h4>
          <p className="case-body-sm">
            How do temporal and structural conditions of a platform shape the emergence of dialogue in situations of disagreement?
          </p>
        </div>

        <div className="callout">
          <h4>Method</h4>
          <p className="case-body-sm">
            Constructive Design Research combining discourse analysis (online forums and in-person discussions), participatory workshops, and iterative prototyping of platform interventions.
          </p>
        </div>

        <div className="callout">
          <h4>Contribution</h4>
          <p className="case-body-sm">
            The project demonstrates that: (1) dialogue is structured not only by content but by temporal conditions such as pacing and pause; (2) designed instability (e.g., enforced silence, delayed response) can shift attention and listening behavior; (3) making discourse dynamics visible alters how participants engage, moving from position defense to pattern awareness.
          </p>
        </div>
      </FadeIn>

      {/* ══════════ FROM PRACTICE TO SYSTEM ══════════ */}
      <FadeIn>
        <h2>From Practice to System</h2>
        <p>
          The research shows that disagreement is not determined solely by participants&apos; positions, but by the structure of the environment in which interaction occurs.
        </p>
        <p>
          In face-to-face settings, pauses create space for reflection and recalibration. In digital platforms, these temporal conditions are often removed, leading to continuous response cycles that reinforce position-taking.
        </p>
        <p>
          This shifts the design problem from content moderation to the configuration of time, visibility, and response conditions.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-trio-framework.svg"
          alt="Trio Framework for Transdisciplinary Research — Investigate, Analysis, Synthesis"
          width={960} height={520}
          caption="Each phase revealed what we hadn&apos;t anticipated, forcing us to reconsider assumptions about what makes conversation possible."
        />
      </FadeIn>

      {/* ══════════ SYSTEM CONDITIONS ══════════ */}
      <FadeIn>
        <h2>System Conditions</h2>

        <div className="callout">
          <h4>Temporal Structure</h4>
          <p className="case-body-sm">
            The timing of responses — including delay, pause, and sequence — shapes whether dialogue remains open or collapses into opposition.
          </p>
        </div>

        <div className="callout">
          <h4>Visibility of Discourse</h4>
          <p className="case-body-sm">
            Making patterns of language use visible (e.g., tagging functions, discourse mapping) shifts participants&apos; attention from individual statements to collective dynamics.
          </p>
        </div>

        <div className="callout">
          <h4>Shared Instability</h4>
          <p className="case-body-sm">
            Interventions such as enforced silence create moments where participants experience uncertainty simultaneously, redistributing attention and enabling different forms of engagement.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-meta-function.svg"
          alt="Meta-Function Chart — five meta-functions of language use: Clarify, Exchange, Diplomacy, Categorize, Judge"
          width={1000} height={360}
          caption="Language as design material: timing and frequency of discourse functions shape whether a conversation can hold disagreement."
        />
      </FadeIn>

      {/* ══════════ DESIGN IMPLICATIONS ══════════ */}
      <FadeIn>
        <h2>Design Implications</h2>
        <p>The research informed a reframing of platform design:</p>

        <div className="callout">
          <h4>From Continuous Interaction to Structured Pacing</h4>
          <p className="case-body-sm">
            Rather than enabling constant response, the system introduces deliberate interruptions and temporal constraints to create space for reflection.
          </p>
        </div>

        <div className="callout">
          <h4>From Content Moderation to Temporal Orchestration</h4>
          <p className="case-body-sm">
            Instead of filtering what is said, the design shapes when and how it can be said — treating time as the primary design material.
          </p>
        </div>

        <div className="callout">
          <h4>From Engagement Optimization to Reflective Participation</h4>
          <p className="case-body-sm">
            Rather than reducing friction, the system introduces controlled instability to sustain attention and openness.
          </p>
        </div>

        <p>
          One intervention — the silence protocol — illustrates this shift. By removing the familiar scaffolding of turn-taking and immediate response, the system introduced a shared state of not-knowing. What emerged from that instability was not predetermined: some participants described increased closeness, while others reported heightened awareness of their own assumptions. Rather than resolving uncertainty, the design sustained it as a productive condition — suggesting an approach that cares for instability rather than eliminating it.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-venn.svg"
          alt="Venn Diagram model for agonistic exchange between viewpoints"
          width={800} height={500}
          caption="When overlap is visible, people build from common ground rather than focusing only on irreconcilable differences."
        />
      </FadeIn>

      <FadeIn>
        <p className="case-body-sm">
          Read the full{' '}
          <a href="/Participative-Discourse.pdf" target="_blank" rel="noopener noreferrer" className="underline">
            Out/Edge RtD process document (PDF)
          </a>.
        </p>
      </FadeIn>

      {/* ══════════ KEY INSIGHTS ══════════ */}
      <FadeIn>
        <h2>Key Insights</h2>

        <div className="callout">
          <h4>Timing Is a Design Material</h4>
          <p className="case-body-sm">
            The moment at which something is said can shape its meaning and reception more than the content itself.
          </p>
        </div>

        <div className="callout">
          <h4>Instability Enables Reflection</h4>
          <p className="case-body-sm">
            Interruptions and pauses create conditions where habitual responses are suspended, allowing alternative interpretations to emerge.
          </p>
        </div>

        <div className="callout">
          <h4>Participation Is Structured</h4>
          <p className="case-body-sm">
            Platforms do not simply host dialogue; they configure who feels able to speak, when, and under what conditions.
          </p>
        </div>
      </FadeIn>

      {/* ══════════ EVALUATION ══════════ */}
      <FadeIn>
        <h2>Evaluation (Proposed)</h2>
        <p>
          If extended as a PhD research project, this work would be evaluated through a combination of controlled comparisons and qualitative analysis. The evaluation focuses on:
        </p>

        <div className="callout">
          <h4>Dialogic Shift</h4>
          <p className="case-body-sm">
            Whether temporal interventions alter patterns of response and listening.
          </p>
        </div>

        <div className="callout">
          <h4>Perceptual Awareness</h4>
          <p className="case-body-sm">
            How participants recognize and reflect on discourse dynamics.
          </p>
        </div>

        <div className="callout">
          <h4>Participation Conditions</h4>
          <p className="case-body-sm">
            How different temporal structures affect willingness to engage.
          </p>
        </div>
      </FadeIn>

      {/* ══════════ LIMITATION ══════════ */}
      <FadeIn>
        <h2>Limitations</h2>
        <p>
          This project is grounded in reflective workshop contexts and activist networks where people had already chosen to engage. This meant we didn&apos;t ask a crucial feminist STS question: which voices did the platform&apos;s affordances structurally enable, and whose remained at risk of being unheard? Platform design doesn&apos;t distribute access to speech evenly — it distributes the vulnerability of speaking, and we didn&apos;t interrogate whose discomfort was made visible and whose stayed hidden. Naming these boundaries honestly is part of what makes the work credible as research rather than as demonstration.
        </p>
      </FadeIn>

      {/* ══════════ RELEVANCE ══════════ */}
      <FadeIn>
        <h2>Relevance to Ongoing Research</h2>
        <p>
          This project contributes to research on how designed systems shape attention, perception, and participation through temporal and structural conditions.
        </p>
        <p>
          While most platforms optimize for immediacy and engagement, this work shows that such optimization can reduce the capacity for reflection and reinforce reactive behavior — a pattern that parallels rebound effects, where improving system performance undermines broader goals.
        </p>
        <p>
          Out/Edge suggests an alternative approach: designing for uncertainty, delay, and emergence as aesthetic and functional conditions. Rather than resolving instability, the system sustains it, allowing meaning to unfold through interaction rather than being predetermined by design.
        </p>
      </FadeIn>

      {/* ══════════ REFLECTION ══════════ */}
      <FadeIn>
        <div className="case-divider">
          <p className="case-reflection">
            This project emerged from observing a difference I could not initially explain. In facilitated discussions at Cafe Philo, moments of silence shifted how people listened — hesitation became attention. In contrast, online political platforms produced continuous response, where the structure of interaction left little room for pause.
          </p>
          <p className="case-reflection">
            My position shaped what I could see. As a Taiwanese researcher working with overseas communities, I was attentive less to what was said than to when and how it was said — to the timing of language, rather than its content. This distance allowed me to recognize something that had previously been difficult to articulate: that dialogue is structured not only by opinion, but by the temporal conditions that make listening possible.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="case-footer-note">
          <p>
            <strong>Instructor:</strong> Lara Penin, Patricia Beirne, Eduardo Staszowski, Elliott P. Montgomery<br />
            <strong>Special Thanks:</strong> gov.tw, Cafe Philo @ NYC, Overseas Taiwanese for Democracy, Abo Huang, Naoki Hashimoto, Tien-Chun Lo
          </p>
        </div>
      </FadeIn>
    </CaseLayout>
  )
}
