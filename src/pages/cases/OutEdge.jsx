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
          Out/Edge started in two places at once. My partner was reading Reddit threads &mdash; watching how platform structures shaped what people dared to say. I was in rooms &mdash; Cafe Philo sessions in New York, civic discussions we organised through g0v.tw &mdash; spaces where strangers who disagreed had agreed to show up anyway. I posted probes on Facebook, testing whether people who wouldn&apos;t come to a room might still engage with a question. And we annotated online political discussions together, mapping language patterns with what would become our meta-function chart.
        </p>
        <p>
          What I kept noticing wasn&apos;t about what people believed. It was about what the space made possible. In person, a pause could shift the entire room. Online, that pause didn&apos;t exist &mdash; the platform had already decided the rhythm. I came from design, not political theory, so I wasn&apos;t asking whether deliberative democracy works. I was asking something more specific: what does a designed environment do to the moment someone decides whether to speak or stay silent?
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
          We set out to invert the conditions we&apos;d observed. If existing platforms rewarded broadcasting and punished nuance, what would a platform look like that did the opposite? Out/Edge tested this through an open-source AI moderator trained by participants themselves. All discourse data was visible &mdash; people could see and revise how their conversations were being tagged. The principle underneath: people don&apos;t defend positions; they defend the identities attached to those positions. A space that asks &quot;what would I need to hear to reconsider?&quot; creates different conditions than one that asks &quot;are you wrong?&quot;
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
        <h2>How We Began to See Disagreement</h2>
        <p>
          To understand what platforms do to conversation, we closely read actual discussions &mdash; Cafe Philo transcripts, threaded debates on g0v.tw forums &mdash; and annotated them with the meta-function chart we were building. We weren&apos;t looking for who was right. We were looking for <em>when</em> conversations turned &mdash; and what the space was doing to people at that moment.
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
          Read the full{' '}
          <a href="/Participative-Discourse.pdf" target="_blank" rel="noopener noreferrer" className="underline">
            Out/Edge RtD process document (PDF)
          </a>.
        </p>
      </FadeIn>

      <FadeIn>
        <h2>Limitations</h2>
        <p>Our participants came through activist networks &mdash; Overseas Taiwanese for Democracy, Cafe Philo regulars, g0v.tw communities. They were people already predisposed to listen. The workshops happened in 2019, and the conversations we analysed reflected educated, civically engaged populations.</p>
        <p>What this means is that we learned something specific: how to design enabling conditions for people who already wanted dialogue. We did not learn how to create that desire where it doesn&apos;t exist. That&apos;s the problem I keep returning to. For my PhD, I want to investigate how cities and institutions shape what children feel free to do in public space. Not designing for people already seeking participation, but for those whose relationship to public space is shaped by adults who rarely ask what they need.</p>
      </FadeIn>

      <FadeIn>
        <div className="case-divider">
          <p className="case-reflection">
            Out/Edge asked whether a platform could be designed to make people pause before speaking, and whether that pause could generate different listening. The thesis remained a prototype, a designed argument rather than a deployed system. But the core insight stayed: <em>temporal</em> design — the rhythm of interaction, the pacing of response, the duration of presence — is often invisible in platform design. Yet it shapes everything about what people feel safe expressing.
          </p>
          <p className="case-reflection">
            That question never fully resolved, and it didn&apos;t need to. In the work that followed — on health data infrastructure, on performing arts education, on enterprise learning — I kept finding a quieter version of the same problem: people behaving differently not because of what they believed, but because of what the platform made easy or hard, safe or risky, visible or invisible. Out/Edge was the first time I noticed that what shaped a conversation most wasn&apos;t the content or the positions &mdash; it was the rhythm. The pacing. What a space made room for before anyone spoke.
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
