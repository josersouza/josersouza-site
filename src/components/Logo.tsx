import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
        <span className="absolute text-4xl font-black text-primary/40 -translate-x-2 translate-y-0.5 tracking-tighter mix-blend-screen">
          j
        </span>
        <span className="absolute text-4xl font-black text-primary/70 -translate-x-1 translate-y-0 tracking-tighter mix-blend-screen">
          j
        </span>
        <span className="absolute text-4xl font-black text-primary translate-x-1 -translate-y-0.5 tracking-tighter">
          r
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm md:text-base tracking-[0.15em] text-foreground uppercase leading-none">
          José Roberto de Souza
        </span>
        <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-muted-foreground uppercase leading-tight mt-1">
          Advogados Associados
        </span>
      </div>
    </div>
  )
}
