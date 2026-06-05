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
    name: 'Carlos Eduardo (PF)',
    date: 'Janeiro/2023',
    rating: 5,
    quote:
      'Após meses tentando resolver sozinho uma fraude no meu cartão, o Dr. Emanuel da equipe do Dr. José Roberto conseguiu a restituição integral em tempo recorde. Profissionalismo impecável.',
  },
  {
    name: 'Restaurante Sabor & Arte (PJ)',
    date: 'Março/2023',
    rating: 5,
    quote:
      'O escritório realizou uma auditoria no nosso IPTU que resultou em uma economia anual significativa. Essencial para o nosso fluxo de caixa.',
  },
  {
    name: 'Mariana Oliveira (PF)',
    date: 'Junho/2023',
    rating: 5,
    quote:
      'Excelente atendimento no caso de golpe do PIX. Recuperei meu dinheiro e tive todo o suporte emocional e jurídico necessário.',
  },
  {
    name: 'Construtora Alvorada (PJ)',
    date: 'Agosto/2023',
    rating: 5,
    quote:
      'A expertise da equipe em direitos bancários nos ajudou a reaver valores desviados por fraudes eletrônicas complexas. Recomendamos fortemente.',
  },
  {
    name: 'Roberto Silveira (PF)',
    date: 'Novembro/2023',
    rating: 5,
    quote:
      'Minha revisão de IPTU foi um sucesso. O valor caiu quase pela metade após a intervenção técnica do escritório.',
  },
  {
    name: 'Clínica OdontoClean (PJ)',
    date: 'Janeiro/2024',
    rating: 5,
    quote:
      'Sucesso total na contestação de cobranças indevidas do banco. O Dr. Emanuel e sua equipe são referência em agilidade.',
  },
  {
    name: 'Fernanda Lima (PF)',
    date: 'Abril/2024',
    rating: 5,
    quote:
      'Fui vítima de uma fraude bancária sofisticada e já tinha perdido as esperanças. O escritório não só recuperou o valor como garantiu danos morais.',
  },
  {
    name: 'Logística Express (PJ)',
    date: 'Julho/2024',
    rating: 5,
    quote:
      'A redução do IPTU do nosso galpão industrial foi um divisor de águas. Trabalho técnico de altíssimo nível.',
  },
  {
    name: 'João Pedro Santos (PF)',
    date: 'Setembro/2024',
    rating: 5,
    quote:
      'Atendimento humanizado e focado em resultados. Resolveram meu problema com o banco de forma definitiva.',
  },
  {
    name: 'Hotel Fazenda Horizonte (PJ)',
    date: 'Dezembro/2024',
    rating: 5,
    quote:
      'Recuperamos valores expressivos de fraudes em boletos graças à estratégia jurídica certeira deste escritório.',
  },
  {
    name: 'Beatriz Costa (PF)',
    date: 'Fevereiro/2025',
    rating: 5,
    quote:
      'O Dr. José Roberto conseguiu anular o aumento abusivo do meu IPTU. O atendimento é premium e muito transparente.',
  },
  {
    name: 'TechInova Soluções (PJ)',
    date: 'Maio/2025',
    rating: 5,
    quote:
      'Enfrentamos uma fraude bancária de grande escala e a atuação do escritório foi decisiva para a preservação do nosso patrimônio.',
  },
  {
    name: 'Ricardo Almeida (PF)',
    date: 'Agosto/2025',
    rating: 5,
    quote:
      'Recuperei cada centavo do golpe do empréstimo consignado. Equipe extremamente preparada e atenciosa.',
  },
  {
    name: 'Supermercado Preço Justo (PJ)',
    date: 'Outubro/2025',
    rating: 5,
    quote:
      'A revisão tributária do IPTU foi feita com maestria. Economia real e segurança jurídica para nossa empresa.',
  },
  {
    name: 'Patrícia Mendes (PF)',
    date: 'Janeiro/2026',
    rating: 5,
    quote:
      'O melhor escritório para quem precisa de justiça contra abusos bancários. Eficiência que gera confiança.',
  },
  {
    name: 'Indústria Metalúrgica Vale (PJ)',
    date: 'Março/2026',
    rating: 5,
    quote:
      'Sucesso absoluto na recuperação de fundos após ataque cibernético bancário. O Dr. José Roberto é um estrategista nato.',
  },
  {
    name: 'André Luiz (PF)',
    date: 'Maio/2026',
    rating: 5,
    quote:
      'IPTU reduzido e dinheiro no bolso. O processo foi muito mais rápido do que eu imaginava. Obrigado Dr. Valdomiro e equipe',
  },
  {
    name: 'Escola Aprender (PJ)',
    date: 'Julho/2026',
    rating: 5,
    quote:
      'Tivemos um problema sério com fraudes em transferências e o escritório resolveu tudo com extrema competência.',
  },
  {
    name: 'Luciana Ferreira (PF)',
    date: 'Setembro/2026',
    rating: 5,
    quote:
      'Segurança e clareza em cada etapa. Recuperei meu saldo bancário após uma fraude por aplicativo.',
  },
  {
    name: 'Condomínio Edifício Prime (PJ)',
    date: 'Dezembro/2026',
    rating: 5,
    quote:
      'Fechamos o ano com uma vitória histórica na redução do IPTU das áreas comuns. Trabalho de excelência.',
  },
  {
    name: 'Renan Stolf Farhat',
    date: 'Há 13 semanas',
    rating: 5,
    quote: 'Sempre a disposição e sempre entregando excelência no trabalho, considero referência.',
  },
  {
    name: 'Stephanie Stolf Farhat',
    date: 'Há 13 semanas',
    rating: 5,
    quote: 'Maravilhosa!100% de dedicação e profissionalismo',
  },
  {
    name: 'Selma carvalho rufino Carvalho',
    date: 'Há 13 semanas',
    rating: 5,
    quote: 'Um excelente profissional super indico !',
  },
  {
    name: 'Elson Figueiredo',
    date: 'Há 18 semanas',
    rating: 5,
    quote:
      'Sou diretor da Eletrovital Engenharia e o Dr. José Roberto de Souza é nosso suporte jurídico em todos contratos, já resolveu muitas questões tributárias com ações judiciais.',
  },
  {
    name: 'Vera Moreno',
    date: 'Há 18 semanas',
    rating: 5,
    quote:
      'Dr José Roberto, muito esclarecedor com conhecimento na área tributária. Tivemos uma excelente consulta de início e tiramos nossas dúvidas de imediato. Obrigada',
  },
  {
    name: 'Cassia Maria',
    date: 'Há 19 semanas',
    rating: 5,
    quote:
      'Eu gostaria de deixar aqui meu feedback para o melhor advogado de Campinas, Dr José Roberto, super prestativo em tudo,...',
  },
  {
    name: 'Fernanda Coutinho',
    date: 'Há 20 semanas',
    rating: 5,
    quote:
      'Atendimento humano e extremamente competente. Responde as duvidas com agilidade, organizado, sempre posicionando sobre o andamento do caso. Agradeço muito por toda atenção.',
  },
  { name: 'Ricardo Kardel', date: 'Há 21 semanas', rating: 5, quote: 'Desenrolando como sempre!!' },
  {
    name: 'Raquel Pereira Santana',
    date: 'Há 21 semanas',
    rating: 5,
    quote:
      'Um excelente profissional, Advogado que transmite confiança e segurança aos seus clientes!...',
  },
  {
    name: 'Viviane Almeida',
    date: 'Há 45 semanas',
    rating: 5,
    quote: 'Advogado extremamente comprometido em resolver os problemas do cliente!! recomendo!!',
  },
  {
    name: 'Carolina Doná',
    date: 'Há 45 semanas',
    rating: 5,
    quote:
      'O escritório transmite excelência e comprometimento desde o primeiro contato. Uma equipe preparada, dedicada e com postura ética — é sempre bom ter profissionais assim na rede de contatos. Recomendo!',
  },
  {
    name: 'Thayná',
    date: 'Há 45 semanas',
    rating: 5,
    quote: 'Advogado muito preparado, me atendeu super bem! Recomendo demais!!',
  },
  {
    name: 'Eduardo Ramos',
    date: '21 de jan. de 2025',
    rating: 5,
    quote:
      'Excelentíssimo profissional, de muita confiança, tratou tudo com um profissionalismo inefável. Tudo foi conduzido com muita segurança e me transmitiu grande tranquilidade! Recomendadíssimo!',
  },
  {
    name: 'Regiane Hilarioni Hirata',
    date: '21 de jan. de 2025',
    rating: 5,
    quote:
      'Excelente profissional. Ótimas orientações sobre quaisquer dúvidas que tive. Sempre solícito.',
  },
  {
    name: 'Fernanda Morelli',
    date: '20 de jan. de 2025',
    rating: 5,
    quote: 'Excelente advogado! Extremamente competente e educado.',
  },
  {
    name: 'padaria paula souza',
    date: '20 de jan. de 2025',
    rating: 5,
    quote: 'Um dos melhores advogados de Campinas sp',
  },
  {
    name: 'Simone Camargo',
    date: '20 de jan. de 2025',
    rating: 5,
    quote: 'Excelente profissional, superou todas as minhas expectativas..',
  },
  {
    name: 'Michele Calois',
    date: '20 de jan. de 2025',
    rating: 5,
    quote:
      'Estava com prossessos parados ,o dr José Roberto Souza, conseguiu por em andamento , obrigada. Ótimo profissional.',
  },
  {
    name: 'Luciano Toledo',
    date: '20 de jan. de 2025',
    rating: 5,
    quote: 'Excelente profissional, serviço de qualidade, transmite confiança!',
  },
  {
    name: 'eliane vieira',
    date: '20 de jan. de 2025',
    rating: 5,
    quote: 'Dr. Jose Roberto de Souza est un bon professionnel. Je vous recommande!',
  },
  {
    name: 'Barbara Danielly',
    date: '20 de jan. de 2025',
    rating: 5,
    quote:
      'Excelente profissional, com ótimas instalações e bem localizado. O atendimento foi muito bom, claro e conciso. Recomendo.',
  },
  {
    name: 'Antônio Carlos Vasconcellos Zuquim',
    date: '20 de jan. de 2025',
    rating: 5,
    quote: 'Prezado Dr. José,...',
  },
  {
    name: 'Henrique',
    date: '19 de jan. de 2025',
    rating: 5,
    quote:
      'O escritório de advocacia do Dr. José presta um serviço excepcional. O atendimento é altamente profissional, com uma...',
  },
  {
    name: 'Malu',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Muito confortável e ótimo profissional. Recomendo!',
  },
  {
    name: 'Auxiliar jurídico Anaritafreitas',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Top demais',
  },
  {
    name: 'Angela Shabakat',
    date: '19 de jan. de 2025',
    rating: 5,
    quote:
      'Sempre fui muito bem atendida. Respostas de todas as minhas dúvidas e andamento excepcional no meu processo!',
  },
  {
    name: 'andrea camargo',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Atendimento excelente Profissional competente!...',
  },
  {
    name: 'Gledson Josua',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Grande Profissional, recomendo sempre!',
  },
  {
    name: 'Paulo Macedo',
    date: '19 de jan. de 2025',
    rating: 5,
    quote:
      'Ótimo escritório de advocacia. Atendimento personalizado, com profissionais experientes nas diversas áreas do Direito.',
  },
  {
    name: 'Angela Fiori',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Um excelente advogado, que sempre que preciso resolve todos os meus problemas!!',
  },
  {
    name: 'Gislene Micheleto',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Advogado muito competente Ótimo profissional',
  },
  {
    name: 'Alessandro Altomani',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Excelente Profissional, recomendo!',
  },
  {
    name: 'Dulce Santo De Oliveira',
    date: '19 de jan. de 2025',
    rating: 5,
    quote:
      'Ótimo profissional, sempre que preciso de seu trabalho, tenho feedback rápido e com preço justo',
  },
  {
    name: 'SM MEDICINA&SAUDE',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Excelente advogado, já auxiliou muitas vezes nossa família',
  },
  {
    name: 'daniela reysla',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Sempre muito atenciosos! Recomendo.',
  },
  {
    name: 'Sérgio Pavesi Figuerôa',
    date: '19 de jan. de 2025',
    rating: 5,
    quote: 'Dr José Roberto é um grande profissional, recomendo.',
  },
  {
    name: 'Tony Ribeiro',
    date: '18 de jan. de 2025',
    rating: 5,
    quote: 'Excelente, recomendo !!!',
  },
]

export function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              Reconhecimento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              O Que Dizem Nossos Clientes
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{ loop: true, align: 'start' }}
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {TESTIMONIALS.map((testimonial, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card border border-border/50 p-6 md:p-8 rounded-2xl h-full flex flex-col relative transition-colors hover:border-primary/30">
                      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-8 flex-1 leading-relaxed text-sm">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-auto pt-4 border-t border-border/50">
                        <p
                          className="text-foreground font-bold text-sm truncate"
                          title={testimonial.name}
                        >
                          {testimonial.name}
                        </p>
                        <p className="text-primary text-xs font-medium mt-1">{testimonial.date}</p>
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
