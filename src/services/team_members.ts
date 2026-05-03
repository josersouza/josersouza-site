import pb from '@/lib/pocketbase/client'

export const getTeamMembers = () => pb.collection('Team_Members').getFullList({ sort: 'Ordem' })
export const getTeamMember = (id: string) => pb.collection('Team_Members').getOne(id)
export const createTeamMember = (data: FormData) => pb.collection('Team_Members').create(data)
export const updateTeamMember = (id: string, data: FormData) =>
  pb.collection('Team_Members').update(id, data)
export const deleteTeamMember = (id: string) => pb.collection('Team_Members').delete(id)
