import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Order, CartItem, Address } from '../types'

interface OrderState {
  orders: Order[]
  createOrder: (items: CartItem[], shippingAddress: Address, paymentMethod: string) => Order
  getOrder: (orderId: string) => Order | undefined
  clearOrders: () => void
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      createOrder: (items, shippingAddress, paymentMethod) => {
        const order: Order = {
          id: 'ORD-' + Date.now().toString(36).toUpperCase(),
          userId: 'current-user',
          status: 'confirmed',
          total: items.reduce((sum, item) => {
            const price = item.product.salePrice ?? item.product.price
            return sum + price * item.quantity
          }, 0),
          items: items.map((item) => ({
            id: crypto.randomUUID(),
            productId: item.product.id,
            product: item.product,
            quantity: item.quantity,
            price: item.product.salePrice ?? item.product.price,
          })),
          shippingAddress,
          billingAddress: shippingAddress,
          paymentMethod,
          paymentStatus: 'paid',
          trackingNumber: 'TRK' + Math.random().toString(36).substring(2, 10).toUpperCase(),
          createdAt: new Date().toISOString(),
        }
        set((state) => ({ orders: [order, ...state.orders] }))
        return order
      },
      getOrder: (orderId) => {
        return get().orders.find((order) => order.id === orderId)
      },
      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: 'supplement-store-orders',
    }
  )
)
