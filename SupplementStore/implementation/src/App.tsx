import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/Home/HomePage'
import { ProductsPage } from './pages/Products/ProductsPage'
import { ProductDetailPage } from './pages/Products/ProductDetailPage'
import { CartPage } from './pages/Cart/CartPage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { AccountPage, OrdersPage, ProfilePage, WishlistPage } from './pages/Account/AccountPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/orders" element={<OrdersPage />} />
          <Route path="/account/profile" element={<ProfilePage />} />
          <Route path="/account/wishlist" element={<WishlistPage />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  )
}
