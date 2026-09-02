import { useState } from 'react'
import { useCouponStore } from '../../stores/coupon'
import { useShippingStore } from '../../stores/shipping'
import { useUIStore } from '../../stores/ui'

export function CouponInput() {
  const [code, setCode] = useState('')
  const { appliedCoupon, applyCoupon, removeCoupon } = useCouponStore()
  const addToast = useUIStore((state) => state.addToast)

  const handleApply = () => {
    if (!code.trim()) return
    const result = applyCoupon(code.trim())
    addToast(result.message, result.success ? 'success' : 'error')
    if (result.success) setCode('')
  }

  if (appliedCoupon) {
    return (
      <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span className="font-medium text-green-500">{appliedCoupon.code}</span>
          <span className="text-green-400 text-sm">
            ({appliedCoupon.type === 'percentage' ? `${appliedCoupon.value}% off` : `$${appliedCoupon.value} off`})
          </span>
        </div>
        <button onClick={() => { removeCoupon(); addToast('Coupon removed', 'info') }} className="text-green-500 hover:text-green-400 text-sm">
          Remove
        </button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter coupon code"
        className="flex-1 input-field" onKeyDown={(e) => e.key === 'Enter' && handleApply()} />
      <button onClick={handleApply} className="px-4 py-2 btn-primary">Apply</button>
    </div>
  )
}

export function ShippingSelector() {
  const { options, selectedOption, setSelectedOption } = useShippingStore()
  const enabledOptions = options.filter((o) => o.isEnabled)

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-default">Shipping Method</h3>
      {enabledOptions.map((option) => (
        <label key={option.id}
          className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
            selectedOption?.id === option.id ? 'border-primary bg-primary/10' : 'border-default hover:border-primary'
          }`}>
          <div className="flex items-center gap-3">
            <input type="radio" name="shipping" checked={selectedOption?.id === option.id} onChange={() => setSelectedOption(option)} className="text-primary focus:ring-primary" />
            <div>
              <p className="font-medium text-default">{option.name}</p>
              <p className="text-sm text-secondary">{option.estimatedDays}</p>
            </div>
          </div>
          <span className="font-medium text-default">{option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}</span>
        </label>
      ))}
    </div>
  )
}
