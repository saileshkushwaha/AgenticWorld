import { useState } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Product } from '../../types'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { RatingDisplay } from '../ui/Rating'
import { QuantitySelector } from '../ui/QuantitySelector'
import { Badge } from '../ui/Badge'

interface QuickViewModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const addToast = useUIStore((state) => state.addToast)

  if (!isOpen || !product) return null

  const price = product.salePrice ?? product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price

  const handleAddToCart = () => {
    addItem(product, quantity)
    addToast(`${product.name} added to cart`, 'success')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-secondary hover:text-default hover:bg-background rounded-full transition-colors z-10"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="aspect-square rounded-xl overflow-hidden bg-background">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-wide">{product.brand}</p>
            <h2 className="text-xl font-bold text-default mt-1">{product.name}</h2>
            <RatingDisplay rating={product.rating} reviewCount={product.reviewCount} className="mt-2" />

            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold text-default">${price.toFixed(2)}</span>
              {hasDiscount && <span className="ml-3 text-lg text-secondary line-through">${product.price.toFixed(2)}</span>}
              {hasDiscount && <Badge variant="error" className="ml-3">Save ${(product.price - price).toFixed(2)}</Badge>}
            </div>

            <p className="text-secondary text-sm mt-4 line-clamp-3">{product.description}</p>

            <div className="mt-4">
              <span className="text-sm font-medium text-default">Quantity:</span>
              <QuantitySelector value={quantity} onChange={setQuantity} min={1} max={product.stock} className="mt-2" />
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={handleAddToCart} disabled={product.stock === 0} className="flex-1 py-3 btn-primary">
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>

            <Link to={`/products/${product.slug}`} onClick={onClose} className="block text-center mt-3 text-sm text-primary hover:opacity-80 font-medium">
              View Full Details →
            </Link>

            <p className="mt-4 text-sm">
              {product.stock > 0 ? (
                <span className="text-green-500">{product.stock} in stock</span>
              ) : (
                <span className="text-red-500">Out of stock</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
