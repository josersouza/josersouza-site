import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { getArtigo, createArtigo, updateArtigo } from '@/services/artigos'
import { getTeamMembers } from '@/services/team_members'
import { ArrowLeft, Save } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { extractFieldErrors } from '@/lib/pocketbase/errors'

export default function ArticleForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [authors, setAuthors] = useState<any[]>([])
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const { register, handleSubmit, setValue, watch, reset } = useForm()

  useEffect(() => {
    getTeamMembers().then(setAuthors)
    if (id) {
      getArtigo(id).then((data) => {
        reset({
          titulo: data.titulo,
          slug: data.slug,
          conteudo: data.conteudo,
          resumo: data.resumo,
          imagem_url: data.imagem_url,
          data_publicacao: data.data_publicacao ? data.data_publicacao.substring(0, 10) : '',
          seo_titulo: data.seo_titulo,
          seo_descricao: data.seo_descricao,
          autor: data.autor,
        })
      })
    }
  }, [id, reset])

  const onSubmit = async (data: any) => {
    setLoading(true)
    setFieldErrors({})
    try {
      const formData = new FormData()

      const textFields = [
        'titulo',
        'slug',
        'conteudo',
        'resumo',
        'imagem_url',
        'seo_titulo',
        'seo_descricao',
        'autor',
      ]
      textFields.forEach((key) => {
        if (data[key]) formData.append(key, data[key])
      })

      if (data.data_publicacao) {
        formData.append('data_publicacao', new Date(data.data_publicacao).toISOString())
      }

      if (data.imagem_capa && data.imagem_capa.length > 0) {
        formData.append('imagem_capa', data.imagem_capa[0])
      }
      if (data.anexo_arquivo && data.anexo_arquivo.length > 0) {
        formData.append('anexo_arquivo', data.anexo_arquivo[0])
      }

      if (id) {
        await updateArtigo(id, formData)
        toast({ title: 'Artigo atualizado com sucesso.' })
      } else {
        await createArtigo(formData)
        toast({ title: 'Artigo criado com sucesso.' })
      }
      navigate('/admin')
    } catch (error: any) {
      const errors = extractFieldErrors(error)
      if (Object.keys(errors).length > 0) {
        setFieldErrors(errors)
        toast({ title: 'Verifique os campos com erro', variant: 'destructive' })
      } else {
        toast({ title: 'Erro ao salvar', description: error.message, variant: 'destructive' })
      }
    } finally {
      setLoading(false)
    }
  }

  const titulo = watch('titulo')
  useEffect(() => {
    if (!id && titulo && typeof titulo === 'string') {
      setValue(
        'slug',
        titulo
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, ''),
      )
    }
  }, [titulo, id, setValue])

  return (
    <div className="space-y-6 max-w-4xl animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Link to="/admin">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {id ? 'Editar Artigo' : 'Novo Artigo'}
          </h1>
          <p className="text-muted-foreground mt-1">Preencha os detalhes da publicação.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="titulo">Título *</Label>
                <Input id="titulo" {...register('titulo', { required: true })} />
                {fieldErrors.titulo && <p className="text-sm text-red-500">{fieldErrors.titulo}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL) *</Label>
                <Input id="slug" {...register('slug', { required: true })} />
                {fieldErrors.slug && <p className="text-sm text-red-500">{fieldErrors.slug}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="data_publicacao">Data de Publicação *</Label>
                <Input
                  id="data_publicacao"
                  type="date"
                  {...register('data_publicacao', { required: true })}
                />
                {fieldErrors.data_publicacao && (
                  <p className="text-sm text-red-500">{fieldErrors.data_publicacao}</p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="resumo">Resumo *</Label>
                <Textarea id="resumo" {...register('resumo', { required: true })} rows={3} />
                {fieldErrors.resumo && <p className="text-sm text-red-500">{fieldErrors.resumo}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="conteudo">Conteúdo Completo *</Label>
                <Textarea
                  id="conteudo"
                  {...register('conteudo', { required: true })}
                  rows={15}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Você pode usar HTML para formatação rica.
                </p>
                {fieldErrors.conteudo && (
                  <p className="text-sm text-red-500">{fieldErrors.conteudo}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="autor">Autor</Label>
                <select
                  id="autor"
                  {...register('autor')}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione um autor...</option>
                  {authors.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.Nome}
                    </option>
                  ))}
                </select>
                {fieldErrors.autor && <p className="text-sm text-red-500">{fieldErrors.autor}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="imagem_capa">Imagem de Capa (Upload)</Label>
                <Input id="imagem_capa" type="file" accept="image/*" {...register('imagem_capa')} />
                {fieldErrors.imagem_capa && (
                  <p className="text-sm text-red-500">{fieldErrors.imagem_capa}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="imagem_url">Ou URL da Imagem</Label>
                <Input id="imagem_url" type="url" {...register('imagem_url')} />
                {fieldErrors.imagem_url && (
                  <p className="text-sm text-red-500">{fieldErrors.imagem_url}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="anexo_arquivo">Arquivo Anexo (PDF, etc)</Label>
                <Input id="anexo_arquivo" type="file" {...register('anexo_arquivo')} />
                {fieldErrors.anexo_arquivo && (
                  <p className="text-sm text-red-500">{fieldErrors.anexo_arquivo}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo_titulo">SEO Título</Label>
                <Input id="seo_titulo" {...register('seo_titulo')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo_descricao">SEO Descrição</Label>
                <Textarea id="seo_descricao" {...register('seo_descricao')} rows={2} />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  'Salvando...'
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Salvar Artigo
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
