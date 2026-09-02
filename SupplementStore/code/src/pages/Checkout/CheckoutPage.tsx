import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCartStore } from '../../stores/cart'
import { useOrderStore } from '../../stores/order'
import { useUIStore } from '../../stores/ui'
import { useAuthStore } from '../../stores/auth'
import { useCouponStore } from '../../stores/coupon'
import { useShippingStore } from '../../stores/shipping'
import { useConfigStore } from '../../stores/config'
import { CouponInput, ShippingSelector } from '../../components/checkout/CouponShipping'
import { Address } from '../../types'

const shippingSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zip: z.string().min(5, 'Valid ZIP code is required'),
  country: z.string().min(2, 'Country is required'),
})

type ShippingFormData = z.infer<typeof shippingSchema>

export function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const createOrder = useOrderStore((state) => state.createOrder)
  const addToast = useUIStore((state) => state.addToast)
  const setAuthModalOpen = useUIStore((state) => state.setAuthModalOpen)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const navigate = useNavigate()
  const { getDiscount } = useCouponStore()
  const { selectedOption } = useShippingStore()
  const { paymentMethods } = useConfigStore()
  const [step, setStep] = useState(1)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [shippingData, setShippingData] = useState<ShippingFormData | null>(null)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

  const enabledPaymentMethods = paymentMethods.filter((m) => m.isEnabled)

  const shippingForm = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zip: '', country: 'United States',
    },
  })

  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-default mb-4">Please Log In</h1>
          <p className="text-secondary mb-8">You need to be logged in to proceed with checkout.</p>
          <button onClick={() => setAuthModalOpen(true)} className="px-6 py-3 btn-primary">Log In / Sign Up</button>
        </div>
      </div>
    )
  }

  if (orderId) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-default mb-4">Order Placed Successfully!</h1>
          <p className="text-secondary mb-2">Order ID: <span className="font-mono font-bold text-default">{orderId}</span></p>
          <p className="text-secondary mb-8">Thank you for your order. You will receive a confirmation email shortly.</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => navigate('/account/orders')} className="px-6 py-3 btn-primary">View Orders</button>
            <button onClick={() => navigate('/products')} className="px-6 py-3 btn-secondary">Continue Shopping</button>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-default mb-4">Your Cart is Empty</h1>
        <button onClick={() => navigate('/products')} className="px-6 py-3 btn-primary">Continue Shopping</button>
      </div>
    )
  }

  const handleShippingSubmit = (data: ShippingFormData) => {
    setShippingData(data)
    setStep(2)
  }

  const handlePlaceOrder = () => {
    if (!shippingData || !selectedPayment) return
    const address: Address = {
      street: shippingData.address,
      city: shippingData.city,
      state: shippingData.state,
      zip: shippingData.zip,
      country: shippingData.country,
    }
    const order = createOrder(items, address, selectedPayment)
    setOrderId(order.id)
    clearCart()
    addToast('Order placed successfully!', 'success')
  }

  const subtotal = getTotal()
  const tax = subtotal * 0.08
  const discount = getDiscount(subtotal)
  const shippingCost = selectedOption?.price || 0
  const total = subtotal + tax + shippingCost - discount

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-default mb-8">Checkout</h1>

      <div className="flex items-center justify-center mb-8">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= s ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {s}
            </div>
            {s < 2 && <div className={`w-16 h-1 ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <form onSubmit={shippingForm.handleSubmit(handleShippingSubmit)} className="card p-6">
              <h2 className="text-lg font-bold text-default mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">First Name</label>
                  <input {...shippingForm.register('firstName')} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                  {shippingForm.formState.errors.firstName && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Last Name</label>
                  <input {...shippingForm.register('lastName')} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                  {shippingForm.formState.errors.lastName && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.lastName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Email</label>
                  <input {...shippingForm.register('email')} type="email" className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                  {shippingForm.formState.errors.email && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Phone</label>
                  <input {...shippingForm.register('phone')} type="tel" className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                  {shippingForm.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.phone.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-secondary mb-1">Address</label>
                  <input {...shippingForm.register('address')} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">City</label>
                  <input {...shippingForm.register('city')} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">State</label>
                  <input {...shippingForm.register('state')} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">ZIP Code</label>
                  <input {...shippingForm.register('zip')} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Country</label>
                  <input {...shippingForm.register('country')} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="submit" className="px-6 py-3 btn-primary">Continue to Payment</button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="card p-6">
              <h2 className="text-lg font-bold text-default mb-4">Select Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {enabledPaymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`flex items-center gap-3 p-4 border-2 rounded-xl transition-all text-left ${
                      selectedPayment === method.id
                        ? 'border-primary bg-primary/10'
                        : 'border-default hover:border-primary'
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <p className="font-medium text-default">{method.name}</p>
                      <p className="text-xs text-secondary">{method.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setStep(1)} className="px-6 py-3 btn-secondary">Back</button>
                <button
                  onClick={handlePlaceOrder}
                  disabled={!selectedPayment}
                  className="px-6 py-3 btn-primary disabled:opacity-50"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-default mb-4">Order Summary</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-default">{item.product.name}</p>
                    <p className="text-xs text-secondary">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-default">${((item.product.salePrice ?? item.product.price) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-default mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-default pt-2 mt-2 flex justify-between font-bold text-lg text-default">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-4">
              <CouponInput />
            </div>
          </div>
          <ShippingSelector />
        </div>
      </div>
    </div>
  )
}
