import { clsx } from 'clsx'

/**
 * Merge Tailwind classes safely.
 * Usage: cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...inputs) {
  return clsx(inputs)
}
