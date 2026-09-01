import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ShippingOption {
  id: string
  name: string
  description: string
  price: number
  estimatedDays: string
  isDefault: boolean
}

interface ShippingState {
  options: ShippingOption[]
  selectedOption: ShippingOption | null
  setSelectedOption: (option: ShippingOption) => void
}

const defaultOptions: ShippingOption[] = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: 'Free shipping on all orders',
    price: 0,
    estimatedDays: '3-5 business days',
    isDefault: true,
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: 'Priority handling and delivery',
    price: 9.99,
    estimatedDays: '1-2 business days',
    isDefault: false,
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    description: 'Next business day delivery',
    price: 19.99,
    estimatedDays: '1 business day',
    isDefault: false,
  },
]

export const useShippingStore = create<ShippingState>()(
  persist(
    (set) => ({
      options: defaultOptions,
      selectedOption: defaultOptions.find((o) => o.isDefault) || defaultOptions[0],
      setSelectedOption: (option) => set({ selectedOption: option }),
    }),
    {
      name: 'supplement-store-shipping',
    }
  )
)
