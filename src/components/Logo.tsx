import { Link } from 'react-router-dom'
import logoImage from '@/assets/logo-josersouza-sem-fundo-50996.png'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'flex items-center gap-3 sm:gap-4 transition-opacity hover:opacity-80 group',
        className,
      )}
    >
      <img
        src={logoImage}
        alt="JOSÉ ROBERTO DE SOUZA Logo"
        className="h-10 sm:h-12 w-auto object-contain"
      />
      <div className="flex flex-col justify-center">
        <span className="font-bold tracking-[0.15em] uppercase leading-none text-foreground text-sm sm:text-base transition-colors group-hover:text-primary">
          JOSÉ ROBERTO DE SOUZA
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground mt-1.5 uppercase leading-none font-medium">
          ADVOGADOS ASSOCIADOS
        </span>
      </div>
    </Link>
  )
}
