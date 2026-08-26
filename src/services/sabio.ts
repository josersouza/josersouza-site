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
  // Tentativa 1: Endpoint customizado /sabio/create-lead via SDK pb.send
  try {
    const result = await pb.send<SabioLeadResponse>('/sabio/create-lead', {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (result && result.success !== false) {
      return result
    }
  } catch (err) {
    console.warn('Tentativa 1 (/sabio/create-lead) retornou erro:', err)
  }

  // Tentativa 2: Endpoint customizado /api/sabio/create-lead
  try {
    const result = await pb.send<SabioLeadResponse>('/api/sabio/create-lead', {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (result && result.success !== false) {
      return result
    }
  } catch (err) {
    console.warn('Tentativa 2 (/api/sabio/create-lead) retornou erro:', err)
  }

  // Tentativa 3: Criação direta na coleção 'Leads' (dispara o hook onRecordAfterCreateSuccess automaticamente)
  try {
    const record = await pb.collection('Leads').create({
      nome: payload.nome,
      telefone: payload.telefone,
      email: payload.email || '',
      assunto: payload.assunto || '',
      mensagem: payload.mensagem || '',
      area_interesse: payload.area_interesse || '',
    })
    return {
      success: true,
      data: record,
    }
  } catch (collectionErr) {
    console.error('Falha ao salvar lead na coleção Leads:', collectionErr)
  }

  // Tentativa 4: Envio direto para a API Sábio CRM como fallback de segurança
  try {
    let digitsOnly = (payload.telefone || '').replace(/\D/g, '')
    if (digitsOnly.length === 10 || digitsOnly.length === 11) {
      digitsOnly = '55' + digitsOnly
    } else if (digitsOnly.length === 12 || digitsOnly.length === 13) {
      if (!digitsOnly.startsWith('55')) {
        digitsOnly = '55' + digitsOnly
      }
    } else if (digitsOnly.length < 10 && !digitsOnly.startsWith('55')) {
      digitsOnly = '55' + digitsOnly
    }
    if (!digitsOnly) digitsOnly = '5519994691494'

    const descParts: string[] = []
    if (payload.email) descParts.push(`E-mail: ${payload.email}`)
    if (payload.area_interesse) descParts.push(`Área de Interesse: ${payload.area_interesse}`)
    if (payload.assunto) descParts.push(`Assunto: ${payload.assunto}`)
    if (payload.mensagem) descParts.push(`Mensagem:\n${payload.mensagem}`)

    const tags = ['Site']
    if (payload.area_interesse) tags.push(payload.area_interesse)
    if (
      payload.assunto &&
      payload.assunto !== payload.area_interesse &&
      !tags.includes(payload.assunto)
    ) {
      tags.push(payload.assunto)
    }

    const apiKey = 'sk_681cb5b2aa392089bcf6e43dfc7865e3ebc0df5234f1939c0da2c965050bf89f'
    const directResponse = await fetch('https://api.sabioadv.com/functions/v1/create-lead-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        nome: payload.nome,
        contato: digitsOnly,
        origem: 'Site - Formulário de Contato',
        descricao: descParts.join('\n\n'),
        tags,
      }),
    })

    if (directResponse.ok) {
      const data = await directResponse.json().catch(() => ({}))
      return { success: true, data }
    }
  } catch (directErr) {
    console.error('Falha no fallback direto para a API Sábio:', directErr)
  }

  return {
    success: false,
    error: 'Não foi possível registrar o lead após tentativas.',
  }
}
