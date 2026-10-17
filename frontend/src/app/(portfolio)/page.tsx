import { About } from '@/features/about'
import { Contact } from '@/features/contact'
import { FAQ } from '@/features/faq'
import { Hero } from '@/features/hero'
import { Pricing } from '@/features/pricing'
import { Projects } from '@/features/projects'
import { Resume } from '@/features/resume'
import { Services } from '@/features/services'
import { Skills } from '@/features/skills'
import { Stats } from '@/features/stats'
import { Testimonials } from '@/features/testimonials'
import { PortfolioLayout } from './layout'

export function PortfolioPage() {
  return (
    <PortfolioLayout>
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Services />
        <Stats />
        <Projects />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
    </PortfolioLayout>
  )
}