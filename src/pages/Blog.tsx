import { FadeIn } from '@/components/ui/fade-in'
import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getArtigos, type Artigo } from '@/services/artigos'
import { SEO } from '@/components/SEO'
import pb from '@/lib/pocketbase/client'

export default function Blog() {
  const [posts, setPosts] = useState<Artigo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    getArtigos()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <SEO
        title="Blog Jurídico | JOSÉ ROBERTO DE SOUZA Advogados"
        description="Artigos, atualizações e insights estratégicos sobre Direito Corporativo, Tributário e Empresarial. Encontre respostas claras para os seus desafios jurídicos."
        ogTitle="Blog Jurídico | JOSÉ ROBERTO DE SOUZA Advogados"
        ogDescription="Artigos, atualizações e insights estratégicos sobre Direito Corporativo, Tributário e Empresarial. Encontre respostas claras para os seus desafios jurídicos."
        ogImage="https://www.josersouza.com.br/og-image.png"
        ogUrl="https://www.josersouza.com.br/blog"
        ogType="website"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Como podemos ajudar a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                esclarecer seus direitos?
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Respostas diretas e insights práticos sobre Direito Corporativo, Tributário, Civil e
              Empresarial. Informação de qualidade para tomada de decisões seguras.
            </p>
          </FadeIn>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-muted-foreground">Carregando artigos...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => {
              const internalImageUrl = post.imagem_capa
                ? pb.files.getURL(post, post.imagem_capa)
                : post.imagem_url || ''

              const imageUrl = internalImageUrl.replace(
                import.meta.env.VITE_POCKETBASE_URL,
                'https://www.josersouza.com.br',
              )

              return (
                <FadeIn key={post.id} delay={idx * 150}>
                  <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors group bg-card border-border/50 shadow-sm hover:shadow-lg hover:shadow-primary/5">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={post.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                        />
                      )}
                    </div>
                    <CardHeader className="flex-1 space-y-3 p-6 pb-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {new Date(post.data_publicacao).toLocaleDateString('pt-BR', {
                              timeZone: 'UTC',
                            })}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.titulo}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {post.resumo}
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
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
