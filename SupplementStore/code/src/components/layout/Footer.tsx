import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">SupplementStore</h3>
            <p className="text-gray-400 text-sm">
              Your trusted source for premium supplements. Quality products for your fitness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/account" className="hover:text-white">My Account</Link></li>
              <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products?category=proteins" className="hover:text-white">Proteins</Link></li>
              <li><Link to="/products?category=pre-workout" className="hover:text-white">Pre-Workout</Link></li>
              <li><Link to="/products?category=creatine" className="hover:text-white">Creatine</Link></li>
              <li><Link to="/products?category=vitamins" className="hover:text-white">Vitamins</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@supplementstore.com</li>
              <li>Phone: 1-800-SUPPLEMENT</li>
              <li>Mon-Fri: 9AM-6PM EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 SupplementStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
