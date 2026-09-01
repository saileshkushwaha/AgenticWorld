import { cn } from '../../utils/cn'

interface LoadingSkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string
  height?: string
}

export function LoadingSkeleton({
  className,
  variant = 'text',
  width,
  height,
}: LoadingSkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded'

  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'rounded-full h-10 w-10',
    rectangular: 'h-32 w-full',
  }

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={{ width, height }}
    />
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <LoadingSkeleton variant="rectangular" className="rounded-none" />
      <div className="p-4 space-y-3">
        <LoadingSkeleton className="h-3 w-1/3" />
        <LoadingSkeleton className="h-5 w-3/4" />
        <LoadingSkeleton className="h-4 w-1/2" />
        <div className="flex justify-between items-center pt-2">
          <LoadingSkeleton className="h-6 w-20" />
          <LoadingSkeleton className="h-9 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}
