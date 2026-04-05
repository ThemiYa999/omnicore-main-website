import RevealOnScroll from './RevealOnScroll'

const projects = [
  {
    id: '001',
    title: 'AI SALES ASSISTANT',
    client: 'RETAIL_BRAND',
    tags: ['AUTOMATION', 'WHATSAPP', 'LEAD_GEN'],
    desc: 'Deployed an AI assistant that qualifies leads, follows up via WhatsApp and email, and books meetings — with zero manual effort from the sales team.',
    metric: '3×',
    metricLabel: 'MEETINGS BOOKED',
  },
  {
    id: '002',
    title: 'SMART BOOKING PLATFORM',
    client: 'CLINIC_NETWORK',
    tags: ['SAAS', 'SCHEDULING', 'PAYMENTS'],
    desc: 'Built a full booking system handling appointments, automated reminders, payments, and rescheduling across multiple locations from a single dashboard.',
    metric: '80%',
    metricLabel: 'NO-SHOW REDUCTION',
  },
  {
    id: '003',
    title: 'INVOICE & PAYMENT AUTOMATION',
    client: 'SERVICE_CO',
    tags: ['AUTOMATION', 'FINANCE', 'WORKFLOW'],
    desc: 'Automated the entire invoicing cycle — generation, delivery, follow-up reminders, and payment tracking — cutting admin time to near zero.',
    metric: '90%',
    metricLabel: 'ADMIN TIME SAVED',
  },
  {
    id: '004',
    title: 'SOCIAL MEDIA AI MANAGER',
    client: 'LIFESTYLE_BRAND',
    tags: ['AI', 'GENERATION', 'SCHEDULING'],
    desc: 'AI system that generates on-brand posts, schedules across platforms, and replies to comments — keeping the brand active around the clock.',
    metric: '12×',
    metricLabel: 'POSTING FREQUENCY',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 lg:py-28 border-b border-[rgba(143,0,255,0.12)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <p className="section-label mb-4">[ FEATURED_WORK ]</p>
              <h2 className="font-[family-name:var(--font-orbitron)] font-bold text-3xl lg:text-5xl text-white max-w-xl">
                SELECTED PROJECTS
              </h2>
            </div>
            <span className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.2em] text-white/25">
              {projects.length}_CASES_LOADED
            </span>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-px">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.id} delay={i * 0.1}>
              <div className="group flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10 p-6 border border-[rgba(143,0,255,0.12)] hover:border-[rgba(143,0,255,0.4)] bg-black hover:bg-[#0A0A0F] transition-[border-color,background-color,box-shadow] duration-200 hover-glow">

                {/* ID number */}
                <div className="shrink-0">
                  <span className="font-[family-name:var(--font-orbitron)] text-4xl font-black text-[#8F00FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    {p.id}
                  </span>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch bg-[rgba(143,0,255,0.2)] group-hover:bg-[rgba(143,0,255,0.5)] transition-colors" />

                {/* Content */}
                <div className="flex-1">
                  <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8F00FF]/60 group-hover:text-[#8F00FF] transition-colors block mb-2">
                    {p.client}
                  </span>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-base font-bold text-white tracking-[0.1em] mb-3 group-hover:text-[#9457EB] transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-[family-name:var(--font-space-mono)] text-[13px] text-white/50 leading-relaxed max-w-xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.12em] border border-[rgba(143,0,255,0.25)] group-hover:border-[rgba(143,0,255,0.55)] text-[#9457EB]/60 group-hover:text-[#9457EB] px-2 py-0.5 transition-[border-color,color]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metric */}
                <div className="hidden sm:flex flex-col items-end justify-center self-center gap-1 shrink-0 min-w-[80px]">
                  <span className="font-[family-name:var(--font-orbitron)] text-2xl font-black text-white/15 group-hover:text-[#8F00FF] transition-colors">
                    {p.metric}
                  </span>
                  <span className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.1em] text-white/25 group-hover:text-white/45 transition-colors text-right">
                    {p.metricLabel}
                  </span>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
