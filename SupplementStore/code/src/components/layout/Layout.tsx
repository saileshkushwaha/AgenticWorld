import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { AuthModal } from '../auth/AuthModal'
import { ToastContainer } from '../ui/Toast'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <AuthModal />
      <ToastContainer />
    </div>
  )
}
