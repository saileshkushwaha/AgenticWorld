import { Order } from '../../types'

interface OrderInvoiceProps {
  order: Order
  onClose?: () => void
}

export function OrderInvoice({ order, onClose }: OrderInvoiceProps) {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Order Invoice</h2>
          <p className="text-gray-500 text-sm mt-1">Order #{order.id}</p>
        </div>
        <div className="text-right">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">SS</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">SupplementStore</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
        <div>
          <p className="font-medium text-gray-900 mb-1">Bill To:</p>
          <p className="text-gray-600">{order.shippingAddress.street}</p>
          <p className="text-gray-600">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
          <p className="text-gray-600">{order.shippingAddress.country}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-gray-900 mb-1">Order Details:</p>
          <p className="text-gray-600">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          <p className="text-gray-600">Status: <span className="capitalize font-medium text-green-600">{order.status}</span></p>
          {order.trackingNumber && <p className="text-gray-600">Tracking: {order.trackingNumber}</p>}
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 text-sm font-medium text-gray-900">Item</th>
            <th className="text-center py-3 text-sm font-medium text-gray-900">Qty</th>
            <th className="text-right py-3 text-sm font-medium text-gray-900">Price</th>
            <th className="text-right py-3 text-sm font-medium text-gray-900">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-3 text-sm text-gray-900">{item.product.name}</td>
              <td className="py-3 text-sm text-gray-600 text-center">{item.quantity}</td>
              <td className="py-3 text-sm text-gray-600 text-right">${item.price.toFixed(2)}</td>
              <td className="py-3 text-sm text-gray-900 text-right font-medium">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (8%)</span>
          <span className="text-gray-900">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">${order.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 flex gap-3 justify-end">
        {onClose && (
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        )}
        <button
          onClick={() => window.print()}
          className="px-5 py-2 bg-orange-600 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition-colors"
        >
          Print Invoice
        </button>
      </div>
    </div>
  )
}
