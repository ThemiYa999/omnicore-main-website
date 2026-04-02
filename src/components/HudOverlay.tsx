'use client'

import { useEffect, useState } from 'react'

export default function HudOverlay() {
  const [scroll, setScroll] = useState(0)
  const [section, setSection] = useState('HERO')

  useEffect(() => {
    const sections = [
      { id: 'hero', label: 'HERO' },
      { id: 'services', label: 'SERVICES' },
      { id: 'process', label: 'PROCESS' },
      { id: 'work', label: 'WORK' },
      { id: 'about', label: 'ABOUT' },
      { id: 'contact', label: 'CONTACT' },
    ]
    const els = sections.map((s) => ({ el: document.getElementById(s.id), label: s.label }))
    let rafId: number | null = null

    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        const scrollPct = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        )
        setScroll(isNaN(scrollPct) ? 0 : scrollPct)

        for (let i = els.length - 1; i >= 0; i--) {
          if (els[i].el && window.scrollY >= els[i].el!.offsetTop - 200) {
            setSection(els[i].label)
            break
          }
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      className="fixed bottom-6 right-6 z-40 pointer-events-none hidden lg:flex flex-col items-end gap-1"
      style={{ opacity: 0.35 }}
    >
      <span className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.2em] text-[#9457EB]">
        [ {section} ]
      </span>
      <span className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.2em] text-[#9457EB]">
        SCROLL: {scroll}%
      </span>
    </div>
  )
}
