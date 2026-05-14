import { cn } from '@/utils/cn'

/**
 * Reusable Button component.
 *
 * variants: 'primary' | 'outline' | 'ghost'
 * sizes:    'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  external,
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95'

  const variants = {
    primary: 'btn-gradient text-white glow-hover',
    outline: 'border border-border text-text glass hover:border-accent/50 hover:text-accent',
    ghost:   'text-muted hover:text-text hover:bg-white/[0.05]',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3.5',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
