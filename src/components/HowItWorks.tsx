import RevealOnScroll from './RevealOnScroll'

const steps = [
  {
    num: '01',
    title: 'ANALYZE',
    desc: 'We audit your workflows and systems to identify the highest-impact AI opportunities. No fluff — just clear, data-backed findings.',
    tags: ['AUDIT', 'RESEARCH', 'SCOPE'],
    gradientFrom: '#8F00FF',
    gradientTo: '#3a0066',
    angle: '135deg',
  },
  {
    num: '02',
    title: 'BUILD',
    desc: 'We design and develop custom AI systems tailored to your exact requirements. Every component is engineered for reliability and scale.',
    tags: ['DESIGN', 'DEVELOP', 'TEST'],
    gradientFrom: '#9457EB',
    gradientTo: '#6B1FAD',
    angle: '225deg',
  },
  {
    num: '03',
    title: 'DEPLOY',
    desc: 'We integrate, test, and optimize for seamless production performance. Ongoing monitoring ensures your systems evolve as you grow.',
    tags: ['INTEGRATE', 'MONITOR', 'SCALE'],
    gradientFrom: '#6B1FAD',
    gradientTo: '#8F00FF',
    angle: '45deg',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 lg:py-28 border-b border-[rgba(143,0,255,0.12)] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="section-label mb-4">[ PROCESS ]</p>
          <h2 className="font-[family-name:var(--font-orbitron)] font-bold text-3xl lg:text-5xl text-white mb-14 max-w-xl">
            HOW WE OPERATE
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-10 justify-items-center">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 0.1}>
              <div className="group relative w-full max-w-[380px] h-[360px]">

                {/* Skewed gradient back-panel */}
                <span
                  className="absolute top-0 left-[34px] w-[60%] h-full rounded-lg transform skew-x-[15deg] transition-[transform,left,width] duration-300 group-hover:skew-x-0 group-hover:left-[12px] group-hover:w-[calc(100%-48px)]"
                  style={{ background: `linear-gradient(${s.angle}, ${s.gradientFrom}, ${s.gradientTo})` }}
                />
                {/* Blur glow duplicate */}
                <span
                  className="absolute top-0 left-[34px] w-[60%] h-full rounded-lg transform skew-x-[15deg] blur-[18px] opacity-60 transition-[transform,left,width] duration-300 group-hover:skew-x-0 group-hover:left-[12px] group-hover:w-[calc(100%-48px)]"
                  style={{ background: `linear-gradient(${s.angle}, ${s.gradientFrom}, ${s.gradientTo})` }}
                />

                {/* Blob decorations */}
                <span className="pointer-events-none absolute inset-0 z-10">
                  <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(143,0,255,0.22)] transition-[top,left,width,height,opacity] duration-300 group-hover:top-[-32px] group-hover:left-[36px] group-hover:w-[68px] group-hover:h-[68px] group-hover:opacity-100" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(143,0,255,0.22)] transition-[bottom,right,width,height,opacity] duration-300 group-hover:bottom-[-32px] group-hover:right-[36px] group-hover:w-[68px] group-hover:h-[68px] group-hover:opacity-100" />
                </span>

                {/* Card face — uses translateX instead of left to avoid layout reflow */}
                <div className="relative z-20 translate-x-0 p-6 bg-[rgba(10,10,15,0.92)] backdrop-blur-sm border border-[rgba(143,0,255,0.38)] rounded-lg text-white transition-[transform,border-color,box-shadow] duration-300 group-hover:-translate-x-[10px] group-hover:border-[rgba(143,0,255,0.75)] group-hover:shadow-[0_0_22px_rgba(143,0,255,0.38)] h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-[#8F00FF]/30 group-hover:text-[#8F00FF]/80 transition-colors duration-200">
                        {s.num}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-[16px] font-bold text-white tracking-[0.1em] mb-3 group-hover:text-[#9457EB] transition-colors duration-200">
                      {s.title}
                    </h3>
                    <p className="font-[family-name:var(--font-space-mono)] text-[12px] text-white/55 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span key={tag} className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.12em] border border-[rgba(143,0,255,0.32)] group-hover:border-[rgba(143,0,255,0.65)] text-[#9457EB]/70 group-hover:text-[#9457EB] px-2 py-0.5 transition-[border-color,color] duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
