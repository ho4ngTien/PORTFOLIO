import { GraduationCap, BriefcaseBusiness } from 'lucide-react'
import { educationItems, experienceItems } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="section-inner">
        <SectionHeading eyebrow="The path so far" title="Resume" description="A mix of academic foundations, independent practice, and hands-on projects." />
        <div className="resume-grid">
          <div className="resume-column" data-reveal>
            <h3><BriefcaseBusiness size={19} /> Experience</h3>
            <div className="timeline">
              {experienceItems.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <span className="timeline-meta">{item.year}</span>
                  <p><em>{item.company}</em></p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="resume-column" data-reveal>
            <h3><GraduationCap size={20} /> Education</h3>
            <div className="timeline">
              {educationItems.map((item) => (
                <article className="timeline-item" key={item.degree}>
                  <h4>{item.degree}</h4>
                  <span className="timeline-meta">{item.year}</span>
                  <p><em>{item.institution}</em></p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}