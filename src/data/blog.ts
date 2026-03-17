export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  imageUrl: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '9',
    slug: 'como-doar-imoveis-para-os-filhos-e-evitar-o-inventario',
    title: 'Como doar imóveis para os filhos e evitar o inventário',
    excerpt:
      'Entenda como a doação em vida com reserva de usufruto pode proteger seu patrimônio e poupar sua família dos custos e desgastes de um longo processo de inventário.',
    content: `
      <p>A transferência de patrimônio para os herdeiros é uma preocupação constante para quem deseja garantir a segurança e a tranquilidade da família. Entre as opções jurídicas disponíveis, a <strong>doação em vida</strong> de imóveis desponta como uma das alternativas preventivas mais eficientes para evitar o doloroso, demorado e oneroso processo de inventário.</p>
      
      <h3>O que é a Doação em Vida com Reserva de Usufruto?</h3>
      <p>A doação com reserva de usufruto vitalício é um instrumento jurídico que permite que o proprietário (doador) transfira a propriedade do imóvel para seus filhos (donatários), mas mantenha para si o direito irrevogável de usar, morar ou alugar o bem e receber seus frutos até o fim de sua vida. Na prática, os filhos passam a ser os "nu-proprietários" e só terão a propriedade plena (posse e direito de uso) após o falecimento dos pais, momento em que o usufruto é extinto automaticamente no cartório, sem a necessidade de inventariar aquele bem específico.</p>
      
      <h3>Vantagens em Relação ao Inventário</h3>
      <ul>
        <li><strong>Economia Financeira e Previsibilidade:</strong> O inventário frequentemente envolve custos altos e imprevisíveis no momento do luto, como honorários advocatícios sobre o valor atualizado do patrimônio total e custas judiciais ou cartorárias. Na doação, o imposto incidente (o ITCMD - Imposto sobre Transmissão Causa Mortis e Doação) é planejado e pago antecipadamente, muitas vezes sobre uma base de cálculo mais vantajosa e sem a pressa ou multas típicas de inventários atrasados.</li>
        <li><strong>Agilidade e Prevenção de Conflitos:</strong> Um inventário pode se arrastar por anos, bloqueando bens e contas, especialmente se houver discordância mínima entre os herdeiros. A doação já define a partilha em vida, respeitando a vontade exata do doador e mitigando o risco de litígios familiares no futuro.</li>
        <li><strong>Proteção Avançada do Patrimônio:</strong> É perfeitamente possível incluir cláusulas restritivas de proteção no momento da doação, como a de incomunicabilidade (o imóvel não fará parte do patrimônio do cônjuge do filho em caso de casamento ou divórcio), impenhorabilidade (o bem fica blindado contra eventuais execuções e dívidas contraídas pelo filho) e inalienabilidade (o filho fica impedido de vender o imóvel sem a autorização expressa do doador).</li>
      </ul>

      <h3>Atenção aos Limites Legais e Fiscais</h3>
      <p>Apesar de altamente recomendada, a doação requer cuidados técnicos. É fundamental respeitar a chamada "legítima": a legislação brasileira determina que 50% do patrimônio do indivíduo deve ser obrigatoriamente reservado aos herdeiros necessários (filhos, cônjuges, pais). Doações que ultrapassem esse percentual podem ser juridicamente anuladas no futuro (doação inoficiosa). Além disso, a lei proíbe a doação universal (de todos os bens) sem que o doador reserve renda ou bens suficientes para a própria subsistência.</p>

      <p>Cada configuração familiar e patrimonial é única, e a legislação tributária do ITCMD varia consideravelmente de Estado para Estado. Por isso, antes de assinar qualquer escritura, é imprescindível buscar o aconselhamento de uma assessoria jurídica especializada em direito sucessório para analisar o impacto fiscal, revisar a documentação e estruturar toda a operação garantindo total segurança legal para você e sua família.</p>
    `,
    date: '2026-03-25',
    category: 'Direito de Família e Sucessões',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=house%20keys&color=black&dpr=2',
  },
  {
    id: '1',
    slug: 'prescricao-do-credito-tributario',
    title: 'Prescrição do Crédito Tributário: Entenda seus Direitos',
    excerpt:
      'Saiba como funciona o prazo de 5 anos para a cobrança de impostos pelo governo e como isso impacta a segurança financeira do contribuinte.',
    content: `
      <p>A prescrição do crédito tributário é um dos temas mais relevantes para a defesa do contribuinte e para a saúde financeira de qualquer empresa. Trata-se, em suma, da perda do direito da Fazenda Pública (seja União, Estados ou Municípios) de cobrar judicialmente uma dívida tributária após o decurso de um determinado prazo legal.</p>
      
      <h3>O Prazo de 5 Anos</h3>
      <p>Conforme estabelece o Artigo 174 do Código Tributário Nacional (CTN), o fisco possui o prazo de <strong>5 anos</strong> para ajuizar a ação de execução fiscal, contados a partir da constituição definitiva do crédito. Se a ação de cobrança não for proposta dentro deste período, a dívida é considerada "caduca", ou seja, ocorre a prescrição.</p>
      
      <h3>Impacto Direto para o Contribuinte</h3>
      <p>A ocorrência da prescrição extingue o crédito tributário. Na prática, isso significa que:</p>
      <ul>
        <li>O contribuinte não pode mais ser legalmente obrigado a pagar aquele valor;</li>
        <li>Qualquer cobrança judicial ou extrajudicial torna-se indevida e passível de contestação;</li>
        <li>O nome da empresa ou da pessoa física deve ser imediatamente retirado dos cadastros de inadimplência (como o CADIN e a dívida ativa);</li>
        <li>A emissão da Certidão Negativa de Débitos (CND) não pode ser impedida por conta deste débito prescrito.</li>
      </ul>

      <p>Muitas vezes, a administração pública falha na contagem destes prazos ou demora excessivamente na condução dos processos. Por isso, é fundamental contar com uma assessoria jurídica especializada para auditar o histórico de dívidas e identificar possíveis prescrições, garantindo a proteção do seu patrimônio contra cobranças ilegais e abusivas.</p>
    `,
    date: '2026-03-20',
    category: 'Direito Tributário',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=legal%20documents&color=black&dpr=2',
  },
  {
    id: '2',
    slug: 'golpes-do-pix-como-agir',
    title: 'Golpes do PIX: Como Agir e Recuperar seus Valores',
    excerpt:
      'Conheça as fraudes mais comuns e descubra como o Mecanismo Especial de Devolução (MED) e a Justiça podem ajudar vítimas a reaverem seu dinheiro.',
    content: `
      <p>Com a rápida adoção e popularização do PIX como principal meio de pagamento no Brasil, as fraudes financeiras digitais cresceram exponencialmente. Criminosos têm utilizado táticas cada vez mais sofisticadas de engenharia social para enganar as vítimas e subtrair altos valores de suas contas bancárias em questão de segundos.</p>
      
      <h3>As Principais Técnicas de Fraude Atuais</h3>
      <ul>
        <li><strong>Golpe do WhatsApp:</strong> Os fraudadores clonam o aplicativo ou utilizam uma foto falsa em um número novo para se passar por conhecidos e pedir dinheiro emprestado a amigos e familiares com urgência.</li>
        <li><strong>Falsa Central de Atendimento:</strong> Criminosos entram em contato se passando por funcionários de segurança de bancos, alertando sobre fraudes fictícias na conta para induzir a vítima a transferir valores para contas supostamente "seguras" a fim de proteger seu saldo.</li>
      </ul>
      
      <h3>O que fazer? O Mecanismo Especial de Devolução (MED)</h3>
      <p>O Banco Central criou o <strong>Mecanismo Especial de Devolução (MED)</strong> especificamente para facilitar o estorno de valores em casos de fraude confirmada. O procedimento correto é:</p>
      <ol>
        <li>Registrar um Boletim de Ocorrência (B.O.) imediatamente;</li>
        <li>Notificar a sua instituição financeira formalmente em até 80 dias da data do PIX;</li>
        <li>O banco avaliará o caso e, acionando o MED, solicitará o bloqueio dos recursos na conta recebedora do golpista.</li>
      </ol>

      <p>Caso a instituição financeira falhe em garantir a segurança do sistema, permita a abertura de contas com documentos falsos ("contas laranja") ou não atue diligentemente após a notificação do golpe, a jurisprudência — balizada inclusive pela Súmula 479 do STJ — entende que os <strong>bancos podem ser responsabilizados objetivamente</strong> por danos materiais e morais sofridos pelo cliente.</p>
    `,
    date: '2026-03-15',
    category: 'Direito Digital e Cível',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=cyber%20security&color=black&dpr=2',
  },
  {
    id: '3',
    slug: 'indenizacao-por-perda-de-voo',
    title: 'Indenização por Perda de Voo, Atrasos e Overbooking',
    excerpt:
      'Entenda em quais situações o passageiro aéreo tem direito à assistência material e a indenizações por danos morais e materiais.',
    content: `
      <p>Atrasos significativos, cancelamentos inesperados de voos e a incômoda preterição de embarque (mais conhecida como <em>overbooking</em>) são problemas frequentes na aviação civil e causam enormes transtornos aos passageiros. Felizmente, a legislação brasileira (via Código de Defesa do Consumidor) e as resoluções da ANAC garantem direitos claros e rigorosos para estas situações.</p>
      
      <h3>Quando o Passageiro tem Direitos?</h3>
      <p>A responsabilidade das companhias aéreas é objetiva na prestação do serviço. O passageiro tem direitos assegurados em casos como:</p>
      <ul>
        <li><strong>Atrasos superiores a 4 horas:</strong> A empresa é obrigada a oferecer opções de reacomodação em outro voo (da própria ou de outra empresa), reembolso integral da passagem ou a execução do serviço por outra modalidade de transporte.</li>
        <li><strong>Cancelamentos e Overbooking:</strong> Os mesmos direitos de assistência e opções de realocação se aplicam imediatamente.</li>
      </ul>
      
      <h3>Assistência Material e Indenizações Cabíveis</h3>
      <p>Durante o período de espera no aeroporto, a companhia deve prover, gradativamente: facilidades de comunicação (a partir de 1h de atraso), alimentação adequada (a partir de 2h) e hospedagem com traslado (a partir de 4h ou em caso de pernoite).</p>
      
      <p>Além dessa assistência obrigatória, as falhas na prestação do serviço frequentemente geram o dever de indenizar judicialmente:</p>
      <ul>
        <li><strong>Danos Materiais:</strong> Cobrem despesas extras comprovadas geradas pelo problema, como diárias de hotel perdidas no destino, aluguel de carros não utilizados, ingressos para eventos, etc.</li>
        <li><strong>Danos Morais:</strong> São cabíveis pela frustração, aborrecimento, estresse excessivo, perda de compromissos profissionais importantes, férias frustradas ou eventos familiares inadiáveis (como casamentos ou formaturas).</li>
      </ul>
    `,
    date: '2026-03-08',
    category: 'Direito do Consumidor',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=airport&color=black&dpr=2',
  },
  {
    id: '4',
    slug: 'planejamento-sucessorio-protecao',
    title: 'Planejamento Sucessório: Proteção e Organização Patrimonial',
    excerpt:
      'Descubra como o uso de holdings familiares, testamentos e doações pode evitar conflitos e minimizar o impacto de impostos na herança.',
    content: `
      <p>O planejamento sucessório é o processo de organização antecipada e legal da transferência do patrimônio de uma pessoa para seus herdeiros. Longe de ser um assunto restrito apenas a grandes fortunas, é uma ferramenta preventiva essencial para evitar litígios familiares, reduzir a burocracia excessiva e minimizar de forma lícita os custos tributários do processo sucessório.</p>
      
      <h3>As Principais Ferramentas Estratégicas</h3>
      <p>Existem diversas opções jurídicas que podem ser combinadas para estruturar a sucessão de forma inteligente, sempre de acordo com a realidade de cada família:</p>
      <ul>
        <li><strong>Holding Familiar:</strong> Consiste na constituição de uma empresa (pessoa jurídica) para administrar os bens da família. Em vez de herdar imóveis diretamente, os herdeiros recebem quotas dessa empresa. As quotas podem ser doadas aos herdeiros ainda em vida, frequentemente com cláusula de reserva de usufruto aos fundadores. Isso facilita a gestão unificada, evita a paralisação do patrimônio durante um inventário e oferece notável eficiência fiscal (especialmente no imposto de renda sobre aluguéis e ganhos de capital).</li>
        <li><strong>Testamento:</strong> Documento legal e formal que permite ao testador dispor livremente de até 50% do seu patrimônio (a chamada "parte disponível") para quem desejar (amigos, instituições, ou beneficiar mais um filho que outro), desde que respeite a "legítima" (os outros 50%) reservada aos herdeiros necessários (filhos, cônjuges, pais).</li>
        <li><strong>Doação em Vida com Usufruto:</strong> É a antecipação parcial da herança mediante a transferência de bens. Costuma ser acompanhada de cláusulas protetivas de incomunicabilidade (não se comunica ao cônjuge do herdeiro em caso de divórcio), impenhorabilidade (proteção contra dívidas do herdeiro) e reversão, garantindo ao doador a renda (como aluguéis) e o uso do bem até o fim de sua vida.</li>
      </ul>
      
      <h3>Vantagens Imediatas e Futuras</h3>
      <p>Um planejamento sucessório bem desenhado evita o longo, desgastante e custoso processo de inventário judicial, garantindo liquidez e paz aos herdeiros. Além disso, permite um planejamento mais suave e até mesmo a redução legal do impacto de impostos pesados, como o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) e custas processuais/cartorárias.</p>
    `,
    date: '2026-03-01',
    category: 'Direito de Família e Sucessões',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=family%20wealth&color=black&dpr=2',
  },
  {
    id: '5',
    slug: 'reforma-tributaria-impactos-empresas',
    title: 'Reforma Tributária: Impactos para as Empresas',
    excerpt:
      'Entenda as principais mudanças propostas pela Reforma Tributária e como preparar sua empresa para o novo cenário fiscal brasileiro.',
    content: `
      <p>A Reforma Tributária tem sido um dos temas mais debatidos no cenário econômico brasileiro. Com o objetivo de simplificar o complexo sistema de impostos do país, a proposta traz mudanças significativas que impactarão diretamente o dia a dia das empresas.</p>
      
      <h3>Principais Mudanças</h3>
      <p>O foco central da reforma é a unificação de impostos. Tributos como PIS, COFINS, IPI, ICMS e ISS devem ser substituídos pelo Imposto sobre Bens e Serviços (IBS) e pela Contribuição sobre Bens e Serviços (CBS), adotando o modelo de Imposto sobre Valor Agregado (IVA).</p>
      
      <h3>Como se Preparar</h3>
      <ul>
        <li><strong>Revisão de Planejamento Tributário:</strong> É essencial que as empresas revisem seus planejamentos atuais.</li>
        <li><strong>Atualização de Sistemas:</strong> Os sistemas contábeis precisarão ser adaptados para as novas regras de apuração.</li>
        <li><strong>Análise de Impacto nos Preços:</strong> A mudança na carga tributária pode exigir uma reprecificação de produtos e serviços.</li>
      </ul>
      <p>Contar com uma assessoria jurídica especializada é fundamental para atravessar esse período de transição com segurança e buscar as melhores alternativas legais para o seu negócio.</p>
    `,
    date: '2026-02-15',
    category: 'Direito Tributário',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=tax%20business&color=black&dpr=2',
  },
  {
    id: '6',
    slug: 'compliance-trabalhista-evitando-passivos',
    title: 'Compliance Trabalhista: Como Evitar Passivos',
    excerpt:
      'Descubra a importância de implementar um programa de compliance trabalhista para mitigar riscos e evitar processos judiciais na sua empresa.',
    content: `
      <p>O passivo trabalhista é uma das maiores preocupações dos empresários brasileiros. A complexidade da legislação e as constantes mudanças nas regras exigem uma atenção redobrada das empresas para evitar multas e condenações judiciais.</p>
      
      <h3>O que é Compliance Trabalhista?</h3>
      <p>Compliance trabalhista consiste em um conjunto de práticas e políticas internas adotadas pela empresa para garantir o estrito cumprimento das normas de saúde, segurança e direitos dos trabalhadores, alinhando a conduta corporativa à legislação vigente.</p>
      
      <h3>Vantagens da Implementação</h3>
      <ul>
        <li>Redução drástica de processos e reclamações trabalhistas;</li>
        <li>Melhoria do clima organizacional e retenção de talentos;</li>
        <li>Maior segurança jurídica nas tomadas de decisão pelo RH;</li>
        <li>Preservação da imagem e reputação da empresa no mercado.</li>
      </ul>
      <p>Investir de forma preventiva em auditorias e adequação de contratos é infinitamente mais econômico do que arcar com os custos de condenações na Justiça do Trabalho.</p>
    `,
    date: '2026-01-20',
    category: 'Direito do Trabalho',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=office%20meeting&color=black&dpr=2',
  },
  {
    id: '7',
    slug: 'lei-geral-de-protecao-de-dados-lgpd',
    title: 'LGPD nas Empresas: Adequação e Riscos',
    excerpt:
      'A Lei Geral de Proteção de Dados (LGPD) já está em pleno vigor. Saiba quais são os riscos de não adequar sua empresa à nova realidade.',
    content: `
      <p>A Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) transformou a maneira como as empresas lidam com as informações pessoais de clientes, funcionários e parceiros. Apesar de já estar em vigor há algum tempo, muitas organizações ainda não estão totalmente adequadas.</p>
      
      <h3>Os Riscos da Não Conformidade</h3>
      <p>As penalidades para o descumprimento da LGPD podem ser severas. A Autoridade Nacional de Proteção de Dados (ANPD) pode aplicar desde advertências até multas que podem chegar a 2% do faturamento da empresa (limitadas a R$ 50 milhões por infração).</p>
      
      <h3>Passos para Adequação</h3>
      <ol>
        <li><strong>Mapeamento de Dados:</strong> Identificar onde e como os dados são coletados, armazenados e processados;</li>
        <li><strong>Revisão de Contratos:</strong> Atualizar termos de uso, políticas de privacidade e contratos com fornecedores;</li>
        <li><strong>Treinamento:</strong> Conscientizar a equipe sobre a importância da proteção de dados;</li>
        <li><strong>Nomeação do DPO:</strong> Designar o Encarregado pelo Tratamento de Dados Pessoais.</li>
      </ol>
      <p>A adequação não é apenas uma obrigação legal, mas um diferencial competitivo que demonstra transparência e respeito aos titulares dos dados.</p>
    `,
    date: '2025-12-10',
    category: 'Direito Digital',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=data%20privacy&color=black&dpr=2',
  },
  {
    id: '8',
    slug: 'contratos-empresariais-cuidados',
    title: 'Contratos Empresariais: Principais Cuidados',
    excerpt:
      'Saiba quais são as cláusulas fundamentais e os cuidados essenciais na elaboração de contratos empresariais seguros e bem estruturados.',
    content: `
      <p>Os contratos são a base das relações comerciais. Um contrato mal redigido ou omisso pode gerar interpretações dúbias e resultar em longos litígios judiciais, comprometendo a saúde financeira e a operação da empresa.</p>
      
      <h3>Cláusulas Essenciais</h3>
      <p>Para garantir a segurança jurídica das partes, alguns elementos não podem faltar em um bom contrato empresarial:</p>
      <ul>
        <li><strong>Objeto Claro e Definido:</strong> Especificar com riqueza de detalhes o que está sendo contratado;</li>
        <li><strong>Prazos e Condições de Pagamento:</strong> Estabelecer cronogramas realistas e multas por atraso;</li>
        <li><strong>Rescisão e Penalidades:</strong> Prever as hipóteses de término antecipado do contrato e as respectivas multas;</li>
        <li><strong>Foro de Eleição ou Cláusula Arbitral:</strong> Definir onde eventuais conflitos serão resolvidos.</li>
      </ul>
      <p>A revisão por um advogado especializado em direito contratual e empresarial é indispensável antes de qualquer assinatura. O custo da prevenção é sempre menor que o custo de um litígio.</p>
    `,
    date: '2025-11-05',
    category: 'Direito Empresarial',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=signing%20contract&color=black&dpr=2',
  },
]
