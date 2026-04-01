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
        { label: 'Context', value: 'Parsons School of Design, MFA Transdisciplinary Design' },
        { label: 'Role', value: 'Visual Storyteller, Design Researcher, Workshop Facilitator' },
        { label: 'Duration', value: 'Nov 2018 – May 2019' },
        { label: 'Exhibited at', value: 'Transdisciplinary Design Thesis 2019, Parsons' },
        { label: 'Team', value: 'Anh-Ton Tran, Tung Lin' },
      ]}
      nextCase={{ to: '/cases/air-spaces', title: 'The Air We Share' }}
    >
      <FadeIn>
        <p>
          I didn&apos;t know what I was looking for. My partner Anh-Ton was reading Reddit threads &mdash; watching how platform structures shaped what people dared to say. I was attending Cafe Philo sessions in New York, sitting in rooms where strangers who disagreed had agreed to show up anyway. I posted probes on Facebook. We annotated online political discussions together, building what became our meta-function chart. These weren&apos;t four things I did to answer a question. They were four things I was doing, and one day I noticed something I couldn&apos;t unsee.
        </p>
        <p>
          In person, a pause could shift an entire room. I watched it happen &mdash; a moment of silence, and suddenly people were listening differently. Online, that pause didn&apos;t exist. The platform&apos;s interface &mdash; reply buttons, character limits, threading logic &mdash; had already determined when and how people could respond. And I started asking: not whether deliberative democracy works, not whether people can disagree, but this: what does a designed environment actually do to the moment someone decides whether to speak or stay silent?
        </p>
        <p>The theoretical frame came from Chantal Mouffe&apos;s concept of agonistic pluralism — the idea that healthy democracy requires not the resolution of conflict but the transformation of enemies into adversaries: people who disagree fundamentally but share a commitment to the legitimacy of the disagreement itself. Mouffe argues that liberal democracy&apos;s drive toward consensus actually suppresses the productive conflicts that keep political life alive. What I wanted to know was whether a designed platform could create the conditions for agonistic exchange — where disagreement is held, not erased.</p>
      </FadeIn>

      <FadeIn>
        <div className="pullquote">
          The question wasn&apos;t whether people could agree. It was whether a designed pause could change the conditions under which they listened.
        </div>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-platform.png"
          alt="Out/Edge platform — non-live ongoing conversation with open-sourced tagging"
          width={2050} height={1280}
          caption="When discourse data is visible and revisable, participants shift from defending positions to examining patterns."
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
          When participants could see how their language was being tagged, they didn&apos;t just analyse the conversation &mdash; they began to revise how they spoke. Visibility changed behaviour.
        </div>
      </FadeIn>

      <FadeIn>
        <h2>How We Began to See Disagreement</h2>
        <p>
          To understand what platforms do to conversation, we closely read transcripts from two deliberately chosen sites: Cafe Philo sessions in New York, where I facilitated discussions among overseas Taiwanese intellectuals who had already chosen to engage in political dialogue &mdash; and threaded discussions on g0v.tw, Taiwan&apos;s civic tech community, where the platform itself set the conversational pace. One site let pauses happen naturally; the other didn&apos;t. As we annotated these with what became our meta-function chart, we started noticing something specific: a clarifying statement landed differently depending on <em>when</em> it arrived. Early in a conversation, when people were still forming trust, the same phrase could shift the whole direction. Late, when positions had hardened, it barely registered. We weren&apos;t looking for who was right or wrong. We were looking at what the timing of language does to whether people can actually hear each other.
        </p>
        <p>
          A note on my position: I am Taiwanese, but I entered Cafe Philo as a facilitator and researcher, not as a member of the community. The participants &mdash; overseas Taiwanese intellectuals who had chosen political dialogue as a regular practice &mdash; had stakes in these conversations that I did not share in the same way. My philosophy training at National Taiwan University gave me familiarity with the discursive modes, but not membership in the political commitments that brought people to the table. That distance shaped what I could observe: I was attuned to the structure of conversation rather than its content, to timing rather than to who was winning. Whether that distance was an asset or a limitation is a question I am still sitting with.
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
        <p>A note on methodology: this was research <em>through</em> design in a specific sense. The meta-function chart, the silence protocol, and the Venn Diagram overlay were not solutions to a design brief. They were research instruments — artifacts constructed to test hypotheses about the temporal and spatial conditions for political listening. Each one generated knowledge that observation alone could not have produced. The meta-function chart revealed that the same utterance functioned differently depending on when it appeared in a conversation — a finding about temporality that no amount of content analysis could have surfaced. The silence protocol produced an unanticipated result: shared discomfort became shared permission, a mechanism we had not predicted and could only discover through testing. This is what Koskinen, Zimmerman, Binder and Redström (2011) call constructive design research — where the artifact is not the outcome of research but the instrument through which research happens.</p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/outedge-trio-framework.svg"
          alt="Trio Framework for Transdisciplinary Research — Investigate, Analysis, Synthesis"
          width={960} height={520}
          caption="Each phase revealed what we hadn&apos;t anticipated, forcing us to reconsider assumptions about what makes conversation possible."
        />
      </FadeIn>

      <FadeIn>
        <div className="callout">
          <h4>Evaluation Tool: Meta-Function Chart</h4>
          <p className="case-body-sm">
            To better understand how language makes a conversation antagonistic or collaborative,
            I created this chart. After observing online and offline political discussions,
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
            visualize discourse in real time &mdash; and it was what led my partner Anh-Ton to propose the five-minute silence protocol: if timing shaped whether language landed, then a deliberate temporal pause might reshape the conditions for listening itself.
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

      <FadeIn>
        <div className="callout">
          <h4>Co-vulnerability &amp; Venn Diagram</h4>
          <p className="case-body-sm">
            To increase trust in a dissenting conversation, we tested whether five minutes of shared silence could function as a temporal design intervention &mdash; what we called co-vulnerability. The mechanism was specific: by making everyone inhabit the same discomfort simultaneously, silence shifted the emotional ground from isolated positions to a shared condition, before anyone had spoken a word.
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

      <FadeIn>
        <h2>What This Research Contributes</h2>
        <p>Out/Edge contributes two specific methodological insights to the field of participatory design for political discourse:</p>
        <p><strong>First, that temporal design is a distinct design material for political participation.</strong> Existing work on deliberative platforms focuses on content moderation, anonymity, and representation. Out/Edge demonstrated that the <em>timing</em> of interaction — when speech is possible, how long silence lasts, whether responses are immediate or delayed — shapes the conditions for listening as much as the content of what is said. The five-minute silence protocol was the clearest evidence: it changed not what people said but how they listened, by making everyone inhabit the same temporal discomfort before discourse began.</p>
        <p><strong>Second, that design artifacts can function as epistemic tools for studying discourse.</strong> The meta-function chart was not an analytical framework applied to data — it was a design artifact that emerged through close reading and annotation, and it revealed patterns (timing-dependent function shifts) that conventional discourse analysis had not surfaced. This positions the chart as a contribution to research methodology, not just to this project&apos;s findings.</p>
        <p>These contributions are modest in scope — the work was tested with participants who had already chosen political dialogue, not with the broader public. But the methodology transfers: the question of how designed environments shape what people feel safe expressing applies well beyond political platforms, to any context where participation is structurally constrained.</p>
      </FadeIn>

      <FadeIn>
        <h2>Limitations</h2>
        <p>
          Our participants came through activist networks &mdash; Overseas Taiwanese for Democracy, Cafe Philo regulars, g0v.tw communities. Civic spaces where people had already chosen to show up. The workshops happened in 2019, and we were learning something very specific: how to design enabling conditions for people who already wanted dialogue. But that limitation is the insight: we weren&apos;t learning how to create the desire to listen in the first place. We were assuming it already existed. This also meant we didn&apos;t ask a feminist STS question: which voices did the platform&apos;s affordances structurally enable, and whose remained at risk of being unheard? Platform design doesn&apos;t distribute access to speech evenly &mdash; it distributes the vulnerability of speaking, and we didn&apos;t interrogate whose discomfort was made visible and whose stayed hidden.
</p>
        <p>
          Methodologically, the three-phase structure (investigate → analyse → synthesise) was generative but not systematic in the way a controlled study would demand. The meta-function chart was built through iterative annotation — a designerly form of grounded theory — but its categories were shaped by my own interpretive lens and Anh-Ton&apos;s. Different annotators might have surfaced different patterns. The silence protocol was tested in workshop conditions with willing participants; whether it would function in contexts where stakes are higher and trust is lower remains an open question. These are not failures of the research — they are the boundaries of what a design thesis can claim, and naming them honestly is part of what makes the work credible as research rather than as demonstration.
        </p>
        <p>
          For my PhD, I want to investigate the question we didn&apos;t answer here. Not how to enable dialogue among people already seeking it, but how cities and institutions shape what children feel free to do in public space &mdash; whose voices they think are welcome, what kinds of presence feel safe. The materials change &mdash; from screens to sidewalks, from algorithms to architecture &mdash; but the gap is the same. Out/Edge taught me how to design for participation. Now I want to understand what shapes whether someone feels like participation is even possible.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="case-divider">
          <p className="case-reflection">
            Out/Edge tested whether a platform could make people pause before speaking, and whether that pause could generate different listening. The thesis stayed a prototype &mdash; a designed argument rather than a deployed system. But something became clear in that testing: the rhythm of a platform shapes what people feel safe expressing. Not the content, not the stated rules. The rhythm. When people could pause. When they had to respond. How long their words stayed visible. What happened in the silence.
          </p>
          <p className="case-reflection">
            After that project, I kept noticing the same pattern in other work &mdash; on health data infrastructure, on performing arts education, on enterprise learning. People behaving differently not because their beliefs changed, but because the platform made certain things easy or hard, visible or hidden, safe or risky. I&apos;d assumed dialogue was about ideas. But it was always about timing first. The pacing. What a space made room for before anyone spoke.
          </p>
          <p className="case-reflection">
            For my PhD, I want to investigate that same instinct in a physical context: how do cities and institutions shape what children feel free to do in public space? What makes them believe they belong there? The materials change &mdash; from screens to sidewalks, from algorithms to architecture &mdash; but the question is the one I first asked at Parsons: what does a designed environment make possible, and for whom?
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
