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
    id: '1',
    slug: 'importancia-do-planejamento-fiscal',
    title: 'A Importância do Planejamento Fiscal para Pequenas Empresas',
    excerpt:
      'Descubra como uma estruturação tributária adequada pode reduzir custos e evitar passivos na sua empresa.',
    content: `
      <p>O planejamento fiscal deixou de ser uma exclusividade das grandes corporações e tornou-se uma ferramenta de sobrevivência e competitividade para as pequenas e médias empresas. Em um cenário tributário complexo como o brasileiro, a desorganização pode levar a pagamentos indevidos e autuações severas.</p>
      
      <h3>Por que planejar?</h3>
      <p>O principal objetivo do planejamento tributário é a economia lícita de impostos, também conhecida como elisão fiscal. Ao analisar o regime tributário mais adequado (Simples Nacional, Lucro Presumido ou Lucro Real), a empresa pode alinhar suas operações para minimizar a carga tributária dentro da lei.</p>
      
      <h3>Principais Benefícios:</h3>
      <ul>
        <li>Redução legal da carga tributária;</li>
        <li>Prevenção contra autuações fiscais;</li>
        <li>Melhoria no fluxo de caixa da empresa;</li>
        <li>Maior competitividade no mercado.</li>
      </ul>

      <p>A consultoria preventiva atua mapeando as operações da empresa, identificando gargalos e oportunidades de recuperação de créditos tributários, além de assegurar que o negócio esteja totalmente <em>compliance</em> com a legislação vigente.</p>
    `,
    date: '2026-03-10',
    category: 'Direito Tributário',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=tax%20planning&color=black&dpr=2',
  },
  {
    id: '2',
    slug: 'governanca-corporativa',
    title: 'Governança Corporativa: O que é e por que implementar?',
    excerpt:
      'Entenda os pilares da governança corporativa e como ela pode atrair investimentos e profissionalizar a sua gestão.',
    content: `
      <p>A governança corporativa representa o sistema pelo qual as empresas e demais organizações são dirigidas, monitoradas e incentivadas. Envolve os relacionamentos entre sócios, conselho de administração, diretoria, órgãos de fiscalização e controle e demais partes interessadas.</p>
      
      <h3>Os Pilares da Governança</h3>
      <p>Para uma implementação de sucesso, quatro princípios básicos devem ser observados:</p>
      <ol>
        <li><strong>Transparência:</strong> Mais do que a obrigação de informar, é o desejo de disponibilizar informações que sejam de interesse das partes interessadas.</li>
        <li><strong>Equidade:</strong> Tratamento justo e isonômico de todos os sócios e demais partes interessadas (stakeholders).</li>
        <li><strong>Prestação de Contas (Accountability):</strong> Os agentes de governança devem prestar contas de sua atuação de modo claro, conciso, compreensível e tempestivo.</li>
        <li><strong>Responsabilidade Corporativa:</strong> Os agentes de governança devem zelar pela viabilidade econômico-financeira das organizações.</li>
      </ol>

      <p>No Direito Empresarial, a estruturação de uma boa governança mitiga conflitos societários e cria um ambiente de segurança jurídica fundamental para a captação de recursos e operações de fusões e aquisições.</p>
    `,
    date: '2026-02-28',
    category: 'Direito Empresarial',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=corporate%20governance&color=black&dpr=2',
  },
  {
    id: '3',
    slug: 'holding-familiar',
    title: 'Holding Familiar: Estratégia de Proteção e Sucessão Patrimonial',
    excerpt:
      'Como a constituição de uma holding pode proteger os bens da sua família e facilitar o processo sucessório.',
    content: `
      <p>A constituição de uma holding familiar tem se mostrado uma das estratégias jurídicas mais eficientes para o planejamento sucessório e a proteção patrimonial. Consiste, basicamente, na criação de uma empresa cujo objetivo principal é administrar o patrimônio de uma ou mais pessoas físicas da mesma família.</p>
      
      <h3>Vantagens da Holding Familiar</h3>
      <p>Entre os principais benefícios dessa estrutura societária, destacam-se:</p>
      <ul>
        <li><strong>Eficiência Tributária:</strong> Em muitos casos, a tributação sobre os rendimentos (como aluguéis) e sobre a transmissão de bens é significativamente menor na pessoa jurídica do que na pessoa física.</li>
        <li><strong>Prevenção de Conflitos:</strong> Estabelece regras claras de gestão e sucessão, evitando litígios demorados e desgastantes no processo de inventário.</li>
        <li><strong>Proteção Patrimonial:</strong> Isola o patrimônio pessoal dos riscos inerentes à atividade empresarial operada pelos sócios.</li>
      </ul>

      <p>O planejamento deve ser altamente personalizado, avaliando a composição do patrimônio, o regime de casamento dos sócios e as regras de governança que irão reger a sociedade, garantindo que o legado familiar seja preservado através das gerações.</p>
    `,
    date: '2026-02-15',
    category: 'Direito Societário',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=family%20business&color=black&dpr=2',
  },
]
