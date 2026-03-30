import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

// ── App task flow diagram ──────────────────────────────────────────
function AppFlowSVG() {
  const gold = '#C9A96E', cream = '#F5EFE4', bg = '#100F0D', panel = '#1A1812'
  const phones = [
    { x: 28,  tabActive: 0, label: 'Discovery',    screenLabel: 'BRANDS' },
    { x: 168, tabActive: 1, label: 'New Arrival',  screenLabel: 'ARRIVALS' },
    { x: 308, tabActive: 2, label: 'Wardrobe',     screenLabel: 'MY WARDROBE' },
    { x: 448, tabActive: 3, label: 'Membership',   screenLabel: 'MEMBERSHIP' },
  ]
  return (
    <svg viewBox="0 0 590 196" xmlns="http://www.w3.org/2000/svg" className="svg-responsive">
      <rect width="590" height="196" fill={bg}/>
      {/* Flow label */}
      <text x="295" y="13" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="2" fill={gold} opacity="0.45">APP TASK FLOW</text>

      {/* Arrows between phones */}
      {[113, 253, 393].map(x => (
        <path key={x} d={`M${x} 98 L${x+43} 98`} stroke={gold} strokeWidth="0.7" strokeOpacity="0.35" markerEnd="url(#arw)"/>
      ))}
      <defs>
        <marker id="arw" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 Z" fill={gold} fillOpacity="0.35"/>
        </marker>
      </defs>

      {phones.map((ph, pi) => (
        <g key={pi}>
          {/* Phone frame */}
          <rect x={ph.x} y="22" width="82" height="142" rx="9" fill={panel} stroke={gold} strokeWidth="0.6" strokeOpacity="0.45"/>
          {/* Notch */}
          <rect x={ph.x+26} y="25" width="30" height="4" rx="2" fill={bg}/>
          {/* Header */}
          <text x={ph.x+41} y="41" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="5.2" fontWeight="700" letterSpacing="1.8" fill={gold} opacity="0.8">{ph.screenLabel}</text>
          <line x1={ph.x+4} y1="46" x2={ph.x+78} y2="46" stroke={gold} strokeWidth="0.3" strokeOpacity="0.25"/>

          {/* Screen content */}
          {pi === 0 && /* Brand list */
            ['VALENTINO','PRADA','BALENCIAGA','CELINE','LOEWE'].map((b,i) => (
              <g key={b} transform={`translate(${ph.x+4}, ${52+i*18})`}>
                <rect width="74" height="13" rx="2" fill={`rgba(201,169,110,${i===0?0.12:0.04})`} stroke={`rgba(201,169,110,${i===0?0.22:0.07})`} strokeWidth="0.4"/>
                <text x="37" y="9.5" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="4.8" letterSpacing="1" fill={cream} opacity={i===0?0.75:0.3}>{b}</text>
              </g>
            ))
          }
          {pi === 1 && /* Product card */ <>
            <rect x={ph.x+4} y="52" width="74" height="44" fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.10)" strokeWidth="0.4"/>
            <text x={ph.x+41} y="77" textAnchor="middle" fontFamily="serif" fontSize="16" fill={cream} opacity="0.10">✦</text>
            <rect x={ph.x+4} y="100" width="50" height="5" rx="2" fill="rgba(245,239,228,0.10)"/>
            <rect x={ph.x+4} y="109" width="36" height="4" rx="2" fill="rgba(245,239,228,0.06)"/>
            <rect x={ph.x+4} y="118" width="74" height="14" rx="2" fill="rgba(201,169,110,0.07)" stroke="rgba(201,169,110,0.18)" strokeWidth="0.4"/>
            <text x={ph.x+41} y="128" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="5" fill={gold} opacity="0.65">Save to Wardrobe</text>
          </>}
          {pi === 2 && /* Wardrobe grid */
            [0,1,2,3,4,5].map(i => (
              <rect key={i} x={ph.x+4+(i%2)*39} y={52+Math.floor(i/2)*32} width="35" height="28" rx="2"
                fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.11)" strokeWidth="0.4"/>
            ))
          }
          {pi === 3 && /* Membership tiers */ <>
            {[{l:'Silver',w:28,o:0.3},{l:'Gold',w:47,o:0.55},{l:'Diamond',w:68,o:0.88}].map((t,i) => (
              <g key={i} transform={`translate(${ph.x+4}, ${54+i*26})`}>
                <text x="0" y="8" fontFamily="Inter,sans-serif" fontSize="5" fill={cream} opacity="0.45" letterSpacing="0.3">{t.l}</text>
                <rect x="0" y="12" width="74" height="6" rx="3" fill="rgba(201,169,110,0.07)"/>
                <rect x="0" y="12" width={t.w} height="6" rx="3" fill={gold} opacity={t.o}/>
              </g>
            ))}
            <rect x={ph.x+4} y="136" width="74" height="18" rx="3" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.14)" strokeWidth="0.4"/>
            <text x={ph.x+41} y="145" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="4.8" fill={gold} opacity="0.55" letterSpacing="0.5">NEXT EVENT · SS25</text>
            <text x={ph.x+41} y="150" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="4.5" fill={cream} opacity="0.3">Feb 14</text>
          </>}

          {/* Tab bar */}
          <rect x={ph.x} y="150" width="82" height="14" fill="#141210"/>
          {['◉','⊹','◻','◎'].map((icon,i) => (
            <text key={i} x={ph.x+10+i*20} y="160" textAnchor="middle" fontSize="5.2" fill={i===ph.tabActive?gold:'rgba(245,239,228,0.18)'} fontFamily="sans-serif">{icon}</text>
          ))}
          {/* Label below phone */}
          <text x={ph.x+41} y="182" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="6" fill={gold} opacity="0.45" letterSpacing="0.3">{ph.label}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Information architecture diagram ──────────────────────────────
function AppIASVG() {
  const ink = '#0E1F24', ink3 = '#7A9AA3', accent = '#1A5C72', border = '#C8DEDE', bg = '#F0F5F5'
  const root = { x: 280, y: 32, w: 100, h: 30, label: 'VIP App' }
  const sections = [
    { x: 48,  label: 'Brands',     items: ['Discovery','New Arrivals','Collections','SA Chat'] },
    { x: 178, label: 'Wardrobe',   items: ['My Items','Wishlist','Lookbook'] },
    { x: 308, label: 'Membership', items: ['Tier Status','Milestones','Rewards'] },
    { x: 418, label: 'Profile',    items: ['Preferences','Appointments','Settings'] },
  ]
  const secY = 88, itemY = 160, nodeW = 100, nodeH = 26, itemH = 22
  return (
    <svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" className="svg-responsive">
      <rect width="580" height="250" fill={bg}/>

      {/* Root node */}
      <rect x={root.x} y={root.y} width={root.w} height={root.h} rx="5"
        fill={accent} stroke="none"/>
      <text x={root.x+root.w/2} y={root.y+19} textAnchor="middle"
        fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#fff">{root.label}</text>

      {sections.map((sec, si) => {
        const cx = sec.x + nodeW/2
        return (
          <g key={si}>
            {/* Trunk line root → section */}
            <line x1={root.x+root.w/2} y1={root.y+root.h} x2={cx} y2={secY}
              stroke={border} strokeWidth="1" strokeDasharray="3 3"/>
            {/* Section node */}
            <rect x={sec.x} y={secY} width={nodeW} height={nodeH} rx="4"
              fill="#fff" stroke={border} strokeWidth="1"/>
            <text x={cx} y={secY+17} textAnchor="middle"
              fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600" fill={ink} letterSpacing="0.3">{sec.label}</text>

            {/* Item nodes */}
            {sec.items.map((item, ii) => {
              const iw = 88
              const ix = sec.x + (nodeW - iw)/2
              const iy = itemY + ii * 26
              return (
                <g key={ii}>
                  <line x1={cx} y1={secY+nodeH} x2={cx} y2={iy}
                    stroke={border} strokeWidth="0.8" strokeDasharray="2 3"/>
                  <rect x={ix} y={iy} width={iw} height={itemH} rx="3"
                    fill="#fff" stroke={border} strokeWidth="0.8"/>
                  <text x={ix+iw/2} y={iy+14} textAnchor="middle"
                    fontFamily="Inter,sans-serif" fontSize="6.5" fill={ink3}>{item}</text>
                </g>
              )
            })}
          </g>
        )
      })}

      {/* Horizontal connector at section level */}
      <line x1={sections[0].x+nodeW/2} y1={secY+nodeH/2}
            x2={sections[sections.length-1].x+nodeW/2} y2={secY+nodeH/2}
        stroke={border} strokeWidth="0.8" strokeDasharray="3 3"/>

      <text x="290" y="244" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="6.5"
        fill={ink3} fontStyle="italic">Information architecture — four primary navigation sections</text>
    </svg>
  )
}

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
      className="svg-responsive"
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
      subtitle="How do you research people who don&apos;t want to be observed — and what happens when they show you they&apos;ve already built the product you were hired to design?"
      meta={[
        { label: 'Industry', value: 'Luxury Fashion & Retail' },
        { label: 'Role',     value: 'Research Lead — full lifecycle, discovery through concept validation' },
        { label: 'Methods',  value: 'Contextual Inquiry · Usability Testing' },
        { label: 'Scope',    value: '0-to-1 · Full Lifecycle' },
        { label: 'Year',     value: '2022' },
      ]}
      nextCase={{ to: '/cases/academic-platform', title: 'The Infrastructure Nobody Mapped: Research for Taiwan\'s National Health Data Gateway' }}
    >
      {/* ── IMPACT BAR ── */}
      <div className="case-impact-bar">
        <span className="case-impact-bar__label">Research Outcome</span>
        <p className="case-impact-bar__text">
          Contextual inquiry revealed that VIP clients had already built a personal wardrobe
          archive system inside their camera rolls — photographing, organising, sharing with
          sales associates over messaging apps. Nobody had designed this. Nobody had asked them
          to. That finding became the product&apos;s North Star and reframed the entire app strategy.
        </p>
      </div>

      <FadeIn>
        <figure className="case-img case-figure-dark">
          <AppFlowSVG />
          <figcaption>
            App task flow derived from contextual inquiry findings — the four-screen sequence mirrors the actual decision journey observed in VIP client interviews, from brand browsing to the wardrobe archive behaviour that became the product&apos;s North Star
          </figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>The Challenge</h2>
        <p>A leading luxury fashion distributor in Taiwan — representing multiple designer brands — needed to digitise VIP client services. The clientele is high-net-worth, brand-loyal, and accustomed to white-glove, in-person relationships. They know their sales associate by name. They expect to be remembered.</p>
        <p>The challenge was twofold: how do you create a digital experience that doesn&apos;t break the intimacy these clients expect from their relationship with the distributor — and how do you conduct meaningful research with people who, by instinct and preference, don&apos;t want to be observed?</p>

        <div className="pullquote">
          "The most important insight wasn't in the brief. It was in the behaviour nobody had thought to ask about yet."
        </div>
      </FadeIn>

      <FadeIn>
        <h2>Research Design</h2>
        <p className="case-body-sm">
          <strong>Scope:</strong> Contextual inquiry with 6 VIP clients across Silver, Gold,
          and Diamond membership tiers; internal stakeholder interviews with sales associates
          and brand managers; end-to-end usability testing with 6 participants
          (non-member · silver · diamond).
        </p>
        <h3>Reaching the Unreachable</h3>
        <p>Standard research formats were ruled out from the start. In-person lab sessions, third-party platforms, and anything that felt clinical or transactional were non-starters for this audience. A <strong>remote contextual inquiry framework</strong> was built around a virtual observation room: participants were de-identified and given full privacy assurance, while internal stakeholders — brand managers, sales directors — observed in real time through a one-way mirror arrangement, routing questions through the moderator.</p>
        <p>Remote contextual inquiry offered a methodological advantage beyond logistics. It allowed observation of participants in their natural context — home, their personal device, their actual wardrobe space — while maintaining the privacy guarantees this demographic required. Understanding behaviour where it actually happens, not in a lab, mattered here. The trade-off was a loss of in-person nonverbal cues and environmental detail, but for this audience, the privacy assurance was the condition we couldn&apos;t compromise on. Everything else was negotiable.</p>
        <p>This served a dual purpose: generating the qualitative depth the project needed, and creating moments where a brand director could hear a VIP client describe, in her own words, exactly what she needed. When that happens, the case for product investment makes itself.</p>
        <p>A thing worth naming: this research was only possible because the distributor already had these relationships. Clients participated because they trusted the brand, not because they trusted research. We had access because of institutional standing, not because we earned it in the room. That shaped everything — which questions felt safe to ask, whose voices we heard, and whose we didn&apos;t. We studied the clients the distributor most wanted to keep. We did not study the ones they had already lost, or never reached.</p>

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
        <p>We entered with an assumption: that VIP clients would be drawn to the distributor&apos;s brand portfolio and the exclusivity of member-only access. The research surfaced something different.</p>
        <p>These clients had genuine fashion sensibility. They followed collections across seasons. They tracked new arrivals with intent. Personal styling, for them, was not impulsive — it was curatorial. They maintained a mental model of their wardrobe, knew what was missing, and regularly consulted their sales associates not just for purchases but for pairing advice.</p>
        <p>But here&apos;s what we actually found: that behaviour had already migrated to their phones. Clients were photographing every piece in their wardrobe — systematically, one item at a time — organising these into albums, and sharing them with their SAs over messaging apps. The camera roll had become a working wardrobe archive.</p>
        <p>Nobody had designed this. Nobody had asked them to do it. It had emerged because nothing else existed — and it was the most honest signal of what the product actually needed to be. Not a shopping app with wardrobe features. A system built around what these clients were already doing, unprompted, on their own. That became the product&apos;s <strong>North Star</strong>.</p>
      </FadeIn>

      <FadeIn>
        <figure className="case-img case-figure-light">
          <AppIASVG />
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>Experience Strategy</h2>
        <h3>Cross-Brand Curation</h3>
        <p>The distributor operates multiple brands, yet VIP clients tend to develop strong loyalty to one label. A core business objective was cross-brand exposure without disrupting the client&apos;s preferred aesthetic relationship. The information architecture was built around a multi-brand curation module — surfacing complementary brands through contextual relevance rather than generic browsing.</p>

        <h3>Progressive Disclosure for Membership</h3>
        <p>The membership system is complex: tiered spending thresholds, seasonal milestone events, evolving reward structures. A <strong>progressive disclosure strategy</strong> was applied — surfacing only the most relevant membership status and upcoming milestone prominently, with full tier detail accessible on demand. The goal was to make the system feel generous, not bureaucratic.</p>
      </FadeIn>

      <FadeIn>
        <figure className="case-img case-figure-dark">
          <WardrobeConceptSVG />
          <figcaption>
            The emergent behaviour that redirected the entire product strategy — contextual inquiry revealed VIP clients had independently built wardrobe archives in their camera rolls and were sharing them with sales associates via messaging apps, a system no one had designed but everyone relied on
          </figcaption>
        </figure>
      </FadeIn>

      <FadeIn>
        <h2>Did the Product Match the Behaviour?</h2>
        <p>Before development, usability testing was conducted with six participants across membership tiers — non-members, silver card, and diamond card holders — covering the full task flow with think-aloud protocol and a live online observation room for the client team.</p>
        <p>Core flows — registration, brand exploration, and appointment booking — all achieved 100% task completion. Membership-related features landed between 50–83%, which told us something useful: users moved fluently through tasks that mirrored their existing behaviour (browsing, saving, consulting), but needed more time with concepts that required them to think about the membership system abstractly. The wardrobe felt natural. The tier system felt like something imposed. That distinction shaped the next iteration.</p>
        <p>By the end of testing, users were reaching for words like <em>clear</em>, <em>efficient</em>, and <em>easy to navigate</em>. For a product serving an audience that expects simplicity as a baseline, that was the right signal.</p>

        <h2>Reflection</h2>
        <p>The brief was about building features. The findings revealed that the product&apos;s real job was to make visible what these clients were already doing — and to do that clearly enough that a brand director could finally see it too.</p>
        <p>The most durable outcome wasn&apos;t the wireframes. It was the moment a brand director heard a VIP client describe her camera roll wardrobe in detail — and understood, for the first time, exactly what she needed the app to do. That moment changed what the business was willing to build.</p>
        <p>This project taught me that the most reliable product strategy isn&apos;t the one you invent. It&apos;s the one you discover was already there — in what people do when nobody&apos;s designed anything for them yet. The camera roll wardrobe was not a hack or a workaround. It was an emergent artifact — a system people built for themselves, precisely because no institution had built it for them. That pattern keeps appearing in every project since: people quietly making what they need when designed systems fail to notice.</p>
        <p>That instinct — start by observing what people have already made, and take it seriously as evidence of what they actually need — has become my primary research method. It is the same instinct I will bring to my PhD. Before proposing what children should be able to do in public space, I want to see what they are already doing: the routes they invent, the surfaces they claim, the spatial practices they improvise when no designer is watching. The camera roll wardrobe and a child&apos;s path through a park have nothing in common except this: both are knowledge made visible through action, and both disappear the moment an institution decides it knows better.</p>

        <h2>Limitations</h2>
        <p>We sampled from Diamond and Gold tier clients because they were the product&apos;s primary target. That was a business decision, and it was honest. But it means the camera roll insight came from the clients with the most institutional attention, the most SA relationships, the most familiarity with luxury retail.</p>
        <p>Silver-tier members — lower spend, often newer to the distributor — might have entirely different workarounds, different needs, different frustrations we never heard. The product we designed optimised for clients the distributor already valued most. Whether it serves the ones they haven&apos;t reached is a question the research can&apos;t answer.</p>
        <p>The privacy constraints of this context — de-identification, virtual observation, limited session flexibility — also shaped what we could see. We observed behaviour through screens. We didn&apos;t sit in anyone&apos;s closet. Some things about how people relate to their wardrobes, physically, spatially, emotionally, are only visible in person. Per confidentiality agreement, specific client details and brand names have not been disclosed.</p>
        <p>For my PhD, the context shifts entirely — from private luxury to public infrastructure, from adults with resources to children whose spatial options are decided by others. But the method stays: observe what people are already doing before proposing what they should do.</p>

        <p className="nda-note">Client identity, brand names, and specific performance metrics have been anonymised per confidentiality agreement. The research methodology, strategic insights, and design principles remain fully documented and available for discussion in detail. I&apos;m happy to explore the project in depth during a conversation.</p>
      </FadeIn>
    </CaseLayout>
  )
}
