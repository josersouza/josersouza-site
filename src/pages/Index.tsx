import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { PracticeAreas } from '@/components/sections/PracticeAreas'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <PracticeAreas />
      <Stats />
      <Testimonials />
      <Contact />
    </div>
  )
}
