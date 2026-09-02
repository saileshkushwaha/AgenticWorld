import { useState } from 'react'
import { useOrderStore } from '../../stores/order'
import { Order } from '../../types'

export function OrderManagement() {
  const orders = useOrderStore((state) => state.orders)
  const updateOrderStatus = useOrderStore((state) => state.updateOrderStatus)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const filteredOrders = filterStatus === 'all' ? orders : orders.filter((o) => o.status === filterStatus)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'confirmed': return 'bg-blue-100 text-blue-700'
      case 'processing': return 'bg-purple-100 text-purple-700'
      case 'shipped': return 'bg-indigo-100 text-indigo-700'
      case 'delivered': return 'bg-green-100 text-green-700'
      case 'cancelled': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  if (selectedOrder) {
    return (
      <div>
        <button onClick={() => setSelectedOrder(null)} className="mb-4 text-sm text-primary font-medium">← Back to Orders</button>
        <div className="card p-6">
          <h2 className="text-xl font-bold text-default mb-4">Order Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-default mb-2">Order Info</h3>
              <p className="text-sm text-secondary">Order ID: <span className="font-mono">{selectedOrder.id}</span></p>
              <p className="text-sm text-secondary">Date: {new Date(selectedOrder.createdAt).toLocaleString()}</p>
              <p className="text-sm text-secondary">Payment: <span className="capitalize">{selectedOrder.paymentMethod}</span></p>
              {selectedOrder.trackingNumber && <p className="text-sm text-secondary">Tracking: <span className="font-mono">{selectedOrder.trackingNumber}</span></p>}
            </div>
            <div>
              <h3 className="font-medium text-default mb-2">Shipping Address</h3>
              <p className="text-sm text-secondary">{selectedOrder.shippingAddress.street}</p>
              <p className="text-sm text-secondary">{selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.zip}</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-default mb-2">Items</h3>
            {selectedOrder.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border border-default rounded-lg mb-2">
                <div><p className="font-medium text-sm text-default">{item.product.name}</p><p className="text-xs text-secondary">Qty: {item.quantity}</p></div>
                <p className="font-medium text-default">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-default flex justify-between font-bold text-default">
              <span>Total</span><span>${selectedOrder.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-default">Orders</h1>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-2 border border-default rounded-lg bg-surface text-default">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div className="card p-6">
        {filteredOrders.length === 0 ? (
          <p className="text-secondary">No orders found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="border-b border-default">
                <th className="text-left py-3 text-sm font-medium text-secondary">Order ID</th>
                <th className="text-left py-3 text-sm font-medium text-secondary">Date</th>
                <th className="text-left py-3 text-sm font-medium text-secondary">Status</th>
                <th className="text-right py-3 text-sm font-medium text-secondary">Total</th>
                <th className="text-right py-3 text-sm font-medium text-secondary">Actions</th>
              </tr></thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-default">
                    <td className="py-3 text-sm font-mono text-default">{order.id}</td>
                    <td className="py-3 text-sm text-secondary">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-3">
                      <select value={order.status} onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                        className={`px-2 py-1 border border-default rounded text-sm capitalize ${getStatusColor(order.status)}`}>
                        {['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-3 text-sm font-medium text-right text-default">${order.total.toFixed(2)}</td>
                    <td className="py-3 text-right"><button onClick={() => setSelectedOrder(order)} className="text-sm text-primary">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
