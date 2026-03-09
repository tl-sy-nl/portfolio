import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'
import { motion } from 'framer-motion'

// ─────────────────────────────────────────────
// Shared style helpers
// ─────────────────────────────────────────────
const OCEAN   = '#1A5C72'
const MID     = '#2A7A94'
const BRIGHT  = '#3D9DB8'
const CORAL   = '#E07057'
const GLASS   = '#7EC8BE'
const BG_DARK = '#0D1F2B'
const BG_CARD = '#0F2A36'

// ─────────────────────────────────────────────
// DIAGRAM 1 — Four-Stage Research Methodology
// Larger text, taller cards
// ─────────────────────────────────────────────
function MethodologyDiagram() {
  const stages = [
    { num: '01', label: ['Internal', 'Stakeholder', 'Interviews'], sub: ['Product · Editorial', 'Business leads'],    color: OCEAN  },
    { num: '02', label: ['User', 'Interviews'],                    sub: ['HR admins', '& learners'],                  color: MID    },
    { num: '03', label: ['Research', 'Synthesis'],                 sub: ['Affinity clustering', 'Journey mapping'],   color: BRIGHT },
    { num: '04', label: ['Concept', 'Validation'],                 sub: ['Design direction', 'feedback rounds'],       color: CORAL  },
  ]
  return (
    <svg viewBox="0 0 760 190" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect width="760" height="190" fill={BG_CARD} rx="10" />
      {stages.map((s, i) => {
        const x = 36 + i * 178
        return (
          <g key={i}>
            {i < 3 && (
              <motion.line x1={x + 130} y1="95" x2={x + 178} y2="95"
                stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 3"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.3 }} />
            )}
            {i < 3 && (
              <motion.polygon points={`${x+175},91 ${x+183},95 ${x+175},99`}
                fill="rgba(255,255,255,0.22)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.3 }} />
            )}
            <motion.rect x={x} y="18" width="130" height="154" rx="7"
              fill={s.color} fillOpacity="0.16" stroke={s.color} strokeWidth="1"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.22 }} />
            <text x={x+11} y="46" fill={s.color} fontSize="22" fontWeight="700" fontFamily="serif" opacity="0.9">{s.num}</text>
            {s.label.map((line, li) => (
              <text key={li} x={x+11} y={68 + li*17} fill="rgba(255,255,255,0.92)" fontSize="13" fontWeight="600" fontFamily="sans-serif">{line}</text>
            ))}
            <line x1={x+11} y1="122" x2={x+119} y2="122" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
            {s.sub.map((line, li) => (
              <text key={li} x={x+11} y={136 + li*15} fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="sans-serif">{line}</text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

// ─────────────────────────────────────────────
// DIAGRAM 2 — Dual User Segment Map
// Larger text, more vertical space
// ─────────────────────────────────────────────
function DualSegmentDiagram() {
  const hrItems   = ['Assigns & organises course batches', 'Monitors completion & compliance', 'Generates reports for management', 'Evaluates platform ROI at renewal', 'Manages licences across departments']
  const lrnItems  = ['Receives assigned courses from HR', 'Browses content voluntarily', 'Learns in micro-sessions (6–12 min)', 'Tracks personal progress', 'Seeks practical application']
  return (
    <svg viewBox="0 0 760 270" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect width="760" height="270" fill={BG_DARK} rx="10" />
      {/* HR column */}
      <motion.rect x="24" y="18" width="330" height="232" rx="8" fill={OCEAN} fillOpacity="0.15" stroke={OCEAN} strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      <text x="44" y="48" fill={GLASS} fontSize="13" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">HR ADMINISTRATOR</text>
      <text x="44" y="66" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">Management backend · B2B buyer</text>
      {hrItems.map((item, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
          <circle cx="44" cy={88 + i * 29} r="3.5" fill={GLASS} opacity="0.7" />
          <text x="56" y={93 + i * 29} fill="rgba(255,255,255,0.78)" fontSize="12" fontFamily="sans-serif">{item}</text>
        </motion.g>
      ))}
      {/* Divider */}
      <line x1="388" y1="28" x2="388" y2="240" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 4" />
      <text x="386" y="140" fill="rgba(255,255,255,0.12)" fontSize="22" fontFamily="serif" textAnchor="middle">⟷</text>
      {/* Learner column */}
      <motion.rect x="406" y="18" width="330" height="232" rx="8" fill={CORAL} fillOpacity="0.12" stroke={CORAL} strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} />
      <text x="426" y="48" fill={CORAL} fontSize="13" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">LEARNER</text>
      <text x="426" y="66" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">Learning frontend · End user</text>
      {lrnItems.map((item, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.1 }}>
          <circle cx="426" cy={88 + i * 29} r="3.5" fill={CORAL} opacity="0.7" />
          <text x="438" y={93 + i * 29} fill="rgba(255,255,255,0.78)" fontSize="12" fontFamily="sans-serif">{item}</text>
        </motion.g>
      ))}
    </svg>
  )
}

// ─────────────────────────────────────────────
// DIAGRAM 3 — HR Admin Lifecycle
// Larger text, friction table better spaced
// ─────────────────────────────────────────────
function HRLifecycleDiagram() {
  const cx = 196, cy = 132, r = 84
  const phases = [
    { label: ['Initial', 'Adoption'],  desc: ['Platform setup,', 'first batches'],    angle: -90  },
    { label: ['Active', 'Operation'],  desc: ['Routine assignment,', 'monitoring'],   angle: -18  },
    { label: ['Mid-term', 'Review'],   desc: ['ROI check,', 'engagement audit'],      angle:  54  },
    { label: ['Renewal', 'Decision'],  desc: ['Contract review,', 'pain audit'],      angle: 126  },
    { label: ['Loyal', 'Advocacy'],    desc: ['Embedded in', 'L&D strategy'],         angle: 198  },
  ]
  const frictions = [
    { phase: 'Initial Adoption',   pain: '~8 hrs to manually build a single course batch' },
    { phase: 'Active Operation',   pain: 'No permission delegation — admin bottleneck' },
    { phase: 'Mid-term Review',    pain: 'Opaque data; no preview of report mid-cycle' },
    { phase: 'Renewal Decision',   pain: 'Cannot demonstrate ROI to executive sponsors' },
  ]
  return (
    <svg viewBox="0 0 760 290" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect width="760" height="290" fill={BG_DARK} rx="10" />
      {/* Lifecycle wheel */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(126,200,190,0.18)" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx={cx} cy={cy} r={r-20} fill="rgba(26,92,114,0.15)" stroke="rgba(126,200,190,0.07)" strokeWidth="1" />
      {phases.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180
        const px = cx + r * Math.cos(rad), py = cy + r * Math.sin(rad)
        const lx = cx + (r + 48) * Math.cos(rad), ly = cy + (r + 48) * Math.sin(rad)
        return (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.18 }}>
            <line x1={px} y1={py} x2={cx + (r-7)*Math.cos(rad)} y2={cy + (r-7)*Math.sin(rad)} stroke="rgba(126,200,190,0.3)" strokeWidth="1" />
            <circle cx={px} cy={py} r="5.5" fill={GLASS} opacity="0.85" />
            {p.label.map((line, li) => (
              <text key={li} x={lx} y={ly + li*14 - 5} fill="rgba(255,255,255,0.82)" fontSize="11.5"
                textAnchor="middle" fontWeight="600" fontFamily="sans-serif">{line}</text>
            ))}
            {p.desc.map((line, li) => (
              <text key={li} x={lx} y={ly + 24 + li*13} fill="rgba(255,255,255,0.37)" fontSize="10"
                textAnchor="middle" fontFamily="sans-serif">{line}</text>
            ))}
          </motion.g>
        )
      })}
      <text x={cx} y={cy-7}  fill="rgba(126,200,190,0.7)" fontSize="11" textAnchor="middle" fontWeight="700" fontFamily="sans-serif">HR</text>
      <text x={cx} y={cy+9}  fill="rgba(126,200,190,0.7)" fontSize="11" textAnchor="middle" fontWeight="700" fontFamily="sans-serif">LIFECYCLE</text>
      {/* Friction table */}
      <text x="418" y="42" fill="rgba(255,255,255,0.45)" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">CRITICAL FRICTION POINTS</text>
      {frictions.map((item, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.12 }}>
          <rect x="418" y={58 + i * 56} width="316" height="48" rx="5"
            fill="rgba(224,112,87,0.10)" stroke="rgba(224,112,87,0.22)" strokeWidth="0.8" />
          <text x="432" y={78 + i * 56} fill={CORAL} fontSize="11" fontWeight="700" fontFamily="sans-serif">{item.phase}</text>
          <text x="432" y={94 + i * 56} fill="rgba(255,255,255,0.62)" fontSize="11" fontFamily="sans-serif">{item.pain}</text>
        </motion.g>
      ))}
    </svg>
  )
}

// ─────────────────────────────────────────────
// DIAGRAM 4 — Learner Context & Micro-Learning
// Larger bars, bigger type
// ─────────────────────────────────────────────
function LearnerContextDiagram() {
  const contexts = [
    { label: ['Morning', 'Commute'],   pct: 68, color: GLASS   },
    { label: ['Office', 'Idle Time'],  pct: 57, color: MID     },
    { label: ['Lunch', 'Break'],       pct: 44, color: CORAL   },
    { label: ['Evening', 'Wind-down'], pct: 31, color: '#BFA98A' },
  ]
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect width="760" height="220" fill={BG_DARK} rx="10" />
      <text x="30" y="36" fill="rgba(255,255,255,0.45)" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">USAGE CONTEXTS (LEARNER INTERVIEWS)</text>
      {contexts.map((c, i) => {
        const x = 30 + i * 120
        const barH = (c.pct / 100) * 105
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
            {c.label.map((line, li) => (
              <text key={li} x={x + 40} y={64 + li*15} textAnchor="middle"
                fill="rgba(255,255,255,0.72)" fontSize="12" fontFamily="sans-serif">{line}</text>
            ))}
            <rect x={x+16} y={198 - barH} width="46" height={barH} rx="3" fill={c.color} opacity="0.2" />
            <motion.rect x={x+16} y={198 - barH} width="46" height={barH} rx="3" fill={c.color} opacity="0.68"
              initial={{ height: 0, y: 198 }} animate={{ height: barH, y: 198 - barH }}
              transition={{ duration: 0.75, delay: 0.3 + i * 0.15, ease: 'easeOut' }} />
            <text x={x+39} y={192 - barH} textAnchor="middle" fill={c.color}
              fontSize="14" fontWeight="700" fontFamily="sans-serif">{c.pct}%</text>
          </motion.g>
        )
      })}
      {/* Micro-learning callout */}
      <motion.rect x="520" y="44" width="216" height="158" rx="8"
        fill="rgba(224,112,87,0.10)" stroke="rgba(224,112,87,0.30)" strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
      <text x="536" y="68" fill={CORAL} fontSize="11" fontWeight="700" fontFamily="sans-serif">MICRO-LEARNING INSIGHT</text>
      <text x="536" y="100" fill="rgba(255,255,255,0.88)" fontSize="30" fontWeight="700" fontFamily="sans-serif">6–12 min</text>
      <text x="536" y="118" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">optimal session length</text>
      <line x1="536" y1="127" x2="724" y2="127" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      {['Fragmented but complete', 'Tied to practical scenarios', 'Low commitment threshold'].map((t, i) => (
        <g key={i}>
          <circle cx="541" cy={143 + i*18} r="2.5" fill={CORAL} opacity="0.7" />
          <text x="550" y={147 + i*18} fill="rgba(255,255,255,0.68)" fontSize="11" fontFamily="sans-serif">{t}</text>
        </g>
      ))}
    </svg>
  )
}

// ─────────────────────────────────────────────
// DIAGRAM 5 — Three-Gap Strategic Finding
// Larger text, taller rows
// ─────────────────────────────────────────────
function ThreeGapDiagram() {
  const gaps = [
    {
      label:   ['Brand', 'Perception Gap'],
      company: '"Enterprise learning', userTxt: '"News & general',
      comp2:   'platform"',             user2:   'knowledge source"',
      impl:    ['Reposition platform identity', 'in onboarding & UX voice'],
      color:   OCEAN,
    },
    {
      label:   ['Content', 'Depth Gap'],
      company: '"High-quality',         userTxt: '"Surface-level;',
      comp2:   'curated content"',      user2:   'hard to discover"',
      impl:    ['Improve content taxonomy', '& personalised discovery'],
      color:   CORAL,
    },
    {
      label:   ['Commitment', 'Paradox'],
      company: '"Structured',           userTxt: '"Too formal;',
      comp2:   'learning paths"',       user2:   'discourages casual use"',
      impl:    ['Design micro-learning', 'entry points; lower friction'],
      color:   GLASS,
    },
  ]
  return (
    <svg viewBox="0 0 760 290" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect width="760" height="290" fill={BG_DARK} rx="10" />
      {/* Column headers */}
      <rect x="232" y="12" width="136" height="26" rx="4" fill="rgba(26,92,114,0.35)" />
      <text x="300" y="29" textAnchor="middle" fill={GLASS} fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">COMPANY VIEW</text>
      <text x="382" y="29" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="14" fontFamily="sans-serif">≠</text>
      <rect x="396" y="12" width="136" height="26" rx="4" fill="rgba(224,112,87,0.22)" />
      <text x="464" y="29" textAnchor="middle" fill={CORAL} fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">USER REALITY</text>
      <text x="624" y="29" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">IMPLICATION</text>
      {gaps.map((g, i) => {
        const y = 50 + i * 76
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.2 }}>
            {/* Gap label */}
            <rect x="16" y={y+2} width="200" height="66" rx="6" fill={g.color} fillOpacity="0.15" stroke={g.color} strokeWidth="0.8" />
            {g.label.map((line, li) => (
              <text key={li} x="116" y={y + 28 + li*18} textAnchor="middle"
                fill={g.color} fontSize="13" fontWeight="700" fontFamily="sans-serif">{line}</text>
            ))}
            {/* Company view */}
            <rect x="232" y={y+2} width="136" height="66" rx="6" fill="rgba(26,92,114,0.1)" stroke="rgba(126,200,190,0.18)" strokeWidth="0.8" />
            <text x="300" y={y + 28} textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="11.5" fontFamily="sans-serif">{g.company}</text>
            <text x="300" y={y + 44} textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="11.5" fontFamily="sans-serif">{g.comp2}</text>
            {/* ≠ */}
            <text x="382" y={y + 40} textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="20" fontFamily="sans-serif">≠</text>
            {/* User reality */}
            <rect x="396" y={y+2} width="136" height="66" rx="6" fill="rgba(224,112,87,0.10)" stroke="rgba(224,112,87,0.18)" strokeWidth="0.8" />
            <text x="464" y={y + 28} textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="11.5" fontFamily="sans-serif">{g.userTxt}</text>
            <text x="464" y={y + 44} textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="11.5" fontFamily="sans-serif">{g.user2}</text>
            {/* Implication */}
            <rect x="548" y={y+2} width="196" height="66" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            {g.impl.map((line, li) => (
              <text key={li} x="558" y={y + 28 + li*18} fill="rgba(255,255,255,0.52)" fontSize="11.5" fontFamily="sans-serif">{line}</text>
            ))}
          </motion.g>
        )
      })}
    </svg>
  )
}

// ─────────────────────────────────────────────
// DIAGRAM 6 — Design Workflow / IA Sketch
// Shows key design decisions as two parallel flows (HR + Learner)
// NDA-safe: no screens, just abstract workflow nodes
// ─────────────────────────────────────────────
function DesignWorkflowDiagram() {
  const nodeW = 124, nodeH = 36, r = 5

  const hrNodes = [
    { x: 50,  y: 80,  label: 'Browse Catalogue',   sub: 'filtered by role' },
    { x: 222, y: 80,  label: 'Apply Template',      sub: 'batch & time-saving' },
    { x: 394, y: 80,  label: 'Bulk Assign',         sub: 'delegate to sub-admin' },
    { x: 566, y: 80,  label: 'Track in Dashboard',  sub: 'real-time · preview' },
  ]
  const lrnNodes = [
    { x: 50,  y: 192, label: 'Discovery Entry',    sub: 'role · goal · mood' },
    { x: 222, y: 192, label: 'Micro Session',       sub: '6–12 min · low friction' },
    { x: 394, y: 192, label: 'Resume Anywhere',     sub: 'commute · desk · lunch' },
    { x: 566, y: 192, label: 'Completion Signal',   sub: 'visible progress' },
  ]
  const crossArrow = { x1: 566 + nodeW / 2, y1: 116, x2: 566 + nodeW / 2, y2: 192 }

  return (
    <svg viewBox="0 0 760 296" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect width="760" height="296" fill={BG_CARD} rx="10" />

      {/* HR track label */}
      <rect x="16" y="64" width="18" height="52" rx="4" fill={GLASS} opacity="0.6" />
      <text transform="rotate(-90 25 136)" x="25" y="136" textAnchor="middle"
        fill={GLASS} fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">HR ADMIN</text>

      {/* Learner track label */}
      <rect x="16" y="178" width="18" height="52" rx="4" fill={CORAL} opacity="0.5" />
      <text transform="rotate(-90 25 248)" x="25" y="248" textAnchor="middle"
        fill={CORAL} fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">LEARNER</text>

      {/* HR nodes */}
      {hrNodes.map((n, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.15, duration: 0.45 }}>
          {i < hrNodes.length - 1 && (
            <>
              <line x1={n.x + nodeW} y1={n.y + nodeH / 2} x2={hrNodes[i+1].x} y2={hrNodes[i+1].y + nodeH / 2}
                stroke="rgba(126,200,190,0.35)" strokeWidth="1.2" />
              <polygon points={`${hrNodes[i+1].x - 5},${hrNodes[i+1].y + nodeH/2 - 4} ${hrNodes[i+1].x + 1},${hrNodes[i+1].y + nodeH/2} ${hrNodes[i+1].x - 5},${hrNodes[i+1].y + nodeH/2 + 4}`}
                fill="rgba(126,200,190,0.35)" />
            </>
          )}
          <rect x={n.x} y={n.y} width={nodeW} height={nodeH} rx={r}
            fill="rgba(26,92,114,0.25)" stroke={GLASS} strokeWidth="1" />
          <text x={n.x + nodeW / 2} y={n.y + 14} textAnchor="middle"
            fill="rgba(255,255,255,0.88)" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">{n.label}</text>
          <text x={n.x + nodeW / 2} y={n.y + 28} textAnchor="middle"
            fill="rgba(255,255,255,0.42)" fontSize="9.5" fontFamily="sans-serif">{n.sub}</text>
        </motion.g>
      ))}

      {/* Cross-product arrow (HR dashboard → Learner entry) */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        <line x1={crossArrow.x1} y1={crossArrow.y1} x2={crossArrow.x2} y2={crossArrow.y2}
          stroke="rgba(224,112,87,0.45)" strokeWidth="1.2" strokeDasharray="4 3" />
        <polygon points={`${crossArrow.x2 - 4},${crossArrow.y2 - 6} ${crossArrow.x2 + 4},${crossArrow.y2 - 6} ${crossArrow.x2},${crossArrow.y2}`}
          fill="rgba(224,112,87,0.45)" />
        <rect x={crossArrow.x1 - 42} y={148} width="84" height="22" rx="4"
          fill="rgba(224,112,87,0.12)" stroke="rgba(224,112,87,0.3)" strokeWidth="0.8" />
        <text x={crossArrow.x1} y="162" textAnchor="middle"
          fill={CORAL} fontSize="10" fontFamily="sans-serif">cross-product link</text>
      </motion.g>

      {/* Learner nodes */}
      {lrnNodes.map((n, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 + i * 0.15, duration: 0.45 }}>
          {i < lrnNodes.length - 1 && (
            <>
              <line x1={n.x + nodeW} y1={n.y + nodeH / 2} x2={lrnNodes[i+1].x} y2={lrnNodes[i+1].y + nodeH / 2}
                stroke="rgba(224,112,87,0.30)" strokeWidth="1.2" />
              <polygon points={`${lrnNodes[i+1].x - 5},${lrnNodes[i+1].y + nodeH/2 - 4} ${lrnNodes[i+1].x + 1},${lrnNodes[i+1].y + nodeH/2} ${lrnNodes[i+1].x - 5},${lrnNodes[i+1].y + nodeH/2 + 4}`}
                fill="rgba(224,112,87,0.30)" />
            </>
          )}
          <rect x={n.x} y={n.y} width={nodeW} height={nodeH} rx={r}
            fill="rgba(224,112,87,0.14)" stroke={CORAL} strokeWidth="1" strokeOpacity="0.6" />
          <text x={n.x + nodeW / 2} y={n.y + 14} textAnchor="middle"
            fill="rgba(255,255,255,0.88)" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">{n.label}</text>
          <text x={n.x + nodeW / 2} y={n.y + 28} textAnchor="middle"
            fill="rgba(255,255,255,0.42)" fontSize="9.5" fontFamily="sans-serif">{n.sub}</text>
        </motion.g>
      ))}

      {/* Legend */}
      <line x1="30" y1="260" x2="58" y2="260" stroke={GLASS} strokeWidth="1.2" />
      <text x="64" y="264" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="sans-serif">HR admin redesigned flow</text>
      <line x1="230" y1="260" x2="258" y2="260" stroke={CORAL} strokeWidth="1.2" strokeOpacity="0.6" />
      <text x="264" y="264" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="sans-serif">Learner redesigned flow</text>
      <line x1="440" y1="260" x2="468" y2="260" stroke={CORAL} strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.6" />
      <text x="474" y="264" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="sans-serif">Cross-product connection</text>
    </svg>
  )
}

// ─────────────────────────────────────────────
// Main Case Page
// ─────────────────────────────────────────────
export default function DigitalLearning() {
  return (
    <CaseLayout
      tags={['Media', 'Enterprise Learning', 'Mixed-Methods Research']}
      title="What the Analytics Couldn't Show: Research for a Media Group's Enterprise Learning Platform"
      subtitle="A mixed-methods study into how working learners actually engage with enterprise content — and what that meant for how a growing platform needed to be redesigned."
      meta={[
        { label: 'Industry', value: 'Media & EdTech' },
        { label: 'Methods',  value: 'Depth Interviews · Affinity Mapping · Journey Mapping · Concept Testing' },
        { label: 'Scope',    value: 'Enterprise Platform · Dual-User System' },
        { label: 'Year',     value: '—' },
      ]}
      nextCase={{ to: '/cases/arts-education', title: "Lockdown as Catalyst: Discovery Research for a Performing Arts Organisation's Online School" }}
    >

      {/* Hero diagram */}
      <FadeIn>
        <div style={{
          background: `linear-gradient(135deg, ${BG_CARD} 0%, ${OCEAN} 60%, ${BRIGHT} 100%)`,
          borderRadius: 'var(--r-md)',
          padding: '28px 28px 20px',
          marginBottom: 40,
          overflow: 'hidden',
        }}>
          <MethodologyDiagram />
        </div>
      </FadeIn>

      {/* OVERVIEW */}
      <FadeIn>
        <h2>A Library Deep as the Ocean</h2>
        <p>A major media organisation with decades of editorial authority had built enterprise learning as the second pillar of its business. Articles, video series, editorial programmes, podcasts, international content, ESG materials, financial compliance courses — the library kept growing, quarter by quarter, in depth and in breadth. The clients kept signing.</p>
        <p>But a deep library isn't the same as a useful one. The content was there. What wasn't there was any reason for a person to go looking — or any path that felt like it led somewhere worth going. Engagement was lower than expected. HR administrators weren't renewing. The analytics confirmed something was wrong. They couldn't say what.</p>
        <p>The organisation commissioned a research engagement to find out. We entered asking how to help users navigate a growing catalogue. We left asking a different question entirely: what makes a person want to dive in at all?</p>
      </FadeIn>

      {/* RESEARCH DESIGN */}
      <FadeIn>
        <h2>Two People Who Never See Each Other</h2>
        <p>The platform had two entirely separate user experiences. HR administrators purchased, configured, and managed the platform from a back-end interface. Learners encountered it as a content-facing front end. These two groups had different definitions of success, different sources of frustration, and — crucially — no visibility into each other's experience. HR made renewal decisions based on metrics learners never saw. Learners developed habits and avoidances based on friction HR couldn't observe. Treating them as a single user would have produced meaningless findings. The study was structured in four sequential stages to hold both sides in view at once.</p>
      </FadeIn>

      <FadeIn>
        <div className="callout">
          <h4>Research Methods</h4>
          <ul>
            <li>Internal stakeholder interviews — product, editorial, business — to surface the organisation's assumptions about its own users</li>
            <li>In-depth interviews with HR administrators across client companies, segmented by organisation size and management style</li>
            <li>In-depth interviews with learners across industries, segmented by motivation type and degree of autonomy</li>
            <li>Affinity mapping and experience mapping to find where both sides were silently failing</li>
            <li>Concept testing to validate design directions before committing to development</li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="diagram-block">
          <p className="diagram-caption">Dual-user segment map — two separate interfaces, two separate definitions of success</p>
          <DualSegmentDiagram />
        </div>
      </FadeIn>

      {/* LEARNER */}
      <FadeIn>
        <h2>What We Got Wrong About Why People Learn</h2>
        <p>We entered the research expecting to find that learners were driven by career advancement — promotion, job performance, professional edge. The interviews told a different story.</p>
        <p>The most decisive factor wasn't personal motivation. It was the culture of the industry the learner worked in. And that finding changed everything.</p>
        <p>In financial services, the compliance course load is relentless. Learners arrive at the platform already carrying the weight of mandatory training tied to performance review — courses they cannot opt out of, knowledge they must absorb just to meet the baseline requirements of their role. Completion rates were high. That was the visible number. What was invisible was the exhaustion behind it: a kind of quiet depletion that leaves no room for curiosity, no appetite for anything beyond what is required. When your field demands that you keep pace just to stay in place, there is nothing left over for exploration.</p>
        <p>The contrast came from sales staff and middle managers. These roles run on breadth — on having something to say to different people, in different rooms, across different conversations. Learning, for them, is a form of social preparation. They showed the highest rates of voluntary, exploratory engagement across the study. During COVID, when the face-to-face exchange those roles depend on disappeared overnight, their learning activity surged — not because they suddenly wanted knowledge for its own sake, but because learning had become the only available substitute for the human contact they had lost.</p>
        <p>The clearest confirmation came from a pattern HR had stumbled into without fully understanding it. The most engaged client teams were those where HR had deliberately turned courses into shared events — organising sessions where learners exchanged what they'd studied, compared what they'd taken away, built on each other's thinking. Learning as conversation. The data confirmed what these HR managers had sensed intuitively: once you remove the social dimension, even motivated learners stop coming back.</p>
      </FadeIn>

      <FadeIn>
        <div className="diagram-block">
          <p className="diagram-caption">Learner usage contexts — fragmented windows of 6–12 min dominated actual usage patterns</p>
          <LearnerContextDiagram />
        </div>
      </FadeIn>

      {/* HR LIFECYCLE */}
      <FadeIn>
        <h2>The Cost of Operating the Platform</h2>
        <p>For HR administrators, the frustration was more immediate. Friction concentrated at two moments: building the initial course assignment, and generating the mid-term reports that justified the platform's cost to management. Neither was a minor inconvenience.</p>
      </FadeIn>

      <FadeIn>
        <div className="pullquote">
          "Building one course batch — selecting content, assigning users, setting parameters — takes me around eight hours. I've started blocking it as a full work day."
        </div>
      </FadeIn>

      <FadeIn>
        <p>The more an administrator invested in operating the platform, the more evidence they accumulated that the return didn't justify the effort. It was a slow erosion of belief — and it happened at exactly the moments when HR needed to be most convinced. Research identified three distinct management styles among HR administrators, each engaging with the platform differently. None of them escaped this dynamic entirely.</p>
      </FadeIn>

      <FadeIn>
        <div className="diagram-block">
          <p className="diagram-caption">HR administrator lifecycle — friction concentrated at assignment and mid-term reporting phases</p>
          <HRLifecycleDiagram />
        </div>
      </FadeIn>

      {/* THREE GAPS */}
      <FadeIn>
        <h2>What the Platform Had Got Wrong</h2>
        <p>Bringing both sides of the research together produced a finding that reframed the project entirely. The platform's problems weren't interface problems. They were three gaps between what the organisation believed about its product and what users actually experienced — invisible to analytics, operating at the level of assumption.</p>
      </FadeIn>

      <FadeIn>
        <div className="diagram-block">
          <p className="diagram-caption">Three gaps between company assumption and user reality</p>
          <ThreeGapDiagram />
        </div>
      </FadeIn>

      {/* DESIGN DIRECTIONS */}
      <FadeIn>
        <h2>From Delivery to Belonging</h2>
        <p>The research reframed the design brief at its core. The platform had been built around a model of learning as a solitary, structured activity — something you sit down to complete. The findings pointed toward something different: learning, for working professionals, happens in fragments, is shaped by the culture around you, and is sustained — or abandoned — depending on whether other people are part of it.</p>
        <p>The redesign was organised around two questions the existing platform had never asked. For learners: <em>who do I want to become?</em> Content pathways were restructured around identity and growth goals — not catalogue volume. Social mechanics were introduced to make learning visible to peers, turning individual progress into shared signal. Short-form formats and session resumption were designed for the six-to-twelve-minute windows where learning actually happened. The platform would lead with value, not with commitment.</p>
        <p>For HR: <em>how do I make this worth the investment?</em> Batch assignment was redesigned with template logic and permission delegation to distribute the administrative load. Reporting was made available throughout the licence period — not only at billing milestones — so administrators could demonstrate value before the renewal conversation, not after.</p>
      </FadeIn>

      <FadeIn>
        <div className="diagram-block">
          <p className="diagram-caption">Redesigned user flows — key interaction moments across HR admin and learner journeys</p>
          <DesignWorkflowDiagram />
        </div>
      </FadeIn>

      <FadeIn>
        <p>The most durable outcome wasn't a feature list. It was a reframing of what the platform was actually for. Not a library people visit when they need something. A place people return to — because it reflects who they are becoming, and because others are becoming alongside them.</p>
      </FadeIn>

      <FadeIn>
        <p className="nda-note">Client identity, specific platform metrics, and proprietary research materials have been anonymised per NDA. The findings and design directions described reflect the actual research output. Available to discuss in full detail — please reach out at tunglin.sy@gmail.com.</p>
      </FadeIn>

    </CaseLayout>
  )
}
