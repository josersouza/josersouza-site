/**
 * PocketBase hooks for Sabio CRM integration
 */

// Hook on collection Leads create
onRecordAfterCreateSuccess((e) => {
  try {
    const record = e.record
    const nome = String(record.get('nome') || '').trim()
    const rawPhone = String(record.get('telefone') || '').trim()
    const email = String(record.get('email') || '').trim()
    const assunto = String(record.get('assunto') || '').trim()
    const mensagem = String(record.get('mensagem') || '').trim()
    const areaInteresse = String(record.get('area_interesse') || '').trim()

    let digitsOnly = rawPhone.replace(/\D/g, '')
    if (digitsOnly.length > 0) {
      if (digitsOnly.length === 10 || digitsOnly.length === 11) {
        digitsOnly = '55' + digitsOnly
      } else if (digitsOnly.length === 12 || digitsOnly.length === 13) {
        if (!digitsOnly.startsWith('55')) {
          digitsOnly = '55' + digitsOnly
        }
      } else if (digitsOnly.length < 10) {
        if (!digitsOnly.startsWith('55')) {
          digitsOnly = '55' + digitsOnly
        }
      }
    }

    if (!digitsOnly) {
      digitsOnly = '5519994691494'
    }

    const descParts = []
    if (email) descParts.push('E-mail: ' + email)
    if (areaInteresse) descParts.push('Área de Interesse: ' + areaInteresse)
    if (assunto) descParts.push('Assunto: ' + assunto)
    if (mensagem) descParts.push('Mensagem:\n' + mensagem)
    const descricao = descParts.join('\n\n')

    const tags = ['Site']
    if (areaInteresse) tags.push(areaInteresse)
    if (assunto && assunto !== areaInteresse && !tags.includes(assunto)) {
      tags.push(assunto)
    }

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

    console.log('[sabio_lead] onRecordAfterCreateSuccess response:', res.statusCode)

    try {
      record.set('sabio_status', String(res.statusCode))
      record.set('sabio_response', res.json || { raw: res.raw })
      $app.save(record)
    } catch (saveErr) {
      console.log('[sabio_lead] Save status note:', saveErr)
    }
  } catch (err) {
    console.error('[sabio_lead] Error in onRecordAfterCreateSuccess:', err)
  }
}, 'Leads')

// Public route /sabio/create-lead
routerAdd('POST', '/sabio/create-lead', (e) => {
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

    let digitsOnly = rawPhone.replace(/\D/g, '')
    if (digitsOnly.length > 0) {
      if (digitsOnly.length === 10 || digitsOnly.length === 11) {
        digitsOnly = '55' + digitsOnly
      } else if (digitsOnly.length === 12 || digitsOnly.length === 13) {
        if (!digitsOnly.startsWith('55')) {
          digitsOnly = '55' + digitsOnly
        }
      } else if (digitsOnly.length < 10) {
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

    const descParts = []
    if (email) descParts.push('E-mail: ' + email)
    if (areaInteresse) descParts.push('Área de Interesse: ' + areaInteresse)
    if (assunto) descParts.push('Assunto: ' + assunto)
    if (mensagem) descParts.push('Mensagem:\n' + mensagem)
    const descricao = descParts.join('\n\n')

    const tags = ['Site']
    if (areaInteresse) tags.push(areaInteresse)
    if (assunto && assunto !== areaInteresse && !tags.includes(assunto)) {
      tags.push(assunto)
    }

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

    try {
      const leadsCol = $app.findCollectionByNameOrId('Leads')
      const newLead = new Record(leadsCol)
      newLead.set('nome', nome)
      newLead.set('telefone', rawPhone)
      newLead.set('email', email)
      newLead.set('assunto', assunto)
      newLead.set('mensagem', mensagem)
      newLead.set('area_interesse', areaInteresse)
      newLead.set('sabio_status', String(res.statusCode))
      newLead.set('sabio_response', res.json || { raw: res.raw })
      $app.save(newLead)
    } catch (saveErr) {
      console.log('[sabio_lead] Note saving record:', saveErr)
    }

    if (res.statusCode >= 200 && res.statusCode < 300) {
      return e.json(200, {
        success: true,
        data: res.json,
      })
    } else {
      return e.json(res.statusCode || 500, {
        success: false,
        status: res.statusCode,
        error: res.json || res.raw || 'Erro na API do CRM Sábio',
      })
    }
  } catch (err) {
    console.error('Erro na rota /sabio/create-lead:', err)
    return e.json(500, {
      success: false,
      error: String(err),
    })
  }
})

// Public route /api/sabio/create-lead
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

    let digitsOnly = rawPhone.replace(/\D/g, '')
    if (digitsOnly.length > 0) {
      if (digitsOnly.length === 10 || digitsOnly.length === 11) {
        digitsOnly = '55' + digitsOnly
      } else if (digitsOnly.length === 12 || digitsOnly.length === 13) {
        if (!digitsOnly.startsWith('55')) {
          digitsOnly = '55' + digitsOnly
        }
      } else if (digitsOnly.length < 10) {
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

    const descParts = []
    if (email) descParts.push('E-mail: ' + email)
    if (areaInteresse) descParts.push('Área de Interesse: ' + areaInteresse)
    if (assunto) descParts.push('Assunto: ' + assunto)
    if (mensagem) descParts.push('Mensagem:\n' + mensagem)
    const descricao = descParts.join('\n\n')

    const tags = ['Site']
    if (areaInteresse) tags.push(areaInteresse)
    if (assunto && assunto !== areaInteresse && !tags.includes(assunto)) {
      tags.push(assunto)
    }

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

    try {
      const leadsCol = $app.findCollectionByNameOrId('Leads')
      const newLead = new Record(leadsCol)
      newLead.set('nome', nome)
      newLead.set('telefone', rawPhone)
      newLead.set('email', email)
      newLead.set('assunto', assunto)
      newLead.set('mensagem', mensagem)
      newLead.set('area_interesse', areaInteresse)
      newLead.set('sabio_status', String(res.statusCode))
      newLead.set('sabio_response', res.json || { raw: res.raw })
      $app.save(newLead)
    } catch (saveErr) {
      console.log('[sabio_lead] Note saving record:', saveErr)
    }

    if (res.statusCode >= 200 && res.statusCode < 300) {
      return e.json(200, {
        success: true,
        data: res.json,
      })
    } else {
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

// Public route /api/v1/sabio/create-lead
routerAdd('POST', '/api/v1/sabio/create-lead', (e) => {
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

    let digitsOnly = rawPhone.replace(/\D/g, '')
    if (digitsOnly.length > 0) {
      if (digitsOnly.length === 10 || digitsOnly.length === 11) {
        digitsOnly = '55' + digitsOnly
      } else if (digitsOnly.length === 12 || digitsOnly.length === 13) {
        if (!digitsOnly.startsWith('55')) {
          digitsOnly = '55' + digitsOnly
        }
      } else if (digitsOnly.length < 10) {
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

    const descParts = []
    if (email) descParts.push('E-mail: ' + email)
    if (areaInteresse) descParts.push('Área de Interesse: ' + areaInteresse)
    if (assunto) descParts.push('Assunto: ' + assunto)
    if (mensagem) descParts.push('Mensagem:\n' + mensagem)
    const descricao = descParts.join('\n\n')

    const tags = ['Site']
    if (areaInteresse) tags.push(areaInteresse)
    if (assunto && assunto !== areaInteresse && !tags.includes(assunto)) {
      tags.push(assunto)
    }

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

    try {
      const leadsCol = $app.findCollectionByNameOrId('Leads')
      const newLead = new Record(leadsCol)
      newLead.set('nome', nome)
      newLead.set('telefone', rawPhone)
      newLead.set('email', email)
      newLead.set('assunto', assunto)
      newLead.set('mensagem', mensagem)
      newLead.set('area_interesse', areaInteresse)
      newLead.set('sabio_status', String(res.statusCode))
      newLead.set('sabio_response', res.json || { raw: res.raw })
      $app.save(newLead)
    } catch (saveErr) {
      console.log('[sabio_lead] Note saving record:', saveErr)
    }

    if (res.statusCode >= 200 && res.statusCode < 300) {
      return e.json(200, {
        success: true,
        data: res.json,
      })
    } else {
      return e.json(res.statusCode || 500, {
        success: false,
        status: res.statusCode,
        error: res.json || res.raw || 'Erro na API do CRM Sábio',
      })
    }
  } catch (err) {
    console.error('Erro na rota /api/v1/sabio/create-lead:', err)
    return e.json(500, {
      success: false,
      error: String(err),
    })
  }
})
