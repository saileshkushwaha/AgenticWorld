import { cn } from '../../utils/cn'

interface RatingInputProps {
  value: number
  onChange?: (value: number) => void
  size?: 'sm' | 'md' | 'lg'
  readonly?: boolean
  className?: string
}

export function RatingInput({
  value,
  onChange,
  size = 'md',
  readonly = false,
  className,
}: RatingInputProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  return (
    <div className={cn('flex gap-0.5', className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && onChange?.(star)}
          disabled={readonly}
          className={cn(
            sizeClasses[size],
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110 transition-transform',
            star <= value ? 'text-yellow-400' : 'text-gray-300'
          )}
        >
          ★
        </button>
      ))}
    </div>
  )
}

interface RatingDisplayProps {
  rating: number
  reviewCount?: number
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  className?: string
}

export function RatingDisplay({
  rating,
  reviewCount,
  size = 'md',
  showCount = true,
  className,
}: RatingDisplayProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={cn(
              sizeClasses[size],
              star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
            )}
          >
            ★
          </span>
        ))}
      </div>
      <span className={cn('font-medium text-gray-900', sizeClasses[size])}>{rating.toFixed(1)}</span>
      {showCount && reviewCount !== undefined && (
        <span className={cn('text-gray-500', sizeClasses[size])}>({reviewCount} reviews)</span>
      )}
    </div>
  )
}
