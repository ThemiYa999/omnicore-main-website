'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = ['SERVICES', 'PROCESS', 'WORK', 'ABOUT', 'CONTACT']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
        } border-b border-[rgba(143,0,255,0.2)]`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 relative flex items-center">
          {/* Logo — left */}
          <a href="#" className="shrink-0">
            <Image src="/omnicore-logo.svg" alt="OmniCore" height={26} width={130} priority style={{ width: 'auto', height: '26px' }} />
          </a>

          {/* Nav links — absolutely centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.2em] text-white/60 hover:text-[#9457EB] transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* GET IN TOUCH — right */}
          <div className="hidden md:block ml-auto">
            <button
              onClick={() => scrollTo('CONTACT')}
              className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.15em] bg-[#0d0d0d] text-white px-4 py-2 rounded-lg border border-white/10 hover:bg-[#8F00FF] hover:border-[#8F00FF] hover-glow transition-[background-color,border-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-[#8F00FF] focus-visible:outline-none"
            >
              [ GET IN TOUCH ]
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.15em] text-[#9457EB]"
            aria-label="Toggle menu"
          >
            {menuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-[family-name:var(--font-orbitron)] text-2xl tracking-[0.15em] text-white hover:text-[#9457EB] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
