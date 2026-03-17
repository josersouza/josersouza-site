import { FadeIn } from '@/components/ui/fade-in'
import { Scale, Briefcase, ShieldAlert, Building2, Users, FileText } from 'lucide-react'

const AREAS = [
  {
    title: 'Direito Civil',
    description:
      'Assessoria em contratos, responsabilidade civil, posse e propriedade, visando a segurança jurídica patrimonial.',
    icon: Scale,
  },
  {
    title: 'Direito Trabalhista',
    description:
      'Atuação preventiva e contenciosa focada na mitigação de riscos e defesa corporativa perante a Justiça do Trabalho.',
    icon: Briefcase,
  },
  {
    title: 'Direito Penal Empresarial',
    description:
      'Defesa especializada em crimes corporativos, financeiros, tributários e ambientais com máxima discrição.',
    icon: ShieldAlert,
  },
  {
    title: 'Direito Empresarial',
    description:
      'Estruturação de negócios, fusões, aquisições e governança corporativa para empresas de todos os portes.',
    icon: Building2,
  },
  {
    title: 'Direito de Família',
    description:
      'Planejamento sucessório, divórcios, inventários e proteção patrimonial familiar com sensibilidade e técnica.',
    icon: Users,
  },
  {
    title: 'Direito Tributário',
    description:
      'Consultoria preventiva, planejamento fiscal e atuação no contencioso administrativo e judicial para empresas e pessoas físicas.',
    icon: FileText,
  },
]

export function PracticeAreas() {
  return (
    <section id="areas" className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Áreas de Atuação
            </h3>
            <p className="text-muted-foreground text-lg">
              Soluções jurídicas integradas e estratégicas, desenhadas sob medida para os desafios
              mais complexos.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AREAS.map((area, idx) => (
            <FadeIn key={area.title} delay={idx * 100}>
              <div className="group relative bg-card border border-border/50 p-8 rounded-2xl hover:bg-secondary transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500" />
                <div className="mb-6 w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                  <area.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
