import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { ProductCard } from '../../components/product/ProductCard'
import { ProductFilters } from '../../types'
import { Pagination } from '../../components/ui/Pagination'
import { ProductGridSkeleton } from '../../components/ui/LoadingSkeleton'
import { EmptyState } from '../../components/ui/EmptyState'

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<ProductFilters>({
    category: searchParams.get('category') || undefined,
    search: searchParams.get('search') || undefined,
    sort: (searchParams.get('sort') as ProductFilters['sort']) || undefined,
    page: parseInt(searchParams.get('page') || '1'),
    limit: 9,
  })

  const { data, isLoading } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => api.products.getAll(filters),
  })

  const handleFilterChange = (key: keyof ProductFilters, value: string | undefined) => {
    const newFilters = { ...filters, [key]: value, page: 1 }
    setFilters(newFilters)
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    newParams.delete('page')
    setSearchParams(newParams)
  }

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page })
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', page.toString())
    setSearchParams(newParams)
  }

  const totalPages = data ? Math.ceil(data.total / filters.limit!) : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                value={filters.search || ''}
                onChange={(e) => handleFilterChange('search', e.target.value || undefined)}
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={filters.category || ''}
                onChange={(e) => handleFilterChange('category', e.target.value || undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">All Categories</option>
                <option value="proteins">Proteins</option>
                <option value="pre-workout">Pre-Workout</option>
                <option value="creatine">Creatine</option>
                <option value="vitamins">Vitamins</option>
                <option value="amino-acids">Amino Acids</option>
                <option value="weight-loss">Weight Loss</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                value={filters.sort || ''}
                onChange={(e) => handleFilterChange('sort', e.target.value || undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Default</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="created">Newest</option>
              </select>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              {data?.total || 0} products found
            </p>
          </div>

          {isLoading ? (
            <ProductGridSkeleton count={6} />
          ) : data?.data.length === 0 ? (
            <EmptyState
              icon="🔍"
              title="No products found"
              description="Try adjusting your filters or search terms"
              action={{
                label: 'Clear Filters',
                onClick: () => {
                  setFilters({ page: 1, limit: 9 })
                  setSearchParams({})
                },
              }}
            />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.data.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Pagination
                currentPage={filters.page || 1}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                className="mt-8"
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
