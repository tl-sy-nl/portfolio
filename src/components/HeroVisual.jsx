import { useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────
//  Duck-Rabbit pixel art — Wittgenstein's philosophical ambiguous figure.
//  Pixel grid — 24 cols × 10 rows:
//  • 1 = body cell    • 2 = eye (coral accent)    • 0 = empty
//
//  Reading as DUCK  → beak opens left (rows 5-7, cols 1-7)
//  Reading as RABBIT → two ears rise upper-right (rows 0-2, cols 17 & 20-21)
//
//  Both ears connect to the head at row 3 with a gap between them (cols 18-19).
//  The beak V: upper bill (row 5) + open gap with beak tip (row 6) + lower bill (row 7).
// ─────────────────────────────────────────────────────────────────────
const DUCK_RABBIT = [
  //0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0 ], // 0 ear tips (two distinct points)
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0 ], // 1 ears
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0 ], // 2 ears widen
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ], // 3 head top — ears merge in
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ], // 4 upper head
  [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ], // 5 upper bill (connected to body at col 8)
  [ 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ], // 6 beak open + eye at col 11
  [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ], // 7 lower bill (connected to body at col 8)
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 8 lower body
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 9 chin
]

const COLS = 24
const ROWS = 10
const CELL = 12       // px per pixel cell — larger for clearer silhouette
const RADIUS = 2.2    // corner radius of each pixel cell

export default function HeroVisual() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
      return { W, H }
    }

    let { W, H } = resize()

    // ── Organic looping background curves (like the 2018 portfolio texture) ──
    // Each loop: a closed random bezier path, thin stroke, very low opacity
    const LOOP_COUNT = 18
    const loops = Array.from({ length: LOOP_COUNT }, () => {
      const cx = Math.random() * W
      const cy = Math.random() * H
      const scale = 24 + Math.random() * 60
      const pts = Array.from({ length: 4 + Math.floor(Math.random() * 3) }, () => ({
        x: cx + (Math.random() - 0.5) * scale * 2,
        y: cy + (Math.random() - 0.5) * scale * 1.2,
        cp1x: cx + (Math.random() - 0.5) * scale * 3,
        cp1y: cy + (Math.random() - 0.5) * scale * 2,
        cp2x: cx + (Math.random() - 0.5) * scale * 3,
        cp2y: cy + (Math.random() - 0.5) * scale * 2,
      }))
      return { pts, alpha: 0.07 + Math.random() * 0.06, phase: Math.random() * Math.PI * 2 }
    })

    // ── Pixel reveal animation state ──
    // Collect all active pixels sorted by distance from center for reveal order
    const pixels = []
    DUCK_RABBIT.forEach((row, ri) => {
      row.forEach((val, ci) => {
        if (val > 0) pixels.push({ ri, ci, val })
      })
    })
    // Sort: eye first, then by distance from center of creature, random-ish
    const bodyCenter = { ci: 12, ri: 5 }
    pixels.sort((a, b) => {
      const da = Math.hypot(a.ci - bodyCenter.ci, a.ri - bodyCenter.ri)
      const db = Math.hypot(b.ci - bodyCenter.ci, b.ri - bodyCenter.ri)
      return da - db + (Math.random() - 0.5) * 1.5
    })

    let t = 0
    let revealT = 0   // 0→1 over ~1.5 seconds
    let frame

    const drawPixelRect = (x, y, fill, stroke, alpha = 1) => {
      ctx.beginPath()
      ctx.roundRect(x, y, CELL - 1, CELL - 1, RADIUS)
      ctx.fillStyle = fill
      ctx.globalAlpha = alpha
      ctx.fill()
      ctx.strokeStyle = stroke
      ctx.lineWidth = 0.8
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.008
      revealT = Math.min(1, revealT + 0.012)

      // ── Background gradient (creamy sea surface) ──
      const bg = ctx.createLinearGradient(0, 0, W, H)
      bg.addColorStop(0, '#EBF4F4')
      bg.addColorStop(0.6, '#DFF0EE')
      bg.addColorStop(1, '#C8E6E4')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // ── Organic looping background texture ──
      loops.forEach(loop => {
        const pts = loop.pts
        ctx.beginPath()
        ctx.moveTo(pts[0].x, pts[0].y)
        for (let i = 0; i < pts.length; i++) {
          const next = pts[(i + 1) % pts.length]
          ctx.bezierCurveTo(pts[i].cp1x, pts[i].cp1y, pts[i].cp2x, pts[i].cp2y, next.x, next.y)
        }
        ctx.closePath()
        ctx.strokeStyle = `rgba(26, 92, 114, ${loop.alpha})`
        ctx.lineWidth = 0.9
        ctx.stroke()
      })

      // ── Duck-rabbit pixel art ──
      // Center the creature in the canvas with a gentle breathing scale
      const artW = COLS * CELL
      const artH = ROWS * CELL
      const offsetX = Math.floor((W - artW) / 2)
      const offsetY = Math.floor((H - artH) / 2)
      const breathe = 1 + Math.sin(t * 0.8) * 0.012

      ctx.save()
      ctx.translate(W / 2, H / 2)
      ctx.scale(breathe, breathe)
      ctx.translate(-W / 2, -H / 2)

      // How many pixels to show (based on revealT)
      const showCount = Math.ceil(revealT * pixels.length)

      pixels.slice(0, showCount).forEach(({ ri, ci, val }, idx) => {
        const px = offsetX + ci * CELL
        const py = offsetY + ri * CELL

        // Fade in each pixel sequentially
        const pixelReveal = Math.max(0, Math.min(1, (revealT * pixels.length - idx) * 2))

        if (val === 2) {
          // Eye pixel — coral accent, filled solid
          drawPixelRect(px, py, 'rgba(224, 112, 87, 0.9)', 'rgba(224, 112, 87, 0.6)', pixelReveal)
        } else {
          // Body pixel — ocean teal, visible fill with strong border
          drawPixelRect(
            px, py,
            'rgba(26, 92, 114, 0.18)',
            'rgba(26, 92, 114, 0.70)',
            pixelReveal,
          )
        }
      })

      ctx.restore()

      // ── Labels ──
      if (revealT > 0.85) {
        const labelAlpha = (revealT - 0.85) / 0.15
        const artCenterX = offsetX + artW / 2
        const labelY = offsetY + artH + 16

        ctx.save()
        ctx.globalAlpha = labelAlpha * 0.5
        ctx.font = '400 9px Inter, sans-serif'
        ctx.fillStyle = '#1A5C72'
        ctx.textAlign = 'center'
        ctx.letterSpacing = '0.1em'
        ctx.fillText('duck? / rabbit?', artCenterX, labelY)
        ctx.restore()
      }

      frame = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      const dims = resize()
      W = dims.W
      H = dims.H
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        borderRadius: 'var(--r-lg)',
      }}
    />
  )
}
