import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { WitaClock } from "@/components/site/clock";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-baseline gap-2 text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="font-mono text-sm tracking-tight">{SITE.mark}</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-150 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <WitaClock className="hidden lg:inline" />
          <Button asChild size="sm">
            <Link to="/create" onClick={() => setOpen(false)}>
              Buat Situs
              <span className="hidden pl-0.5 sm:inline" aria-hidden>
                →
              </span>
            </Link>
          </Button>
          <button
            type="button"
            className="relative inline-flex size-11 items-center justify-center text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 z-40 bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex h-full flex-col px-6 py-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-3xl font-semibold tracking-tight"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/create"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Buat Situs
          </Link>
          <p className="mt-auto font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
            {SITE.city}
          </p>
        </nav>
      </div>
    </header>
  );
}
