import { useEffect, useRef } from 'react'

interface ParticleBackgroundProps {
  variant?: 'stars' | 'network'
  density?: number
}

interface Particle {
  x: number
  y: number
  z: number
  baseZ: number
  vx: number
  vy: number
  r: number
  color: string
  phase: number
}

export default function ParticleBackground({
  variant = 'stars',
  density,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999, tx: -9999, ty: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let t0 = performance.now()

    const colors = ['#60A5FA', '#818CF8', '#A78BFA', '#93C5FD']
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const resolvedDensity =
      density ??
      (variant === 'stars'
        ? isMobile
          ? 0.000045
          : 0.00009
        : isMobile
          ? 0.00005
          : 0.00011)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)

      const count = Math.max(42, Math.floor(width * height * resolvedDensity))
      particlesRef.current = Array.from({ length: count }, () => {
        const z = Math.random()
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          baseZ: z,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: 0.6 + z * 1.9,
          color: colors[Math.floor(Math.random() * colors.length)],
          phase: Math.random() * Math.PI * 2,
        }
      })
    }

    const project = (x: number, y: number, z: number, cx: number, cy: number) => {
      const f = 0.85 + z * 0.6
      return {
        px: cx + (x - cx) * f,
        py: cy + (y - cy) * f,
      }
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.tx = e.clientX - rect.left
      mouseRef.current.ty = e.clientY - rect.top
    }
    const onLeave = () => {
      mouseRef.current.tx = -9999
      mouseRef.current.ty = -9999
    }
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.tx = t.clientX - rect.left
      mouseRef.current.ty = t.clientY - rect.top
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onLeave)

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      const t = (performance.now() - t0) * 0.001
      const cx = width / 2
      const cy = height / 2

      const m = mouseRef.current
      m.x += (m.tx - m.x) * 0.08
      m.y += (m.ty - m.y) * 0.08
      const mx = m.x
      const my = m.y
      const hasMouse = mx > -9000

      const networkPhase = t * 0.6
      if (variant === 'network') {
        for (let ring = 0; ring < 5; ring++) {
          const rr = (ring + 1) * 130
          const a = 0.05 - ring * 0.008
          if (a <= 0) continue
          ctx.strokeStyle = `rgba(129, 140, 248, ${a})`
          ctx.lineWidth = 0.6
          ctx.beginPath()
          for (let i = 0; i <= 72; i++) {
            const ang =
              (i / 72) * Math.PI * 2 + networkPhase * (0.08 + ring * 0.05)
            const wobble =
              Math.sin(ang * 3 + networkPhase + ring) * (6 + ring * 4) +
              Math.cos(ang * 5 - networkPhase * 1.3) * (3 + ring * 2)
            const px = cx + Math.cos(ang) * (rr + wobble)
            const py = cy + Math.sin(ang) * (rr + wobble) * 0.65
            if (i === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
          }
          ctx.stroke()
        }

        const axisRot = t * 0.15
        const netAlpha = 0.07
        ctx.strokeStyle = `rgba(96, 165, 250, ${netAlpha})`
        ctx.lineWidth = 0.5
        for (let ax = 0; ax < 2; ax++) {
          for (let step2 = -3; step2 <= 3; step2++) {
            const off = step2 * 90
            ctx.beginPath()
            if (ax === 0) {
              for (let i = -width; i <= width * 2; i += 30) {
                const y = cy + off + Math.sin(i / 200 + axisRot + step2) * 12
                if (i === -width) ctx.moveTo(i, y)
                else ctx.lineTo(i, y)
              }
            } else {
              for (let i = -height; i <= height * 2; i += 30) {
                const x =
                  cx + off + Math.cos(i / 220 + axisRot * 0.9 + step2) * 12
                if (i === -height) ctx.moveTo(x, i)
                else ctx.lineTo(x, i)
              }
            }
            ctx.stroke()
          }
        }
      }

      const particles = particlesRef.current
      const R = isMobile ? 110 : 160
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.z = p.baseZ + Math.sin(t * 0.7 + p.phase) * 0.15
        p.z = Math.max(0.05, Math.min(1, p.z))

        p.x += p.vx + Math.sin(t * 0.3 + p.phase) * 0.05
        p.y += p.vy + Math.cos(t * 0.28 + p.phase * 1.3) * 0.05

        const dx = p.x - mx
        const dy = p.y - my
        const dist2 = dx * dx + dy * dy
        if (hasMouse && dist2 < R * R && dist2 > 0.01) {
          const dist = Math.sqrt(dist2)
          const force = ((R - dist) / R) * 0.9
          p.vx += (dx / dist) * force * 0.1
          p.vy += (dy / dist) * force * 0.1
        }

        const maxV = 0.85
        const v = Math.hypot(p.vx, p.vy)
        if (v > maxV) {
          p.vx = (p.vx / v) * maxV
          p.vy = (p.vy / v) * maxV
        }
        p.vx *= 0.987
        p.vy *= 0.987

        if (p.x < -40) p.x = width + 40
        else if (p.x > width + 40) p.x = -40
        if (p.y < -40) p.y = height + 40
        else if (p.y > height + 40) p.y = -40

        const pr = project(p.x, p.y, p.z, cx, cy)
        const alpha = 0.4 + p.z * 0.6
        const r = p.r * (0.7 + p.z * 0.7)
        if (hasMouse) {
          const dmdx = pr.px - mx
          const dmdy = pr.py - my
          const dm2 = dmdx * dmdx + dmdy * dmdy
          const MR = 280
          if (dm2 < MR * MR) {
            const dm = Math.sqrt(dm2)
            const glow = (1 - dm / MR) * 0.8
            const gr = r * (3 + glow * 5)
            const g = ctx.createRadialGradient(pr.px, pr.py, 0, pr.px, pr.py, gr)
            g.addColorStop(0, `rgba(167, 139, 250, ${0.35 * glow})`)
            g.addColorStop(1, 'rgba(167, 139, 250, 0)')
            ctx.fillStyle = g
            ctx.beginPath()
            ctx.arc(pr.px, pr.py, gr, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(pr.px, pr.py, r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      const linkMax = isMobile ? 95 : 130
      const linkBase = variant === 'stars' ? 0.14 : 0.22
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        const pra = project(a.x, a.y, a.z, cx, cy)
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const prb = project(b.x, b.y, b.z, cx, cy)
          const dx = pra.px - prb.px
          const dy = pra.py - prb.py
          const d2 = dx * dx + dy * dy
          if (d2 < linkMax * linkMax) {
            const d = Math.sqrt(d2)
            const alpha =
              (1 - d / linkMax) *
              linkBase *
              Math.min(a.z + 0.3, 1) *
              Math.min(b.z + 0.3, 1)
            ctx.strokeStyle = `rgba(147, 197, 253, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(pra.px, pra.py)
            ctx.lineTo(prb.px, prb.py)
            ctx.stroke()
          }
        }

        if (hasMouse) {
          const dxm = pra.px - mx
          const dym = pra.py - my
          const dm2 = dxm * dxm + dym * dym
          const MR = 210
          if (dm2 < MR * MR) {
            const d = Math.sqrt(dm2)
            const alpha = (1 - d / MR) * (variant === 'stars' ? 0.42 : 0.55)
            const grad = ctx.createLinearGradient(pra.px, pra.py, mx, my)
            grad.addColorStop(0, `rgba(167, 139, 250, ${alpha})`)
            grad.addColorStop(1, `rgba(96, 165, 250, ${alpha * 0.7})`)
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.85
            ctx.beginPath()
            ctx.moveTo(pra.px, pra.py)
            ctx.lineTo(mx, my)
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    let visible = true
    const onVis = () => {
      if (document.hidden) {
        visible = false
        cancelAnimationFrame(rafRef.current)
      } else if (!visible) {
        visible = true
        t0 = performance.now()
        rafRef.current = requestAnimationFrame(step)
      }
    }
    document.addEventListener('visibilitychange', onVis)
    rafRef.current = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
