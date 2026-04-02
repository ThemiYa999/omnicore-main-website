'use client'

import { useEffect, useRef, useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

const stats = [
  { value: 50, suffix: '+', label: 'AI_SYSTEMS_DEPLOYED' },
  { value: 30, suffix: '+', label: 'CLIENTS_WORLDWIDE' },
  { value: 98, suffix: '%', label: 'CLIENT_SATISFACTION' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = Math.ceil(target / 40)
          timerRef.current = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timerRef.current!)
              timerRef.current = null
            } else {
              setCount(start)
            }
          }, 30)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[rgba(143,0,255,0.12)] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — mission */}
          <div>
            <RevealOnScroll>
              <p className="section-label mb-4">[ ABOUT ]</p>
              <h2 className="font-[family-name:var(--font-orbitron)] font-bold text-3xl lg:text-5xl text-white mb-6 leading-tight">
                INTELLIGENCE<br />
                <span style={{ background: 'linear-gradient(135deg,#8F00FF,#9457EB,#6B1FAD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  AT SCALE
                </span>
              </h2>
              <p className="font-[family-name:var(--font-space-mono)] text-[13px] text-white/60 leading-relaxed mb-6 max-w-md">
                OmniCore is an AI agency focused on building intelligent systems that help businesses automate processes, unlock insights, and scale efficiently.
              </p>
              <p className="font-[family-name:var(--font-space-mono)] text-[13px] text-white/40 leading-relaxed max-w-md">
                We design and deploy advanced artificial intelligence solutions tailored for modern digital companies — from startups to enterprises.
              </p>
            </RevealOnScroll>

            {/* Values */}
            <RevealOnScroll delay={0.15} className="mt-10">
              <div className="grid grid-cols-2 gap-3">
                {['INNOVATION', 'PRECISION', 'RELIABILITY', 'SCALABILITY'].map((v) => (
                  <div
                    key={v}
                    className="border border-[rgba(143,0,255,0.2)] px-3 py-2"
                  >
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#9457EB]">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col justify-center gap-6">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 0.12}>
                <div className="panel-card hover-glow p-6 flex items-center gap-6 group">
                  <div className="shrink-0">
                    <p className="font-[family-name:var(--font-orbitron)] font-black text-5xl lg:text-6xl text-[#8F00FF] tabular-nums leading-none">
                      <CountUp target={s.value} suffix={s.suffix} />
                    </p>
                  </div>
                  <div className="w-px self-stretch bg-[rgba(143,0,255,0.2)] group-hover:bg-[rgba(143,0,255,0.5)] transition-colors" />
                  <p className="section-label">{s.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
