import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/Home/HomePage'
import { ProductsPage } from './pages/Products/ProductsPage'
import { ProductDetailPage } from './pages/Products/ProductDetailPage'
import { CartPage } from './pages/Cart/CartPage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { AccountPage } from './pages/Account/AccountPage'
import { OrdersPage } from './pages/Account/OrdersPage'
import { ProfilePage } from './pages/Account/ProfilePage'
import { WishlistPage } from './pages/Account/WishlistPage'
import { AboutPage } from './pages/About/AboutPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { FAQPage } from './pages/FAQ/FAQPage'
import { PrivacyPolicyPage } from './pages/Privacy/PrivacyPolicyPage'
import { TermsPage } from './pages/Terms/TermsPage'
import { NotFoundPage } from './pages/NotFound/NotFoundPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  )
}
