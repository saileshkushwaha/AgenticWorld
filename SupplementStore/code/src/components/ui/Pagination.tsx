import { cn } from '../../utils/cn'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null

  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <nav className={cn('flex items-center justify-center gap-1', className)}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed">
        Previous
      </button>
      {getVisiblePages().map((page, index) =>
        typeof page === 'string' ? (
          <span key={`ellipsis-${index}`} className="px-2 text-secondary">...</span>
        ) : (
          <button key={page} onClick={() => onPageChange(page)}
            className={cn('w-10 h-10 rounded-lg text-sm font-medium transition-colors',
              currentPage === page ? 'bg-primary text-white' : 'text-secondary hover:bg-surface'
            )}>
            {page}
          </button>
        )
      )}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </nav>
  )
}
