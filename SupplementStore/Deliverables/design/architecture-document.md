# Architecture Document - SupplementStore

**Created**: 2026-08-31 | **Status**: Complete | **Version**: 1.0

---

## 1. Architecture Overview

### Architecture Style
**Modular Monolith** - Single deployable unit with clear module boundaries, enabling future microservices extraction if needed.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        SupplementStore                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Presentation Layer                     │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │   │
│  │  │  Pages  │ │Components│ │  Hooks  │ │  Utils  │       │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Application Layer                      │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │   │
│  │  │  Auth   │ │ Products│ │  Cart   │ │ Orders  │       │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      Data Layer                          │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │   │
│  │  │  State  │ │  Query  │ │  Cache  │ │  API    │       │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Module Structure

### Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Button, Input, Modal)
│   ├── layout/          # Layout components (Header, Footer, Sidebar)
│   ├── product/         # Product components (Card, Gallery, Reviews)
│   ├── cart/            # Cart components (Item, Summary, Checkout)
│   └── ui/              # UI primitives (Badge, Spinner, Toast)
├── hooks/               # Custom React hooks
│   ├── auth/            # Authentication hooks
│   ├── product/         # Product hooks
│   ├── cart/            # Cart hooks
│   └── ui/              # UI hooks (useModal, useToast)
├── pages/               # Page components
│   ├── Home/            # Home page
│   ├── Products/        # Product listing and detail
│   ├── Cart/            # Shopping cart
│   ├── Checkout/        # Checkout flow
│   ├── Account/         # User account
│   └── Admin/           # Admin dashboard
├── stores/              # Zustand stores
│   ├── auth.ts          # Authentication store
│   ├── cart.ts          # Cart store
│   ├── product.ts       # Product store
│   └── ui.ts            # UI state store
├── services/            # API service layer
│   ├── api.ts           # API client setup
│   ├── auth.ts          # Auth API
│   ├── products.ts      # Products API
│   ├── cart.ts          # Cart API
│   └── orders.ts        # Orders API
├── types/               # TypeScript types
│   ├── models.ts        # Data models
│   ├── api.ts           # API types
│   └── index.ts         # Type exports
├── utils/               # Utility functions
│   ├── format.ts        # Formatting utilities
│   ├── validate.ts      # Validation utilities
│   └── helpers.ts       # Helper functions
├── config/              # Configuration
│   ├── constants.ts     # App constants
│   ├── routes.ts        # Route definitions
│   └── theme.ts         # Theme configuration
├── styles/              # Global styles
│   ├── globals.css      # Global CSS
│   └── tailwind.css     # Tailwind imports
└── App.tsx              # App entry point
```

---

## 3. Component Architecture

### Component Hierarchy

```
App
├── Provider (QueryClient, Router, Auth)
│
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   ├── SearchBar
│   │   ├── Navigation
│   │   ├── CartIcon
│   │   └── UserMenu
│   ├── Main
│   │   └── [Page Content]
│   └── Footer
│       ├── Links
│       ├── Newsletter
│       └── Social
│
├── Pages
│   ├── Home
│   │   ├── Hero
│   │   ├── FeaturedProducts
│   │   ├── Categories
│   │   └── Newsletter
│   │
│   ├── Products
│   │   ├── ProductList
│   │   │   ├── ProductCard
│   │   │   ├── ProductGrid
│   │   │   └── Pagination
│   │   ├── ProductFilters
│   │   │   ├── CategoryFilter
│   │   │   ├── PriceFilter
│   │   │   └── BrandFilter
│   │   └── ProductDetail
│   │       ├── ProductGallery
│   │       ├── ProductInfo
│   │       ├── AddToCart
│   │       └── Reviews
│   │
│   ├── Cart
│   │   ├── CartItems
│   │   ├── CartSummary
│   │   └── CheckoutButton
│   │
│   ├── Checkout
│   │   ├── ShippingForm
│   │   ├── PaymentForm
│   │   ├── OrderReview
│   │   └── OrderConfirmation
│   │
│   └── Account
│       ├── Profile
│       ├── OrderHistory
│       └── Wishlist
│
└── Modals
    ├── AuthModal
    ├── QuickViewModal
    └── ConfirmModal
```

---

## 4. State Management Architecture

### Store Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      State Management                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   Auth Store    │  │   Cart Store    │  │  UI Store   │ │
│  │   (Zustand)     │  │   (Zustand)     │  │  (Zustand)  │ │
│  ├─────────────────┤  ├─────────────────┤  ├─────────────┤ │
│  │ user            │  │ items[]         │  │ modals{}     │ │
│  │ isAuthenticated │  │ total           │  │ toasts[]     │ │
│  │ token           │  │ itemCount       │  │ theme       │ │
│  ├─────────────────┤  ├─────────────────┤  ├─────────────┤ │
│  │ login()         │  │ addItem()       │  │ openModal() │ │
│  │ logout()        │  │ removeItem()    │  │ closeModal()│ │
│  │ register()      │  │ updateQuantity()│  │ addToast()  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │              Server State (TanStack Query)              ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  useProducts()  │  useProduct()  │  useCart()          ││
│  │  useOrders()    │  useUser()     │  useReviews()       ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Data Flow Architecture

### Data Flow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   User      │────▶│  Component  │────▶│    Store    │
│  Action     │     │   Event     │     │   Update    │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │  Re-render  │
                                        │  Components │
                                        └─────────────┘

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Server    │────▶│  API Call   │────▶│   Cache     │
│   Request   │     │  (Query)    │     │   Update    │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │  Re-render  │
                                        │  Components │
                                        └─────────────┘
```

---

## 6. API Architecture

### API Endpoints

| Endpoint | Method | Description | Auth |
|----------|--------|-------------|------|
| `/api/auth/register` | POST | User registration | No |
| `/api/auth/login` | POST | User login | No |
| `/api/auth/logout` | POST | User logout | Yes |
| `/api/auth/me` | GET | Get current user | Yes |
| `/api/products` | GET | List products | No |
| `/api/products/:id` | GET | Get product detail | No |
| `/api/products/search` | GET | Search products | No |
| `/api/cart` | GET | Get cart | Yes |
| `/api/cart/items` | POST | Add to cart | Yes |
| `/api/cart/items/:id` | DELETE | Remove from cart | Yes |
| `/api/orders` | GET | List orders | Yes |
| `/api/orders` | POST | Create order | Yes |
| `/api/orders/:id` | GET | Get order detail | Yes |
| `/api/reviews` | POST | Create review | Yes |
| `/api/reviews/product/:id` | GET | Get product reviews | No |

---

## 7. Security Architecture

### Authentication Flow

```
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│  User   │────▶│  Login  │────▶│  API    │────▶│  JWT    │
│         │     │  Form   │     │  Call   │     │  Token  │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
                                                      │
                                                      ▼
                                               ┌─────────┐
                                               │  Store  │
                                               │  Token  │
                                               └─────────┘
```

### Security Measures
1. **JWT Authentication** - Short-lived access tokens, refresh tokens
2. **HTTPS Only** - All traffic encrypted in transit
3. **CORS** - Configured for allowed origins only
4. **Rate Limiting** - 100 requests/minute per IP
5. **Input Validation** - Zod schemas for all inputs
6. **XSS Prevention** - Content Security Policy, input sanitization
7. **CSRF Protection** - CSRF tokens, SameSite cookies

---

## 8. Performance Architecture

### Performance Budget

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Time to Interactive | < 3s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Bundle Size | < 200KB | Webpack Bundle Analyzer |
| API Response Time | < 200ms | Server logs |

### Optimization Strategies
1. **Code Splitting** - Route-based and component-based
2. **Image Optimization** - WebP, lazy loading, responsive images
3. **Caching** - HTTP caching, service worker, CDN
4. **Prefetching** - Prefetch on hover, preload critical resources
5. **Tree Shaking** - Remove unused code
6. **Minification** - Minify JS, CSS, HTML

---

## 9. Deployment Architecture

### Deployment Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Vercel                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    CDN (Global)                         ││
│  └─────────────────────────────────────────────────────────┘│
│                          │                                   │
│                          ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                 Edge Functions                          ││
│  └─────────────────────────────────────────────────────────┘│
│                          │                                   │
│                          ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                 Static Assets                           ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       ││
│  │  │  HTML   │ │   CSS   │ │   JS    │ │ Images  │       ││
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 10. Technology Stack Summary

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | React | 18.x | UI framework |
| Language | TypeScript | 5.x | Type safety |
| State | Zustand | 4.x | Client state |
| Server State | TanStack Query | 5.x | Data fetching |
| Styling | Tailwind CSS | 3.x | Styling |
| Forms | React Hook Form | 7.x | Form handling |
| Validation | Zod | 3.x | Validation |
| Routing | React Router | 6.x | Routing |
| Build | Vite | 5.x | Build tool |
| Testing | Vitest | 2.x | Testing |
| Hosting | Vercel | - | Deployment |

---

**Document Control**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-08-31 | Forge Framework | Initial architecture document |
