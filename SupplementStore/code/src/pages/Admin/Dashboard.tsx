import { useNavigate } from 'react-router-dom'
import { useOrderStore } from '../../stores/order'
import { products } from '../../services/mockData'

export function AdminDashboard() {
  const navigate = useNavigate()
  const orders = useOrderStore((state) => state.orders)

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const totalOrders = orders.length
  const totalProducts = products.length

  const stats = [
    { label: 'Total Revenue', value: `$${totalRevenue.toFixed(2)}`, icon: '💰', color: 'bg-green-500' },
    { label: 'Total Orders', value: totalOrders.toString(), icon: '📦', color: 'bg-blue-500' },
    { label: 'Total Products', value: totalProducts.toString(), icon: '🏷️', color: 'bg-purple-500' },
    { label: 'Conversion Rate', value: '3.2%', icon: '📈', color: 'bg-orange-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-default mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">{stat.label}</p>
                <p className="text-2xl font-bold mt-1 text-default">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6 mb-8">
        <h2 className="text-lg font-bold mb-4 text-default">Recent Orders</h2>
        {orders.length === 0 ? (
          <p className="text-secondary">No orders yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-default">
                  <th className="text-left py-3 text-sm font-medium text-secondary">Order ID</th>
                  <th className="text-left py-3 text-sm font-medium text-secondary">Date</th>
                  <th className="text-left py-3 text-sm font-medium text-secondary">Status</th>
                  <th className="text-right py-3 text-sm font-medium text-secondary">Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.id} className="border-b border-default">
                    <td className="py-3 text-sm font-mono text-default">{order.id}</td>
                    <td className="py-3 text-sm text-secondary">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium capitalize">{order.status}</span>
                    </td>
                    <td className="py-3 text-sm font-medium text-right text-default">${order.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-bold mb-4 text-default">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button onClick={() => navigate('/admin/products')} className="p-4 border border-default rounded-lg hover:border-primary transition-colors text-center">
            <span className="text-2xl">➕</span>
            <p className="text-sm mt-2 text-default">Add Product</p>
          </button>
          <button onClick={() => navigate('/admin/orders')} className="p-4 border border-default rounded-lg hover:border-primary transition-colors text-center">
            <span className="text-2xl">📋</span>
            <p className="text-sm mt-2 text-default">View Orders</p>
          </button>
          <button onClick={() => navigate('/admin/categories')} className="p-4 border border-default rounded-lg hover:border-primary transition-colors text-center">
            <span className="text-2xl">🏷️</span>
            <p className="text-sm mt-2 text-default">Add Category</p>
          </button>
          <button onClick={() => navigate('/admin/settings')} className="p-4 border border-default rounded-lg hover:border-primary transition-colors text-center">
            <span className="text-2xl">⚙️</span>
            <p className="text-sm mt-2 text-default">Settings</p>
          </button>
        </div>
      </div>
    </div>
  )
}
