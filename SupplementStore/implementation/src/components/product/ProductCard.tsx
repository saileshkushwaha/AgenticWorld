import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Product } from '../../types'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const addToast = useUIStore((state) => state.addToast)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    addToast(`${product.name} added to cart`, 'success')
  }

  const price = product.salePrice ?? product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price

  return (
    <Link to={`/products/${product.slug}`} className="card group hover:shadow-md transition-shadow">
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
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
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
