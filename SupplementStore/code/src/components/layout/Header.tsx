import { Link } from 'react-router-dom'
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount())
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">SupplementStore</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 font-medium">Products</Link>
            <Link to="/account" className="text-gray-700 hover:text-primary-600 font-medium">Account</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-primary-600">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary-600">
              <ShoppingCartIcon className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs text-white bg-primary-600 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link to="/account" className="p-2 text-gray-700 hover:text-primary-600">
              <UserIcon className="w-5 h-5" />
            </Link>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Products</Link>
            <Link to="/account" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Account</Link>
          </div>
        </div>
      )}
    </header>
  )
}
