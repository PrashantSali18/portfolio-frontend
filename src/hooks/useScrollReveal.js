import { useEffect, useRef } from "react";

/**
 * Adds .visible class when element enters viewport.
 * Pair with the .reveal CSS class in animations.css.
 *
 * @param {number} threshold - 0–1, how much of element must be visible
 * @param {string} rootMargin - IntersectionObserver rootMargin
 */
export function useScrollReveal(threshold = 0.12, rootMargin = "-60px") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
