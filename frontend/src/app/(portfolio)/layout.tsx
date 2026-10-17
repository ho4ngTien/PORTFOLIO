import type { ReactNode } from 'react'

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return <div className="portfolio-page">{children}</div>
}