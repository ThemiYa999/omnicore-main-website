'use client'

import Spline from '@splinetool/react-spline'
import { useRef, useEffect } from 'react'
import type { Application } from '@splinetool/runtime'

export default function SplineScene({ scene }: { scene: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<Application | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Forward scroll through Spline canvas
    const onWheel = (e: WheelEvent) => {
      window.scrollBy({ top: e.deltaY, left: 0 })
    }
    el.addEventListener('wheel', onWheel, { passive: true, capture: true })

    // Pause render loop when hero is off-screen — biggest perf win
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!appRef.current) return
        if (entry.isIntersecting) {
          appRef.current.play()
        } else {
          appRef.current.stop()
        }
      },
      { threshold: 0.01 }
    )
    observer.observe(el)

    return () => {
      el.removeEventListener('wheel', onWheel, { capture: true })
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <Spline scene={scene} onLoad={(app: Application) => { appRef.current = app }} />
    </div>
  )
}
