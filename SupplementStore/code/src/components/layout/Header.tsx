import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { useAuthStore } from '../../stores/auth'

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount())
  const { isMobileMenuOpen, setMobileMenuOpen, setAuthModalOpen } = useUIStore()
  const { isAuthenticated, user, logout } = useAuthStore()
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
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              SupplementStore
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Contact</Link>
            <Link to="/faq" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center gap-3">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-48 px-4 py-2 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                data-testid="search-button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            )}

            <Link to="/cart" data-testid="cart-link" className="relative p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              <ShoppingCartIcon className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center text-[10px] text-white bg-orange-600 rounded-full font-bold">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button data-testid="user-menu" className="flex items-center gap-2 p-1.5 rounded-full hover:bg-orange-50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </span>
                  </div>
                </button>
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-medium text-gray-900 text-sm">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link to="/account" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">My Account</Link>
                  <Link to="/account/orders" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Orders</Link>
                  <Link to="/account/wishlist" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Wishlist</Link>
                  <hr className="my-1 border-gray-100" />
                  <button
                    onClick={() => { logout(); navigate('/') }}
                    className="block w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Sign In
              </button>
            )}

            <button
              data-testid="mobile-menu-button"
              className="md:hidden p-2 text-gray-500 hover:text-orange-600"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/faq" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <hr className="my-2 border-gray-100" />
            {isAuthenticated ? (
              <>
                <Link to="/account" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
                <button onClick={() => { logout(); setMobileMenuOpen(false) }} className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium">Sign Out</button>
              </>
            ) : (
              <button onClick={() => { setAuthModalOpen(true); setMobileMenuOpen(false) }} className="block w-full text-left px-4 py-3 text-orange-600 hover:bg-orange-50 rounded-lg font-medium">Sign In</button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
