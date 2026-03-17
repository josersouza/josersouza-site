import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const VALUES = [
  'Ética e Transparência',
  'Excelência Técnica',
  'Atendimento Personalizado',
  'Foco em Resultados',
]

export function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background relative border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-xl -z-10" />
              <img
                src="https://img.usecurling.com/ppl/large?gender=male&seed=15"
                alt="Dr. José Roberto de Souza"
                className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm border border-border/50 p-6 rounded-lg">
                <p className="font-bold text-xl text-foreground">Dr. José Roberto de Souza</p>
                <p className="text-primary text-sm font-medium">Sócio Fundador</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Sobre o Escritório
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Tradição e Inovação na Advocacia Estratégica
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
                <p>
                  Fundado há mais de 15 anos, o escritório José Roberto de Souza Advogados
                  Associados consolidou-se como referência na prestação de serviços jurídicos de
                  alta complexidade. Nossa trajetória é marcada pela defesa intransigente dos
                  direitos de nossos clientes.
                </p>
                {expanded && (
                  <FadeIn delay={100}>
                    <p>
                      Com uma equipe multidisciplinar altamente qualificada, unimos a solidez da
                      tradição jurídica às mais modernas ferramentas de gestão e inteligência
                      processual. Nossa atuação é pautada pela proximidade com o cliente, entendendo
                      a fundo suas necessidades para desenvolver teses exclusivas e eficazes.
                    </p>
                  </FadeIn>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {VALUES.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => setExpanded(!expanded)}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {expanded ? 'Ler Menos' : 'Ler Mais Sobre Nós'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
