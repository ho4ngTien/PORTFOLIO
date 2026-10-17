import { ArrowLeft, ArrowUpRight, CalendarDays, Tag } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '@/shared/constants'

export function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <main className="detail-page"><div className="detail-container"><span className="eyebrow">Project not found</span><h1>This project is unavailable.</h1><Link className="button" to="/#projects"><ArrowLeft size={15} /> Back to portfolio</Link></div></main>
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <div className="detail-breadcrumb"><Link to="/#projects"><ArrowLeft size={15} /> Portfolio</Link><span>/</span><span>{project.title}</span></div>
        <div className="detail-heading">
          <span className="eyebrow">{project.label}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <img className="detail-cover" alt={`${project.title} project preview`} src={project.image} />
        <div className="detail-content">
          <article>
            <span className="eyebrow">Overview</span>
            <h2>About the project</h2>
            <p>{project.description} The work focuses on clear information hierarchy, responsive behavior, and interfaces that make the primary tasks easy to understand.</p>
            <p>Built as a practical project, it combines a considered frontend experience with the tools and workflow needed to support the product.</p>
          </article>
          <aside className="detail-facts">
            <h2>Project information</h2>
            <p><Tag size={16} /><span><strong>Category</strong>{project.label}</span></p>
            <p><CalendarDays size={16} /><span><strong>Year</strong>{project.year}</span></p>
            <div className="detail-tags">{project.tech.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <a className="button" href={project.githubUrl} rel="noreferrer" target="_blank">View repository <ArrowUpRight size={16} /></a>
          </aside>
        </div>
      </div>
    </main>
  )
}