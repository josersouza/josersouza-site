import { Link, Outlet, useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Users, LogOut, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'

export default function AdminLayout() {
  const { user, signOut } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  const isArtigos = location.pathname === '/admin' || location.pathname.startsWith('/admin/artigos')
  const isEquipe = location.pathname.startsWith('/admin/equipe')

  return (
    <div className="min-h-screen flex w-full bg-muted/10">
      <aside className="w-64 bg-background border-r flex flex-col hidden md:flex shrink-0">
        <div className="p-6 border-b flex justify-center">
          <Logo className="scale-75 origin-left" />
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin">
            <Button variant={isArtigos ? 'secondary' : 'ghost'} className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Gerenciar Artigos
            </Button>
          </Link>
          <Link to="/admin/equipe">
            <Button variant={isEquipe ? 'secondary' : 'ghost'} className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Gerenciar Equipe
            </Button>
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={signOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
