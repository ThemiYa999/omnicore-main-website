'use client'

import { useEffect, useRef } from 'react'

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

/** Custom scroll animation — resolves when complete, so no race conditions. */
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

/**
 * Intercepts wheel events ONLY in the hero ↔ services transition zone.
 * - Down from hero  → glides to services, then releases completely.
 * - Up at services top → glides back to hero.
 * - Everywhere else: zero interception, fully free scroll.
 */
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
      const heroBottom = hero.offsetTop + hero.offsetHeight   // bottom edge of hero
      const servicesTop = services.offsetTop                  // top edge of services

      // Scrolling down while still inside the hero (hasn't passed hero's bottom)
      if (e.deltaY > 0 && scrollY < heroBottom - 10) {
        e.preventDefault()
        snapping.current = true
        animateScrollTo(servicesTop, 1200).then(() => {
          snapping.current = false
        })
        return
      }

      // Scrolling up while right at the very top of services (within 150px)
      if (e.deltaY < 0 && scrollY >= servicesTop - 80 && scrollY <= servicesTop + 150) {
        e.preventDefault()
        snapping.current = true
        animateScrollTo(hero.offsetTop, 1200).then(() => {
          snapping.current = false
        })
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return null
}
