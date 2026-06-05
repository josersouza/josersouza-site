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
      'A forma mais rápida e menos burocrática de partilhar bens. O inventário extrajudicial é realizado em cartório quando todos os herdeiros são maiores, capazes e há consenso. A presença de um advogado é obrigatória por lei para assinar a escritura e garantir a legalidade do processo.',
  },
  {
    question: 'Qual o papel de um advogado no planejamento tributário?',
    answer:
      'A redução legal dos impostos da sua empresa. Analisamos a estrutura do seu negócio para enquadrá-lo no regime tributário mais vantajoso, aproveitando isenções e créditos fiscais de forma 100% legal, melhorando o fluxo de caixa imediato.',
  },
  {
    question: 'Como a assessoria trabalhista preventiva ajuda minha empresa?',
    answer:
      'Evitando processos e condenações custosas. Adequamos as rotinas de RH e contratos de trabalho à legislação vigente, reduzindo significativamente o passivo trabalhista e criando um ambiente seguro e previsível para o crescimento do negócio.',
  },
  {
    question: 'Fui vítima de fraude bancária (ex: Pix, Consignado). O que fazer?',
    answer:
      'A primeira ação é notificar o banco imediatamente e registrar um boletim de ocorrência. Em seguida, contate um advogado especializado. Atuamos na responsabilização da instituição financeira por falha de segurança para buscar a restituição integral dos valores subtraídos e indenização por danos morais.',
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

  return (
    <section id="faq" className="py-24 bg-background border-t border-border/10">
      <SEO schema={[faqSchema]} />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Respostas Diretas para Suas Dúvidas
            </h2>
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
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
