import { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
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
  BellIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { useThemeStore } from '../../stores/theme'
import { useAuthStore } from '../../stores/auth'

const navSections = [
  {
    title: 'Overview',
    items: [
      { path: '/admin', icon: HomeIcon, label: 'Dashboard', exact: true },
      { path: '/admin/analytics', icon: ChartBarIcon, label: 'Analytics' },
    ],
  },
  {
    title: 'Commerce',
    items: [
      { path: '/admin/products', icon: ShoppingBagIcon, label: 'Products' },
      { path: '/admin/categories', icon: TagIcon, label: 'Categories' },
      { path: '/admin/orders', icon: ShoppingCartIcon, label: 'Orders' },
    ],
  },
  {
    title: 'Customers',
    items: [
      { path: '/admin/users', icon: UsersIcon, label: 'Users' },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { path: '/admin/payments', icon: CreditCardIcon, label: 'Payments' },
      { path: '/admin/shipping', icon: TruckIcon, label: 'Shipping' },
      { path: '/admin/settings', icon: CogIcon, label: 'Settings' },
      { path: '/admin/theme', icon: PaintBrushIcon, label: 'Theme' },
    ],
  },
]

export function AdminLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { mode, toggleMode } = useThemeStore()
  const { user, logout } = useAuthStore()

  const isActive = (path: string, exact = false) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const currentSection = navSections.find((section) =>
    section.items.some((item) => isActive(item.path, item.exact))
  )
  const currentPage = currentSection?.items.find((item) => isActive(item.path, item.exact))

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
            <Link to="/admin" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">SupplementStore</span>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {navSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const active = isActive(item.path, item.exact)
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                          active
                            ? 'bg-primary text-white shadow-lg shadow-primary/25'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Back to Store */}
          <div className="p-4 border-t border-gray-800">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5" />
              <span className="font-medium">Back to Store</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top Header */}
        <header className="surface shadow-sm h-16 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30 border-b border-default">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-default">
              <Bars3Icon className="w-6 h-6" />
            </button>
            {/* Breadcrumbs */}
            <nav className="hidden sm:flex items-center gap-2 text-sm">
              <Link to="/admin" className="text-secondary hover:text-primary">Admin</Link>
              {currentPage && (
                <>
                  <span className="text-gray-400">/</span>
                  <span className="text-default font-medium">{currentPage.label}</span>
                </>
              )}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-surface rounded-lg border border-default">
              <MagnifyingGlassIcon className="w-4 h-4 text-secondary" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm text-default w-40"
              />
              <kbd className="hidden lg:inline-flex items-center px-2 py-0.5 text-xs text-secondary bg-surface rounded border border-default">⌘K</kbd>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleMode}
              className="p-2 text-secondary hover:text-primary rounded-lg hover:bg-surface transition-colors"
              aria-label={mode.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {mode.isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <button className="p-2 text-secondary hover:text-primary rounded-lg hover:bg-surface transition-colors relative">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface transition-colors"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-default">{user?.firstName}</span>
              </button>

              {userMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-56 surface rounded-xl shadow-lg border border-default py-2 z-50">
                    <div className="px-4 py-3 border-b border-default">
                      <p className="font-medium text-default text-sm">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-secondary">{user?.email}</p>
                      {user?.role === 'admin' && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Administrator</span>
                      )}
                    </div>
                    <Link to="/" className="block px-4 py-2.5 text-sm text-default hover:bg-surface" onClick={() => setUserMenuOpen(false)}>
                      View Store
                    </Link>
                    <Link to="/account" className="block px-4 py-2.5 text-sm text-default hover:bg-surface" onClick={() => setUserMenuOpen(false)}>
                      My Account
                    </Link>
                    <hr className="my-1 border-default" />
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-surface">
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
