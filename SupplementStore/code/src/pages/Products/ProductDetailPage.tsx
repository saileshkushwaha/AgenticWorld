import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ShoppingCartIcon, StarIcon, CheckIcon } from '@heroicons/react/24/solid'
import { api } from '../../services/api'
import { useCartStore } from '../../stores/cart'
import { useUIStore } from '../../stores/ui'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const addItem = useCartStore((state) => state.addItem)
  const addToast = useUIStore((state) => state.addToast)

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

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-200 rounded-lg" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-6 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary-600 hover:text-primary-700">
          ← Back to Products
        </Link>
      </div>
    )
  }

  const price = product.salePrice ?? product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price

  const handleAddToCart = () => {
    addItem(product)
    addToast(`${product.name} added to cart`, 'success')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-primary-600">Products</Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
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

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Certifications */}
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

          {/* Dosage */}
          {product.dosage && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-1">Recommended Dosage</h3>
              <p className="text-gray-600">{product.dosage}</p>
            </div>
          )}

          {/* Add to Cart */}
          <div className="flex gap-4">
            <Button onClick={handleAddToCart} className="flex-1">
              <ShoppingCartIcon className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Stock */}
          <p className="mt-4 text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </p>
        </div>
      </div>

      {/* Ingredients & Nutrition */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-lg font-bold mb-4">Ingredients</h2>
          <p className="text-gray-600">{product.ingredients}</p>
        </div>
        {product.nutrition && (
          <div className="card p-6">
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

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-lg font-bold mb-4">Customer Reviews</h2>
        {reviews && reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="card p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
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
    </div>
  )
}
