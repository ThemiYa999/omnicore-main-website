import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'OmniCore — AI Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top — label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8F00FF' }} />
          <span style={{ color: '#8F00FF', fontSize: '14px', letterSpacing: '0.2em', fontWeight: 400 }}>
            AI AGENCY
          </span>
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '72px', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            OMNICORE
          </div>
          <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)', fontWeight: 400, maxWidth: '600px', lineHeight: 1.4 }}>
            We build intelligent systems that learn, adapt, and scale with your vision.
          </div>
        </div>

        {/* Bottom — domain */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '16px', letterSpacing: '0.15em' }}>
            omnicore.lk
          </span>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            border: '1px solid rgba(143,0,255,0.4)',
            borderRadius: '8px', padding: '10px 20px',
          }}>
            <span style={{ color: '#8F00FF', fontSize: '14px', letterSpacing: '0.15em' }}>[ GET IN TOUCH ]</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
