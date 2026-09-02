import { cn } from '../../utils/cn'

interface EmptyStateProps {
  icon?: string
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function EmptyState({ icon = '📦', title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('text-center py-12 px-4', className)}>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-default mb-2">{title}</h3>
      {description && <p className="text-secondary mb-6 max-w-md mx-auto">{description}</p>}
      {action && (
        <button onClick={action.onClick} className="px-6 py-2.5 btn-primary">
          {action.label}
        </button>
      )}
    </div>
  )
}
