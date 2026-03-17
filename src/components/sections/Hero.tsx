import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=law%20office&color=black&dpr=2"
          alt="Office Background"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Atendimento Especializado
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Autoridade Legal em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Direito Corporativo
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Compromisso inabalável com a justiça, excelência estratégica e resultados na defesa
              contundente dos seus interesses.
            </p>
          </FadeIn>

          <FadeIn delay={700}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-14 px-8 group" asChild>
                <a href="#contato">
                  Agende uma Consulta
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base h-14 px-8 border-border hover:bg-secondary"
                asChild
              >
                <a href="#areas">Nossas Áreas</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
