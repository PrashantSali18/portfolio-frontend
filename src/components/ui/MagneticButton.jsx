import { useMagneticEffect } from '@/hooks/useMagneticEffect'
import Button from './Button'

/**
 * A Button that magnetically follows the cursor on hover.
 * Accepts all Button props.
 */
export default function MagneticButton({ strength = 0.3, ...props }) {
  const { ref, onMouseMove, onMouseLeave } = useMagneticEffect(strength)

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-block"
    >
      <Button {...props} />
    </div>
  )
}
