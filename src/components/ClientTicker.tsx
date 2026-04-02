'use client'

const clients = [
  'TECHCORP', 'NEXUSAI', 'DATAPLEX', 'SCALEWORKS',
  'FUSIONLABS', 'QUANTUMCO', 'STREAMLINE', 'HYPERCORE',
  'AXIOM', 'VORTEX', 'SYNAPSE', 'ORBITTECH',
]

export default function ClientTicker() {
  return (
    <section className="relative py-6 border-y border-[rgba(143,0,255,0.15)] overflow-hidden bg-[#0A0A0F]">
      <div className="flex items-center gap-4 mb-3 px-6 max-w-7xl mx-auto">
        <span className="section-label opacity-60">[ TRUSTED_BY ]</span>
        <div className="flex-1 h-px bg-[rgba(143,0,255,0.15)]" />
      </div>

      {/* Marquee track */}
      <div
        className="flex overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((name, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8">
              <span className="text-[#8F00FF] text-xs opacity-50">◆</span>
              <span className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.25em] text-white/40 hover:text-white/80 transition-colors">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
