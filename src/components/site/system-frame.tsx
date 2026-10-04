import { cn } from "@/lib/cn";
import type { Collection } from "@/lib/collections";

export function SystemFrame({
  collection,
  className,
}: {
  collection: Collection;
  className?: string;
}) {
  const line = `${collection.fg}22`;
  return (
    <div
      className={cn("overflow-hidden rounded-[var(--radius-lg)]", className)}
      style={{ background: collection.bg, color: collection.fg }}
    >
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ boxShadow: `0 1px 0 ${line}` }}
      >
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-70">
          {collection.letter}. {collection.theme}
        </span>
        <span
          className="size-1.5 rounded-full"
          style={{ background: collection.accent }}
        />
      </div>
      <div className="px-4 py-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-50">
          {collection.industry}
        </p>
        <p className="font-display mt-2 text-2xl font-semibold tracking-tight">
          {collection.theme}
        </p>
        <p className="mt-2 max-w-[28ch] text-xs leading-relaxed opacity-70">
          {collection.tagline}
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-14 rounded-[var(--radius-sm)]"
              style={{
                background: i === 1 ? collection.accent : `${collection.fg}14`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
