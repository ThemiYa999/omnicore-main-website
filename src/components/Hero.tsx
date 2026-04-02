import SplineScene from './SplineScene'
import HeroText from './HeroText'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">

      <SplineScene scene="https://prod.spline.design/zTr0EPKdj2nriUXv/scene.splinecode" />

      {/* Text overlay — Client Component */}
      <HeroText />

      {/* Cover Spline watermark */}
      <div className="absolute bottom-0 right-0 w-52 h-14 bg-black z-10 pointer-events-none" />

    </section>
  )
}
