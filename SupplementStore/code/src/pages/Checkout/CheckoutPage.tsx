import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCartStore } from '../../stores/cart'
import { useOrderStore } from '../../stores/order'
import { useUIStore } from '../../stores/ui'
import { useAuthStore } from '../../stores/auth'
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

const paymentSchema = z.object({
  cardNumber: z.string().min(16, 'Valid card number is required'),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Use MM/YY format'),
  cvc: z.string().min(3, 'CVC is required'),
  cardName: z.string().min(2, 'Name on card is required'),
})

type ShippingFormData = z.infer<typeof shippingSchema>
type PaymentFormData = z.infer<typeof paymentSchema>

export function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const createOrder = useOrderStore((state) => state.createOrder)
  const addToast = useUIStore((state) => state.addToast)
  const setAuthModalOpen = useUIStore((state) => state.setAuthModalOpen)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [shippingData, setShippingData] = useState<ShippingFormData | null>(null)

  const shippingForm = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: 'United States',
    },
  })

  const paymentForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: '',
      expiry: '',
      cvc: '',
      cardName: '',
    },
  })

  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold mb-4">Please Log In</h1>
          <p className="text-gray-600 mb-8">You need to be logged in to proceed with checkout.</p>
          <button
            onClick={() => setAuthModalOpen(true)}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Log In / Sign Up
          </button>
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
          <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-2">Order ID: <span className="font-mono font-bold">{orderId}</span></p>
          <p className="text-gray-600 mb-8">Thank you for your order. You will receive a confirmation email shortly.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/account/orders')}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              View Orders
            </button>
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  const handleShippingSubmit = (data: ShippingFormData) => {
    setShippingData(data)
    setStep(2)
  }

  const handlePaymentSubmit = (data: PaymentFormData) => {
    if (!shippingData) return
    const address: Address = {
      street: shippingData.address,
      city: shippingData.city,
      state: shippingData.state,
      zip: shippingData.zip,
      country: shippingData.country,
    }
    const order = createOrder(items, address, 'card')
    setOrderId(order.id)
    clearCart()
    addToast('Order placed successfully!', 'success')
  }

  const tax = getTotal() * 0.08
  const shipping = 0
  const total = getTotal() + tax + shipping

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= s ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {s}
            </div>
            {s < 3 && <div className={`w-16 h-1 ${step > s ? 'bg-orange-600' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <form onSubmit={shippingForm.handleSubmit(handleShippingSubmit)} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input {...shippingForm.register('firstName')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.firstName && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input {...shippingForm.register('lastName')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.lastName && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.lastName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input {...shippingForm.register('email')} type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.email && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input {...shippingForm.register('phone')} type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.phone.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input {...shippingForm.register('address')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.address && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.address.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input {...shippingForm.register('city')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.city && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input {...shippingForm.register('state')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.state && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.state.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                  <input {...shippingForm.register('zip')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.zip && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.zip.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input {...shippingForm.register('country')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {shippingForm.formState.errors.country && <p className="text-red-500 text-xs mt-1">{shippingForm.formState.errors.country.message}</p>}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="submit" className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={paymentForm.handleSubmit(handlePaymentSubmit)} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input {...paymentForm.register('cardNumber')} placeholder="4242 4242 4242 4242" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {paymentForm.formState.errors.cardNumber && <p className="text-red-500 text-xs mt-1">{paymentForm.formState.errors.cardNumber.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                  <input {...paymentForm.register('cardName')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                  {paymentForm.formState.errors.cardName && <p className="text-red-500 text-xs mt-1">{paymentForm.formState.errors.cardName.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input {...paymentForm.register('expiry')} placeholder="MM/YY" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                    {paymentForm.formState.errors.expiry && <p className="text-red-500 text-xs mt-1">{paymentForm.formState.errors.expiry.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input {...paymentForm.register('cvc')} placeholder="123" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                    {paymentForm.formState.errors.cvc && <p className="text-red-500 text-xs mt-1">{paymentForm.formState.errors.cvc.message}</p>}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Back
                </button>
                <button type="submit" className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  Place Order
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4">Order Review</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${((item.product.salePrice ?? item.product.price) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setStep(2)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Back
                </button>
                <button onClick={() => paymentForm.handleSubmit(handlePaymentSubmit)()} className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
