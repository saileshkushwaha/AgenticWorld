import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { ProductCard } from '../../components/product/ProductCard'
import { ProductGridSkeleton } from '../../components/ui/LoadingSkeleton'
import { useRecentlyViewedStore } from '../../stores/recentlyViewed'
import { NewsletterSignup } from '../../components/newsletter/NewsletterSignup'
import { Product } from '../../types'

export function HomePage() {
  const { data: featuredProducts, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => api.products.getFeatured(),
  })

  const recentlyViewedIds = useRecentlyViewedStore((state) => state.getItems())

  const { data: recentlyViewedProducts } = useQuery({
    queryKey: ['recently-viewed', recentlyViewedIds],
    queryFn: async (): Promise<Product[]> => {
      if (recentlyViewedIds.length === 0) return []
      const products = await Promise.all(recentlyViewedIds.slice(0, 4).map((id) => api.products.getById(id)))
      return products.filter((p): p is Product => p != null)
    },
    enabled: recentlyViewedIds.length > 0,
  })

  return (
    <div>
      <section className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary), #be185d)' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">🏋️ Premium Fitness Supplements</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Fuel Your <span className="text-yellow-300">Fitness</span> Journey</h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">Premium supplements for gym enthusiasts. Authentic products, expert guidance, and fast delivery.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="px-8 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-lg">Shop Now</Link>
              <Link to="/products?category=proteins" className="px-8 py-3.5 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">View Proteins</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-default">Featured Products</h2>
            <p className="text-secondary mt-2">Our top-rated supplements</p>
          </div>
          <Link to="/products" className="text-primary hover:opacity-80 font-medium flex items-center gap-1">View All <span>→</span></Link>
        </div>
        {isLoading ? <ProductGridSkeleton count={4} /> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{featuredProducts?.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-default">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Proteins', emoji: '💪' },
              { name: 'Pre-Workout', emoji: '⚡' },
              { name: 'Creatine', emoji: '🏋️' },
              { name: 'Vitamins', emoji: '🌟' },
              { name: 'Amino Acids', emoji: '🔬' },
              { name: 'Weight Loss', emoji: '🔥' },
            ].map((cat) => (
              <Link key={cat.name} to={`/category/${cat.name.toLowerCase().replace(' ', '-')}`} className="group card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{cat.emoji}</div>
                <h3 className="font-medium text-default text-sm">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: '✅', title: '100% Authentic', desc: 'Lab-tested products' },
            { icon: '🚀', title: 'Fast Shipping', desc: '2-3 Business Days' },
            { icon: '💯', title: 'Expert Support', desc: 'Fitness professionals' },
            { icon: '🔒', title: 'Secure Payment', desc: 'SSL encrypted' },
          ].map((badge) => (
            <div key={badge.title} className="text-center p-6 rounded-2xl card">
              <div className="text-3xl mb-3">{badge.icon}</div>
              <h3 className="font-bold text-default mb-1">{badge.title}</h3>
              <p className="text-sm text-secondary">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {recentlyViewedProducts && recentlyViewedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-default mb-8">Recently Viewed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{recentlyViewedProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><NewsletterSignup /></section>
    </div>
  )
}
