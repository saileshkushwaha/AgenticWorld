import { Link, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'

export function AccountPage() {
  const { user } = useAuthStore()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          <Link to="/account/profile" className="block px-4 py-2 rounded-md hover:bg-gray-100 font-medium">
            Profile
          </Link>
          <Link to="/account/orders" className="block px-4 py-2 rounded-md hover:bg-gray-100 font-medium">
            Orders
          </Link>
          <Link to="/account/wishlist" className="block px-4 py-2 rounded-md hover:bg-gray-100 font-medium">
            Wishlist
          </Link>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="card p-6">
            <h2 className="text-lg font-bold mb-4">Welcome, {user?.firstName || 'Guest'}!</h2>
            <p className="text-gray-600">
              Manage your account, view your orders, and update your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Order History</h1>
      <div className="card p-6">
        <p className="text-gray-600">No orders yet. Start shopping to see your orders here!</p>
      </div>
    </div>
  )
}

export function ProfilePage() {
  const { user } = useAuthStore()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Profile</h1>
      <div className="card p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-gray-900">{user?.firstName || 'Guest'} {user?.lastName || ''}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-gray-900">{user?.email || 'Not logged in'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WishlistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Wishlist</h1>
      <div className="card p-6">
        <p className="text-gray-600">Your wishlist is empty. Save products you love for later!</p>
      </div>
    </div>
  )
}
