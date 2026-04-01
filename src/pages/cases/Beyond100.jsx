import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

export default function Beyond100() {
  return (
    <CaseLayout
      title="Beyond 100%"
      subtitle="What happens when planetary sustainability requires a system that decides what the body is allowed to do?"
      tags={['Speculative Design', 'Research through Design', 'Biodesign', 'Exhibited at MoMA']}
      meta={[
        { label: 'Context', value: 'Parsons School of Design, MFA Transdisciplinary Design' },
        { label: 'Role', value: 'Design Researcher, Speculative Designer, Biodesign Researcher' },
        { label: 'Duration', value: 'Feb – Jun 2018' },
        { label: 'Presented at', value: '2018 BioDesign Challenge Summit at MoMA' },
        { label: 'Exhibited at', value: 'Biodesign: From Inspiration to Integration, The Nature Lab, RISD' },
        { label: 'Team', value: 'Tung Lin, Jacky Cheong, Siho Chang' },
      ]}
      nextCase={{ to: '/cases/luxury-vip-app', title: "The Camera Roll as Wardrobe: Research for a Luxury Fashion Distributor's First Mobile App" }}
    >
      <FadeIn>
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/275305741?h=&title=0&byline=0&portrait=0"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Beyond 100% — Project Film"
          />
        </div>
      </FadeIn>

      <FadeIn>
        <p>
          I designed a speculative biotechnology that uses a chip to genetically modify
          what the human body can eat — hay, algae, fungi, insects — and how its nutrition
          is distributed across a global network. Set in 2070, the fiction proposes a world
          where a food shortage crisis has made bodily modification a condition of citizenship.
          The design question was not whether such a system could work, but what it would
          demand of the people living inside it — and whose bodies would bear the cost.
        </p>
      </FadeIn>

      <FadeIn>
        <figure className="case-img">
          {/* TODO: Add srcSet when 2x version of image is available */}
          <img src="/images/cases/beyond-sprouts.jpg" alt="Hands touching and examining plant material — hay, sprouts, dried leaves" width="1844" height="763" loading="lazy" />
        </figure>
      </FadeIn>

      <FadeIn>
        <div className="pullquote">
          <span className="pullquote-label">From the system&apos;s own mandate:</span>
          {' '}For all mankind&apos;s survival, any citizen who intakes above 100% of the recommended
          amount should share with others who are undernourished. 30% of excess nutrition is taxed
          to the global network, which redistributes nutrition to the poor people in the region,
          and generates energy for the city.
        </div>
      </FadeIn>

      <FadeIn>
        <p>
          Through this speculative design, I tested a premise: that technological control of
          the body becomes acceptable when framed as collective survival. The design process
          revealed something different. Every system component — the allocation map, the chip,
          the surveillance required to enforce the nutrition tax — contained a political choice.
          My work was to make that choice visible.
        </p>
      </FadeIn>

      <FadeIn>
        <h3>Research Foundation</h3>
      </FadeIn>

      <FadeIn>
        <p>
          The project emerged from research into speculative design as a method for revealing
          hidden assumptions. Rather than analyzing governance systems theoretically, I decided
          to <em>design one</em> — to see what would become visible through the act of building.
          Speculative design, in this sense, is not a way to illustrate existing analysis; it is a form
          of knowledge production, where the artifacts themselves are the research apparatus.
        </p>
        <p>
          Working within Parsons&apos; Transdisciplinary Design program, I drew on bioethics literature,
          historical scarcity responses (rationing systems, population control policies), and the
          strategies of contemporary design speculation — but the real research happened when the team
          started making. The act of designing forced me to commit to specifics: who gets modified,
          who decides the threshold, who enforces compliance. Every detail I had to resolve surfaced
          a political choice I hadn&apos;t anticipated.
        </p>
        <p>
          The Allocation Map and Chip were hand-fabricated and 3D printed — physical objects, not
          renderings. The making process is documented in the film above. Building the Chip as an
          actual object that could be held, examined, and reacted to changed what the project was
          asking: it stopped being a speculative scenario and became a material proposition. What
          would a device that enters your body feel like to hold in your hand — before it enters?
          That question only became available through making.
        </p>
        <p>
          I should name where my interest came from. I arrived at this project through philosophy training at National Taiwan University, not through personal experience with food scarcity or bodily modification. My background in ethics gave me a framework for asking questions about autonomy, consent, and collective obligation &mdash; but it also meant I was designing a system whose material consequences I had never faced. I was speculating about bodies under constraint from a position of relative security. That distance let me treat the system as an intellectual object &mdash; to ask what it would demand &mdash; but it also meant I could not fully anticipate what it would feel like to live inside it. The design reveals political choices; whether it captures the lived weight of those choices is a question the method alone cannot answer.
        </p>
        <p>
          This matters for how the project should be read. Speculative design trades on the power of estrangement — making familiar systems strange enough to see clearly. But estrangement works differently depending on where you stand. For someone who has never faced food scarcity, designing a system of enforced bodily modification is an intellectual provocation. For someone who has, it may land as something closer to documentation. I was aware of this asymmetry during the making process, but I did not resolve it — and I am not sure speculative design, as a method, can. What it can do is make the asymmetry visible: to show that the system&apos;s consequences fall unevenly, and to make that unevenness impossible to ignore. That is what the artifacts tried to do. Whether they succeeded depends on who is looking.
        </p>
      </FadeIn>

      <FadeIn>
        <p>
          My assumption going in was straightforward: in a resource crisis, people would accept necessary
          constraints on bodily autonomy if the system was perceived as fair and technologically inevitable.
          What the design process revealed was more complicated. The more I detailed the system — the rules
          of the Allocation Map, the invasiveness of the Chip, the surveillance required to enforce the
          nutrition tax — the more the artifacts themselves began arguing against the system&apos;s logic.
        </p>
        <p>
          The design didn&apos;t demonstrate technological inevitability. It exposed choice. When I
          tried to visually map the extraction mechanism, for instance, every representation looked
          extractive — there was no way to draw it that didn&apos;t surface the asymmetry between those
          whose bodies are harvested and those who benefit. The artifacts made visible who benefits
          from framing that choice as inevitable.
        </p>
      </FadeIn>

      <FadeIn>
        <h2>Design as Research: What the Artifacts Revealed</h2>
      </FadeIn>

      <FadeIn>
        <figure className="case-img">
          {/* TODO: Add srcSet when 2x version of image is available */}
          <img src="/images/cases/beyond-allocation-map.jpg" alt="Allocation Map — speculative world map with ecological zones instead of national boundaries" width="800" height="400" loading="lazy" />
          <figcaption>Allocation Map</figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <div className="callout">
          <h4>Allocation Map: What It Revealed</h4>
          <p className="case-body-sm">
            Through designing the Allocation Map, I discovered that every attempt to make
            resource distribution "fair" required erasing existing political structures. The map
            replaced nation-states with ecological zones — a seemingly rational solution that,
            once visualized, raised an uncomfortable question: who has the authority to redraw
            the world? The map also revealed a hidden logic: mandating what bodies eat based on
            geography is a form of governance through biology. The design process showed that you
            cannot solve a political problem with a technological solution without disguising
            the political choice as natural inevitability.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <figure className="case-img">
          {/* TODO: Add srcSet when 2x version of image is available */}
          <img src="/images/cases/beyond-chip.jpg" alt="The Chip — biotech device inserted into a person's wrist" width="830" height="400" loading="lazy" />
          <figcaption>Chip</figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <div className="callout">
          <h4>Chip: What It Revealed</h4>
          <p className="case-body-sm">
            The Chip is the project&apos;s central object of control. Through designing and visualizing
            it, I discovered that the most intimate intervention — a device that modifies the body itself —
            becomes acceptable only when it is presented as medically neutral and individually beneficial.
            Each design iteration pushed back against my assumptions &mdash; the artifact itself became a
            research instrument, revealing what I had not anticipated about the logic of bodily control.
            The chip transforms the body to match ecological resource availability. It makes the body
            legible to the system. And it renders bodily difference — the fact that after the modification,
            a person can no longer eat as they once did — as a technical requirement rather than a loss
            or violation.
          </p>
          <p className="case-body-sm case-body-sm--spaced">
            What made the design powerful was making the redistribution mechanism visible: the chip
            extracts "excess" nutrition directly from the bloodstream and transmits it to others. This
            mechanism revealed the project&apos;s hidden premise — that the state has the right to harvest
            human bodies for collective benefit. By rendering the extraction as a designed, technical process,
            the design made the ethical violation tangible in a way that policy documents cannot.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <p>
          This project explores the tension between collectivism and individual autonomy under
          the pressure of survival. But there is a subtler insight buried in the chip&apos;s design:
          once a system becomes the body&apos;s new normal, the extraction becomes routine. The
          political choice becomes invisible — not because it was hidden, but because the body
          adapted to it.
        </p>
        <p>
          Shortly after the team completed the project, the pandemic arrived — and I
          watched governments worldwide respond with vastly different control measures, each
          justified by survival. Lockdowns, movement restrictions, and bodily mandates were
          normalized through repetition. What COVID made visible is what Beyond 100% had asked
          as fiction: that survival constraints do not produce uniform choices, and that in every
          version of control, some bodies — marked by class, geography, or care responsibilities
          — bear more than others. The question was never whether biotechnology can save us. The
          question is what we are willing to give up, whose bodies absorb the cost, and who gets
          to decide.
        </p>
      </FadeIn>

      <FadeIn>
        <h3>Why This Matters: Connection to Current Research</h3>
      </FadeIn>

      <FadeIn>
        <p>
          Beyond 100% was my first sustained exploration of how design can make political choices
          visible — specifically, choices about whose bodies matter and who has the authority to decide
          what happens to them. This is fundamentally a feminist concern: which bodies bear
          the material cost of systems that claim to serve the collective? I was asking: what does it mean to design a system that appears neutral,
          rational, or inevitable, when it is actually embedding particular values about life, death,
          autonomy, and collective care? In sustainability research, this pattern has a name: rebound effect &mdash; when a system designed to solve one problem generates new, often worse, consequences. Beyond 100% asked what that pattern looks like when it reaches the body.
        </p>
        <p>
          This question resurfaces in everything that followed. In
          platform research, I found that applications made demands on users&apos; attention, emotional labor,
          and data — but presented these demands as features, customizations, or universal necessities.
          In studies of urban infrastructure, I discovered that ostensibly &quot;objective&quot; systems (traffic
          flows, park design, accessibility standards) encode particular assumptions about who belongs,
          who moves freely, and whose needs matter most. Beyond 100% taught me that this is not a
          problem to solve with &quot;better design.&quot; It is a problem to make visible — to show that
          systems never affect all bodies equally, and to render the choice explicit so that
          different cultures, values, and communities can actually decide differently.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="case-divider">
          <p className="case-reflection">
            Beyond 100% asked what we are willing to surrender to a technological system —
            and who decides what the body is allowed to do. That question stayed. In the
            applied research that followed, I kept finding a quieter version of it: what does
            this platform ask of its users? What does it require them to accept, adapt to, or
            absorb — without ever making that demand visible? The ethical tension between
            bodies and technology turned out not to be a speculative concern. It was in every
            fieldwork session.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="case-footer-note">
          <p>
            <strong>Role:</strong> Design Researcher, Screenwriter, Visual Storyteller<br />
            <strong>Instructor:</strong> Jane Pirone, Jenifer Wightman, Heather Dewey-Hagborg<br />
            <strong>Special Thanks:</strong> MoMA, BioDesign Challenge, Parsons School of Design, The Nature Lab, Rhode Island School of Design, KUAN Ko-Hung, Tien-Chun LO, Ming-Hung LEE
          </p>
        </div>
      </FadeIn>
    </CaseLayout>
  )
}
