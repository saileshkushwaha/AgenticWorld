import { cn } from '../../utils/cn'

interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  className,
}: QuantitySelectorProps) {
  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg',
  }

  const buttonClasses = {
    sm: 'w-8',
    md: 'w-10',
    lg: 'w-12',
  }

  return (
    <div className={cn('flex items-center border border-gray-300 rounded-lg overflow-hidden', className)}>
      <button
        data-testid="quantity-decrease"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className={cn(
          'flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          buttonClasses[size]
        )}
      >
        −
      </button>
      <span data-testid="quantity-value" className={cn('flex items-center justify-center font-medium text-gray-900 border-x border-gray-300', buttonClasses[size], sizeClasses[size])}>
        {value}
      </span>
      <button
        data-testid="quantity-increase"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={cn(
          'flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          buttonClasses[size]
        )}
      >
        +
      </button>
    </div>
  )
}
