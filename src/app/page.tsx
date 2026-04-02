import ScrollSnapBridge from '@/components/ScrollSnapBridge'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ClientTicker from '@/components/ClientTicker'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import CaseStudies from '@/components/CaseStudies'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import HudOverlay from '@/components/HudOverlay'
export default function Home() {
  return (
    <>
      <ScrollSnapBridge />
      <Nav />
      <main>
        <Hero />
        <ClientTicker />
        <Services />
        <HowItWorks />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
      <HudOverlay />
    </>
  )
}
