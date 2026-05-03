import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { Linkedin, Mail, User } from 'lucide-react'
import { getTeamMembers } from '@/services/team_members'
import pb from '@/lib/pocketbase/client'

export function Team() {
  const [teamMembers, setTeamMembers] = useState<any[]>([])
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    getTeamMembers().then(setTeamMembers).catch(console.error)
  }, [])

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
          {teamMembers.map((member, index) => {
            const imageUrl =
              member.Foto && !imgErrors[member.id] ? pb.files.getURL(member, member.Foto) : ''

            return (
              <FadeIn key={member.id} delay={index * 150} className="h-full">
                <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card">
                  <div className="aspect-[3/4] relative overflow-hidden group shrink-0 bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80"></div>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={member.Nome}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => setImgErrors((prev) => ({ ...prev, [member.id]: true }))}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <User className="w-24 h-24 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8 relative z-20 -mt-20 pt-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-1 text-foreground">{member.Nome}</h3>
                    <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                      {member.Cargo}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      {member.Bio}
                    </p>
                    <div className="flex gap-4">
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
          })}
        </div>
      </div>
    </section>
  )
}
