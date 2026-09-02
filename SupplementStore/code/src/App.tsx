import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/layout/Layout'
import { AdminLayout } from './components/admin/AdminLayout'
import { AdminGuard } from './components/auth/AdminGuard'
import { HomePage } from './pages/Home/HomePage'
import { ProductsPage } from './pages/Products/ProductsPage'
import { ProductDetailPage } from './pages/Products/ProductDetailPage'
import { CartPage } from './pages/Cart/CartPage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { AccountPage, OrdersPage, ProfilePage, WishlistPage, AccountDashboard } from './pages/Account/AccountPage'
import { AboutPage } from './pages/About/AboutPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { FAQPage } from './pages/FAQ/FAQPage'
import { PrivacyPolicyPage } from './pages/Privacy/PrivacyPolicyPage'
import { TermsPage } from './pages/Terms/TermsPage'
import { CategoryDetailPage } from './pages/Category/CategoryDetailPage'
import { NotFoundPage } from './pages/NotFound/NotFoundPage'
import { AdminDashboard } from './pages/Admin/Dashboard'
import { ProductManagement } from './pages/Admin/ProductManagement'
import { CategoryManagement } from './pages/Admin/CategoryManagement'
import { OrderManagement } from './pages/Admin/OrderManagement'
import { UserManagement } from './pages/Admin/UserManagement'
import { PaymentSettings } from './pages/Admin/PaymentSettings'
import { ShippingSettings } from './pages/Admin/ShippingSettings'
import { SiteSettings } from './pages/Admin/SiteSettings'
import { ThemeSettings } from './pages/Admin/ThemeSettings'
import { useApplyTheme } from './hooks/useApplyTheme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
})

function AppContent() {
  useApplyTheme()
  return (
    <Routes>
      <Route element={<AdminGuard />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="categories" element={<CategoryManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="payments" element={<PaymentSettings />} />
          <Route path="shipping" element={<ShippingSettings />} />
          <Route path="settings" element={<SiteSettings />} />
          <Route path="theme" element={<ThemeSettings />} />
        </Route>
      </Route>

      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/account" element={<AccountPage />}>
          <Route index element={<AccountDashboard />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/category/:slug" element={<CategoryDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}
