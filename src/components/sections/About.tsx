import { FadeIn } from '@/components/ui/fade-in'
import { Scale, Shield, Landmark } from 'lucide-react'
import founderImage from '@/assets/whatsapp-image-2026-02-26-at-12.02.46-1-ca4fe.jpeg'

export function About() {
  const values = [
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: 'Justiça',
      description: 'Compromisso com a verdade e a equidade.',
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Segurança',
      description: 'Proteção sólida para seus interesses.',
    },
    {
      icon: <Landmark className="h-6 w-6 text-primary" />,
      title: 'Tradição',
      description: 'Anos de experiência e resultados comprovados.',
    },
  ]

  return (
    <section id="sobre" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-2xl bg-zinc-800">
              <img
                src={founderImage}
                alt="Dr. José Roberto de Souza - Sócio Fundador"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-primary font-bold text-lg mb-1">Dr. José Roberto de Souza</p>
                <p className="text-zinc-300 text-sm uppercase tracking-widest">Sócio Fundador</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                  Sobre o Escritório
                </h2>
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-100 leading-tight">
                  Tradição, Excelência e <br />
                  <span className="text-primary">Compromisso Ético</span>
                </h3>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                <p>
                  O escritório <strong>JOSÉ ROBERTO DE SOUZA Advogados Associados</strong> possui
                  uma trajetória marcada pela defesa incansável e intransigente dos direitos de seus
                  clientes.
                </p>
                <p>
                  Fundado pelo Dr. José Roberto de Souza, nosso escritório se destaca pela
                  excelência técnica e pelo compromisso ético inabalável. Atuamos em casos de alta
                  complexidade, oferecendo soluções jurídicas sofisticadas, eficientes e
                  personalizadas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-800/50">
                {values.map((value, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <div className="p-3 bg-zinc-800/50 rounded-lg w-fit">{value.icon}</div>
                    <h4 className="text-zinc-100 font-semibold">{value.title}</h4>
                    <p className="text-zinc-500 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
