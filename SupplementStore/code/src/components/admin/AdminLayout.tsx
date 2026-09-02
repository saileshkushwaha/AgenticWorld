import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  ShoppingBagIcon,
  TagIcon,
  ShoppingCartIcon,
  UsersIcon,
  CreditCardIcon,
  TruckIcon,
  CogIcon,
  PaintBrushIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'
import { useThemeStore } from '../../stores/theme'

const navItems = [
  { path: '/admin', icon: HomeIcon, label: 'Dashboard', exact: true },
  { path: '/admin/products', icon: ShoppingBagIcon, label: 'Products' },
  { path: '/admin/categories', icon: TagIcon, label: 'Categories' },
  { path: '/admin/orders', icon: ShoppingCartIcon, label: 'Orders' },
  { path: '/admin/users', icon: UsersIcon, label: 'Users' },
  { path: '/admin/payments', icon: CreditCardIcon, label: 'Payments' },
  { path: '/admin/shipping', icon: TruckIcon, label: 'Shipping' },
  { path: '/admin/settings', icon: CogIcon, label: 'Settings' },
  { path: '/admin/theme', icon: PaintBrushIcon, label: 'Theme' },
]

export function AdminLayout() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { mode, toggleMode } = useThemeStore()

  const isActive = (path: string, exact = false) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          <Link to="/admin" className="text-xl font-bold">Admin Panel</Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path, item.exact)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  active ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="surface shadow-sm h-16 flex items-center justify-between px-4 sticky top-0 z-30 border-b border-default">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <Bars3Icon className="w-6 h-6 text-default" />
          </button>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-secondary hover:text-primary">View Store</Link>
            <button
              onClick={toggleMode}
              className="p-2 text-secondary hover:text-primary rounded-full transition-colors"
              aria-label={mode.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {mode.isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
