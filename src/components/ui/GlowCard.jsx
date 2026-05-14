import { cn } from '@/utils/cn'

/**
 * Glassmorphism card with hover glow border.
 * Wrap any content in this for the standard card style.
 */
export default function GlowCard({ children, className, hover = true }) {
  return (
    <div
      className={cn(
        'glass rounded-2xl',
        hover && 'transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(124,92,252,0.12)]',
        className
      )}
    >
      {children}
    </div>
  )
}
