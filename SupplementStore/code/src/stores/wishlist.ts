import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '../types'

interface WishlistItem {
  id: string
  product: Product
  createdAt: string
}

interface WishlistState {
  items: WishlistItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearWishlist: () => void
  isInWishlist: (productId: string) => boolean
  getItemCount: () => number
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          if (state.items.some((item) => item.product.id === product.id)) {
            return state
          }
          return {
            items: [...state.items, { id: crypto.randomUUID(), product, createdAt: new Date().toISOString() }],
          }
        })
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },
      clearWishlist: () => set({ items: [] }),
      isInWishlist: (productId) => {
        return get().items.some((item) => item.product.id === productId)
      },
      getItemCount: () => get().items.length,
    }),
    {
      name: 'supplement-store-wishlist',
    }
  )
)
