import { FadeIn } from '@/components/ui/fade-in'
import { Scale, Briefcase, ShieldAlert, Building2, Users, FileText } from 'lucide-react'

const AREAS = [
  {
    title: 'Como blindar seu patrimônio? (Direito Civil)',
    description:
      'Proteção e segurança imediatas. Oferecemos assessoria assertiva em contratos, responsabilidade civil, posse e propriedade para assegurar seus direitos.',
    icon: Scale,
  },
  {
    title: 'Como reduzir o passivo da sua empresa? (Trabalhista)',
    description:
      'Prevenção inteligente e defesa eficaz. Atuamos com foco na mitigação de riscos e na defesa corporativa perante a Justiça do Trabalho.',
    icon: Briefcase,
  },
  {
    title: 'Proteção contra acusações corporativas (Penal Empresarial)',
    description:
      'Defesa estratégica e sigilosa. Atuação especializada em crimes financeiros, tributários e ambientais para preservar a reputação do seu negócio.',
    icon: ShieldAlert,
  },
  {
    title: 'Como estruturar melhor seu negócio? (Empresarial)',
    description:
      'Bases sólidas para o crescimento. Orientamos em governança corporativa, fusões e aquisições, ideal para empresas de todos os portes.',
    icon: Building2,
  },
  {
    title: 'Como organizar a sucessão familiar? (Família)',
    description:
      'Planejamento seguro e ágil. Conduzimos inventários (judiciais e extrajudiciais), divórcios e proteção patrimonial com técnica e sensibilidade.',
    icon: Users,
  },
  {
    title: 'Como pagar menos impostos legalmente? (Tributário)',
    description:
      'Recuperação de créditos e defesas fiscais. Consultoria preventiva e contencioso administrativo para aliviar o fluxo de caixa de empresas e pessoas físicas.',
    icon: FileText,
  },
]

export function PracticeAreas() {
  return (
    <section id="areas" className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              Nossa Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Respostas Diretas para os Seus Desafios Jurídicos
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluções jurídicas integradas e estratégicas, desenhadas sob medida para o seu caso.
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
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
