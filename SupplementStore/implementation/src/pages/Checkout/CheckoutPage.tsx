import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../../stores/cart'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

export function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const [step, setStep] = useState(1)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-8">Thank you for your order. You will receive a confirmation email shortly.</p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= s ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {s}
            </div>
            {s < 3 && <div className={`w-16 h-1 ${step > s ? 'bg-primary-600' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="card p-6">
              <h2 className="text-lg font-bold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
                <Input label="Email" type="email" placeholder="john@example.com" className="md:col-span-2" />
                <Input label="Address" placeholder="123 Main St" className="md:col-span-2" />
                <Input label="City" placeholder="New York" />
                <Input label="State" placeholder="NY" />
                <Input label="ZIP Code" placeholder="10001" />
                <Input label="Country" placeholder="United States" />
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setStep(2)}>Continue to Payment</Button>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="card p-6">
              <h2 className="text-lg font-bold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <Input label="Card Number" placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry Date" placeholder="MM/YY" />
                  <Input label="CVC" placeholder="123" />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
                <Button onClick={() => setStep(3)}>Review Order</Button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="card p-6">
              <h2 className="text-lg font-bold mb-4">Order Review</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-1">
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${((item.product.salePrice ?? item.product.price) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
                <Button onClick={handlePlaceOrder}>Place Order</Button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="card p-6 h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${(getTotal() * 0.08).toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(getTotal() * 1.08).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
