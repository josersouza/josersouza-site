import { FadeIn } from '@/components/ui/fade-in'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const STATS = [
  { value: 15, suffix: '+', label: 'Anos de Experiência', description: 'Tradição e excelência' },
  { value: 98, suffix: '%', label: 'Casos Resolvidos', description: 'Taxa de sucesso histórico' },
  { value: 500, suffix: '+', label: 'Clientes Satisfeitos', description: 'Parcerias duradouras' },
  { value: 24, suffix: '/7', label: 'Disponibilidade', description: 'Atendimento emergencial' },
]

export function Stats() {
  return (
    <section
      id="casos"
      className="py-20 relative border-y border-border/20 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=courthouse&color=black&dpr=1')] bg-cover bg-fixed bg-center opacity-10 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-background/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x-0 lg:divide-x divide-border/50">
          {STATS.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 150} className="text-center lg:px-6">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-400 mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-foreground font-semibold text-lg mb-1">{stat.label}</h4>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
