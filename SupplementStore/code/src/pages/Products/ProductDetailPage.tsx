import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ShoppingCartIcon, HeartIcon, CheckIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { api } from '../../services/api'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { useWishlistStore } from '../../stores/wishlist'
import { useAuthStore } from '../../stores/auth'
import { useRecentlyViewedStore } from '../../stores/recentlyViewed'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { ImageGallery } from '../../components/ui/ImageGallery'
import { QuantitySelector } from '../../components/ui/QuantitySelector'
import { RatingDisplay } from '../../components/ui/Rating'
import { ReviewForm } from '../../components/review/ReviewForm'
import { useState, useEffect } from 'react'

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const addItem = useCartStore((state) => state.addItem)
  const addToast = useUIStore((state) => state.addToast)
  const setAuthModalOpen = useUIStore((state) => state.setAuthModalOpen)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const { addItem: addToRecentlyViewed } = useRecentlyViewedStore()
  const [quantity, setQuantity] = useState(1)
  const [showReviewForm, setShowReviewForm] = useState(false)

  useEffect(() => {
    if (product?.id) {
      addToRecentlyViewed(product.id)
    }
  }, [product?.id, addToRecentlyViewed])

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => api.products.getBySlug(slug!),
    enabled: !!slug,
  })

  const { data: reviews } = useQuery({
    queryKey: ['reviews', product?.id],
    queryFn: () => api.reviews.getByProduct(product!.id),
    enabled: !!product?.id,
  })

  const { data: relatedProducts } = useQuery({
    queryKey: ['related-products', product?.category],
    queryFn: () => api.products.getAll({ category: product?.category, limit: 4 }),
    enabled: !!product?.category,
  })

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-200 rounded-xl animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-orange-600 hover:text-orange-700">
          ← Back to Products
        </Link>
      </div>
    )
  }

  const price = product.salePrice ?? product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price
  const inWishlist = isInWishlist(product.id)
  const images = [product.imageUrl, ...(product.gallery || [])].filter(Boolean)

  const handleAddToCart = () => {
    addItem(product, quantity)
    addToast(`${product.name} (${quantity}) added to cart`, 'success')
  }

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      setAuthModalOpen(true)
      addToast('Please log in to add to wishlist', 'info')
      return
    }
    if (inWishlist) {
      removeFromWishlist(product.id)
      addToast(`${product.name} removed from wishlist`, 'info')
    } else {
      addToWishlist(product)
      addToast(`${product.name} added to wishlist`, 'success')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
        className="mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageGallery images={images} alt={product.name} />

        <div>
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

          <RatingDisplay rating={product.rating} reviewCount={product.reviewCount} className="mb-4" />

          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="ml-3 text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
            )}
            {hasDiscount && (
              <Badge variant="error" className="ml-3">
                Save ${(product.price - price).toFixed(2)}
              </Badge>
            )}
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {product.certifications && product.certifications.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <Badge key={cert} variant="success">
                    <CheckIcon className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {product.dosage && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-1">Recommended Dosage</h3>
              <p className="text-gray-600">{product.dosage}</p>
            </div>
          )}

          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <QuantitySelector value={quantity} onChange={setQuantity} min={1} max={product.stock} />
          </div>

          <div className="flex gap-4">
            <Button onClick={handleAddToCart} className="flex-1" disabled={product.stock === 0}>
              <ShoppingCartIcon className="w-5 h-5 mr-2" />
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
            <Button variant="outline" onClick={handleWishlistToggle} className="px-4">
              {inWishlist ? (
                <HeartIcon className="w-5 h-5 text-red-500" />
              ) : (
                <HeartOutline className="w-5 h-5" />
              )}
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            {product.stock > 0 ? (
              <span className="text-green-600">{product.stock} in stock</span>
            ) : (
              <span className="text-red-600">Out of stock</span>
            )}
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold mb-4">Ingredients</h2>
          <p className="text-gray-600">{product.ingredients}</p>
        </div>
        {product.nutrition && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold mb-4">Nutrition Facts</h2>
            <div className="space-y-2 text-gray-600">
              {product.nutrition.servingSize && <p>Serving Size: {product.nutrition.servingSize}</p>}
              {product.nutrition.calories && <p>Calories: {product.nutrition.calories}</p>}
              {product.nutrition.protein && <p>Protein: {product.nutrition.protein}g</p>}
              {product.nutrition.carbs && <p>Carbs: {product.nutrition.carbs}g</p>}
              {product.nutrition.fat && <p>Fat: {product.nutrition.fat}g</p>}
            </div>
          </div>
        )}
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Customer Reviews</h2>
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="text-sm text-orange-600 hover:text-orange-700 font-medium"
          >
            {showReviewForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>
        {showReviewForm && <ReviewForm productId={product.id} onSuccess={() => setShowReviewForm(false)} />}
        {reviews && reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <RatingDisplay rating={review.rating} showCount={false} size="sm" />
                    {review.isVerified && (
                      <Badge variant="success" className="ml-2">Verified Purchase</Badge>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="font-medium mb-1">{review.title}</h3>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-2">by {review.user.firstName} {review.user.lastName[0]}.</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts && relatedProducts.data.length > 0 && (
        <div className="mt-12">
          <h2 className="text-lg font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.data
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} to={`/products/${p.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-100">
                      <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500">{p.brand}</p>
                      <h3 className="font-medium text-gray-900 truncate">{p.name}</h3>
                      <p className="text-orange-600 font-bold mt-1">${(p.salePrice ?? p.price).toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
