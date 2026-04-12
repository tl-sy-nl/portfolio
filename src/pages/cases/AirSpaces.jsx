import CaseLayout from '../../components/CaseLayout'
import { CaseImage } from '../../components/Lightbox'

export default function AirSpaces() {
  return (
    <CaseLayout
      title="The Air We Share"
      subtitle="What if environmental awareness didn&apos;t come from data, but from what the body already knows?"
      dimension="Perception enables"
      meta={[
        { label: 'Context', value: 'Parsons School of Design, MFA Transdisciplinary Design' },
        { label: 'Role', value: 'Design Researcher, Workshop Facilitator, Prototype Maker' },
        { label: 'Duration', value: 'Sept – Dec 2017' },
        { label: 'Team', value: 'Sylvia Lin, Anh-Ton Tran, Jonas Voigt' },
        { label: 'Partners', value: 'NASA Langley Research Center, WEACT, Dalton School, NYC Center for Health Equity' },
      ]}
    >
      <p>
        The Air We Share investigates how environmental awareness can be designed beyond data representation, focusing on air quality as a condition that is constantly experienced but rarely perceived.
      </p>
      <p>
        The project began with a technical approach — developing an Arduino-based air monitoring system — but shifted toward an embodied design approach when it became clear that data alone does not translate into lived understanding. The work explores how sensory and spatial interventions can make environmental conditions perceptible, and how such perceptibility relates to environmental engagement.
      </p>

      <CaseImage
        src="/images/cases/air-spaces/arduino-sensor.webp"
        alt="Arduino air quality monitoring setup with humidity and temperature sensors"
        width={1200} height={600}
        caption="The sensor system revealed data, but data alone couldn&apos;t bridge the gap between abstract knowledge and lived experience."
      />

      <h2>Research Framing</h2>

      <div className="callout">
        <h4>Research Question</h4>
        <p className="case-body-sm">
          How can design move beyond data-driven representations to create embodied awareness of environmental conditions?
        </p>
      </div>

      <div className="callout">
        <h4>Method</h4>
        <p className="case-body-sm">
          Constructive Design Research through iterative prototyping and participatory workshops. The project develops and deploys physical artifacts (immersive environments, design probes, and educational materials) to investigate how perception can be shaped through design.
        </p>
      </div>

      <div className="callout">
        <h4>Contribution</h4>
        <p className="case-body-sm">
          The project shows that: (1) Environmental awareness is not only a problem of information access, but of perception and attention. (2) Data-driven approaches alone are insufficient to produce meaningful engagement with environmental conditions. (3) Embodied and aesthetic interventions can re-sensitize users to conditions they have adapted to or stopped noticing. (4) The distribution of such interventions is uneven, raising questions about who participates in and benefits from design research.
        </p>
      </div>

      <h2>From Data to Embodied Experience</h2>

      <p>
        The project initially focused on environmental sensing through an Arduino-based monitoring system. While the system provided real-time data (e.g., temperature and humidity), it did not bridge the gap between abstract knowledge and lived experience.
      </p>
      <p>
        This gap became the central research finding: knowing that air quality is poor does not necessarily change how it is perceived or acted upon.
      </p>
      <p>
        In response, the project shifted toward designing for embodied experience rather than measurement.
      </p>

      <h2>Prototyping as Inquiry</h2>

      <p>
        Three main prototypes were developed, each emerging from observed limitations of the previous approach.
      </p>

      <div className="callout">
        <h4>The Dome</h4>
        <p className="case-body-sm">
          A walk-in geodesic dome that simulates different air quality conditions through projections, sound, and scent. We built the structure by hand — calculating strut widths and weights for over sixty wooden members, then assembling them with tension bands to achieve a stable three-dimensional form. The construction demanded iterative recalculation: early cuts failed to account for how width and weight interact at scale, forcing us to rethink the relationship between structural constraint and the enclosed perceptual space.
        </p>
      </div>

      <div className="case-img-row case-img-row--3">
        <CaseImage
          src="/images/cases/air-spaces/carrying-lumber.webp"
          alt="Team carrying lumber through New York streets at night"
          width={1200} height={600}
        />
        <CaseImage
          src="/images/cases/air-spaces/dome-frame.webp"
          alt="Geodesic dome wooden frame under construction"
          width={1200} height={600}
        />
        <CaseImage
          src="/images/cases/air-spaces/dome-covering.webp"
          alt="Attaching translucent covering to the geodesic dome"
          width={1200} height={600}
        />
      </div>

      <div className="callout">
        <h4>Breathing Balloons</h4>
        <p className="case-body-sm">
          A design probe where participants breathe into balloons and annotate their perception of the air. This transforms subjective, internal experience into a shareable and material form.
        </p>
      </div>

      <div className="callout">
        <h4>Curriculum</h4>
        <p className="case-body-sm">
          An educational toolkit that enables others to facilitate similar workshops, extending the methodology beyond the initial setting.
        </p>
      </div>

      <div className="case-img-row case-img-row--2">
        <CaseImage
          src="/images/cases/air-spaces/breathing-balloons.webp"
          alt="Breathing balloons with handwritten air quality perceptions"
          width={1200} height={600}
        />
        <CaseImage
          src="/images/cases/air-spaces/curriculum-booklet.webp"
          alt="The Air We Share curriculum booklet — accordion-fold educational material"
          width={1200} height={600}
        />
      </div>

      <h2>Workshops and Participation</h2>

      <p>
        Workshops were conducted with high school students, using breathing exercises, role-playing, and journey mapping to explore how participants perceive different air environments.
      </p>
      <p>
        The workshops demonstrated that participants are capable of articulating nuanced sensory experiences when provided with appropriate frameworks. These experiences include not only physical sensations (e.g., breathing patterns) but also emotional and spatial associations.
      </p>

      <CaseImage
        src="/images/cases/air-spaces/dome-group-discussion.webp"
        alt="Group of participants sitting in a circle inside the dome for discussion"
        width={1200} height={600}
        caption="The dome became a listening chamber where perception could be shared and compared"
      />

      <div className="case-img-row case-img-row--2x2">
        <CaseImage
          src="/images/cases/air-spaces/immersive-city-air.webp"
          alt="High school students immersed in projected city streetscape inside the dome"
          width={1200} height={600}
        />
        <CaseImage
          src="/images/cases/air-spaces/breathing-awareness.webp"
          alt="Facilitating breathing awareness exercise with students"
          width={1200} height={600}
        />
        <CaseImage
          src="/images/cases/air-spaces/journey-map.webp"
          alt="Student journey map tracking sensory responses across different air environments"
          width={1200} height={600}
        />
        <CaseImage
          src="/images/cases/air-spaces/playmobil-storyboard.webp"
          alt="Playmobil figures used as co-design props with high school students"
          width={1200} height={600}
        />
      </div>

      <p>
        At the same time, the project revealed a limitation in its own deployment: the participants were not those most affected by poor air quality. The intervention was conducted in an institutionally accessible context, while the environmental justice issues motivating the project were situated elsewhere.
      </p>
      <p>
        This highlighted a critical dimension of design research: participation is not neutral, and access to experimental interventions is unevenly distributed.
      </p>

      <h2>Key Findings</h2>

      <div className="callout">
        <h4>Perception Gap</h4>
        <p className="case-body-sm">
          There is a disconnect between environmental data and embodied experience. Bridging this gap requires interventions that engage the body, not just cognition.
        </p>
      </div>

      <div className="callout">
        <h4>Aesthetic Mediation</h4>
        <p className="case-body-sm">
          Sensory and spatial design (e.g., immersion, rhythm, atmosphere) can function as mediators that make environmental conditions perceptible again.
        </p>
      </div>

      <div className="callout">
        <h4>Situated Participation</h4>
        <p className="case-body-sm">
          Design interventions are shaped by institutional access, which affects who can participate and whose experiences are represented.
        </p>
      </div>

      <h2>Evaluation</h2>

      <p>
        If extended as a PhD research project, this work would be evaluated through a mixed-method approach combining controlled comparisons, in-situ deployment, and qualitative inquiry.
      </p>

      <div className="callout">
        <h4>Perceptual Impact</h4>
        <p className="case-body-sm">
          How embodied interventions reshape awareness compared to data-driven approaches.
        </p>
      </div>

      <div className="callout">
        <h4>Sustained Engagement</h4>
        <p className="case-body-sm">
          Whether increased awareness persists in everyday contexts over time.
        </p>
      </div>

      <div className="callout">
        <h4>Situated Participation</h4>
        <p className="case-body-sm">
          How different groups access and interpret the intervention.
        </p>
      </div>

      <h2>Relevance to Ongoing Research</h2>

      <p>
        The Air We Share establishes a line of inquiry into how design aesthetics can influence awareness and behavior in environmental contexts.
      </p>
      <p>
        This connects directly to research on rebound effects in smart systems, where increased efficiency often reduces users&apos; awareness of consumption. The project suggests that alternative design approaches — particularly those engaging uncertainty, sensory experience, and attention — may counteract this effect by making environmental consequences perceptible again.
      </p>
      <p>
        The Dome, in particular, functioned as a deliberately unstable environment: air quality conditions shifted without explicit signalling, and participants&apos; bodily responses preceded cognitive interpretation. Rather than delivering information, the system displaced it — creating a situation in which meaning emerged through the interaction between body, environment, and attention.
      </p>
      <p>
        This suggests an alternative design approach: instead of reducing uncertainty to improve usability, systems can be designed to sustain perceptual openness, allowing users to remain engaged with changing conditions rather than resolving them. In this sense, the project operationalizes uncertainty not as a limitation to overcome, but as an aesthetic and epistemic resource — where meaning unfolds through embodied interaction rather than being predetermined by the designer.
      </p>
      <p>
        Rather than optimizing for efficiency or convenience, this work explores how design can reintroduce awareness into everyday interactions with environmental systems.
      </p>

      <CaseImage
        src="/images/cases/air-spaces/dome-inside-projection.webp"
        alt="Person sitting inside the completed dome watching environmental projection"
        width={1200} height={600}
      />

    </CaseLayout>
  )
}
