import { Link, useNavigate } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '../../stores/cart'
import { Button } from '../../components/ui/Button'
import { QuantitySelector } from '../../components/ui/QuantitySelector'
import { EmptyState } from '../../components/ui/EmptyState'

export function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCartStore()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmptyState
          icon="🛒"
          title="Your Cart is Empty"
          description="Looks like you haven't added any products yet. Start shopping to fill your cart!"
          action={{
            label: 'Continue Shopping',
            onClick: () => navigate('/products'),
          }}
        />
      </div>
    )
  }

  const tax = getTotal() * 0.08
  const shipping = 0
  const total = getTotal() + tax + shipping

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart ({getItemCount()} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const price = item.product.salePrice ?? item.product.price
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4">
                <Link to={`/products/${item.product.slug}`}>
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </Link>
                <div className="flex-1">
                  <Link to={`/products/${item.product.slug}`} className="font-medium hover:text-orange-600">
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-gray-500">{item.product.brand}</p>
                  <p className="font-medium mt-1 text-orange-600">${price.toFixed(2)}</p>
                  <div className="mt-2">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(qty) => updateQuantity(item.product.id, qty)}
                      size="sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                  <p className="font-bold text-gray-900">${(price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            )
          })}
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
          <button
            onClick={() => navigate('/checkout')}
            className="mt-6 w-full py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => navigate('/products')}
            className="mt-3 w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}
