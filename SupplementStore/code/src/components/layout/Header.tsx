import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBagIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { useAuthStore } from '../../stores/auth'
import { useThemeStore } from '../../stores/theme'

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount())
  const { isMobileMenuOpen, setMobileMenuOpen, setAuthModalOpen } = useUIStore()
  const { isAuthenticated, user, logout } = useAuthStore()
  const { mode, toggleMode } = useThemeStore()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className="surface shadow-sm sticky top-0 z-50 border-b border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-primary">SupplementStore</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-secondary hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/products" className="text-secondary hover:text-primary font-medium transition-colors">Products</Link>
            <Link to="/about" className="text-secondary hover:text-primary font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-secondary hover:text-primary font-medium transition-colors">Contact</Link>
            <Link to="/faq" className="text-secondary hover:text-primary font-medium transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center gap-3">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." className="w-48 px-4 py-2 border border-default rounded-full text-sm focus:ring-2 bg-surface" autoFocus />
                <button type="button" onClick={() => setIsSearchOpen(false)} className="ml-2 p-2 text-secondary">
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button data-testid="search-button" onClick={() => setIsSearchOpen(true)} className="p-2 text-secondary hover:text-primary hover:opacity-80 rounded-full transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            )}

            <Link to="/cart" data-testid="cart-link" className="relative p-2 text-secondary hover:text-primary rounded-full transition-colors">
              <ShoppingCartIcon className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center text-[10px] text-white bg-primary rounded-full font-bold">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>

            <button onClick={toggleMode} className="p-2 text-secondary hover:text-primary rounded-full transition-colors" aria-label={mode.isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
              {mode.isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            {isAuthenticated ? (
              <div className="relative group">
                <button data-testid="user-menu" className="flex items-center gap-2 p-1.5 rounded-full hover:opacity-80 transition-colors">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{user?.firstName?.[0]}{user?.lastName?.[0]}</span>
                  </div>
                </button>
                <div className="absolute right-0 top-full mt-2 w-56 surface rounded-xl shadow-lg border border-default py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="px-4 py-3 border-b border-default">
                    <p className="font-medium text-default text-sm">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-secondary">{user?.email}</p>
                    {user?.role === 'admin' && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Admin</span>
                    )}
                  </div>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="block px-4 py-2.5 text-sm text-primary hover:opacity-80 font-medium" onClick={() => setIsSearchOpen(false)}>Admin Panel</Link>
                  )}
                  <Link to="/account" className="block px-4 py-2.5 text-sm text-default hover:opacity-80" onClick={() => setIsSearchOpen(false)}>My Account</Link>
                  <Link to="/account/orders" className="block px-4 py-2.5 text-sm text-default hover:opacity-80" onClick={() => setIsSearchOpen(false)}>Orders</Link>
                  <Link to="/account/wishlist" className="block px-4 py-2.5 text-sm text-default hover:opacity-80" onClick={() => setIsSearchOpen(false)}>Wishlist</Link>
                  <hr className="my-1 border-default" />
                  <button onClick={() => { logout(); navigate('/') }} className="block w-full text-left px-4 py-2.5 text-sm text-red-500 hover:opacity-80">Sign Out</button>
                </div>
              </div>
            ) : (
              <button onClick={() => setAuthModalOpen(true)} className="px-5 py-2 btn-primary">Sign In</button>
            )}

            <button data-testid="mobile-menu-button" className="md:hidden p-2 text-secondary hover:text-primary" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-default surface">
          <div className="px-4 py-4 space-y-1">
            {user?.role === 'admin' && (
              <Link to="/admin" className="block px-4 py-3 text-primary hover:opacity-80 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Admin Panel</Link>
            )}
            <Link to="/" className="block px-4 py-3 text-default hover:opacity-80 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block px-4 py-3 text-default hover:opacity-80 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/about" className="block px-4 py-3 text-default hover:opacity-80 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block px-4 py-3 text-default hover:opacity-80 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/faq" className="block px-4 py-3 text-default hover:opacity-80 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <hr className="my-2 border-default" />
            {isAuthenticated ? (
              <>
                <Link to="/account" className="block px-4 py-3 text-default hover:opacity-80 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
                <button onClick={() => { logout(); setMobileMenuOpen(false) }} className="block w-full text-left px-4 py-3 text-red-500 hover:opacity-80 rounded-lg font-medium">Sign Out</button>
              </>
            ) : (
              <button onClick={() => { setAuthModalOpen(true); setMobileMenuOpen(false) }} className="block w-full text-left px-4 py-3 text-primary hover:opacity-80 rounded-lg font-medium">Sign In</button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
