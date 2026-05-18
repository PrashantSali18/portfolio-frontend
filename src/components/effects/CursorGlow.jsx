import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    // Hide on mobile
    if (window.innerWidth < 768) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 19}px, ${ring.current.y - 19}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (!ringRef.current || !dotRef.current) return;
      ringRef.current.style.width = "60px";
      ringRef.current.style.height = "60px";
      ringRef.current.style.borderColor = "rgba(124,92,252,0.7)";
      dotRef.current.style.opacity = "0.5";
    };
    const onLeave = () => {
      if (!ringRef.current || !dotRef.current) return;
      ringRef.current.style.width = "38px";
      ringRef.current.style.height = "38px";
      ringRef.current.style.borderColor = "rgba(124,92,252,0.45)";
      dotRef.current.style.opacity = "1";
    };

    const bindHoverables = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(animate);
    bindHoverables();

    const observer = new MutationObserver(bindHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
