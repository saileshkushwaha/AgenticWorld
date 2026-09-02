import { Order } from '../../types'

interface OrderInvoiceProps {
  order: Order
  onClose?: () => void
}

export function OrderInvoice({ order, onClose }: OrderInvoiceProps) {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08

  return (
    <div className="card print-invoice p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-default">Order Invoice</h2>
          <p className="text-secondary text-sm mt-1">Order #{order.id}</p>
        </div>
        <div className="text-right">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">SS</span>
          </div>
          <p className="text-xs text-secondary mt-1">SupplementStore</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
        <div>
          <p className="font-medium text-default mb-1">Bill To:</p>
          <p className="text-secondary">{order.shippingAddress.street}</p>
          <p className="text-secondary">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
          <p className="text-secondary">{order.shippingAddress.country}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-default mb-1">Order Details:</p>
          <p className="text-secondary">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          <p className="text-secondary">Status: <span className="capitalize font-medium text-green-500">{order.status}</span></p>
          {order.trackingNumber && <p className="text-secondary">Tracking: {order.trackingNumber}</p>}
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="border-b border-default">
            <th className="text-left py-3 text-sm font-medium text-default">Item</th>
            <th className="text-center py-3 text-sm font-medium text-default">Qty</th>
            <th className="text-right py-3 text-sm font-medium text-default">Price</th>
            <th className="text-right py-3 text-sm font-medium text-default">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr key={item.id} className="border-b border-default">
              <td className="py-3 text-sm text-default">{item.product.name}</td>
              <td className="py-3 text-sm text-secondary text-center">{item.quantity}</td>
              <td className="py-3 text-sm text-secondary text-right">${item.price.toFixed(2)}</td>
              <td className="py-3 text-sm text-default text-right font-medium">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border-t border-default pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-secondary">Subtotal</span>
          <span className="text-default">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary">Tax (8%)</span>
          <span className="text-default">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t border-default pt-2">
          <span className="text-default">Total</span>
          <span className="text-default">${order.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 flex gap-3 justify-end no-print">
        {onClose && (
          <button onClick={onClose} className="px-5 py-2 btn-secondary">
            Close
          </button>
        )}
        <button onClick={() => window.print()} className="px-5 py-2 btn-primary">
          Print Invoice
        </button>
      </div>
    </div>
  )
}
