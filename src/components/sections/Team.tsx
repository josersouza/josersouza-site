import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { Linkedin, Mail, User } from 'lucide-react'
import { getTeamMembers } from '@/services/team_members'
import pb from '@/lib/pocketbase/client'
import { cn } from '@/lib/utils'
import drJosePhoto from '@/assets/whatsapp-image-2026-02-26-at-12.02.46-1-ca4fe.jpeg'

const DEFAULT_MEMBERS = [
  {
    id: 'jose-roberto',
    Nome: 'Dr. José Roberto de Souza',
    Cargo: 'Sócio Fundador',
    Bio: 'Com vasta experiência no mercado jurídico, lidera a equipe com foco em excelência, ética e resultados expressivos para nossos clientes. Advogado, Mestre e Doutor em Direito Público e Privado. Especialista em Direito Empresarial e Planejamento Patrimonial.',
    LinkedIn: 'https://linkedin.com/in/josé-roberto-de-souza-1a1574228',
    Email: 'contato@josersouza.com.br',
    localPhoto: drJosePhoto,
    Ordem: 1,
  },
  {
    id: 'valdomiro-medeiros',
    Nome: 'Dr. Valdomiro Gomes de Medeiros',
    Cargo: 'Advogado Associado',
    Bio: 'Advogado, Auditor Fiscal e Contador especializado em consultoria jurídica, otimização tributária e gestão contábil para empresas. Ofereço soluções integradas que combinam segurança legal, conformidade fiscal e eficiência econômico-financeira.',
    LinkedIn: 'https://linkedin.com/in/valdomiro',
    Email: 'contato@josersouza.com.br',
    Foto: '',
    Ordem: 2,
  },
  {
    id: 'emanuel-silva',
    Nome: 'Dr. Emanuel Rodolpho Santana da Silva',
    Cargo: 'Advogado Associado',
    Bio: 'Advogado especializado em Direito do Consumidor e Processos de Posse. Ajudo consumidores a se protegerem contra práticas abusivas e conduzo processos possessórios com clareza estratégica. Também atuo com excelência no contencioso civil.',
    LinkedIn: 'https://linkedin.com/in/emanuel',
    Email: 'contato@josersouza.com.br',
    Foto: '',
    Ordem: 3,
  },
]

function MemberCard({ member, index }: { member: any; index: number }) {
  const [imgError, setImgError] = useState(false)
  const [showBio, setShowBio] = useState(false)

  // Resolve image: pocketbase file URL first (if available and not error), otherwise fallback local photo
  let imageUrl = ''
  if (member.Foto && !imgError && member.collectionId) {
    try {
      imageUrl = pb.files.getURL(member, member.Foto)
    } catch (_) {
      imageUrl = member.localPhoto || ''
    }
  } else if (member.localPhoto && !imgError) {
    imageUrl = member.localPhoto
  }

  return (
    <FadeIn delay={index * 150} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card">
        <div className="aspect-[3/4] relative overflow-hidden group/image shrink-0 bg-muted">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80"></div>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={member.Nome}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <User className="w-24 h-24 text-muted-foreground/30" />
            </div>
          )}
        </div>
        <CardContent className="p-8 relative z-20 -mt-20 pt-10 flex-1 flex flex-col">
          <div
            className="cursor-pointer group inline-block w-fit"
            onClick={() => setShowBio(!showBio)}
            onMouseEnter={() => setShowBio(true)}
            onMouseLeave={() => setShowBio(false)}
          >
            <h3 className="text-2xl font-bold mb-1 text-foreground transition-colors group-hover:text-primary">
              {member.Nome}
            </h3>
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
              {member.Cargo}
            </p>
          </div>

          <div
            className={cn(
              'grid transition-all duration-500 ease-in-out',
              showBio ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0',
            )}
          >
            <div className="overflow-hidden">
              <p className="text-muted-foreground leading-relaxed">{member.Bio}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-auto">
            {member.LinkedIn && member.LinkedIn !== '#' && (
              <a
                href={member.LinkedIn}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`LinkedIn de ${member.Nome}`}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.Email && (
              <a
                href={`mailto:${member.Email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Email para ${member.Nome}`}
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  )
}

export function Team() {
  const [teamMembers, setTeamMembers] = useState<any[]>(DEFAULT_MEMBERS)

  useEffect(() => {
    let isMounted = true
    getTeamMembers()
      .then((records) => {
        if (isMounted && records && records.length > 0) {
          // Merge database records with fallback images/bios if missing
          const merged = records.map((record) => {
            const fallback = DEFAULT_MEMBERS.find(
              (m) =>
                m.Nome.toLowerCase().includes(record.Nome.toLowerCase().split(' ')[0]) ||
                record.Nome.toLowerCase().includes(m.Nome.toLowerCase().split(' ')[0]),
            )
            return {
              ...fallback,
              ...record,
              Foto: record.Foto || fallback?.Foto,
            }
          })
          setTeamMembers(merged)
        }
      })
      .catch((err) => {
        console.error('Erro ao carregar membros da equipe:', err)
      })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
              Conheça os Especialistas que Defenderão Você
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
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
