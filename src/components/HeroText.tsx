'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#ABCDEFabcdef0123456789@$%'
const HEADLINE_TEXTS = ['TRANSFORM WITH AI', 'REDEFINE THE FUTURE', 'AUTOMATE EVERYTHING']
const SUBTITLE_TEXTS = [
  'We build intelligent systems that learn, adapt, and scale with your vision.',
  'Automation that thinks. Intelligence that delivers.',
  'From idea to deployment — powered by AI.',
]

function useGlitchCycle(texts: string[], cycleMs: number, enabled: boolean) {
  const [text, setText] = useState(texts[0])
  const [glitching, setGlitching] = useState(false)
  const idxRef = useRef(0)
  const busyRef = useRef(false)

  useEffect(() => {
    if (!enabled) return

    const scramble = (from: string, to: string, onDone: () => void) => {
      const len = Math.max(from.length, to.length)
      let frame = 0
      const FRAMES = 14
      const id = setInterval(() => {
        const progress = frame / FRAMES
        const s = Array.from({ length: len }, (_, i) => {
          if (progress > i / len) return to[i] ?? ''
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        }).join('')
        setText(s)
        frame++
        if (frame > FRAMES) {
          clearInterval(id)
          setText(to)
          onDone()
        }
      }, 30)
    }

    const run = () => {
      if (busyRef.current) return
      busyRef.current = true
      setGlitching(true)
      const nextIdx = (idxRef.current + 1) % texts.length
      scramble(texts[idxRef.current], texts[nextIdx], () => {
        idxRef.current = nextIdx
        busyRef.current = false
        setGlitching(false)
      })
    }

    const timer = setInterval(run, cycleMs)
    return () => clearInterval(timer)
  }, [enabled]) // eslint-disable-line react-hooks/exhaustive-deps

  return { text, glitching }
}

export default function HeroText() {
  const [typewriterText, setTypewriterText] = useState('')
  const [done, setDone] = useState(false)

  const { text: headlineText, glitching: headlineGlitching } = useGlitchCycle(HEADLINE_TEXTS, 7000, done)
  const { text: subtitleText, glitching: subtitleGlitching } = useGlitchCycle(SUBTITLE_TEXTS, 9500, done)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < HEADLINE_TEXTS[0].length) {
        setTypewriterText(HEADLINE_TEXTS[0].slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  const displayedHeadline = done ? headlineText : typewriterText

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-screen flex flex-col justify-between pt-28 pb-14 pointer-events-none">

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h1
            className={`font-[family-name:var(--font-orbitron)] font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl mb-10 transition-colors duration-100 ${headlineGlitching ? 'text-[#8F00FF]' : 'text-white'}`}
          >
            {displayedHeadline}
          </h1>
        </motion.div>
      </div>

      <div className="mb-6 flex flex-col">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`font-[family-name:var(--font-space-mono)] text-lg text-white/50 max-w-[300px] leading-relaxed text-right self-end mb-8 transition-colors duration-100 ${subtitleGlitching ? 'text-[#8F00FF]/60' : ''}`}
        >
          {subtitleText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center pointer-events-auto"
        >
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-[family-name:var(--font-space-mono)] text-[13px] tracking-[0.2em] bg-[#0d0d0d] text-white px-10 py-4 rounded-lg border border-white/10 hover:bg-[#8F00FF] hover:border-[#8F00FF] hover-glow transition-[background-color,border-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-[#8F00FF] focus-visible:outline-none"
          >
            [ EXPLORE SERVICES ]
          </button>
        </motion.div>
      </div>

    </div>
  )
}
