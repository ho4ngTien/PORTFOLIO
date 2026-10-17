import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]
  const changeTestimonial = (direction: number) => {
    setActiveIndex((index) => (index + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-inner">
        <SectionHeading eyebrow="Kind words" title="Testimonials" description="Feedback from collaborators on the experience and the work." />
        <figure aria-live="polite" className="testimonial-card" data-reveal>
          <Quote aria-hidden="true" className="testimonial-quote-icon" size={33} />
          <blockquote className="testimonial-quote">“{testimonial.quote}”</blockquote>
          <figcaption className="testimonial-person">
            <img alt="" height="56" loading="lazy" src={testimonial.image} width="56" />
            <div><strong>{testimonial.name}</strong><span>{testimonial.role} · {testimonial.company}</span></div>
          </figcaption>
          <div className="testimonial-controls">
            <button aria-label="Previous testimonial" onClick={() => changeTestimonial(-1)} type="button"><ChevronLeft size={18} /></button>
            <span>{activeIndex + 1} / {testimonials.length}</span>
            <button aria-label="Next testimonial" onClick={() => changeTestimonial(1)} type="button"><ChevronRight size={18} /></button>
          </div>
        </figure>
      </div>
    </section>
  )
}