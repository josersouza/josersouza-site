migrate(
  (app) => {
    try {
      const artigos = app.findRecordsByFilter('Artigos', "id != ''", '-created', 1000, 0)

      for (let i = 0; i < artigos.length; i++) {
        let artigo = artigos[i]
        let originalConteudo = artigo.getString('conteudo')
        let originalResumo = artigo.getString('resumo')
        let changed = false

        let newConteudo = originalConteudo
        let newResumo = originalResumo

        if (newConteudo) {
          let before = newConteudo
          newConteudo = newConteudo.replace(/TJ REsp 2\.012\.345\/2026/g, 'a jurisprudência atual')
          newConteudo = newConteudo.replace(
            /STF RE 1\.234\.567\/2026/g,
            'as recentes decisões dos tribunais superiores',
          )
          newConteudo = newConteudo.replace(
            /STJ REsp 1\.454\.643\/SP/g,
            'a jurisprudência consolidada do Superior Tribunal de Justiça',
          )
          newConteudo = newConteudo.replace(/STJ HC 84\.533/g, 'entendimento jurisprudencial')
          newConteudo = newConteudo.replace(/STF ADIn 2\.446/g, 'decisões da Suprema Corte')
          newConteudo = newConteudo.replace(
            /(?:STJ|STF|TJ|TRF|TST)\s+(?:REsp|HC|ADIn|RE|AgInt|AgRg)?\s*[\d\.\-]+\/2026/g,
            'a atual jurisprudência',
          )
          newConteudo = newConteudo.replace(
            /(?:REsp|HC|ADIn|RE|AgInt|AgRg)\s+[\d\.\-]+\/2026/g,
            'a atual jurisprudência',
          )

          if (before !== newConteudo) changed = true
        }

        if (newResumo) {
          let before = newResumo
          newResumo = newResumo.replace(/TJ REsp 2\.012\.345\/2026/g, 'a jurisprudência atual')
          newResumo = newResumo.replace(
            /STF RE 1\.234\.567\/2026/g,
            'as recentes decisões dos tribunais superiores',
          )
          newResumo = newResumo.replace(
            /STJ REsp 1\.454\.643\/SP/g,
            'a jurisprudência consolidada do Superior Tribunal de Justiça',
          )
          newResumo = newResumo.replace(/STJ HC 84\.533/g, 'entendimento jurisprudencial')
          newResumo = newResumo.replace(/STF ADIn 2\.446/g, 'decisões da Suprema Corte')
          newResumo = newResumo.replace(
            /(?:STJ|STF|TJ|TRF|TST)\s+(?:REsp|HC|ADIn|RE|AgInt|AgRg)?\s*[\d\.\-]+\/2026/g,
            'a atual jurisprudência',
          )
          newResumo = newResumo.replace(
            /(?:REsp|HC|ADIn|RE|AgInt|AgRg)\s+[\d\.\-]+\/2026/g,
            'a atual jurisprudência',
          )

          if (before !== newResumo) changed = true
        }

        if (changed) {
          artigo.set('conteudo', newConteudo)
          artigo.set('resumo', newResumo)
          app.save(artigo)
        }
      }
    } catch (e) {
      console.log('Error correcting citations: ', e.message)
    }
  },
  (app) => {
    // Down migration is a no-op since we do not have the previous contents stored
  },
)
