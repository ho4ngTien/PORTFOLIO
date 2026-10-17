import { skillGroups } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <SectionHeading eyebrow="What I work with" title="Skills" description="The tools and practices I use to move from idea to a reliable, polished interface." />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" data-reveal key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
              {group.skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-label"><span>{skill.name}</span><span>{skill.value}%</span></div>
                  <div aria-label={`${skill.name}: ${skill.value}%`} className="skill-track" role="img"><span style={{ width: `${skill.value}%` }} /></div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}