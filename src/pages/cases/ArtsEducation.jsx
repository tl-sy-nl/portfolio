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
      subtitle="A pre-product discovery study into whether a presence-dependent performing arts pedagogy could survive digital translation — and what it would take to ensure it remained, online, unmistakably itself."
      meta={[
        { label: 'Industry', value: 'Performing Arts & Education' },
        { label: 'Methods',  value: 'Contextual Inquiry · Concept Testing · Interaction Design' },
        { label: 'Scope',    value: '19 interviews · 24 concept sessions · Taiwan & mainland China' },
        { label: 'Year',     value: '2021' },
      ]}
      nextCase={{ to: '/cases/luxury-vip-app', title: "The Camera Roll as Wardrobe: Research for a Luxury Fashion Distributor's First Mobile App" }}
    >

      {/* ── SECTION 1: Opening ── */}
      <FadeIn>
        <h2>What the Room Was Doing</h2>
        <p>There are things a teacher does with her body that no screen can carry. The slight adjustment of a student's posture — a hand on the shoulder, a shift of weight demonstrated in real time. The rhythm of breath shared across a room. The particular stillness that falls over a group of children when the practice deepens and they stop needing to be told what comes next. These are the conditions under which a certain kind of learning happens. They are also the first things lost when you move that learning online.</p>
        <p>A leading Taiwanese performing arts organisation had spent decades building its educational practice on exactly these conditions. When COVID-19 closed its doors in early 2021, the question was not whether to go digital — the pressure was already there — but whether anything worth preserving could survive the translation. The organisation's leadership understood the risk clearly: this was a practice that lived in the body, taught through presence, and sustained by the quiet authority of a shared physical space.</p>
        <p>There was a second difficulty, less obvious but equally defining. The organisation's audience — parents, adult practitioners, long-time devotees of the art form — came with an expectation of aesthetic seriousness. They had chosen this institution precisely because it did not look or feel like mass-market education. But online learning, especially for children, demands attention management: animation, interactivity, sensory variety. Every tool designed to hold a child's focus on a screen risks undermining the very quality that made the institution worth attending. The challenge was not just to put the practice online. It was to do so without betraying what the practice meant.</p>
      </FadeIn>

      {/* ── SECTION 2: Research Design ── */}
      <FadeIn>
        <h2>Two Populations, Two Kinds of Doubt</h2>
        <p>The research was structured around two user groups whose concerns had almost nothing in common. Families — parents bringing young children into the practice — were asking a practical question: could the discipline and attentiveness that a physical class demanded be sustained at home, with a parent as the stand-in for the teacher? Senior practitioners (長青者), a segment the organisation had cultivated for years, were asking something quieter and more personal: whether this body — slower now, more cautious — could still find its way into the practice through a screen.</p>
        <p>Nineteen in-depth interviews were conducted in participants' homes and practice spaces — not in neutral settings — across four cities in Taiwan and two in mainland China. That decision to enter people's actual environments turned out to matter. In the apartments of northern Taiwan, living rooms are small and often crowded; movements that involve jumping or running risk disturbing downstairs neighbours. In Taichung and Kaohsiung, families tended to have more space — children could run, houses had play rooms, the floor was theirs to use. The home, it became clear, was not a neutral backdrop for practice. It was a site with its own constraints, and those constraints were not evenly distributed.</p>
      </FadeIn>

      <FadeIn>
        <DiagramFigure
          title="Research Process: Five Sequential Phases"
          caption="The study advanced from secondary landscape analysis through direct fieldwork to concept testing, ensuring each phase built on confirmed prior findings rather than assumed user needs."
        >
          <ResearchProcessDiagram />
        </DiagramFigure>
      </FadeIn>

      {/* ── SECTION 3: What We Found ── */}
      <FadeIn>
        <h2>What the Research Found</h2>
        <p>The senior practitioner segment presented a barrier the research had not anticipated. It was not, on examination, a technology problem. These were people who managed smartphones and messaging apps without difficulty. What they expressed, when asked to imagine practising alone in front of a screen, was something closer to vulnerability. Movement practice at this age involves a real relationship with physical risk — a misstep, an overextension, a fall. In a physical class, the teacher sees. On a screen, no one sees. For a meaningful portion of this segment, self-directed digital participation was not viable until that concern had been addressed directly — not by a help page, but by a person. Human-mediated onboarding was not a workaround. It was a prerequisite.</p>
        <p>There was also a deeper motivation at stake. The practice is not a weekly event — it is a physical discipline whose benefits depend on regularity. For senior practitioners, the online platform offered something the physical class alone could not: a way to maintain strength and movement between sessions, at home, on their own terms. The goal was not to replace the studio. It was to extend the practice into the days in between.</p>
        <p>The parent segment produced a finding equally unexpected. Parents had been assumed to be facilitators — adults who would set up the device, press play, and step back. The research showed something different. At home, with no teacher present, the parent becomes the pedagogical environment. They are the ones who hold the space, model the attention, and carry the practice across sessions. Designing for the child's experience alone would have failed the segment's actual structure. The platform needed to teach the parents how to be in the room — so that children, at home, could still encounter the practice as something artistically serious, not just something to watch.</p>
        <p>The third finding was the one that reframed the design problem entirely. The organisation's audience had not chosen it for convenience. They had chosen it for what it stood for — a kind of seriousness about the art form that set it apart from the broader market of children's enrichment activities. Online learning, particularly for young children, tends to compensate for lost physical presence with stimulation: faster edits, brighter colours, interactive prompts designed to recapture attention every few seconds. Each of these tools works against the quality the organisation had spent decades building. The design challenge was not to make the platform engaging. It was to make it engaging in a way that remained, unmistakably, itself.</p>
      </FadeIn>

      <FadeIn>
        <DiagramFigure
          title="Persona Positioning: Two-Segment Framework"
          caption="Personas plotted across two independent axes per segment. Labels A–E denote parent segment positions; F–H denote senior learner (長青者) positions. All identifying information has been removed per NDA."
        >
          <PersonaMatrixDiagram />
        </DiagramFigure>
      </FadeIn>

      {/* ── SECTION 4: What the Research Made Possible ── */}
      <FadeIn>
        <h2>What the Research Made Possible</h2>
        <p>The conventional answer to declining engagement in online learning is stimulation — faster feedback loops, reward mechanics, streaks and badges designed to bring users back. For most platforms, this is reasonable. For this organisation, it would have been a quiet act of self-destruction. Its audience had not chosen it for convenience or gamified motivation. They had chosen it for what the practice demanded of them: patience, repetition, the slow accumulation of something that cannot be rushed. Designing reward mechanisms into the platform would have spoken a language the institution had never used — and its most loyal users would have heard the difference immediately.</p>
        <p>What the research made possible was a different kind of answer. The onboarding flow for senior practitioners was built around a human conversation before any self-directed use — because the barrier was not technology, but trust. The parent experience was designed as a parallel learning journey, not a management interface — because the barrier was not access, but confidence in the room. The platform's visual and tonal language stayed close to the physical institution: unhurried, serious, aesthetically considered.</p>
        <p>The outcome was a platform designed to sit alongside the physical school, not to replace it. During COVID, it became the infrastructure that held the community together — online check-ins, shared replay sessions, the small exchanges that kept people connected to the practice and to each other across the weeks when the studio was closed. When the doors reopened, the platform remained: not as an emergency measure, but as the seamless extension of something that now ran across both worlds.</p>
        <p>The research had not found a way to make the practice easier to deliver online. It had found a way to ensure that whatever was delivered online was still, recognisably, the same practice. That distinction was the design brief.</p>
      </FadeIn>

      <FadeIn>
        <DiagramFigure
          title="Interaction Architecture: Four-Layer System Design"
          caption="The four designed interaction layers, from content origin to retention mechanism — built to extend the physical institution rather than replicate it."
        >
          <InteractionArchDiagram />
        </DiagramFigure>
      </FadeIn>

      <FadeIn>
        <p className="nda-note">Organisation identity, participant details, and platform-specific metrics have been anonymised per NDA. Research methods, findings, and strategic frameworks are presented at a level of abstraction appropriate for portfolio review. Available to discuss in full detail — please reach out at tunglin.sy@gmail.com.</p>
      </FadeIn>

    </CaseLayout>
  )
}
