import RevealOnScroll from './RevealOnScroll'

const services = [
  {
    id: '01',
    title: 'AI_AUTOMATION',
    description: 'From auto-reply emails to full end-to-end business workflow automation. We eliminate the manual work — small tasks to entire operations.',
  },
  {
    id: '02',
    title: 'WEB_DEVELOPMENT',
    description: 'Landing pages to full SaaS platforms with auth, billing, and dashboards. We design, build, and ship whatever you need — simple or complex.',
  },
  {
    id: '03',
    title: 'CUSTOM_MODELS',
    description: 'From a simple spam filter to a full computer vision pipeline trained on your data. Precision-built for your exact use case.',
  },
  {
    id: '04',
    title: 'DATA_INTELLIGENCE',
    description: 'From automated sales reports to predictive demand forecasting. Raw data turned into decisions that move your business forward.',
  },
  {
    id: '05',
    title: 'AI_INTEGRATION',
    description: 'Adding a chatbot to your site or embedding AI deep into enterprise systems. We connect AI to what you already have — no rip-and-replace.',
  },
  {
    id: '06',
    title: 'CONVERSATIONAL_AI',
    description: 'From a simple FAQ bot to a fully autonomous customer support agent across WhatsApp, Instagram, Telegram, and your website.',
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
