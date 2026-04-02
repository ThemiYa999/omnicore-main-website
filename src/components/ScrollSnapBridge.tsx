'use client'

import { useEffect } from 'react'

function smoothScrollTo(target: number, duration = 1400): Promise<void> {
  return new Promise(resolve => {
    const start = window.scrollY
    const delta = target - start
    const startTime = performance.now()
    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      window.scrollTo(0, start + delta * ease(t))
      if (t < 1) requestAnimationFrame(tick)
      else resolve()
    }
    requestAnimationFrame(tick)
  })
}

/**
 * Watches scroll position passively (no wheel blocking).
 * When scroll stops inside the hero→services zone, glides to the nearest anchor.
 * Everywhere else: completely free scroll.
 */
export default function ScrollSnapBridge() {
  useEffect(() => {
    const hero = document.getElementById('hero')
    const services = document.getElementById('services')
    if (!hero || !services) return

    let locked = false
    let lastTarget = -1
    let prevY = window.scrollY
    let dir = 'down'
    let timer: ReturnType<typeof setTimeout> | null = null

    const onScroll = () => {
      const y = window.scrollY
      dir = y >= prevY ? 'down' : 'up'
      prevY = y

      if (locked) return
      // Dead zone: don't retrigger within 120px of last snap target
      if (lastTarget >= 0 && Math.abs(y - lastTarget) < 120) return

      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        const y2 = window.scrollY
        const servicesTop = services.offsetTop  // ~1048

        // Only act in the transition zone between hero and services
        if (y2 <= 30 || y2 >= servicesTop + 10) return

        locked = true
        const target = dir === 'down' ? servicesTop : 0
        lastTarget = target
        smoothScrollTo(target, 1400).then(() => {
          setTimeout(() => { locked = false }, 300)
        })
      }, 100)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timer) clearTimeout(timer)
    }
  }, [])

  return null
}
