import { useEffect, useRef } from 'react'

// ── Seeded LCG pseudo-random ──────────────────────────────────────────────────
function makePRNG(seed) {
  let s = seed >>> 0
  return () => {
    s = ((Math.imul(s, 1664525) + 1013904223) >>> 0)
    return s / 4294967296
  }
}

// ── Pre-compute organic shape offsets for a bubble ────────────────────────────
// Larger bubbles are more irregular (lower surface tension at depth)
function makeBubbleShape(r, rng) {
  const jitter = Math.min(0.015 + (r / 35) * 0.055, 0.07)
  const N = Math.max(7, Math.floor(r * 0.65 + 6))
  const offsets = Array.from({ length: N }, () => 1 + (rng() - 0.5) * jitter * 2)
  return { N, offsets }
}

// ── Trace smooth organic path ─────────────────────────────────────────────────
// scale: optional inner-ring factor (e.g. 0.80 for inner rim)
function traceBubblePath(ctx, x, y, r, shape, scale = 1.0) {
  const { N, offsets } = shape
  const pts = offsets.map((o, i) => {
    const angle = (i / N) * Math.PI * 2
    const nr = r * o * scale
    return [x + nr * Math.cos(angle), y + nr * Math.sin(angle)]
  })
  ctx.beginPath()
  ctx.moveTo(
    (pts[0][0] + pts[N - 1][0]) / 2,
    (pts[0][1] + pts[N - 1][1]) / 2
  )
  for (let i = 0; i < N; i++) {
    const p = pts[i]
    const q = pts[(i + 1) % N]
    ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2)
  }
  ctx.closePath()
}

// ── Build bubble data ─────────────────────────────────────────────────────────
function buildBubbles(W, H) {
  const rng = makePRNG(0xABCD42)
  const bubbles = []

  for (let i = 0; i < 65; i++) {
    const r = 2 + rng() * rng() * 34   // right-skewed: mostly small, few large

    // Iridescent hue — mostly cool ocean tones, occasional warm/pink shimmer
    const roll = rng()
    let hue
    if      (roll < 0.38) hue = 175 + rng() * 28   // teal-cyan   (dominant)
    else if (roll < 0.62) hue = 205 + rng() * 38   // blue
    else if (roll < 0.78) hue = 270 + rng() * 55   // violet-pink (iridescent)
    else if (roll < 0.91) hue = 145 + rng() * 24   // sea-green
    else                  hue =  20 + rng() * 40   // warm amber  (rare)

    // Saturation varies — some bubbles barely tinted, others vivid
    const sat = 35 + rng() * 45

    const x0 = rng() * W
    // Large bubbles sway ≤5% of canvas width; small bubbles can sway a bit more
    const maxAmp = W * 0.05
    const amp = Math.min((3 + rng() * 12) * Math.sqrt(r / 18), maxAmp)
    bubbles.push({
      x:     x0,
      x0,
      y:     -r + rng() * (H + r * 2),
      r,
      vy:    (0.20 + rng() * 1.10) * (0.5 + r / 40),
      phase: rng() * Math.PI * 2,
      freq:  0.006 + rng() * 0.016,
      amp,
      opa:   0.08 + rng() * 0.20,
      hl:    0.50 + rng() * 0.50,
      hue,
      sat,
      shape: makeBubbleShape(r, rng),
    })
  }
  return bubbles
}

// ── Draw a single organic bubble ──────────────────────────────────────────────
function drawBubble(ctx, x, y, r, opa, hl, hue, sat, shape) {
  // 1. Translucent body — tinted with the bubble's iridescent color
  traceBubblePath(ctx, x, y, r, shape)
  ctx.fillStyle = `hsla(${hue}, ${sat}%, 70%, ${(opa * 0.30).toFixed(3)})`
  ctx.fill()

  // 2. Outer rim — color of light refracting through thin bubble film
  traceBubblePath(ctx, x, y, r, shape)
  const rimOpa = Math.min(opa * 3.2, 0.80)
  ctx.strokeStyle = `hsla(${hue}, ${sat + 15}%, 88%, ${rimOpa.toFixed(3)})`
  ctx.lineWidth   = Math.max(0.45, r * 0.058)
  // Glow on the rim — colored light emanating from the film
  ctx.shadowBlur  = Math.max(3, r * 0.35)
  ctx.shadowColor = `hsla(${hue}, 80%, 78%, ${(opa * 1.2).toFixed(3)})`
  ctx.stroke()
  ctx.shadowBlur  = 0

  // 3. Inner rim — same organic shape, scaled down (gives thickness/depth)
  if (r > 5) {
    traceBubblePath(ctx, x, y, r, shape, 0.80)
    ctx.strokeStyle = `hsla(${hue}, ${sat}%, 80%, ${(opa * 0.85).toFixed(3)})`
    ctx.lineWidth   = 0.4
    ctx.stroke()
  }

  // 4. Specular highlight — upper-left crescent (sunlight from above the water)
  const hx = x - r * 0.30
  const hy = y - r * 0.32
  const hr = r * 0.42
  const hGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, hr)
  hGrad.addColorStop(0,    `rgba(255, 255, 255, ${(hl * 0.82).toFixed(3)})`)
  hGrad.addColorStop(0.50, `rgba(235, 252, 255, ${(hl * 0.22).toFixed(3)})`)
  hGrad.addColorStop(1,    `rgba(255, 255, 255, 0)`)
  ctx.beginPath()
  ctx.arc(hx, hy, hr, 0, Math.PI * 2)
  ctx.fillStyle = hGrad
  ctx.fill()

  // 5. Secondary colored reflection — lower-right (ambient bounce)
  if (r > 8) {
    ctx.beginPath()
    ctx.arc(x + r * 0.26, y + r * 0.36, r * 0.18, 0, Math.PI * 2)
    ctx.fillStyle = `hsla(${hue}, ${sat}%, 75%, ${(opa * 0.58).toFixed(3)})`
    ctx.fill()
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function TopographicHero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let rafId   = null
    let bubbles = []
    let W = 0, H = 0
    let tick = 0
    const rng = makePRNG(0xDEADBEEF)

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      bubbles = buildBubbles(W, H)
    }

    function render() {
      ctx.clearRect(0, 0, W, H)

      // ── Background: deep ocean ──────────────────────────────────────────────
      const bg = ctx.createLinearGradient(0, 0, 0, H)
      bg.addColorStop(0,    '#062434')
      bg.addColorStop(0.45, '#03121F')
      bg.addColorStop(1,    '#010810')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Diffuse surface light — caustic shimmer from above
      const caustic = ctx.createRadialGradient(
        W * 0.52, -H * 0.08, 0,
        W * 0.52,  H * 0.52, W * 0.82
      )
      caustic.addColorStop(0,    'rgba(16, 88, 150, 0.28)')
      caustic.addColorStop(0.45, 'rgba( 8, 44,  88, 0.09)')
      caustic.addColorStop(1,    'rgba( 0,  0,   0, 0.00)')
      ctx.fillStyle = caustic
      ctx.fillRect(0, 0, W, H)

      // Side ambient glow
      const sideLight = ctx.createRadialGradient(
        W * 0.92, H * 0.30, 0,
        W * 0.92, H * 0.30, W * 0.50
      )
      sideLight.addColorStop(0,   'rgba(20, 70, 120, 0.14)')
      sideLight.addColorStop(1,   'rgba( 0,  0,   0, 0.00)')
      ctx.fillStyle = sideLight
      ctx.fillRect(0, 0, W, H)

      // Vignette
      const vig = ctx.createRadialGradient(
        W * 0.50, H * 0.45, H * 0.25,
        W * 0.50, H * 0.45, H * 0.90
      )
      vig.addColorStop(0, 'rgba(0,0,0,0.00)')
      vig.addColorStop(1, 'rgba(0,0,0,0.42)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, W, H)

      // ── Update + draw bubbles ───────────────────────────────────────────────
      for (const b of bubbles) {
        b.y -= b.vy
        b.x = b.x0 + Math.sin(tick * b.freq + b.phase) * b.amp

        if (b.y + b.r < 0) {
          b.y = H + b.r + rng() * 50
          b.x0 = rng() * W
          b.x  = b.x0
        }
        if (b.x + b.r < 0 || b.x - b.r > W) continue

        ctx.save()
        drawBubble(ctx, b.x, b.y, b.r, b.opa, b.hl, b.hue, b.sat, b.shape)
        ctx.restore()
      }

      tick++
      rafId = requestAnimationFrame(render)
    }

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!rafId) rafId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }, { threshold: 0 })
    obs.observe(canvas)

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)
    resize()

    return () => {
      cancelAnimationFrame(rafId)
      obs.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}
