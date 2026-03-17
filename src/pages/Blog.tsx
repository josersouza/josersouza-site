import { FadeIn } from '@/components/ui/fade-in'
import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { blogPosts } from '@/data/blog'
import { Calendar, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Nosso{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Blog Jurídico
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Artigos, atualizações e insights estratégicos sobre Direito Corporativo, Tributário e
              Empresarial.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 150}>
              <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors group bg-card border-border/50 shadow-sm hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                </div>
                <CardHeader className="flex-1 space-y-3 p-6 pb-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <Badge
                      variant="outline"
                      className="text-primary border-primary/30 rounded-full bg-primary/5 px-3 py-0.5"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto hover:bg-transparent text-primary group-hover:text-orange-400 transition-colors font-semibold"
                    asChild
                  >
                    <Link to={`/blog/${post.slug}`}>
                      Ler artigo completo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
