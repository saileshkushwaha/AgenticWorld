import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '../types'

interface CartState {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        if (product.stock <= 0) return
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id)
          if (existingItem) {
            const newQuantity = Math.min(existingItem.quantity + quantity, product.stock)
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: newQuantity }
                  : item
              ),
            }
          }
          return {
            items: [...state.items, { id: crypto.randomUUID(), product, quantity: Math.min(quantity, product.stock) }],
          }
        })
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity: Math.min(quantity, item.product.stock) } : item
          ),
        }))
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.salePrice ?? item.product.price
          return total + price * item.quantity
        }, 0)
      },
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'supplement-store-cart',
    }
  )
)
