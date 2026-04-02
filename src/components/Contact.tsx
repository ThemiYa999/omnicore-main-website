'use client'

import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-[rgba(143,0,255,0.12)] dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — heading */}
          <RevealOnScroll>
            <p className="section-label mb-4">[ CONTACT ]</p>
            <h2 className="font-[family-name:var(--font-orbitron)] font-black text-4xl lg:text-6xl text-white leading-tight mb-6">
              LET&apos;S BUILD<br />
              <span style={{ background: 'linear-gradient(135deg,#8F00FF,#9457EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                SOMETHING
              </span>
            </h2>
            <p className="font-[family-name:var(--font-space-mono)] text-[13px] text-white/50 leading-relaxed max-w-sm">
              Ready to integrate intelligence into your operations? Tell us about your project and we&apos;ll get back within 24 hours.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#8F00FF]" />
                <a href="mailto:contact@omnicore.lk" className="font-[family-name:var(--font-space-mono)] text-[12px] text-white/40 hover:text-[#9457EB] transition-colors">contact@omnicore.lk</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#8F00FF]" />
                <a href="tel:+94741867112" className="font-[family-name:var(--font-space-mono)] text-[12px] text-white/40 hover:text-[#9457EB] transition-colors">+94 74 186 7112</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#8F00FF]" />
                <span className="font-[family-name:var(--font-space-mono)] text-[12px] text-white/40">STATUS: ACCEPTING_PROJECTS</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — terminal form */}
          <RevealOnScroll delay={0.1}>
            {status === 'sent' ? (
              <div className="panel-card p-8 flex flex-col items-start justify-center gap-4 min-h-[340px]">
                <span className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.2em] text-[#8F00FF]">[ MESSAGE_SENT ]</span>
                <p className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white">TRANSMISSION RECEIVED</p>
                <p className="font-[family-name:var(--font-space-mono)] text-[12px] text-white/50">
                  We&apos;ll respond within 24 hours. Watch your inbox.
                </p>
              </div>
            ) : status === 'error' ? (
              <div className="panel-card p-8 flex flex-col items-start justify-center gap-4 min-h-[340px]">
                <span className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.2em] text-red-400">[ TRANSMISSION_FAILED ]</span>
                <p className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white">ERROR</p>
                <p className="font-[family-name:var(--font-space-mono)] text-[12px] text-white/50">
                  Something went wrong. Email us directly at contact@omnicore.lk
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-[family-name:var(--font-space-mono)] text-[12px] tracking-[0.15em] text-[#9457EB] hover:text-white transition-colors"
                >
                  [ TRY AGAIN ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="panel-card p-6 flex flex-col gap-6">
                <span className="section-label">[ INITIATE_CONTACT ]</span>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#9457EB] mb-2 block">
                    &gt; NAME_
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="your name…"
                    className="terminal-input placeholder:text-white/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#9457EB] mb-2 block">
                    &gt; EMAIL_
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    spellCheck={false}
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com…"
                    className="terminal-input placeholder:text-white/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#9457EB] mb-2 block">
                    &gt; MESSAGE_
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    autoComplete="off"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="tell us about your project…"
                    className="terminal-input resize-none placeholder:text-white/20"
                  />
                </div>

                {/* Submit */}
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                  {status === 'sending' ? 'Sending message…' : ''}
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="font-[family-name:var(--font-space-mono)] text-[13px] tracking-[0.2em] bg-[#0A0A0F] text-white px-10 py-4 rounded-lg border border-white/10 hover:bg-[#8F00FF] hover:border-[#8F00FF] hover-glow transition-[background-color,border-color,box-shadow] duration-200 disabled:opacity-40 disabled:cursor-not-allowed self-start focus-visible:ring-2 focus-visible:ring-[#8F00FF] focus-visible:outline-none"
                >
                  {status === 'sending' ? '[ SENDING… ]' : '[ SEND_MESSAGE ]'}
                </button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
