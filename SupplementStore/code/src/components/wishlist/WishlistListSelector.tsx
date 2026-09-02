import { useState } from 'react'
import { useWishlistStore } from '../../stores/wishlist'
import { useUIStore } from '../../stores/ui'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { cn } from '../../utils/cn'

interface WishlistListSelectorProps {
  className?: string
}

export function WishlistListSelector({ className }: WishlistListSelectorProps) {
  const { lists, activeListId, createList, deleteList, setActiveList, getItemCount } = useWishlistStore()
  const addToast = useUIStore((state) => state.addToast)
  const [isCreating, setIsCreating] = useState(false)
  const [newListName, setNewListName] = useState('')

  const handleCreateList = () => {
    if (!newListName.trim()) return
    createList(newListName.trim())
    setNewListName('')
    setIsCreating(false)
    addToast('Wishlist list created', 'success')
  }

  const handleDeleteList = (listId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (lists.length <= 1) {
      addToast('Cannot delete the only wishlist list', 'error')
      return
    }
    deleteList(listId)
    addToast('Wishlist list deleted', 'info')
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-default">Your Wishlists</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsCreating(!isCreating)}
        >
          {isCreating ? 'Cancel' : '+ New List'}
        </Button>
      </div>

      {isCreating && (
        <div className="flex gap-2">
          <Input
            placeholder="Enter list name..."
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreateList()}
            className="flex-1"
          />
          <Button onClick={handleCreateList}>Create</Button>
        </div>
      )}

      <div className="space-y-2">
        {lists.map((list) => (
          <button
            key={list.id}
            onClick={() => setActiveList(list.id)}
            className={cn(
              'w-full text-left p-3 rounded-lg border transition-all',
              activeListId === list.id
                ? 'border-primary bg-primary/10'
                : 'border-default hover:bg-surface'
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-default">{list.name}</h4>
                <p className="text-sm text-secondary">
                  {getItemCount(list.id)} items • Created {new Date(list.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {list.isPublic && (
                  <Badge variant="info" size="sm">Public</Badge>
                )}
                {lists.length > 1 && (
                  <button
                    onClick={(e) => handleDeleteList(list.id, e)}
                    className="text-error hover:text-error/80 p-1"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
