import { Route, Routes } from 'react-router-dom'
import { PortfolioPage } from '@/app/(portfolio)/page'
import { ProjectDetails } from '@/features/projects'
import { ServiceDetails } from '@/features/services'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/portfolio/:slug" element={<ProjectDetails />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="*" element={<PortfolioPage />} />
    </Routes>
  )
}