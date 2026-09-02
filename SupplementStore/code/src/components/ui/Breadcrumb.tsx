import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn('flex items-center gap-2 text-sm text-secondary', className)}>
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <span className="text-default">/</span>
          {item.href ? (
            <Link to={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
          ) : (
            <span className="text-default font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
