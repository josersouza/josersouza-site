import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link, useParams, Navigate } from 'react-router-dom'
import { blogPosts } from '@/data/blog'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { useEffect } from 'react'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return <Navigate to="/404" replace />
  }

  return (
    <article className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <Button
            variant="ghost"
            className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar para o Blog
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full border-none px-3 py-1">
              {post.category}
            </Badge>
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            {post.title}
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={200}>
        <div className="w-full max-w-5xl mx-auto my-12 px-4">
          <div className="aspect-[21/9] overflow-hidden rounded-xl bg-muted border border-border/50">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
          </div>
        </div>
      </FadeIn>

      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn delay={400}>
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-orange-400 prose-strong:text-foreground prose-li:text-muted-foreground prose-blockquote:border-l-primary prose-blockquote:bg-secondary/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:font-normal prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <Tag className="w-4 h-4" />
              <span>Publicado em: {post.category}</span>
            </div>
            <Button
              asChild
              className="rounded-full px-8 uppercase tracking-widest text-xs font-bold h-12"
            >
              <Link to="/blog">Ver mais artigos</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </article>
  )
}
