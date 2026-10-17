import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { navigationItems } from '@/shared/constants'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()

  useEffect(() => {
    const updateActiveSection = () => {
      let currentSection = 'hero'
      navigationItems.forEach(({ href }) => {
        const section = document.querySelector(href)
        if (section && section.getBoundingClientRect().top <= 150) currentSection = href.slice(1)
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('hashchange', updateActiveSection)
    updateActiveSection()
    const sectionFrame = window.requestAnimationFrame(updateActiveSection)
    return () => {
      window.cancelAnimationFrame(sectionFrame)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={location.pathname === '/' ? '#hero' : '/#hero'} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">HT</span><span>Hoàng Tiến</span>
        </a>
        <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} type="button">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          {navigationItems.map((item) => (
              <a aria-current={location.pathname === '/' && activeSection === item.href.slice(1) ? 'location' : undefined} className={location.pathname === '/' && activeSection === item.href.slice(1) ? 'active' : ''} href={location.pathname === '/' ? item.href : `/${item.href}`} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={location.pathname === '/' ? '#contact' : '/#contact'}>Let's talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}