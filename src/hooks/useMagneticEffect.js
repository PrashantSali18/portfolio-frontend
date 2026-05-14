import { useRef, useCallback } from 'react'

/**
 * Makes a button/element magnetically attracted to the cursor.
 * Returns { ref, onMouseMove, onMouseLeave } — spread onto the element.
 *
 * @param {number} strength - how strong the pull is (default 0.35)
 */
export function useMagneticEffect(strength = 0.35) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    el.style.transform = `translate(${dx}px, ${dy}px)`
    el.style.transition = 'transform 0.15s ease'
  }, [strength])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
