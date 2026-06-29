import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { PracticeAreas } from '@/components/sections/PracticeAreas'
import { Team } from '@/components/sections/Team'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { SEO } from '@/components/SEO'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Index() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'JOSÉ ROBERTO DE SOUZA Advogados Associados',
    url: 'https://www.josersouza.com.br',
    telephone: '+5519994691494',
    image: 'https://www.josersouza.com.br/logo.png',
    description:
      'A resposta direta para suas necessidades legais. Atuamos com estratégia e foco em resultados concretos para proteger empresas e pessoas físicas contra riscos e perdas financeiras.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Conceição, 233, Sala 709',
      addressLocality: 'Campinas',
      addressRegion: 'SP',
      postalCode: '13010-050',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://www.linkedin.com/company/josersouzaadvogados',
      'https://www.instagram.com/josersouzaadvogados',
      'https://www.facebook.com/josersouzaadvogados',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.josersouza.com.br',
    name: 'JOSÉ ROBERTO DE SOUZA Advogados Associados',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.josersouza.com.br/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <div className="w-full">
      <SEO
        title="JOSÉ ROBERTO DE SOUZA Advogados | Assessoria Jurídica Especializada"
        description="A resposta direta para suas necessidades legais. Atuamos com estratégia e foco em resultados concretos para proteger empresas e pessoas físicas contra riscos e perdas financeiras."
        schema={[organizationSchema, websiteSchema]}
      />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}
