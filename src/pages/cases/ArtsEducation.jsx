import { useState } from 'react'
import CaseLayout from '../../components/CaseLayout'

/* ══════════════════════════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════════════════════════ */
function Lightbox({ title, caption, onClose, children }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="lightbox-overlay"
      onClick={onClose}
    >
      <div
        className="lightbox-content"
        onClick={e => e.stopPropagation()}
      >
        <div className="lightbox-header">
          <div>
            <p className="lightbox-label">
              Research Diagram
            </p>
            <h3 className="lightbox-title">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close diagram"
            className="lightbox-close"
          >
            ×
          </button>
        </div>
        {children}
        {caption && (
          <p className="lightbox-caption">
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
    <figure className="diagram-figure">
      <div
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(true)}
        className="diagram-figure__container"
        data-hovered={hovered}
      >
        {children}
        <p className="diagram-figure__hint">
          Click to enlarge ↗
        </p>
      </div>
      {caption && (
        <figcaption className="diagram-figure__caption">
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
      id: '05', title: ['Co-Design', 'Workshop'],
      detail: ['n = 8 participants', 'Scenario building'],
      fill: '#2A8D7E', text: '#ffffff', bold: true,
    },
    {
      id: '06', title: ['Strategic', 'Synthesis'],
      detail: ['Personas ·', 'Scenarios'],
      fill: '#1A5C72', text: '#ffffff',
    },
  ]

  const boxW = 95, boxH = 112
  const arrowZone = 17
  const totalW = phases.length * boxW + (phases.length - 1) * arrowZone
  const startX = (W - totalW) / 2
  const boxY = (H - boxH) / 2

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="svg-responsive" role="img" aria-label="Research process diagram showing four phases: secondary research, contextual inquiry, concept testing, and co-design">
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
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="svg-responsive" role="img" aria-label="Persona matrix diagram comparing family profiles by practice engagement and parental involvement">
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
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="svg-responsive" role="img" aria-label="Parent journey diagram mapping daily practice routines across family contexts">
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
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="svg-responsive" role="img" aria-label="Scenario storyboard showing six frames of a parent-child practice session">
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
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="svg-responsive" role="img" aria-label="Interaction architecture diagram showing platform modules and content flow">
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
      dimension="Practice sustains"
      title="Lockdown as Catalyst: Discovery Research for a Performing Arts Organisation's Online School"
      subtitle="What conditions are required for embodied practices to remain meaningful when translated into digital environments?"
      meta={[
        { label: 'Industry', value: 'Performing Arts & Education' },
        { label: 'Role', value: 'Senior UX Researcher — discovery research lead, co-design workshop facilitator' },
        { label: 'Methods', value: 'Contextual Inquiry · Co-Design Workshop · Concept Testing · Interaction Design' },
        { label: 'Scope', value: '19 interviews · 24 concept sessions · Taiwan & mainland China' },
        { label: 'Year', value: '2021' },
      ]}
    >

      {/* ── OVERVIEW ── */}
      <p>
        This project investigates what happens when a presence-dependent practice is translated into a digital environment.
      </p>
      <p>
        Conducted for a performing arts organisation transitioning to an online school during COVID-19, the research examines how embodied pedagogy is reconfigured when relocated from shared physical space to the home.
      </p>
      <p>
        Rather than focusing on platform features, the study analyzes how spatial, relational, and social conditions shape the possibility of learning.
      </p>

      {/* ── RESEARCH FRAMING ── */}
      <h2>Research Framing</h2>

      <div className="callout">
        <h4>Research Question</h4>
        <p className="case-body-sm">
          What conditions are required for embodied practices to remain meaningful when translated into digital environments?
        </p>
      </div>

      <div className="callout">
        <h4>Method</h4>
        <p className="case-body-sm">
          Constructive Design Research combining contextual inquiry (n=19), co-design workshops, and concept testing (n=24) across Taiwan and mainland China.
        </p>
      </div>

      <div className="callout">
        <h4>Contribution</h4>
        <p className="case-body-sm">
          The project identifies three shifts that occur when embodied practices move online: (1) Unit shift — from individual learner to household configuration. (2) Loss shift — from technical fidelity to relational absence. (3) Value tension — between engagement-driven design and practice authenticity.
        </p>
      </div>

      <DiagramFigure
        title="Research Process: Six Sequential Phases"
        caption="The study advanced through six phases — from secondary landscape analysis through direct fieldwork and co-design workshops to concept testing — each phase building on confirmed prior findings rather than assumed user needs."
      >
        <ResearchProcessDiagram />
      </DiagramFigure>

      {/* ── FROM PRACTICE TO SYSTEM ── */}
      <h2>From Practice to System</h2>

      <p>
        The research shows that online learning is not a direct translation of physical practice, but a reconfiguration of conditions.
      </p>
      <p>
        For children, learning is not determined solely by the platform, but by the interaction between parent, space, and device. The effective unit of design becomes the household, not the individual user.
      </p>
      <p>
        For senior practitioners, the primary barrier is not technological access but the absence of relational support — particularly the presence of a teacher who observes, guides, and provides care.
      </p>
      <p>
        These findings shift the design problem from interface design to system configuration.
      </p>

      <DiagramFigure
        title="Persona Positioning: Two-Segment Framework"
        caption="Personas plotted across two independent axes per segment. Labels A–E denote parent segment positions (families with children aged 3–6); F–H denote senior learner (長青者) positions. All identifying information has been removed per NDA."
      >
        <PersonaMatrixDiagram />
      </DiagramFigure>

      {/* ── SYSTEM CONDITIONS ── */}
      <h2>System Conditions</h2>

      <div className="callout">
        <h4>Household as Infrastructure</h4>
        <p className="case-body-sm">
          Learning depends on spatial constraints, device setups, and caregiver involvement. These conditions are unevenly distributed and shape what forms of practice are possible.
        </p>
      </div>

      <div className="callout">
        <h4>Relational Mediation</h4>
        <p className="case-body-sm">
          Presence cannot be replicated through technical fidelity alone. Human onboarding and ongoing support become core design requirements.
        </p>
      </div>

      <div className="callout">
        <h4>Aesthetic Constraint</h4>
        <p className="case-body-sm">
          The organisation&apos;s refusal of stimulation-driven design creates a tension with conventional online engagement strategies. Designing for attention risks undermining the practice itself. Through our contextual inquiry, it became clear that this refusal was not a lack of technical fluency — it was an implicit aesthetic position. The organisation was protecting the instability inherent in embodied practice: the unpredictability of a child&apos;s movement, the emergence of expression that cannot be scripted or gamified.
        </p>
        <p className="case-body-sm case-body-sm--spaced">
          This created a critical friction for the design: what conventional platforms eliminate — uncertainty, delay, bodily negotiation — was precisely what made the practice meaningful. The outcome of a session could not be designed in advance; it arose through the body&apos;s encounter with space, rhythm, and another person&apos;s presence.
        </p>
      </div>

      <DiagramFigure
        title="Parent Journey: Six-Stage Framework"
        caption="The parent journey mapped across six stages — from trial and onboarding through long-term retention — showing how care labour and spatial constraints shape each transition."
      >
        <ParentJourneyDiagram />
      </DiagramFigure>

      {/* ── DESIGN IMPLICATIONS ── */}
      <h2>Design Implications</h2>

      <p>The research informed a reframing of the platform:</p>

      <div className="callout">
        <h4>From Child-Centered Interface to Parent-Child Learning System</h4>
        <p className="case-body-sm">
          The unit of design is not the individual child but the household — including the parent&apos;s embodied competence and the room&apos;s spatial constraints.
        </p>
      </div>

      <div className="callout">
        <h4>From Self-Service Onboarding to Human-Mediated Initiation</h4>
        <p className="case-body-sm">
          Senior practitioners need a human point of contact before any self-directed use. Onboarding begins with a person, not a platform.
        </p>
      </div>

      <div className="callout">
        <h4>From Engagement Optimization to Preservation of Practice Values</h4>
        <p className="case-body-sm">
          Rather than increasing accessibility through simplification, the platform must support the conditions under which the practice remains recognizable.
        </p>
      </div>

      <DiagramFigure
        title="Scenario Storyboard: Six-Act Framework"
        caption="Six scenarios mapped from the parent journey — showing how household configurations, device ecologies, and caregiver transitions shape the practice session across different family contexts."
      >
        <ScenarioStoryboardDiagram />
      </DiagramFigure>

      {/* ── KEY INSIGHTS ── */}
      <h2>Key Insights</h2>

      <div className="callout">
        <h4>Learning is Distributed</h4>
        <p className="case-body-sm">
          Embodied learning emerges from interactions between bodies, spaces, and tools, rather than from individual users alone.
        </p>
      </div>

      <div className="callout">
        <h4>Not All Losses Are Technical</h4>
        <p className="case-body-sm">
          The primary challenge of digital translation lies in relational and spatial conditions, not interface quality.
        </p>
      </div>

      <div className="callout">
        <h4>Access is Structured by Environment</h4>
        <p className="case-body-sm">
          Material conditions such as housing, time, and care labor shape participation in ways the platform cannot resolve.
        </p>
      </div>

      <DiagramFigure
        title="Interaction Architecture: Four-Layer System Design"
        caption="The four designed interaction layers, from content origin to retention mechanism — built to extend the physical institution rather than replicate it."
      >
        <InteractionArchDiagram />
      </DiagramFigure>

      {/* ── EVALUATION ── */}
      <h2>Evaluation</h2>

      <p>
        If extended as a PhD research project, this work would be evaluated through a combination of comparative deployment, longitudinal observation, and qualitative analysis.
      </p>
      <p>The evaluation focuses on:</p>

      <div className="callout">
        <h4>Practice Continuity</h4>
        <p className="case-body-sm">
          Whether participants sustain embodied practice over time in home environments.
        </p>
      </div>

      <div className="callout">
        <h4>Relational Support</h4>
        <p className="case-body-sm">
          How different onboarding and support models affect engagement and retention.
        </p>
      </div>

      <div className="callout">
        <h4>Contextual Variability</h4>
        <p className="case-body-sm">
          How spatial and household conditions influence outcomes across user groups.
        </p>
      </div>

      {/* ── RELEVANCE TO ONGOING RESEARCH ── */}
      <h2>Relevance to Ongoing Research</h2>

      <p>
        This project contributes to a broader research interest in how systems reconfigure embodied practices when translated into digital or infrastructural contexts.
      </p>
      <p>
        While digital platforms often optimize for efficiency, accessibility, and engagement, this work shows that such optimizations can undermine the conditions that make practices meaningful. This reflects a broader pattern related to rebound effects, where improving system performance may reduce awareness, alter behavior, or shift burdens elsewhere.
      </p>
      <p>
        The project suggests that design should not only improve system efficiency, but also make visible the conditions it cannot reproduce — particularly those related to embodiment, care, and spatial context.
      </p>

      <p className="nda-note">Organisation identity, participant details, and platform-specific metrics have been anonymised per NDA. Research methods, findings, and strategic frameworks are presented at a level of abstraction appropriate for portfolio review. Available to discuss in full detail — please reach out at tunglin.sy@gmail.com.</p>

    </CaseLayout>
  )
}
