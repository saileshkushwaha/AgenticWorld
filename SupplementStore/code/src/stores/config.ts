import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  PaymentMethod,
  CurrencyConfig,
  TaxConfig,
  defaultPaymentMethods,
  defaultCurrencyConfig,
  defaultTaxConfig,
} from '../config/paymentConfig'

interface ShippingMethod {
  id: string
  name: string
  description: string
  price: number
  estimatedDays: string
  isEnabled: boolean
}

interface ConfigState {
  paymentMethods: PaymentMethod[]
  currency: CurrencyConfig
  tax: TaxConfig
  shippingMethods: ShippingMethod[]
  updatePaymentMethod: (id: string, updates: Partial<PaymentMethod>) => void
  updateCurrency: (currency: CurrencyConfig) => void
  updateTax: (tax: TaxConfig) => void
  updateShippingMethod: (id: string, updates: Partial<ShippingMethod>) => void
  resetToDefaults: () => void
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      paymentMethods: defaultPaymentMethods,
      currency: defaultCurrencyConfig,
      tax: defaultTaxConfig,
      shippingMethods: [
        { id: 'standard', name: 'Standard Shipping', description: 'Free shipping on all orders', price: 0, estimatedDays: '3-5 business days', isEnabled: true },
        { id: 'express', name: 'Express Shipping', description: 'Priority handling and delivery', price: 9.99, estimatedDays: '1-2 business days', isEnabled: true },
        { id: 'overnight', name: 'Overnight Shipping', description: 'Next business day delivery', price: 19.99, estimatedDays: '1 business day', isEnabled: true },
      ],
      updatePaymentMethod: (id, updates) =>
        set((state) => ({
          paymentMethods: state.paymentMethods.map((m) => (m.id === id ? { ...m, ...updates } : m)),
        })),
      updateCurrency: (currency) => set({ currency }),
      updateTax: (tax) => set({ tax }),
      updateShippingMethod: (id, updates) =>
        set((state) => ({
          shippingMethods: state.shippingMethods.map((m) => (m.id === id ? { ...m, ...updates } : m)),
        })),
      resetToDefaults: () =>
        set({
          paymentMethods: defaultPaymentMethods,
          currency: defaultCurrencyConfig,
          tax: defaultTaxConfig,
        }),
    }),
    {
      name: 'supplement-store-config',
    }
  )
)
