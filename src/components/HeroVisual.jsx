import { useEffect, useRef } from 'react'

// Poetic generative canvas
// Ocean × Philosophy × Code × INFP energy
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

    // ── Color palette ──
    const OCEAN     = 'rgba(26, 92, 114,'
    const CORAL     = 'rgba(224, 112, 87,'
    const SEA_GLASS = 'rgba(126, 200, 190,'
    const CREAM     = 'rgba(240, 245, 245,'

    // ── Fragments: philosophy × code ──
    const fragments = ['λ', '∴', '∃', '?', '∀', '//', '≠', '→', '∩', '≈', '⊂', '∞', '⟨⟩', 'why', '/*']

    // ── Nodes (constellation) ──
    const NODE_COUNT = 55
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2.5 + 1,
      label: Math.random() > 0.75 ? fragments[Math.floor(Math.random() * fragments.length)] : null,
      pulse: Math.random() * Math.PI * 2,
      color: Math.random() > 0.8 ? 'coral' : Math.random() > 0.5 ? 'ocean' : 'glass',
    }))

    // ── Wave parameters ──
    const waves = [
      { amp: 18, freq: 0.012, speed: 0.008, y: 0.72, alpha: 0.18, color: SEA_GLASS },
      { amp: 12, freq: 0.018, speed: 0.012, y: 0.80, alpha: 0.13, color: SEA_GLASS },
      { amp: 22, freq: 0.009, speed: 0.006, y: 0.88, alpha: 0.22, color: OCEAN },
      { amp: 8,  freq: 0.024, speed: 0.015, y: 0.95, alpha: 0.10, color: OCEAN },
    ]

    // ── Glow orbs (bioluminescence) ──
    const orbs = [
      { x: W * 0.15, y: H * 0.25, r: 55, color: SEA_GLASS, speed: 0.003, phase: 0 },
      { x: W * 0.85, y: H * 0.60, r: 40, color: OCEAN,     speed: 0.004, phase: 2 },
      { x: W * 0.50, y: H * 0.15, r: 30, color: CORAL,     speed: 0.005, phase: 4 },
    ]

    let t = 0
    let frame

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.01

      // ── Background gradient (sea surface) ──
      const bg = ctx.createLinearGradient(0, 0, W, H)
      bg.addColorStop(0, '#EBF4F4')
      bg.addColorStop(0.6, '#DFF0EE')
      bg.addColorStop(1, '#C8E6E4')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // ── Glow orbs ──
      orbs.forEach(o => {
        o.phase += o.speed
        const glow = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        const alpha = 0.10 + Math.sin(o.phase) * 0.05
        glow.addColorStop(0, o.color + alpha + ')')
        glow.addColorStop(1, o.color + '0)')
        ctx.beginPath()
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
      })

      // ── Constellation connections ──
      const MAX_DIST = 110
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.2
            ctx.beginPath()
            ctx.strokeStyle = `rgba(26, 92, 114, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // ── Nodes ──
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.022
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1

        const pulse = Math.sin(n.pulse) * 0.4 + 0.7
        const r = n.r * pulse

        const color = n.color === 'coral'
          ? `rgba(224,112,87,${0.5 + pulse * 0.3})`
          : n.color === 'glass'
          ? `rgba(126,200,190,${0.5 + pulse * 0.3})`
          : `rgba(26,92,114,${0.35 + pulse * 0.25})`

        // Glow ring for brighter nodes
        if (n.r > 2.5) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, r + 3, 0, Math.PI * 2)
          ctx.fillStyle = n.color === 'coral'
            ? `rgba(224,112,87,${0.08 * pulse})`
            : `rgba(126,200,190,${0.1 * pulse})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        if (n.label) {
          ctx.font = `${8 + r}px 'Playfair Display', serif`
          ctx.fillStyle = `rgba(26, 92, 114, ${0.25 + pulse * 0.25})`
          ctx.fillText(n.label, n.x + r + 3, n.y + 3)
        }
      })

      // ── Ocean waves ──
      waves.forEach(w => {
        ctx.beginPath()
        const yBase = H * w.y
        ctx.moveTo(0, yBase)
        for (let x = 0; x <= W; x += 2) {
          const y = yBase + Math.sin(x * w.freq + t * w.speed * 100) * w.amp
            + Math.sin(x * w.freq * 1.7 + t * w.speed * 80) * (w.amp * 0.4)
          ctx.lineTo(x, y)
        }
        ctx.lineTo(W, H)
        ctx.lineTo(0, H)
        ctx.closePath()
        ctx.fillStyle = w.color + w.alpha + ')'
        ctx.fill()
      })

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
