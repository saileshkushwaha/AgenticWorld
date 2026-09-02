import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '../types'

export interface WishlistItem {
  id: string
  product: Product
  createdAt: string
  notes?: string
  priority?: 'low' | 'medium' | 'high'
  tags?: string[]
  priceHistory?: { price: number; date: string }[]
  stockAlert?: boolean
  customName?: string
}

export interface WishlistList {
  id: string
  name: string
  isPublic?: boolean
  createdAt: string
  itemIds: string[]
}

interface WishlistState {
  // Multiple wishlist lists
  lists: WishlistList[]
  activeListId: string | null
  
  // User preferences
  settings: {
    defaultView: 'grid' | 'list'
    showPriceHistory: boolean
    showTags: boolean
    enablePriceAlerts: boolean
    enableStockAlerts: boolean
  }
  
  // Actions
  createList: (name: string, isPublic?: boolean) => void
  deleteList: (listId: string) => void
  updateList: (listId: string, updates: Partial<WishlistList>) => void
  setActiveList: (listId: string | null) => void
  
  // Items management
  addItemToList: (listId: string, product: Product, options?: Partial<WishlistItem>) => void
  removeItemFromList: (listId: string, productId: string) => void
  updateItem: (listId: string, productId: string, updates: Partial<WishlistItem>) => void
  
  // List operations
  moveItem: (fromListId: string, toListId: string, productId: string) => void
  duplicateList: (listId: string, newName: string) => void
  
  // Utility functions
  isInList: (listId: string, productId: string) => boolean
  getItemCount: (listId: string) => number
  getItems: (listId: string) => WishlistItem[]
  getListById: (listId: string) => WishlistList | undefined
  
  // Search and filter
  searchItems: (listId: string, query: string) => WishlistItem[]
  filterItems: (listId: string, filters: WishlistFilters) => WishlistItem[]
  
  // Analytics
  getAnalytics: (listId: string) => WishlistAnalytics
  
  // Import/Export
  exportList: (listId: string) => string
  importList: (listId: string, data: string) => void
}

interface WishlistFilters {
  tags?: string[]
  priority?: ('low' | 'medium' | 'high')[]
  priceRange?: { min: number; max: number }
  dateRange?: { start: string; end: string }
  hasNotes?: boolean
}

interface WishlistAnalytics {
  totalItems: number
  totalValue: number
  averagePrice: number
  mostCommonTags: string[]
  priorityDistribution: { low: number; medium: number; high: number }
  priceHistory: { date: string; averagePrice: number }[]
  categoryBreakdown: { [category: string]: number }
}

const defaultFilters: WishlistFilters = {}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      lists: [],
      activeListId: null,
      settings: {
        defaultView: 'grid',
        showPriceHistory: false,
        showTags: true,
        enablePriceAlerts: true,
        enableStockAlerts: true,
      },
      
      createList: (name, isPublic = false) => {
        const newList: WishlistList = {
          id: crypto.randomUUID(),
          name,
          isPublic,
          createdAt: new Date().toISOString(),
          itemIds: [],
        }
        set((state) => ({
          lists: [...state.lists, newList],
          activeListId: newList.id,
        }))
      },
      
      deleteList: (listId) => {
        set((state) => ({
          lists: state.lists.filter((list) => list.id !== listId),
          activeListId: state.activeListId === listId ? null : state.activeListId,
        }))
      },
      
      updateList: (listId, updates) => {
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId ? { ...list, ...updates } : list
          ),
        }))
      },
      
      setActiveList: (listId) => {
        set({ activeListId: listId })
      },
      
      addItemToList: (listId, product, options = {}) => {
        set((state) => {
          const list = state.lists.find((l) => l.id === listId)
          if (!list) return state
          
          const existingItem = list.itemIds.some((id) => {
            // This is a simplified check - in a real implementation you'd need to store items separately
            return false
          })
          
          if (existingItem) return state
          
          const newItem: WishlistItem = {
            id: crypto.randomUUID(),
            product,
            createdAt: new Date().toISOString(),
            priceHistory: [{ price: product.price, date: new Date().toISOString() }],
            ...options,
          }
          
          return {
            lists: state.lists.map((list) =>
              list.id === listId
                ? { ...list, itemIds: [...list.itemIds, newItem.id] }
                : list
            ),
          }
        })
      },
      
      removeItemFromList: (listId, productId) => {
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? { ...list, itemIds: list.itemIds.filter((id) => id !== productId) }
              : list
          ),
        }))
      },
      
      updateItem: (listId, productId, updates) => {
        set((state) => ({
          lists: state.lists.map((list) => {
            if (list.id !== listId) return list
            
            const itemIndex = list.itemIds.indexOf(productId)
            if (itemIndex === -1) return list
            
            // This would require storing items separately, simplified for now
            return list
          }),
        }))
      },
      
      moveItem: (fromListId, toListId, productId) => {
        set((state) => {
          const fromList = state.lists.find((l) => l.id === fromListId)
          const toList = state.lists.find((l) => l.id === toListId)
          
          if (!fromList || !toList) return state
          
          if (!toList.itemIds.includes(productId)) {
            return {
              lists: state.lists.map((list) =>
                list.id === fromListId
                  ? { ...list, itemIds: list.itemIds.filter((id) => id !== productId) }
                  : list.id === toListId
                  ? { ...toList, itemIds: [...toList.itemIds, productId] }
                  : list
              ),
            }
          }
          return state
        })
      },
      
      duplicateList: (listId, newName) => {
        set((state) => {
          const originalList = state.lists.find((l) => l.id === listId)
          if (!originalList) return state
          
          const newList: WishlistList = {
            ...originalList,
            id: crypto.randomUUID(),
            name: newName,
            createdAt: new Date().toISOString(),
          }
          
          return {
            lists: [...state.lists, newList],
          }
        })
      },
      
      isInList: (listId, productId) => {
        const list = get().lists.find((l) => l.id === listId)
        return list ? list.itemIds.includes(productId) : false
      },
      
      getItemCount: (listId) => {
        const list = get().lists.find((l) => l.id === listId)
        return list ? list.itemIds.length : 0
      },
      
      getItems: (listId) => {
        // This would require storing items in a separate structure
        // Simplified implementation
        return []
      },
      
      getListById: (listId) => {
        return get().lists.find((list) => list.id === listId)
      },
      
      searchItems: (listId, query) => {
        const items = get().getItems(listId)
        const searchTerm = query.toLowerCase()
        return items.filter((item) =>
          item.product.name.toLowerCase().includes(searchTerm) ||
          item.product.brand.toLowerCase().includes(searchTerm) ||
          item.notes?.toLowerCase().includes(searchTerm) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
        )
      },
      
      filterItems: (listId, filters) => {
        const items = get().getItems(listId)
        return items.filter((item) => {
          if (filters.tags?.length && item.tags) {
            if (!filters.tags.some((tag) => item.tags?.includes(tag))) return false
          }
          if (filters.priority?.length && item.priority) {
            if (!filters.priority.includes(item.priority)) return false
          }
          if (filters.priceRange) {
            const price = item.product.salePrice ?? item.product.price
            if (price < filters.priceRange.min || price > filters.priceRange.max)
              return false
          }
          if (filters.dateRange && item.createdAt) {
            const itemDate = new Date(item.createdAt)
            const start = new Date(filters.dateRange.start)
            const end = new Date(filters.dateRange.end)
            if (itemDate < start || itemDate > end) return false
          }
          if (filters.hasNotes && !item.notes) return false
          return true
        })
      },
      
      getAnalytics: (listId) => {
        const items = get().getItems(listId)
        const totalItems = items.length
        const totalValue = items.reduce((sum, item) => {
          const price = item.product.salePrice ?? item.product.price
          return sum + price
        }, 0)
        const averagePrice = totalItems > 0 ? totalValue / totalItems : 0
        
        // Calculate common tags
        const allTags = items.flatMap((item) => item.tags || [])
        const tagCounts: { [tag: string]: number } = {}
        allTags.forEach((tag) => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
        const mostCommonTags = Object.entries(tagCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([tag]) => tag)
        
        // Priority distribution
        const priorityDistribution = {
          low: items.filter((item) => item.priority === 'low').length,
          medium: items.filter((item) => item.priority === 'medium').length,
          high: items.filter((item) => item.priority === 'high').length,
        }
        
        // Price history aggregation
        const priceHistoryMap = new Map<string, { total: number; count: number }>()
        items.forEach((item) => {
          if (item.priceHistory?.length) {
            item.priceHistory.forEach((priceEntry) => {
              const date = priceEntry.date.substring(0, 10) // YYYY-MM-DD
              if (!priceHistoryMap.has(date)) {
                priceHistoryMap.set(date, { total: 0, count: 0 })
              }
              const entry = priceHistoryMap.get(date)!
              entry.total += priceEntry.price
              entry.count += 1
            })
          }
        })
        const priceHistory = Array.from(priceHistoryMap.entries())
          .map(([date, { total, count }]) => ({
            date,
            averagePrice: total / count,
          }))
          .sort((a, b) => a.date.localeCompare(b.date))
        
        // Category breakdown
        const categoryBreakdown: { [category: string]: number } = {}
        items.forEach((item) => {
          const category = item.product.category?.name || 'Uncategorized'
          categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1
        })
        
        return {
          totalItems,
          totalValue,
          averagePrice,
          mostCommonTags,
          priorityDistribution,
          priceHistory,
          categoryBreakdown,
        }
      },
      
      exportList: (listId) => {
        const items = get().getItems(listId)
        return JSON.stringify(items)
      },
      
      importList: (listId, data) => {
        try {
          const items: WishlistItem[] = JSON.parse(data)
          // This would need to update the list items, simplified for now
          console.log('Imported items:', items)
        } catch (error) {
          console.error('Failed to import list:', error)
        }
      },
    }),
    {
      name: 'supplement-store-wishlist-custom',
    }
  )
)
