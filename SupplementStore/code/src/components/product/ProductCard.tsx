import { Link } from 'react-router-dom'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { Product } from '../../types'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { useWishlistStore } from '../../stores/wishlist'
import { useAuthStore } from '../../stores/auth'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
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
    addItem(product)
    addToast(`${product.name} added to cart`, 'success')
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
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
    <Link to={`/products/${product.slug}`} className="card group hover:shadow-md transition-shadow relative">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hasDiscount && (
          <Badge variant="error" className="absolute top-2 left-2">
            Sale
          </Badge>
        )}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          {inWishlist ? (
            <HeartSolid className="w-4 h-4 text-red-500" />
          ) : (
            <HeartIcon className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <RatingDisplay rating={product.rating} reviewCount={product.reviewCount} size="sm" className="mb-2" />
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCartIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Link>
  )
}
