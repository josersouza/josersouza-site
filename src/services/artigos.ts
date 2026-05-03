import pb from '@/lib/pocketbase/client'

export const getArtigos = () =>
  pb.collection('Artigos').getFullList({ sort: '-data_publicacao', expand: 'autor' })
export const getArtigo = (id: string) => pb.collection('Artigos').getOne(id)
export const createArtigo = (data: FormData) => pb.collection('Artigos').create(data)
export const updateArtigo = (id: string, data: FormData) =>
  pb.collection('Artigos').update(id, data)
export const deleteArtigo = (id: string) => pb.collection('Artigos').delete(id)
