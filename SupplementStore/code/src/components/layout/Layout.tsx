import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { AuthModal } from '../auth/AuthModal'
import { ToastContainer } from '../ui/Toast'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <AuthModal />
      <ToastContainer />
    </div>
  )
}
