import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { ProductCard } from '../../components/product/ProductCard'
import { ProductGridSkeleton } from '../../components/ui/LoadingSkeleton'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Pagination } from '../../components/ui/Pagination'
import { useState } from 'react'

export function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [page, setPage] = useState(1)
  const limit = 9

  const { data: productsData, isLoading } = useQuery({
    queryKey: ['category-products', slug, page],
    queryFn: () => api.products.getAll({ category: slug, page, limit }),
    enabled: !!slug,
  })

  const categoryName = slug?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase() || '')
  const totalPages = productsData ? Math.ceil(productsData.total / limit) : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: categoryName || '' },
        ]}
        className="mb-6"
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{categoryName}</h1>
        <p className="text-gray-600 mt-2">
          Browse our selection of {categoryName?.toLowerCase()} supplements
        </p>
      </div>

      {isLoading ? (
        <ProductGridSkeleton count={6} />
      ) : (
        <>
          <p className="text-gray-600 mb-4">{productsData?.total || 0} products found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData?.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="mt-8"
          />
        </>
      )}

      <div className="mt-12 bg-orange-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Looking for something else?</h2>
        <p className="text-gray-600 mb-4">Explore our other categories</p>
        <div className="flex flex-wrap gap-2">
          {['proteins', 'pre-workout', 'creatine', 'vitamins', 'amino-acids', 'weight-loss'].map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                cat === slug
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {cat.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase() || '')}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
