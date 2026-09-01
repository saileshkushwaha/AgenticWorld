import { Link } from 'react-router-dom'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { Product } from '../../types'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { useWishlistStore } from '../../stores/wishlist'
import { useAuthStore } from '../../stores/auth'
import { Badge } from '../ui/Badge'
import { RatingDisplay } from '../ui/Rating'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const addToast = useUIStore((state) => state.addToast)
  const setAuthModalOpen = useUIStore((state) => state.setAuthModalOpen)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    addToast(`${product.name} added to cart`, 'success')
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isAuthenticated) {
      setAuthModalOpen(true)
      addToast('Please log in to add to wishlist', 'info')
      return
    }
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      addToast(`${product.name} removed from wishlist`, 'info')
    } else {
      addToWishlist(product)
      addToast(`${product.name} added to wishlist`, 'success')
    }
  }

  const price = product.salePrice ?? product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price
  const inWishlist = isInWishlist(product.id)

  return (
    <Link to={`/products/${product.slug}`} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 block">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {hasDiscount && (
          <Badge variant="error" className="absolute top-3 left-3 shadow-sm">
            Sale
          </Badge>
        )}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-sm ${
            inWishlist ? 'bg-red-50 text-red-500' : 'bg-white/90 text-gray-400 hover:text-red-500 hover:bg-white'
          }`}
        >
          {inWishlist ? (
            <HeartSolid className="w-4 h-4" />
          ) : (
            <HeartIcon className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-orange-600 mb-1 uppercase tracking-wide">{product.brand}</p>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-snug">{product.name}</h3>
        <RatingDisplay rating={product.rating} reviewCount={product.reviewCount} size="sm" className="mb-3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors shadow-sm hover:shadow-md"
          >
            <ShoppingCartIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  )
}
