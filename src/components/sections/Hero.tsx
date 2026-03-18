import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { ArrowRight, Scale } from 'lucide-react'
import founderImage from '@/assets/whatsapp-image-2026-02-26-at-12.02.45-12969.jpeg'

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-zinc-950" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <FadeIn className="max-w-2xl flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm font-medium tracking-wide mb-8 w-fit mx-auto lg:mx-0 shadow-lg backdrop-blur-sm">
              <Scale className="w-4 h-4 text-primary" />
              <span>JOSÉ ROBERTO DE SOUZA ADVOGADOS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              Defendendo seus interesses com <span className="text-primary">Excelência</span> e{' '}
              <span className="text-primary">Tradição</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Atuação jurídica estratégica com foco em resultados concretos. Nossa equipe liderada
              pelo Dr. José Roberto de Souza oferece assessoria especializada e ética para cada
              caso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                Fale com um Advogado
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-14 px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white bg-zinc-900/50 backdrop-blur-sm"
              >
                Nossas Áreas de Atuação
              </Button>
            </div>

            <div className="mt-14 pt-8 border-t border-zinc-800/50 flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 text-sm text-zinc-500">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-zinc-200 mb-1">+20</span>
                <span className="font-medium tracking-wide uppercase text-xs">
                  Anos de Experiência
                </span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-zinc-800" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-zinc-200 mb-1">+5k</span>
                <span className="font-medium tracking-wide uppercase text-xs">
                  Casos Resolvidos
                </span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-zinc-800" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-zinc-200 mb-1">100%</span>
                <span className="font-medium tracking-wide uppercase text-xs">Comprometimento</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="relative mx-auto w-full max-w-[420px] lg:max-w-[500px] mt-8 lg:mt-0">
            {/* Dark aesthetic glow effect for the image container */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-[2rem] blur-3xl -z-10" />

            <div className="relative rounded-[2rem] overflow-hidden border border-zinc-800/80 bg-zinc-900/50 shadow-2xl shadow-black/60 aspect-[3/4] group">
              <img
                src={founderImage}
                alt="Dr. José Roberto de Souza - Sócio Fundador"
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />

              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800/50 p-6 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Dr. José Roberto de Souza
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                    <p className="text-zinc-400 font-medium tracking-wide uppercase text-xs">
                      Sócio Fundador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
