import pb from '@/lib/pocketbase/client'
import type { RecordModel } from 'pocketbase'

export interface Artigo extends RecordModel {
  titulo: string
  slug: string
  conteudo: string
  resumo: string
  imagem_capa?: string
  data_publicacao: string
  autor?: string
  imagem_url?: string
  seo_titulo?: string
  seo_descricao?: string
  anexo_arquivo?: string
  expand?: {
    autor?: {
      id: string
      Nome: string
      Foto: string
    }
  }
}

export const getArtigos = () =>
  pb.collection<Artigo>('Artigos').getFullList({ sort: '-data_publicacao', expand: 'autor' })

export const getArtigoBySlug = (slug: string) =>
  pb.collection<Artigo>('Artigos').getFirstListItem(`slug="${slug}"`, { expand: 'autor' })
