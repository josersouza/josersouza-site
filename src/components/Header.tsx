import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'O Escritório', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#atuacao' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-border/20 py-4 shadow-sm'
          : 'bg-background/50 backdrop-blur-sm py-6',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] font-bold tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 border-l border-border/50 pl-6">
              <a
                href="https://wa.me/5519994691494"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="tracking-widest">19 99469.1494</span>
              </a>
              <Button
                className="rounded-none uppercase tracking-widest text-xs font-bold px-8 h-12"
                asChild
              >
                <a href="#contato">Agendar Consulta</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2 -mr-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[100%] bg-background/95 backdrop-blur-md border-b border-border/20 transition-all duration-300 ease-in-out overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-8 shadow-xl' : 'max-h-0 opacity-0',
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-8">
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-sm font-bold text-foreground hover:text-primary transition-colors uppercase tracking-[0.15em]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4 pt-4 border-t border-border/50">
            <a
              href="https://wa.me/5519994691494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors mb-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="tracking-widest">19 99469.1494</span>
            </a>
            <Button
              className="w-full rounded-none uppercase tracking-widest text-xs font-bold h-12"
              size="lg"
              asChild
            >
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
