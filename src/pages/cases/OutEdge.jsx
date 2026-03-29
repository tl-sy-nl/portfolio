import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'
import { CaseImage } from '../../components/Lightbox'

export default function OutEdge() {
  return (
    <CaseLayout
      title="Out/Edge"
      subtitle="Can silence be a design material for political conversation? We tested that question — and what emerged changed how we think about the temporal conditions for trust across disagreement."
      tags={['Thesis Project', 'Research through Design', 'Participatory Politics']}
      meta={[
        { label: 'Exhibition', value: 'Transdisciplinary Design Thesis 2019, Parsons' },
        { label: 'Role', value: 'Visual Storyteller, Design Researcher, Workshop Facilitator' },
        { label: 'Duration', value: 'Nov 2018 – May 2019' },
        { label: 'Team', value: 'Anh-Ton Tran, Tung Lin' },
      ]}
      nextCase={{ to: '/cases/beyond-100', title: 'Beyond 100%' }}
    >
      <FadeIn>
        <p>
          Social media promised to connect people across difference. Instead, it narrowed belonging: people retreat into affinity circles or harden into adversarial camps. When politics enters, platforms stop mediating and start amplifying. Out/Edge began with that contradiction — and asked what would happen if we reversed the logic. What if a platform could be structured to make dissent <em>safer</em>, not riskier? And what design materials — including silence itself — might invite people to listen across difference?
        </p>
        <p>
          As visual storyteller and workshop facilitator in this project, my role was to make visible the invisible structures — the temporal rhythms, the affective barriers, the unspoken rules — that shaped how people felt safe or unsafe speaking. Coming from a design background rather than political theory, I approached this not through the scholarly literature on deliberative democracy but through what platforms actually do to people in the moment of disagreement: the micro-level of discomfort, trust, and timing.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="pullquote">
          On this platform, it features co-vulnerability through silence. The program asks all
          users to keep silent for 5 mins to activate the debate. Then, during the live debate;
          a robot will transcribe the conversation live.
        </div>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-platform.png"
          alt="Out/Edge platform — non-live ongoing conversation with open-sourced tagging"
          width={2050} height={1280}
          caption="Non-live ongoing conversation with open-sourced tagging"
        />
      </FadeIn>

      <FadeIn>
        <p>
          <em className="case-emphasis">
            How might we design a political discourse with better affordance of diverse voices
            and collaboration on social media?
          </em>
        </p>
        <p>
          Out/Edge began with an observation: online spaces that promised open dialogue were
          actively foreclosing it. The algorithm-driven feeds, the binary reply structures, the
          gamified metrics of likes and shares — all of these mechanisms shaped not just what
          people saw, but what they felt safe expressing. We set out to ask: what if we designed
          the inverse? What if a platform could be structured to make dissent <em>possible</em> rather
          than punishing? And what design materials — including silence itself — might invite people
          to listen across difference?
        </p>
        <p>
          What determines whether someone shares or retreats in a debate is not ideology — it&apos;s environment. Whether people defend, attack, drop out, or keep engaging depends on whether they believe others will receive their contribution as legitimate. That belief isn&apos;t fixed; it&apos;s shaped by how the space is designed.
        </p>
        <p>
          Provide an environment where contribution feels safe, and people share more. That&apos;s when cooperation becomes possible. That was the baseline we were designing for.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-jenkins.svg"
          alt="Henry Jenkins' Participatory Culture Theory — five principles mapped to self-efficacy and interpersonal interaction"
          width={640} height={340}
        />
      </FadeIn>

      <FadeIn>
        <div className="pullquote">
          It will tag the conversation as it happens with the meta-function charts we created,
          so users can then analyze their discourse. These tags would also be open-sourced for
          all users to see and potentially revise.
        </div>
      </FadeIn>

      <FadeIn>
        <h2>What Platforms Actually Do to Disagreement</h2>
        <p>
          We discovered that the affordances of existing platforms didn&apos;t just shape <em>what</em> people could say — they shaped what people felt permission to express. Algorithmic feeds encouraged broadcasting over listening. Binary reply structures collapsed nuance. Visible engagement metrics gamified the stakes. These weren&apos;t bugs; they were design choices with affective consequences. Our question became: what if we inverted these affordances? What structures might make dissent legible as <em>contribution</em> rather than <em>threat</em>?
        </p>
        <p>
          Out/Edge tested this through an open-source AI moderator trained by the users themselves. All discourse data was visible; participants could see and revise how their conversations were being tagged. The design principle: people don&apos;t defend positions; they defend the identities attached to those positions. A platform that asks &quot;what would I need to hear to reconsider?&quot; instead of &quot;are you wrong?&quot; creates different conditions for thinking.
        </p>
      </FadeIn>

      <FadeIn>
        <h2>Design Highlights</h2>
        <h3>Research through Design</h3>
        <p>
          We worked through design to <em>ask</em> rather than <em>answer</em>. Each artifact became a tool for understanding rather than a deliverable. The meta-function chart made visible the moments of transition where disagreement could shift — it showed us that conversation doesn&apos;t happen in binary positions but in the movement between them. The five-minute silence wasn&apos;t a gimmick; it was an experimental probe into whether <em>time itself</em> could be a design material that changes how people listen.
        </p>
        <p>
          We moved through three distinct phases: investigating existing political discourse (both online and in person), analysing the structures and patterns we observed, and synthesising our findings into design interventions that could be tested. Each phase revealed something we hadn&apos;t anticipated, forcing us to reconsider our assumptions about what makes conversation possible.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-trio-framework.svg"
          alt="Trio Framework for Transdisciplinary Research — Investigate, Analysis, Synthesis"
          width={960} height={520}
          caption="Trio Framework for Transdisciplinary Research"
        />
      </FadeIn>

      <FadeIn>
        <div className="callout">
          <h4>Evaluation Tool: Meta-Function Chart</h4>
          <p className="case-body-sm">
            To better understand how language makes a conversation antagonistic or collaborative,
            the team created this chart. After observing online and offline political discussions,
            it synthesizes discourses into five meta-functions of language use. Depending on
            the frequency, timing, and combination of sentences, the chart helps reveal the
            dynamics of a conversation — and whether the momentum of dialogue is healthy or not.
          </p>
          <p className="case-body-sm case-body-sm--spaced">
            The process of building this chart was itself a research discovery. By closely reading
            conversations — both transcripts from Cafe Philo sessions in New York and threaded discussions
            on political forums moderated by gov.tw — we began to see language not as transparent carriers
            of meaning, but as design material with texture and weight. A clarifying statement landed
            differently depending on whether it came early (when trust was still forming) or late (when
            positions had hardened). This observation became the foundation for how Out/Edge would tag and
            visualize discourse in real time.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-meta-function.svg"
          alt="Meta-Function Chart — five meta-functions of language use: Clarify, Exchange, Diplomacy, Categorize, Judge"
          width={1000} height={360}
          caption="Meta-Function Chart"
        />
      </FadeIn>

      <FadeIn>
        <div className="callout">
          <h4>Co-vulnerability &amp; Venn Diagram</h4>
          <p className="case-body-sm">
            To increase trust in a dissenting conversation, the team applied silence to create
            a space for co-vulnerability — a shared vulnerability that supports participants
            in feeling they are together, even though they dissent.
          </p>
          <p className="case-body-sm case-body-sm--spaced">
            To bring about broadening discussions, the team adopted the Venn Diagram as a model
            for better affordance, then tested it in participatory workshops with members of Overseas
            Taiwanese for Democracy and other civic groups. The layout can change — it allows additional
            viewpoints to be added to fit the complexity of the discussion.
          </p>
          <p className="case-body-sm case-body-sm--spaced">
            What surprised us wasn&apos;t that silence was uncomfortable — we&apos;d anticipated that — but how quickly shared discomfort became shared permission. We could see it in their bodies: the initial restlessness, then a settling, then something closer to attention. The silence became a shared temporal material that levelled the space — not by erasing stakes, but by making stakes visible and survivable. Participants told us they found themselves
            thinking differently about the person across from them, not because their disagreement had
            dissolved, but because they'd both inhabited the same pause. The Venn Diagram, meanwhile,
            revealed an unexpected insight: when people could visually see where their views overlapped —
            even slightly — they treated the overlapping area as <em>a place to build from</em>, rather than
            focusing only on the irreconcilable differences. This finding directly shaped how Out/Edge would
            visualize discourse, prioritizing common ground as a design element.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-venn.svg"
          alt="Venn Diagram model for agonistic exchange between viewpoints"
          width={800} height={500}
          caption="Agonistic Exchange — Venn Diagram model"
        />
      </FadeIn>

      <FadeIn>
        <p className="case-body-sm">
          To learn more about the RtD process on Out/Edge,{' '}
          <a href="/Participative-Discourse.pdf" target="_blank" rel="noopener noreferrer" className="underline">
            click here
          </a>.
        </p>
      </FadeIn>

      <FadeIn>
        <h2>Limitations</h2>
        <p>Our participants were self-selected — recruited through activist networks and civic groups like Overseas Taiwanese for Democracy — and already predisposed to dialogue. The workshops took place in 2019, before algorithmic polarisation became a household concern. The conversations we analysed (Cafe Philo, gov.tw forums) reflected educated, civically engaged populations; the findings may not transfer to communities with different relationships to public speech or institutional trust.</p>
        <p>These constraints clarify the scope: we learned about how enabling conditions function for people already seeking dialogue — not how to create the desire for dialogue where it doesn&apos;t exist. For my PhD work, I&apos;m interested in that harder version of the question: how to design conditions for participation among those not yet predisposed — children, especially, whose relationship to public space is shaped by adults who rarely ask what they need.</p>
      </FadeIn>

      <FadeIn>
        <div className="case-divider">
          <p className="case-reflection">
            Out/Edge asked whether a platform could be designed to make people pause before speaking, and whether that pause could generate different listening. The thesis remained a prototype, a designed argument rather than a deployed system. But the core insight stayed: <em>temporal</em> design — the rhythm of interaction, the pacing of response, the duration of presence — is often invisible in platform design. Yet it shapes everything about what people feel safe expressing.
          </p>
          <p className="case-reflection">
            That question never fully resolved, and it didn&apos;t need to. In the work that followed — on health data infrastructure, on performing arts education, on enterprise learning — I kept finding a quieter version of the same problem: people behaving differently not because of what they believed, but because of what the platform made easy or hard, safe or risky, visible or invisible. Out/Edge was the first time I understood that the most important design decisions are often the ones nobody notices — the ones about time, about pacing, about what a space makes room for before anyone speaks.
          </p>
          <p className="case-reflection">
            For my PhD, I want to investigate that same instinct in a physical context: how do cities and institutions shape what children feel free to do in public space? The materials change — from screens to sidewalks, from algorithms to architecture — but the question is the same one I asked at Parsons: what does a designed environment make possible, and for whom?
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
