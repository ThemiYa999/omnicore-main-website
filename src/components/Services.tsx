import RevealOnScroll from './RevealOnScroll'

const services = [
  {
    id: '01',
    title: 'AI_AUTOMATION',
    description: 'Eliminate repetitive tasks with intelligent workflows that scale. Free your team to focus on high-value decisions while AI handles the rest.',
  },
  {
    id: '02',
    title: 'CUSTOM_MODELS',
    description: 'Tailored AI models built and trained for your specific use case. From NLP pipelines to computer vision — we engineer precision.',
  },
  {
    id: '03',
    title: 'DATA_INTELLIGENCE',
    description: 'Transform raw data into actionable business insights. Real-time analytics, predictive modeling, and intelligent reporting.',
  },
  {
    id: '04',
    title: 'AI_INTEGRATION',
    description: 'Connect AI capabilities into your existing infrastructure seamlessly. No rip-and-replace — we augment what you already have.',
  },
  {
    id: '05',
    title: 'CONVERSATIONAL_AI',
    description: 'Intelligent chatbots and virtual assistants for any platform — WhatsApp, Instagram, Telegram, and your website.',
  },
  {
    id: '06',
    title: 'AI_STRATEGY',
    description: 'Navigate the AI landscape with expert guidance. We identify the highest-impact opportunities and build your roadmap.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 border-b border-[rgba(143,0,255,0.12)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <p className="section-label mb-4">[ SERVICES_&amp;_EXPERTISE ]</p>
              <h2 className="font-[family-name:var(--font-orbitron)] font-bold text-3xl lg:text-5xl text-white max-w-xl">
                WHAT WE BUILD
              </h2>
            </div>
            <p className="font-[family-name:var(--font-space-mono)] text-sm text-white/40 max-w-sm leading-relaxed">
              Precision-engineered AI solutions designed to integrate, scale, and evolve with your business.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="services-accordion">
            {services.map((s) => (
              <div key={s.id} className="services-panel">
                <div className="services-collapsed">
                  <span className="services-collapsed-num">{s.id}</span>
                  <span className="services-collapsed-title">{s.title}</span>
                </div>
                <div className="services-expanded">
                  <span className="services-expanded-num">{s.id}</span>
                  <h3 className="services-expanded-title">{s.title}</h3>
                  <p className="services-expanded-desc">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
