import { cn } from "@/utils/cn";

const colorMap = {
  accent: "border-accent/25 bg-accent/08 text-violet",
  cyan: "border-cyan/25 bg-cyan/06 text-cyan",
  violet: "border-violet/25 bg-violet/06 text-violet",
};

export default function SkillBadge({ label, color = "accent", className }) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] px-3 py-1 rounded-xl border transition-colors duration-200 hover:border-accent/40",
        "bg-white/[0.04] border-white/[0.07] text-muted",
        className,
      )}
    >
      {label}
    </span>
  );
}
