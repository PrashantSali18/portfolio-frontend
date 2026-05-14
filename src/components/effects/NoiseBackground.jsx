/** Decorative radial gradient mesh orbs — used in hero + sections */
export default function NoiseBackground({ orbs = [] }) {
  const defaults = [
    { w: 600, h: 600, color: 'var(--color-accent)', top: '-100px', left: '-200px', opacity: 0.1 },
    { w: 450, h: 450, color: 'var(--color-cyan)',   top: '40%',    right: '-80px', opacity: 0.08 },
    { w: 300, h: 300, color: 'var(--color-violet)', bottom: '0',   left: '35%',    opacity: 0.08 },
  ]

  const list = orbs.length ? orbs : defaults

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {list.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.w,
            height: orb.h,
            background: orb.color,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: orb.opacity ?? 0.1,
            filter: `blur(${orb.blur ?? 90}px)`,
          }}
        />
      ))}
    </div>
  )
}
