import { ArrowRight } from 'lucide-react'
import { collaborationOptions } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function Pricing() {
  return (
    <section className="section pricing-section" id="approach">
      <div className="section-inner">
        <SectionHeading eyebrow="A clear way to work" title="How I collaborate" description="A simple process keeps the scope clear and the finished experience useful." />
        <div className="collaboration-grid">
          {collaborationOptions.map((option, index) => (
            <article className="collaboration-item" data-reveal key={option.name}>
              <span className="collaboration-number">0{index + 1}</span>
              <h3>{option.name}</h3>
              <p>{option.detail}</p>
              <a href="#contact">Discuss a project <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}