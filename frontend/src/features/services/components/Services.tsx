import { Blocks, CodeXml, PanelsTopLeft, WandSparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

const serviceIcons = [PanelsTopLeft, Blocks, CodeXml, WandSparkles]

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-inner">
        <SectionHeading eyebrow="How I can help" title="Services" description="Practical support for teams and people building their next useful web experience." />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <article className="service-item" data-reveal key={service.title}>
                <div className="service-icon"><Icon size={25} strokeWidth={1.7} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="service-link" to={`/services/${service.slug}`}>Service details <span aria-hidden="true">↗</span></Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}