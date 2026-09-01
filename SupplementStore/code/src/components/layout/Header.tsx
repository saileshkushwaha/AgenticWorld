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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">SupplementStore</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-orange-600 font-medium">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
            <Link to="/faq" className="text-gray-700 hover:text-orange-600 font-medium">FAQ</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-l-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="px-2 py-1.5 border border-l-0 border-gray-300 rounded-r-lg text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-orange-600"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            )}

            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-orange-600">
              <ShoppingCartIcon className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs text-white bg-orange-600 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="p-2 text-gray-700 hover:text-orange-600">
                  <UserIcon className="w-5 h-5" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                  <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">My Account</Link>
                  <Link to="/account/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Orders</Link>
                  <Link to="/account/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Wishlist</Link>
                  <button
                    onClick={() => { logout(); navigate('/') }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-4 py-1.5 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
              >
                Sign In
              </button>
            )}

            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-orange-600 font-medium py-2">Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-orange-600 font-medium py-2">Products</Link>
            <Link to="/about" className="block text-gray-700 hover:text-orange-600 font-medium py-2">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-orange-600 font-medium py-2">Contact</Link>
            <Link to="/faq" className="block text-gray-700 hover:text-orange-600 font-medium py-2">FAQ</Link>
            {isAuthenticated ? (
              <>
                <Link to="/account" className="block text-gray-700 hover:text-orange-600 font-medium py-2">My Account</Link>
                <button onClick={() => { logout(); setMobileMenuOpen(false) }} className="block text-red-600 font-medium py-2">Sign Out</button>
              </>
            ) : (
              <button onClick={() => { setAuthModalOpen(true); setMobileMenuOpen(false) }} className="block text-orange-600 font-medium py-2">Sign In</button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
