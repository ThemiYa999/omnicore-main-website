'use client'

import { useEffect, useRef } from 'react'

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function animateScrollTo(targetY: number, duration = 1200): Promise<void> {
  return new Promise((resolve) => {
    const startY = window.scrollY
    const delta = targetY - startY
    const startTime = performance.now()

    const frame = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      window.scrollTo(0, startY + delta * easeInOut(t))
      if (t < 1) requestAnimationFrame(frame)
      else resolve()
    }
    requestAnimationFrame(frame)
  })
}

export default function ScrollSnapBridge() {
  const snapping = useRef(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    const services = document.getElementById('services')
    if (!hero || !services) return

    const onWheel = (e: WheelEvent) => {
      if (snapping.current) {
        e.preventDefault()
        return
      }

      const scrollY = window.scrollY
      const heroBottom = hero.offsetTop + hero.offsetHeight
      const servicesTop = services.offsetTop

      // Down: still inside hero → glide to services
      if (e.deltaY > 0 && scrollY < heroBottom - 10) {
        e.preventDefault()
        snapping.current = true
        animateScrollTo(servicesTop, 1200).then(() => {
          // 200ms cooldown flushes any lingering trackpad deceleration events
          setTimeout(() => { snapping.current = false }, 200)
        })
        return
      }

      // Up: scrolled at least 30px INTO services (not just landed there) → glide back to hero
      // Lower bound > servicesTop+30 prevents false trigger right after the down-snap lands
      if (e.deltaY < 0 && scrollY > servicesTop + 30 && scrollY < servicesTop + 200) {
        e.preventDefault()
        snapping.current = true
        animateScrollTo(hero.offsetTop, 1200).then(() => {
          setTimeout(() => { snapping.current = false }, 200)
        })
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return null
}
