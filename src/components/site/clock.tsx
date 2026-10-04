import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

function formatWita(d: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: SITE.tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(d);
}

export function WitaClock({ className }: { className?: string }) {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => setTime(formatWita(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "font-mono text-[11px] tabular-nums tracking-[0.14em] text-muted-foreground",
        className,
      )}
    >
      {time} WITA
    </span>
  );
}
