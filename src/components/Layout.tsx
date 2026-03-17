import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './FloatingWhatsApp'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
