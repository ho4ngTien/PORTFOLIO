import { MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-brand" to="/#hero">Hoàng Tiến<span>.</span></Link>
        <p>Building useful interfaces with care.</p>
        <div className="footer-links">
          <a aria-label="GitHub" href="https://github.com/ho4ngTien" rel="noreferrer" target="_blank">gh</a>
          <a aria-label="LinkedIn" href="https://linkedin.com" rel="noreferrer" target="_blank">in</a>
          <Link aria-label="Back to top" to="/#hero"><MoveUpRight size={18} /></Link>
        </div>
        <small>© {new Date().getFullYear()} Hoàng Tiến. DevFolio design by <a href="https://bootstrapmade.com/" rel="noreferrer" target="_blank">BootstrapMade</a>.</small>
      </div>
    </footer>
  )
}