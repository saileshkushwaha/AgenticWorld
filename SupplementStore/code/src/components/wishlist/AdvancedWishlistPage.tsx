import { useState } from 'react'
import { useWishlistStore } from '../../stores/wishlist'
import { useUIStore } from '../../stores/ui'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { cn } from '../../utils/cn'
import { HeartIcon, XMarkIcon, PlusIcon, ListBulletIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface AdvancedWishlistPageProps {
  className?: string
}

export function AdvancedWishlistPage({ className }: AdvancedWishlistPageProps) {
  const { lists, activeListId, setActiveList, getItems, getItemCount, searchItems, filterItems } = useWishlistStore()
  const addToast = useUIStore((state) => state.addToast)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    tags: [] as string[],
    priority: [] as ('low' | 'medium' | 'high')[],
    priceRange: { min: 0, max: 1000 },
    hasNotes: false,
  })
  
  const activeList = activeListId ? lists.find((list) => list.id === activeListId) : null
  const items = activeListId ? getItems(activeListId) : []
  const filteredItems = searchQuery 
    ? searchItems(activeListId || '', searchQuery)
    : filterItems(activeListId || '', filters)
  
  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }
  
  return (
    <div className={cn('space-y-6', className)}>
      {/* Header with list selector and controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-default">My Wishlists</h1>
          <p className="text-secondary">Manage and organize your product collections</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              'p-2 rounded-lg border transition-colors',
              showFilters ? 'bg-surface border-primary text-primary' : 'border-default hover:bg-surface'
            )}
          >
            <ListBulletIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* List selector */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {lists.map((list) => (
          <button
            key={list.id}
            onClick={() => setActiveList(list.id)}
            className={cn(
              'flex-shrink-0 px-4 py-2 rounded-lg border transition-all whitespace-nowrap',
              activeListId === list.id
                ? 'bg-primary text-white border-primary'
                : 'bg-surface border-default hover:border-primary/50'
            )}
          >
            <div className="flex items-center gap-2">
              <span>{list.name}</span>
              <Badge variant="default" size="sm" className="bg-white/20">
                {getItemCount(list.id)}
              </Badge>
            </div>
          </button>
        ))}
        <button className="flex-shrink-0 px-4 py-2 rounded-lg border border-dashed border-default hover:border-primary/50 transition-colors">
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
      
      {/* Search and filters */}
      {showFilters && (
        <div className="bg-surface rounded-lg p-4 border border-default space-y-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-default rounded-lg focus:border-primary focus:outline-none"
              />
            </div>
            <button
              onClick={() => setFilters({ ...filters, hasNotes: !filters.hasNotes })}
              className={cn(
                'px-4 py-2 rounded-lg border transition-colors',
                filters.hasNotes ? 'bg-primary text-white border-primary' : 'border-default hover:bg-surface'
              )}
            >
              Notes Only
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tags filter */}
            <div>
              <label className="block text-sm font-medium text-default mb-2">Tags</label>
              <select
                multiple
                value={filters.tags}
                onChange={(e) => setFilters({ ...filters, tags: Array.from(e.target.selectedOptions, option => option.value) })}
                className="w-full px-3 py-2 border border-default rounded-lg text-sm"
              >
                <option value="gift">Gift</option>
                <option value="birthday">Birthday</option>
                <option value="holiday">Holiday</option>
                <option value="budget">Budget</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            
            {/* Priority filter */}
            <div>
              <label className="block text-sm font-medium text-default mb-2">Priority</label>
              <select
                multiple
                value={filters.priority}
                onChange={(e) => setFilters({ ...filters, priority: Array.from(e.target.selectedOptions, option => option.value as ('low' | 'medium' | 'high')) })}
                className="w-full px-3 py-2 border border-default rounded-lg text-sm"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            
            {/* Price range */}
            <div>
              <label className="block text-sm font-medium text-default mb-2">Price Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange.min}
                  onChange={(e) => setFilters({ ...filters, priceRange: { ...filters.priceRange, min: Number(e.target.value) } })}
                  className="w-20 px-2 py-2 border border-default rounded-lg text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange.max}
                  onChange={(e) => setFilters({ ...filters, priceRange: { ...filters.priceRange, max: Number(e.target.value) } })}
                  className="w-20 px-2 py-2 border border-default rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
          
          {(searchQuery || filters.tags.length || filters.priority.length || filters.hasNotes) && (
            <div className="flex gap-2">
              <button
                onClick={() => { setSearchQuery(''); setFilters({ tags: [], priority: [], hasNotes: false, priceRange: { min: 0, max: 1000 } }) }}
                className="text-sm text-primary hover:text-primary/80"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="card overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-surface relative">
              <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
              
              {/* Priority indicator */}
              {item.priority && (
                <div className="absolute top-2 left-2">
                  <Badge 
                    variant={item.priority === 'high' ? 'error' : item.priority === 'medium' ? 'warning' : 'default'}
                    size="sm"
                  >
                    {item.priority}
                  </Badge>
                </div>
              )}
              
              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="absolute bottom-2 left-2 flex gap-1">
                  {item.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="info" size="sm">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 2 && (
                    <Badge variant="default" size="sm">
                      +{item.tags.length - 2}
                    </Badge>
                  )}
                </div>
              )}
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-default text-sm mb-1 line-clamp-1">{item.product.name}</h3>
              <p className="text-xs text-secondary mb-2">{item.product.brand}</p>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-primary">
                  ${(item.product.salePrice ?? item.product.price).toFixed(2)}
                </span>
                {item.product.salePrice && item.product.salePrice < item.product.price && (
                  <span className="text-xs text-secondary line-through">
                    ${item.product.price.toFixed(2)}
                  </span>
                )}
              </div>
              
              {item.notes && (
                <div className="mb-2 p-2 bg-yellow-50 rounded text-xs text-yellow-800">
                  <strong>Note:</strong> {item.notes}
                </div>
              )}
              
              <div className="flex gap-1 mt-2">
                <button className="flex-1 px-2 py-1 bg-primary text-white rounded text-xs hover:bg-primary/90">
                  Add to Cart
                </button>
                <button className="px-2 py-1 border border-default rounded text-xs hover:bg-surface">
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <HeartIcon className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-medium text-default mb-2">No items found</h3>
          <p className="text-secondary">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
