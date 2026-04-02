'use client'

import { useGlitch } from '@/context/GlitchContext'
import GlitchOverlay from './GlitchOverlay'

export default function GlitchOverlayWrapper() {
  const { active } = useGlitch()
  return <GlitchOverlay active={active} />
}
