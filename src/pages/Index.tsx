import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { PracticeAreas } from '@/components/sections/PracticeAreas'
import { Team } from '@/components/sections/Team'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
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

  return (
    <div className="w-full">
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Stats />
      <Testimonials />
      <Contact />
    </div>
  )
}
