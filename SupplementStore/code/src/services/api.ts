import { Product, Category, Review, ProductFilters } from '../types'
import { products, categories, reviews } from './mockData'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
  products: {
    getAll: async (filters?: ProductFilters): Promise<{ data: Product[]; total: number }> => {
      await delay(300)
      let filtered = [...products]

      if (filters?.category) {
        filtered = filtered.filter(p => p.category.slug === filters.category)
      }
      if (filters?.brand) {
        filtered = filtered.filter(p => p.brand.toLowerCase().includes(filters.brand!.toLowerCase()))
      }
      if (filters?.minPrice) {
        filtered = filtered.filter(p => (p.salePrice ?? p.price) >= filters.minPrice!)
      }
      if (filters?.maxPrice) {
        filtered = filtered.filter(p => (p.salePrice ?? p.price) <= filters.maxPrice!)
      }
      if (filters?.search) {
        const search = filters.search.toLowerCase()
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(search) ||
          p.brand.toLowerCase().includes(search) ||
          p.category.name.toLowerCase().includes(search)
        )
      }

      if (filters?.sort) {
        const order = filters.order === 'desc' ? -1 : 1
        filtered.sort((a, b) => {
          switch (filters.sort) {
            case 'price':
              return ((a.salePrice ?? a.price) - (b.salePrice ?? b.price)) * order
            case 'rating':
              return (a.rating - b.rating) * order
            case 'created':
              return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * order
            default:
              return 0
          }
        })
      }

      const total = filtered.length
      const page = filters?.page ?? 1
      const limit = filters?.limit ?? 20
      const start = (page - 1) * limit
      const data = filtered.slice(start, start + limit)

      return { data, total }
    },

    getById: async (id: string): Promise<Product | undefined> => {
      await delay(200)
      return products.find(p => p.id === id)
    },

    getBySlug: async (slug: string): Promise<Product | undefined> => {
      await delay(200)
      return products.find(p => p.slug === slug)
    },

    getFeatured: async (): Promise<Product[]> => {
      await delay(200)
      return products.filter(p => p.rating >= 4.5).slice(0, 8)
    },

    search: async (query: string): Promise<Product[]> => {
      await delay(200)
      const search = query.toLowerCase()
      return products.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.brand.toLowerCase().includes(search)
      ).slice(0, 5)
    },
  },

  categories: {
    getAll: async (): Promise<Category[]> => {
      await delay(200)
      return categories
    },

    getBySlug: async (slug: string): Promise<Category | undefined> => {
      await delay(200)
      return categories.find(c => c.slug === slug)
    },
  },

  reviews: {
    getByProduct: async (productId: string): Promise<Review[]> => {
      await delay(200)
      return reviews.filter(r => r.productId === productId)
    },

    create: async (review: Omit<Review, 'id' | 'createdAt'>): Promise<Review> => {
      await delay(300)
      const newReview: Review = {
        ...review,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      }
      reviews.push(newReview)
      return newReview
    },
  },
}
