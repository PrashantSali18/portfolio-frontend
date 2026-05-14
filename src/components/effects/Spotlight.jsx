import { useEffect } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function Spotlight() {
  const { xPercent, yPercent } = useMousePosition()

  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', `${xPercent}%`)
    document.documentElement.style.setProperty('--mouse-y', `${yPercent}%`)
  }, [xPercent, yPercent])

  return <div className="spotlight-overlay" aria-hidden />
}
