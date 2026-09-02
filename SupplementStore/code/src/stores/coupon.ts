import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Coupon {
  id: string
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minOrder: number
  maxDiscount?: number
  expiresAt: string
  isActive: boolean
  usageCount: number
  maxUsage: number
}

interface CouponState {
  coupons: Coupon[]
  appliedCoupon: Coupon | null
  applyCoupon: (code: string) => { success: boolean; message: string }
  removeCoupon: () => void
  getDiscount: (subtotal: number) => number
}

const defaultCoupons: Coupon[] = [
  {
    id: '1',
    code: 'WELCOME10',
    type: 'percentage',
    value: 10,
    minOrder: 50,
    maxDiscount: 100,
    expiresAt: '2026-12-31T23:59:59Z',
    isActive: true,
    usageCount: 0,
    maxUsage: 1000,
  },
  {
    id: '2',
    code: 'SAVE20',
    type: 'fixed',
    value: 20,
    minOrder: 100,
    expiresAt: '2026-12-31T23:59:59Z',
    isActive: true,
    usageCount: 0,
    maxUsage: 500,
  },
  {
    id: '3',
    code: 'PROTEIN15',
    type: 'percentage',
    value: 15,
    minOrder: 75,
    maxDiscount: 50,
    expiresAt: '2026-12-31T23:59:59Z',
    isActive: true,
    usageCount: 0,
    maxUsage: 200,
  },
]

export const useCouponStore = create<CouponState>()(
  persist(
    (set, get) => ({
      coupons: defaultCoupons,
      appliedCoupon: null,
      applyCoupon: (code: string) => {
        const coupon = get().coupons.find(
          (c) => c.code.toLowerCase() === code.toLowerCase() && c.isActive
        )
        if (!coupon) {
          return { success: false, message: 'Invalid coupon code' }
        }
        if (new Date(coupon.expiresAt) < new Date()) {
          return { success: false, message: 'Coupon has expired' }
        }
        if (coupon.usageCount >= coupon.maxUsage) {
          return { success: false, message: 'Coupon usage limit reached' }
        }
        set({ appliedCoupon: coupon })
        return { success: true, message: `Coupon "${coupon.code}" applied!` }
      },
      removeCoupon: () => set({ appliedCoupon: null }),
      getDiscount: (subtotal: number) => {
        const coupon = get().appliedCoupon
        if (!coupon || subtotal < coupon.minOrder) return 0
        if (new Date(coupon.expiresAt) < new Date()) {
          get().removeCoupon()
          return 0
        }
        let discount = 0
        if (coupon.type === 'percentage') {
          discount = subtotal * (coupon.value / 100)
          if (coupon.maxDiscount) {
            discount = Math.min(discount, coupon.maxDiscount)
          }
        } else {
          discount = coupon.value
        }
        return Math.min(discount, subtotal)
      },
    }),
    {
      name: 'supplement-store-coupons',
    }
  )
)
