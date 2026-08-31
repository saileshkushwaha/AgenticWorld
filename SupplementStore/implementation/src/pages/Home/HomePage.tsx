import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { ProductCard } from '../../components/product/ProductCard'
import { Button } from '../../components/ui/Button'

export function HomePage() {
  const { data: featuredProducts } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => api.products.getFeatured(),
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fuel Your Fitness Journey
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Premium supplements for gym enthusiasts. Authentic products, expert guidance, and fast delivery.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
              <Link to="/products?category=proteins">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
                  View Proteins
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-primary-600 hover:text-primary-700 font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Proteins', 'Pre-Workout', 'Creatine', 'Vitamins', 'Amino Acids', 'Weight Loss'].map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${cat.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <p className="text-gray-600">Authentic Products</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">Lab Tested</div>
            <p className="text-gray-600">Third Party Verified</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">Fast Shipping</div>
            <p className="text-gray-600">2-3 Business Days</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">Expert Support</div>
            <p className="text-gray-600">Fitness Professionals</p>
          </div>
        </div>
      </section>
    </div>
  )
}
