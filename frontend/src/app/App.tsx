import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/app/layouts/MainLayout'
import { AppRouter } from '@/app/router'

export function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  )
}