import { motion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────
//  Case Card Illustrations — Ocean / Deep-water atmosphere
//  All share: dark ocean gradient · diffuse surface light · cool accents
// ─────────────────────────────────────────────────────────────────

const appear = (delay = 0, dur = 0.6) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: dur, delay },
})

const draw = (delay = 0, dur = 1.4) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration: dur, delay, ease: 'easeOut' },
})

// ── Shared: deep ocean background (reusable defs) ───────────────
function OceanBg({ id, topColor = '#093248', bottomColor = '#020C18' }) {
  return (
    <defs>
      <linearGradient id={`bg_${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor={topColor} />
        <stop offset="100%" stopColor={bottomColor} />
      </linearGradient>
      {/* Diffuse caustic light from the water surface above */}
      <radialGradient id={`light_${id}`} cx="50%" cy="-5%" r="75%">
        <stop offset="0%"   stopColor="#1A6080" stopOpacity="0.38" />
        <stop offset="60%"  stopColor="#082840" stopOpacity="0.10" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

// ── Shared: subtle particle field (underwater motes) ─────────────
function Particles({ n = 55, seed = 1, color = 'rgba(160,230,255,0.10)', w = 400, h = 220 }) {
  // deterministic positions via LCG
  let s = seed >>> 0
  const rand = () => { s = ((Math.imul(s, 1664525) + 1013904223) >>> 0); return s / 4294967296 }
  const pts = Array.from({ length: n }, () => ({ x: rand() * w, y: rand() * h, r: 0.5 + rand() * 1.2 }))
  return (
    <g>
      {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={color} />)}
    </g>
  )
}


// ── 1. Academic / Biomedical Gateway ──────────────────────────────
//    Looking up from depth: bioluminescent nodes, flowing spoke-currents
export function AcademicIllustration() {
  const glow     = 'rgba(100, 220, 210, 0.55)'
  const glowFaint= 'rgba(100, 220, 210, 0.18)'
  const dot      = '#6DD8CC'
  const coral    = '#E8644A'

  const hub  = { x: 200, y: 110 }
  const sats = [
    { x: 200, y: 44  },
    { x: 306, y: 77  },
    { x: 306, y: 143 },
    { x: 200, y: 176 },
    { x: 94,  y: 143 },
    { x: 94,  y: 77  },
  ]

  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <OceanBg id="acad" topColor="#082840" bottomColor="#020C18" />
      <rect width="400" height="220" fill="url(#bg_acad)" />
      <rect width="400" height="220" fill="url(#light_acad)" />
      <Particles n={60} seed={42} color="rgba(100,220,210,0.07)" />

      {/* Outer guide ring */}
      <motion.circle cx={hub.x} cy={hub.y} r="85"
        fill="none" stroke={glowFaint} strokeWidth="0.7" strokeDasharray="3 6"
        {...draw(0.3, 1.8)}
      />

      {/* Spoke lines — like underwater currents */}
      {sats.map((s, i) => (
        <motion.line key={i}
          x1={hub.x} y1={hub.y} x2={s.x} y2={s.y}
          stroke={glowFaint} strokeWidth="0.8"
          {...draw(0.5 + i * 0.08, 0.9)}
        />
      ))}

      {/* Satellite nodes */}
      {sats.map((s, i) => (
        <motion.g key={i} {...appear(0.6 + i * 0.1)}>
          <circle cx={s.x} cy={s.y} r="7"
            fill="rgba(100,220,210,0.06)" stroke={glowFaint} strokeWidth="0.8" />
          <circle cx={s.x} cy={s.y} r="2.8" fill={dot} opacity="0.65" />
        </motion.g>
      ))}

      {/* Travelling bioluminescent dots along spokes */}
      {sats.map((s, i) => (
        <motion.circle key={`td${i}`} r="2.5" fill={coral}
          animate={{
            cx: [s.x, hub.x],
            cy: [s.y, hub.y],
            opacity: [0, 0.95, 0.95, 0],
          }}
          transition={{
            duration: 1.9, delay: 2.2 + i * 0.42,
            repeat: Infinity, repeatDelay: 0.9,
            ease: 'easeInOut', times: [0, 0.12, 0.88, 1],
          }}
        />
      ))}

      {/* Central gateway */}
      <motion.circle cx={hub.x} cy={hub.y} r="26"
        fill="rgba(100,220,210,0.05)" stroke={glow} strokeWidth="1.2" strokeDasharray="4 4"
        {...draw(1.0, 1.4)}
      />
      <motion.circle cx={hub.x} cy={hub.y} r="15"
        fill="rgba(100,220,210,0.10)" stroke={dot} strokeWidth="1.8"
        {...draw(1.3, 0.8)}
      />
      <motion.text x={hub.x} y={hub.y + 4} textAnchor="middle"
        fontFamily="serif" fontSize="7" fontStyle="italic"
        fill={dot} opacity="0.80" {...appear(1.8)}>
        gateway
      </motion.text>

      <motion.text x="22" y="212" fontFamily="'Courier New', monospace"
        fontSize="5.5" fill="rgba(100,220,210,0.32)" {...appear(2.0)}>
        n = 50+ fragmented databases
      </motion.text>
    </svg>
  )
}


// ── 2. Digital Learning / Media Platform ──────────────────────────
//    Ocean depth layers: three current-lines, misalignment as turbulence
export function LearningIllustration() {
  const stream     = 'rgba(155, 228, 255, 0.72)'
  const streamSoft = 'rgba(155, 228, 255, 0.32)'
  const streamFaint= 'rgba(155, 228, 255, 0.10)'

  const wave1 = 'M 32,72  C 96,56  176,76  248,68  S 330,74  372,66'
  const wave2 = 'M 32,115 C 88,130 160,100 232,120 S 318,108 372,116'
  const wave3 = 'M 32,158 C 100,148 172,166 252,154 S 340,162 372,156'

  const dotXs  = [80, 152, 224, 296, 352]

  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <OceanBg id="learn" topColor="#072236" bottomColor="#020B16" />
      <rect width="400" height="220" fill="url(#bg_learn)" />
      <rect width="400" height="220" fill="url(#light_learn)" />
      <Particles n={55} seed={77} color="rgba(140,220,255,0.08)" />

      {/* Depth strata — very faint horizontal bands */}
      {[55, 100, 145, 192].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="400" y2={y}
          stroke="rgba(100,200,240,0.06)" strokeWidth="18"
        />
      ))}

      {/* Wave 1 — upper current */}
      <motion.path d={wave1} fill="none" stroke={stream} strokeWidth="1.8" strokeLinecap="round"
        {...draw(0.3, 1.8)} />

      {/* Wave 2 — mid current */}
      <motion.path d={wave2} fill="none" stroke={stream} strokeWidth="1.8" strokeLinecap="round"
        {...draw(0.6, 1.8)} />

      {/* Wave 3 — deep current */}
      <motion.path d={wave3} fill="none" stroke={stream} strokeWidth="1.8" strokeLinecap="round"
        {...draw(0.9, 1.8)} />

      {/* Observation nodes on each current */}
      {dotXs.map((x, i) => (
        <motion.g key={i} {...appear(1.6 + i * 0.1)}>
          <circle cx={x} cy={72  + (i % 2) * 5} r="3.5" fill={stream} opacity="0.60" />
          <circle cx={x} cy={115 + (i % 3) * 4} r="3.5" fill={stream} opacity="0.60" />
          <circle cx={x} cy={158 - (i % 2) * 4} r="3.5" fill={stream} opacity="0.60" />
        </motion.g>
      ))}

      {/* Vertical turbulence dashes — the misalignment gap */}
      {[108, 200, 292].map((x, i) => (
        <motion.line key={i}
          x1={x} y1={74} x2={x} y2={113}
          stroke={streamSoft} strokeWidth="0.8" strokeDasharray="2 3"
          {...draw(2.0 + i * 0.15, 0.5)}
        />
      ))}

      <motion.text x="22" y="212" fontFamily="serif" fontSize="7.5" fontStyle="italic"
        fill={streamSoft} {...appear(2.2)}>
        platform strategy ↔ user reality
      </motion.text>
    </svg>
  )
}


// ── 3. Arts Education / Performing Arts ───────────────────────────
//    Ripples in still water — concentric rings, orbital motion
export function ArtsIllustration() {
  const ring      = 'rgba(200, 240, 255, 0.28)'
  const ringFaint = 'rgba(200, 240, 255, 0.10)'
  const tick      = 'rgba(180, 230, 255, 0.16)'
  const coral     = '#E8644A'

  const cx = 200, cy = 112
  const radii = [88, 66, 46, 28, 13]

  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <OceanBg id="arts" topColor="#062438" bottomColor="#020E1C" />
      <rect width="400" height="220" fill="url(#bg_arts)" />
      <rect width="400" height="220" fill="url(#light_arts)" />
      <Particles n={50} seed={13} color="rgba(160,230,255,0.08)" />

      {/* Radial ripple marks */}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <motion.line key={i}
            x1={cx + 28 * Math.cos(rad)}  y1={cy + 28 * Math.sin(rad)}
            x2={cx + 95 * Math.cos(rad)}  y2={cy + 95 * Math.sin(rad)}
            stroke={tick} strokeWidth="0.6" strokeLinecap="round"
            {...appear(0.2 + i * 0.03, 0.4)}
          />
        )
      })}

      {/* Concentric ripple rings */}
      {radii.map((r, i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={r}
          fill="none"
          stroke={i === 0 ? ring : i < 3 ? 'rgba(200,240,255,0.22)' : ringFaint}
          strokeWidth={i === 0 ? 1.2 : 0.8}
          strokeDasharray={i === 0 ? 'none' : i % 2 === 0 ? '4 8' : 'none'}
          {...draw(0.4 + i * 0.22, 1.2)}
        />
      ))}

      {/* Centre — a single drop */}
      <motion.circle cx={cx} cy={cy} r="4.5"
        fill="rgba(180,240,255,0.55)" {...appear(1.6)} />

      {/* Orbiting coral dot — outer ring */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <motion.circle cx={cx} cy={cy - 88} r="5.5"
          fill={coral} opacity="0.90" {...appear(1.8)} />
        <motion.circle cx={cx} cy={cy - 88} r="9"
          fill="none" stroke={coral} strokeWidth="0.9" opacity="0.28" {...appear(1.8)} />
      </motion.g>

      {/* Slower counter-orbit — middle ring */}
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <motion.circle cx={cx} cy={cy - 66} r="3.2"
          fill="rgba(200,240,255,0.45)" {...appear(2.0)} />
      </motion.g>

      <motion.text x="316" y="200" fontFamily="serif" fontSize="7.5" fontStyle="italic"
        fill="rgba(180,230,255,0.30)" {...appear(2.4)} textAnchor="end">
        embodied ↔ digital
      </motion.text>
    </svg>
  )
}


// ── 4. Luxury VIP App ─────────────────────────────────────────────
//    Deep ocean night — gold on dark, phone frame, wardrobe grid
export function VIPIllustration() {
  const gold      = '#D4B896'
  const goldSoft  = 'rgba(212,184,150,0.50)'
  const goldFaint = 'rgba(212,184,150,0.10)'

  const garments = [
    'm4,3 l-2,5 l-1,16 h10 l-1,-16 z m-2,5 q3,2.5 5,0',
    'm2,3 l-1,3 l-1,16 h10 l-1,-16 l-1,-3 m-1,3 l1,7 m-1,-7 q2,2.5 3,0',
    'm2,8 h8 a1,1 0 0 1 1,1 v9 a1,1 0 0 1 -1,1 h-8 a1,1 0 0 1 -1,-1 v-9 a1,1 0 0 1 1,-1 z m2,-2 q0,-3 3,-3 q3,0 3,3',
    'm2,3 h8 m0,0 l1,18 h-4 l-1,-9 l-1,9 h-4 l1,-18',
    'm3,2 l-1,4 l-1,17 h4 l1,-9 l1,9 h4 l-1,-17 l-1,-4 m-1,4 l1,7 m-3,-11 q2,2.5 3,0',
    'm2,7 q4,-4 8,0 q2,6 0,10 q-4,4 -8,0 q-2,-6 0,-10 z m2,4 q2,-2.5 4,0',
  ]

  const cols = 3
  const cellW = 46, cellH = 52
  const phoneX = 102, phoneY = 18, phoneW = 148, phoneH = 186

  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <OceanBg id="vip" topColor="#06131E" bottomColor="#020A14" />
      <rect width="400" height="220" fill="url(#bg_vip)" />
      <rect width="400" height="220" fill="url(#light_vip)" />
      <Particles n={45} seed={88} color="rgba(212,184,150,0.06)" />

      {/* Phone outline */}
      <motion.rect x={phoneX} y={phoneY} width={phoneW} height={phoneH} rx="10"
        fill="rgba(12,26,40,0.85)" stroke={gold} strokeWidth="0.9" strokeOpacity="0.55"
        {...appear(0.2, 0.6)} />
      <rect x={phoneX + phoneW/2 - 18} y={phoneY + 4} width="36" height="5" rx="2.5" fill="#07121C" />

      {/* Header */}
      <motion.text x={phoneX + phoneW/2} y={phoneY + 24}
        textAnchor="middle" fontFamily="serif" fontSize="7" fontStyle="italic"
        fill={gold} opacity="0.85" {...appear(0.5)}>
        My Wardrobe
      </motion.text>
      <motion.line
        x1={phoneX + 16} y1={phoneY + 30}
        x2={phoneX + phoneW - 16} y2={phoneY + 30}
        stroke={gold} strokeWidth="0.4" strokeOpacity="0.28"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        style={{ transformOrigin: `${phoneX + phoneW/2}px ${phoneY + 30}px` }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />

      {/* Garment cells */}
      {garments.map((g, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const gx = phoneX + 16 + col * cellW
        const gy = phoneY + 38 + row * cellH
        return (
          <motion.g key={i} {...appear(0.7 + i * 0.12)}>
            <rect x={gx} y={gy} width={cellW - 8} height={cellH - 8} rx="3"
              fill={goldFaint} stroke={goldSoft} strokeWidth="0.5" />
            <g transform={`translate(${gx + (cellW-8)/2 - 6}, ${gy + 5})`}
               stroke={gold} strokeWidth="0.85" strokeLinecap="round"
               strokeLinejoin="round" fill="none" opacity="0.65">
              <path d={g} />
            </g>
          </motion.g>
        )
      })}

      {/* Insight quote */}
      <motion.text x="278" y="52" fontFamily="serif" fontSize="8" fontStyle="italic"
        fill={gold} opacity="0.75" {...appear(1.6)}>
        "I already have it
      </motion.text>
      <motion.text x="278" y="64" fontFamily="serif" fontSize="8" fontStyle="italic"
        fill={gold} opacity="0.75" {...appear(1.7)}>
        in my album."
      </motion.text>
      <motion.line x1="274" y1="68" x2="274" y2="48"
        stroke={goldSoft} strokeWidth="0.7"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        style={{ transformOrigin: '274px 68px' }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />

      {/* Brand tier dots */}
      {[0,1,2,3].map(i => (
        <motion.circle key={i} cx={290 + i * 22} cy={112} r={i === 1 ? 7 : 5}
          fill="none" stroke={gold} strokeWidth={i === 1 ? 0.9 : 0.5}
          strokeOpacity={0.18 + i * 0.09}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 1.8 + i * 0.1 }} />
      ))}
      <motion.text x="320" y="128" textAnchor="middle"
        fontFamily="'Courier New', monospace" fontSize="5.5"
        fill={goldSoft} {...appear(2.2)}>
        multi-brand
      </motion.text>

      {/* Tier bars */}
      <motion.g {...appear(2.0)}>
        {[{ label: 'Silver', w: 38, y: 152 }, { label: 'Gold', w: 56, y: 168 }, { label: 'Diamond', w: 74, y: 184 }].map((t, i) => (
          <g key={i}>
            <rect x={280} y={t.y} width={t.w} height="7" rx="3.5"
              fill={gold} fillOpacity={0.06 + i * 0.07}
              stroke={gold} strokeWidth="0.4" strokeOpacity={0.18 + i * 0.1} />
            <text x={280 + t.w + 6} y={t.y + 6}
              fontFamily="'Courier New', monospace" fontSize="5.5" fill={goldSoft}>{t.label}</text>
          </g>
        ))}
      </motion.g>

      {/* Tab bar */}
      <rect x={phoneX} y={phoneY + phoneH - 20} width={phoneW} height="20" fill="rgba(5,14,24,0.95)" />
      {['◉', '⊹', '◻', '◎'].map((ic, i) => (
        <text key={i} x={phoneX + 20 + i * 28} y={phoneY + phoneH - 6}
          textAnchor="middle" fontSize="6"
          fill={i === 0 ? gold : goldSoft} fontFamily="sans-serif">{ic}</text>
      ))}
    </svg>
  )
}

// Stubs
export function StrategyIllustration() {
  return <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }}><rect width="400" height="220" fill="#04111E" /></svg>
}
export function MobilityIllustration() {
  return <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }}><rect width="400" height="220" fill="#04111E" /></svg>
}
