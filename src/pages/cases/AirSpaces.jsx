import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'
import { CaseImage } from '../../components/Lightbox'

export default function AirSpaces() {
  return (
    <CaseLayout
      title="The Air We Share"
      subtitle="What if environmental awareness didn&apos;t come from data, but from what the body already knows?"
      tags={['Constructive Design Research', 'Physical Prototyping', 'Environmental Design', 'Workshop Facilitation']}
      meta={[
        { label: 'Context', value: 'Parsons School of Design, MFA Transdisciplinary Design' },
        { label: 'Role', value: 'Design Researcher, Workshop Facilitator, Prototype Maker' },
        { label: 'Duration', value: 'Sept – Dec 2017' },
        { label: 'Team', value: 'Tung Lin, Anh-Ton Tran, Jonas Voigt' },
        { label: 'Partners', value: 'NASA Langley Research Center, WEACT, Dalton School, NYC Center for Health Equity' },
      ]}
      nextCase={{ to: '/cases/beyond-100', title: 'Beyond 100%' }}
    >
      <FadeIn>
        <p>
          Air quality is something we interact with constantly, but rarely think about. The project started with a question: how might we create a space for people to talk about their perception of air quality? We partnered with environmental justice organizations in New York, where neighborhoods like East Harlem have childhood asthma rates directly linked to inequitable air quality.
        </p>
      </FadeIn>

      <FadeIn>
        <h2>The Data Problem</h2>
      </FadeIn>

      <FadeIn>
        <p>
          We started where most environmental projects start — with data. I built an Arduino-based monitoring device that could track temperature and humidity in real time. But sitting with the readings, I realized the numbers weren&apos;t enough. Data told us the air was bad. It didn&apos;t help anyone feel what that meant. The gap between knowing and sensing became the project&apos;s real research question.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/arduino-sensor.jpg"
          alt="Arduino air quality monitoring setup with humidity and temperature sensors"
          width={1200} height={600}
          caption="The sensor system revealed data, but data alone couldn&apos;t answer the real question: how do we make the invisible tangible?"
        />
      </FadeIn>

      <FadeIn>
        <h2>From Data to Body</h2>
      </FadeIn>

      <FadeIn>
        <p>
          We shifted approach: instead of measuring air, we would let people experience it. We built a geodesic dome — hand-constructed from lumber carried home from Home Depot, assembled following structural geometry diagrams. The dome became an immersive environment where projections, soundscapes, and scents simulated different air quality contexts. Inside, scenes and scents changed every six minutes: from clean mountain air to congested city streets.
        </p>
        <p>
          The construction process itself was part of the research. Building a structure large enough for people to sit inside taught us something we hadn&apos;t anticipated: the scale of the intervention matters. A screen shows you information. A space you can enter changes how you breathe.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/carrying-lumber.jpg"
          alt="Team carrying lumber through New York streets at night"
          width={1200} height={600}
          caption="The dome&apos;s materials came from Home Depot, carried home by hand. Constraint shaped the design."
        />
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/dome-frame.jpg"
          alt="Geodesic dome wooden frame under construction"
          width={1200} height={600}
          caption="Geometric precision emerging from hand-built construction"
        />
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/dome-covering.jpg"
          alt="Attaching translucent covering to the geodesic dome"
          width={1200} height={600}
          caption="The translucent skin filtered light and became a projection surface"
        />
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/dome-inside-projection.jpg"
          alt="Person sitting inside the completed dome watching environmental projection"
          width={1200} height={600}
          caption="Inside the dome: visibility shifts as air conditions changed in the simulation"
        />
      </FadeIn>

      <FadeIn>
        <h2>Workshops — Listening to What Bodies Already Know</h2>
      </FadeIn>

      <FadeIn>
        <p>
          We ran workshops with high school students at Dalton School. Rather than lecturing about air quality, we guided them through breathing exercises and role-playing scenarios. Students filled out journey maps tracking what they noticed about each environment — the place, the air, their breathing, their emotions. One student described the city simulation as &quot;smoky, smells like pee&quot; and their breathing as &quot;deep/shallow alternating.&quot; Another shared stories about relatives near highway interchanges whose children develop asthma.
        </p>
      </FadeIn>

      <FadeIn>
        <p>
          A thing I did not fully reckon with at the time, but that has stayed with me since: we ran the workshops at Dalton School — one of Manhattan&apos;s most elite private schools — while the environmental justice question we were asking originated in East Harlem, where childhood asthma rates are among the highest in the city. The students who sat inside the dome and described what they sensed were not the children whose bodies bear the daily weight of inequitable air. They were learning about air quality as an intellectual exercise; for children a few blocks east, it was a material condition of their lives.
        </p>
        <p>
          I am not saying the Dalton workshops were wrong. The students engaged with real seriousness, and the dome created genuine perceptual shifts. But the gap between who got to experience the intervention and who needed it most is worth naming — because it reveals something about how design research circulates. We had institutional access to Dalton. We had a partnership with WEACT, the environmental justice organisation working in East Harlem. But bringing an experimental dome into a public school in a neighbourhood already overburdened by environmental harm requires a different kind of trust, a different timeline, a different ethics of intervention. We did not have those yet. That is a limitation I would approach differently now — and it connects directly to my current research interest in whose bodies get to participate in design processes, and whose spatial knowledge remains unheard.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/dome-group-discussion.jpg"
          alt="Group of participants sitting in a circle inside the dome for discussion"
          width={1200} height={600}
          caption="The dome became a listening chamber where perception could be shared and compared"
        />
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/immersive-city-air.jpg"
          alt="High school students immersed in projected city streetscape inside the dome"
          width={1200} height={600}
          caption="Simulating city air inside the dome — projections and scent shifted how students understood their own breathing"
        />
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/breathing-awareness.jpg"
          alt="Facilitating breathing awareness exercise with students"
          width={1200} height={600}
          caption="Breath as a design material — the body becomes an instrument for understanding"
        />
      </FadeIn>

      <FadeIn>
        <p>
          We also created &quot;breathing balloons&quot; — participants breathed into a balloon and wrote their perception of the air on it. The balloons became a physical archive of invisible experience. You could hold someone else&apos;s breath in your hands.
        </p>
        <p>
          In the earliest sessions, we used Playmobil figures and storyboarding props to co-create with students. They shared their observations about air quality in their neighborhoods, translating personal experience into shareable narratives.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/journey-map.jpg"
          alt="Student journey map tracking sensory responses across different air environments"
          width={1200} height={600}
          caption="Journey maps made perception explicit — what the body noticed became data"
        />
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/playmobil-storyboard.jpg"
          alt="Playmobil figures used as co-design props with high school students"
          width={1200} height={600}
          caption="Co-design through play: students translated their experiences into shareable stories"
        />
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/breathing-balloons.jpg"
          alt="Breathing balloons with handwritten air quality perceptions"
          width={1200} height={600}
          caption="An archive of breath and perception — the invisible made tangible"
        />
      </FadeIn>

      <FadeIn>
        <h2>Prototypes as Research Instruments</h2>
      </FadeIn>

      <FadeIn>
        <p>
          Three prototypes emerged:
        </p>
        <p>
          <strong>The Dome.</strong> A walk-in immersive space with projection and scent. Not a display; a research instrument that made invisible environmental conditions sensorially available.
        </p>
        <p>
          <strong>The Curriculum.</strong> An accordion-fold booklet designed for deployment in schools and science programs. It packaged our workshop methodology so others could facilitate the same embodied inquiry.
        </p>
        <p>
          <strong>The Breathing Balloons.</strong> A design probe that materialized something invisible: the air inside a person&apos;s lungs, marked with their words.
        </p>
        <p>
          Each prototype was an iteration: the curriculum emerged from workshop insights; the dome emerged from the failure of data-only approaches; the balloons emerged from watching students struggle to articulate what they were sensing.
        </p>
      </FadeIn>

      <FadeIn>
        <CaseImage
          src="/images/cases/air-spaces/curriculum-booklet.jpg"
          alt="The Air We Share curriculum booklet — accordion-fold educational material"
          width={1200} height={600}
          caption="The methodology made portable — others could facilitate the same journey"
        />
      </FadeIn>

      <FadeIn>
        <h2>What I Learned</h2>
      </FadeIn>

      <FadeIn>
        <p>
          This project taught me that environmental awareness is not an information problem — it is a perception problem. Data can tell you the air is unhealthy. But it takes a different kind of design — one that works with uncertainty, with sensory experience, with the body&apos;s own capacity for judgment — to make that knowledge feel real.
        </p>
        <p>
          The shift from Arduino monitoring to immersive dome was not a failure of the technical approach. It was a research finding: that the most important things about living environments are often the things we have stopped noticing, and that making them noticeable again requires aesthetic interventions, not informational ones.
        </p>
      </FadeIn>

      <FadeIn>
        <h3>Connection to Current Research</h3>
      </FadeIn>

      <FadeIn>
        <p>
          The Air We Share was my first encounter with what I now recognize as a core tension in environmental design: the gap between systemic knowledge (data, metrics, policy) and lived experience (what the body registers, tolerates, adapts to). The project asked whether design could bridge that gap — not by translating data into more accessible formats, but by creating conditions where bodies could notice what they had stopped noticing.
        </p>
        <p>
          This question has stayed with me. In the years since, I have come to understand it as a question about design aesthetics — specifically, about whether alternative aesthetics (uncertainty, instability, emergence) can do work that efficiency-driven design cannot. That insight connects directly to my current research on rebound effects in home automation: the systems that claim to make life simpler often make us less aware of what we&apos;re consuming, less attentive to the consequences of our choices. The Air We Share taught me that the opposite is also possible — that good design can make the consequences visible again, not through data dashboards, but through encounters that let the body remember what matters.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="case-divider">
          <p className="case-reflection">
            The Air We Share started as a data project and became an embodied one. That shift was not a pivot away from rigor — it was a research finding. The most powerful thing design can do is not make things easier to understand intellectually. It is to make the invisible tangible, to create the conditions where a body can notice what it has stopped noticing, and to let that noticing become a form of knowledge.
          </p>
          <p className="case-reflection">
            The breathing balloons stayed with me. A person&apos;s breath, made visible. Their own language written on it. That is not a metaphor for environmental justice — it is environmental justice at the scale of a single breath. The scale matters. It tells you who the intervention is for, and what kind of change it makes possible.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="case-footer-note">
          <p>
            <strong>Role:</strong> Design Researcher, Workshop Facilitator, Prototype Maker<br />
            <strong>Instructor:</strong> Parsons MFA Transdisciplinary Design faculty<br />
            <strong>Special Thanks:</strong> NASA Langley Research Center, WEACT, Dalton School, NYC Center for Health Equity, all the students who shared their breath and their stories
          </p>
        </div>
      </FadeIn>
    </CaseLayout>
  )
}
