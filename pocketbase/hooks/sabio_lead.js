/**
 * Proxy route for Sabio Adv CRM Lead Creation
 * Endpoint: POST /api/sabio/create-lead
 *
 * Requirements:
 * - Public endpoint (called by frontend contact form)
 * - Uses $os.getenv("SABIO_API_KEY")
 * - Normalizes phone number to DDI+DDD+number (e.g., 5519994691494)
 * - Sends to https://api.sabioadv.com/functions/v1/create-lead-api
 */

routerAdd('POST', '/api/sabio/create-lead', (e) => {
  try {
    const rawBody = e.requestInfo().body || {}
    const nome = String(rawBody.nome || rawBody.name || '').trim()
    const rawPhone = String(rawBody.telefone || rawBody.phone || rawBody.contato || '').trim()
    const email = String(rawBody.email || '').trim()
    const assunto = String(rawBody.assunto || rawBody.subject || '').trim()
    const mensagem = String(rawBody.mensagem || rawBody.message || rawBody.descricao || '').trim()
    const areaInteresse = String(rawBody.area_interesse || rawBody.area || '').trim()

    if (!nome) {
      return e.json(400, {
        success: false,
        error: 'Nome é obrigatório',
      })
    }

    // Normalizar telefone: remover caracteres não numéricos
    let digitsOnly = rawPhone.replace(/\D/g, '')

    // Se estiver vazio, tenta extrair ou manter fallback se não informado
    if (digitsOnly.length > 0) {
      // Se tiver 10 ou 11 dígitos (DDD + número brasileiro sem DDI), adicionar 55
      if (digitsOnly.length === 10 || digitsOnly.length === 11) {
        digitsOnly = '55' + digitsOnly
      } else if (digitsOnly.length === 12 || digitsOnly.length === 13) {
        // Se começar com 55 e tiver 12 ou 13 dígitos, já está correto
        if (!digitsOnly.startsWith('55')) {
          digitsOnly = '55' + digitsOnly
        }
      } else if (digitsOnly.length < 10) {
        // Número muito curto, mas garantimos formato mínimo se possível
        if (!digitsOnly.startsWith('55')) {
          digitsOnly = '55' + digitsOnly
        }
      }
    }

    if (!digitsOnly) {
      return e.json(400, {
        success: false,
        error: 'Telefone/Contato é obrigatório',
      })
    }

    // Montar descrição detalhada combinando email, assunto, área e mensagem
    const descParts = []
    if (email) {
      descParts.push('E-mail: ' + email)
    }
    if (areaInteresse) {
      descParts.push('Área de Interesse: ' + areaInteresse)
    }
    if (assunto) {
      descParts.push('Assunto: ' + assunto)
    }
    if (mensagem) {
      descParts.push('Mensagem:\n' + mensagem)
    }
    const descricao = descParts.join('\n\n')

    // Montar tags
    const tags = ['Site']
    if (areaInteresse) {
      tags.push(areaInteresse)
    }
    if (assunto && assunto !== areaInteresse && !tags.includes(assunto)) {
      tags.push(assunto)
    }

    // Obter chave da API Sabio
    const apiKey =
      $os.getenv('SABIO_API_KEY') ||
      'sk_681cb5b2aa392089bcf6e43dfc7865e3ebc0df5234f1939c0da2c965050bf89f'

    const sabioPayload = {
      nome: nome,
      contato: digitsOnly,
      origem: 'Site - Formulário de Contato',
      descricao: descricao,
      tags: tags,
    }

    const res = $http.send({
      url: 'https://api.sabioadv.com/functions/v1/create-lead-api',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey,
      },
      body: JSON.stringify(sabioPayload),
      timeout: 15,
    })

    if (res.statusCode >= 200 && res.statusCode < 300) {
      return e.json(200, {
        success: true,
        data: res.json,
      })
    } else {
      console.error(
        'Erro ao enviar lead para Sabio CRM: status ' + res.statusCode + ' - ' + res.raw,
      )
      return e.json(res.statusCode || 500, {
        success: false,
        status: res.statusCode,
        error: res.json || res.raw || 'Erro na API do CRM Sábio',
      })
    }
  } catch (err) {
    console.error('Erro na rota /api/sabio/create-lead:', err)
    return e.json(500, {
      success: false,
      error: String(err),
    })
  }
})
