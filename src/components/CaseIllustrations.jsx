import { motion } from 'framer-motion'

// ── 1. Design Strategy: Branching futures tree
export function StrategyIllustration() {
  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#1C1C2E" />
      {/* Root */}
      <motion.line x1="200" y1="200" x2="200" y2="140"
        stroke="#BFA98A" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }} />
      {/* Branch L1 */}
      <motion.line x1="200" y1="140" x2="130" y2="100"
        stroke="#BFA98A" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }} />
      <motion.line x1="200" y1="140" x2="270" y2="100"
        stroke="#BFA98A" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 1.0 }} />
      {/* Branch L2 */}
      <motion.line x1="130" y1="100" x2="90" y2="65"
        stroke="rgba(191,169,138,0.5)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.4 }} />
      <motion.line x1="130" y1="100" x2="158" y2="62"
        stroke="rgba(191,169,138,0.5)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }} />
      <motion.line x1="270" y1="100" x2="242" y2="62"
        stroke="rgba(191,169,138,0.5)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.6 }} />
      <motion.line x1="270" y1="100" x2="310" y2="65"
        stroke="rgba(191,169,138,0.5)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.7 }} />
      {/* Leaf nodes */}
      {[[90,65],[158,62],[242,62],[310,65]].map(([x,y],i) => (
        <motion.circle key={i} cx={x} cy={y} r="5"
          fill="none" stroke="#BFA98A" strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 0.4, delay: 2.0 + i * 0.1 }} />
      ))}
      {/* Horizon line */}
      <motion.line x1="40" y1="40" x2="360" y2="40"
        stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }} />
      <motion.text x="352" y="36" fill="rgba(255,255,255,0.2)"
        fontSize="7" fontFamily="serif" textAnchor="end"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}>
        2035
      </motion.text>
    </svg>
  )
}

// ── 2. Academic Platform: Knowledge graph / dot matrix
export function AcademicIllustration() {
  const dots = []
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 10; col++) {
      dots.push({ x: 40 + col * 36, y: 35 + row * 30, i: row * 10 + col })
    }
  }
  const connections = [[0,11],[11,22],[22,33],[1,12],[12,23],[5,14],[14,25],[25,36],[10,21],[21,32],[3,13],[13,24]]

  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#3D4B5C" />
      {connections.map(([a, b], i) => (
        <motion.line key={i}
          x1={dots[a]?.x} y1={dots[a]?.y}
          x2={dots[b]?.x} y2={dots[b]?.y}
          stroke="rgba(191,169,138,0.35)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.08 }} />
      ))}
      {dots.map(d => (
        <motion.circle key={d.i} cx={d.x} cy={d.y}
          r={d.i % 11 === 0 ? 4 : d.i % 7 === 0 ? 3 : 1.8}
          fill={d.i % 11 === 0 ? '#BFA98A' : d.i % 7 === 0 ? 'rgba(191,169,138,0.6)' : 'rgba(255,255,255,0.25)'}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: d.i * 0.018 }} />
      ))}
    </svg>
  )
}

// ── 3. Digital Learning: Flow / wave
export function LearningIllustration() {
  const waves = [
    { d: "M 20 110 C 80 70, 140 150, 200 110 S 320 70, 380 110", delay: 0, opacity: 0.7 },
    { d: "M 20 130 C 80 90, 140 170, 200 130 S 320 90, 380 130", delay: 0.3, opacity: 0.5 },
    { d: "M 20 150 C 80 110, 140 190, 200 150 S 320 110, 380 150", delay: 0.6, opacity: 0.3 },
    { d: "M 20 90 C 80 50, 140 130, 200 90 S 320 50, 380 90", delay: 0.9, opacity: 0.2 },
  ]
  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#8B6B4A" />
      {waves.map((w, i) => (
        <motion.path key={i} d={w.d}
          fill="none" stroke={`rgba(255,240,220,${w.opacity})`} strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: w.opacity }}
          transition={{ duration: 1.5, delay: w.delay, ease: "easeInOut" }} />
      ))}
      {/* Floating dots along wave */}
      {[60, 130, 200, 270, 340].map((x, i) => (
        <motion.circle key={i} cx={x} cy={110 + Math.sin(i * 1.2) * 18} r="3"
          fill="rgba(255,240,220,0.6)"
          animate={{ cy: [110 + Math.sin(i * 1.2) * 18, 110 + Math.sin(i * 1.2) * 18 - 8, 110 + Math.sin(i * 1.2) * 18] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }} />
      ))}
    </svg>
  )
}

// ── 4. Arts Education: Concentric circles — embodied movement
export function ArtsIllustration() {
  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#4A6358" />
      {[80, 65, 50, 36, 24, 13].map((r, i) => (
        <motion.circle key={i} cx="200" cy="110" r={r}
          fill="none" stroke={`rgba(255,248,240,${0.12 + i * 0.06})`}
          strokeWidth={i === 0 ? 1.5 : 1}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }} />
      ))}
      {/* Orbiting element */}
      <motion.circle cx="200" cy="30" r="4"
        fill="rgba(255,248,240,0.5)"
        animate={{ rotate: 360 }}
        style={{ originX: '200px', originY: '110px' }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        transform-origin="200 110" />
      <motion.circle r="4" fill="rgba(255,248,240,0.3)"
        animate={{
          cx: [200 + 80 * Math.cos(0), 200 + 80 * Math.cos(Math.PI), 200 + 80 * Math.cos(2 * Math.PI)],
          cy: [110 + 80 * Math.sin(0), 110 + 80 * Math.sin(Math.PI), 110 + 80 * Math.sin(2 * Math.PI)]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
      {/* Small scattered marks */}
      {[30, 100, 170, 230, 295, 350].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <motion.line key={i}
            x1={200 + 90 * Math.cos(rad)} y1={110 + 90 * Math.sin(rad)}
            x2={200 + 98 * Math.cos(rad)} y2={110 + 98 * Math.sin(rad)}
            stroke="rgba(255,248,240,0.4)" strokeWidth="1.5" strokeLinecap="round"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }} />
        )
      })}
    </svg>
  )
}

// ── 5. Mobility Platform: Urban grid with path trace
export function MobilityIllustration() {
  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#7A5C4A" />
      {/* Grid */}
      {[60, 120, 180, 240, 300, 360].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="220"
          stroke="rgba(255,240,220,0.07)" strokeWidth="1" />
      ))}
      {[44, 88, 132, 176].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y}
          stroke="rgba(255,240,220,0.07)" strokeWidth="1" />
      ))}
      {/* Path */}
      <motion.path
        d="M 60 176 L 60 132 L 120 132 L 120 88 L 240 88 L 240 44 L 360 44"
        fill="none" stroke="#BFA98A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }} />
      {/* Nodes */}
      {[[60,176],[60,132],[120,132],[120,88],[240,88],[240,44],[360,44]].map(([x,y], i) => (
        <motion.circle key={i} cx={x} cy={y} r={i === 0 || i === 6 ? 6 : 3.5}
          fill={i === 0 || i === 6 ? '#BFA98A' : 'rgba(191,169,138,0.6)'}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.5 + i * 0.28 }} />
      ))}
    </svg>
  )
}
