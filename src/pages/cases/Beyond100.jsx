import CaseLayout from '../../components/CaseLayout'

export default function Beyond100() {
  return (
    <CaseLayout
      dimension="Systems shape"
      title="Beyond 100%"
      subtitle="What happens when planetary sustainability requires a system that decides what the body is allowed to do?"
      meta={[
        { label: 'Context', value: 'Parsons School of Design, MFA Transdisciplinary Design' },
        { label: 'Role', value: 'Design Researcher, Speculative Designer, Biodesign Researcher' },
        { label: 'Duration', value: 'Feb – Jun 2018' },
        { label: 'Presented at', value: '2018 BioDesign Challenge Summit at MoMA' },
        { label: 'Exhibited at', value: 'Biodesign: From Inspiration to Integration, The Nature Lab, RISD' },
        { label: 'Team', value: 'Sylvia Lin, Jacky Cheong, Siho Chang' },
      ]}
    >
      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/275305741?h=&title=0&byline=0&portrait=0"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Beyond 100% — Project Film"
        />
      </div>

      <p>
        Beyond 100% is a speculative biotechnology system that proposes a future (2070) in which food scarcity has made bodily modification a condition of citizenship. A bio-integrated chip enables the human body to process alternative food sources — such as algae, fungi, and insects — while redistributing excess nutrition through a global network.
      </p>
      <p>
        The project does not ask whether such a system is technologically feasible. Instead, it examines what such a system would require of the people living within it — and whose bodies would bear its cost.
      </p>

      <figure className="case-img">
        <img src="/images/cases/beyond-sprouts.webp" alt="Hands touching and examining plant material — hay, sprouts, dried leaves" width="1844" height="763" loading="lazy" />
      </figure>

      <h2>Research Framing</h2>

      <div className="callout">
        <h4>Research Question</h4>
        <p className="case-body-sm">
          How do technological systems, when framed as necessary for collective survival, reconfigure bodily autonomy and redistribute costs across populations?
        </p>
      </div>

      <div className="callout">
        <h4>Method</h4>
        <p className="case-body-sm">
          Speculative design as material inquiry. The project develops physical artifacts — including an Allocation Map and an implantable Chip — to surface the implicit political and ethical assumptions embedded in systemic design decisions.
        </p>
      </div>

      <div className="callout">
        <h4>Contribution</h4>
        <p className="case-body-sm">
          The project demonstrates that: (1) Technological systems often obscure political choices by presenting them as biological or ecological necessity. (2) Redistribution mechanisms framed as &quot;fair&quot; inevitably produce asymmetric bodily burdens. (3) Materializing speculative systems (through making) reveals ethical tensions that remain abstract in policy or theory.
        </p>
      </div>

      <h2>System Logic</h2>

      <div className="pullquote">
        <span className="pullquote-label">From the system&apos;s own mandate:</span>
        {' '}For all mankind&apos;s survival, any citizen who intakes above 100% of the recommended
        amount should share with others who are undernourished. 30% of excess nutrition is taxed
        to the global network, which redistributes nutrition to the poor people in the region,
        and generates energy for the city.
      </div>

      <p>
        The system operates under a global mandate: individuals consuming above their nutritional requirement must contribute 30% of their excess to a shared network. This network redistributes nutrients to undernourished populations and converts surplus into energy.
      </p>
      <p>
        This logic positions the human body as both a site of adaptation and extraction — optimized for ecological efficiency while embedded in a system of continuous monitoring and redistribution. In doing so, it shifts the burden of sustaining the system onto bodies that cannot easily refuse participation.
      </p>

      <h2>What the Artifacts Revealed</h2>

      <figure className="case-img">
        <img src="/images/cases/beyond-allocation-map.webp" alt="Allocation Map — speculative world map with ecological zones instead of national boundaries" width="800" height="400" loading="lazy" />
        <figcaption>Allocation Map</figcaption>
      </figure>

      <div className="callout">
        <h4>Allocation Map</h4>
        <p className="case-body-sm">
          Designing the Allocation Map required redefining the world according to ecological zones rather than national borders. While this appeared as a rational solution to resource distribution, it revealed an underlying political condition: such a system requires the authority to overwrite existing geopolitical structures.
        </p>
        <p className="case-body-sm case-body-sm--spaced">
          The map also exposed a form of governance through biology — where what bodies consume is determined by geography, rendering political decisions as environmental inevitabilities.
        </p>
      </div>

      <figure className="case-img">
        <img src="/images/cases/beyond-chip.webp" alt="The Chip — biotech device inserted into a person's wrist" width="830" height="400" loading="lazy" />
        <figcaption>Chip</figcaption>
      </figure>

      <div className="callout">
        <h4>The Chip</h4>
        <p className="case-body-sm">
          The Chip is the system&apos;s central mechanism of control. It modifies the body&apos;s metabolic capabilities and enables the extraction of excess nutrients directly from the bloodstream.
        </p>
        <p className="case-body-sm case-body-sm--spaced">
          Through iterative design, the Chip revealed that intimate bodily interventions become acceptable when framed as medically neutral and collectively beneficial. At the same time, it made visible the project&apos;s underlying premise: that the body can be treated as a resource to be regulated and harvested.
        </p>
        <p className="case-body-sm case-body-sm--spaced">
          To make the system&apos;s logic graspable at the exhibition, we moved beyond the Chip as concept and built a parallel artifact — one visitors could hold. We vacuum-sealed hay and dried insects with printed nutrition labels, sized as travel snacks: the kind of thing you would carry instead of bread or chips. The packaging was deliberately familiar; the contents were not. Visitors picked them up, read the labels, and hesitated. That hesitation — the body resisting what the system presented as rational, economical, inevitable — was the research finding. It revealed that efficiency-driven food systems do not fail at the level of logic; they fail at the level of embodied acceptance. The artifact did not explain the system; it made the body&apos;s resistance to it visible.
        </p>
      </div>

      <h2>Positionality and Reflection</h2>

      <p>
        This project was shaped by an initial assumption: that under conditions of scarcity, systems of surveillance and bodily regulation might be accepted as necessary for collective survival.
      </p>
      <p>
        This assumption became a point of inquiry. Through the design process — and later, through observing divergent governmental responses during the COVID-19 pandemic — the project revealed the limits of a survival-centric framework. What is considered &quot;necessary&quot; is not universal, but shaped by political, cultural, and historical context.
      </p>
      <p>
        Rather than demonstrating technological inevitability, the project exposes that such systems are contingent choices — and that their consequences are unevenly distributed across different bodies.
      </p>

      <h2>Evaluation</h2>

      <p>
        If extended as a PhD research project, this work would be evaluated through a combination of scenario-based studies, critical response analysis, and system-level modeling.
      </p>

      <div className="callout">
        <h4>Perceived Legitimacy</h4>
        <p className="case-body-sm">
          How different system configurations influence acceptance of bodily intervention and redistribution.
        </p>
      </div>

      <div className="callout">
        <h4>Ethical Recognition</h4>
        <p className="case-body-sm">
          Whether participants identify asymmetries in how costs and benefits are distributed.
        </p>
      </div>

      <div className="callout">
        <h4>Systemic Implications</h4>
        <p className="case-body-sm">
          How alternative allocation rules produce different patterns of inequality or extraction.
        </p>
      </div>

      <h2>Relevance to Ongoing Research</h2>

      <p>
        Beyond 100% establishes a research direction concerned with how systems — technological, infrastructural, or digital — distribute costs unevenly while presenting themselves as neutral or necessary.
      </p>
      <p>
        This inquiry extends to: platform systems that extract attention and data while framing them as user benefits; urban infrastructures that encode assumptions about mobility, access, and belonging; and sustainability systems that shift environmental costs onto specific populations.
      </p>
      <p>
        The project positions design not as a tool for solving these systems, but as a method for making their underlying choices visible.
      </p>

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

      <div className="case-footer-note">
        <p>
          <strong>Role:</strong> Design Researcher, Screenwriter, Visual Storyteller<br />
          <strong>Instructor:</strong> Jane Pirone, Jenifer Wightman, Heather Dewey-Hagborg<br />
          <strong>Special Thanks:</strong> MoMA, BioDesign Challenge, Parsons School of Design, The Nature Lab, Rhode Island School of Design, KUAN Ko-Hung, Tien-Chun LO, Ming-Hung LEE
        </p>
      </div>
    </CaseLayout>
  )
}
