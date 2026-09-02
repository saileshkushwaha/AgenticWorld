import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold">SupplementStore</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted source for premium supplements. Quality products for your fitness journey since 2020.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/category/proteins" className="hover:text-primary transition-colors">Proteins</Link></li>
              <li><Link to="/category/pre-workout" className="hover:text-primary transition-colors">Pre-Workout</Link></li>
              <li><Link to="/category/creatine" className="hover:text-primary transition-colors">Creatine</Link></li>
              <li><Link to="/category/vitamins" className="hover:text-primary transition-colors">Vitamins</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-primary">✉</span>
                <span>support@supplementstore.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">☎</span>
                <span>1-800-SUPPLEMENT</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🕐</span>
                <span>Mon-Fri: 9AM-6PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 SupplementStore. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
