import { cn } from "@/utils/cn";

/**
 * Centered content container with consistent max-width and padding.
 *
 * sizes: 'sm' (640) | 'md' (768) | 'lg' (1024) | 'xl' (1152, default) | 'full'
 */
export default function Container({ children, size = "xl", className }) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-full",
  };

  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
