import { FadeIn } from '@/components/ui/fade-in'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SEO } from '@/components/SEO'

const FAQS = [
  {
    question: 'Como funciona o inventário extrajudicial?',
    answer:
      'O inventário extrajudicial é a forma mais rápida e menos burocrática de partilhar bens, realizado em cartório quando todos os herdeiros são maiores, capazes e há consenso. A presença de um advogado é obrigatória por lei para assinar a escritura e garantir a legalidade do processo, que se conclui em poucas semanas.',
  },
  {
    question: 'Qual o papel de um advogado no planejamento tributário?',
    answer:
      'O advogado especializado analisa a estrutura do seu negócio para enquadrá-lo no regime tributário mais vantajoso, aproveitando isenções e créditos fiscais de forma totalmente legal. Isso reduz a carga de impostos, melhora o fluxo de caixa imediato e previne autuações fiscais futuras, protegendo a empresa contra riscos financeiros.',
  },
  {
    question: 'Como a assessoria trabalhista preventiva ajuda minha empresa?',
    answer:
      'A assessoria trabalhista preventiva adequa as rotinas de RH e contratos de trabalho à legislação vigente, reduzindo significativamente o passivo trabalhista. Isso evita processos e condenações custosas, criando um ambiente corporativo seguro e previsível para o crescimento sustentável do negócio sem surpresas judiciais.',
  },
  {
    question: 'Fui vítima de fraude bancária (ex: Pix, Consignado). O que fazer?',
    answer:
      'A primeira ação é notificar o banco imediatamente e registrar um boletim de ocorrência. Em seguida, contate um advogado especializado. Atuamos na responsabilização da instituição financeira por falha de segurança para buscar a restituição integral dos valores subtraídos e indenização por danos morais, com atuação ágil e estratégica.',
  },
]

export function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'O que fazer se for vítima de fraude bancária (Pix, Consignado)?',
    description:
      'Passo a passo sobre como agir em caso de fraudes financeiras para garantir a responsabilização do banco e buscar restituição.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Notifique o banco',
        text: 'Entre em contato imediatamente com a instituição financeira e informe a fraude ocorrida para bloqueio de transações e contas envolvidas.',
      },
      {
        '@type': 'HowToStep',
        name: 'Registre um B.O.',
        text: 'Faça um Boletim de Ocorrência na polícia civil (pode ser online) detalhando os fatos, os valores e os dados dos fraudadores.',
      },
      {
        '@type': 'HowToStep',
        name: 'Contate um advogado',
        text: 'Busque assessoria jurídica especializada para acionar o banco judicialmente, exigindo a restituição integral dos valores subtraídos e a devida indenização.',
      },
    ],
  }

  return (
    <section id="faq" className="py-24 bg-background border-t border-border/10">
      <SEO schema={[faqSchema, howToSchema]} />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Respostas Diretas para Suas Dúvidas
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Esclarecimentos objetivos sobre os serviços jurídicos do escritório, com respostas
              diretas para apoiar suas decisões.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors py-6">
                  <h2 className="text-lg font-bold">{faq.question}</h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
