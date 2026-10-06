migrate(
  (app) => {
    const slug = 'transicao-reforma-tributaria-ibs-cbs-compliance-fiscal-preventivo'

    // Evitar duplicidade caso a migração seja reexecutada
    try {
      const existing = app.findFirstRecordByData('Artigos', 'slug', slug)
      if (existing) {
        return
      }
    } catch (_) {
      // Registro não existe, prosseguir com a inserção
    }

    const artigosCol = app.findCollectionByNameOrId('Artigos')

    // Localizar Dr. José Roberto de Souza como autor
    let autorId = ''
    try {
      const authorRecord = app.findFirstRecordByData(
        'Team_Members',
        'Nome',
        'José Roberto de Souza',
      )
      autorId = authorRecord.id
    } catch (_) {
      try {
        const fallback = app.findFirstRecordByData('Team_Members', 'Ordem', 1)
        autorId = fallback.id
      } catch (_) {}
    }

    const titulo =
      'Transição da Reforma Tributária (IBS/CBS): O Papel do Compliance Fiscal Preventivo'
    const resumo =
      'Entenda como as empresas devem se preparar para o período de transição da Reforma Tributária (IBS e CBS) e por que o compliance fiscal preventivo é crucial para evitar autuações, precificar produtos e garantir créditos tributários.'

    const seoTitulo = 'Transição da Reforma Tributária (IBS/CBS) e Compliance Fiscal Preventivo'
    const seoDescricao =
      'Como empresas devem se preparar para a transição do IBS e CBS. Cronograma da EC 132/2023, impactos em serviços e comércio interestadual, e compliance fiscal preventivo na prática.'

    const imageUrl = 'https://img.usecurling.com/p/1200/600?q=tax%20compliance%20audit&color=blue'

    const conteudo = `
<p><strong>Resposta direta:</strong> A transição da Reforma Tributária exige que as empresas adotem imediatamente o compliance fiscal preventivo para auditar cadastros de produtos, revisar parametrizações de ERPs, renegociar contratos comerciais de longo prazo e recalcular margens de preços diante da coexistência temporária entre os tributos atuais (PIS, Cofins, ICMS e ISS) e o novo modelo (CBS e IBS).</p>

<h2>O que são o IBS e a CBS na Nova Estrutura Tributária</h2>
<p><strong>Resposta direta:</strong> O Imposto sobre Bens e Serviços (IBS) e a Contribuição sobre Bens e Serviços (CBS) compõem o modelo de Imposto sobre Valor Agregado (IVA) Dual, substituindo os cinco tributos sobre o consumo historicamente cobrados pela União, Estados e Municípios.</p>
<p>Instituídos pela Emenda Constitucional 132/2023 e regulamentados pelas normas complementares da Reforma Tributária, como a Lei Complementar 214/2025, o IBS e a CBS têm como premissa a não cumulatividade plena e a tributação no destino:</p>
<ul>
  <li><strong>CBS (Contribuição sobre Bens e Serviços):</strong> De competência federal, unifica e substitui o PIS e a Cofins.</li>
  <li><strong>IBS (Imposto sobre Bens e Serviços):</strong> De competência compartilhada entre Estados, Distrito Federal e Municípios, substitui o ICMS e o ISS, gerido de forma integrada pelo Comitê Gestor do IBS.</li>
</ul>
<p>A substituição desse arcabouço busca encerrar a fragmentação de 27 legislações estaduais e milhares de leis municipais, transferindo a arrecadação da origem para o local de consumo e eliminando a cumulatividade em cadeia.</p>

<h2>O Período de Transição: Sistema Gradual e Convivência entre Regimes</h2>
<p><strong>Resposta direta:</strong> O período de transição não implementará a mudança de forma abrupta, mas por meio de fases escalonadas de teste e compensação que exigirão das empresas a convivência simultânea com dois sistemas tributários paralelos por vários anos.</p>
<p>A complexidade operacional máxima residirá justamente no sistema dual de apuração. Durante o cronograma de transição, os departamentos fiscais e contábeis precisarão emitir documentos e escriturar obrigações tanto sob as regras antigas quanto sob as diretrizes do IBS e da CBS.</p>

<h3>Cronologia das Fases de Transição Conforme a Legislação</h3>
<p><strong>Resposta direta:</strong> O calendário oficial previsto na Emenda Constitucional 132/2023 estabelece um período de testes preliminares, seguido pela extinção gradual das contribuições federais e, posteriormente, pela redução escalonada dos tributos subnacionais.</p>
<ul>
  <li><strong>Fase de Teste e Calibração (2026):</strong> Início da apuração com alíquotas de teste de 0,9% para a CBS e 0,1% para o IBS (totalizando 1%), cujo montante recolhido poderá ser compensado com o PIS/Cofins devido. O objetivo é testar os sistemas eletrônicos e o Comitê Gestor.</li>
  <li><strong>Implementação da CBS e Extinção do PIS/Cofins (2027):</strong> Entrada em vigor integral da CBS federal com suas alíquotas definitivas e extinção completa do PIS e da Cofins. Início gradual do Imposto Seletivo (IS).</li>
  <li><strong>Convivência Gradual IBS vs. ICMS/ISS (2029 a 2032):</strong> Redução anual de 1/10 (10%) das alíquotas do ICMS e do ISS, ao mesmo tempo em que o IBS tem sua participação ampliada proporcionalmente ano a ano (2029: 10% IBS / 90% ICMS/ISS; até 2032: 40% IBS / 60% ICMS/ISS).</li>
  <li><strong>Consolidação Plena do Novo Sistema (2033 em diante):</strong> Extinção definitiva e total do ICMS e do ISS. O IBS e a CBS passam a vigorar plenamente em todo o território nacional.</li>
</ul>

<h2>Quem é Mais Impactado pela Transição</h2>
<p><strong>Resposta direta:</strong> Empresas que atuam no setor de serviços, indústrias com incentivos fiscais regionais e corporações que operam comércio interestadual são as que mais sentirão o impacto financeiro e regulatório da nova sistemática.</p>

<h3>1. Setor de Serviços</h3>
<p>Empresas prestadoras de serviços atualmente tributadas pelo regime cumulativo ou com alíquotas baixas de ISS (entre 2% e 5%) podem experimentar aumento na alíquota nominal. Como a folha de pagamento não gera créditos tributários no modelo de IVA, esse segmento depende de um planejamento jurídico minucioso sobre regimes diferenciados, terceirização de insumos e contratos para manter o equilíbrio econômico-financeiro.</p>

<h3>2. Comércio Interestadual e Empresas Multiestaduais</h3>
<p>A migração da cobrança do estado de origem para o princípio do destino extingue a chamada "Guerra Fiscal" e altera a lógica de precificação para clientes em diferentes regiões federativas. Empresas com centros de distribuição espalhados pelo Brasil precisarão remapear sua logística e seus custos operacionais.</p>

<h3>3. Empresas com Benefícios Fiscais de ICMS</h3>
<p>Os incentivos e isenções concedidos pelos Estados têm prazo improrrogável de vigência e redução gradativa prevista na Constituição. Manter a rentabilidade operacional após a extinção desses benefícios demanda um diagnóstico preventivo antecipado.</p>

<h2>O Que é Compliance Fiscal Preventivo na Prática</h2>
<p><strong>Resposta direta:</strong> Compliance fiscal preventivo é o conjunto de procedimentos de auditoria interna, adequação de processos, revisão de cadastros fiscais e reestruturação contratual voltado a evitar passivos e assegurar o aproveitamento integral de créditos permitidos pela nova legislação.</p>
<p>Não se trata apenas de cumprir declarações acessórias, mas de proteger o caixa e a governança societária contra multas decorrentes de erros de enquadramento. Na prática, a governança preventiva se desdobra em cinco eixos fundamentais:</p>

<h3>1. Revisão de Cadastros e Classificações Fiscais (NCM, NBS e Códigos de Serviços)</h3>
<p>Cada produto ou serviço demandará nova codificação para a correta identificação das alíquotas padrão, regimes diferenciados ou desonerações tributárias previstas na regulamentação. Erros na parametrização cadastral resultarão no recolhimento indevido de tributos ou no bloqueio do crédito pelo adquirente da mercadoria.</p>

<h3>2. Recálculo de Preços de Venda e Margens de Lucro</h3>
<p>Com o modelo 'por fora' (onde os tributos não compõem a própria base de cálculo, diferentemente do ICMS tradicional) e a extinção da não cumulatividade antiga, os custos brutos e as margens líquidas se alterarão. As empresas devem recalcular suas tabelas de preços com antecedência para evitar perdas comerciais na virada das alíquotas.</p>

<h3>3. Auditoria de Contratos de Longo Prazo e Notas Fiscais</h3>
<p>Contratos com vigência para além de 2026 devem conter cláusulas específicas de repactuação tributária e equilíbrio econômico-financeiro (cláusulas <em>gross-up</em>). Do ponto de vista de faturamento, a emissão de notas fiscais eletrônicas deverá ser validada para reportar simultaneamente os tributos legados e os campos do IBS e da CBS.</p>

<h3>4. Monitoramento da Não Cumulatividade e Crédito de IBS/CBS</h3>
<p>O direito ao creditamento no IBS/CBS está condicionado à comprovação do recolhimento pelo fornecedor (modelo de liquidação financeira split payment). O compliance preventivo deve qualificar fornecedores e auditar o fluxo de conformidade da cadeia produtiva para que a sua empresa não perca o direito de abater tributos.</p>

<h3>5. Atuação Integrada entre o Jurídico Tributário e a Contabilidade</h3>
<p>A contabilidade cuida da escrituração e do envio dos dados operacionais, enquanto a assessoria jurídica tributária garante a interpretação correta dos conceitos constitucionais, das regras de transição, a defesa contra bitributação no sistema dual e a segurança na celebração de acordos negociais. A sinergia entre ambas as áreas é a garantia de imunidade contra riscos fiscais desnecessários.</p>

<h2>Conclusão e Planejamento Estratégico</h2>
<p><strong>Resposta direta:</strong> A transição para o IBS e a CBS não deve ser tratada como um desafio meramente contábil a ser enfrentado no futuro, mas sim como uma transformação corporativa estratégica que exige ações imediatas de conformidade e mitigação de riscos.</p>
<p>Empresas que iniciarem a auditoria de seus processos e contratos com antecedência preservarão sua competitividade de mercado e protegerão o patrimônio societário contra a complexidade do regime transitório.</p>

<p><strong>Precisa de orientação para preparar sua empresa para a Reforma Tributária?</strong> A equipe especializada em Direito Tributário e Empresarial do escritório <strong>JOSÉ ROBERTO DE SOUZA Advogados Associados</strong> está à disposição para realizar um diagnóstico preventivo completo da sua operação. Entre em contato conosco e agende uma consulta estratégica.</p>
`

    const record = new Record(artigosCol)
    record.set('titulo', titulo)
    record.set('slug', slug)
    record.set('resumo', resumo)
    record.set('conteudo', conteudo)
    record.set('imagem_url', imageUrl)
    record.set('seo_titulo', seoTitulo)
    record.set('seo_descricao', seoDescricao)
    record.set('data_publicacao', new Date().toISOString())

    if (autorId) {
      record.set('autor', autorId)
    }

    app.save(record)
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData(
        'Artigos',
        'slug',
        'transicao-reforma-tributaria-ibs-cbs-compliance-fiscal-preventivo',
      )
      if (record) {
        app.delete(record)
      }
    } catch (_) {}
  },
)
