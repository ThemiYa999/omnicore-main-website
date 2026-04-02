export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(143,0,255,0.2)] bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-white/30">
          OMNICORE © {year}
        </span>
        <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8F00FF] opacity-50">
          STATUS: ONLINE
        </span>
        <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-white/30">
          AI_AGENCY | GLOBAL
        </span>
        <div className="flex items-center gap-4">
          {[
            { label: 'LINKEDIN', href: 'https://linkedin.com/company/omnicore-ai',  ariaLabel: 'OmniCore on LinkedIn' },
            { label: 'GITHUB',   href: 'https://github.com/omnicore-ai',            ariaLabel: 'OmniCore on GitHub' },
            { label: 'TWITTER',  href: 'https://twitter.com/omnicore_ai',            ariaLabel: 'OmniCore on Twitter' },
            { label: 'EMAIL',    href: 'mailto:contact@omnicore.lk',                ariaLabel: 'Email OmniCore' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.15em] text-white/30 hover:text-[#9457EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#8F00FF] focus-visible:outline-none rounded-sm"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
