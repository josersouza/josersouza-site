import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import founderImage from '@/assets/whatsapp-image-2026-02-26-at-12.02.45-5a224.jpeg'

const benefits = [
  'Especialistas em causas de alta complexidade',
  'Mais de duas décadas de experiência',
  'Atendimento estritamente personalizado',
  'Sigilo e rigorosa ética profissional',
]

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted relative z-10">
                <img
                  src={founderImage}
                  alt="José Roberto de Souza - Sócio Fundador"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-background border border-border/50 p-6 z-20 shadow-2xl">
                <div className="flex flex-col gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">25+</span>
                  <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] leading-tight mt-1">
                    Anos de
                    <br />
                    Experiência
                  </span>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 -z-10" />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-primary" />
                  <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                    O Escritório
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                  Tradição e excelência na defesa dos seus direitos.
                </h3>
              </div>

              <div className="flex flex-col gap-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  O escritório{' '}
                  <strong className="font-semibold text-foreground">
                    JOSÉ ROBERTO DE SOUZA Advogados Associados
                  </strong>{' '}
                  destaca-se pela prestação de serviços jurídicos com um rigoroso padrão de
                  qualidade, focado em resultados consistentes para nossos clientes.
                </p>
                <p>
                  Com uma atuação pautada na transparência e no compromisso inabalável com a
                  justiça, analisamos cada caso com profundidade e estratégia, buscando sempre as
                  melhores e mais eficazes soluções jurídicas.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-foreground text-sm font-medium tracking-wide leading-snug">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Button
                  size="lg"
                  className="group uppercase tracking-widest text-xs font-bold rounded-none h-14 px-8"
                >
                  Conheça nossa equipe
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
