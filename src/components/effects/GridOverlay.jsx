import { cn } from "@/utils/cn";

/** Subtle dot/line grid background overlay */
export default function GridOverlay({ className }) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `
          linear-gradient(rgba(124,92,252,0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,92,252,0.055) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
