import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'
import { useOrderStore } from '../../stores/order'
import { useWishlistStore } from '../../stores/wishlist'
import { useUIStore } from '../../stores/ui'
import { EmptyState } from '../../components/ui/EmptyState'
import { OrderInvoice } from '../../components/order/OrderInvoice'
import { useState } from 'react'

export function AccountPage() {
  const { user } = useAuthStore()
  const orders = useOrderStore((state) => state.orders)
  const wishlistCount = useWishlistStore((state) => state.getItemCount())

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-1">
          <Link to="/account" className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-700 hover:text-orange-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/account/profile" className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-700 hover:text-orange-600 transition-colors">
            Profile
          </Link>
          <Link to="/account/orders" className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-700 hover:text-orange-600 transition-colors">
            Orders {orders.length > 0 && <span className="ml-1 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">{orders.length}</span>}
          </Link>
          <Link to="/account/wishlist" className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-700 hover:text-orange-600 transition-colors">
            Wishlist {wishlistCount > 0 && <span className="ml-1 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">{wishlistCount}</span>}
          </Link>
        </div>

        <div className="md:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export function AccountDashboard() {
  const { user } = useAuthStore()
  const orders = useOrderStore((state) => state.orders)
  const wishlistCount = useWishlistStore((state) => state.getItemCount())

  return (
    <div className="card p-6">
      <h2 className="text-lg font-bold text-default mb-4">Welcome, {user?.firstName || 'Guest'}!</h2>
      <p className="text-secondary mb-6">Manage your account, view your orders, and update your profile.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface rounded-lg p-4 text-center border border-default">
          <div className="text-2xl font-bold text-primary">{orders.length}</div>
          <div className="text-sm text-secondary">Total Orders</div>
        </div>
        <div className="bg-surface rounded-lg p-4 text-center border border-default">
          <div className="text-2xl font-bold text-primary">{wishlistCount}</div>
          <div className="text-sm text-secondary">Wishlist Items</div>
        </div>
        <div className="bg-surface rounded-lg p-4 text-center border border-default">
          <div className="text-2xl font-bold text-primary">0</div>
          <div className="text-sm text-secondary">Reviews</div>
        </div>
      </div>
    </div>
  )
}

export function OrdersPage() {
  const orders = useOrderStore((state) => state.orders)
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const selectedOrderData = selectedOrder ? orders.find((o) => o.id === selectedOrder) : null

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Order History</h1>
        <EmptyState
          icon="📦"
          title="No orders yet"
          description="Start shopping to see your orders here!"
          action={{ label: 'Browse Products', onClick: () => window.location.href = '/products' }}
        />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Order History</h1>
      {selectedOrderData ? (
        <div>
          <button
            onClick={() => setSelectedOrder(null)}
            className="mb-4 text-sm text-orange-600 hover:text-orange-700 font-medium"
          >
            ← Back to Orders
          </button>
          <OrderInvoice order={selectedOrderData} onClose={() => setSelectedOrder(null)} />
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <p className="font-mono font-bold text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium capitalize">
                    {order.status}
                  </span>
                  <span className="font-bold text-gray-900">${order.total.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex flex-wrap gap-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.product.imageUrl} alt={item.product.name} className="w-12 h-12 object-cover rounded-lg" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setSelectedOrder(order.id)}
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  View Invoice
                </button>
                {order.trackingNumber && (
                  <span className="text-sm text-gray-600">
                    Tracking: <span className="font-mono font-medium">{order.trackingNumber}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function ProfilePage() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const setAuthModalOpen = useUIStore((state) => state.setAuthModalOpen)

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Profile</h1>
        <EmptyState
          icon="👤"
          title="Not logged in"
          description="Please log in to view your profile."
          action={{ label: 'Sign In', onClick: () => setAuthModalOpen(true) }}
        />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Profile</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-orange-600">
              {user.firstName[0]}{user.lastName[0]}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              Member since {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" value={user.firstName} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" value={user.lastName} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={user.email} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input type="text" value={user.role} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 capitalize" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)
  const addToast = useUIStore((state) => state.addToast)
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Wishlist</h1>
        <EmptyState
          icon="❤️"
          title="Your wishlist is empty"
          description="Save products you love for later!"
          action={{ label: 'Browse Products', onClick: () => navigate('/products') }}
        />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Wishlist ({items.length} items)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Link to={`/products/${item.product.slug}`}>
              <div className="aspect-square bg-gray-100">
                <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
            </Link>
            <div className="p-4">
              <p className="text-sm text-gray-500">{item.product.brand}</p>
              <Link to={`/products/${item.product.slug}`} className="font-medium text-gray-900 hover:text-orange-600">
                {item.product.name}
              </Link>
              <p className="text-orange-600 font-bold mt-1">${(item.product.salePrice ?? item.product.price).toFixed(2)}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => { addToCart(item.product); addToast(`${item.product.name} added to cart`, 'success') }}
                  className="flex-1 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => { removeItem(item.product.id); addToast('Removed from wishlist', 'info') }}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
