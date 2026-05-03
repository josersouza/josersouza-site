import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

import { AuthProvider } from '@/hooks/use-auth'
import Login from './pages/admin/Login'
import AdminLayout from './components/admin/AdminLayout'
import ArticlesList from './pages/admin/ArticlesList'
import ArticleForm from './pages/admin/ArticleForm'
import TeamMembersList from './pages/admin/TeamMembersList'
import TeamMemberForm from './pages/admin/TeamMemberForm'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<ArticlesList />} />
            <Route path="artigos/new" element={<ArticleForm />} />
            <Route path="artigos/:id" element={<ArticleForm />} />
            <Route path="equipe" element={<TeamMembersList />} />
            <Route path="equipe/new" element={<TeamMemberForm />} />
            <Route path="equipe/:id" element={<TeamMemberForm />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
