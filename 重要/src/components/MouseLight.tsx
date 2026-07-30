import { useEffect, useRef } from 'react'

export default function MouseLight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf = 0
    let visible = false
    let timer: ReturnType<typeof setTimeout> | null = null

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      visible = true
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => (visible = false), 2500)
    }
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      tx = t.clientX
      ty = t.clientY
      visible = true
    }
    const onLeave = () => (visible = false)

    const render = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      el.style.opacity = visible ? '1' : '0'
      raf = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onLeave)
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      if (timer) clearTimeout(timer)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500"
      style={{ willChange: 'transform, opacity' }}
    >
      <div
        className="w-[440px] h-[440px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.06) 35%, rgba(59,130,246,0) 70%)',
          filter: 'blur(16px)',
        }}
      />
    </div>
  )
}
