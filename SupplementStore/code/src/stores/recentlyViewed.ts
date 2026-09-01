import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface RecentlyViewedItem {
  productId: string
  viewedAt: string
}

interface RecentlyViewedState {
  items: RecentlyViewedItem[]
  addItem: (productId: string) => void
  clearItems: () => void
  getItems: () => string[]
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId) => {
        set((state) => {
          const filtered = state.items.filter((item) => item.productId !== productId)
          return {
            items: [
              { productId, viewedAt: new Date().toISOString() },
              ...filtered,
            ].slice(0, 10),
          }
        })
      },
      clearItems: () => set({ items: [] }),
      getItems: () => get().items.map((item) => item.productId),
    }),
    {
      name: 'supplement-store-recently-viewed',
    }
  )
)
