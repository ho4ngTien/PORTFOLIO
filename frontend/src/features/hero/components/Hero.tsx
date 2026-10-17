import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Hoàng Tiến · Frontend Builder</p>
          <h1>Thoughtful digital experiences, <span>built for people.</span></h1>
          <p className="hero-role">I am a <strong>Frontend Developer</strong></p>
          <p className="hero-description">I build clear, responsive interfaces and practical products with React, TypeScript, and a product-minded approach.</p>
          <div className="hero-actions">
            <a className="button" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
            <a className="button button-outline" href="#contact">Get in touch</a>
          </div>
        </div>
        <a className="hero-note" href="#about"><span /> Based in Ho Chi Minh City <ArrowDown size={15} /></a>
      </div>
    </section>
  )
}