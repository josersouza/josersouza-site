import { Card, CardContent } from '@/components/ui/card'
import { Linkedin, Mail } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import founderImage from '@/assets/whatsapp-image-2026-02-26-at-12.02.46-1-ca4fe.jpeg'

const team = [
  {
    name: 'Dr. José Roberto de Souza',
    role: 'Sócio Fundador',
    image: founderImage,
    bio: 'Especialista em Direito com vasta experiência em casos de alta complexidade. Reconhecido por sua atuação estratégica e compromisso inabalável com os clientes.',
    linkedin: '#',
    email: 'mailto:contato@joseroberto.adv.br',
  },
  {
    name: 'Dr. Valdomiro Gomes de Medeiros',
    role: 'Sócio',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=2',
    bio: 'Advogado dedicado com profunda especialização técnica, focado em trazer as melhores soluções jurídicas preventivas e contenciosas.',
    linkedin: '#',
    email: 'mailto:contato@joseroberto.adv.br',
  },
  {
    name: 'Dr. Emanuel Rodolpho Santana da Silva',
    role: 'Sócio',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=3',
    bio: 'Profissional dinâmico com olhar atento às inovações jurídicas, garantindo representação moderna e eficiente aos nossos parceiros.',
    linkedin: '#',
    email: 'mailto:contato@joseroberto.adv.br',
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-100">
              Nossa Equipe
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="max-w-[700px] text-zinc-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
              Profissionais altamente qualificados e dedicados à excelência jurídica, prontos para
              defender seus interesses.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 150} className="h-full">
              <Card className="bg-zinc-900 border-zinc-800/50 overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
                <div className="aspect-[4/5] relative overflow-hidden bg-zinc-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow relative z-10 -mt-8">
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex gap-4 pt-4 border-t border-zinc-800">
                    <a
                      href={member.linkedin}
                      className="text-zinc-500 hover:text-primary transition-colors p-2 -ml-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.email}
                      className="text-zinc-500 hover:text-primary transition-colors p-2"
                      aria-label={`Email para ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
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
