import { useOrderStore } from '../../stores/order'
import { products } from '../../services/mockData'

export function AnalyticsPage() {
  const orders = useOrderStore((state) => state.orders)
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0

  const stats = [
    { label: 'Total Revenue', value: `$${totalRevenue.toFixed(2)}`, change: '+12.5%', positive: true, icon: '💰' },
    { label: 'Total Orders', value: orders.length.toString(), change: '+8.2%', positive: true, icon: '📦' },
    { label: 'Avg Order Value', value: `$${avgOrderValue.toFixed(2)}`, change: '+3.1%', positive: true, icon: '📊' },
    { label: 'Conversion Rate', value: '3.2%', change: '-0.4%', positive: false, icon: '📈' },
  ]

  const topProducts = products.slice(0, 5)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-default">Analytics</h1>
        <p className="text-secondary mt-1">Track your store performance and insights</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-secondary text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-default mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-default rounded-lg">
            <div className="text-center">
              <span className="text-4xl">📊</span>
              <p className="text-secondary mt-2">Revenue chart will appear here</p>
              <p className="text-xs text-secondary mt-1">Connect a charting library like Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.id} className="flex items-center gap-4">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-default truncate">{product.name}</p>
                  <p className="text-xs text-secondary">{product.category.name}</p>
                </div>
                <p className="font-medium text-default">${(product.salePrice ?? product.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="card p-6 mt-6">
        <h2 className="text-lg font-bold text-default mb-4">Recent Orders</h2>
        {orders.length === 0 ? (
          <p className="text-secondary text-center py-8">No orders yet</p>
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
    </div>
  )
}
