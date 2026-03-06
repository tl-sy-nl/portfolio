import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

export default function LuxuryVipApp() {
  return (
    <CaseLayout
      tags={['Luxury Retail', '0-to-1 Product', 'Mobile App', 'Research Lead']}
      title="VIP App Experience for a Premium Fashion Distributor"
      subtitle="A luxury fashion agency with 30+ years in the market needed its first mobile app. I led the research and product design — building a privacy-first study framework for high-net-worth clients, uncovering a product north star insight, and delivering a cross-brand digital experience with usability validation."
      meta={[
        { label: 'Role', value: 'Research Lead & Product Designer' },
        { label: 'Industry', value: 'Luxury Fashion & Retail' },
        { label: 'Methods', value: 'Contextual Inquiry · Usability Testing' },
        { label: 'Scope', value: '0-to-1 · Full Lifecycle' },
      ]}
      nextCase={{ to: '/cases/design-strategy', title: 'Design Thinking & Foresight Programs' }}
    >
      <FadeIn>
        <figure className="case-img" style={{ marginTop: 0 }}>
          <img src="/images/vip-wireframes.jpeg" alt="Wireframe and interaction design for VIP App" />
          <figcaption>Wireframes mapping the full App task flow — from brand discovery to membership management</figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>The Challenge</h2>
        <p>A leading luxury fashion distributor in Taiwan — representing multiple internationally acclaimed designer brands for over 30 years — decided to digitalise its VIP client services. The business operates with strictly tiered membership thresholds and purchasing cycles governed by biannual marquee events. Their clientele is high-net-worth, highly brand-loyal, and accustomed to white-glove, in-person service.</p>
        <p>The challenge was structural: how do you design a digital product that preserves the exclusivity and privacy these clients expect, while also enabling cross-brand discovery and reducing operational burden on sales associates — starting from zero?</p>

        <div className="pullquote">
          "The highest-value insight wasn't in the feature list. It was in the behaviour no one had designed for yet."
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Research Design</h2>
        <h3>Designing for a Privacy-Sensitive Audience</h3>
        <p>Working with VIP clientele ruled out standard research formats. These are individuals who expect discretion — in-person lab sessions or third-party platforms were non-starters. I designed a <strong>remote contextual inquiry framework</strong> structured as a virtual observation room: participants were de-identified and given full privacy assurance, while internal stakeholders — brand managers, sales directors — observed in real time and posed questions through me as moderator.</p>
        <p>This served a dual purpose: generating the qualitative depth we needed while converting business sceptics into research advocates. When a brand director watches a VIP client describe their frustrations directly, the case for product investment becomes self-evident.</p>

        <div className="callout">
          <h4>Research Methods</h4>
          <ul>
            <li>Remote contextual inquiry with de-identified virtual observation room</li>
            <li>In-depth interviews with VIP clients across the highest membership tiers</li>
            <li>Contextual interviews with sales associates and brand managers</li>
            <li>Competitive analysis across luxury digital retail platforms</li>
            <li>End-to-end usability testing of the full App task flow</li>
          </ul>
        </div>

        <h3>Uncovering the North Star Insight</h3>
        <p>Beyond validating existing feature assumptions, the research surfaced a critical emergent behaviour: clients were photographing every item in their wardrobe one by one and sharing these images with sales associates via messaging apps — to discuss styling, request holds on new arrivals, and coordinate purchases. They had manually built a "digital wardrobe" through ad-hoc photo albums, entirely outside any official channel.</p>
        <p>This insight — turning a physical wardrobe into a structured digital record, extended with styling inspiration and purchase history — became the product's <strong>North Star concept</strong>.</p>
      </FadeIn>

      <FadeIn>
        <figure className="case-img">
          <img src="/images/vip-ia.jpeg" alt="Information architecture and feature scope diagram" />
          <figcaption>Information architecture — mapping product scope and feature hierarchy across the App</figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>Experience Strategy &amp; Design</h2>
        <h3>Cross-Brand Curation</h3>
        <p>The distributor operates multiple brands, yet VIP clients tend to develop strong loyalty to one label. A core business objective was cross-brand exposure without disrupting the client's preferred aesthetic relationship. I designed a multi-brand curation module within the information architecture — surfacing complementary brands through contextual relevance rather than generic browsing.</p>

        <h3>Progressive Disclosure for Membership</h3>
        <p>The membership system is complex: tiered spending thresholds, seasonal milestone events, evolving reward structures. I applied a <strong>progressive disclosure strategy</strong> — surfacing only the most relevant membership status and upcoming milestone prominently, with full tier detail accessible on demand.</p>
      </FadeIn>

      <FadeIn>
        <figure className="case-img">
          <img src="/images/vip-process.jpeg" alt="Design and delivery process phases" />
          <figcaption>Phase 2 — design, iteration, and handoff process across the project lifecycle</figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>Validation &amp; Outcomes</h2>
        <p>Before development, I led comprehensive usability testing across the full task flow — covering icon comprehension, navigation patterns, in-app copy, and feature discoverability.</p>

        <div className="callout">
          <h4>Results</h4>
          <ul>
            <li>Task completion rates met product launch standards across all primary user flows</li>
            <li>First-time usability validated — users completed key tasks without guidance</li>
            <li>"Digital wardrobe" concept adopted into the product roadmap as a strategic differentiator</li>
            <li>Virtual observation room format created lasting organisational empathy for VIP user needs</li>
            <li>Cross-brand curation module informed subsequent product releases and brand strategy</li>
          </ul>
        </div>

        <h2>Reflection</h2>
        <p>This project confirmed what I believe about research at its best: it isn't just about informing design decisions — it's about creating shared understanding across an organisation.</p>
        <p>The most powerful deliverable wasn't the wireframes or the usability report. It was the moment a brand director heard a VIP client's voice — and understood exactly why the product needed to exist.</p>

        <p className="nda-note">Client identity, brand names, and specific performance metrics have been anonymised per confidentiality agreement. I am happy to discuss the full project in depth during a conversation.</p>
      </FadeIn>
    </CaseLayout>
  )
}
