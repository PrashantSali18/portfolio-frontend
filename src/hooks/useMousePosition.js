import { useState, useEffect } from "react";

/**
 * Returns the current mouse position as { x, y } in pixels.
 * Also exposes { xPercent, yPercent } as 0–100 values relative to viewport.
 */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0, xPercent: 50, yPercent: 50 });

  useEffect(() => {
    const onMove = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
        xPercent: (e.clientX / window.innerWidth) * 100,
        yPercent: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return pos;
}
