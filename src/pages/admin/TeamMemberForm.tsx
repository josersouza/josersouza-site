import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { getTeamMember, createTeamMember, updateTeamMember } from '@/services/team_members'
import { ArrowLeft, Save } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { extractFieldErrors } from '@/lib/pocketbase/errors'

export default function TeamMemberForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (id) {
      getTeamMember(id).then((data) => {
        reset({
          Nome: data.Nome,
          Cargo: data.Cargo,
          Bio: data.Bio,
          LinkedIn: data.LinkedIn,
          Email: data.Email,
          Ordem: data.Ordem,
        })
      })
    }
  }, [id, reset])

  const onSubmit = async (data: any) => {
    setLoading(true)
    setFieldErrors({})
    try {
      const formData = new FormData()

      const textFields = ['Nome', 'Cargo', 'Bio', 'LinkedIn', 'Email']
      textFields.forEach((key) => {
        if (data[key]) formData.append(key, data[key])
      })

      if (data.Ordem !== undefined && data.Ordem !== '') {
        formData.append('Ordem', data.Ordem)
      }

      if (data.Foto && data.Foto.length > 0) {
        formData.append('Foto', data.Foto[0])
      }

      if (id) {
        await updateTeamMember(id, formData)
        toast({ title: 'Membro atualizado com sucesso.' })
      } else {
        await createTeamMember(formData)
        toast({ title: 'Membro adicionado com sucesso.' })
      }
      navigate('/admin/equipe')
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

  return (
    <div className="space-y-6 max-w-4xl animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Link to="/admin/equipe">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {id ? 'Editar Membro' : 'Novo Membro'}
          </h1>
          <p className="text-muted-foreground mt-1">Preencha os detalhes do membro da equipe.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="Nome">Nome *</Label>
                <Input id="Nome" {...register('Nome', { required: true })} />
                {fieldErrors.Nome && <p className="text-sm text-red-500">{fieldErrors.Nome}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="Cargo">Cargo *</Label>
                <Input id="Cargo" {...register('Cargo', { required: true })} />
                {fieldErrors.Cargo && <p className="text-sm text-red-500">{fieldErrors.Cargo}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="Email">E-mail</Label>
                <Input id="Email" type="email" {...register('Email')} />
                {fieldErrors.Email && <p className="text-sm text-red-500">{fieldErrors.Email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="LinkedIn">LinkedIn (URL)</Label>
                <Input id="LinkedIn" type="url" {...register('LinkedIn')} />
                {fieldErrors.LinkedIn && (
                  <p className="text-sm text-red-500">{fieldErrors.LinkedIn}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="Ordem">Ordem de Exibição (Numérico)</Label>
                <Input id="Ordem" type="number" {...register('Ordem')} />
                {fieldErrors.Ordem && <p className="text-sm text-red-500">{fieldErrors.Ordem}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="Foto">Foto (Upload)</Label>
                <Input id="Foto" type="file" accept="image/*" {...register('Foto')} />
                {fieldErrors.Foto && <p className="text-sm text-red-500">{fieldErrors.Foto}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="Bio">Biografia</Label>
                <Textarea id="Bio" {...register('Bio')} rows={4} />
                {fieldErrors.Bio && <p className="text-sm text-red-500">{fieldErrors.Bio}</p>}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  'Salvando...'
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Salvar Membro
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
