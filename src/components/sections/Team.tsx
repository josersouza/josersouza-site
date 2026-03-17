import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { Linkedin, Mail } from 'lucide-react'
import emanuelImg from '@/assets/whatsapp-image-2026-03-17-at-09.43.58-1-aa055.jpeg'
import founderImg from '@/assets/whatsapp-image-2026-02-26-at-12.02.46-1-ca4fe.jpeg'

const teamMembers = [
  {
    name: 'José Roberto de Souza',
    role: 'Sócio Fundador',
    image: founderImg,
    description:
      'Com vasta experiência no mercado jurídico, lidera a equipe com foco em excelência, ética e resultados expressivos para nossos clientes.',
    social: {
      linkedin: '#',
      email: 'contato@joserobertodesouza.com.br',
    },
  },
  {
    name: 'Valdomiro Gomes de Medeiros',
    role: 'Advogado Associado',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=valdomiro',
    description:
      'Especialista dedicado a garantir a melhor defesa dos interesses de nossos clientes com técnica e precisão estratégica.',
    social: {
      linkedin: '#',
      email: 'valdomiro@joserobertodesouza.com.br',
    },
  },
  {
    name: 'Emanuel Rodolpho Santana da Silva',
    role: 'Advogado Associado',
    image: emanuelImg,
    description:
      'Profissional dedicado a entregar as melhores soluções jurídicas, atuando com agilidade e compromisso em cada caso.',
    social: {
      linkedin: '#',
      email: 'emanuel@joserobertodesouza.com.br',
    },
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
              Nossa Equipe
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Conheça os profissionais dedicados a proteger seus direitos e garantir a melhor
              representação jurídica.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={index * 150} className="h-full">
              <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card">
                <div className="aspect-[3/4] relative overflow-hidden group shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-8 relative z-20 -mt-20 pt-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {member.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email para ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
