import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'

export function AdminGuard() {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
