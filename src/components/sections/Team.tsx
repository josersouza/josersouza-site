import { FadeIn } from '@/components/ui/fade-in'
import { Card, CardContent } from '@/components/ui/card'
import founderImage from '@/assets/whatsapp-image-2026-02-26-at-12.02.45-5a224.jpeg'

const TEAM = [
  {
    name: 'José Roberto de Souza',
    role: 'Sócio Fundador',
    image: founderImage,
  },
  {
    name: 'Valdomiro Gomes de Medeiros',
    role: 'Associado',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=valdomiro',
  },
  {
    name: 'Emanuel Rodolpho Santana da Silva',
    role: 'Associado',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=emanuel',
  },
]

export function Team() {
  return (
    <section
      id="equipe"
      className="py-24 lg:py-32 bg-secondary/10 relative border-t border-border/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Corpo Jurídico
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Conheça Nossa Equipe
            </h3>
            <p className="text-muted-foreground text-lg">
              Profissionais altamente qualificados e comprometidos com a excelência técnica e
              resultados consistentes para nossos clientes.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TEAM.map((member, idx) => (
            <FadeIn key={member.name} delay={idx * 150} className="h-full">
              <Card className="h-full overflow-hidden border-border/50 bg-card group hover:border-primary/50 transition-all duration-500 rounded-none border-t-4 border-t-transparent hover:border-t-primary hover:shadow-lg hover:shadow-primary/5">
                <div className="aspect-[4/5] overflow-hidden relative bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>
                <CardContent className="p-8 text-center bg-card relative z-10 flex flex-col items-center justify-center">
                  <h4 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <div className="h-[1px] w-8 bg-primary/30 mb-3 group-hover:w-16 transition-all duration-500" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary/80 transition-colors">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
