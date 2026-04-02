'use client'

import { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from 'react'

interface GlitchContextValue {
  active: boolean
  triggerGlitch: (targetId: string) => void
}

const GlitchContext = createContext<GlitchContextValue>({
  active: false,
  triggerGlitch: () => {},
})

export function useGlitch() {
  return useContext(GlitchContext)
}

export function GlitchProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false)
  const activeRef = useRef(false)

  const triggerGlitch = useCallback((targetId: string) => {
    if (activeRef.current) return
    activeRef.current = true
    setActive(true)

    // After 500ms (mid-animation) jump to target — overlay covers the instant scroll
    setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) window.scrollTo({ top: el.offsetTop, behavior: 'instant' as ScrollBehavior })
    }, 500)

    // After 800ms fade overlay out
    setTimeout(() => {
      setActive(false)
      activeRef.current = false
    }, 800)
  }, [])

  // Hero scroll lock — block wheel while in hero zone (unless glitch is running)
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (activeRef.current) return
      const hero = document.getElementById('hero')
      if (!hero) return
      if (e.deltaY > 0 && window.scrollY < hero.offsetHeight - 20) {
        e.preventDefault()
      }
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <GlitchContext.Provider value={{ active, triggerGlitch }}>
      {children}
    </GlitchContext.Provider>
  )
}
