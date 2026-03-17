import { FadeIn } from '@/components/ui/fade-in'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Quote, Star } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

const TESTIMONIALS = [
  {
    quote:
      'A atuação do escritório foi decisiva para a reestruturação da nossa empresa. A visão estratégica e a segurança jurídica que transmitem são incomparáveis.',
    name: 'Carlos M.',
    role: 'Diretor Executivo',
    rating: 5,
  },
  {
    quote:
      'Profissionalismo impecável desde a primeira consulta. A dedicação do Dr. José Roberto ao meu caso me trouxe tranquilidade em um momento muito difícil.',
    name: 'Ana P. Silva',
    role: 'Cliente Civil',
    rating: 5,
  },
  {
    quote:
      'Uma equipe extremamente capacitada e sempre disponível. O trabalho preventivo realizado por eles evitou inúmeros passivos trabalhistas.',
    name: 'Ricardo V.',
    role: 'Sócio Administrador',
    rating: 5,
  },
  {
    quote:
      'Excelência técnica rara de se encontrar. Resolveram um litígio societário complexo de forma ágil e extremamente benéfica para as partes.',
    name: 'Juliana T.',
    role: 'Empresária',
    rating: 5,
  },
]

export function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Reconhecimento
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              O Que Dizem Nossos Clientes
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="max-w-4xl mx-auto px-8 md:px-12">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{ loop: true, align: 'start' }}
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {TESTIMONIALS.map((testimonial, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2">
                    <div className="bg-card border border-border/50 p-8 rounded-2xl h-full flex flex-col relative">
                      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-8 flex-1 leading-relaxed text-lg">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-auto">
                        <p className="text-foreground font-bold">{testimonial.name}</p>
                        <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12 border-border/50 bg-background hover:bg-primary hover:text-white" />
              <CarouselNext className="-right-4 md:-right-12 border-border/50 bg-background hover:bg-primary hover:text-white" />
            </Carousel>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
