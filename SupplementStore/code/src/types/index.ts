export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  salePrice?: number
  imageUrl: string
  gallery?: string[]
  brand: string
  category: Category
  ingredients: string
  nutrition?: Nutrition
  dosage?: string
  certifications?: string[]
  stock: number
  rating: number
  reviewCount: number
  isActive: boolean
  createdAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  imageUrl?: string
  parentId?: string
}

export interface Nutrition {
  protein?: number
  carbs?: number
  fat?: number
  calories?: number
  servingSize?: string
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface Order {
  id: string
  userId: string
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  trackingNumber?: string
  createdAt: string
}

export interface OrderItem {
  id: string
  productId: string
  product: Product
  quantity: number
  price: number
}

export interface Address {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

export interface Review {
  id: string
  userId: string
  user: User
  productId: string
  rating: number
  title: string
  comment: string
  isVerified: boolean
  createdAt: string
}

export interface WishlistItem {
  id: string
  product: Product
  createdAt: string
}

export interface ProductFilters {
  category?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  search?: string
  sort?: 'price' | 'rating' | 'created'
  order?: 'asc' | 'desc'
  page?: number
  limit?: number
}
