import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

// ── Wardrobe concept illustration ─────────────────────────────────
function WardrobeConceptSVG() {
  // Minimal garment silhouettes — dress, blazer, bag, trousers, coat, scarf
  const garments = [
    // slip dress
    <path key="g0" d="M12 4 L9 10 L7 28 L17 28 L15 10 Z M9 10 Q12 13 15 10" strokeWidth="0.9" fill="none"/>,
    // structured blazer
    <path key="g1" d="M10 4 L8 8 L7 28 L17 28 L16 8 L14 4 M10 4 Q12 7 14 4 M11 8 L11 16" strokeWidth="0.9" fill="none"/>,
    // handbag
    <g key="g2">
      <rect x="7" y="10" width="10" height="14" rx="1.5" strokeWidth="0.9" fill="none"/>
      <path d="M9 10 Q9 6 12 6 Q15 6 15 10" strokeWidth="0.9" fill="none"/>
    </g>,
    // wide-leg trousers
    <path key="g3" d="M9 4 L10 4 L12 28 M15 4 L14 4 L12 28 M9 4 L15 4 M9 10 L15 10" strokeWidth="0.9" fill="none"/>,
    // long coat
    <path key="g4" d="M9 3 L8 8 L7 30 L11 30 L12 16 L13 30 L17 30 L16 8 L15 3 M9 3 Q12 6 15 3 M10 8 L10 14" strokeWidth="0.9" fill="none"/>,
    // scarf / wrap
    <g key="g5">
      <path d="M8 10 Q12 6 16 10 Q16 20 12 24 Q8 20 8 10 Z" strokeWidth="0.9" fill="none"/>
      <path d="M10 14 Q12 11 14 14" strokeWidth="0.7" fill="none" opacity="0.5"/>
    </g>,
  ]

  const cols = 3
  const cellW = 42
  const cellH = 50
  const gridX = 72
  const gridY = 68
  const gold   = '#C9A96E'
  const cream  = '#F5EFE4'
  const dim    = 'rgba(245,239,228,0.35)'

  return (
    <svg
      viewBox="0 0 460 230"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '4px' }}
    >
      {/* Background */}
      <rect width="460" height="230" fill="#100F0D"/>

      {/* Subtle grid texture */}
      {[...Array(8)].map((_, i) => (
        <line key={`vg${i}`} x1={i*60} y1="0" x2={i*60} y2="230" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
      ))}
      {[...Array(5)].map((_, i) => (
        <line key={`hg${i}`} x1="0" y1={i*58} x2="460" y2={i*58} stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
      ))}

      {/* ── Phone frame ── */}
      <rect x="60" y="18" width="112" height="194" rx="10"
        fill="#1A1812" stroke={gold} strokeWidth="0.8" strokeOpacity="0.6"/>
      {/* Phone notch */}
      <rect x="95" y="22" width="42" height="5" rx="2.5" fill="#100F0D"/>

      {/* App header */}
      <text x="116" y="46" textAnchor="middle"
        fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600"
        letterSpacing="2" fill={gold} opacity="0.9">MY WARDROBE</text>
      <line x1="72" y1="52" x2="160" y2="52" stroke={gold} strokeWidth="0.4" strokeOpacity="0.35"/>

      {/* Garment grid */}
      {garments.map((g, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const x = gridX + col * cellW
        const y = gridY + row * cellH
        return (
          <g key={i} transform={`translate(${x}, ${y}) scale(1.1)`}>
            {/* Cell background */}
            <rect x="0" y="-2" width={cellW - 6} height={cellH - 6} rx="2"
              fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.14)" strokeWidth="0.5"/>
            {/* Garment silhouette, centered in cell */}
            <g transform={`translate(${(cellW - 6 - 24)/2}, 2)`}
               stroke={cream} strokeLinecap="round" strokeLinejoin="round" fill="none">
              {g}
            </g>
          </g>
        )
      })}

      {/* Tab bar */}
      <rect x="60" y="196" width="112" height="16" rx="0" fill="#141210"/>
      {['◉','⊹','◻','◎'].map((icon, i) => (
        <text key={i} x={74 + i * 27} y="207" textAnchor="middle"
          fontSize="6" fill={i === 0 ? gold : 'rgba(245,239,228,0.3)'} fontFamily="sans-serif">{icon}</text>
      ))}

      {/* ── Right side — annotation ── */}

      {/* SA conversation illustration */}
      <g transform="translate(212, 30)">
        {/* Thread lines */}
        <rect x="0" y="0" width="100" height="18" rx="9"
          fill="rgba(201,169,110,0.10)" stroke="rgba(201,169,110,0.20)" strokeWidth="0.6"/>
        <text x="50" y="12" textAnchor="middle"
          fontFamily="'Inter', sans-serif" fontSize="6" fill={cream} opacity="0.7">
          [photo] This one, can you hold it?
        </text>

        <rect x="8" y="26" width="80" height="18" rx="9"
          fill="rgba(245,239,228,0.05)" stroke="rgba(245,239,228,0.12)" strokeWidth="0.6"/>
        <text x="48" y="38" textAnchor="middle"
          fontFamily="'Inter', sans-serif" fontSize="6" fill={cream} opacity="0.5">
          Of course — and the navy from last season?
        </text>

        <rect x="0" y="52" width="108" height="18" rx="9"
          fill="rgba(201,169,110,0.10)" stroke="rgba(201,169,110,0.20)" strokeWidth="0.6"/>
        <text x="54" y="64" textAnchor="middle"
          fontFamily="'Inter', sans-serif" fontSize="6" fill={cream} opacity="0.7">
          Yes — I already have it in my album.
        </text>
      </g>

      {/* Connector arrow from phone to chat */}
      <path d="M173 90 Q193 90 210 62" stroke={gold} strokeWidth="0.7"
        strokeOpacity="0.4" strokeDasharray="3 3" fill="none"
        markerEnd="url(#arrow)"/>
      <defs>
        <marker id="arrow" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
          <path d="M0,0 L0,4 L4,2 Z" fill={gold} fillOpacity="0.5"/>
        </marker>
      </defs>

      {/* Key insight label */}
      <text x="212" y="106" fontFamily="'Inter', sans-serif" fontSize="7.5"
        fontWeight="600" fill={cream} opacity="0.85">The workaround that became the product.</text>

      <text x="212" y="121" fontFamily="'Inter', sans-serif" fontSize="6.5"
        fill={cream} opacity="0.45">Before any app existed, VIP clients had already</text>
      <text x="212" y="132" fontFamily="'Inter', sans-serif" fontSize="6.5"
        fill={cream} opacity="0.45">built their own digital wardrobes — one photo at a time.</text>

      {/* Brand tier bar */}
      <g transform="translate(212, 152)">
        <text x="0" y="10" fontFamily="'Inter', sans-serif" fontSize="5.5"
          letterSpacing="1.5" fill={gold} opacity="0.6">MEMBERSHIP TIERS</text>
        {[
          { label: 'Silver', w: 40 },
          { label: 'Gold',   w: 60 },
          { label: 'Diamond',w: 80 },
        ].map((t, i) => (
          <g key={i} transform={`translate(0, ${18 + i * 18})`}>
            <rect x="0" y="0" width={t.w} height="8" rx="4"
              fill="none" stroke={gold}
              strokeWidth={i === 2 ? 0.8 : 0.4}
              strokeOpacity={0.15 + i * 0.15}/>
            <rect x="0" y="0" width={t.w * (0.45 + i * 0.18)} height="8" rx="4"
              fill={gold} fillOpacity={0.08 + i * 0.08}/>
            <text x={t.w + 6} y="7" fontFamily="'Inter', sans-serif"
              fontSize="5.5" fill={cream} opacity="0.4">{t.label}</text>
          </g>
        ))}
      </g>
    </svg>
  )
}

export default function LuxuryVipApp() {
  return (
    <CaseLayout
      tags={['Luxury Retail', '0-to-1 Product', 'Mobile App']}
      title="The Camera Roll as Wardrobe: Research for a Luxury Fashion Distributor's First Mobile App"
      subtitle="A luxury fashion distributor with 30+ years in the market needed its first mobile app — and their most valuable clients were the hardest to reach. Research surfaced how high-net-worth clients actually manage their wardrobes and make purchase decisions, and turned those behaviours into a product strategy no brief had anticipated."
      meta={[
        { label: 'Industry', value: 'Luxury Fashion & Retail' },
        { label: 'Methods',  value: 'Contextual Inquiry · Usability Testing' },
        { label: 'Scope',    value: '0-to-1 · Full Lifecycle' },
        { label: 'Year',     value: '—' },
      ]}
      nextCase={{ to: '/cases/academic-platform', title: 'The Infrastructure Nobody Mapped: Research for Taiwan\'s National Health Data Gateway' }}
    >
      <FadeIn>
        <figure className="case-img" style={{ marginTop: 0 }}>
          <img src="/images/vip-wireframes.jpeg" alt="Wireframe and interaction design for VIP App" />
          <figcaption>Wireframes mapping the full App task flow — from brand discovery to membership management</figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>The Challenge</h2>
        <p>A leading luxury fashion distributor in Taiwan — representing multiple internationally acclaimed designer brands — decided to digitalise its VIP client services. The business operates with strictly tiered membership thresholds and purchasing cycles governed by biannual marquee events. Their clientele is high-net-worth, highly brand-loyal, and accustomed to white-glove, in-person service.</p>
        <p>The structural challenge was twofold: how do you design a digital product that preserves the exclusivity and privacy these clients expect — and how do you conduct meaningful research with people who, by nature and preference, don't want to be observed?</p>

        <div className="pullquote">
          "The most important insight wasn't in the brief. It was in the behaviour nobody had thought to ask about yet."
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Research Design</h2>
        <h3>Reaching the Unreachable</h3>
        <p>Standard research formats were ruled out from the start. In-person lab sessions, third-party platforms, and anything that felt clinical or transactional were non-starters for this audience. A <strong>remote contextual inquiry framework</strong> was built around a virtual observation room: participants were de-identified and given full privacy assurance, while internal stakeholders — brand managers, sales directors — observed in real time through a one-way mirror arrangement, routing questions through the moderator.</p>
        <p>This served a dual purpose: generating the qualitative depth the project needed, while converting business sceptics into research advocates. When a brand director watches a VIP client describe her frustrations in her own words, the case for product investment makes itself.</p>

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

        <h3>The North Star Insight</h3>
        <p>These clients had genuine fashion sensibility — they followed collections across seasons, tracked new arrivals with intent, and approached personal styling as a considered, ongoing practice. Shopping, for them, was not impulsive; it was curatorial. They maintained a mental model of their wardrobe, knew what was missing, and regularly consulted their sales associates not just for purchases but for styling advice and pairing suggestions.</p>
        <p>What the research surfaced was how that behaviour had migrated to their phones. Clients were photographing every piece in their wardrobe — systematically, one item at a time — organising these into albums, and sharing them with their SAs over messaging apps. The camera roll had become a working wardrobe archive: a reference point for what they owned, what they were considering, and how new arrivals might fit in.</p>
        <p>Nobody had designed this system. It had emerged from necessity — and it was the most honest signal of what the product needed to be. Turning that self-built archive into a structured, brand-integrated digital wardrobe became the product's <strong>North Star concept</strong>.</p>
      </FadeIn>

      <FadeIn>
        <figure className="case-img">
          <img src="/images/vip-ia.jpeg" alt="Information architecture and feature scope diagram" />
          <figcaption>Information architecture — mapping product scope and feature hierarchy across the App</figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>Experience Strategy</h2>
        <h3>Cross-Brand Curation</h3>
        <p>The distributor operates multiple brands, yet VIP clients tend to develop strong loyalty to one label. A core business objective was cross-brand exposure without disrupting the client's preferred aesthetic relationship. The information architecture was built around a multi-brand curation module — surfacing complementary brands through contextual relevance rather than generic browsing.</p>

        <h3>Progressive Disclosure for Membership</h3>
        <p>The membership system is complex: tiered spending thresholds, seasonal milestone events, evolving reward structures. A <strong>progressive disclosure strategy</strong> was applied — surfacing only the most relevant membership status and upcoming milestone prominently, with full tier detail accessible on demand. The goal was to make the system feel generous, not bureaucratic.</p>
      </FadeIn>

      <FadeIn>
        <figure className="case-img" style={{ background: '#100F0D', padding: '0', borderRadius: '6px', overflow: 'hidden' }}>
          <WardrobeConceptSVG />
          <figcaption style={{ background: '#100F0D', color: 'rgba(245,239,228,0.4)', paddingTop: '12px' }}>
            The behaviour behind the product — VIP clients had already built personal wardrobe archives via camera roll and messaging, long before a dedicated app existed
          </figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>Validation</h2>
        <p>Before development, usability testing was conducted with six participants across membership tiers — non-members, silver card, and diamond card holders — covering the full task flow with think-aloud protocol and a live online observation room for the client team.</p>
        <p>Core flows — registration, brand exploration, and appointment booking — all achieved 100% task completion. Membership-related features landed between 50–83%, surfacing specific interface decisions to address before launch: tab bar icon labelling, the naming convention for the wardrobe feature, and the depth of the membership entry point. These were refined in the iteration cycle that followed.</p>
        <p>By the end of testing, users were reaching for words like <em>clear</em>, <em>efficient</em>, and <em>easy to navigate</em> when asked to describe the experience. For a product serving an audience that expects simplicity as a baseline, that was the right signal to ship.</p>

        <h2>Reflection</h2>
        <p>This project demonstrated what research does at its best: it doesn't just inform design — it reframes the problem. The brief was about building features. The findings revealed that the product's real job was to make visible what these clients already knew about themselves.</p>
        <p>The most durable outcome wasn't the wireframes. It was the moment a brand director heard a VIP client describe her wardrobe in detail — and understood, for the first time, exactly what she needed the app to do.</p>

        <p className="nda-note">Client identity, brand names, and specific performance metrics have been anonymised per confidentiality agreement. Happy to discuss the full project in depth during a conversation.</p>
      </FadeIn>
    </CaseLayout>
  )
}
