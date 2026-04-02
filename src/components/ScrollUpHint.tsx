'use client'

import { useEffect, useState } from 'react'
import { useGlitch } from '@/context/GlitchContext'

export default function ScrollUpHint() {
  const { triggerGlitch, active } = useGlitch()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const services = document.getElementById('services')
      if (!services) return
      const servicesTop = services.offsetTop
      const y = window.scrollY
      setVisible(y >= servicesTop - 20 && y <= servicesTop + 150)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Wheel-up at top of services → glitch back to hero
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (active) return
      const services = document.getElementById('services')
      if (!services) return
      const y = window.scrollY
      if (e.deltaY < 0 && y >= services.offsetTop - 20 && y <= services.offsetTop + 100) {
        e.preventDefault()
        triggerGlitch('hero')
      }
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [active, triggerGlitch])

  if (!visible) return null

  return (
    <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40 pointer-events-none">
      <span className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.25em] text-[#9457EB]">
        <span className="cursor-blink inline-block mr-1">↑</span>
        SCROLL_UP
      </span>
    </div>
  )
}
