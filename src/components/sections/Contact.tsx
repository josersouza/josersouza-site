import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { MapPin, Phone, Mail, MessageSquare, Map } from 'lucide-react'

export function Contact() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Mock form submission
    toast({
      title: 'Mensagem Enviada com Sucesso!',
      description: 'Nossa equipe entrará em contato em breve.',
      duration: 5000,
    })
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary/20 border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn direction="right">
            <div>
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
                Fale Conosco
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Agende uma Consulta Estratégica
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Nossa equipe está pronta para avaliar seu caso com total sigilo e dedicação.
                Preencha o formulário ou utilize nossos canais diretos.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground mt-1">19 99469.1494</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-muted-foreground mt-1">contato@josersouza.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground mt-1 mb-4 leading-relaxed">
                      <a
                        href="https://maps.app.goo.gl/a2BZpMvCwYnwAek48"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors block"
                      >
                        Rua Conceição, 233, Sala 709
                        <br />
                        Centro, Campinas - SP, CEP 13.010-050
                      </a>
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 text-primary hover:text-primary border-primary/20 hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href="https://maps.app.goo.gl/a2BZpMvCwYnwAek48"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Map className="w-4 h-4" />
                        Ver no Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full gap-2 text-base h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white"
                asChild
              >
                <a href="https://wa.me/5519994691494" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5" />
                  Falar via WhatsApp
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="bg-card border border-border/50 p-8 md:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Ex: João da Silva"
                    className="bg-background h-12"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="exemplo@email.com"
                      className="bg-background h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(19) 90000-0000"
                      className="bg-background h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    required
                    placeholder="Sobre o que deseja falar?"
                    className="bg-background h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Descreva brevemente o seu caso..."
                    className="bg-background min-h-[150px] resize-y"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-md text-base h-14">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
