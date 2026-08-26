import pb from '@/lib/pocketbase/client'

export interface SabioLeadPayload {
  nome: string
  telefone: string
  email?: string
  assunto?: string
  mensagem?: string
  area_interesse?: string
}

export interface SabioLeadResponse {
  success: boolean
  data?: unknown
  error?: unknown
}

/**
 * Envia os dados do formulário de contato para o CRM Sábio Adv
 * através da rota proxy do PocketBase backend.
 * Nunca bloqueia a experiência do usuário se houver falha.
 */
export async function sendLeadToSabio(payload: SabioLeadPayload): Promise<SabioLeadResponse> {
  try {
    const result = await pb.send<SabioLeadResponse>('/api/sabio/create-lead', {
      method: 'POST',
      body: payload,
    })
    return result
  } catch (error) {
    // Logamos o erro sem quebrar a execução
    console.error('Falha ao enviar lead para o CRM Sábio Adv:', error)
    return {
      success: false,
      error,
    }
  }
}
