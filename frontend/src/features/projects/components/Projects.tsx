import { useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

const filters = ['All', 'Frontend', 'Full Stack', 'Product']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner">
        <SectionHeading eyebrow="Selected work" title="Portfolio" description="A few projects that show how I approach interfaces, systems, and real-world workflows." />
        <div aria-label="Filter projects" className="project-filters" role="group">
          {filters.map((filter) => (
            <button aria-pressed={activeFilter === filter} key={filter} onClick={() => setActiveFilter(filter)} type="button">{filter}</button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <article className="project-card" data-reveal key={project.title}>
              <Link aria-label={`View details for ${project.title}`} className="project-image" to={`/portfolio/${project.slug}`}>
                <img alt={`${project.title} project preview`} height="675" loading="lazy" src={project.image} width="1200" />
                <span><ExternalLink size={17} /></span>
              </Link>
              <div className="project-info">
                <div className="project-meta"><span>{project.label}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tech.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <div className="project-actions">
                  <Link className="project-link" to={`/portfolio/${project.slug}`}>Project details <ArrowUpRight size={15} /></Link>
                  <a className="project-link" href={project.githubUrl} rel="noreferrer" target="_blank">GitHub <ExternalLink size={14} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}