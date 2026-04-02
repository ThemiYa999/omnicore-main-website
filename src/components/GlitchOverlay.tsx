'use client'

interface Props {
  active: boolean
}

export default function GlitchOverlay({ active }: Props) {
  if (!active) return null

  return (
    <div className="pointer-events-none" aria-hidden="true">
      {/* Black base with jitter */}
      <div
        className="fixed inset-0 z-[9999] bg-black"
        style={{ animation: 'glitch-overlay 800ms ease-out forwards' }}
      />

      {/* White lightning flash */}
      <div
        className="fixed inset-0 z-[9999] bg-white"
        style={{ animation: 'glitch-flash 300ms ease-out forwards', mixBlendMode: 'screen' }}
      />

      {/* Purple stripe top-third */}
      <div
        className="fixed left-0 right-0 z-[9999] bg-[#8F00FF]"
        style={{
          top: '33vh',
          height: '4vh',
          animation: 'glitch-stripe-purple 800ms ease-out forwards',
          mixBlendMode: 'screen',
        }}
      />

      {/* White stripe two-thirds */}
      <div
        className="fixed left-0 right-0 z-[9999] bg-white"
        style={{
          top: '66vh',
          height: '2.5vh',
          animation: 'glitch-stripe-white 800ms ease-out forwards',
          mixBlendMode: 'screen',
        }}
      />

      {/* Purple stripe top-sixth */}
      <div
        className="fixed left-0 right-0 z-[9999] bg-[#8F00FF]"
        style={{
          top: '16vh',
          height: '1.5vh',
          animation: 'glitch-stripe-purple 800ms ease-out forwards',
          animationDelay: '50ms',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  )
}
