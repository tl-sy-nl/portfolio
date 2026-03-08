import { useState } from 'react'
import CaseLayout from '../../components/CaseLayout'
import { FadeIn } from '../../components/FadeIn'

/* ══════════════════════════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════════════════════════ */
function Lightbox({ title, caption, onClose, children }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,16,20,0.82)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff', borderRadius: 14,
          padding: '36px 40px 28px',
          maxWidth: 920, width: '100%',
          maxHeight: '92vh', overflowY: 'auto',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', marginBottom: 28,
        }}>
          <div>
            <p style={{
              margin: '0 0 6px',
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#1A5C72',
            }}>
              Research Diagram
            </p>
            <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: '#111', lineHeight: 1.35 }}>
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close diagram"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '2px 8px', color: '#999', fontSize: '1.5rem',
              lineHeight: 1, marginLeft: 20, flexShrink: 0,
            }}
          >
            ×
          </button>
        </div>
        {children}
        {caption && (
          <p style={{
            margin: '20px 0 0',
            fontSize: '0.78rem', color: '#666', lineHeight: 1.65, fontStyle: 'italic',
          }}>
            {caption}
          </p>
        )}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   DIAGRAM FIGURE WRAPPER — click to enlarge
══════════════════════════════════════════════════════════════════ */
function DiagramFigure({ title, caption, children }) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <figure style={{ margin: '0 0 48px' }}>
      <div
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(true)}
        style={{
          cursor: 'zoom-in',
          borderRadius: 10,
          border: `1px solid ${hovered ? 'rgba(26,92,114,0.28)' : 'rgba(26,92,114,0.14)'}`,
          background: '#F7F5F1',
          padding: '28px 20px 14px',
          boxShadow: hovered ? '0 6px 28px rgba(26,92,114,0.12)' : 'none',
          transition: 'box-shadow 0.2s, border-color 0.2s',
          outline: 'none',
          overflow: 'hidden',
        }}
      >
        {children}
        <p style={{
          textAlign: 'right', margin: '10px 4px 0',
          fontSize: '0.67rem', color: '#1A5C72',
          letterSpacing: '0.06em', fontStyle: 'italic',
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.2s',
        }}>
          Click to enlarge ↗
        </p>
      </div>
      {caption && (
        <figcaption style={{
          marginTop: 10,
          fontSize: '0.78rem', color: '#666', lineHeight: 1.65, fontStyle: 'italic',
          paddingLeft: 2,
        }}>
          {caption}
        </figcaption>
      )}
      {open && (
        <Lightbox title={title} caption={caption} onClose={() => setOpen(false)}>
          {children}
        </Lightbox>
      )}
    </figure>
  )
}

/* ══════════════════════════════════════════════════════════════════
   SVG DIAGRAM 1 — RESEARCH PROCESS (4 phases)
══════════════════════════════════════════════════════════════════ */
function ResearchProcessDiagram() {
  const W = 700, H = 152
  const phases = [
    {
      id: '01', title: ['Secondary', 'Research'],
      detail: ['Landscape &', 'precedent analysis'],
      fill: '#EBF5F8', text: '#0E3D4D',
    },
    {
      id: '02', title: ['Internal', 'Discovery'],
      detail: ['Stakeholder', '& values mapping'],
      fill: '#C8E6EF', text: '#0E3D4D',
    },
    {
      id: '03', title: ['Contextual', 'Inquiry'],
      detail: ['n = 19 interviews', '6 cities'],
      fill: '#7EC8BE', text: '#0A2D38', bold: true,
    },
    {
      id: '04', title: ['Concept', 'Testing'],
      detail: ['n = 24 sessions', '2 segments'],
      fill: '#3A9AB8', text: '#ffffff', bold: true,
    },
    {
      id: '05', title: ['Strategic', 'Synthesis'],
      detail: ['Personas ·', 'Scenarios'],
      fill: '#1A5C72', text: '#ffffff',
    },
  ]

  const boxW = 110, boxH = 112
  const arrowZone = 17
  const totalW = phases.length * boxW + (phases.length - 1) * arrowZone
  const startX = (W - totalW) / 2
  const boxY = (H - boxH) / 2

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      {phases.map((ph, i) => {
        const x = startX + i * (boxW + arrowZone)
        const cx = x + boxW / 2
        const midY = boxY + boxH / 2
        return (
          <g key={ph.id}>
            <rect x={x} y={boxY} width={boxW} height={boxH} rx={7} fill={ph.fill} />
            <text x={x + 9} y={boxY + 14}
              fontSize="8.5" fontFamily="Inter, sans-serif"
              fontWeight="600" fill={ph.text} opacity="0.45">
              {ph.id}
            </text>
            {ph.title.map((line, li) => (
              <text key={li} x={cx} y={boxY + 38 + li * 13}
                fontSize="11" fontFamily="Inter, sans-serif"
                fontWeight="600" fill={ph.text} textAnchor="middle">
                {line}
              </text>
            ))}
            <line
              x1={x + 14} y1={boxY + 66}
              x2={x + boxW - 14} y2={boxY + 66}
              stroke={ph.text} strokeOpacity="0.15" strokeWidth="0.8"
            />
            {ph.detail.map((line, li) => (
              <text key={li} x={cx} y={boxY + 79 + li * 12}
                fontSize="9" fontFamily="Inter, sans-serif"
                fontWeight={ph.bold ? '500' : '400'}
                fill={ph.text} textAnchor="middle" opacity="0.82">
                {line}
              </text>
            ))}
            {i < phases.length - 1 && (() => {
              const ax = x + boxW + 2
              const bx = ax + arrowZone - 3
              return (
                <g>
                  <line x1={ax} y1={midY} x2={bx - 5} y2={midY}
                    stroke="#1A5C72" strokeOpacity="0.3" strokeWidth="1.2" />
                  <polygon
                    points={`${bx},${midY} ${bx - 6},${midY - 3.5} ${bx - 6},${midY + 3.5}`}
                    fill="#1A5C72" opacity="0.3"
                  />
                </g>
              )
            })()}
          </g>
        )
      })}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════════
   SVG DIAGRAM 2 — PERSONA POSITIONING MATRIX
══════════════════════════════════════════════════════════════════ */
function PersonaMatrixDiagram() {
  const W = 700, H = 296
  const accent = '#1A5C72', glow = '#7EC8BE'

  const parentPersonas = [
    { label: 'A', cx: 0.77, cy: 0.20 },
    { label: 'B', cx: 0.21, cy: 0.22 },
    { label: 'C', cx: 0.73, cy: 0.50 },
    { label: 'D', cx: 0.27, cy: 0.54 },
    { label: 'E', cx: 0.18, cy: 0.80 },
  ]

  const adultPersonas = [
    { label: 'F', cx: 0.73, cy: 0.20 },
    { label: 'G', cx: 0.72, cy: 0.76 },
    { label: 'H', cx: 0.28, cy: 0.48 },
  ]

  const matW = 278, matH = 214
  const matY = 44
  const leftX = 30, rightX = W - 30 - matW
  const pad = 54

  const MatrixGroup = ({ ox, personas, xLabel, yLabel, segTitle }) => {
    const innerX = ox + pad
    const innerY = matY + 10
    const innerW = matW - pad - 8
    const innerH = matH - 32
    return (
      <g>
        <text x={ox + matW / 2} y={matY - 8}
          textAnchor="middle" fontSize="9"
          fontFamily="Inter, sans-serif"
          fontWeight="700" fill={accent}
          letterSpacing="0.09em">
          {segTitle}
        </text>
        <rect x={innerX} y={innerY} width={innerW} height={innerH}
          fill="white" rx={4} opacity="0.75" />
        <line x1={innerX + innerW / 2} y1={innerY}
          x2={innerX + innerW / 2} y2={innerY + innerH}
          stroke={accent} strokeWidth="0.7" strokeOpacity="0.2" strokeDasharray="3,3" />
        <line x1={innerX} y1={innerY + innerH / 2}
          x2={innerX + innerW} y2={innerY + innerH / 2}
          stroke={accent} strokeWidth="0.7" strokeOpacity="0.2" strokeDasharray="3,3" />
        <rect x={innerX} y={innerY} width={innerW} height={innerH}
          fill="none" rx={4} stroke={accent} strokeWidth="0.8" strokeOpacity="0.25" />
        <text
          x={ox + 22} y={innerY + innerH / 2}
          textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif"
          fill={accent} opacity="0.55"
          transform={`rotate(-90, ${ox + 22}, ${innerY + innerH / 2})`}>
          {yLabel} →
        </text>
        <text x={innerX + innerW / 2} y={innerY + innerH + 20}
          textAnchor="middle" fontSize="7.5" fontFamily="Inter, sans-serif"
          fill={accent} opacity="0.55">
          {xLabel} →
        </text>
        {personas.map(p => {
          const px = innerX + p.cx * innerW
          const py = innerY + p.cy * innerH
          return (
            <g key={p.label}>
              <circle cx={px} cy={py} r={15} fill={glow} opacity="0.2" />
              <circle cx={px} cy={py} r={10} fill={accent} opacity="0.82" />
              <text x={px} y={py + 4}
                textAnchor="middle" fontSize="9.5"
                fontFamily="Inter, sans-serif" fontWeight="700" fill="white">
                {p.label}
              </text>
            </g>
          )
        })}
      </g>
    )
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      <MatrixGroup
        ox={leftX}
        personas={parentPersonas}
        xLabel="Schedule Flexibility"
        yLabel="Programme Value Alignment"
        segTitle="PARENT SEGMENT  (n = 5 positions)"
      />
      <line x1={W / 2} y1={12} x2={W / 2} y2={H - 6}
        stroke={accent} strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="5,4" />
      <MatrixGroup
        ox={rightX}
        personas={adultPersonas}
        xLabel="Guidance Precision Need"
        yLabel="Exercise Intensity"
        segTitle="SENIOR SEGMENT · 長青者  (n = 3 positions)"
      />
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════════
   SVG DIAGRAM 3 — PARENT JOURNEY MAP (6-act)
══════════════════════════════════════════════════════════════════ */
function ParentJourneyDiagram() {
  const stages = [
    {
      n: '01', title: ['Trial &', 'Onboard'],
      action: ['Views trial', 'content'],
      insight: ['Lead with', 'parent value'],
    },
    {
      n: '02', title: ['First', 'Class'],
      action: ['Prepares', 'with child'],
      insight: ['Simple setup;', 'teacher feedback'],
    },
    {
      n: '03', title: ['Caregiver', 'Handoff'],
      action: ['Delegates to', 'co-parent'],
      insight: ['Role transfer', 'sustains habit'],
    },
    {
      n: '04', title: ['Sustaining', 'Practice'],
      action: ['Manages', 'drop-off risk'],
      insight: ['Peer community', 'holds motivation'],
    },
    {
      n: '05', title: ['Social', 'Sharing'],
      action: ['Shares child', 'progress'],
      insight: ['Sharing unlocks', 'group features'],
    },
    {
      n: '06', title: ['Long-term', 'Retention'],
      action: ['Tracks child', 'over time'],
      insight: ['Progress map &', 'milestones'],
    },
  ]

  const W = 700, H = 216
  const cols = stages.length
  const colW = W / cols
  const accent = '#1A5C72', glow = '#7EC8BE', warm = '#E07057'
  const headerY = 26
  const actionY = 68, actionH = 56
  const insightY = 136, insightH = 58

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      {/* Legend */}
      <rect x={W - 138} y={2} width={9} height={9} rx={2} fill={glow} opacity="0.55" />
      <text x={W - 125} y={10} fontSize="7.5" fontFamily="Inter, sans-serif"
        fill={accent} opacity="0.6">User Action</text>
      <rect x={W - 138} y={15} width={9} height={9} rx={2} fill={warm} opacity="0.35" />
      <text x={W - 125} y={23} fontSize="7.5" fontFamily="Inter, sans-serif"
        fill="#7A3020" opacity="0.7">Design Signal</text>

      {/* Connector spine */}
      <line
        x1={colW * 0.5} y1={headerY}
        x2={colW * (cols - 0.5)} y2={headerY}
        stroke={accent} strokeWidth="1" strokeOpacity="0.14" strokeDasharray="3,3"
      />

      {/* Row separator */}
      <line
        x1={6} y1={insightY - 8}
        x2={W - 4} y2={insightY - 8}
        stroke={accent} strokeWidth="0.5" strokeOpacity="0.12"
      />

      {stages.map((s, i) => {
        const cx = colW * (i + 0.5)
        const bx = colW * i + 7
        const bw = colW - 14
        return (
          <g key={s.n}>
            <circle cx={cx} cy={headerY} r={11} fill={accent} opacity="0.85" />
            <text x={cx} y={headerY + 4}
              textAnchor="middle" fontSize="8" fontFamily="Inter, sans-serif"
              fontWeight="700" fill="white">
              {s.n}
            </text>
            {s.title.map((line, li) => (
              <text key={li} x={cx} y={headerY + 20 + li * 11}
                textAnchor="middle" fontSize="8.5"
                fontFamily="Inter, sans-serif" fontWeight="600" fill={accent}>
                {line}
              </text>
            ))}
            <rect x={bx} y={actionY} width={bw} height={actionH}
              rx={5} fill={glow} opacity="0.22" />
            {s.action.map((line, li) => (
              <text key={li} x={cx} y={actionY + 22 + li * 12}
                textAnchor="middle" fontSize="8.5"
                fontFamily="Inter, sans-serif" fontWeight="500" fill={accent}>
                {line}
              </text>
            ))}
            <rect x={bx} y={insightY} width={bw} height={insightH}
              rx={5} fill={warm} opacity="0.12" />
            {s.insight.map((line, li) => (
              <text key={li} x={cx} y={insightY + 20 + li * 12}
                textAnchor="middle" fontSize="8"
                fontFamily="Inter, sans-serif" fontWeight="400" fill="#7A3020">
                {line}
              </text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════════
   SVG DIAGRAM 4 — SCENARIO STORYBOARD GRID (6-act)
══════════════════════════════════════════════════════════════════ */
function ScenarioStoryboardDiagram() {
  const W = 700, H = 302
  const accent = '#1A5C72', glow = '#7EC8BE', warm = '#E07057'
  const fW = 213, fH = 104, labelH = 24, gX = 13, gY = 10
  const cellH = fH + labelH + gY
  const startX = (W - 3 * fW - 2 * gX) / 2
  const row0Y = (H - 2 * cellH + gY) / 2

  const labels = [
    '01 — Trial & Onboard',
    '02 — First Class',
    '03 — Caregiver Handoff',
    '04 — Sustaining Practice',
    '05 — Social Sharing',
    '06 — Long-term Retention',
  ]

  // Returns SVG group for each scene, with fx/fy as frame top-left
  const renderScene = (idx, fx, fy) => {
    const cx = fx + fW / 2
    switch (idx) {
      case 0: // Trial & Onboard — device + figure
        return (
          <g>
            <rect x={fx+32} y={fy+18} width={66} height={44} rx={4} fill="white" stroke={accent} strokeWidth="1.4" strokeOpacity="0.6" />
            <rect x={fx+36} y={fy+22} width={58} height={32} rx={2} fill={accent} fillOpacity="0.06" />
            <polygon points={`${fx+60},${fy+31} ${fx+60},${fy+44} ${fx+72},${fy+37}`} fill={accent} fillOpacity="0.45" />
            <circle cx={fx+138} cy={fy+29} r={9} fill={glow} fillOpacity="0.65" />
            <rect x={fx+131} y={fy+40} width={14} height={22} rx={3} fill={glow} fillOpacity="0.55" />
          </g>
        )
      case 1: // First Class — adult + child + movement arc
        return (
          <g>
            <circle cx={fx+72} cy={fy+29} r={10} fill={accent} fillOpacity="0.7" />
            <rect x={fx+65} y={fy+41} width={14} height={24} rx={3} fill={accent} fillOpacity="0.6" />
            <circle cx={fx+112} cy={fy+35} r={7} fill={glow} fillOpacity="0.7" />
            <rect x={fx+106} y={fy+44} width={12} height={18} rx={3} fill={glow} fillOpacity="0.6" />
            <path d={`M ${fx+54},${fy+78} Q ${fx+92},${fy+60} ${fx+130},${fy+76}`} fill="none" stroke={warm} strokeWidth="1.5" strokeDasharray="3,2" strokeOpacity="0.55" />
          </g>
        )
      case 2: // Caregiver Handoff — two adults + arrow + child
        return (
          <g>
            <circle cx={fx+46} cy={fy+29} r={9} fill={accent} fillOpacity="0.75" />
            <rect x={fx+39} y={fy+40} width={14} height={22} rx={3} fill={accent} fillOpacity="0.65" />
            <circle cx={fx+162} cy={fy+29} r={9} fill={accent} fillOpacity="0.42" />
            <rect x={fx+155} y={fy+40} width={14} height={22} rx={3} fill={accent} fillOpacity="0.38" />
            <line x1={fx+60} y1={fy+43} x2={fx+148} y2={fy+43} stroke={warm} strokeWidth="1.8" strokeOpacity="0.65" />
            <polygon points={`${fx+151},${fy+43} ${fx+143},${fy+39} ${fx+143},${fy+47}`} fill={warm} fillOpacity="0.65" />
            <circle cx={cx} cy={fy+82} r={6} fill={glow} fillOpacity="0.5" />
            <rect x={cx-5} y={fy+90} width={10} height={12} rx={2} fill={glow} fillOpacity="0.42" />
          </g>
        )
      case 3: // Sustaining Practice — figure + speech bubbles
        return (
          <g>
            <circle cx={fx+66} cy={fy+46} r={10} fill={accent} fillOpacity="0.7" />
            <rect x={fx+59} y={fy+58} width={14} height={24} rx={3} fill={accent} fillOpacity="0.6" />
            <ellipse cx={fx+118} cy={fy+31} rx={21} ry={12} fill={glow} fillOpacity="0.28" />
            <ellipse cx={fx+133} cy={fy+51} rx={17} ry={10} fill={glow} fillOpacity="0.21" />
            <ellipse cx={fx+120} cy={fy+69} rx={15} ry={9} fill={glow} fillOpacity="0.16" />
            <circle cx={fx+111} cy={fy+31} r={2} fill={accent} fillOpacity="0.4" />
            <circle cx={fx+119} cy={fy+31} r={2} fill={accent} fillOpacity="0.4" />
            <circle cx={fx+127} cy={fy+31} r={2} fill={accent} fillOpacity="0.4" />
          </g>
        )
      case 4: // Social Sharing — figure + radiating up
        return (
          <g>
            <circle cx={cx} cy={fy+66} r={10} fill={accent} fillOpacity="0.7" />
            <rect x={cx-7} y={fy+78} width={14} height={22} rx={3} fill={accent} fillOpacity="0.6" />
            <line x1={cx} y1={fy+55} x2={cx} y2={fy+22} stroke={warm} strokeWidth="2" strokeOpacity="0.48" />
            <line x1={cx} y1={fy+57} x2={fx+80} y2={fy+30} stroke={warm} strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1={cx} y1={fy+57} x2={fx+136} y2={fy+30} stroke={warm} strokeWidth="1.5" strokeOpacity="0.4" />
            <circle cx={cx} cy={fy+19} r={6} fill={warm} fillOpacity="0.42" />
            <circle cx={fx+78} cy={fy+27} r={5} fill={warm} fillOpacity="0.32" />
            <circle cx={fx+138} cy={fy+27} r={5} fill={warm} fillOpacity="0.32" />
          </g>
        )
      default: // Long-term Retention — ascending bars + figure + star
        return (
          <g>
            <rect x={fx+28} y={fy+74} width={11} height={22} rx={2} fill={glow} fillOpacity="0.32" />
            <rect x={fx+43} y={fy+62} width={11} height={34} rx={2} fill={glow} fillOpacity="0.42" />
            <rect x={fx+58} y={fy+50} width={11} height={46} rx={2} fill={glow} fillOpacity="0.52" />
            <rect x={fx+73} y={fy+38} width={11} height={58} rx={2} fill={accent} fillOpacity="0.58" />
            <circle cx={fx+148} cy={fy+36} r={10} fill={accent} fillOpacity="0.7" />
            <rect x={fx+141} y={fy+48} width={14} height={24} rx={3} fill={accent} fillOpacity="0.6" />
            <text x={fx+148} y={fy+23} textAnchor="middle" fontSize="15" fill={warm} fillOpacity="0.62">★</text>
          </g>
        )
    }
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      {[0, 1, 2, 3, 4, 5].map(i => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const fx = startX + col * (fW + gX)
        const fy = row0Y + row * cellH
        const frameFill = i % 2 === 0 ? '#EBF5F8' : '#EEF9F7'
        return (
          <g key={i}>
            {/* Frame background */}
            <rect x={fx} y={fy} width={fW} height={fH} rx={7}
              fill={frameFill} stroke={accent} strokeWidth="0.7" strokeOpacity="0.18" />
            {/* Scene illustration */}
            {renderScene(i, fx, fy)}
            {/* Label band */}
            <rect x={fx} y={fy + fH} width={fW} height={labelH} rx={0}
              fill={accent} fillOpacity="0.06" />
            <rect x={fx} y={fy + fH + labelH - 4} width={fW} height={4} rx={0}
              fill={frameFill} />
            <text x={fx + fW / 2} y={fy + fH + 15}
              textAnchor="middle" fontSize="8.5" fontFamily="Inter, sans-serif"
              fontWeight="600" fill={accent} fillOpacity="0.75">
              {labels[i]}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════════
   SVG DIAGRAM 5 — INTERACTION ARCHITECTURE
══════════════════════════════════════════════════════════════════ */
function InteractionArchDiagram() {
  const W = 700, H = 288
  const accent = '#1A5C72', glow = '#7EC8BE', warm = '#E07057'

  const layers = [
    {
      fill: '#1A5C72', textColor: '#fff', labelColor: 'rgba(255,255,255,0.55)',
      category: 'CONTENT ORIGIN',
      title: 'Teacher & Content Layer',
      tags: ['Video classes', 'Assignment feedback', 'Progress review'],
    },
    {
      fill: '#3A9AB8', textColor: '#fff', labelColor: 'rgba(255,255,255,0.55)',
      category: 'MEDIATION LAYER',
      title: 'Parent Enablement Layer',
      tags: ['Guided practice', 'Caregiver handoff flow', 'Parent community'],
    },
    {
      fill: '#C8E8F2', textColor: '#0E3D4D', labelColor: 'rgba(14,61,77,0.5)',
      category: 'EXPERIENCE LAYER',
      title: 'Child Experience Layer',
      tags: ['Class participation', 'Milestone markers', 'Progress signals'],
    },
    {
      fill: '#FDF1EF', textColor: '#7A3020', labelColor: 'rgba(122,48,32,0.5)',
      category: 'RETENTION LAYER',
      title: 'Community & Social Layer',
      tags: ['Progress sharing', 'Peer accountability', 'Group features'],
    },
  ]

  const bX = 22, bW = W - 44, bH = 52, gY = 18
  const totalH = layers.length * bH + (layers.length - 1) * gY
  const startY = (H - totalH) / 2
  // Arrow column sits on the far left, outside the main block text area
  const arrowX = bX + 30

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      {/* Flow label — vertical, right margin */}
      <text
        x={W - 11} y={startY + totalH / 2}
        textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="700"
        fill={accent} fillOpacity="0.35" letterSpacing="0.12em"
        transform={`rotate(90, ${W - 11}, ${startY + totalH / 2})`}>
        INFORMATION FLOW
      </text>

      {layers.map((layer, i) => {
        const by = startY + i * (bH + gY)
        return (
          <g key={i}>
            {/* Block */}
            <rect x={bX} y={by} width={bW} height={bH} rx={7} fill={layer.fill} />

            {/* Category label */}
            <text x={bX + 58} y={by + 17}
              fontSize="7" fontFamily="Inter, sans-serif" fontWeight="700"
              fill={layer.labelColor} letterSpacing="0.1em">
              {layer.category}
            </text>

            {/* Title */}
            <text x={bX + 58} y={by + 35}
              fontSize="11.5" fontFamily="Inter, sans-serif" fontWeight="600"
              fill={layer.textColor}>
              {layer.title}
            </text>

            {/* Tags — right-aligned cluster */}
            {layer.tags.map((tag, ti) => {
              const tx = bX + bW - 388 + ti * 132
              return (
                <g key={ti}>
                  <rect x={tx} y={by + 15} width={122} height={22} rx={4}
                    fill={layer.textColor} fillOpacity="0.12" />
                  <text x={tx + 61} y={by + 30}
                    textAnchor="middle" fontSize="8.5" fontFamily="Inter, sans-serif"
                    fontWeight="500" fill={layer.textColor} fillOpacity="0.85">
                    {tag}
                  </text>
                </g>
              )
            })}

            {/* Arrow to next block — left column, clear and simple */}
            {i < layers.length - 1 && (
              <g>
                {/* Step number badge */}
                <circle cx={arrowX} cy={by + bH + gY / 2} r={8}
                  fill={accent} fillOpacity="0.12" />
                {/* Vertical arrow line */}
                <line
                  x1={arrowX} y1={by + bH + 3}
                  x2={arrowX} y2={by + bH + gY - 4}
                  stroke={accent} strokeWidth="1.5" strokeOpacity="0.4" />
                {/* Arrowhead pointing down */}
                <polygon
                  points={`${arrowX},${by + bH + gY - 2} ${arrowX - 4},${by + bH + gY - 10} ${arrowX + 4},${by + bH + gY - 10}`}
                  fill={accent} fillOpacity="0.45" />
              </g>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════ */
export default function ArtsEducation() {
  return (
    <CaseLayout
      tags={['Arts & Culture', 'Discovery Research', 'Interaction Design']}
      title="Lockdown as Catalyst: Discovery Research for a Performing Arts Organisation's Online School"
      subtitle="In early 2021, as COVID-19 forced institutional closures and compelled performing arts organisations worldwide to digitalise, a Taiwanese organisation asked whether its embodied, presence-dependent pedagogy could exist online at all. A three-month, cross-strait qualitative study — and the interaction design that followed — defined the answer."
      meta={[
        { label: 'Industry', value: 'Performing Arts & Education' },
        { label: 'Methods',  value: 'Contextual Inquiry · Concept Testing · Interaction Design' },
        { label: 'Scope',    value: '19 interviews · 24 concept sessions · Taiwan & mainland China' },
        { label: 'Year',     value: '2021' },
      ]}
      nextCase={{ to: '/cases/luxury-vip-app', title: "The Camera Roll as Wardrobe: Research for a Luxury Fashion Distributor's First Mobile App" }}
    >

      {/* ── SECTION 1: Research Context ── */}
      <FadeIn>
        <h2>The Research Context</h2>
        <p>
          A renowned Taiwanese performing arts organisation with decades of institutional history had never operated
          a digital learning platform. Its pedagogy — rooted in bodily discipline, rhythmic breath, and the sustained
          attention of a physical classroom — was widely understood by practitioners and leadership alike as resistant
          to digital mediation. To extend the practice online risked diluting what made it meaningful.
        </p>
        <p>
          In early 2021, as the COVID-19 pandemic forced sustained institutional closures and accelerated pressure
          for digital access, the organisation commissioned a pre-product discovery study. The question was not "how
          should we build an online school?" — it was prior to that: whether an online school could preserve the
          organisation's educational values, which learner populations it should serve, and what structural principles
          should govern any platform that might result.
        </p>
        <p>
          No product existed. No platform architecture had been decided. This research was upstream of every design
          decision.
        </p>
        <div className="pullquote">
          "The research preceded the product. Its task was to determine what that product should be — and whether
          it should exist at all."
        </div>
      </FadeIn>

      {/* ── SECTION 2: Research Design ── */}
      <FadeIn>
        <h2>Research Design & Scale</h2>
        <p>
          The study was structured in five sequential phases: secondary landscape analysis, internal stakeholder
          discovery, primary contextual inquiry, concept testing, and strategic synthesis. Three user populations
          were investigated — parents practising with young children, experienced adult learners, and lapsed
          participants — across four cities in Taiwan and two in mainland China.
        </p>
        <p>
          Nineteen in-depth interviews were conducted using contextual inquiry methodology: participants were
          engaged in their everyday environments and practice spaces, not removed to a neutral lab setting. A
          further twenty-four structured concept-test sessions used prototype video sequences to evaluate
          responses to specific content formats and interaction patterns across both primary segments.
        </p>

        <DiagramFigure
          title="Research Process: Five Sequential Phases"
          caption="The study advanced from secondary landscape analysis through direct fieldwork to concept testing, ensuring each phase built on confirmed prior findings rather than assumed user needs. Contextual inquiry and concept testing (phases 3–4) constituted the primary empirical work."
        >
          <ResearchProcessDiagram />
        </DiagramFigure>

        <div className="callout">
          <h4>Research Parameters</h4>
          <ul>
            <li>Study period: Three months, early 2021 — conducted during active COVID-19 institutional disruption</li>
            <li>Primary fieldwork: Contextual inquiry across home, practice, and community environments</li>
            <li>Participants: 19 in-depth interviews across parent and adult learner segments</li>
            <li>Concept evaluation: 24 structured video-response sessions across 2 user segments</li>
            <li>Geographic spread: 4 cities in Taiwan (Taipei, New Taipei, Taichung, Kaohsiung) and Suzhou and Shenzhen in mainland China</li>
          </ul>
        </div>
      </FadeIn>

      {/* ── SECTION 3: User Segments & Personas ── */}
      <FadeIn>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '-0.01em' }}>User Segments & Persona Structure</h2>
        <p>
          The research identified two primary segments with meaningfully different product needs. Within the
          parent–child practitioner segment, the central differentiating factors were schedule flexibility and
          the degree to which the parent identified with the practice's pedagogical values — not participation
          history or demographic characteristics. Five positions emerged across this two-axis structure.
        </p>
        <p>
          Among senior learners (長青者) — a segment with whom the organisation had strong existing relationships —
          the differentiating factors were exercise intensity goals and the requirement for precision feedback on
          technique. Three positions emerged. The implications for content depth, interaction format, and community
          design differed substantially across these eight positions.
        </p>

        <DiagramFigure
          title="Persona Positioning: Two-Segment Framework"
          caption="Personas are plotted across two independent axes per segment. Labels A–E denote parent segment positions; F–H denote senior learner (長青者) positions. All identifying information has been removed in accordance with NDA."
        >
          <PersonaMatrixDiagram />
        </DiagramFigure>

        <div className="callout">
          <h4>Persona Summary (Abstracted per NDA)</h4>
          <ul>
            <li><strong>A — Schedule-flexible, high alignment:</strong> Existing practitioner family. Core conversion audience. Most likely to sustain long-term engagement.</li>
            <li><strong>B — Schedule-constrained, high alignment:</strong> Motivated but time-limited. Requires guided asynchronous formats; high risk of guilt-driven lapse without structural support.</li>
            <li><strong>C — Schedule-flexible, moderate alignment:</strong> Geographically dispersed. Values periodic live access; digital participation fills absence between in-person visits.</li>
            <li><strong>D — Schedule-constrained, moderate alignment:</strong> Career-constrained. Async short-format content the only viable format; low community engagement expected.</li>
            <li><strong>E — Schedule-constrained, low alignment:</strong> Functional motivation (child energy management). Weakest retention potential; requires visible, near-term progress signals.</li>
            <li><strong>F — High intensity, high precision need:</strong> Treats online as supplementary physical training. Demands detailed technique correction; rejects generic content.</li>
            <li><strong>G — Low intensity, high precision need:</strong> COVID-vulnerable. Warm, human-mediated onboarding required before self-directed digital participation is viable.</li>
            <li><strong>H — Moderate intensity, low precision need:</strong> High mobility; flexible device use. Values access continuity over format depth.</li>
          </ul>
        </div>
      </FadeIn>

      {/* ── SECTION 4: Scenario Mapping ── */}
      <FadeIn>
        <h2>Scenario Mapping & Journey Structure</h2>
        <p>
          For each primary segment, the research developed scenario storyboards — structured narratives that traced
          a user through a complete arc of platform engagement, from initial contact through to sustained or lapsed
          practice. These scenarios were not prescriptive wireframes; they served to locate the motivational rupture
          points: moments where a user's commitment could either be reinforced by design or quietly lost.
        </p>
        <p>
          For the parent segment, six scenario acts were mapped: initial contact and trial, first-class preparation,
          caregiver handoff (accommodating the rotation of primary carers in the child's practice), sustained
          engagement and peer support, social sharing mechanics, and long-term retention through progress
          visualisation. Each act was grounded in interview findings about where and why participants had previously
          lapsed from physical class attendance.
        </p>

        <DiagramFigure
          title="Parent Segment: Six-Act Journey Map"
          caption="Each column maps one scenario act: the primary user action and the corresponding design signal identified through research. The journey is read left to right, from first contact through to long-term retention. Acts reflect both observed behaviour and validated motivational structure."
        >
          <ParentJourneyDiagram />
        </DiagramFigure>

        <p>
          The senior learner segment (長青者) revealed a distinct onboarding challenge: technology confidence and physical
          safety concerns were primary barriers before any evaluation of content quality could occur. For a
          significant portion of this segment, human-mediated onboarding — via phone or direct chat support —
          was a prerequisite for self-directed platform use. This had direct implications for the organisation's
          staffing and operational model, not only the platform's interaction design.
        </p>
      </FadeIn>

      {/* ── SECTION 5: Design Output ── */}
      <FadeIn>
        <h2>Design Output</h2>
        <p>
          The scenario storyboards produced through field research were not documentation artefacts — they
          became the primary brief for interaction design. Each act in the parent journey map defined a
          discrete interaction moment requiring a specific platform response: what the user needs to experience,
          what the system must enable, and what the design must get right to sustain the arc of engagement.
        </p>
        <p>
          The six-act parent storyboard below represents the design specification derived from research
          synthesis — a structured account of each interaction moment from initial trial through to long-term
          retention, grounded in motivational findings from the field.
        </p>

        <DiagramFigure
          title="Parent Segment: Scenario Storyboard — Six-Act Design Specification"
          caption="Each frame translates one scenario act into a design moment: the user's state, the required platform response, and the interaction design implication. The storyboard reads left to right across two rows, from initial contact through to long-term retention."
        >
          <ScenarioStoryboardDiagram />
        </DiagramFigure>

        <p>
          From the scenario synthesis, three core interaction systems were specified. The teacher and content
          layer provides the instructional foundation — video classes, precision feedback on submitted
          assignments, and progress data. The parent enablement layer mediates that content for in-home
          practice: it includes guided practice sequences, a caregiver handoff flow allowing seamless rotation
          of primary carers without loss of continuity, and a peer community structure for parent-to-parent
          support. The child experience layer delivers class content, milestone markers, and visible progress
          signals. The community and social layer wraps the system, providing the peer visibility and shared
          accountability the research identified as the primary mechanism for sustained motivation.
        </p>

        <DiagramFigure
          title="Interaction Architecture: Four-Layer System Design"
          caption="The four designed interaction layers, ordered by information flow from content origin to retention mechanism. Each layer was specified with its own interaction patterns, content types, and success metrics."
        >
          <InteractionArchDiagram />
        </DiagramFigure>

        <div className="callout">
          <h4>Core Interaction Design Specifications</h4>
          <ul>
            <li><strong>Caregiver handoff flow:</strong> A role-transfer interaction that allows a secondary carer to continue a practice session without a briefing from the primary carer — preserving continuity without adding coordination overhead.</li>
            <li><strong>Parent-guided practice sequences:</strong> In-app facilitation scaffolding for parents during child practice sessions, replacing the absent teacher with structured guidance calibrated to the parent's skill level and the child's current stage.</li>
            <li><strong>Social visibility layer:</strong> Sharing mechanics that surface effort and commitment rather than bare achievement — designed to make progress legible to peers without reducing participants to performance metrics.</li>
            <li><strong>Human-mediated onboarding (senior learner segment · 長青者):</strong> Integration of phone and chat support into the first-use flow, reducing the technology and physical safety barriers identified as the primary entry blockers for this segment before content quality could be evaluated.</li>
          </ul>
        </div>
      </FadeIn>

      {/* ── SECTION 6: Key Findings ── */}
      <FadeIn>
        <h2>Key Findings</h2>
        <p>
          Three findings structured the strategic output of the study.
        </p>
        <p>
          <strong>Motivational continuity, not technical friction, was the primary attrition risk.</strong> Participants
          across both segments could navigate functional digital platforms. What could not be replicated without
          explicit design intervention was the social accountability, shared physical effort, and ambient teacher
          presence that sustained commitment to a physical class. The design problem was not usability — it was
          the engineering of conditions for sustained motivation.
        </p>
        <p>
          <strong>Online access was valued as complementary practice, not as a substitute.</strong> Both segments
          expressed clear resistance to framing online participation as equivalent to in-person learning. Where
          digital access was welcomed, it was additive: filling gaps created by schedule constraints, geography,
          or health circumstances. Positioning the platform as a replacement for the physical institution would
          undermine its credibility with the organisation's existing community.
        </p>
        <p>
          <strong>A parent-enablement layer was structurally necessary.</strong> The research revealed that parents
          were not passive transmission channels for practice content to their children — they were active
          pedagogical agents who required their own guidance materials, co-practice structures, and community
          scaffolding to carry the work home effectively. Designing exclusively for the child's experience would
          fail the segment's actual engagement structure.
        </p>
      </FadeIn>

      {/* ── SECTION 6: Strategic Implications ── */}
      <FadeIn>
        <h2>Strategic Implications</h2>
        <p>
          The research output included a formal media-richness analysis — drawing on Trevino, Daft and Lengel's
          framework — to evaluate which of the organisation's pedagogical values were most sensitive to media
          format, and therefore which learning contexts required synchronous, high-bandwidth interaction versus
          those that could be sustained through asynchronous delivery. This analysis structured the platform's
          content architecture recommendations and informed decisions about where live instruction was non-negotiable.
        </p>
        <p>
          The core strategic recommendation was: design for continuity, not conversion. The platform's primary
          success metric should not be new user acquisition, but sustained practice — measured through return
          frequency, assignment completion, and community participation. Achieving this required investing in
          interaction patterns — peer visibility, ritual entry points, progress markers, community accountability
          structures — that would feel unfamiliar to a conventional e-learning product team but were essential
          to reproducing the motivational architecture of a physical class.
        </p>
        <p>
          The findings also informed a recommendation on institutional positioning: the online school should
          launch not as an independent digital product but as an extension of the physical institution —
          retaining its identity, visual language, and community ties, rather than adopting the conventions
          of the broader e-learning market. Brand continuity was itself a retention mechanism.
        </p>
        <p className="nda-note">
          Organisation identity, participant details, and platform-specific metrics have been anonymised in
          accordance with NDA. Research methods, findings, and strategic frameworks are presented at a level
          of abstraction appropriate for portfolio review. Available to discuss in full detail in conversation.
        </p>
      </FadeIn>

    </CaseLayout>
  )
}
