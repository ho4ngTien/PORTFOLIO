import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/shared/components'

const technologies = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Spring Boot', 'MySQL']

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner">
        <SectionHeading eyebrow="A little about me" title="About" description="A thoughtful builder who cares about how products work and how people feel using them." />
        <div className="about-grid">
          <div aria-label="Hoàng Tiến, frontend developer" className="about-visual" data-reveal>
            <span className="about-monogram">HT</span>
            <div>
              <span className="about-visual-kicker">Frontend · Product UI</span>
              <h3>Designing for clarity.<br />Engineering for people.</h3>
            </div>
            <div className="about-visual-footer"><span>Ho Chi Minh City</span><span>React / TypeScript</span></div>
          </div>
          <div className="about-copy" data-reveal>
            <h3>Frontend developer & product-minded designer</h3>
            <p>I am a computer science student at the University of Transport Ho Chi Minh City, building web experiences that balance visual polish with practical engineering.</p>
            <p>My work spans portfolio sites, education tools, and civic-tech products. I enjoy making complex information feel simple and interfaces feel considered.</p>
            <div className="about-details">
              <p><Check size={16} /><span><strong>Based in:</strong> Ho Chi Minh City, Vietnam</span></p>
              <p><Check size={16} /><span><strong>Focus:</strong> Frontend & product UI</span></p>
              <p><Check size={16} /><span><strong>Education:</strong> Computer Science</span></p>
              <p><Check size={16} /><span><strong>Availability:</strong> Open to opportunities</span></p>
            </div>
            <a className="text-link" href="#resume">More about my experience <ArrowRight size={16} /></a>
            <div className="tech-list" aria-label="Technologies">
              {technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}