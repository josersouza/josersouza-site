import { Logo } from '@/components/Logo'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-24 pb-12 border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Logo className="opacity-90" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-light pr-4">
              Escritório de advocacia pautado na ética e excelência. Dedicação exclusiva na defesa
              incansável dos direitos de nossos clientes, com atendimento estritamente
              personalizado.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/josersouza_advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors rounded-none"
                aria-label="Instagram @josersouza_advogados"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/josersouza_advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors rounded-none"
                aria-label="Facebook @josersouza_advogados"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-bold tracking-[0.2em] uppercase text-xs text-foreground">Áreas</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
              <li>
                <a href="#atuacao" className="hover:text-primary transition-colors">
                  Direito Civil
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-primary transition-colors">
                  Trabalhista
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-primary transition-colors">
                  Empresarial
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-primary transition-colors">
                  Família
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-bold tracking-[0.2em] uppercase text-xs text-foreground">Menu</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  O Escritório
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-primary transition-colors">
                  Atuação
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-bold tracking-[0.2em] uppercase text-xs text-foreground">
              Contato
            </h4>
            <ul className="flex flex-col gap-5 text-sm text-muted-foreground font-light">
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="group-hover:text-foreground transition-colors leading-relaxed">
                  Rua Conceição, 233, Sala 709
                  <br />
                  Centro, Campinas - SP, CEP 13.010-050
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="group-hover:text-foreground transition-colors">19 99469.1494</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="group-hover:text-foreground transition-colors">
                  contato@josersouza.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-light uppercase tracking-widest">
          <p>© {new Date().getFullYear()} JOSÉ ROBERTO DE SOUZA ADVOGADOS ASSOCIADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
