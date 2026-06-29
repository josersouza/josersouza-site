import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Link2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { getArtigoBySlug, type Artigo } from '@/services/artigos'
import { SEO } from '@/components/SEO'
import pb from '@/lib/pocketbase/client'

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<Artigo | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (slug) {
      getArtigoBySlug(slug)
        .then(setPost)
        .catch(() => {
          navigate('/404', { replace: true })
        })
        .finally(() => setLoading(false))
    }
  }, [slug, navigate])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  if (!post) return null

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(post.titulo)

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    toast({
      description: 'Link copiado para a área de transferência!',
    })
  }

  const internalImageUrl = post.imagem_capa
    ? pb.files.getURL(post, post.imagem_capa)
    : post.imagem_url || ''

  const imageUrl = internalImageUrl.replace(
    import.meta.env.VITE_POCKETBASE_URL,
    'https://www.josersouza.com.br',
  )

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.titulo,
    description: post.seo_descricao || post.resumo,
    datePublished: post.data_publicacao,
    author: {
      '@type': 'Person',
      name: post.expand?.autor?.Nome || 'JOSÉ ROBERTO DE SOUZA Advogados Associados',
    },
    image: imageUrl,
    url: shareUrl,
    publisher: {
      '@type': 'LegalService',
      name: 'JOSÉ ROBERTO DE SOUZA Advogados Associados',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.josersouza.com.br/logo.png',
      },
    },
  }

  return (
    <article className="pt-32 pb-24 min-h-screen bg-background">
      <SEO
        title={post.seo_titulo || `${post.titulo} | JOSÉ ROBERTO DE SOUZA Advogados`}
        description={post.seo_descricao || post.resumo}
        schema={[articleSchema]}
      />
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
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.data_publicacao).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
              </span>
            </div>
            {post.expand?.autor && (
              <span className="font-medium text-foreground">Por {post.expand.autor.Nome}</span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            {post.titulo}
          </h1>
        </FadeIn>
      </div>

      {imageUrl && (
        <FadeIn delay={200}>
          <div className="w-full max-w-5xl mx-auto my-12 px-4">
            <div className="aspect-[21/9] overflow-hidden rounded-xl bg-muted border border-border/50">
              <img
                src={imageUrl}
                alt={post.titulo}
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </div>
        </FadeIn>
      )}

      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn delay={400}>
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-orange-400 prose-strong:text-foreground prose-li:text-muted-foreground prose-blockquote:border-l-primary prose-blockquote:bg-secondary/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:font-normal prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.conteudo }}
          />

          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              Compartilhe este artigo
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                asChild
              >
                <a
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartilhar no WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-colors"
                asChild
              >
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartilhar no LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-colors"
                asChild
              >
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartilhar no X (Twitter)"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/50 transition-colors"
                asChild
              >
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartilhar no Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                onClick={handleCopyLink}
                aria-label="Copiar link"
              >
                <Link2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex justify-center">
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
