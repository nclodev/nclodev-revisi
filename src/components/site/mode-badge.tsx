import { cn } from "@/lib/cn";
import type { Mode } from "@/lib/collections";

export function ModeBadge({ mode, className }: { mode: Mode; className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      {mode}
    </span>
  );
}
