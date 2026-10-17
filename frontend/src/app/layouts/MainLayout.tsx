import { useEffect, useState, type ReactNode } from 'react'
import { ArrowUp } from 'lucide-react'
import { Footer } from '@/shared/components/Footer'
import { Header } from '@/shared/components/Header'

export function MainLayout({ children }: { children: ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const updateScrollTop = () => setShowScrollTop(window.scrollY > 420)
    window.addEventListener('scroll', updateScrollTop, { passive: true })
    updateScrollTop()

    return () => {
      window.removeEventListener('scroll', updateScrollTop)
    }
  }, [])

  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
      <button
        aria-label="Back to top"
        className={`scroll-top${showScrollTop ? ' is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        type="button"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}